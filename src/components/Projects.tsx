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
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-clay">
          {liveDemo} <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink">
          <Github className="h-4 w-4" /> {code}
        </a>
      )}
      {p.status && <span className="font-mono text-xs text-muted">{p.status}</span>}
    </div>
  )
}

function Shot({ p }: { p: Project }) {
  if (!p.image) return null
  const img = (
    <img src={p.image} alt={p.live ? '' : p.imageAlt ?? ''} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
  )
  return p.live ? (
    <a href={p.live} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true" className="shot-frame block overflow-hidden rounded-lg border border-line">
      {img}
    </a>
  ) : (
    <div className="shot-frame overflow-hidden rounded-lg border border-line">{img}</div>
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
  const focusCard = (i: number) => {
    const section = sectionRef.current
    if (!section) return
    const top = section.offsetTop
    const travel = section.offsetHeight - window.innerHeight
    window.scrollTo({ top: top + (i / Math.max(1, projects.length - 1)) * travel, behavior: 'auto' })
  }

  return (
    <div ref={sectionRef} style={{ height: `${projects.length * 85 + 60}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-stretch gap-[5vw] px-[10vw]">
          {projects.map((p, i) => (
            <article key={p.name} className="group w-[62vw] max-w-[820px] shrink-0" onFocus={() => focusCard(i)}>
              <Shot p={p} />
              <div className="mt-6 flex items-baseline gap-4">
                <h3 className="serif text-3xl leading-none transition-colors group-hover:text-clay md:text-4xl">{p.name}</h3>
                <span className="font-mono text-xs text-muted">{p.year}</span>
              </div>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{p.blurb}</p>
              <p className="mt-3 font-mono text-xs text-muted">{p.stack.join(' · ')}</p>
              <div className="mt-4">
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
