import "@testing-library/jest-dom/vitest"

// jsdom has no IntersectionObserver; Framer Motion's whileInView/onViewportEnter
// (used by RevealOnScroll) needs one to mount without throwing.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin: string = ""
  readonly thresholds: ReadonlyArray<number> = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver)
