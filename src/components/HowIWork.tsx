import Reveal from './Reveal'
import { useI18n } from '../i18n/context'

export default function HowIWork() {
  const { ui } = useI18n()
  const t = ui.approach
  return (
    <section id="approach" className="bg-slab text-slab-ink">
      <div className="mx-auto max-w-5xl px-6 py-28 md:py-36">
        <Reveal className="mb-16 max-w-2xl">
          <h2 className="serif text-4xl leading-[1.02] tracking-tight2 md:text-6xl">
            {t.title.pre}<span className="italic text-[#93A56E]">{t.title.accent}</span>{t.title.post}
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slab-muted">{t.lead}</p>
        </Reveal>

        <div className="border-t border-white/10">
          {t.opinions.map((o, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="grid gap-3 border-b border-white/10 py-9 md:grid-cols-[1.1fr_1fr] md:gap-12">
                <h3 className="serif text-2xl leading-snug md:text-[1.7rem]">
                  <span className="mr-3 align-middle text-[#93A56E]">—</span>
                  {o.claim}
                </h3>
                <p className="leading-relaxed text-slab-muted md:pt-1.5">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
