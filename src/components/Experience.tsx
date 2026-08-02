import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'

export default function Experience() {
  const { cv, ui } = useI18n()
  const t = ui.experience
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionTitle title={<>{t.title.pre}{t.title.accent}{t.title.post}</>} lead={t.lead} />

      {/* Timeline: one continuous thread down the left margin, jobs as
          stations. A short accent tick crosses the thread at each station —
          deliberately a tick, not the template dot. */}
      <div className="relative ml-1 border-l border-line pt-2 md:ml-24">
        {cv.experience.map((job) => (
          <Reveal key={job.company}>
            <article className="group relative pb-16 pl-7 md:pl-12">
              <span aria-hidden="true" className="absolute -left-[9px] top-2 h-px w-[17px] bg-clay transition-transform duration-200 ease-out-strong md:group-hover:scale-x-125" />
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{job.period}</p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <h3 className="serif text-3xl leading-tight transition-colors group-hover:text-clay">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer" className="link-underline">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="text-base font-semibold">{job.role}</p>
              </div>
              {(job.context || job.clients) && (
                <p className="mt-1 text-sm text-muted">
                  {job.context}
                  {job.context && job.clients && ': '}
                  {job.clients?.map((c, k) => (
                    <span key={c.name}>
                      {k > 0 && ' · '}
                      <a href={c.url} target="_blank" rel="noreferrer" className="link-underline text-ink/90">
                        {c.name}
                      </a>
                    </span>
                  ))}
                </p>
              )}

              {/* Register-mark markers (small squares) — a different glyph from
                  the timeline's tick so the two levels don't repeat, but still
                  a marker so three highlights don't read as one long paragraph. */}
              <ul className="mt-5 max-w-2xl space-y-4">
                {job.highlights.map((h, j) => (
                  <li key={j} className="relative pl-5 leading-relaxed text-muted">
                    <span aria-hidden="true" className="absolute left-0 top-[0.62em] h-1 w-1 bg-clay/80" />
                    {h}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-xs text-muted">{job.stack.join(' · ')}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
