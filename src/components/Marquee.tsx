import { STATS } from '../data/cv'

/**
 * Infinite credibility ribbon — replaces the hero stats-grid template.
 * Two identical tracks scroll as one seamless loop; pauses on reduced-motion.
 */
export default function Marquee() {
  const items = STATS.flatMap((s) => [s.value, s.label])
  const track = (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="false">
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span className={i % 2 === 0 ? 'serif text-2xl text-clay' : 'text-sm text-muted'}>{t}</span>
          <span className="h-1 w-1 rounded-full bg-muted/50" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="relative flex overflow-hidden border-y border-line py-5">
      <div className="flex animate-marquee">
        {track}
        {/* duplicate for seamless wrap */}
        <div aria-hidden className="flex">{track}</div>
      </div>
    </div>
  )
}
