# IA Migration Plan — Sample 1 → Addendum D Master IA

What to keep, what changes, and in what order. Written against `StepsAI-ADDENDUM-D-Master-IA.md` (Downloads, dated 2026-08-11), cross-referenced with `StepsAI-CODE-AGENT-MASTER-PROMPT.md` ("v2"), `ADDENDUM-A-UI-Craft.md`, and `ADDENDUM-B-Remaining-Pages.md`, all also in Downloads. **Addendum C is still missing** — flagged everywhere it matters below; nothing in this plan blocks on it except the two items explicitly called out.

Animation/visual polish is explicitly out of scope for this pass, per your instruction — this plan is about getting the structure and copy completely right first.

---

## 1. Navigation — biggest structural change, do this first

**Current nav** (`nav.js` + every page's `<header>`): Product ▾ (2 items) · Solutions ▾ (2 items) · Pricing · Sign in · Start free trial. Partner is a footer-only link, not in nav.

**Target nav (Addendum D Part 2):** Product ▾ · Solutions ▾ · Pricing · Partner · Resources ▾ · Sign in · Start free trial.

| Change | What it means |
|---|---|
| **Product ▾ becomes a 4-column mega panel** (880px) | Products (AI Agents, Copilot) · What It Does (4 feature agents) · Platform (Workflows, One Inbox, Analytics, Integrations, All features) · Channels (Website, WhatsApp, Instagram, Standalone Page, All channels). Currently Product ▾ only has the 2 top items — the other 3 columns don't exist as nav entries yet, though most of that *content* already exists as sections on `agents.html`. |
| **Partner promoted to top-level nav** | Currently footer-only. Moves up next to Pricing. |
| **New Resources ▾ dropdown** | Learn (Blog, AI Guides, Case Studies) + Company (About, Founder's Note, Team, Careers, Contact) — none of these pages exist yet. Currently "About/Careers/Contact" are inert `#top` footer links with no real pages. |
| **Solutions ▾ gains badges + reorders** | E-Commerce becomes first with a `Flagship` badge (currently Real Estate is first in the industries list, no flagship concept exists). By-Role column already matches (`solutions.html`'s 4 roles map directly). |
| **Panel footer strip on Product ▾** | A live mini chat mockup inside the dropdown itself ("See it work →"). Net-new, no equivalent exists. |

**Keep as-is:** the nav's visual chrome (transparent-over-hero → blurred-on-scroll, dropdown open/close behavior, mobile hamburger + full-screen accordion panel) already matches Addendum D Part 2 almost exactly — this was clearly built with the same spec lineage. No rebuild needed there, just extend the panel contents.

---

## 2. Page inventory — what exists vs. the 34-page target

Addendum D groups pages into 8 tiers. Status of each:

| Tier | Addendum D pages | Current status |
|---|---|---|
| 1 — Core | `/`, `/pricing/`, `/product/ai-agents/`, `/product/copilot/` | **All 4 exist** (`index.html`, `pricing.html`, `agents.html`, `product.html`). Hero taglines mostly match already ("It answers. Then it acts." is verbatim on both `/` and current `agents.html` — Addendum D gives `/` that line and gives `/product/ai-agents/` a *different* line, "Four agents. One brain. Every channel." — **`agents.html`'s hero needs that new tagline**, it currently duplicates the homepage's line). |
| 2 — Solutions by industry | ecommerce, saas, healthcare, education, real-estate | **Partial.** We have 5 industry pages already, but 3 names don't match: ours are Real Estate/Healthcare/EdTech/Hotels/Legal; theirs are E-Commerce/SaaS/Healthcare/Education/Real Estate. Healthcare and Real Estate(→"Education" naming aside) carry over. **Hotels and Legal are not in the target IA at all** — replaced by E-Commerce and SaaS. This is a real content swap, not a rename. |
| 3 — Solutions by role | marketing-growth, sales, support-cx, operations | **Exists**, as sections within `solutions.html` rather than 4 separate pages. Addendum D wants 4 standalone pages. |
| 4 — Channels | index + website, whatsapp, instagram, standalone-page | **Doesn't exist as pages.** Channel content currently lives as a section inside `agents.html` (`#channels`), not as its own page tier. |
| 5 — Features | index + 8 feature pages + integrations | **Doesn't exist as pages.** Feature content currently lives as sections inside `agents.html` (four agents, workflows, inbox, analytics), not as standalone pages. |
| 6 — Partner | `/partners/`, `/partners/apply/` | **Partial.** `partner.html` exists (maps to `/partners/`); the apply form (`/partners/apply/`) doesn't exist. |
| 7 — Company & Resources | about, note, team, careers, contact, blog, ai-guides, case-studies | **None exist.** Currently inert footer links pointing at `#top`. |
| 8 — Legal & utility | privacy, terms, 404 | **None exist.** Currently inert footer links. |

**Net:** we're structurally sound on Tier 1 and partially on Tiers 2, 3, and 6. Tiers 4, 5, 7, 8 are entirely unbuilt — that's 21 of the 34 target pages.

---

## 3. Templates — Addendum D Part 4

We already have de-facto versions of 3 of the 5:
- **Template A (Landing)** = `index.html`. Structurally close; needs the Copilot section (**blocked on Addendum C Part 4.1**) and a check against `v2`'s Part 8 spec once I've read it in full.
- **Template B (Product)** = `agents.html` / `product.html` are closer to a single long page than the prescribed flow (hero → What it does → How it works → Where it works → What it connects to → FAQ → cta-band). Needs restructuring, not rebuilding from zero — most of the content blocks already exist, just not in this exact order/grouping.
- **Template C (Solution)** = `industry-*.html` pages are close, but are missing the mandated **"What your customers actually ask" quoted-questions block (2×2)** — Addendum D calls this out as the one non-negotiable element on every solution page, and it does not exist on any current industry page.
- **Template D (Channel)** and **Template E (Feature/Directory/Index/Company/Form)** — no equivalent built yet, since none of those page tiers exist.

---

## 4. Content rules that affect existing copy (Addendum D Part 5)

- **Fictional businesses must be consistent site-wide:** Nyra Store (e-commerce), Skyline Homes (real estate), CityCare Clinic (healthcare) — plus one each for SaaS and Education, reused everywhere. We already use **Nyra Store** and **Skyline Homes** consistently across the current site — good, no change needed there. CityCare Clinic doesn't appear yet (healthcare mockups are currently generic "Dr. Meera Iyer" / clinic-less). Need to adopt CityCare Clinic as the named healthcare business, and invent+lock one SaaS business and one Education business.
- **"Bot" is banned as self-description.** Quick audit needed across existing copy — haven't found violations yet, but this wasn't checked against the current site's actual copy before.
- **Every number needs an `Example` label or a visible source.** Applies directly to the pricing page's numbers and the industries teaser's stats (412 conversations, 358 answered solo, 24 meetings booked, etc. on the homepage's Analytics tile) — none of those are currently labeled as examples.

---

## 5. What's genuinely blocked on Addendum C

Only two things, both scoped precisely:
1. Homepage's **Copilot section** content (Template A depends on "Addendum C Part 4.1")
2. Which specific numbers/claims sitewide are still `[FOUNDER VERIFICATION REQUIRED]` ("Addendum C Part 5" names six specific live claims)

Everything else in this plan is actionable without it.

---

## 6. Proposed order of work

Following Addendum D's own Part 7 build order (it explicitly says "stop after every phase, wait for approval" — matching that here rather than batching everything):

1. **Nav + footer restructure** (Part 2 + Part 6) — the mega-panel Product dropdown, Resources dropdown, Partner promoted to top nav, footer's 5-column layout. Biggest visible change, touches every page, best done once and propagated.
2. **Homepage** — reorder/patch to match Template A, add the quoted-questions-style rigor where relevant, hold the Copilot section open pending Addendum C.
3. **Product pages** (`agents.html`, `product.html`) — restructure into Template B's flow, fix `agents.html`'s hero tagline.
4. **Solutions pages** — reconcile the industry set (swap in E-Commerce and SaaS, decide fate of Hotels/Legal content), add the mandatory quoted-questions block to all 5, then build the 4 by-role pages as standalones.
5. Everything else (Channels, Features, Partner apply, Company, Resources, legal, 404) — new builds, Tier by tier per Addendum D Part 7.

**Decisions made:** Keep Hotels & Legal as extra industry pages, alongside the new flagship 5 (2026-08-11).

---

## 7. Step 1 — done (2026-08-11)

Nav + footer restructured across all 13 pages:
- **Product ▾** is now the 4-column mega panel (Products / What It Does / Platform / Channels) with the panel-footer chat mockup, exactly per spec.
- **Solutions ▾** now shows E-Commerce first with a `Flagship` badge, then SaaS, Healthcare, Education, Real Estate, plus a "See all industries →" link to the hub (where Hotels and Legal still live as extras — see decision above).
- **Partner** promoted to a top-level nav link. **Resources ▾** is new (Learn + Company columns).
- Footer rebuilt to 5 columns (Product / Solutions / Channels / Company / Resources); Privacy/Terms moved out of a footer column and into the bottom bar alongside a new "System status: Operational" line and the new tagline "Your AI agent layer for every business."
- `nav.js`: dropdowns now open on hover (150ms intent delay) in addition to click; mobile menu locks body scroll while open.
- Mobile nav's Product/Solutions/Resources are now native `<details>` accordions (exclusive-open via the `name` attribute in browsers that support it).

**Known temporary shims** (marked with `<!-- TODO -->` comments in the HTML itself, search for `TODO` in any page's `<head>` region's sibling header block):
- The 4 "What It Does" feature-agent links and all 4 "Channels" links point at anchors on `agents.html` (`#four-agents`, `#channels`) since their dedicated Tier 4/5 pages don't exist yet.
- Integrations and "All features" point at `agents.html` generally — no dedicated pages yet.
- E-Commerce and SaaS nav rows point at the `industries.html` hub — their dedicated pages aren't built yet (next up).
- Every Resources item (Blog, AI Guides, Case Studies, About, Founder's Note, Team, Careers, Contact) points at `index.html#top` — none of those pages exist yet.
- Solutions "By role" items all point at `solutions.html` generally, not 4 distinct pages yet.

**Not done in this pass:** full keyboard roving-tabindex inside dropdown panels (basic Escape/outside-click/blur close works; arrow-key navigation between rows doesn't yet), full focus-trap in the mobile panel (scroll-lock works, focus-trap doesn't yet). Both are interaction polish, intentionally deferred per your instruction to prioritize content/structure completeness over animation/interaction polish this round.

**Next up (Step 2+):** homepage Template A alignment (still blocked on Addendum C for the Copilot section), then Product pages, then the Solutions/industries work (build E-Commerce and SaaS pages, add the mandatory quoted-questions block to all 5 flagship industry pages, update Healthcare/Education/Real Estate hero taglines to match Addendum D verbatim).

---

## 8. Step 2 — homepage, partial (2026-08-11)

Read the full v2 Master Build Prompt (previously only inferred its existence). Confirmed: the homepage's condensed-teaser structure is the correct evolution of v2's original single-page vision, not a deviation — v2's fuller sections (Four Agents, Workflows, One Inbox, Analytics, FAQ) already live in depth on `agents.html`; the homepage's job is the teaser layer on top. So most of v2's Section 1-13 detail does **not** need re-importing into `index.html` wholesale.

One concrete, unambiguous fix applied: **v2's page order is Industries before Channels; ours had them reversed.** Swapped — `industries-teaser` now comes first, followed by image slot 2, then `channels-teaser`. Section backgrounds swapped along with them to keep the base/raised alternation sane.

**Still blocked on Addendum C:** the homepage's Copilot section (Addendum D Template A explicitly requires it) and which numbers sitewide are still placeholder. Not touching the current "One system, two places it shows up" 2-card section until Addendum C clarifies whether it should be replaced or extended.

**Deliberately not doing right now:** a full FAQ section on the homepage. v2 lists one, but `agents.html` already carries a complete FAQ, and Addendum D's Template A description doesn't explicitly call for a second one. Flagging as a judgment call, not a silent decision — say so if you want one added.
