import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'

export default function Projects() {
  const { cv, ui } = useI18n()
  const t = ui.projects
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionTitle title={<>{t.title.pre}{t.title.accent}{t.title.post}</>} lead={t.lead} />

      <div className="border-t border-line">
        {cv.projects.map((p) => (
          <Reveal key={p.name}>
            <article className="group grid gap-8 border-b border-line py-12 md:grid-cols-[1fr_minmax(0,420px)] md:items-center">
              <div>
                <div className="flex items-baseline gap-4">
                  <h3 className="serif text-4xl leading-none transition-colors group-hover:text-clay md:text-6xl">{p.name}</h3>
                  <span className="font-mono text-xs text-muted">{p.year}</span>
                </div>
                <p className="mt-5 max-w-xl leading-relaxed text-muted">{p.blurb}</p>
                <p className="mt-5 font-mono text-xs text-muted">{p.stack.join(' · ')}</p>
                <div className="mt-6 flex flex-wrap items-center gap-5">
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
                  {p.status && <span className="font-mono text-xs text-muted">{p.status}</span>}
                </div>
              </div>

              {p.image &&
                (p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true" className="shot-frame overflow-hidden rounded-lg border border-line">
                    <img src={p.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                  </a>
                ) : (
                  <div className="shot-frame overflow-hidden rounded-lg border border-line">
                    <img src={p.image} alt={p.imageAlt ?? ''} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
                  </div>
                ))}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
