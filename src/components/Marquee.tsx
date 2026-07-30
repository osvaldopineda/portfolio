import { useI18n } from '../i18n/context'

/**
 * Static credibility strip. Was an infinite marquee; retired because a
 * perpetually scrolling ribbon is an AI-built-site signature and the numbers
 * deserve to be read, not chased. Same content, standing still.
 */
export default function Marquee() {
  const { cv } = useI18n()
  return (
    <div className="border-y border-line py-5">
      <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-2">
        {cv.stats.map((s, i) => (
          <li key={i} className="flex items-baseline gap-2.5 whitespace-nowrap">
            <span className="serif text-2xl text-clay">{s.value}</span>
            <span className="text-sm text-muted">{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
