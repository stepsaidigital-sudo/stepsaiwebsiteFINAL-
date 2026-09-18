# role-sales.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain sales pipeline movement. Existing title: “Sales &mdash; StepsAI | Qualify leads and close deals faster”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [role-sales.html](../../../role-sales.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 781. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. It answers the pricing question. You take the meeting that&rsquo;s already qualified.

Source: `role-sales.html:485`; current classes: `vertical-hero`. Audit desktop height: 729px; padding: 72px 0px 90px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `Start free trial → pricing.html`; `All roles → solutions.html`.

### 2. What this actually looks like in the channel.

Source: `role-sales.html:504`; current classes: `section section--base section--atmo`. Audit desktop height: 942px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “What this actually looks like in the channel.”.

### 3. You already know these

Source: `role-sales.html:565`; current classes: `section section--base pain-use-section section--atmo`. Audit desktop height: 2422px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Qualify”; “Convert”; “Follow up”.

### 4. What it will never do

Source: `role-sales.html:618`; current classes: `section section--raised section--atmo`. Audit desktop height: 665px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. If you can only start with one thing

Source: `role-sales.html:645`; current classes: `section section--base section--atmo`. Audit desktop height: 707px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. What follow-up looks like after the first reply

Source: `role-sales.html:666`; current classes: `section section--raised section--atmo`. Audit desktop height: 694px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See the platform capabilities → capabilities.html`.

### 7. About the sales role.

Source: `role-sales.html:702`; current classes: `section section--raised section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. Someone is asking about pricing right now.

Source: `role-sales.html:738`; current classes: `section section--dark final-cta`. Audit desktop height: 493px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `role-sales.html:489` — It answers the pricing question. You take the meeting that&rsquo;s already qualified.
- `role-sales.html:599` — You already know these
- `role-sales.html:626` — What it will never do
- `role-sales.html:653` — If you can only start with one thing
- `role-sales.html:674` — What follow-up looks like after the first reply
- `role-sales.html:710` — About the sales role.
- `role-sales.html:742` — Someone is asking about pricing right now.

## Mockup and responsive composition

Qualified lead, conversation context and next task in a compact pipeline.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Editable pipeline UI.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain sales pipeline movement” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

