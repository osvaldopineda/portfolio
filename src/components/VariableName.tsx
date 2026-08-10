import { useEffect, useRef } from 'react'

/**
 * Renders text as individual letters that react to cursor proximity. The effect
 * is edition-aware (read per frame from data-edition on <html>):
 * - Edición I (editorial): Bricolage Grotesque wdth/wght axes — letters near
 *   the pointer expand from the condensed house width and shed weight.
 * - Edición II (riso): the second-ink misregistration (text-shadow offset)
 *   separates further as the pointer approaches — ink coming off register.
 * - Edición III (terminal): phosphor glow intensifies near the pointer,
 *   like a beam exciting the coating.
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
        const edition = document.documentElement.dataset.edition
        for (const l of lettersRef.current) {
          if (!l) continue
          const r = l.getBoundingClientRect()
          const dx = e.clientX - (r.left + r.width / 2)
          const dy = e.clientY - (r.top + r.height / 2)
          const t = Math.max(0, 1 - Math.hypot(dx, dy) / 360)
          if (edition === 'riso') {
            // the pink pass drifts off register near the pointer
            const off = (3 + t * 5).toFixed(1)
            l.style.textShadow = `${off}px ${off}px 0 rgb(var(--clay) / 0.5)`
            l.style.fontVariationSettings = ''
          } else if (edition === 'terminal') {
            // the beam excites the phosphor
            const blur = Math.round(10 + t * 22)
            const a = (0.3 + t * 0.45).toFixed(2)
            l.style.textShadow = `0 0 ${blur}px rgb(var(--accent) / ${a})`
            l.style.fontVariationSettings = ''
          } else {
            // Bricolage axes: wdth 75..100, wght 200..800 — expand and lighten
            const wdth = Math.round(87 + t * 13)
            const wght = Math.round(800 - t * 180)
            l.style.fontVariationSettings = `'wdth' ${wdth}, 'wght' ${wght}`
            l.style.textShadow = ''
          }
        }
      })
    }
    const onLeave = () => {
      const edition = document.documentElement.dataset.edition
      for (const l of lettersRef.current) {
        if (!l) continue
        if (edition === 'riso' || edition === 'terminal') {
          l.style.textShadow = ''
          l.style.fontVariationSettings = ''
        } else {
          l.style.fontVariationSettings = "'wdth' 87, 'wght' 800"
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
          // select-none: without it, copying the name yields "OsvaldoOsvaldo"
          // (sr-only label + per-letter spans) and Cmd+F can't match it.
          className="inline-block select-none will-change-[font-variation-settings]"
          style={{ fontVariationSettings: "'wdth' 87, 'wght' 800", transition: 'font-variation-settings 0.18s ease-out' }}
        >
          {ch}
        </span>
      ))}
    </span>
  )
}
