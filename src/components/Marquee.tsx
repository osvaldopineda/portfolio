import { useI18n } from '../i18n/context'

/**
 * Infinite credibility ribbon — replaces the hero stats-grid template.
 * Each item is a coherent credential (value + context kept together), separated
 * by a dot. Two identical tracks scroll as one seamless loop.
 */
export default function Marquee() {
  const { cv } = useI18n()
  const track = (
    <ul className="flex shrink-0 items-center">
      {cv.stats.map((s, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="serif text-2xl text-clay">{s.value}</span>
          <span className="ml-2.5 text-sm text-muted">{s.label}</span>
          <span className="mx-9 h-1 w-1 rounded-full bg-muted/40" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="relative flex overflow-hidden border-y border-line py-5">
      <div className="flex animate-marquee">
        {track}
        {/* duplicate for seamless wrap */}
        <div aria-hidden="true" className="flex">{track}</div>
      </div>
    </div>
  )
}
