import { useEffect, useRef } from 'react'

const GLYPHS = '01<>/{}();$#*+=·:~'
const CELL = 26
const DENSITY = 0.012 // fraction of grid cells alive at once

type Ghost = { col: number; row: number; char: string; life: number; ttl: number }

/**
 * Edición III ambient: sparse terminal glyphs fading in and out behind the
 * content, like ghosts of a previous session. Canvas 2D, ~45 glyphs, one
 * pass per frame — the p5aholic principle: the wow is ambient, not loud.
 * Runs only while the terminal edition is active (watches data-edition);
 * under prefers-reduced-motion it paints a single static constellation.
 */
export default function TerminalBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf: number | null = null
    let ghosts: Ghost[] = []
    let cols = 0
    let rows = 0

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(window.innerWidth / CELL)
      rows = Math.ceil(window.innerHeight / CELL)
    }

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()

    const spawn = (): Ghost => ({
      col: Math.floor(Math.random() * cols),
      row: Math.floor(Math.random() * rows),
      char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      life: 0,
      ttl: 240 + Math.random() * 420,
    })

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.font = `500 13px "JetBrains Mono", monospace`
      const ink = accent()
      for (const g of ghosts) {
        // triangular envelope: fade in, hold nothing, fade out
        const t = g.life / g.ttl
        const alpha = 0.16 * Math.sin(Math.PI * Math.min(1, t))
        ctx.fillStyle = `rgb(${ink} / ${alpha.toFixed(3)})`
        ctx.fillText(g.char, g.col * CELL + 6, g.row * CELL + 16)
      }
    }

    const target = () => Math.floor(cols * rows * DENSITY)

    const tick = () => {
      const active = document.documentElement.dataset.edition === 'terminal'
      if (!active) {
        // idle cheaply until the edition comes back
        raf = null
        window.setTimeout(() => {
          if (document.documentElement.dataset.edition === 'terminal') loop()
          else tick()
        }, 600)
        return
      }
      ghosts = ghosts.filter((g) => (g.life += 1) < g.ttl)
      while (ghosts.length < target()) ghosts.push(spawn())
      draw()
      raf = requestAnimationFrame(tick)
    }
    const loop = () => {
      if (raf === null) raf = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduce) {
      // static constellation, painted once (and on resize)
      const paintStatic = () => {
        ghosts = Array.from({ length: target() }, spawn).map((g) => ({ ...g, life: g.ttl / 2 }))
        draw()
      }
      paintStatic()
      window.addEventListener('resize', paintStatic)
      return () => {
        window.removeEventListener('resize', resize)
        window.removeEventListener('resize', paintStatic)
      }
    }

    tick()
    return () => {
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="terminal-backdrop" aria-hidden="true" />
}
