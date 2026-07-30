import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'

/**
 * Asymmetric layout on purpose. Experience and Projects both read as
 * "hairline-divided rows in a 240px + 1fr grid"; a third section in that same
 * shape made the page feel templated. Here the groups get unequal spans and
 * two of them sit on a raised surface, so the section has its own rhythm and
 * no per-row rules. Cell count matches group count exactly — no filler tiles.
 */
const SPANS = [
  'md:col-span-7',
  'md:col-span-5 bg-raised',
  'md:col-span-5 bg-raised',
  'md:col-span-7',
]

export default function Skills() {
  const { cv, ui } = useI18n()
  const t = ui.skills
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionTitle title={<>{t.title.pre}<span className="italic text-clay">{t.title.accent}</span>{t.title.post}</>} />

      <Reveal>
        <dl className="grid gap-3 md:grid-cols-12">
          {cv.skills.map((cat, i) => (
            <div
              key={cat.group}
              className={`group rounded-lg border border-line p-6 md:p-8 ${SPANS[i % SPANS.length]}`}
            >
              <dt className="serif text-2xl text-clay">{cat.group}</dt>
              <dd className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {/* Decorative spotlight only — these are not interactive, so
                    they stay out of the tab order rather than adding ~34 stops. */}
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="text-[1.05rem] leading-snug transition-[color,opacity] duration-200 ease-out-strong hover:text-accent group-hover:opacity-40 hover:!opacity-100"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
