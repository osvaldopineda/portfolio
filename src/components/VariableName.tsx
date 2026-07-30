import { useEffect, useRef } from 'react'

/**
 * Renders text as individual letters that react to cursor proximity. The effect
 * is edition-aware (read per frame from data-edition on <html>):
 * - Edición I (editorial): Fraunces opsz/wght axes swell near the pointer.
 * - Edición II (riso): the second-ink misregistration (text-shadow offset)
 *   separates further as the pointer approaches — ink coming off register.
 * DOM is mutated directly (no React re-render per pointermove) and throttled
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
        const riso = document.documentElement.dataset.edition === 'riso'
        for (const l of lettersRef.current) {
          if (!l) continue
          const r = l.getBoundingClientRect()
          const dx = e.clientX - (r.left + r.width / 2)
          const dy = e.clientY - (r.top + r.height / 2)
          const t = Math.max(0, 1 - Math.hypot(dx, dy) / 360)
          if (riso) {
            // the pink pass drifts off register near the pointer
            const off = (3 + t * 5).toFixed(1)
            l.style.textShadow = `${off}px ${off}px 0 rgb(var(--clay) / 0.5)`
            l.style.fontVariationSettings = ''
          } else {
            // Newsreader axes: opsz 6..72, wght 200..800
            const wght = Math.round(400 + t * 350)
            const opsz = Math.round(18 + t * 54)
            l.style.fontVariationSettings = `'opsz' ${opsz}, 'wght' ${wght}`
            l.style.textShadow = ''
          }
        }
      })
    }
    const onLeave = () => {
      const riso = document.documentElement.dataset.edition === 'riso'
      for (const l of lettersRef.current) {
        if (!l) continue
        if (riso) {
          l.style.textShadow = ''
          l.style.fontVariationSettings = ''
        } else {
          l.style.fontVariationSettings = "'opsz' 72, 'wght' 400"
          l.style.textShadow = ''
        }
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
          style={{ fontVariationSettings: "'opsz' 72, 'wght' 400", transition: 'font-variation-settings 0.18s ease-out' }}
        >
          {ch}
        </span>
      ))}
    </span>
  )
}
