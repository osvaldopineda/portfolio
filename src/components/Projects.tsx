import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'

export default function Projects() {
  const { cv, ui } = useI18n()
  const t = ui.projects
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionTitle
        title={<>{t.title.pre}<span className="italic text-clay">{t.title.accent}</span>{t.title.post}</>}
        lead={t.lead}
      />

      <div className="border-t border-line">
        {cv.projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <article className="group grid gap-6 border-b border-line py-12 md:grid-cols-[1fr_minmax(0,420px)]">
              <div>
                <div className="flex items-baseline gap-4">
                  <h3 className="serif text-4xl leading-none transition-colors group-hover:text-clay md:text-6xl">{p.name}</h3>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <p className="leading-relaxed text-muted">{p.blurb}</p>
                <div className="mt-6 flex items-center gap-5">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-clay">
                      {t.liveDemo} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink">
                      <Github className="h-4 w-4" /> {t.code}
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
