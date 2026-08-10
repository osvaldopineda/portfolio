import { Fragment } from 'react'
import { useI18n } from '../i18n/context'
import { LOCALES, type Locale } from '../i18n/types'

const LABEL: Record<Locale, string> = { en: 'EN', es: 'ES', fr: 'FR' }
const FULL: Record<Locale, string> = { en: 'English', es: 'Español', fr: 'Français' }

// FR hidden until the copy passes Osvaldo's native validation — the locale
// bundle and all i18n logic stay wired, we just don't render the button.
const VISIBLE = LOCALES.filter((l) => l !== 'fr')

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n()
  return (
    <div role="group" aria-label="Language" className="flex items-center font-mono text-xs">
      {VISIBLE.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && <span aria-hidden="true" className="px-0.5 text-muted/50">·</span>}
          <button
            onClick={() => setLocale(l)}
            aria-pressed={l === locale}
            lang={l}
            aria-label={FULL[l]}
            className={`rounded-sm px-2 py-2 transition-colors ${
              l === locale
                ? 'text-ink underline decoration-accent decoration-2 underline-offset-4'
                : 'text-muted hover:text-ink'
            }`}
          >
            {LABEL[l]}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
