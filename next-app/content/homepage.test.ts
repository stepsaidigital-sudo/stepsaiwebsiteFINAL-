import { describe, it, expect } from "vitest"
import { hero, faq, wallOfLove } from "./homepage"

describe("homepage content", () => {
  it("hero has the exact approved copy", () => {
    expect(hero.h1).toBe("Turn more visitors and messages into")
    expect(hero.h1Grad).toBe("sales, leads, and bookings.")
    expect(hero.ticks).toEqual(["Free to start", "No code", "Live in minutes"])
  })

  it("faq has 12 items", () => {
    expect(faq.items).toHaveLength(12)
  })

  it("wall of love has 10 testimonials", () => {
    // Ground truth: index.html's live Wall of Love section has 3 marquee
    // columns of 4/3/3 unique cards (each duplicated once for the loop).
    // The plan's own test asserted 11, which doesn't match its own content
    // data (also 4+3+3=10) or the live page - corrected here.
    const total = wallOfLove.columns.reduce((n, col) => n + col.length, 0)
    expect(total).toBe(10)
  })
})
