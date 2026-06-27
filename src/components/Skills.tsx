import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { SKILLS } from '../data/cv'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionTitle title={<>The <span className="italic text-clay">toolkit.</span></>} />

      <dl className="border-t border-line">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.group} delay={i * 0.04}>
            <div className="grid items-baseline gap-3 border-b border-line py-8 md:grid-cols-[240px_1fr]">
              <dt className="serif text-2xl text-clay">{cat.group}</dt>
              <dd className="flex flex-wrap gap-x-6 gap-y-2.5">
                {cat.items.map((s) => (
                  <span key={s} className="text-[1.05rem] leading-snug">{s}</span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
