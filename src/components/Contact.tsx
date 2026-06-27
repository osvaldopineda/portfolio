import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { PROFILE, EDUCATION } from '../data/cv'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <Reveal>
        <h2 className="serif text-5xl leading-[0.98] tracking-tight2 md:text-8xl">
          Let’s build something
          <br />
          that <span className="italic text-clay">lasts.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${PROFILE.email}`}
          className="link-underline mt-12 inline-block serif text-3xl italic md:text-4xl"
        >
          {PROFILE.email}
        </a>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">{PROFILE.availability}</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 active:scale-95">
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm transition-colors hover:border-ink/40">
            <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm transition-colors hover:border-ink/40">
            <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
          </a>
        </div>
      </Reveal>

      {/* Education / certs / languages — editorial index */}
      <Reveal delay={0.16}>
        <dl className="mt-24 grid gap-y-8 border-t border-line pt-10 md:grid-cols-3 md:gap-x-10">
          <div>
            <dt className="serif text-xl text-clay">Education</dt>
            <dd className="mt-3 text-sm font-semibold">{EDUCATION.degree}</dd>
            <dd className="text-sm text-muted">{EDUCATION.school}</dd>
          </div>
          <div>
            <dt className="serif text-xl text-clay">Certifications</dt>
            <dd className="mt-3 space-y-1 text-sm text-muted">
              {EDUCATION.certs.map((c) => <p key={c}>{c}</p>)}
            </dd>
          </div>
          <div>
            <dt className="serif text-xl text-clay">Languages</dt>
            <dd className="mt-3 space-y-1 text-sm text-muted">
              {EDUCATION.languages.map((l) => <p key={l}>{l}</p>)}
            </dd>
          </div>
        </dl>
      </Reveal>

      <footer className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-line pt-8 text-xs text-muted sm:flex-row sm:items-center">
        <span className="font-mono">© 2026 Osvaldo Pineda</span>
        <span className="font-mono">Set in Instrument Serif · React · Vite · Tailwind</span>
      </footer>
    </section>
  )
}
