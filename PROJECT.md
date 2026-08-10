# StepsAI Landing — Project Documentation ("Sample 1")

Single reference for the whole site as it stands right now: every page, every section, the architecture underneath it, what's been decided, and what's still open. Written so you can polish pixel-to-pixel against it without having to re-derive any of this from the code.

This is **Sample 1** — the design direction currently built and live. Everything in this document describes Sample 1 only.

---

## 0. Presentation brief — Sample 1, in your five points

**How we've thought about the best.** Single accent color, single font pairing, single corner-radius scale, applied without exception across 13 pages — nothing left to individual page "taste." Every mockup on the site (WhatsApp bubbles, Instagram gradient, browser chrome, receipt strips) is pixel-matched to the real product it's imitating, not a generic chat-bubble stand-in. Copy voice stays plain and specific throughout ("It answers. Then it acts.") rather than reaching for AI-startup hype words. The one deliberate exception to "keep it calm" is the final CTA section, which goes fully dark on purpose — it's the one moment on the site allowed to feel urgent.

**How the companies will be there.** Confirmed this means industry verticals, not real client logos. Coverage is two-tier by design, not an oversight: **5 flagship verticals** (Real Estate, Healthcare, EdTech, Hotels & Hospitality, Legal Services) each get a full dedicated page — pain points, prioritized use cases, follow-up workflows, written specifically for that vertical. **6 more industries** (E-commerce, Healthcare & Wellness, Real Estate, Education, SaaS & Technology, Travel & Hospitality) are demonstrated live via an interactive tabbed demo on `agents.html#industries` — real mockup screens per tab, not just a name in a list. `industries.html`'s hub explicitly tells visitors who aren't one of the 5 flagships to look at that wider demo. This was flagged as an unbuilt gap in an earlier draft of this document — it isn't; the two-tier structure is intentional and already complete.

**The text and everything.** All page copy is final, written-for-this-brand copy — no lorem ipsum, no bracketed placeholders anywhere in the HTML. The 5 industry pages' pain-point and use-case content was sourced from real industry playbook research done earlier in this project, not generated generically. The one place text is intentionally absent is the 3 reserved photo captions/alt-text, which get written once the real photo exists (alt-text depends on what's actually in the image).

**The delivery of the contents.** All 13 pages are complete and cross-linked (nav, footer, and in-content cross-links all resolve correctly). The only non-text gaps are the 3 reserved photo slots on the homepage (prompts ready, waiting on generation — see Section 9) and `agents.html`'s "Real Proof" section, which is fully built but intentionally hidden (`display:none`) because it would need real customer numbers to publish honestly — publishing invented stats there would undercut the "we don't overclaim" positioning the rest of the site is built on. Recommend leaving it hidden until real numbers exist, rather than filling it with placeholder figures for the presentation.

**Real mockups, animations, and motion.** Nothing on the site is a generic fake-dashboard screenshot. Every mockup is a hand-built, pixel-accurate replica of the real surface it represents: WhatsApp bubbles use WhatsApp's actual colors, tick icons, and bubble radius; the Instagram header uses Instagram's actual gradient; the hero's channel card morphs between three real channel identities using an actual typed-out conversation, not a static image. Motion is restrained and purposeful throughout: staggered scroll-reveals (rise 20px + fade, 480ms, max 4 elements staggered 60ms apart) on every section, a 3D card-flip on `agents.html`'s four-agents grid, a scroll-driven step-line spine down the homepage, spring-adjacent custom easing (`cubic-bezier(.16,1,.3,1)`) instead of default linear transitions throughout. `prefers-reduced-motion` is respected everywhere motion appears — every animated component has an explicit reduced-motion fallback in the CSS, not a missing one. This is already a genuinely animated, custom-built site, not one that needs a "modern motion library" bolted on. Its ceiling right now isn't craft, it's content — the 3 pending photos are the one place still leaning on a dashed-border placeholder instead of something real.

---

## 1. What this is

StepsAI is a B2B AI-agent product: it answers customer questions on WhatsApp, Instagram, and a business's own website, then takes an action (books a meeting, saves a lead, updates an order). Target buyer is a small-to-mid-size business owner/operator, not enterprise IT. Brand voice: calm, confident, specific — not hype-y AI-startup language. Single accent color throughout the site: blue `#1A56DB`.

This is a static site — plain HTML/CSS/JS, no build step, no framework, no backend. Every "action" (sign in, trial signup, chat) is a visual demo, not a working system yet.

---

## 2. Site map

| Page | File | Purpose | Status |
|---|---|---|---|
| Home | `index.html` | Main landing page — condensed teaser of everything, funnels to deeper pages | Live, being polished |
| AI Agents | `agents.html` | Full depth on the customer-facing agent (four jobs, channels, setup, workflows, one inbox, analytics, FAQ) | Live |
| Internal Copilot | `product.html` | The other product — internal AI assistant for a business's own team | Live |
| Solutions (by role) | `solutions.html` | Marketing/Sales/Support/Ops framing of the same agent | Live |
| Industries (hub) | `industries.html` | Links out to the 5 vertical pages below | Live |
| Industries (hub, alt) | `capabilities.html` | "Ten building blocks" framing — a second industries-adjacent hub | Live |
| Real Estate | `industry-real-estate.html` | Vertical playbook | Live |
| Healthcare | `industry-healthcare.html` | Vertical playbook | Live |
| EdTech | `industry-edtech.html` | Vertical playbook | Live |
| Hotels & Hospitality | `industry-hotels.html` | Vertical playbook | Live |
| Legal Services | `industry-legal.html` | Vertical playbook | Live |
| Pricing | `pricing.html` | 4-tier pricing (Starter/Growth/Scale/Enterprise) + add-on credits + comparison table + FAQ | Live |
| Partner | `partner.html` | Referral/reseller program | Live |

**Not built:** e-commerce, SaaS, and travel industry pages (referenced from the homepage industries teaser as "and travel too" link to `industries.html`, but no dedicated page exists yet). No sign-in, no working trial signup, no sales-contact page (Enterprise CTA on pricing routes to the on-page FAQ instead).

---

## 3. File architecture

```
stepsai-landing/
  index.html            home page
  agents.html            product depth page (AI Agents)
  product.html            product depth page (Internal Copilot)
  solutions.html          by-role page
  industries.html          industries hub
  capabilities.html          "ten building blocks" hub
  industry-*.html (×5)         vertical pages
  pricing.html            pricing page
  partner.html            partner program page

  styles.css            core design tokens, reset, nav, hero, homepage-specific components
  pages.css            shared components for every OTHER page (page-hero, feature-grid, step-grid,
                    teaser-split, teaser-tile, image-placeholder, icon-strip, handoff-chat...)
  industries-deep.css        per-vertical accent colors for the 5 industry pages

  nav.js              shared nav logic (dropdowns, mobile menu, scroll state, active-link
                    highlighting) — loaded on every page
  script.js            homepage-only interactive demo logic (the morphing hero channel
                    card, scroll reveals, step-line animation)
  pages.js            shared logic for "content pages" (reveal-on-scroll, FAQ accordions —
                    used by solutions/product/partner/industries/capabilities/pricing)
  agents.js            agents.html-only logic (the four-agents card flip, channel demos,
                    setup animation, workflow demo)
  pricing.js            pricing.html-only logic (monthly/annual toggle, comparison table)

  images/              generated images that were tried and reverted (flow-3step.png,
                    channels-converge.png) — not currently referenced by any page
  IMAGE_PROMPTS.md          prompts for the 3 reserved brand-photography slots on index.html
  PROJECT.md            this file
```

**The pattern:** one CSS/JS file per page when a page has real unique interactivity (homepage, agents, pricing); everything else shares `pages.css` + `pages.js` rather than duplicating near-identical styles per page. `styles.css` is the foundation every page loads (tokens, reset, nav, buttons, section scaffolding) plus the homepage's own hero/demo components, which live there because they were built first and nothing else reuses them.

---

## 4. Design tokens (from `styles.css :root`)

| Token | Value | Use |
|---|---|---|
| `--bg-base` | `#FBFCFE` | default section background |
| `--bg-raised` | `#F3F6FB` | alternate section background |
| `--bg-surface` / `--bg-surface-2` | `#FFFFFF` / `#F7F9FC` | cards, panels |
| `--text-primary` | `#0C1322` | headlines, body |
| `--text-secondary` | `#46536B` | sub-copy |
| `--text-tertiary` | `#64708A` | captions, labels (darkened from an earlier value that failed WCAG AA) |
| `--accent` | `#1A56DB` | the one accent color, used everywhere — buttons, links, icons, active states |
| `--accent-deep` / `--accent-bright` / `--accent-tint` | `#1240A8` / `#3D74EC` / `#EDF2FD` | hover states, gradients, tinted backgrounds |
| `--success` / `--warning` / `--whatsapp` | `#0B9E58` / `#D97917` / `#1FAF5C` | signal colors only, never decorative |
| `--cta-bg` / `--cta-bg-2` | `#060B16` / `#12264E` | the one dark section (final CTA) only |
| `--radius` / `--radius-sm` | `20px` / `12px` | the two corner-radius scale used site-wide |
| `--font-sans` | Outfit | headlines and body |
| `--font-mono` | Geist Mono | kickers, labels, receipt/mono UI text |

Per-vertical accent colors (industry pages only, `industries-deep.css`): Real Estate `#2E5AAC`, Healthcare `#0F9B8E`, EdTech `#7C3AED`, Hotels `#C2790F`, Legal `#8C2F45` — these override the global blue accent on their own page only, never bleed into the shared pages.

---

## 5. Navigation (same on every page, driven by `nav.js`)

```
StepsAI [logo]     Product ▾        Solutions ▾        Pricing     Sign in   [Start free trial]
                   ├ AI Agents        ├ By Role
                   └ Internal Copilot   └ By Industry
```

Footer link columns: **Product** (Four Agents, Internal Copilot, Channels, Pricing) · **Industries** (Real Estate, Healthcare, EdTech, All industries) · **Company** (About, Partner Program, Careers, Contact — About/Careers/Contact are inert `#top` links, no pages exist yet) · **Legal** (Privacy, Terms — same, inert).

"Sign in" button is intentionally inert everywhere (commented in code) — no auth system exists.

---

## 6. Homepage (`index.html`) — full section breakdown

In page order. `data-section-boundary` marks sections the step-line/scroll system tracks.

| # | id | Headline | What it does | Layout family |
|---|---|---|---|---|
| — | `hero` | "It answers. Then it acts." | Animated demo: one chat card that morphs between WhatsApp/Instagram/Website, types out a real conversation, resolves into a receipt (e.g. "CART UPDATED"). One-time "Connect your website" intro plays first. | Split (copy + live demo) |
| — | *(image slot 1)* | — | Reserved brand-photography band, 21:9. **Pending real photo** — prompt in `IMAGE_PROMPTS.md` #1 | Full-bleed image |
| `product` | `product` | "One system. Two places it shows up." | Two cards: AI Agents vs Internal Copilot — which one you need | Duo cards |
| `four-agents-teaser` | — | "Four jobs. One agent that knows your business." | Icon strip (Sales/Meetings/Support) + one mini mockup card, links to `agents.html#four-agents` | Split (copy + mockup) |
| `channels-teaser` | — | "Same agent. Different rules for every channel." | Live-built (`.converge`): 5 channel icons → dashed connector → a real WhatsApp-style mockup panel. Links to `agents.html#channels` | Full-width, single column |
| — | *(image slot 2)* | — | Reserved brand-photography band, 16:7. **Pending real photo** — prompt in `IMAGE_PROMPTS.md` #2 | Full-bleed image |
| `industries-teaser` | — | "It already knows how your industry sells." | 5 clickable rows straight to each vertical page + "e-commerce, SaaS, travel too" link to the hub | List rows |
| `setup-teaser` | — | "Paste your website link. That's step one." | Live-built (`.flow-steps`): 3-step flow (URL → answers → inbox), each step a real mini mockup card with dashed connectors. Links to `agents.html#setup` | Full-width, single column |
| `workflows-teaser` | — | "When the customer stops, it keeps going." | Abandoned-cart WhatsApp mockup, links to `agents.html#workflows` | Split (copy + mockup) |
| `inbox-analytics-teaser` | — | "You stay in control. And you can see what it did." | Two tiles: **One inbox** (live AI→human handoff chat transcript — customer asks about a refund, AI brings in Priya) + **Analytics** (3 stat tiles) | Two-tile |
| `who-for` | — | "This is not for everyone." | Good-fit / not-a-fit two-column honest list | Two-column list |
| `final-cta` | `final-cta` | "Your next customer is already typing." | The one dark section on the page. CTA button, scrolling ticker of action-types, reserved image slot 3 | Dark full-bleed |

**Currently missing on the homepage vs. what a full B2B SaaS landing usually has:** a "Trusted by / customers" logo wall, a testimonials section, and a real FAQ (FAQ exists on `agents.html`, `pricing.html`, `solutions.html`, `product.html` but not on the homepage itself). Flagging these as gaps, not fixing them — your call whether the homepage needs its own or should keep sending people to the deeper pages for that content.

---

## 7. Other pages — section breakdown

**`agents.html`** (the deep AI-Agents page, what most homepage links point into): Hero → Four Agents (2×2 flip-card grid, one "active" agent shown 4 ways) → Industries (same 5-row list as homepage) → Channels (full WhatsApp/Instagram/Website demo) → Setup (4-step onboarding, fuller than the homepage's 3-step teaser) → Workflows → One Inbox → Analytics → Real Proof (**hidden**, `style="display:none"` — built but not shown, likely waiting on real customer numbers) → FAQ → Final CTA.

**`product.html`** (Internal Copilot): Hero → "Answers, then acts, for your team" → FAQ → Final CTA. Thinnest page on the site — most of its depth is still just the homepage teaser card.

**`solutions.html`**: Hero → "Point it at a job, it already knows how to do it" (by-role breakdown) → FAQ → Final CTA.

**`industries.html`** (hub): Hero → links to the 5 vertical pages → Final CTA.

**`capabilities.html`**: Hero ("Ten building blocks...") → a detailed one-to-one follow-up walkthrough → Final CTA. Overlaps conceptually with `industries.html` — both are industry/capability hubs reached from the same nav dropdown item ("By Industry"), worth deciding later whether one should absorb the other.

**Each `industry-*.html`** follows the same template: vertical-specific hero → what it will never do (healthcare/legal only — the two verticals with real professional-liability concerns) → if you can only start with one thing → what follow-up looks like → (legal only: where this comes from / sourcing note) → Final CTA. Real Estate, Healthcare, EdTech, Hotels, Legal all live; content sourced from 5 industry playbooks extracted from docx research earlier in this project.

**`pricing.html`**: Hero → 4-tier pricing cards (Starter ₹2,499/mo, Growth ₹6,999/mo "Most popular", Scale ₹18,999/mo, Enterprise custom) with monthly/annual toggle → add-on credits → full feature comparison table → FAQ → Final CTA. Enterprise's "Talk to sales" CTA routes to the on-page FAQ (no sales-contact page exists).

**`partner.html`**: Hero → "Your link, our work, your payout" → "Refer it or make it your own" → "Your client stays yours" → Partner FAQ → Final CTA.

---

## 8. Decision log — this session (2026-08-10)

What changed today and why, so "why does it look like this" has an answer without re-reading the whole chat:

1. Built 3 new homepage sections inspired by competitor reference screenshots (Noupe, Intercom Fin, an AI→human handoff example) — initially as AI-generated flat-icon diagram images.
2. **Reverted** those 2 diagram images (`flow-3step.png`, `channels-converge.png`) — feedback was they read as generic/amateur ("pen and paper"). Rebuilt live in HTML/CSS instead, reusing the site's own real components (`mockup-card`, `step-bubble`, `wa-panel`) — that's what `setup-teaser` and `channels-teaser` are now.
3. **Removed** the 3 original "Image placeholder #1/#2/#3" boxes — they were showing literal dev-scaffolding text to real visitors, which read as broken. Then **re-added** them (same 3 spots, same aspect ratios) once the plan was to actually fill them, relabeled "Image slot" instead of "Image placeholder #N."
4. **Rewrote `IMAGE_PROMPTS.md` twice** — first draft was desaturated/muted editorial photography; current draft is deliberately vivid and colorful per feedback that everything felt "boring, outdated." Old flat-icon-diagram prompts (for the now-reverted sections) removed from the file entirely.
5. **Trimmed 2 eyebrow labels** ("HOW IT WORKS" on setup-teaser, "EVERY CHANNEL" on channels-teaser) that had been added along with the new sections — the page had drifted toward an eyebrow-over-every-section rhythm, which reads templated.
6. **Hero section: untouched**, on explicit instruction — do not modify without new sign-off.

---

## 9. Open items — what's genuinely pending

- [ ] **3 real photos** for homepage image slots 1/2/3 — prompts ready in `IMAGE_PROMPTS.md`, waiting on your image-generation pass. Code is already wired to accept them (just swap the `<div class="image-placeholder">` block for the `<img>` snippet at the top of that file).
- [ ] Old `images/flow-3step.png` and `images/channels-converge.png` sit unused in the repo — harmless, but candidates for deletion once you're sure you don't want to revisit that direction.
- [ ] `agents.html`'s "Real Proof" section is built but hidden (`display:none`) — needs real customer numbers before it can go live. Recommend keeping it hidden for the presentation rather than filling it with invented figures.
- [ ] No testimonials or logo wall anywhere on the site — not started. Confirmed out of scope for now (you clarified "companies" means industry verticals, which are covered — see Section 0).
- [ ] Sign-in, trial signup, sales-contact page — all still inert/nonexistent by design (no backend yet).

**Corrected from an earlier draft of this document** (both of these turned out to already be handled, not actual gaps):
- ~~`industries.html` vs `capabilities.html` overlap~~ — not a duplication. `industries.html` is the "pick your vertical" hub; `capabilities.html` is the cross-cutting "what the platform can structurally do" explainer that every industry page links out to. Different jobs, correctly separated.
- ~~E-commerce / SaaS / travel industry pages — referenced in copy, not built~~ — they don't have dedicated pages by design, but they do have real, built, interactive mockup demos on `agents.html#industries` (a 6-tab live demo, E-commerce/Healthcare/Real Estate/Education/SaaS/Travel). Intentional two-tier structure, not a missing page.

---

## 10. What the homepage can display (flexibility notes, not fixed decisions)

The homepage is structured as a funnel of teasers: every non-hero section's job is to get someone to click into the real depth page (`agents.html`, `pricing.html`, an industry page). Two live sections (`setup-teaser`, `channels-teaser`) now demonstrate real product behavior directly on the homepage rather than just describing it — that pattern is available to extend to other teaser sections (`four-agents-teaser`, `workflows-teaser`) if you want more of the homepage to feel "alive" before a photo pass, rather than relying on photography alone to carry that job.
