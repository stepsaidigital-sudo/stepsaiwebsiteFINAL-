# workflows.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain automation logic. Existing title: “Workflows — StepsAI | When the customer stops, it keeps going.”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [workflows.html](../../../workflows.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `creative-showcase.css`, `channel-premium.css`, `channel-premium-bold.css`, `signature-workflows.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`, `channel-premium.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 2 dark-marked sections; 1 legacy logo reference(s) at lines 978. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. 96 out of 100 visitors leave without buying. Your workflow chases the ones who left a full cart.

Source: `workflows.html:492`; current classes: `vertical-hero`. Audit desktop height: 679px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

### 2. Five jobs, one automation engine.

Source: `workflows.html:505`; current classes: `section section--dark`. Audit desktop height: 1152px; padding: 120px 0px.

Replace the full dark marketing surface with the explicit light variant. Change nested headings, descriptions, icons, borders and cards together; inherited white text must not remain. Use navy headings, muted body text and the shared blue action color.

### 3. Four building blocks. Any workflow you need.

Source: `workflows.html:649`; current classes: `section section--base section--atmo`. Audit desktop height: 683px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. Start from a template, not a blank canvas.

Source: `workflows.html:671`; current classes: `section section--raised section--atmo`. Audit desktop height: 679px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. Tasks, better outcomes

Source: `workflows.html:705`; current classes: `section section--raised section--atmo creative-bento-section`. Audit desktop height: 631px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “One platform for every task and project”; “A workflow designed to fit your style”; “Boosted productivity”; “Data-driven insights”; “Deadline tracking”.

### 6. Reduce errors streamline work, stay productive

Source: `workflows.html:818`; current classes: `section section--base section--atmo`. Audit desktop height: 446px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `Get started today → pricing.html`.

### 7. About workflows.

Source: `workflows.html:899`; current classes: `section section--base section--atmo`.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. Set one up. Watch it run itself.

Source: `workflows.html:937`; current classes: `section section--dark final-cta`.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `workflows.html:496` — 96 out of 100 visitors leave without buying. Your workflow chases the ones who left a full cart.
- `workflows.html:509` — Five jobs, one automation engine.
- `workflows.html:657` — Four building blocks. Any workflow you need.
- `workflows.html:679` — Start from a template, not a blank canvas.
- `workflows.html:713` — Tasks, better outcomes
- `workflows.html:875` — Reduce errors streamline work, stay productive
- `workflows.html:907` — About workflows.
- `workflows.html:939` — Set one up. Watch it run itself.

## Mockup and responsive composition

One trigger, decision and action with visible labels; on narrow screens render an ordered sequence instead of shrinking the canvas.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Editable workflow nodes.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain automation logic” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

