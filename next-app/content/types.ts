export interface HeroContent {
  badge: string
  h1: string
  h1Grad: string
  sub: string
  ticks: string[]
  metrics: { value: string; label: string }[]
  notes: string[]
  scribble: string
}

export interface TrustStripContent {
  title: string
  badges: string[]
}

export interface SiaTab {
  name: string
  desc: string
}

export interface SectionHeadingContent {
  badge: string
  h2: string
  h2Grad: string
  sub: string
}

export interface IndustryCard {
  key: string
  collapsedTitle: string
  collapsedSub: string
  kicker: string
  name: string
  story: string
  handles: string
  automates: string
  cta: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}
