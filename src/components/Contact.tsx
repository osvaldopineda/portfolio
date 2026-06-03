import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { PROFILE, EDUCATION } from '../data/cv'

export default function Contact() {
  return (
    <section id="contact" className="grid-bg border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-accent">04 / Contact</p>
          <h2 className="serif-display mt-3 text-5xl leading-[1.05] md:text-7xl">
            Let’s build something
            <br />
            that <span className="italic text-accent">lasts</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-underline mt-10 inline-block text-xl text-ink md:text-2xl"
          >
            {PROFILE.email}
          </a>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{PROFILE.availability}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink/40">
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink/40">
              <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform active:scale-95">
              <Mail className="h-4 w-4" /> Email me
            </a>
          </div>
        </Reveal>

        {/* Education / languages */}
        <Reveal delay={0.16}>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            <div className="bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-label text-accent">Education</p>
              <p className="mt-3 text-sm font-semibold text-ink">{EDUCATION.degree}</p>
              <p className="text-sm text-muted">{EDUCATION.school}</p>
            </div>
            <div className="bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-label text-accent">Certifications</p>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {EDUCATION.certs.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-label text-accent">Languages</p>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {EDUCATION.languages.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 text-xs text-muted sm:flex-row sm:items-center">
          <span className="font-mono">© 2026 Osvaldo Pineda</span>
          <span className="font-mono">Designed &amp; built with React · Vite · Tailwind</span>
        </footer>
      </div>
    </section>
  )
}
