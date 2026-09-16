import type { ReactNode } from "react"

export function GradText({ children }: { children: ReactNode }) {
  return <span className="grad-text">{children}</span>
}
