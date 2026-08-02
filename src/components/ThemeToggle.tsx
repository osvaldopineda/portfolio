import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { Sun, Moon } from 'lucide-react'

// View Transitions API isn't in the default DOM lib types yet.
type DocumentWithVT = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> }
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch { /* storage unavailable */ }
  }, [dark])

  const toggle = () => {
    const doc = document as DocumentWithVT
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const btn = btnRef.current

    // Fallback: no View Transitions support, reduced motion, or no button ref.
    if (!doc.startViewTransition || reduce || !btn) {
      setDark((d) => !d)
      return
    }

    const r = btn.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    const transition = doc.startViewTransition(() => {
      flushSync(() => setDark((d) => !d))
    })
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 520, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <button
      ref={btnRef}
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-[border-color,transform] duration-150 hover:border-ink/30 active:scale-[0.94]"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
