import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

// Strong ease-out — the stock cubic settles too gently to read as deliberate
const EASE = [0.23, 1, 0.32, 1] as const

/**
 * Entrance reveal: content eases into focus (blur → sharp) instead of the
 * generic fade-up preset — no directional movement, reads as intentional.
 *
 * No per-index delay: these wrap tall rows that cross the viewport one at a
 * time, so a stagger delay never produces a stagger, only latency.
 * Under prefers-reduced-motion the blur is dropped and only a short fade
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
      initial={{ opacity: 0, filter: 'blur(3px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
