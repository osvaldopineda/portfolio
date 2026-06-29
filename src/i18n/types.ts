export type Locale = 'en' | 'es' | 'fr'
export const LOCALES: Locale[] = ['en', 'es', 'fr']

export interface Stat {
  value: string
  label: string
}

export interface Job {
  company: string
  role: string
  period: string
  context?: string
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
  stats: Stat[]
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
  nav: { work: string; approach: string; skills: string; projects: string; contact: string; cv: string; skipToContent: string; menu: string }
  hero: {
    downloadCv: string
    getInTouch: string
    scroll: string
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
