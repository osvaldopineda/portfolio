# CLAUDE.md

Single-page personal portfolio for Osvaldo Pineda (Senior Fullstack Engineer). Static SPA, no backend.

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
- No test runner is configured.

## Structure
- `src/main.tsx` — entry, mounts `<App/>`, imports `index.css`.
- `src/App.tsx` — composes the page (wrapped in `.grain`): Nav → Hero → Experience → Skills → HowIWork → Projects → Contact.
- `src/components/` — one component per section, all default exports. `Reveal.tsx` (framer-motion scroll-in, ease-out-expo), `SectionTitle.tsx` (editorial serif heading, no numbered/uppercase eyebrow) and `Marquee.tsx` (hero credibility ribbon) are shared primitives.
- `src/data/cv.ts` — **single source of truth** for all content: `PROFILE`, `STATS`, `EXPERIENCE`, `SKILLS`, `PROJECTS`, `EDUCATION`. Edit content here, not in components. Exports typed interfaces (`Job`, `Project`).
- `src/index.css` — Tailwind layers, font `@import`, `.grid-bg` and other custom utilities.
- `public/osvaldo-pineda-cv.pdf` — CV, linked via `PROFILE.cv` (`/osvaldo-pineda-cv.pdf`).

## Conventions
- Update site content by editing `src/data/cv.ts`; components read from it.
- Design tokens: colors are themed via CSS vars in `index.css` (`:root` light / `.dark`) and exposed in `tailwind.config.js` as `paper`, `raised`, `ink`, `muted`, `accent` (teal, brand), `clay` (terracotta editorial accent), `line`. `slab`/`slab-ink`/`slab-muted` are **constant** (theme-independent) for the dark contrast band (HowIWork). Fonts: `serif`=Instrument Serif (display, weight 400 only — size carries hierarchy, not weight), `sans`=Schibsted Grotesk (body), `mono`=JetBrains Mono (years/labels, used sparingly). Use these tokens, not raw hex/px.
- Editorial rules (post-redesign): **no** numbered section markers (`01/02/03`), **no** uppercase tracked eyebrow above sections, **no** identical card grids, **no** hero stats-grid. Warmth comes from serif type + clay accent + the dark slab band, not a cream body bg. Paper grain via `.grain` utility.
- Section anchors used by the nav: `#work`, `#skills`, `#projects`, `#contact`, `#top`.
- TS is strict with `noUnusedLocals`/`noUnusedParameters` — unused vars break the build.

## Gotchas
- Fonts load from Google Fonts via `@import` in `index.css` (network dependency at runtime).
- There is **no `wrangler.toml`** — Cloudflare Pages config is passed entirely via the `deploy` script flags. `.wrangler/` is local cache only.
- `dist/` and `.wrangler/` are gitignored build artifacts; never edit by hand.
