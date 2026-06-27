import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { PROFILE } from '../data/cv'
import Marquee from './Marquee'

const EASE = [0.16, 1, 0.3, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
})

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto w-full max-w-6xl px-6">
      <div className="flex min-h-[92vh] flex-col justify-center pt-32 pb-12">
        {/* status */}
        <motion.p {...rise(0.05)} className="mb-10 flex items-center gap-2.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-clay" />
          </span>
          Available for new roles — {PROFILE.location}
        </motion.p>

        {/* name — the loudest move on the page */}
        <h1 className="serif font-normal tracking-tight2">
          <motion.span {...rise(0.12)} className="block text-[19vw] leading-[0.82] sm:text-[15vw] md:text-[11rem]">
            Osvaldo
          </motion.span>
          <motion.span {...rise(0.2)} className="block text-[19vw] leading-[0.82] sm:text-[15vw] md:text-[11rem]">
            Pineda<span className="text-clay">.</span>
          </motion.span>
        </h1>

        {/* role + tagline, offset right for editorial asymmetry */}
        <div className="mt-10 md:ml-[38%] md:max-w-xl">
          <motion.p {...rise(0.3)} className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {PROFILE.role}
          </motion.p>
          <motion.p {...rise(0.36)} className="serif mt-4 text-2xl italic leading-snug md:text-[2rem]">
            {PROFILE.tagline}
          </motion.p>
          <motion.p {...rise(0.44)} className="mt-5 max-w-prose leading-relaxed text-muted">
            {PROFILE.summary}
          </motion.p>

          <motion.div {...rise(0.52)} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PROFILE.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              Download CV
            </a>
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink/40">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink/40">
              <Github className="h-4 w-4" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink/40">
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.a
          {...rise(0.7)}
          href="#work"
          aria-label="Scroll to work"
          className="group mt-14 flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowDown className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-y-1" /> Seven years, scrolled
        </motion.a>
      </div>

      <Marquee />
    </section>
  )
}
