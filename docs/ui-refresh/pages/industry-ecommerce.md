# industry-ecommerce.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain retail conversion. Existing title: “E-Commerce — StepsAI | Answer the question. Save the sale.”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [industry-ecommerce.html](../../../industry-ecommerce.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 3 dark-marked sections; 1 legacy logo reference(s) at lines 1062. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Answer the question. Save the sale.

Source: `industry-ecommerce.html:488`; current classes: `vertical-hero`. Audit desktop height: 874px; padding: 72px 0px 90px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `Start free trial → pricing.html`; `All industries → industries.html`.

### 2. Real questions, the way they actually get typed.

Source: `industry-ecommerce.html:545`; current classes: `section section--raised section--atmo`. Audit desktop height: 654px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

### 3. Four jobs. One agent.

Source: `industry-ecommerce.html:568`; current classes: `section section--base section--atmo`. Audit desktop height: 3355px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Recommends by size, budget, and stock — accurately.”; “Reaches out before the cart goes cold.”; “"Where is my order" gets a real answer.”; “Spots a wholesale enquiry before it gets buried.”.

Preserve destinations: `View product → #`; `Track order → #`.

### 4. What follow-up looks like after the cart.

Source: `industry-ecommerce.html:783`; current classes: `wf-section`. Audit desktop height: 1499px; padding: 112px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. Every moment in the customer journey, covered.

Source: `industry-ecommerce.html:886`; current classes: `section section--base section--atmo`. Audit desktop height: 629px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. It checks your real store before it speaks.

Source: `industry-ecommerce.html:919`; current classes: `section section--dark`. Audit desktop height: 499px; padding: 120px 0px.

Replace the full dark marketing surface with the explicit light variant. Change nested headings, descriptions, icons, borders and cards together; inherited white text must not remain. Use navy headings, muted body text and the shared blue action color.

### 7. Section 7

Source: `industry-ecommerce.html:941`; current classes: `section section--dark`. Audit desktop height: 229px; padding: 0px 0px 120px.

Replace the full dark marketing surface with the explicit light variant. Change nested headings, descriptions, icons, borders and cards together; inherited white text must not remain. Use navy headings, muted body text and the shared blue action color.

### 8. It never promises something you don't have.

Source: `industry-ecommerce.html:957`; current classes: `section section--base section--atmo`. Audit desktop height: 611px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 9. Questions e-commerce teams ask us.

Source: `industry-ecommerce.html:978`; current classes: `section section--raised section--atmo`. Audit desktop height: 731px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `See the platform capabilities → agents.html`.

### 10. Your next sale is one answered question away.

Source: `industry-ecommerce.html:1021`; current classes: `section section--dark final-cta`. Audit desktop height: 501px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `industry-ecommerce.html:492` — Answer the question. Save the sale.
- `industry-ecommerce.html:553` — Real questions, the way they actually get typed.
- `industry-ecommerce.html:576` — Four jobs. One agent.
- `industry-ecommerce.html:787` — What follow-up looks like after the cart.
- `industry-ecommerce.html:894` — Every moment in the customer journey, covered.
- `industry-ecommerce.html:924` — It checks your real store before it speaks.
- `industry-ecommerce.html:965` — It never promises something you don't have.
- `industry-ecommerce.html:986` — Questions e-commerce teams ask us.
- `industry-ecommerce.html:1023` — Your next sale is one answered question away.

## Mockup and responsive composition

Product discovery, stock validation and checkout conversation.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: images/hero-ecommerce.jpg and matching existing product photos.
- Stock decision: Optional: natural product merchandising, no text or fake brand marks.
- Existing non-navigation image references: `images/product-oxford-shirts.jpg`
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain retail conversion” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

