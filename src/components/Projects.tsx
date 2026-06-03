import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { PROJECTS } from '../data/cv'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        index="03 / Selected work"
        title="Things I build for the craft."
        kicker="Side projects where I get to own the whole stack — design, engineering and the details in between."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/40 p-7 transition-colors hover:border-accent/40">
              <div className="flex items-start justify-between gap-4">
                <h3 className="serif-display text-3xl text-bone">{p.name}</h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>

              <p className="mt-3 flex-1 leading-relaxed text-muted">{p.blurb}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-bone/70">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-bone transition-colors hover:text-accent">
                    Live demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-bone">
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
