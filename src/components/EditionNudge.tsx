import { useEffect } from 'react'
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { useI18n } from '../i18n/context'

/**
 * One-time spotlight on the edition toggle: 2.5s after a first visit,
 * driver.js dims the page lightly and points at the button; the CTA doesn't
 * explain the magic, it TRIGGERS it (destroys the popover, then clicks the
 * toggle so the print-roller wipe fires). Shows once ever — the same
 * `edition-hint-seen` flag the toggle writes, so anyone who already switched
 * on their own never sees it.
 */
export default function EditionNudge() {
  const { ui } = useI18n()

  useEffect(() => {
    try {
      if (localStorage.getItem('edition-hint-seen')) return
    } catch {
      return
    }
    const timer = setTimeout(() => {
      try {
        localStorage.setItem('edition-hint-seen', '1')
      } catch {
        /* storage unavailable */
      }
      const d = driver({
        overlayOpacity: 0.45,
        stagePadding: 6,
        stageRadius: 999,
        showButtons: ['next', 'close'],
        // Single step → driver renders the "done" variant of the next button.
        nextBtnText: ui.nav.editionNudgeCta,
        doneBtnText: ui.nav.editionNudgeCta,
        onNextClick: () => {
          d.destroy()
          // Let the overlay leave before the view-transition wipe starts.
          setTimeout(() => document.getElementById('edition-toggle')?.click(), 80)
        },
        steps: [
          {
            element: '#edition-toggle',
            popover: {
              title: ui.nav.editionNudgeTitle,
              description: ui.nav.editionNudgeBody,
              side: 'bottom',
              align: 'end',
            },
          },
        ],
      })
      d.drive()
    }, 2500)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
