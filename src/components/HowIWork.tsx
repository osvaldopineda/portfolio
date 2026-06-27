import Reveal from './Reveal'

const PRINCIPLES = [
  {
    n: '01',
    title: 'Accessible by default',
    body: 'WCAG 2.1/2.2 AA and ARIA from the first commit — not bolted on at the end. Software everyone can actually use.',
  },
  {
    n: '02',
    title: 'Secure from the start',
    body: 'Fintech habits everywhere: PCI DSS mindset, JWT auth, encrypted storage and least-privilege access — even on small projects.',
  },
  {
    n: '03',
    title: 'Measured, not guessed',
    body: 'Performance and quality I can prove — profiling, A/B testing and high test coverage with Jest & Cypress before anything ships.',
  },
  {
    n: '04',
    title: 'AI-assisted, craft-led',
    body: 'Agentic workflows (Cursor, Claude Code) to move fast — without trading away clarity, ownership or the details that matter.',
  },
]

export default function HowIWork() {
  return (
    <section id="approach" className="bg-slab text-slab-ink">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal className="mb-16 max-w-2xl">
          <h2 className="serif text-4xl leading-[1.02] tracking-tight2 md:text-6xl">
            Principles, not <span className="italic text-[#E08763]">buzzwords.</span>
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slab-muted">
            The standards I hold every project to — whether it’s a local business site or a banking platform.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden border-t border-white/10 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="border-b border-white/10 py-10 md:px-2">
                <span className="font-mono text-sm text-[#E08763]">{p.n}</span>
                <h3 className="serif mt-4 text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-slab-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
