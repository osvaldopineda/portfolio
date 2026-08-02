import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data/cv'
import { useI18n } from '../i18n/context'
import VariableName from './VariableName'

// Strong ease-out — the stock cubic settles too gently to read as deliberate
const EASE = [0.23, 1, 0.32, 1] as const

/**
 * Hero entrance. `MotionConfig reducedMotion="user"` does NOT cover this:
 * framer-motion only neutralises transform and layout animations, so opacity
 * and filter still run. The reduced variant drops the blur and shortens the
 * fade rather than removing it — gentler, not nothing.
 */
const useRise = () => {
  const reduce = useReducedMotion()
  return (delay: number) =>
    reduce
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.2, ease: 'linear' as const, delay: 0 },
        }
      : {
          initial: { opacity: 0, filter: 'blur(4px)' },
          animate: { opacity: 1, filter: 'blur(0px)' },
          transition: { duration: 0.5, ease: EASE, delay },
        }
}

export default function Hero() {
  const { cv, ui } = useI18n()
  const rise = useRise()
  return (
    <section id="top" className="relative mx-auto w-full max-w-6xl px-6">
      <div className="flex min-h-[100dvh] flex-col justify-center pt-24 pb-12">
        {/* name — the loudest move on the page */}
        <h1 className="serif tracking-tight2">
          <motion.span {...rise(0.08)} className="block text-[19vw] leading-[0.82] sm:text-[15vw] md:text-[11rem]">
            <VariableName text="Osvaldo" />
          </motion.span>
          <motion.span {...rise(0.14)} className="block text-[19vw] leading-[0.82] sm:text-[15vw] md:text-[11rem]">
            <VariableName text="Pineda" /><span className="text-clay">.</span>
          </motion.span>
        </h1>

        {/* role + tagline, offset right for editorial asymmetry */}
        <div className="mt-10 md:ml-[38%] md:max-w-xl">
          <motion.p {...rise(0.2)} className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {cv.profile.role}
          </motion.p>
          <motion.p {...rise(0.26)} className="serif-soft mt-4 text-2xl leading-[1.15] pb-1 md:text-[2rem]">
            {cv.profile.tagline}
          </motion.p>
          <motion.p {...rise(0.32)} className="mt-5 max-w-prose leading-relaxed text-muted">
            {cv.profile.summary}
          </motion.p>

          <motion.div {...rise(0.38)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PROFILE.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform duration-150 ease-out-strong hover:-translate-y-0.5 active:scale-[0.97]"
            >
              {ui.hero.downloadCv}
            </a>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-[color,border-color,transform] duration-150 ease-out-strong hover:border-ink/40 active:scale-[0.97]">
              <Mail className="h-4 w-4" /> {ui.hero.getInTouch}
            </a>
            <div className="flex items-center gap-3">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label={ui.hero.githubAria} className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-[border-color,transform] duration-150 ease-out-strong hover:border-ink/40 active:scale-[0.97]">
                <Github className="h-4 w-4" />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label={ui.hero.linkedinAria} className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-[border-color,transform] duration-150 ease-out-strong hover:border-ink/40 active:scale-[0.97]">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
