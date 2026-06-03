# Osvaldo Pineda — Portfolio

Personal portfolio of **Osvaldo Pineda**, a Senior Fullstack Engineer & System Architect. A fast, single-page site presenting professional experience, technical skills, and selected projects — architected secure, accessible systems that scale to millions.

🔗 **Live:** [pineda-portfolio.pages.dev](https://pineda-portfolio.pages.dev)

## Features

- Single-page experience with smooth-scroll navigation across Work, Skills, Projects, and Contact sections.
- Scroll-triggered entrance animations powered by Framer Motion.
- Editorial, blueprint-inspired design system with custom typography and a vermilion accent.
- Fully responsive layout, mobile through desktop.
- Built with accessibility in mind (semantic structure, WCAG-aware markup).
- Content-driven: all copy lives in a single typed data module, keeping presentation and content cleanly separated.
- Downloadable CV.

## Tech Stack

| Area        | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | React 18 + TypeScript               |
| Build tool  | Vite 5                              |
| Styling     | Tailwind CSS 3                       |
| Animation   | Framer Motion                       |
| Icons       | Lucide React                        |
| Hosting     | Cloudflare Pages                    |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/osvaldopineda/portfolio.git
cd portfolio
npm install
```

### Local development

```bash
npm run dev
```

The dev server runs at **http://localhost:5175**.

### Production build

```bash
npm run build    # typechecks then builds to dist/
npm run preview  # preview the production build locally
```

## Deployment

The site is deployed as a static build to **Cloudflare Pages**:

```bash
npm run deploy
```

This builds the project and publishes `dist/` to the `pineda-portfolio` Pages project via Wrangler. Any push to the main branch can also be wired to Cloudflare Pages for automatic deploys.

## Project Structure

```
src/
├── main.tsx           # App entry point
├── App.tsx            # Page composition
├── index.css          # Tailwind layers, fonts, custom utilities
├── components/        # Section components (Hero, Experience, Skills, …)
└── data/cv.ts         # Single source of truth for all site content
public/
└── osvaldo-pineda-cv.pdf
```

To update site content (experience, skills, projects, profile), edit `src/data/cv.ts`.

## Contact

- **Email:** luisosvaldopineda@gmail.com
- **GitHub:** [@osvaldopineda](https://github.com/osvaldopineda)
- **LinkedIn:** [osvaldo-pineda](https://linkedin.com/in/osvaldo-pineda)
