# Steps AI — Master Subpage Design System

Standing reference for every product/feature landing page on this site (channel pages, agent pages, CRM/Analytics/Inbox/Integrations/Workflows/Broadcast, Skills, and any future page). Supplied by Sai on 2026-09-11. Read this before touching any subpage's design — it governs visual direction, layout, typography, motion, and copy for pages that are NOT the homepage.

The homepage (`index.html`) is the reference implementation. This document exists so every other page reads as "another page of the same site," not a new design.

---

## 1. Core visual direction

Premium B2B SaaS. Modern, minimal, product-first, confident, editorial, high whitespace, conversion-focused. Should read as a funded SaaS company's page, not an AI-generated template.

Use the site's existing brand tokens (`styles.css` `:root` vars) — do not introduce new colors.

- Very light blue/white page background
- Deep navy/near-black typography
- Steps AI electric blue (`--accent`) as the only primary action/accent
- Soft blue/lilac atmospheric gradients (very subtle)
- White product surfaces, thin cool-gray borders, subtle shadows

**Channel-specific colors (WhatsApp green, Instagram pink/purple, Shopify green, Messenger blue) are confined to: official icons, tiny status indicators, and realistic product/channel UI chrome ONLY.** They must never tint a whole box, section background, or ambient wash — the page stays on Steps AI blue everywhere except those small, literal, channel-accurate touches.

## 2. Layout system

One consistent grid, reused across sections — no random per-section widths.

- Desktop max-width ~1240–1280px, 12-column grid, generous horizontal padding
- Section spacing: ~120–160px desktop, ~80–100px tablet, ~64–80px mobile
- Intentional whitespace — avoid giant empty sections AND avoid over-carding. Not every fact needs a container.

## 3. Typography

Existing font stack only (Inter + Geist Mono, per `styles.css`), never a new font.

- Hero H1: ~60–72px desktop, tight tracking, line-height ~0.98–1.05
- Section H2: ~42–52px
- Body: 17–19px, muted navy/gray, comfortable line-height
- Eyebrow: small uppercase label, blue, letter-spaced, optionally numbered ("01 SALES AGENT")
- Headlines short. Default left-aligned; centered only where it improves hierarchy (final CTA, mainly).

## 4. Hero

Follow the site's existing hero pattern (`.vertical-hero`/`.vertical-hero-inner`, ~50/50 or 55/45 split).

- LEFT: eyebrow, H1, one short paragraph, primary CTA (+ secondary where useful), small trust/friction-reducers, optional compact metrics.
- RIGHT: the product UI itself as the hero artwork — a real use case (message → AI response → action taken: recommendation, lead captured, appointment booked, order tracked). No robots, no abstract 3D, no stock photos, no decorative blobs as the main visual. A visitor should understand what the feature does without reading further.

## 5. Product UI style

Realistic but polished: white/off-white surfaces, 16–24px radius, 1px subtle border, soft layered shadow, real chat bubbles, small status indicators, channel icons, real (not lorem-ipsum) product information. Interactions should read in 3–5 seconds.

## 6. Section story (per page, not identical every time)

Recommended architecture — the visual system stays constant, the narrative adapts to the feature:

1. Hero — what it does + interactive demo
2. Real scenario / problem — one believable customer moment
3. How it works — visual sequence, not a long explanation
4. Core capabilities — max 3–4
5. Product in action — a larger interactive-feeling demo
6. Business outcome / differentiation
7. Integrations / trust / control — only if relevant to this feature
8. FAQ — reuse the existing component exactly
9. Final CTA — sharp, minimal
10. Existing footer — reused verbatim

## 7. Section transitions

Sections should feel connected: white → pale blue → white → very subtle blue/lilac wash → dark CTA. No hard random color jumps, no decorative waves everywhere, no giant blank gaps. A product UI element may slightly overlap into the next section for continuity.

## 8. Motion system

Animation only where it makes the product easier to understand — never animation for its own sake.

- Global scroll reveal: opacity 0→1, translateY 18–24px→0, ~550–700ms, ease-out. Stagger related cards ~70–100ms apart. Don't animate every paragraph individually.
- Hero: H1 → paragraph → CTA in sequence, product UI enters slightly after (opacity + ~12px vertical + very slight scale, ~700ms).
- Chat demo: customer bubble → 150–300ms pause → typing indicator → AI response → relevant action card. No slow typewriter text.
- Section transition: outgoing content may shift ~10–20px up as the next section fades/slides in. No dramatic parallax.
- Cards on hover: translateY(-2px), slightly stronger shadow, clearer border, 180–220ms.
- Buttons: tiny elevation/arrow movement on hover, never a bounce.
- Metrics: count-up once on first viewport entry, under ~1s.
- FAQ accordion: smooth height+opacity, ~220–280ms, chevron/plus rotates cleanly.
- Respect `prefers-reduced-motion` — disable nonessential animation when set (matches the site's existing `reduceMotion` convention in nav.js/industries.js/home-v2.js).

## 9. Optional scroll-story for multi-step demos

Desktop: left column = numbered steps, right column = one sticky product UI that updates as each step scrolls into view (state changes, not three separate mockups). Disable sticky on mobile — stack steps naturally instead.

## 10. Cards

Used selectively: 16–20px radius, 1px subtle cool border, white/slightly tinted surface, 24–32px padding, minimal shadow. Max 3 cards per capability row typically. Simple small line icons, Steps blue unless channel semantics require otherwise (see §1) — never huge icon illustrations.

## 11. FAQ

Reuse the existing `.faq-grid`/`.faq-item` component and behavior exactly (typography, width, borders, spacing, accordion interaction, chevron behavior, animation, responsive behavior). Only swap the actual questions/answers for feature-specific ones — reuse existing ones verbatim where they already apply. Don't invent FAQs the page doesn't need.

## 12. Final CTA

Dark navy/near-black section, sharp contrast from the light sections above. Large centered headline, max one supporting sentence, ONE dominant CTA, optional one-line microcopy ("No credit card. Cancel any time."). No feature cards, no multiple links, no illustrations, no testimonials, no nav. ~120–150px vertical padding. (This already matches the site's existing `.final-cta` pattern — keep using it.)

## 13. Responsive

Mobile hero: copy → CTA → product UI, not a shrunk desktop copy. H1 ~42–48px mobile. Drop sticky-scroll effects that hurt small-screen usability. Cards stack. Product UI stays readable. Comfortable touch targets. No horizontal overflow.

## 14. Copy rules

Simple, commercially clear. No AI buzzwords, no jargon, no long paragraphs, no generic SaaS hype. Say what happens, who benefits, what the product does, what outcome results. Each section understandable in ~5 seconds. (Aligns with the voice rules in `project_stepsai_content_hub` memory — no em dashes, contractions fine, second person, concrete over adjective-heavy.)

## 15. Quality checklist before calling a subpage done

Unmistakably Steps AI? Every section on the same grid? Every section earn its place? Showing the product more than describing it? Does motion help explain behavior (not decorate)? Any unnecessary cards/gradients/empty space? Is the CTA hierarchy obvious? Does mobile feel intentionally designed, not shrunk? Does the whole page read as one continuous experience? If something exists only to "look designed," cut it.

## 16. Add-on: subpage visual creativity + professionalism (2026-09-11, supersedes generic-card default)

This section is a real course-correction on §10 above ("Cards") and the box-row pattern built in the first redesign pass — read it as overriding, not additive, wherever they conflict.

**The homepage is a quality benchmark only** — never copy its literal section layouts or copy. Do not touch `index.html` itself for any of this.

**Do not keep defaulting to "heading, paragraph, 3 cards" repeated down the page.** That includes the `.prem-box-row` component from the first pass — it's a legitimate one-off element, not the section-type answer for every page. Build richer product compositions instead: full-width interface, split-screen scenario, connected conversation flow, sticky product journey, animated timeline, floating UI layers, dashboard with callouts, conversation+analytics combined, before/after state, customer journey map, interactive tabbed use cases, workflow canvas, channel switcher, scrolling message sequence, product card carousel, live status/typing interaction. Cards may support a story; they should not BE the story.

**Every subpage needs ONE signature, memorable interaction** — its visual identity, built around its specific feature. Examples given directly by Sai:
- **Sales Agent**: follow one customer, discovery → questions → recommendation → checkout, as a sticky conversation.
- **WhatsApp**: one broadcast expanding into several reply threads, each handled differently by the agent.
- **Instagram**: a comment visually moves into DM, becomes a sale.
- **Lead Capture**: an "Anonymous Visitor" gradually becomes a full profile — name, email, company, intent, qualification, lead score, filling in live.
- **Appointment Booking**: conversation sits beside a calendar; calendar availability responds live as the conversation progresses.
- **Cart Recovery**: an abandoned cart sits visually abandoned, AI conversation resolves the objection, cart state changes to "Recovered."
- **Customer Support**: repetitive tickets visually collapse into AI-handled conversations; only complex cases visibly reach a human.
- (Extend the same spirit to pages without a given example — Website, Messenger, CRM, Analytics, Unified Inbox, Integrations, Workflows, Broadcast, Skills — invent one signature moment per page, grounded in that page's real product facts.)

**Controlled color variation, not white+blue+cards everywhere**: pale blue, soft lavender, mint, subtle pink, warm off-white, soft peach, deep navy sections, electric blue highlights, channel accents — all soft/premium, never a rainbow. Color should be **functional**: blue = primary Steps AI actions, green = success/live/confirmed/WhatsApp context, purple = AI action/automation/Instagram/Messenger accent, pink = Instagram interaction specifically, orange = attention/cart/pending, soft red = problem/abandoned state only when truly needed. Don't overuse any of them.

**Visual depth via layering**: background gradient → soft abstract shape → main product surface → floating utility cards → tiny status elements. Soft shadows, translucent surfaces, thin borders, slight blur, restrained glow, subtle overlap. Not glassmorphism-heavy, no giant floating blobs — everything precise.

**Animation shows the product operating**, not decorating a section: message arrives → AI understands → response appears → action happens → result updates. Good instances: sequential chat bubbles, typing indicators, a recommendation card sliding in, stock status updating, a lead profile filling gradually, a calendar slot being selected, cart status changing, a dashboard metric incrementing, a channel tab switching, a workflow line activating, a small success confirmation, a notification arriving, a tiny pulse on a live/active status. Never animate a whole section continuously just because it can move.

**Section transitions should feel like one continuous product story**, not a hard cut: a gradient softly changing color, a UI panel expanding into the next section, a floating card moving into a new composition, a channel-icon selection transitioning the interface, a chat conversation continuing into the next section, a product card becoming a dashboard record, a customer profile becoming CRM data, a message becoming an order/lead/booking confirmation.

**Product UI must feel real**: realistic labels/states only (Active, Available, Out of stock, Lead captured, Qualified, Meeting booked, Order placed, Human handoff, Cart recovered, Conversation closed), believable timestamps/details/action buttons — never filler/lorem-ipsum-shaped content.

**Suggested (not forced) page rhythm**: Hero (promise + product visual) → animated transition → Signature product story (the feature in action) → lighter section: How it works → colored section: Use case/business scenario (a realistic customer journey) → product-heavy section: Control/dashboard/operations (what the business sees) → proof/integrations/outcomes → FAQ → dark minimal CTA → footer. Deviate from this whenever a better narrative fits the specific feature.

**Professionalism test, run before calling any subpage done**: Does this feel custom-designed for this product? Is there one visual idea worth remembering? Does each major section look intentionally composed? Enough color variation to feel premium without going childish? Is product UI doing most of the storytelling (not prose)? Does animation clarify the product rather than decorate it? Does the page avoid template-like repetition? Does it read as a high-end SaaS product page rather than an AI-generated landing page? If any answer is no, refine further before considering it done.

## Critical development rule

Before building or editing a subpage: inspect the existing index and shared components first. Reuse the navbar, footer, buttons, fonts, color tokens, FAQ component, container widths, responsive breakpoints, and any other shared component that already exists — never recreate one. Build inside the established system; the page should feel like another page of the same site, never a new site inspired by it.
