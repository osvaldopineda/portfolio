import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { PROFILE, STATS } from '../data/cv'

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const, delay },
})

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <motion.p {...fade(0.05)} className="mb-7 flex items-center gap-2.5 eyebrow text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new roles · {PROFILE.location}
        </motion.p>

        <motion.h1 {...fade(0.12)} className="text-[15vw] font-extrabold leading-[0.86] tracking-tight sm:text-7xl md:text-8xl">
          Osvaldo
          <br />
          Pineda<span className="text-accent">.</span>
        </motion.h1>

        <motion.p {...fade(0.2)} className="serif-display mt-8 max-w-3xl text-3xl italic leading-snug text-ink md:text-4xl">
          {PROFILE.tagline}
        </motion.p>

        <motion.p {...fade(0.28)} className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
          {PROFILE.summary}
        </motion.p>

        {/* Links */}
        <motion.div {...fade(0.36)} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={PROFILE.cv}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform active:scale-95"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/40">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink/40">
            <Github className="h-4 w-4" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink/40">
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fade(0.46)} className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card px-5 py-6">
              <div className="font-mono text-3xl font-medium text-accent">{s.value}</div>
              <div className="mt-1.5 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
