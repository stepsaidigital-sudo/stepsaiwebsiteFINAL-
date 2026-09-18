# blog.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Help find useful articles. Existing title: “Blog — StepsAI | Notes on building with AI agents”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [blog.html](../../../blog.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `blog.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 0 dark-marked sections; 1 legacy logo reference(s) at lines 798. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Notes on building with AI agents.

Source: `blog.html:491`; current classes: `bh-intro`. Audit desktop height: 437px; padding: 64px 0px 58px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `Start reading → #featured`; `Start free trial → pricing.html`.

### 2. How One Inbox Ends Support Triage

Source: `blog.html:507`; current classes: ``. Audit desktop height: 409px; padding: 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `Start reading → blog-support-triage.html`; `Start reading → blog-cart-recovery.html`; `Start reading → blog-real-estate-agent.html`; `Start reading → blog-analytics-dashboard.html`.

### 3. How One Inbox Ends Support Triage; Recovering Abandoned Carts on Autopilot; Setting Up an AI Agent for Real Estate; What Your Analytics Dashboard Should Actually Tell You

Source: `blog.html:607`; current classes: `section section--base section--atmo`. Audit desktop height: 808px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “How One Inbox Ends Support Triage”; “Recovering Abandoned Carts on Autopilot”; “Setting Up an AI Agent for Real Estate”; “What Your Analytics Dashboard Should Actually Tell You”.

Preserve destinations: `Support WA Aarav Shah Yes please, size M works 10:43 PM Resolved IG nyra.fan22 Is the 3BHK still available? 9:16 PM Book → blog-support-triage.html`; `Workflows Trigger Cart left behind Wait 30 minutes Action Send WhatsApp message Aug 29, 2026 6 min read By The StepsAI T → blog-cart-recovery.html`; `Real Estate K Keystone Realty online Looking for a 2BHK near the tech park Budget range? I can share matching listings r → blog-real-estate-agent.html`; `Analytics 358 /412 Answered solo Aug 27, 2026 5 min read By The StepsAI Team What Your Analytics Dashboard Should Actual → blog-analytics-dashboard.html`.

### 4. Get the next playbook before anyone else

Source: `blog.html:698`; current classes: `bh-news`. Audit desktop height: 192px; padding: 52px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. Paste your website link. Watch it start answering.

Source: `blog.html:721`; current classes: `bh-cta`. Audit desktop height: 255px; padding: 60px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `blog.html:495` — Notes on building with AI agents.
- `blog.html:523` — How One Inbox Ends Support Triage
- `blog.html:546` — Recovering Abandoned Carts on Autopilot
- `blog.html:566` — Setting Up an AI Agent for Real Estate
- `blog.html:582` — What Your Analytics Dashboard Should Actually Tell You
- `blog.html:701` — Get the next playbook before anyone else
- `blog.html:724` — Paste your website link. Watch it start answering.

## Mockup and responsive composition

Editorial cards with category, real title, date and article destination; clear filtering if present.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Existing relevant article images.
- Stock decision: Optional topic-specific editorial images; no embedded headings in images.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “help find useful articles” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

