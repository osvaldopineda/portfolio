import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Locale, CVData, UIStrings } from './types'
import { LOCALES } from './types'
import en from './en'
import es from './es'
import fr from './fr'

const BUNDLES: Record<Locale, { cv: CVData; ui: UIStrings }> = { en, es, fr }

interface I18nValue {
  locale: Locale
  setLocale: (l: Locale) => void
  cv: CVData
  ui: UIStrings
}

const I18nContext = createContext<I18nValue | null>(null)

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem('locale')
    if (saved && (LOCALES as string[]).includes(saved)) return saved as Locale
  } catch { /* storage unavailable */ }
  // Always English on first visit — the audience is international recruiters.
  // No navigator.language sniffing: ES/FR are an explicit choice via the toggle.
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem('locale', l)
    } catch { /* storage unavailable */ }
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const bundle = BUNDLES[locale]
  return (
    <I18nContext.Provider value={{ locale, setLocale, cv: bundle.cv, ui: bundle.ui }}>
      {children}
    </I18nContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
