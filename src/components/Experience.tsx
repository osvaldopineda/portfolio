import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { EXPERIENCE } from '../data/cv'

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeader
        index="01 / Experience"
        title="Seven years, shipped to production."
        kicker="From Google Search accessibility to secure fintech platforms — a track record of dependable, performant, inclusive systems."
      />

      <div className="border-t border-line">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.04}>
            <article className="group grid gap-6 border-b border-line py-10 md:grid-cols-[220px_1fr]">
              {/* Left: meta */}
              <div>
                <p className="font-mono text-xs uppercase tracking-label text-muted">{job.period}</p>
                <h3 className="serif-display mt-2 text-2xl text-ink transition-colors group-hover:text-accent">
                  {job.company}
                </h3>
              </div>

              {/* Right: detail */}
              <div>
                <p className="text-base font-semibold text-ink">{job.role}</p>
                {job.context && <p className="mt-0.5 text-sm text-muted">{job.context}</p>}

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-[0.97rem] leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink/70">
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
