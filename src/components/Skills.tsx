import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { SKILLS } from '../data/cv'

export default function Skills() {
  return (
    <section id="skills" className="grid-bg border-y border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader index="02 / Capabilities" title="The toolkit." />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.group} delay={i * 0.05} className="bg-card">
              <div className="h-full p-7">
                <h3 className="font-mono text-xs uppercase tracking-label text-accent">{cat.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span key={s} className="rounded-lg border border-line bg-paper px-3 py-1.5 text-sm text-ink/85">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
