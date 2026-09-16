import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { RevealOnScroll } from "./RevealOnScroll"
import { StatPlate } from "./StatPlate"

describe("RevealOnScroll", () => {
  it("renders children inside the given reveal variant class", () => {
    render(
      <RevealOnScroll variant="reveal-left">
        <p>content</p>
      </RevealOnScroll>
    )
    expect(screen.getByText("content").parentElement).toHaveClass("reveal-left")
  })
})

describe("StatPlate", () => {
  it("renders every metric value and label", () => {
    render(
      <StatPlate
        metrics={[
          { value: "8 in 10", label: "questions answered without you" },
          { value: "95+", label: "languages" },
        ]}
      />
    )
    expect(screen.getByText("8 in 10")).toBeInTheDocument()
    expect(screen.getByText("languages")).toBeInTheDocument()
  })
})
