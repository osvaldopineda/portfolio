export const PROFILE = {
  name: 'Osvaldo Pineda',
  role: 'Senior Fullstack Engineer · AI-Driven SaaS & Fintech',
  tagline: 'I design and build secure, accessible web platforms — front to back.',
  summary:
    'Senior Fullstack Engineer with 7 years building secure, accessible web platforms across SaaS and fintech — from banking-grade systems (PCI DSS) to accessibility work on Google Search. Experienced across the React ecosystem (Next.js, TypeScript) and backends (Node.js, Java, Python, GraphQL, gRPC), with a growing focus on delivering with AI (AI-assisted development and AI/LLM integration). I work close to product — owning frontend architecture, weighing cost and scalability trade-offs, and partnering with founders and stakeholders, not just shipping code.',
  location: 'Mexico City, Mexico · GMT-6',
  availability: 'Open to remote global collaboration, B2B, and relocation / sponsorship.',
  email: 'osvaldo.pineda.dev@gmail.com',
  github: 'https://github.com/osvaldopineda',
  linkedin: 'https://linkedin.com/in/osvaldo-pineda',
  cv: '/osvaldo-pineda-cv.pdf',
}

export const STATS = [
  { value: '7+ yrs', label: 'Senior engineering' },
  { value: 'Fintech', label: 'Banking-grade & PCI DSS' },
  { value: 'WCAG 2.2', label: 'Accessibility (AA)' },
  { value: 'AI · Agentic', label: 'Modern delivery' },
]

export interface Job {
  company: string
  role: string
  period: string
  context?: string
  highlights: string[]
  stack: string[]
}

export const EXPERIENCE: Job[] = [
  {
    company: 'Google',
    role: 'Senior Software Engineer (via Qualitest)',
    period: 'Sep 2025 — Mar 2026',
    highlights: [
      'Resolved 50+ high-priority Web Accessibility (WCAG 2.1/2.2 AA, ARIA) defects directly on Google Search, improving compliance and inclusivity for one of the world’s highest-traffic products.',
      'Ran accessibility audits and shipped UI remediations through large-scale code review, partnering with product and design teams — accelerating delivery with AI coding assistants and AI-assisted test generation.',
      'Built backend service communication in Java with gRPC, integrating frontend components into Google’s proprietary internal infrastructure.',
    ],
    stack: ['Accessibility (WCAG/ARIA)', 'Java', 'gRPC', 'React', 'Code Review'],
  },
  {
    company: 'Pandora’s Way',
    role: 'Frontend Lead',
    period: 'Feb 2025 — Dec 2025',
    context: 'Part-time · early-stage startup beta',
    highlights: [
      'Sole frontend owner for the investor-facing beta of a parenting app — partnered directly with the 3 founders, turned wireframes into a shipped product, and drove architecture, cost, scalability and bundle-size decisions under tight startup constraints.',
      'Built core user flows and a scalable UI component system with React, Vite, Node.js, Tailwind CSS and shadcn/ui — cut initial bundle size ~70% via lazy loading, code splitting and a Vite-based build.',
      'Contributed to the Python/Django backend (storage/bucket layer) and helped shape business rules alongside the technical founder.',
      'Integrated PostHog (feature flags + analytics), set up Jest/Cypress testing and CI/CD, and worked hands-on with product in an agile team.',
    ],
    stack: ['React', 'Vite', 'shadcn/ui', 'Python/Django', 'PostHog'],
  },
  {
    company: 'Unosquare',
    role: 'Senior Frontend Engineer',
    period: 'Jun 2024 — Aug 2025',
    context: 'Enterprise clients: Stitch Fix · Life.Church',
    highlights: [
      'Stitch Fix (2.3M+ active clients): led the frontend refactor with GraphQL and migrated content architecture to Contentstack (Headless CMS) — +25% user engagement.',
      'Life.Church: directed a full frontend redesign in Tailwind CSS and shadcn/ui, building a 20+ component library documented in Storybook and shipped via Vercel.',
      'Ran data-driven A/B testing (Amplitude) for +15% conversion, optimized rendering performance on high-traffic Next.js apps, and held 85%+ coverage with Jest, React Testing Library and Playwright — accelerated by AI-assisted development.',
    ],
    stack: ['Next.js', 'GraphQL', 'Contentstack', 'shadcn/ui', 'Storybook'],
  },
  {
    company: 'Invex Bank & Compartamos Bank',
    role: 'Senior Fintech Consultant',
    period: 'May 2023 — May 2024',
    highlights: [
      'Invex Bank: led a legacy migration to micro-frontends serving 50k+ customers — 15+ React/TypeScript widgets with strict PCI DSS compliance and secure Node.js + PostgreSQL + JWT APIs on the bank’s on-premise/hybrid infrastructure.',
      'Compartamos Banco (one of LatAm’s largest microfinance banks — 3.1M+ clients): engineered an offline-first financial-inclusion platform (React Native + encrypted RealmDB) with high-concurrency Java backends in hexagonal architecture, containerized with Docker.',
    ],
    stack: ['Micro-frontends', 'PCI DSS', 'Java', 'React Native', 'Docker'],
  },
  {
    company: 'Fondeadora for Business',
    role: 'Frontend Tech Lead',
    period: 'May 2021 — May 2023',
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
    role: 'Frontend Developer',
    period: 'Feb 2019 — May 2021',
    highlights: [
      'Designed and built an AI-powered medical MVP (React + Python) to support ophthalmologist diagnosis workflows.',
      'Integrated AI APIs processing 1GB+ of medical imagery, improving pipeline performance and scalability by 50%.',
    ],
    stack: ['React', 'Python', 'AI APIs'],
  },
]

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React.js', 'Next.js (SSR/ISR)', 'Vite', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'React Hook Form', 'Tailwind CSS', 'shadcn/ui', 'Storybook', 'Performance Optimization', 'WCAG 2.1/2.2 AA · ARIA'] },
  { group: 'Backend & APIs', items: ['Node.js', 'Express', 'Java', 'Python', 'FastAPI', 'Django', 'REST', 'GraphQL', 'gRPC', 'WebSockets', 'JWT'] },
  { group: 'Data & CMS', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Contentstack', 'RealmDB'] },
  { group: 'Cloud & Infra', items: ['AWS (EC2, S3, RDS, Lambda)', 'GCP', 'Vercel', 'On-premise/Hybrid', 'Docker'] },
  { group: 'CI/CD & Version Control', items: ['GitHub', 'GitLab', 'Bitbucket', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI'] },
  { group: 'Testing & Practices', items: ['Jest', 'Cypress', 'React Testing Library', 'Playwright', 'Code Review', 'Agile/Scrum', 'A/B Testing & Feature Flags'] },
  { group: 'AI & Agentic', items: ['AI-Assisted Development', 'Multi-Agent Workflows', 'LLM / AI API Integration', 'Prompt Engineering', 'Claude Code · Cursor'] },
]

export interface Project {
  name: string
  blurb: string
  stack: string[]
  live?: string
  repo?: string
  year: string
}

export const PROJECTS: Project[] = [
  {
    name: 'El Mundo Conocido',
    blurb: 'Immersive interactive map of Westeros — clickable regions with deep lore, a historical-era timeline, hand-drawn cartography, and procedural ambient sound.',
    stack: ['React', 'Leaflet', 'anime.js', 'Web Audio API', 'Zustand'],
    live: 'https://asoiaf-map.pages.dev',
    repo: 'https://github.com/osvaldopineda/asoiaf-map',
    year: '2026',
  },
  {
    name: 'FinDash',
    blurb: 'Mobile-first personal finance dashboard — real-time projections, freelance income targets and Supabase sync, built to survive a career transition.',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    live: 'https://findash-icc.pages.dev',
    year: '2026',
  },
]

export const EDUCATION = {
  degree: "Bachelor's in Computer Engineering",
  school: 'Universidad de América del Norte',
  certs: ['React Advanced Patterns', 'Node.js Application Security', 'UX/UI Design — DEV.F'],
  languages: ['Spanish — Native', 'English — C1 Professional'],
}
