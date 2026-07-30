import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { useI18n } from '../i18n/context'
import { getEdition, nextEdition, setEdition, type Edition } from '../edition'

// View Transitions API isn't in the default DOM lib types yet.
type DocumentWithVT = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> }
}

const NUMERAL: Record<Edition, string> = { editorial: 'I', riso: 'II' }

/**
 * Cycles the design edition. The switch is the wow moment: a print-roller
 * wipe via the View Transitions API — top-down into Riso (the sheet coming
 * off the drum), bottom-up back to Editorial. Instant under reduced motion.
 */
export default function EditionToggle() {
  const { ui } = useI18n()
  const [edition, setState] = useState<Edition>(() =>
    typeof document !== 'undefined' ? getEdition() : 'editorial',
  )
  // One-time discoverability hint; retires forever after the first switch.
  const [hint, setHint] = useState<boolean>(() => {
    try {
      return !localStorage.getItem('edition-hint-seen')
    } catch {
      return false
    }
  })
  const btnRef = useRef<HTMLButtonElement>(null)

  const names: Record<Edition, string> = {
    editorial: ui.nav.editionEditorial,
    riso: ui.nav.editionRiso,
  }

  const apply = (e: Edition) => {
    setEdition(e)
    setState(e)
  }

  const toggle = () => {
    try {
      localStorage.setItem('edition-hint-seen', '1')
    } catch {
      /* storage unavailable */
    }
    setHint(false)
    const target = nextEdition(edition)
    const doc = document as DocumentWithVT
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!doc.startViewTransition || reduce) {
      apply(target)
      return
    }

    const transition = doc.startViewTransition(() => {
      flushSync(() => apply(target))
    })
    transition.ready.then(() => {
      const wipe =
        target === 'riso'
          ? ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'] // roller feeds the sheet downward
          : ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'] // and pulls it back up
      document.documentElement.animate(
        { clipPath: wipe },
        { duration: 620, easing: 'cubic-bezier(0.32, 0.72, 0, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <>
      {hint && (
        <span className="hidden items-center gap-1.5 font-mono text-[11px] text-muted lg:flex">
          {ui.nav.editionHint} <span aria-hidden="true">→</span>
        </span>
      )}
      <button
        ref={btnRef}
        onClick={toggle}
        aria-label={`${ui.nav.editionAria} ${names[edition]}`}
        title={names[nextEdition(edition)]}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line font-mono text-xs text-ink transition-colors hover:border-ink/30"
      >
        {NUMERAL[edition]}
      </button>
    </>
  )
}
