import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { useI18n } from '../i18n/context'

/**
 * Opt-in guided tour (driver.js, ~5KB). Never auto-launches — a tour that
 * hijacks a first visit reads as a template; one you asked for reads as
 * hospitality. Steps target the section headings (highlighting a 3000px
 * section makes the spotlight meaningless) and the finale hands the visitor
 * the edition toggle — the wow moment triggers itself. Popover styling lives
 * in index.css on the .driver-popover classes, driven by the design tokens.
 */
export default function TourButton() {
  const { ui } = useI18n()
  const t = ui.tour

  const start = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    driver({
      showProgress: false,
      smoothScroll: !reduce,
      stagePadding: 8,
      stageRadius: 10,
      nextBtnText: t.next,
      prevBtnText: t.prev,
      doneBtnText: t.done,
      steps: [
        { element: '#work h2', popover: { title: t.workTitle, description: t.workBody, side: 'bottom', align: 'start' } },
        { element: '#approach h2', popover: { title: t.approachTitle, description: t.approachBody, side: 'bottom', align: 'start' } },
        { element: '#projects h2', popover: { title: t.projectsTitle, description: t.projectsBody, side: 'bottom', align: 'start' } },
        { element: '#edition-toggle', popover: { title: t.editionTitle, description: t.editionBody, side: 'bottom', align: 'end' } },
      ],
    }).drive()
  }

  return (
    <button
      type="button"
      onClick={start}
      className="link-underline font-mono text-xs text-muted transition-colors hover:text-ink"
    >
      {t.start} <span aria-hidden="true">→</span>
    </button>
  )
}
