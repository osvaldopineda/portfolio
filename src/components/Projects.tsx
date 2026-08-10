import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/context'
import type { Project } from '../i18n/types'

/**
 * Desktop gets a scroll-driven horizontal rail: the section is tall, a sticky
 * viewport pins the track, and vertical scroll progress maps to translateX.
 * Never hijacks the wheel — the scrollbar stays honest. Mobile and
 * prefers-reduced-motion get the vertical stack instead (same DOM count:
 * only one layout renders at a time).
 */
const useRail = () => {
  const [rail, setRail] = useState(false)
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setRail(wide.matches && !reduce.matches)
    update()
    wide.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      wide.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])
  return rail
}

function Links({ p, liveDemo, code }: { p: Project; liveDemo: string; code: string }) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {/* py-2/-my-2: 20px of text is a 36px touch target without moving a pixel
          of the layout. Thumbs on a phone, not a mouse. */}
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 py-2 -my-2 text-sm font-medium transition-colors hover:text-clay">
          {liveDemo} <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 py-2 -my-2 text-sm font-medium text-muted transition-colors hover:text-ink">
          <Github className="h-4 w-4" /> {code}
        </a>
      )}
      {p.status && <span className="font-mono text-xs text-muted">{p.status}</span>}
    </div>
  )
}

/**
 * Screenshots hang on a mat (raised board, generous padding) like mounted
 * prints — raw edge-to-edge captures with clashing UIs looked rough against
 * the paper. The mat is the shot-frame, so Riso's duotone develops over it.
 */
function Shot({ p }: { p: Project }) {
  if (!p.image) return null
  const img = (
    <img src={p.image} alt={p.live ? '' : p.imageAlt ?? ''} loading="lazy" className="aspect-[16/10] w-full rounded-sm border border-line object-cover object-top" />
  )
  return p.live ? (
    <a href={p.live} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true" className="shot-frame block rounded-lg border border-line bg-raised p-4 md:p-6">
      {img}
    </a>
  ) : (
    <div className="shot-frame rounded-lg border border-line bg-raised p-4 md:p-6">{img}</div>
  )
}

function VerticalList({ projects, liveDemo, code }: { projects: Project[]; liveDemo: string; code: string }) {
  return (
    <div className="border-t border-line">
      {projects.map((p) => (
        <Reveal key={p.name}>
          <article className="group grid gap-8 border-b border-line py-12 md:grid-cols-[1fr_minmax(0,420px)] md:items-center">
            <div>
              <div className="flex items-baseline gap-4">
                <h3 className="serif text-4xl leading-none transition-colors group-hover:text-clay md:text-6xl">{p.name}</h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">{p.blurb}</p>
              <p className="mt-5 font-mono text-xs text-muted">{p.stack.join(' · ')}</p>
              <div className="mt-6">
                <Links p={p} liveDemo={liveDemo} code={code} />
              </div>
            </div>
            <Shot p={p} />
          </article>
        </Reveal>
      ))}
    </div>
  )
}

function Rail({ projects, liveDemo, code }: { projects: Project[]; liveDemo: string; code: string }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [shift, setShift] = useState(0)

  // How far the track must travel: its full width minus one viewport.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => setShift(Math.max(0, track.scrollWidth - window.innerWidth))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [projects])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -shift])
  const barScale = scrollYProgress

  // Keyboard path: focusing a card scrolls the page to the spot where that
  // card is fully in view — transform-based panning breaks the browser's own
  // scroll-into-view, so we do it ourselves.
  //
  // Solve from measured geometry, never from the card's index: the track pans
  // by `shift` px over `travel` px of scroll, so the card whose layout offset
  // is `offset` needs progress = (offset - pad) / shift to land at the left
  // padding. Index arithmetic assumed cards were evenly spaced and dropped
  // focus off-screen once they weren't. Both mappings now read the same
  // `shift`, so they cannot drift apart.
  const focusCard = (card: HTMLElement) => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track || shift <= 0) return
    // Layout offset inside the track — both rects carry the same translateX,
    // so the transform cancels out.
    const offset = card.getBoundingClientRect().left - track.getBoundingClientRect().left
    const pad = window.innerWidth * 0.1 // matches px-[10vw]
    const progress = Math.min(1, Math.max(0, (offset - pad) / shift))
    const top = section.getBoundingClientRect().top + window.scrollY
    const travel = section.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + progress * travel, behavior: 'auto' })
    // The browser's scroll-into-view already ran by now, and `overflow: hidden`
    // does NOT stop it: it scrolls the sticky holder's hidden overflow sideways
    // to chase a card that only ever moves by transform. That silent scrollLeft
    // dragged the whole track off-screen. Put it back — every frame the panning
    // is ours alone.
    const holder = track.parentElement
    if (holder) {
      holder.scrollLeft = 0
      requestAnimationFrame(() => { holder.scrollLeft = 0 })
    }
  }

  return (
    // `relative`: useScroll warns (and may mis-measure offsets) when its target
    // is statically positioned.
    <div ref={sectionRef} className="relative" style={{ height: `${projects.length * 85 + 60}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Card width is capped so mat + caption always fit inside 100vh —
            at 62vw the mats clipped off the top of the viewport. */}
        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-[5vw] px-[10vw]">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group w-[46vw] max-w-[620px] shrink-0"
              // A card with no live demo and no repo has no focusable child, so
              // Tab used to skip past it and the rail never panned there.
              tabIndex={p.live || p.repo ? undefined : 0}
              onFocus={(e) => focusCard(e.currentTarget)}
            >
              <Shot p={p} />
              <div className="mt-5 flex items-baseline gap-4">
                <h3 className="serif text-2xl leading-none transition-colors group-hover:text-clay md:text-3xl">{p.name}</h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-muted">{p.blurb}</p>
              <p className="mt-2.5 font-mono text-xs text-muted">{p.stack.join(' · ')}</p>
              <div className="mt-3">
                <Links p={p} liveDemo={liveDemo} code={code} />
              </div>
            </article>
          ))}
        </motion.div>
        <div className="mx-auto mt-10 h-px w-40 bg-line" aria-hidden="true">
          <motion.div style={{ scaleX: barScale }} className="h-px origin-left bg-clay" />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { cv, ui } = useI18n()
  const t = ui.projects
  const rail = useRail()
  return (
    <section id="projects" className="py-20 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title={<>{t.title.pre}{t.title.accent}{t.title.post}</>} lead={t.lead} />
      </div>
      {rail ? (
        <Rail projects={cv.projects} liveDemo={t.liveDemo} code={t.code} />
      ) : (
        <div className="mx-auto max-w-6xl px-6">
          <VerticalList projects={cv.projects} liveDemo={t.liveDemo} code={t.code} />
        </div>
      )}
    </section>
  )
}
