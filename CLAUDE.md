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
- `src/components/` — one component per section, all default exports. Shared primitives: `Reveal.tsx` (framer-motion blur-in scroll reveal, ease-out-cubic, reduced-motion-safe — pass `className` to control the wrapper so it can stay a valid DOM child, e.g. a direct `<dl>` child), `SectionTitle.tsx` (editorial serif heading) and `Marquee.tsx` (hero credibility ribbon).
- **i18n — `src/i18n/`** is the content layer (custom, no library):
  - `types.ts` — `Locale` (`en|es|fr`), `LOCALES`, and all content interfaces (`CVData`, `UIStrings`, `Heading`, `Opinion`, `LocaleBundle`, etc.).
  - `en.ts` / `es.ts` / `fr.ts` — one `LocaleBundle` each = `{ cv, ui }`. **All copy lives here**, both UI chrome and CV content. EN is the source of truth; ES is final; **FR is pending Osvaldo's native validation before sending to recruiters**.
  - `context.tsx` — `I18nProvider` + `useI18n()` → `{ locale, setLocale, cv, ui }`. Detects locale from `localStorage('locale')` then `navigator.language`, persists to localStorage, syncs `document.documentElement.lang`.
- `src/data/cv.ts` — now only `PROFILE` (locale-independent: name, email, github, linkedin, cv path) + re-exports content types from `i18n/types`. **Localized content is NOT here anymore — edit the locale bundles.**
- `src/index.css` — Tailwind layers, font `@import`, design tokens, `.grain`, `:focus-visible` ring, view-transition + reduced-motion rules.
- `public/osvaldo-pineda-cv.pdf` — CV, linked via `PROFILE.cv` (`/osvaldo-pineda-cv.pdf`). Favicons (`favicon*.png`, `apple-touch-icon.png`) also live in `public/`.

## Conventions
- **Content edits go in `src/i18n/{en,es,fr}.ts`** — components read everything through `useI18n()`. Adding a UI string means: update `UIStrings` in `types.ts` AND all three bundles (TS build enforces this).
- Design tokens (CSS vars in `index.css`, `:root` light / `.dark`, exposed in `tailwind.config.js`): `paper`, `raised`, `ink`, `muted`, `accent` (**olive/sage** brand — `#586440` light / `#93A56E` dark), `clay` (**stone brown** editorial accent — warm secondary), `line`. `slab`/`slab-ink`/`slab-muted` are **constant** (theme-independent) for the dark contrast band (HowIWork/Approach). Fonts: `serif`=**Fraunces** (variable, opsz/wght axes — display + italic accents), `sans`=**Inter** (body), `mono`=**JetBrains Mono** (years/labels, used sparingly). Use tokens, not raw hex/px. Light `muted`/`accent` are tuned for AA contrast on paper — don't lighten them.
- Editorial rules: **no** numbered section markers, **no** uppercase tracked eyebrow above sections, **no** identical card grids, **no** hero stats-grid. The hero opens straight on the name (no eyebrow); the "currently building" availability line lives in the contact footer. Warmth comes from serif type + clay accent + the dark slab band. Paper grain via `.grain`.
- "Tasteful magic" (all reduced-motion-safe): `VariableName.tsx` (hero name letters react to cursor proximity via Fraunces opsz/wght, direct DOM mutation + rAF), `ThemeToggle.tsx` (View Transitions API circular reveal), Skills spotlight (hover dims siblings).
- Section anchors used by the nav: `#top`, `#work`, `#approach`, `#skills`, `#projects`, `#contact`. The skip-link targets `#main`.
- TS is strict with `noUnusedLocals`/`noUnusedParameters` — unused vars break the build.

## Accessibility (WCAG 2.1 AA — keep it green)
- Audited with **axe-core via Playwright** across EN/ES/FR × light/dark = 0 violations. Re-run after layout/color changes (ad-hoc script lives outside the repo in `~/.pw-shot/`; needs Chromium, not Chrome).
- Invariants to preserve: AA text contrast on paper (the tuned `muted`/`accent` tokens), the global `:focus-visible` ring, the translated skip-link in `Nav.tsx`, `aria-label` on icon-only controls, `aria-pressed` + non-color (underline) active state on the language/theme toggles, and `prefers-reduced-motion` paths in `Reveal`/`VariableName`/`ThemeToggle`. Decorative letters in `VariableName` are `aria-hidden` with an `sr-only` accessible label — don't put `aria-label` on a bare `<span>`.

## Gotchas
- Fonts load from Google Fonts via `@import` in `index.css` (network dependency at runtime).
- There is **no `wrangler.toml`** — Cloudflare Pages config is passed entirely via the `deploy` script flags. `.wrangler/` is local cache only.
- `dist/` and `.wrangler/` are gitignored build artifacts; never edit by hand.
