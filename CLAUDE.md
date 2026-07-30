# CLAUDE.md

Single-page personal portfolio for Osvaldo Pineda (Senior Fullstack Engineer). Static SPA, no backend. Trilingual (EN/ES/FR), accessibility-audited (axe-core clean, WCAG 2.1 AA).

## Stack
- **React 18** + **TypeScript** (strict), built with **Vite 5**.
- **Tailwind CSS 3** (PostCSS + autoprefixer) for all styling.
- **framer-motion** for scroll/entrance animation, **lucide-react** for icons.
- Deployed as a static site to **Cloudflare Pages** (project `pineda-portfolio`).

## Commands
- `npm run dev` — Vite dev server on **port 5175** (not the default 5173; set in `vite.config.ts`).
- `npm run build` — `tsc` typecheck (no emit) then `vite build` → `dist/`. Build fails on TS errors.
- `npm run preview` — serve the production build locally.
- `npm run deploy` — builds, then `wrangler pages deploy dist --project-name pineda-portfolio`.
- No test runner is configured. The a11y audit is an ad-hoc axe-core + Playwright script (see Accessibility).

## Structure
- `src/main.tsx` — entry, mounts `<App/>`, imports `index.css`.
- `src/App.tsx` — composes the page, wrapped in `<I18nProvider>` → `<MotionConfig reducedMotion="user">` → `.grain`: Nav → `<main id="main">`( Hero → Experience → HowIWork → Skills → Projects → OffTheClock → Contact ).
- `src/components/` — one component per section, all default exports. Shared primitives: `Reveal.tsx` (framer-motion blur-in scroll reveal: `blur(3px)`→0 + opacity over **0.45s** on the strong ease-out `[0.23, 1, 0.32, 1]`; **no `delay` prop** — it wraps tall rows that cross the viewport one at a time, so a per-index stagger only added latency; under reduced motion it keeps a 0.2s fade and drops the blur — pass `className` to control the wrapper so it can stay a valid DOM child, e.g. a direct `<dl>` child), `SectionTitle.tsx` (editorial serif heading) and `Marquee.tsx` (hero credibility ribbon).
- **i18n — `src/i18n/`** is the content layer (custom, no library):
  - `types.ts` — `Locale` (`en|es|fr`), `LOCALES`, and all content interfaces (`CVData`, `UIStrings`, `Heading`, `Opinion`, `LocaleBundle`, etc.).
  - `en.ts` / `es.ts` / `fr.ts` — one `LocaleBundle` each = `{ cv, ui }`. **All copy lives here**, both UI chrome and CV content. EN is the source of truth; ES is final; **FR is pending Osvaldo's native validation before sending to recruiters**.
  - `context.tsx` — `I18nProvider` + `useI18n()` → `{ locale, setLocale, cv, ui }`. Detects locale from `localStorage('locale')` then `navigator.language`, persists to localStorage, syncs `document.documentElement.lang`.
- `src/data/cv.ts` — now only `PROFILE` (locale-independent: name, email, github, linkedin, cv path) + re-exports content types from `i18n/types`. **Localized content is NOT here anymore — edit the locale bundles.**
- `src/index.css` — Tailwind layers, font `@import`, design tokens, `.grain`, `:focus-visible` ring, view-transition + reduced-motion rules.
- `public/osvaldo-pineda-cv.pdf` — CV, linked via `PROFILE.cv` (`/osvaldo-pineda-cv.pdf`). Favicons (`favicon*.png`, `apple-touch-icon.png`), the social card `og.png` (1200×630, referenced from `index.html` meta tags) and project card screenshots (`projects/*.jpg`, referenced from the locale bundles' `Project.image`) also live in `public/`.

## Conventions
- **Content edits go in `src/i18n/{en,es,fr}.ts`** — components read everything through `useI18n()`. Adding a UI string means: update `UIStrings` in `types.ts` AND all three bundles (TS build enforces this).
- Design tokens (CSS vars in `index.css`, `:root` light / `.dark`, exposed in `tailwind.config.js`): `paper`, `raised`, `ink`, `muted`, `accent` (**olive/sage** brand — `#586440` light / `#93A56E` dark), `clay` (**stone brown** editorial accent — warm secondary), `line`. `slab`/`slab-ink`/`slab-muted` are **constant** (theme-independent) for the dark contrast band (HowIWork/Approach). Fonts: `serif`=**Fraunces** (variable; `opsz`/`wght` driven live by the cursor in `VariableName`, plus **`font-variation-settings: 'SOFT' 40, 'WONK' 1`** on `.serif` — the WONK axis swaps in the alternate single-storey `g` and swashed `b`/`y`, so it does not render in the default Fraunces shape; **do not drop these axes**, they are what keeps the display type off the stock AI-editorial look), `sans`=**Geist** (body; replaced Inter, which reads as the default sans of generated UI), `mono`=**JetBrains Mono** (years/labels, used sparingly). Use tokens, not raw hex/px. Light `muted`/`accent` are tuned for AA contrast on paper — don't lighten them.
- Editorial rules: **no** numbered section markers, **no** uppercase tracked eyebrow above sections, **no** identical card grids, **no** hero stats-grid, **no scroll cue** (removed 2026-07-30 — "you know what scroll is", and its delayed fade was what tripped the axe contrast check), **no em dashes in copy** (they read as generated text; use commas, periods or parentheses). The hero opens straight on the name (no eyebrow); the "currently building" availability line lives in the contact footer.
- **Section shape must vary.** Experience and Projects are hairline-divided rows; `Skills` deliberately is **not** (asymmetric 7/5 + 5/7 bento, two cells on `raised`, no per-row rules). Three sections sharing one skeleton is what made the page feel templated. Don't normalise Skills back into a row list. Warmth comes from serif type + clay accent + the dark slab band. Paper grain via `.grain`.
- "Tasteful magic" (all reduced-motion-safe): `VariableName.tsx` (hero name letters react to cursor proximity via Fraunces opsz/wght, direct DOM mutation + rAF), `ThemeToggle.tsx` (View Transitions API circular reveal), Skills spotlight (hover dims siblings).
- Section anchors used by the nav: `#top`, `#work`, `#approach`, `#skills`, `#projects`, `#contact`. The skip-link targets `#main`.
- TS is strict with `noUnusedLocals`/`noUnusedParameters` — unused vars break the build.

## Accessibility (WCAG 2.1 AA — keep it green)
- Audited with **axe-core via Playwright** across EN/ES/FR × light/dark = 0 violations (last verified **2026-07-30**). Re-run after layout/color changes (ad-hoc script lives outside the repo in `~/.pw-shot/`; needs Chromium, not Chrome).
- ⚠️ **`<MotionConfig reducedMotion="user">` does NOT gate `opacity` or `filter`** — framer-motion only neutralises transform and layout animations. Any component with its own entrance animation must call `useReducedMotion()` itself. `Hero.tsx` didn't, and animated a 950ms blur on 11rem type for reduced-motion users while also holding the scroll cue below AA contrast long enough for axe to catch it. Both fixed; don't reintroduce a bare `motion.*` entrance without the hook.
- Invariants to preserve: AA text contrast on paper (the tuned `muted`/`accent` tokens), the global `:focus-visible` ring, the translated skip-link in `Nav.tsx`, `aria-label` on icon-only controls, `aria-pressed` + non-color (underline) active state on the language/theme toggles, `aria-current="location"` + underline (never color alone) on the nav scroll-spy, and `prefers-reduced-motion` paths in `Hero`/`Reveal`/`VariableName`/`ThemeToggle`.
- `hoverOnlyWhenSupported: true` in `tailwind.config.js` gates every `hover:` utility behind `@media (hover: hover)`, so taps on touch don't leave hover states stuck. Keep it on.
- Decorative-only effects stay out of the tab order: the Skills spotlight spans are **not** focusable (34 extra tab stops would cost more than the emphasis is worth). Decorative letters in `VariableName` are `aria-hidden` with an `sr-only` accessible label — don't put `aria-label` on a bare `<span>`.

## Gotchas
- Fonts load from Google Fonts via `@import` in `index.css` (network dependency at runtime).
- There is **no `wrangler.toml`** — Cloudflare Pages config is passed entirely via the `deploy` script flags. `.wrangler/` is local cache only.
- `dist/` and `.wrangler/` are gitignored build artifacts; never edit by hand.
