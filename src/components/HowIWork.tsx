import Reveal from './Reveal'
import { useI18n } from '../i18n/context'

export default function HowIWork() {
  const { ui } = useI18n()
  const t = ui.approach
  return (
    <section id="approach" className="bg-slab text-slab-ink">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-36">
        <Reveal className="mb-16 max-w-2xl">
          <h2 className="serif text-4xl leading-[1.02] tracking-tight2 md:text-6xl">
            {t.title.pre}<span className="serif-soft text-[#A3B3F5]">{t.title.accent}</span>{t.title.post}
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slab-muted">{t.lead}</p>
        </Reveal>

        {/* Manifesto cascade: each conviction steps further right, no rows,
            no hairlines — the diagonal is the structure. Offsets are static
            classes so Tailwind's JIT can see them. */}
        <div className="space-y-14 md:space-y-16">
          {t.opinions.map((o, i) => {
            const step = ['md:ml-0', 'md:ml-[9%]', 'md:ml-[18%]', 'md:ml-[27%]', 'md:ml-[36%]']
            return (
              <Reveal key={i} className={step[i % step.length]}>
                <div className="max-w-xl">
                  <h3 className="serif text-3xl leading-[1.05] md:text-4xl">{o.claim}</h3>
                  <p className="mt-4 leading-relaxed text-slab-muted">{o.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
