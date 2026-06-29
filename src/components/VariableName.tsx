import { useEffect, useRef } from 'react'

/**
 * Renders text as individual letters whose Fraunces variable-font axes (opsz, wght)
 * react to cursor proximity — the closer the pointer, the heavier and more optical
 * the glyph. DOM is mutated directly (no React re-render per pointermove) and throttled
 * with rAF for performance. Fully disabled under prefers-reduced-motion.
 */
export default function VariableName({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = containerRef.current
    if (reduce || !el) return

    const onMove = (e: PointerEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        for (const l of lettersRef.current) {
          if (!l) continue
          const r = l.getBoundingClientRect()
          const dx = e.clientX - (r.left + r.width / 2)
          const dy = e.clientY - (r.top + r.height / 2)
          const t = Math.max(0, 1 - Math.hypot(dx, dy) / 360)
          const wght = Math.round(400 + t * 500)
          const opsz = Math.round(28 + t * 116)
          l.style.fontVariationSettings = `'opsz' ${opsz}, 'wght' ${wght}`
        }
      })
    }
    const onLeave = () => {
      for (const l of lettersRef.current) {
        if (l) l.style.fontVariationSettings = "'opsz' 144, 'wght' 400"
      }
    }

    window.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <span ref={containerRef} className={className}>
      <span className="sr-only">{text}</span>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          ref={(el) => {
            lettersRef.current[i] = el
          }}
          aria-hidden="true"
          className="inline-block will-change-[font-variation-settings]"
          style={{ fontVariationSettings: "'opsz' 144, 'wght' 400", transition: 'font-variation-settings 0.18s ease-out' }}
        >
          {ch}
        </span>
      ))}
    </span>
  )
}
