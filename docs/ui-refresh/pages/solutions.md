# solutions.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Help select an outcome. Existing title: “Solutions by role &mdash; StepsAI | One agent, every role you need it to play”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [solutions.html](../../../solutions.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `creative-showcase.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 840. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. One agent. Every role you need it to play.

Source: `solutions.html:492`; current classes: `vertical-hero`. Audit desktop height: 396px; padding: 72px 0px 40px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

### 2. Growth; Marketing; Sales; Support; Appointments

Source: `solutions.html:509`; current classes: `section section--base section--atmo`. Audit desktop height: 685px; padding: 0px 0px 120px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Growth”; “Marketing”; “Sales”; “Support”; “Appointments”.

Preserve destinations: `Growth Turn comments, DMs, and site visits into qualified conversations before a human ever sees them. See how it works → role-growth.html`; `Marketing Answer campaign and promo questions instantly, and re-engage everyone who didn&rsquo;t convert. See how it wor → role-marketing.html`; `Sales Qualify who&rsquo;s ready to buy, answer pricing and fit questions, and book the meeting. See how it works → role-sales.html`; `Support Resolve the questions you answer every day, and hand over cleanly when it can&rsquo;t. See how it works → role-support.html`; `Appointments Book, remind, and reschedule automatically, then recover no-shows and report weekly. See how it works → role-appointments.html`; `See it by industry → industries.html`.

### 3. One platform to connect, collaborate and deliver

Source: `solutions.html:607`; current classes: `section section--raised section--atmo`. Audit desktop height: 632px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable. For provider rows use white cards on a pale-blue band, verified provider marks and readable connection labels. A static status badge must not look like an interactive Connect button.

Preserve destinations: `Get started today → pricing.html`.

### 4. Solutions, answered.

Source: `solutions.html:738`; current classes: `section section--base faq section--atmo`. Audit desktop height: 438px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. Pick a role. See it work.

Source: `solutions.html:797`; current classes: `section section--dark final-cta`.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `solutions.html:497` — One agent. Every role you need it to play.
- `solutions.html:616` — One platform to connect, collaborate and deliver
- `solutions.html:745` — Solutions, answered.
- `solutions.html:801` — Pick a role. See it work.

## Mockup and responsive composition

Outcome-led route chooser with specific agent/channel connections and no duplicated generic cards.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Existing relevant navigation illustrations.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “help select an outcome” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

