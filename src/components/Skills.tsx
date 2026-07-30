import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'

/**
 * Colophon layout: each group is one running editorial line — the group name
 * in italic display type leading its tools as flowing text. No boxes, no
 * per-row hairlines, no grid: the third consecutive boxed section was what
 * made the page feel templated. The offset mirrors the hero's asymmetry.
 * Spotlight on hover is decorative only, so items stay out of the tab order.
 */
export default function Skills() {
  const { cv, ui } = useI18n()
  const t = ui.skills
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-36">
      <SectionTitle title={<>{t.title.pre}<span className="italic text-clay">{t.title.accent}</span>{t.title.post}</>} />

      <div className="max-w-3xl space-y-9 border-t border-line pt-12 md:ml-[24%]">
        {cv.skills.map((cat) => (
          <Reveal key={cat.group}>
            <p className="group text-lg leading-relaxed">
              <span className="serif mr-2 text-[1.7rem] italic leading-none text-clay">{cat.group}.</span>
              {cat.items.map((s, i) => (
                <span
                  key={s}
                  className="text-muted transition-[color,opacity] duration-200 ease-out-strong hover:text-ink group-hover:opacity-50 hover:!opacity-100"
                >
                  {s}
                  {i < cat.items.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
