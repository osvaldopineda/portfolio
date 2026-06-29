import Reveal from './Reveal'
import { useI18n } from '../i18n/context'

export default function OffTheClock() {
  const { ui } = useI18n()
  const t = ui.offclock
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <h2 className="serif text-4xl leading-[1.02] tracking-tight2 md:text-5xl">
          {t.title.pre}<span className="italic text-accent">{t.title.accent}</span>{t.title.post}
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="serif mt-6 max-w-2xl text-xl italic leading-relaxed text-ink/90 md:text-2xl">
          {t.body}
        </p>
      </Reveal>
    </section>
  )
}
