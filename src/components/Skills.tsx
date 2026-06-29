import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'

export default function Skills() {
  const { cv, ui } = useI18n()
  const t = ui.skills
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionTitle title={<>{t.title.pre}<span className="italic text-clay">{t.title.accent}</span>{t.title.post}</>} />

      <dl className="border-t border-line">
        {cv.skills.map((cat, i) => (
          <Reveal
            key={cat.group}
            delay={i * 0.04}
            className="grid items-baseline gap-3 border-b border-line py-8 md:grid-cols-[240px_1fr]"
          >
            <dt className="serif text-2xl text-clay">{cat.group}</dt>
            <dd className="group flex flex-wrap gap-x-6 gap-y-2.5">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="text-[1.05rem] leading-snug transition-[color,opacity] duration-300 hover:text-accent group-hover:opacity-40 hover:!opacity-100"
                >
                  {s}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
