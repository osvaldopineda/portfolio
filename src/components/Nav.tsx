import { PROFILE } from '../data/cv'
import { useI18n } from '../i18n/context'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Nav() {
  const { ui } = useI18n()
  const links = [
    { href: '#work', label: ui.nav.work },
    { href: '#approach', label: ui.nav.approach },
    { href: '#skills', label: ui.nav.skills },
    { href: '#projects', label: ui.nav.projects },
    { href: '#contact', label: ui.nav.contact },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
      >
        {ui.nav.skipToContent}
      </a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="serif text-2xl leading-none">
          Osvaldo Pineda<span className="text-clay">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm text-muted hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href={PROFILE.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            {ui.nav.cv}
          </a>
        </div>
      </nav>
    </header>
  )
}
