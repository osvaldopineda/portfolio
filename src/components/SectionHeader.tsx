import Reveal from './Reveal'

export default function SectionHeader({
  index,
  title,
  kicker,
}: {
  index: string
  title: string
  kicker?: string
}) {
  return (
    <Reveal className="mb-14">
      <p className="eyebrow text-accent">{index}</p>
      <h2 className="serif-display mt-2 text-4xl leading-tight md:text-5xl">{title}</h2>
      {kicker && <p className="mt-4 max-w-xl leading-relaxed text-muted">{kicker}</p>}
    </Reveal>
  )
}
