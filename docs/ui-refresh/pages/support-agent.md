# support-agent.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain accurate answers and escalation. Existing title: “Support Agent — StepsAI | Tracks it. Answers it. Resolves it — or hands it off.”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [support-agent.html](../../../support-agent.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `channel-premium.css`, `channel-premium-bold.css`, `signature-support.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`, `channel-premium.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 2 dark-marked sections; 1 legacy logo reference(s) at lines 757. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Tracks it. Answers it. Resolves it — or hands it off.

Source: `support-agent.html:491`; current classes: `vertical-hero`. Audit desktop height: 643px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All four agents → agents.html#four-agents`.

### 2. The same fifteen questions your team answers, now answered in 0.5 seconds.

Source: `support-agent.html:533`; current classes: `section section--raised section--atmo`. Audit desktop height: 1532px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Retain these content units: “"Where's my order" gets a real answer.”; “It cannot make things up.”; “When it doesn't know, it says so — and hands off cleanly.”.

### 3. Five tickets come in. Four get answered on the spot.

Source: `support-agent.html:606`; current classes: `section section--base`. Audit desktop height: 847px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. Tickets land where your team already works.

Source: `support-agent.html:658`; current classes: `section section--dark`. Audit desktop height: 499px; padding: 120px 0px.

Replace the full dark marketing surface with the explicit light variant. Change nested headings, descriptions, icons, borders and cards together; inherited white text must not remain. Use navy headings, muted body text and the shared blue action color.

### 5. Questions about the Support Agent.

Source: `support-agent.html:678`; current classes: `section section--base section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

### 6. Stop answering the same question fifteen times a day.

Source: `support-agent.html:716`; current classes: `section section--dark final-cta`. Audit desktop height: 501px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `support-agent.html:496` — Tracks it. Answers it. Resolves it — or hands it off.
- `support-agent.html:541` — The same fifteen questions your team answers, now answered in 0.5 seconds.
- `support-agent.html:610` — Five tickets come in. Four get answered on the spot.
- `support-agent.html:663` — Tickets land where your team already works.
- `support-agent.html:686` — Questions about the Support Agent.
- `support-agent.html:718` — Stop answering the same question fifteen times a day.

## Mockup and responsive composition

Show a question, source-grounded reply and human escalation with conversation context; reconcile the old 0.5-second headline with approved 0.2s copy.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Editable support conversation.
- Stock decision: No stock required; do not invent customer satisfaction statistics.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain accurate answers and escalation” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

