import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

// Strong ease-out — the stock cubic settles too gently to read as deliberate
const EASE = [0.23, 1, 0.32, 1] as const

/**
 * Entrance reveal: a short rise (opacity + 10px of travel), no filter.
 * The previous blur-in was audited out (2026-08-02): animating `filter` on
 * every section is expensive (especially Safari), Emil's guidance reserves
 * blur for masking micro-transitions, and the blur-in reveal itself became
 * an AI-era signature.
 *
 * No per-index delay: these wrap tall rows that cross the viewport one at a
 * time, so a stagger delay never produces a stagger, only latency.
 * Under prefers-reduced-motion the travel is dropped and only a short fade
 * remains — reduced motion means gentler, not nothing.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-90px' }}
        transition={{ duration: 0.2, ease: 'linear' }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
