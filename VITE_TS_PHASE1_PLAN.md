# Vite + TypeScript Rebuild — Phase 1 Sizing Plan

**Status:** Planning only. Nothing in this repo has been touched to produce this
document. The 56 existing HTML pages, their CSS/JS, and the separate
`next-app/` (an unrelated, already in-progress Next.js migration of the
homepage) are all untouched and out of scope here.

**Audience:** the external developer/tech team taking on the rebuild.

**Non-negotiable constraint:** pixel-for-pixel visual parity. Nothing about
the design — layout, spacing, color, type, motion — changes as part of this
rebuild. This is a tooling/architecture migration, not a redesign.

---

## 1. What exists today

A static HTML/CSS/vanilla-JS site, no build step, no framework:

| Asset type | Count | Total size |
|---|---|---|
| HTML pages | 56 | 4.2 MB |
| CSS files | 39 | 852 KB |
| JS files | 16 | 296 KB |
| `images/` | — | 26 MB |

Every page links the same shared foundation:
- `styles.css` (69 KB) — design tokens, base layout, and **all nav/mega-menu
  styling** — linked on all 56 pages.
- `nav.js` (23 KB) — nav open/close, dropdown, scroll state — linked on all
  56 pages.
- `nav-mega-product.css` (new, 4 KB) — the 7-column Product mega-menu, linked
  on all 56 pages (just fixed to match the homepage; see recent commits).

Beyond that shared shell, each page pulls its own extra CSS/JS as needed
(e.g. `agents.html` → `agents.css` + `agents.js`; `pricing.html` →
`pricing.css` + `pricing.js`). `index.html` is by far the heaviest single
page (249 KB HTML, plus `home.css`/`home-v2.css`/`home-professional.css`/
`hero-premium.css`/`home-finish.css` and five homepage-only JS files), because
it carries the full hero, animated dashboards, and revenue-flow demo that no
other page has.

Third-party runtime dependency: Chart.js, loaded from CDN, used only on
`index.html`. Fonts: Schibsted Grotesk, JetBrains Mono, Caveat — all Google
Fonts, loaded the same way on every page.

## 2. Why this is a meaningful rebuild, not a wrapper

A few things make this bigger than "point Vite at the HTML folder":

- **No components today.** The nav (461 lines of markup) is physically
  duplicated in all 56 files. Moving to Vite + TypeScript only pays off if
  the nav, footer, and repeated UI patterns (mega-menu columns, testimonial
  cards, FAQ accordions, pricing tables) become real components — otherwise
  the duplication just moves from `.html` copy-paste to `.tsx` copy-paste.
- **Interaction logic is currently DOM-string-query vanilla JS**
  (`nav.js`, `home.js`, `home-v2.js`, `industries.js`, etc.), written
  against specific `id`/`class` hooks. Each of these needs to be read and
  either ported to typed modules/hooks or rewritten against whatever
  component model the developer picks (plain TS + Vite, or Vite + a UI
  framework — that choice isn't specified yet, see §5).
- **`index.html` is a different order of complexity** than the other 55
  pages combined (charts, multi-step animated demo, scroll-triggered
  reveals). It should be treated as its own phase, not folded into the
  "convert 55 pages" batch.
- **Cross-page consistency has broken before** (this project's own git
  history: the nav bar and its mega-menu drifted out of sync across pages
  twice in the last day alone). A component-based rebuild is largely *for*
  eliminating that failure mode — worth calling out to the developer as the
  main payoff, not just "using Vite."

## 3. Recommended Phase 1 scope

Phase 1 = foundation only. Do **not** attempt to convert all 56 pages in
phase 1.

1. New, separate project folder (e.g. `vite-app/`, sibling to `next-app/`),
   scaffolded with Vite + TypeScript. Framework choice (React/Vue/Svelte/
   vanilla-TS) is the developer's call per their own stack — not specified
   by the tech team's requirement, which only named Vite + TypeScript.
2. Port the shared foundation first, as components/modules:
   - Design tokens / base styles from `styles.css`
   - Nav + mega-menu (all four dropdowns: Product, Solutions, Partnership,
     Resources) as one component, built once, used everywhere
   - Footer
   - Fonts and shared image assets
3. Convert 2–3 representative pages end-to-end as the proof of pattern:
   - One simple content page (e.g. `about.html` or `privacy-policy.html`)
   - One page with a recurring pattern used across many pages (e.g.
     `industry-ecommerce.html`, representative of the 7 `industry-*.html`
     pages, or `role-sales.html`, representative of the 5 `role-*.html`
     pages)
   - One page with non-trivial JS (e.g. `pricing.html` with `pricing.js`,
     or `channel-whatsapp.html`)
4. Explicitly out of scope for phase 1: `index.html` (separate phase,
   given its size and the Chart.js/animation surface area), and bulk
   conversion of the remaining ~53 pages (phase 2+, once the pattern from
   step 3 is validated against the design as-built).
5. Visual regression check-in point: after step 3, compare each converted
   page against its current live HTML version (side-by-side or diff
   screenshots) before proceeding to phase 2. This is the gate that
   protects the "design doesn't change" constraint.

## 4. What the developer needs from this repo

Read-only inputs, nothing to modify:
- All 56 `.html` files (source of truth for markup/copy/structure)
- All `.css` files (source of truth for styling — note `styles.css` +
  `nav-mega-product.css` are the shared nav/mega-menu styling, everything
  else is mostly page-specific)
- All `.js` files (source of truth for behavior)
- `images/` (assets)
- `SUBPAGE_DESIGN_SYSTEM.md` and `DESIGN_ANIMATION_SYSTEM.md` (existing docs
  in this repo already describing the design system and motion patterns —
  worth reading before starting, they answer a lot of "why is this styled
  this way" questions)

## 5. Open questions for the tech team (not decided here)

- Framework on top of Vite (React/Vue/Svelte/vanilla), if any
- Whether phase 2+ pages get converted by template/page-type (industries,
  roles, channels, blog) or strictly one at a time
- Hosting/deploy target for the new build output
- Whether `index.html`'s eventual conversion happens in this Vite project
  or is left to the parallel `next-app/` effort (the two migrations
  currently have no relationship to each other and that should probably be
  resolved before phase 2, not during it)
