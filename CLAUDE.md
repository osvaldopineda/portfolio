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
- `src/App.tsx` — composes the page: Nav → Hero → Experience → Skills → Projects → Contact.
- `src/components/` — one component per section, all default exports. `Reveal.tsx` (framer-motion scroll-in wrapper) and `SectionHeader.tsx` are shared primitives.
- `src/data/cv.ts` — **single source of truth** for all content: `PROFILE`, `STATS`, `EXPERIENCE`, `SKILLS`, `PROJECTS`, `EDUCATION`. Edit content here, not in components. Exports typed interfaces (`Job`, `Project`).
- `src/index.css` — Tailwind layers, font `@import`, `.grid-bg` and other custom utilities.
- `public/osvaldo-pineda-cv.pdf` — CV, linked via `PROFILE.cv` (`/osvaldo-pineda-cv.pdf`).

## Conventions
- Update site content by editing `src/data/cv.ts`; components read from it.
- Design tokens live in `tailwind.config.js` `theme.extend`: colors (`ink`, `surface`, `bone`, `muted`, `accent` vermilion `#FF5C38`), fonts (`serif`=Instrument Serif, `sans`=Schibsted Grotesk, `mono`=JetBrains Mono), and `tracking-label` (0.18em). Use these tokens, not raw hex/px.
- Section anchors used by the nav: `#work`, `#skills`, `#projects`, `#contact`, `#top`.
- TS is strict with `noUnusedLocals`/`noUnusedParameters` — unused vars break the build.

## Gotchas
- Fonts load from Google Fonts via `@import` in `index.css` (network dependency at runtime).
- There is **no `wrangler.toml`** — Cloudflare Pages config is passed entirely via the `deploy` script flags. `.wrangler/` is local cache only.
- `dist/` and `.wrangler/` are gitignored build artifacts; never edit by hand.
