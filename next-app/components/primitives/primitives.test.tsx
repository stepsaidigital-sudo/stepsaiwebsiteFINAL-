import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { GradText } from "./GradText"
import { SectionHeading } from "./SectionHeading"
import { ChannelIcon } from "./ChannelIcon"

describe("GradText", () => {
  it("renders a span.grad-text", () => {
    render(<GradText>sales, leads, and bookings.</GradText>)
    const el = screen.getByText("sales, leads, and bookings.")
    expect(el.tagName).toBe("SPAN")
    expect(el).toHaveClass("grad-text")
  })
})

describe("SectionHeading", () => {
  it("renders badge, h2 (with grad-text tail), and sub", () => {
    render(
      <SectionHeading
        badge="Industries"
        h2="Works in your industry,"
        h2Grad="from day one."
        sub="Steps AI reads your own website, products, and documents."
      />
    )
    expect(screen.getByText("Industries")).toHaveClass("badge")
    expect(screen.getByText("from day one.")).toHaveClass("grad-text")
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("sec-title")
    expect(screen.getByText(/Steps AI reads your own website/)).toHaveClass("sec-sub")
  })
})

describe("ChannelIcon", () => {
  it("renders an svg for a known channel", () => {
    const { container } = render(<ChannelIcon channel="whatsapp" />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })
})
