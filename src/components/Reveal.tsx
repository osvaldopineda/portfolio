import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

// ease-out-cubic — gentle, even settle (softer than expo for blur)
const EASE = [0.33, 1, 0.68, 1] as const

/**
 * Entrance reveal: content eases into focus (blur → sharp) instead of the
 * generic fade-up preset — no directional movement, reads as intentional.
 * Renders statically under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.95, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
