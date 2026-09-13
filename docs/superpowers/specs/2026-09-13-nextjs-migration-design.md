# StepsAI Landing Site — Next.js Migration (Phase 1: Homepage)

**Status:** Approved by Sai (2026-09-13), ready for implementation planning.

## Context

The StepsAI marketing site (`stepsai-landing/`) is currently 57 plain HTML pages
sharing ~40 hand-written CSS/JS files (`styles.css`, `home-v2.css`,
`home-analytics-chart.js`, `nav.js`, etc.). Sai's technical contact has directed
a full stack migration to Next.js. This spec covers **Phase 1 only**: standing
up the new stack and porting the homepage (`index.html`) pixel-for-pixel.
Phases 2+ (industry pages, channel pages, blog, etc.) are explicitly out of
scope here and will each get their own spec once Phase 1 ships.

## Decisions (from brainstorming)

| Question | Decision |
|---|---|
| Who builds it | Claude Code writes the app code directly |
| Design fidelity | Pixel-for-pixel port of the current homepage — no redesign in this phase |
| New project location | `stepsai-landing/next-app/` — new folder in the same repo; the existing static site is untouched and keeps running until cutover |
| shadcn/ui role | Structural only (unstyled primitives for behavior/accessibility) — re-themed to match the current visual design exactly, not shadcn's default look |
| Motion library | Framer Motion (`motion` / motion.dev) |
| Deployment target | Not decided yet — out of scope for this phase, keep current hosting for now |
| Migration strategy | Design-system-first (see Approach B below) over a direct 1:1 port or a full decoupled-CMS content layer |

### Why design-system-first over the alternatives
- **Direct port** (each section as one-off inline JSX) is faster for just the
  homepage but creates zero reusable foundation for the other 56 pages —
  every later phase re-invents the same buttons/cards/badges/reveal wrappers.
- **Full content/CMS layer** (content fully decoupled into JSON/MDX, closer to
  headless CMS) is premature: this site is edited by Sai directing Claude Code
  to change files directly, not by a non-technical editor through a CMS UI —
  the extra indirection wouldn't pay for itself.
- **Design-system-first** builds a themed component library on shadcn/ui once,
  then assembles the homepage from it with typed content objects. Slightly
  more upfront work than a direct port, but every later phase reuses the same
  primitives and content pattern, which is the entire point of doing this
  "phase-wise."

## Architecture & folder structure

```
next-app/
  app/
    layout.tsx          # root layout: fonts, <html> theme setup
    page.tsx             # homepage route ("/") — assembles the 15 sections
    globals.css          # Tailwind base + design tokens as CSS variables
  components/
    ui/                  # shadcn/ui primitives (button, badge, tabs, accordion, dialog...)
    primitives/          # themed wrappers: SectionHeading, GradText, RevealOnScroll, Marquee, StatPlate
    sections/            # one file per homepage section: Hero.tsx, TrustStrip.tsx, WhatItDoes.tsx, Industries.tsx, ...
  content/
    homepage.ts           # typed content objects, one export per section
  lib/
    utils.ts              # cn() helper, shared utilities
  public/
    images/                # ported from the current /images
  tailwind.config.ts       # theme tokens matched to current styles.css
  package.json
```

Each `sections/*.tsx` component is self-contained and takes its content as
typed props or imports directly from `content/homepage.ts`. This is what makes
a section portable to later pages — e.g. the `Industries` section's shape gets
reused (not rebuilt) when `industries.html` is migrated in a later phase.

No shared build step with the existing static site; `next-app/` is a fully
independent Node/Next.js project living alongside the HTML files.

## Design system layer

Built **before** the homepage is assembled, since every section depends on it.

- **Tailwind theme**: colors (`--accent`, `--text-primary`, `--bg-surface`,
  etc.), spacing, radii, and the blue gradient used by `.grad-text` extracted
  from the current `styles.css` / `home-v2.css` custom properties into
  `tailwind.config.ts` — matched exactly, not approximated.
- **shadcn/ui primitives** installed and re-themed (never left at shadcn
  default styling): `Button`, `Badge`, `Tabs`, `Accordion`, `Dialog` — back the
  FAQ accordion and the channel/marketing/workflow tab switchers.
- **Custom primitives** (site-specific, not in shadcn):
  - `GradText` — the blue-gradient span used in every section heading
  - `SectionHeading` — the repeated badge + H2 + sub pattern
  - `RevealOnScroll` — Framer Motion `whileInView` wrapper, replacing the
    current `IntersectionObserver`-based `.reveal` classes
  - `Marquee` — infinite-scroll logo/app-pill strip
  - `StatPlate` — the hero's 4-metric row

## Content/data model

`content/homepage.ts` holds one typed export per section, mirroring the copy
doc structure directly, e.g.:

```ts
export const hero = {
  badge: "AI AGENT FOR SALES AND SUPPORT",
  h1: "Turn more visitors and messages into",
  h1Grad: "sales, leads, and bookings.",
  sub: "Steps AI answers customer questions on your website, WhatsApp, Instagram and Messenger...",
  ticks: ["Free to start", "No code", "Live in minutes"],
  metrics: [
    { value: "8 in 10", label: "questions answered without you" },
    { value: "95+", label: "languages" },
    { value: "0.5s", label: "average reply time" },
    { value: "3×", label: "conversion lift, results vary" },
  ],
} satisfies HeroContent
```

Each section component imports its slice and renders it — a copy edit becomes
a one-file data change, not a JSX hunt. `satisfies` gives TypeScript checking
against a shared content type without losing literal-type inference.

Interactive/stateful content (hero chat demo replay, channel tab state, the
analytics dashboard's chart data) stays as component-local state/props, not
flattened into `content/` — only static copy and structural lists (tabs,
testimonials, FAQ items) live there.

## Motion & animation strategy

| Current effect | New approach |
|---|---|
| `.reveal` / `IntersectionObserver` scroll-fade-ins | `RevealOnScroll` wrapping `motion.div` + `whileInView` |
| Hero canvas tunnel (`#heroTunnel`) | Kept as vanilla `<canvas>` + `useEffect` — not a Framer Motion use case |
| Marquee logo/app-pill infinite scroll | CSS `@keyframes` (as today) inside the `Marquee` primitive — cheaper than JS-driven motion for constant-speed loops |
| Tab switching (channels, WhatsApp/Instagram, workflows) | shadcn `Tabs` + `AnimatePresence` for panel cross-fade |
| Hero chat demo replay / typing sequence | `useState`/`useReducer` state machine driving sequential Framer Motion `animate` calls, replacing the hand-rolled JS timer chain |
| Chart.js dashboards (line + donut) | Chart.js ported as-is via a thin `react-chartjs-2` wrapper — not animation-library-specific, no reason to replace a working charting lib |

## Testing strategy

This is a marketing site with no business logic or data mutations, so full TDD
isn't the right fit; testing is applied selectively:

- **Unit tests**: not for presentational section components (low value) — but
  real unit tests for non-trivial logic (chat-demo state machine, analytics
  tab/date-range logic).
- **Visual parity check**: since the goal is pixel-for-pixel, verification is
  a side-by-side screenshot diff (Playwright) against the current live
  homepage, per section — this is the real acceptance test for Phase 1.
- **A11y smoke check**: one axe-core pass against the built page (shadcn
  primitives get most of this for free).

## Phase plan

- **Phase 1 (this spec)**: scaffold `next-app/`, build the design-system
  layer, port the homepage (15 sections) pixel-for-pixel, verify via
  screenshot diff. Ends with a working `npm run dev` that can be clicked
  through end to end.
- **Phase 2+ (future, separate specs)**: one additional page-group per phase
  (industry pages, channel pages, blog, etc.), each reusing Phase 1's
  primitives. Not scoped in detail here — planned when we get there.

## Out of scope for Phase 1

- Any page other than the homepage
- Deployment/hosting setup
- Visual redesign of any kind (explicitly pixel-for-pixel)
- CMS/decoupled content authoring
