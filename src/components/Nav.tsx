import { PROFILE } from '../data/cv'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-label text-ink">
          O—P<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="link-underline font-mono text-xs uppercase tracking-label text-muted hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={PROFILE.cv}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-accent/50 px-4 py-1.5 font-mono text-xs uppercase tracking-label text-accent transition-colors hover:bg-accent hover:text-white"
        >
          CV ↓
        </a>
      </nav>
    </header>
  )
}
