export type Locale = 'en' | 'es' | 'fr'
export const LOCALES: Locale[] = ['en', 'es', 'fr']

export interface Job {
  company: string
  /** Company website — only set when verified; the company name becomes a link. */
  url?: string
  role: string
  period: string
  context?: string
  /** Named clients/brands worked for under this employer, linked when verified. */
  clients?: { name: string; url: string }[]
  highlights: string[]
  stack: string[]
}

export interface Project {
  name: string
  blurb: string
  stack: string[]
  live?: string
  repo?: string
  year: string
  /** Screenshot in /public/projects — localized alt lives in imageAlt. */
  image?: string
  imageAlt?: string
  /** Localized state line for projects without public links yet. */
  status?: string
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface Education {
  degree: string
  school: string
  certs: string[]
  languages: string[]
}

export interface LocalizedProfile {
  role: string
  tagline: string
  summary: string
  location: string
  availability: string
}

export interface CVData {
  profile: LocalizedProfile
  experience: Job[]
  skills: SkillGroup[]
  projects: Project[]
  education: Education
}

/** A section heading split so callers can italic-accent part of it; word order is per-locale. */
export interface Heading {
  pre: string
  accent: string
  post?: string
}

export interface Opinion {
  claim: string
  body: string
}

export interface UIStrings {
  nav: { work: string; approach: string; skills: string; projects: string; contact: string; cv: string; skipToContent: string; menu: string; editionAria: string; editionEditorial: string; editionRiso: string; editionNudgeTitle: string; editionNudgeBody: string; editionNudgeCta: string }
  hero: {
    downloadCv: string
    getInTouch: string
    githubAria: string
    linkedinAria: string
  }
  experience: { title: Heading; lead: string }
  approach: { title: Heading; lead: string; opinions: Opinion[] }
  skills: { title: Heading }
  projects: { title: Heading; lead: string; liveDemo: string; code: string }
  offclock: { title: Heading; body: string }
  contact: {
    statusLine: string
    titleLine1: string
    titleLine2Pre: string
    titleAccent: string
    emailMe: string
    education: string
    certifications: string
    languages: string
    footerSetIn: string
  }
}

export interface LocaleBundle {
  cv: CVData
  ui: UIStrings
}
