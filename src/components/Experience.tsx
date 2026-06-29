import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'

export default function Experience() {
  const { cv, ui } = useI18n()
  const t = ui.experience
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionTitle
        title={<>{t.title.pre}<span className="italic text-clay">{t.title.accent}</span>{t.title.post}</>}
        lead={t.lead}
      />

      <div className="border-t border-line">
        {cv.experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.04}>
            <article className="group grid gap-6 border-b border-line py-12 transition-colors md:grid-cols-[240px_1fr]">
              {/* meta */}
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{job.period}</p>
                <h3 className="serif mt-3 text-3xl leading-tight transition-colors group-hover:text-clay">
                  {job.company}
                </h3>
              </div>

              {/* detail */}
              <div>
                <p className="text-base font-semibold">{job.role}</p>
                {job.context && <p className="mt-0.5 text-sm text-muted">{job.context}</p>}

                <ul className="mt-5 space-y-3">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-clay" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
