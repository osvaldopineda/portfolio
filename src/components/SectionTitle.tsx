import type { ReactNode } from 'react'
import Reveal from './Reveal'

/**
 * Editorial section heading. No numbered markers, no uppercase tracked eyebrow —
 * the serif title carries the section. `title` is a node so callers can accent a word.
 */
export default function SectionTitle({
  title,
  lead,
  className = '',
}: {
  title: ReactNode
  lead?: string
  className?: string
}) {
  return (
    <Reveal className={`mb-14 ${className}`}>
      <h2 className="serif text-4xl leading-[1.02] tracking-tight2 md:text-6xl">{title}</h2>
      {lead && (
        <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-muted">{lead}</p>
      )}
    </Reveal>
  )
}
