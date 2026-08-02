import type { LocaleBundle } from './types'

const en: LocaleBundle = {
  cv: {
    profile: {
      role: 'Senior Fullstack Engineer · AI-Driven SaaS & Fintech',
      tagline: 'I design and build secure, accessible web platforms from front to back.',
      summary:
        'Seven years across SaaS and fintech, from banking-grade PCI DSS systems to accessibility on Google Search. I own frontend architecture end to end and work close to product.',
      location: 'Mexico City, Mexico · GMT-6',
      availability: 'Open to remote global collaboration, B2B, and relocation / sponsorship.',
    },
    experience: [
      {
        company: 'Google (via Qualitest)',
        url: 'https://www.qualitestgroup.com',
        role: 'Senior Software Engineer',
        period: 'Sep 2025 - Mar 2026',
        highlights: [
          'Resolved 50+ high-priority Web Accessibility (WCAG 2.1/2.2 AA, ARIA) defects directly on Google Search, improving compliance and inclusivity for one of the world’s highest-traffic products.',
          'Ran accessibility audits and shipped UI remediations through large-scale code review, partnering with product and design teams, accelerating delivery with AI coding assistants and AI-assisted test generation.',
          'Built backend service communication in Java with gRPC, integrating frontend components into Google’s proprietary internal infrastructure.',
        ],
        stack: ['Accessibility (WCAG/ARIA)', 'Java', 'gRPC', 'React', 'Code Review'],
      },
      {
        company: 'Pandora’s Way',
        url: 'https://pandorasway.com',
        role: 'Frontend Lead / Fullstack Developer',
        period: 'Feb 2025 - Dec 2025',
        context: 'Part-time · early-stage startup beta',
        highlights: [
          'Sole frontend owner for the investor-facing beta of a parenting app. Partnered directly with the 3 founders, turned wireframes into a shipped product, and drove architecture, cost, scalability and bundle-size decisions under tight startup constraints.',
          'Built core user flows and a scalable UI component system with React, Vite, Node.js, Tailwind CSS and shadcn/ui, cutting initial bundle size ~70% via lazy loading, code splitting and a Vite-based build.',
          'Contributed to the Python/Django backend (storage/bucket layer) and helped shape business rules alongside the technical founder.',
          'Integrated PostHog (feature flags + analytics), set up Jest/Cypress testing and CI/CD, and worked hands-on with product in an agile team.',
        ],
        stack: ['React', 'Vite', 'shadcn/ui', 'Python/Django', 'PostHog'],
      },
      {
        company: 'Unosquare',
        url: 'https://www.unosquare.com',
        role: 'Senior Frontend Engineer',
        period: 'Jun 2024 - Aug 2025',
        context: 'Enterprise clients',
        clients: [
          { name: 'Stitch Fix', url: 'https://www.stitchfix.com' },
          { name: 'Life.Church', url: 'https://www.life.church' },
        ],
        highlights: [
          'Stitch Fix (2.3M+ active clients): led the frontend refactor with GraphQL and migrated content architecture to Contentstack (Headless CMS), driving a 25% lift in user engagement.',
          'Life.Church: directed a full frontend redesign in Tailwind CSS and shadcn/ui, building a 20+ component library documented in Storybook and shipped via Vercel.',
          'Ran data-driven A/B testing (Amplitude) for +15% conversion, optimized rendering performance on high-traffic Next.js apps, and held 85%+ coverage with Jest, React Testing Library and Playwright, accelerated by AI-assisted development.',
        ],
        stack: ['Next.js', 'GraphQL', 'Contentstack', 'shadcn/ui', 'Storybook'],
      },
      {
        company: 'Invex Bank & Compartamos Bank',
        role: 'Senior Fintech Consultant',
        period: 'May 2023 - May 2024',
        clients: [
          { name: 'Invex', url: 'https://www.invex.com' },
          { name: 'Compartamos Banco', url: 'https://www.compartamos.com.mx' },
        ],
        highlights: [
          'Invex Bank: led a legacy migration to micro-frontends serving 50k+ customers: 15+ React/TypeScript widgets with strict PCI DSS compliance and secure Node.js + PostgreSQL + JWT APIs on the bank’s on-premise/hybrid infrastructure.',
          'Compartamos Banco (one of LatAm’s largest microfinance banks, 3.1M+ clients): engineered an offline-first financial-inclusion platform (React Native + encrypted RealmDB) with high-concurrency Java backends in hexagonal architecture, containerized with Docker.',
        ],
        stack: ['Micro-frontends', 'PCI DSS', 'Java', 'React Native', 'Docker'],
      },
      {
        company: 'Fondeadora for Business',
        url: 'https://fondeadora.com',
        role: 'Frontend Tech Lead',
        period: 'May 2021 - May 2023',
        highlights: [
          'Engineered a B2B fintech platform from the ground up with React & Redux, scaling to 5k+ business customers.',
          'Built a comprehensive 8-module admin panel (React Hook Form) with RBAC auth, transaction history and digital card management.',
          'Implemented a real-time payment system handling $1M+ monthly transactions via WebSockets, with MongoDB for flexible storage.',
          'Led and mentored a 3-engineer team while optimizing Docker + GitHub Actions CI/CD pipelines that cut deploy time by 40%.',
        ],
        stack: ['React', 'Redux', 'WebSockets', 'MongoDB', 'GitHub Actions'],
      },
      {
        company: 'ProsperIA',
        url: 'https://prosperia.ai',
        role: 'Frontend Developer',
        period: 'Feb 2019 - May 2021',
        highlights: [
          'Designed and built an AI-powered medical MVP (React + Python) to support ophthalmologist diagnosis workflows.',
          'Integrated AI APIs processing 1GB+ of medical imagery, improving pipeline performance and scalability by 50%.',
        ],
        stack: ['React', 'Python', 'AI APIs'],
      },
    ],
    skills: [
      { group: 'Frontend', items: ['React.js', 'Next.js (SSR/ISR)', 'TypeScript', 'Vite', 'Redux', 'Tailwind CSS', 'shadcn/ui', 'Storybook', 'Performance Optimization', 'WCAG 2.1/2.2 AA · ARIA'] },
      { group: 'Backend & Data', items: ['Node.js', 'Java', 'Python (FastAPI · Django)', 'REST', 'GraphQL', 'gRPC', 'WebSockets', 'PostgreSQL', 'MongoDB', 'Prisma'] },
      { group: 'Cloud & Quality', items: ['AWS (EC2, S3, RDS, Lambda)', 'GCP', 'Vercel', 'Docker', 'GitHub Actions CI/CD', 'Jest', 'React Testing Library', 'Playwright', 'A/B Testing & Feature Flags'] },
      { group: 'AI & Agentic', items: ['AI-Assisted Development', 'Multi-Agent Workflows', 'LLM / AI API Integration', 'Prompt Engineering', 'Claude Code · Cursor'] },
    ],
    projects: [
      {
        name: 'La Casa',
        blurb: 'Luis Barragán’s emotional architecture rebuilt in CSS: walls of color, light that follows your local clock (the amber window turns on at night) and semantic HTML as the foundation.',
        stack: ['TypeScript', 'Vite', 'CSS custom properties', 'Semantic HTML'],
        repo: 'https://github.com/osvaldopineda/la-casa',
        year: '2026',
        image: '/projects/la-casa.jpg',
        imageAlt: 'Split view of La Casa: a magenta wall with an amber window next to the entry hall, lit as at noon',
      },
      {
        name: 'Lyra',
        blurb: 'Your listening history as a navigable 3D galaxy: every artist is a star sized by playtime, genres form constellations wrapped in animated nebulas, fed by Spotify and Last.fm data.',
        stack: ['Three.js', 'GLSL', 'TypeScript', 'Spotify API', 'Last.fm API'],
        live: 'https://lyra-313.pages.dev',
        year: '2026',
        image: '/projects/lyra.jpg',
        imageAlt: '3D galaxy where each star is an artist, grouped into glowing genre constellations',
      },
      {
        name: 'FinDash',
        blurb: 'Mobile-first personal finance dashboard: real-time projections, freelance income targets and Supabase sync, built to survive a career transition.',
        stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
        live: 'https://findash-icc.pages.dev',
        year: '2026',
        image: '/projects/findash.jpg',
        imageAlt: 'Two phone screens: a green savings dashboard with monthly projections, and a spending-by-category breakdown',
      },
      {
        name: 'TripSurprise',
        blurb: 'Collaborative trip itineraries: a group shares one real-time plan with day-by-day events, map, weather, budget and a document wallet as the source of truth, plus surprise events that reveal over time.',
        stack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
        year: '2026',
        status: 'In development. First stop: Japan',
        image: '/projects/tripsurprise.jpg',
        imageAlt: 'Two phone screens of a Japan trip plan: day-by-day itinerary with countdown and dual clocks, and a two-currency budget breakdown',
      },
      {
        name: 'El Mundo Conocido',
        blurb: 'Immersive interactive map of Westeros: clickable regions with deep lore, a historical-era timeline, hand-drawn cartography, and procedural ambient sound.',
        stack: ['React', 'Leaflet', 'anime.js', 'Web Audio API', 'Zustand'],
        live: 'https://asoiaf-map.pages.dev',
        repo: 'https://github.com/osvaldopineda/asoiaf-map',
        year: '2026',
        image: '/projects/mundo-conocido.jpg',
        imageAlt: 'Hand-drawn interactive map of Westeros with clickable regions',
      },
    ],
    education: {
      degree: "Bachelor's in Computer Engineering",
      school: 'Universidad de América del Norte',
      certs: ['React Advanced Patterns', 'Node.js Application Security', 'UX/UI Design (DEV.F)'],
      languages: ['Spanish, native', 'English, C1 professional'],
    },
  },
  ui: {
    nav: { work: 'Work', approach: 'Approach', skills: 'Skills', projects: 'Projects', contact: 'Contact', cv: 'CV', skipToContent: 'Skip to content', menu: 'Menu', editionAria: 'Switch design edition. Current:', editionEditorial: 'Editorial', editionRiso: 'Riso print', editionNudgeTitle: 'One site, two designs', editionNudgeBody: 'This button swaps the whole design system on the spot.', editionNudgeCta: 'Show me the magic' },
    hero: {
      downloadCv: 'Download CV',
      getInTouch: 'Email me',
      githubAria: 'GitHub',
      linkedinAria: 'LinkedIn',
    },
    experience: {
      title: { pre: 'Seven years, ', accent: 'shipped to production.' },
      lead: 'The road so far runs from accessibility on Google Search to secure platforms for banks and startups.',
    },
    approach: {
      title: { pre: 'Things I’ll defend in a ', accent: 'code review.' },
      lead: 'Opinions I’ve earned the hard way, and will argue for in a PR.',
      opinions: [
        {
          claim: 'I review code for the next human, not the compiler.',
          body: 'A PR nobody can read is a problem you’re shipping to your teammates. Dev-first means we hand each other tools, not trip each other up. And no: don’t let the AI write the whole thing and send it to me unread. Name things like someone has to live with them.',
        },
        {
          claim: 'Accessibility is the work nobody sees, until they need it.',
          body: 'It lives behind the product, in screen readers, keyboard navigation and color contrast. Nobody notices it while it works, and everybody notices the day it doesn’t. I learned that fixing 50+ a11y defects on Google Search.',
        },
        {
          claim: 'Test the core, not the cosmetics.',
          body: 'Tests earn their keep on the happy path and on the edge cases that actually matter. Everything else is building fake walls to feel safe.',
        },
        {
          claim: 'AI is Robin. I’m still Batman.',
          body: 'A copilot, not an equal: it drafts fast and never tires, but the final call (and the responsibility) are mine. Robin’s sharp; Batman still decides.',
        },
        {
          claim: 'Know which battles to fight in-house.',
          body: 'The skill isn’t building everything from scratch, or reaching for a library every time. It’s knowing when your own logic is worth the fight, and when a third-party service just is the answer.',
        },
      ],
    },
    skills: { title: { pre: 'The ', accent: 'toolkit.' } },
    projects: {
      title: { pre: 'Side ', accent: 'quests.' },
      lead: 'Personal projects where I own the whole stack, from design to engineering to the details in between.',
      liveDemo: 'Live demo',
      code: 'Code',
    },
    offclock: {
      title: { pre: 'Off the ', accent: 'clock.' },
      body: 'When I’m not shipping, I’m probably playing guitar, bass or drums, raised on The Strokes and Arctic Monkeys, loud enough to annoy the neighbors. I over-engineer side projects to learn one new thing (that Westeros map up there started exactly like that), and recharge with a good beer and better company: my family.',
    },
    tour: {
      start: 'Take the tour',
      next: 'Next',
      prev: 'Back',
      done: 'Try it',
      workTitle: 'The road',
      workBody: 'Seven years as a timeline. Every station links to the real company.',
      approachTitle: 'How I work',
      approachBody: 'Convictions earned in production, not buzzwords.',
      projectsTitle: 'Side quests',
      projectsBody: 'Scroll moves sideways here. From a Barragán study in CSS to a 3D music galaxy.',
      editionTitle: 'One more thing',
      editionBody: 'This button swaps the entire design system. Same content, another world. Go on, press it.',
    },
    contact: {
      statusLine: 'Currently building from Mexico City, open to remote & relocation',
      titleLine1: 'Tell me what',
      titleLine2Pre: 'you’re ',
      titleAccent: 'building.',
      emailMe: 'Email me',
      education: 'Education',
      certifications: 'Certifications',
      languages: 'Languages',
      footerSetIn: 'Set in Bricolage Grotesque & Archivo · React · Vite · Tailwind',
    },
  },
}

export default en
