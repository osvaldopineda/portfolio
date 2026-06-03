export const PROFILE = {
  name: 'Osvaldo Pineda',
  role: 'Senior Fullstack Engineer · System Architect',
  tagline: 'I design and build secure, accessible web platforms — front to back.',
  summary:
    'Senior Software Engineer with 7 years of experience architecting scalable web applications. Expert across the React ecosystem (Next.js, TypeScript), robust backends (Node.js, Python, gRPC) and Headless CMS migrations — with deep specialization in strict Web Accessibility (WCAG 2.1/2.2 AA), secure fintech platforms, and AI-assisted delivery in high-scale environments.',
  location: 'Mexico City, Mexico · GMT-6',
  availability: 'Open to remote global collaboration, B2B, and relocation / sponsorship.',
  email: 'luisosvaldopineda@gmail.com',
  github: 'https://github.com/osvaldopineda',
  linkedin: 'https://linkedin.com/in/osvaldo-pineda',
  cv: '/osvaldo-pineda-cv.pdf',
}

export const STATS = [
  { value: '7+ yrs', label: 'Senior engineering' },
  { value: 'Fintech', label: 'Banking-grade & PCI DSS' },
  { value: 'WCAG 2.2', label: 'Accessibility (AA)' },
  { value: 'AI-assisted', label: 'Modern delivery' },
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
      'Resolved high-priority Web Accessibility (WCAG 2.1/2.2 AA, ARIA) defects and shipped UI enhancements directly on the Google Search engine, ensuring compliance and a more inclusive user experience.',
      'Engineered high-performance microservice communication with gRPC, integrating frontend components into Google’s proprietary internal infrastructure.',
      'Established strict cross-browser compatibility, responsive behavior and robust testing pipelines in a highly scaled, fast-paced environment.',
    ],
    stack: ['Accessibility (WCAG/ARIA)', 'gRPC', 'React', 'Testing'],
  },
  {
    company: 'Unosquare',
    role: 'Senior Frontend Engineer',
    period: 'Jun 2024 — Aug 2025',
    context: 'Enterprise clients: Stitch Fix · Life.Church',
    highlights: [
      'Architected high-impact features on modern React/Next.js infrastructure for high-traffic products, with rigorous performance optimization.',
      'Stitch Fix: led the frontend refactor with GraphQL and migrated content architecture to Contentstack (Headless CMS) — +25% user engagement.',
      'Life.Church: directed a full frontend redesign in Tailwind CSS with a modular architecture, building 20+ reusable components shipped via Vercel.',
      'Ran data-driven A/B testing (Amplitude) for +15% conversion, while holding >85% coverage with Jest & Cypress.',
    ],
    stack: ['Next.js', 'GraphQL', 'Contentstack', 'Tailwind', 'Amplitude'],
  },
  {
    company: 'Invex Bank & Compartamos Bank',
    role: 'Senior Fintech Consultant',
    period: 'May 2023 — May 2024',
    highlights: [
      'Partnered with leading Latin American financial institutions to architect secure, compliance-heavy banking apps on robust AWS infrastructure.',
      'Invex: led a legacy migration to micro-frontends serving 50k+ customers — 15+ React/TypeScript widgets with strict PCI DSS compliance and secure Node.js + PostgreSQL + JWT APIs.',
      'Compartamos: architected an offline-first financial-inclusion platform (React Native + encrypted RealmDB) with high-concurrency Python (Django/FastAPI) backends in hexagonal architecture.',
    ],
    stack: ['AWS', 'Micro-frontends', 'PCI DSS', 'Python', 'React Native'],
  },
  {
    company: 'Fondeadora for Business',
    role: 'Frontend Tech Lead',
    period: 'May 2021 — May 2023',
    highlights: [
      'Engineered a B2B fintech platform from the ground up with React & Redux, scaling to 5k+ business customers.',
      'Built a comprehensive admin panel (React Hook Form) with RBAC auth, transaction history and digital card management.',
      'Implemented a payment system handling $1M+ monthly transactions — real-time via WebSockets, MongoDB for flexible storage.',
      'Optimized Docker CI/CD pipelines (−40% deploy time) and mentored junior developers.',
    ],
    stack: ['React', 'Redux', 'WebSockets', 'MongoDB', 'Docker'],
  },
  {
    company: 'ProsperIA',
    role: 'Frontend Developer',
    period: 'Feb 2019 — May 2021',
    highlights: [
      'Architected an AI-powered medical MVP (React + Python) to support ophthalmologist diagnosis workflows.',
      'Integrated AI APIs processing 1GB+ of medical imagery, improving pipeline performance and scalability by 50%.',
    ],
    stack: ['React', 'Python', 'AI APIs'],
  },
]

export const SKILLS: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'React Hook Form', 'WCAG 2.1/2.2 AA · ARIA'] },
  { group: 'Backend & APIs', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Django', 'REST', 'GraphQL', 'gRPC', 'WebSockets', 'JWT'] },
  { group: 'Data & CMS', items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Contentstack', 'RealmDB'] },
  { group: 'Cloud & DevOps', items: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'GitHub Actions', 'Vercel', 'Jest', 'Cypress'] },
  { group: 'AI & Modern', items: ['AI-Assisted Development', 'Agentic Workflows', 'Cursor', 'Claude Code', 'Prompt Engineering'] },
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
  certs: ['React Advanced Patterns', 'Node.js Application Security', 'AWS Cloud Practitioner (in progress)'],
  languages: ['Spanish — Native', 'English — C1 Professional'],
}
