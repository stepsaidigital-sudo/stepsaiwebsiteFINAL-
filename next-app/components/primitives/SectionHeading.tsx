import { GradText } from "./GradText"

interface SectionHeadingProps {
  badge: string
  h2: string
  h2Grad?: string
  sub?: string
  as?: "h2" | "h1"
}

export function SectionHeading({ badge, h2, h2Grad, sub, as = "h2" }: SectionHeadingProps) {
  const Heading = as
  return (
    <>
      <span className="badge">{badge}</span>
      <Heading className="sec-title">
        {h2} {h2Grad ? <GradText>{h2Grad}</GradText> : null}
      </Heading>
      {sub ? <p className="sec-sub">{sub}</p> : null}
    </>
  )
}
