import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PROFILE } from '../data/cv'
import { useI18n } from '../i18n/context'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import EditionToggle from './EditionToggle'

export default function Nav() {
  const { ui } = useI18n()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const links = [
    { href: '#work', label: ui.nav.work },
    { href: '#approach', label: ui.nav.approach },
    { href: '#skills', label: ui.nav.skills },
    { href: '#projects', label: ui.nav.projects },
    { href: '#contact', label: ui.nav.contact },
  ]

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Scroll-spy: the page is ~13k px tall, so "where am I" needs an answer.
  // IntersectionObserver rather than a scroll listener — no per-frame work.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      // Band just below the fixed header: whatever crosses it is "current".
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? 'location' : undefined}
              className={`link-underline text-sm transition-colors duration-200 hover:text-ink ${
                active === l.href
                  ? 'text-ink [background-size:100%_1px]'
                  : 'text-muted'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <EditionToggle />
          <ThemeToggle />
          <a
            href={PROFILE.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            {ui.nav.cv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={ui.nav.menu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors hover:border-ink/40 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="serif border-b border-line py-3 text-2xl text-ink/90 transition-colors hover:text-clay"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-5">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  )
}
