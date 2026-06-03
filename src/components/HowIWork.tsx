import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

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
    <section id="approach" className="border-y border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeader
          index="03 / How I work"
          title="Principles, not buzzwords."
          kicker="The standards I hold every project to — whether it’s a local business site or a banking platform."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05} className="bg-card">
              <div className="h-full p-8">
                <span className="font-mono text-sm text-accent">{p.n}</span>
                <h3 className="serif-display mt-3 text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
