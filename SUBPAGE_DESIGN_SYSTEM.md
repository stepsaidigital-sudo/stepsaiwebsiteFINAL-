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

## 17. Brand palette v2 (2026-09-15 update, from Sai's Brand Palette PDF)

Sourced from `Steps AI Brand pallete.pdf` (+ a corrected page-1 resend). **The brand blue itself hasn't changed conceptually** — this refines it into a named, precise token set for specific buttons/states/sections, and adds a real type scale + a font-family change. Supersedes the color/typography specifics in §1, §3, §9, and the functional color list in §16 wherever they conflict; everything else in this document (layout, motion, section story, copy rules) still stands.

**Not yet wired into `styles.css`** — another session is actively working in that file, so nothing there has been touched. This section is the source of truth for whoever wires these in as CSS custom properties next (`--accent` currently holds `#2563EB`, close to but not identical to the new Signal blue below — expect that token, and the ones named after it, to move to these exact values).

### Color tokens

| Token | Hex | Use |
|---|---|---|
| **Signal** | `#1A56DB` | Logo, links, primary buttons, focus rings — the one primary action blue. (The PDF's font-color table separately lists links at `#2149C9`; a corrected resend of page 1 groups "links" under the same `#1A56DB` swatch as buttons, so treat `#2149C9` as a stale figure from an earlier pass unless told otherwise.) |
| **Rise** | `#5997FC` | Highlights on dark surfaces, illustration accents, hover states |
| **Deep** | `#0C1A3D` | Dark sections, footer, "anchor" — gives the page a floor |
| **Act** | `#FFB067` | Automation / proactive states — the "acts, not just answers" story specifically. Ration hard: this is a narrow-purpose accent, not a general-use color |
| **Paper** | `#FFFFFF` | Page background |
| **Paper (card)** | `#FBFBF9` | Card surfaces — barely-off-white so white cards read as cards against the page background |
| **Ink** | `#14161A` | Headings, body text |
| **Muted** | `#5E5E57` | Secondary body text; mono/data text unless the data itself is the point (then Signal) |
| **Body on Deep** | `#C9D6F2` | Body text on Deep-navy sections (headings on Deep stay `#FFFFFF`) |

Functional mapping for §16's "controlled color variation" list: Signal = primary Steps AI actions (unchanged role), Act/orange = automation & proactive states specifically (narrower than the old generic "orange = attention/cart/pending" — reserve it for "the agent acted on its own" moments), Deep = the dark/anchor sections already described in §12's final-CTA pattern, Rise = hover states and highlights against Deep backgrounds. Channel colors (WhatsApp green, Instagram pink, etc.) are untouched by this update — §1's rule confining them to icons/status-chrome only still applies.

### Typography

Font family changes from Inter + Geist Mono to:
- **Text:** Schibsted Grotesk
- **Data / code:** JetBrains Mono

Type scale (size / weight / line-height / letter-spacing):

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Display | 56px | 500 | 1.1 | −0.02em |
| H1 | 44px | 500 | 1.15 | −0.02em |
| H2 | 32px | 500 | 1.2 | −0.01em |
| H3 | 24px | 500 | 1.3 | −0.01em |
| H4 | 19px | 500 | 1.4 | 0 |
| Body large | 19px | 400 | 1.6 | 0 |
| Body | 17px | 400 | 1.65 | 0 |
| Small | 15px | 400 | 1.55 | 0 |
| Caption | 13px | 400 | 1.5 | 0 |
| Eyebrow | 12px | 500 | 1.4 | 0.08em, uppercase |
| Data (mono) | 15px | 400 | 1.5 | 0 |
| Button | 16px | 500 | 1 | 0 |

This is noticeably smaller/tighter than §3's current hero H1 (~60–72px) and section H2 (~42–52px) ranges — reconcile the two once this is wired in: either the H1/H2 ranges in §3 come down to match this scale, or this scale's Display/H1 rows are meant to sit alongside (not replace) the existing larger hero sizes. Flag to Sai before assuming either way.

## 18. Brand palette v2 — usage rules + migration checklist (2026-09-15)

Sai asked for the full sitewide rollout of §17 (colors, sizes, fonts, where each token is used) so "every single page" is consistent. **Blocked on `styles.css` and `index.html`/`home.js`/`home.css`/`home-v2.css`/`home-v2.js`** — another session has a large, live, uncommitted change in those files right now. Nothing below has been applied yet. This section is the complete, ready-to-execute plan for the moment that file is free — read it top to bottom and it should require no further judgment calls except the two flagged open questions.

### Where each token gets used

| Element | Token | Notes |
|---|---|---|
| H1–H4, Display headings (light sections) | Ink `#14161A` | |
| H1–H4, Display headings (Deep/dark sections) | `#FFFFFF` | not Ink — dark sections invert to pure white headings |
| Body text (light sections) | Ink `#14161A` | |
| Body text (Deep/dark sections) | Body-on-Deep `#C9D6F2` | never plain white — keeps dark-section body text visibly secondary to its heading |
| Secondary/muted body copy | Muted `#5E5E57` | |
| Links, eyebrow labels | Signal `#1A56DB` | |
| Primary button (default) | Signal `#1A56DB` background, white text | |
| Primary button (hover) | Rise `#5997FC` | Rise's defined role is exactly "hover states" — don't invent a separate hover shade |
| Focus rings (any interactive element) | Signal `#1A56DB` | |
| Page background | Paper `#FFFFFF` | |
| Card/surface background | Paper-card `#FBFBF9` | must read as *slightly* off-white against a pure-white page — this is a flip from the current site (see Open question 1) |
| Dark sections, footer, final CTA | Deep `#0C1A3D` background | |
| Highlights/illustration accents on Deep sections | Rise `#5997FC` | |
| **Act (orange, `#FFB067`)** | Automation / proactive states **only** | Use for: a badge/status chip that says the agent acted on its own (e.g. workflows.html's "● Live flow active" pill, the "AUTONOMOUS EXECUTION" kicker, a "Sent automatically" or "Triggered by workflow" tag). **Never** use it as a general accent, a second brand color, a CTA color, or the generic "cart/pending" orange the current §16 lists — that would blow the "ration hard" instruction from the brand PDF. If in doubt, don't use Act. |
| Mono/data text | Muted `#5E5E57`, or Signal only when the number/data point itself is the thing being emphasized | |
| Channel colors (WhatsApp green, Instagram pink, etc.) | Unchanged | Still confined to icons/status-chrome only, per §1 — this palette update doesn't touch that rule |
| Semantic success/warning colors (current `--success` green, `--warning` amber) | Unchanged | Not part of the brand PDF; these are functional/status colors, not brand identity — leave as-is unless told otherwise |

### Ready-to-paste `:root` token diff for `styles.css`

Old → new, once the file is free. `--font-sans`/`--font-mono` need the new Google Fonts `<link>` added to every page's `<head>` (Schibsted Grotesk, JetBrains Mono) alongside/replacing the current Inter/Geist Mono/Caveat/Geist Mono import.

```css
/* was: --text-primary: #090E17; */
--text-primary:   #14161A;   /* Ink */
/* was: --text-secondary: #475569; */
--text-secondary: #5E5E57;   /* Muted */

/* was: --accent: #2563EB; */
--accent:         #1A56DB;   /* Signal */
/* was: --accent-bright: #3B82F6; */
--accent-bright:  #5997FC;   /* Rise — used for hover states */
/* was: --accent-on-dark: #60A5FA; */
--accent-on-dark: #5997FC;   /* Rise, same value on dark surfaces */

/* was: --bg-base: #FAFBFC; */
--bg-base:        #FFFFFF;   /* Paper */
/* was: --bg-surface: #FFFFFF; */
--bg-surface:     #FBFBF9;   /* Paper (card) */

/* was: --dark-canvas: #090D16; */
--dark-canvas:    #0C1A3D;   /* Deep */
/* was: --dark-ink: #F8FAFC; */
--dark-ink:       #FFFFFF;
/* was: --dark-ink-muted: #94A3B8; */
--dark-ink-muted: #C9D6F2;   /* Body on Deep */

/* was: --font-sans: 'Inter', ...; */
--font-sans: 'Schibsted Grotesk', -apple-system, "Segoe UI", Roboto, sans-serif;
/* was: --font-mono: 'Geist Mono', ...; */
--font-mono: 'JetBrains Mono', ui-monospace, Menlo, monospace;
```

### Open questions — don't guess, ask Sai first

1. **Card/page brightness flips.** Today `--bg-base` (page, #FAFBFC) is *dimmer* than `--bg-surface` (card, #FFFFFF). The new palette wants the opposite: page pure white, cards the dimmer `#FBFBF9`. That's a real visual change (cards get very slightly warmer/duller than the page instead of standing out bright), not a copy-paste. Confirm before applying.
2. **Gradients.** The current site uses blue→blue gradients everywhere (`--gradient-accent`, `--gradient-brand`, button glows, shadow tints) built from `--accent-bright`/`--accent`/`--accent-deep`. The brand PDF specifies flat, single-hex swatches only — no gradient guidance at all. Decide: keep the gradient system and just recompute its three stops from Signal/Rise (and pick a third "deep" stop, since the PDF has no equivalent to `#1D4ED8`), or move to flat Signal fills sitewide. Not decided here.
3. `--accent-tint` (`#EFF6FF`, used for pill/badge backgrounds) and border colors (`--border-subtle`, `--border-strong`) have no PDF equivalent — plan is to derive them from Signal/Ink at low opacity rather than invent new named colors, unless Sai wants them added to the palette.
4. The type-scale size mismatch already flagged in §17 (this system's H1 44px vs the current site's hero H1 ~60–72px) is still open.

### Migration checklist, in order

1. **Confirm the other session's work in `styles.css`/`index.html`/`home.js`/`home.css`/`home-v2.css`/`home-v2.js` is committed and settled.**
2. Resolve the two open questions above with Sai.
3. Add the Schibsted Grotesk + JetBrains Mono Google Fonts `<link>` sitewide (55+ pages' `<head>`, same link block on all of them — mechanical find/replace).
4. Apply the `:root` token diff above to `styles.css`. Because almost everything else in the codebase already consumes these as `var(--accent)`/`var(--font-sans)` etc. rather than hardcoding hex, this one edit re-colors and re-fonts the large majority of the site automatically.
5. Fix the exceptions that bypass the tokens (found by grep, confirmed not yet touched by the other session):
   - **Hardcoded `#2563EB`/`#1D4ED8` hex** (bypasses the token, won't update from step 4) in: `agents.css`, `channel-premium.css`, `creative-showcase.css`, `industries-deep.css`, `pricing.css`, `signature-broadcast.css`, `signature-crm.css`, `signature-shopify.css`, `signature-skills.css`, `signature-whatsapp.css`. (`home.css`/`home-v2.css` have the same issue but are homepage-scoped — defer with `index.html`.)
   - **Hardcoded `font-family: 'Inter'`** (3 spots, all in `home-v2.css:40,227,484`) — homepage-scoped, defer with `index.html`.
6. Re-check every subpage hero/section against the new Ink/Muted/Signal/Deep/Act usage table above — most should just work once tokens update, but anywhere a component was styled with a raw hex instead of a token (same grep pattern as step 5) needs a manual look.
7. Re-run this document's own §15 and §16 quality checklists per page as a final pass, since the "controlled color variation" list in §16 needs re-reading against the new, narrower Act definition above.

## Critical development rule

Before building or editing a subpage: inspect the existing index and shared components first. Reuse the navbar, footer, buttons, fonts, color tokens, FAQ component, container widths, responsive breakpoints, and any other shared component that already exists — never recreate one. Build inside the established system; the page should feel like another page of the same site, never a new site inspired by it.
