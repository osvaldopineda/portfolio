// Locale-invariant identity — contact + links live in one place.
// All localized content (profile copy, experience, skills, projects, education)
// lives in src/i18n/{en,es,fr}.ts and is read via useI18n().
export const PROFILE = {
  name: 'Osvaldo Pineda',
  email: 'osvaldo.pineda.dev@gmail.com',
  github: 'https://github.com/osvaldopineda',
  linkedin: 'https://linkedin.com/in/osvaldo-pineda',
  cv: '/osvaldo-pineda-cv.pdf',
}

export type { Locale, Job, Project, CVData, Stat, SkillGroup, Education } from '../i18n/types'
