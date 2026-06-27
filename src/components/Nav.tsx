import { PROFILE } from '../data/cv'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#approach', label: 'Approach' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="serif text-2xl leading-none">
          Osvaldo Pineda<span className="text-clay">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm text-muted hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={PROFILE.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  )
}
