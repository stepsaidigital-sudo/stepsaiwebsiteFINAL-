# channel-instagram.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain Instagram DM conversion. Existing title: “Instagram — StepsAI | Turn a comment into a customer.”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [channel-instagram.html](../../../channel-instagram.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `channel-premium.css`, `channel-premium-bold.css`, `signature-instagram.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`, `channel-premium.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 736. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Turn a comment into a customer.

Source: `channel-instagram.html:491`; current classes: `vertical-hero`. Audit desktop height: 890px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All channels → agents.html#channels`; `Hold this item → #`.

### 2. Comments and DMs — it watches both.

Source: `channel-instagram.html:556`; current classes: `section section--raised section--atmo`. Audit desktop height: 472px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Comments and DMs — it watches both.”.

### 3. A comment becomes a DM becomes a sale.

Source: `channel-instagram.html:585`; current classes: `section section--raised`. Audit desktop height: 1391px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. A Story reply is a lead the same way a comment is.

Source: `channel-instagram.html:630`; current classes: `section section--base section--atmo`. Audit desktop height: 447px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “A Story reply is a lead the same way a comment is.”.

### 5. About the Instagram channel.

Source: `channel-instagram.html:656`; current classes: `section section--raised section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. Your next customer just left a comment.

Source: `channel-instagram.html:695`; current classes: `section section--dark final-cta`. Audit desktop height: 501px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `channel-instagram.html:496` — Turn a comment into a customer.
- `channel-instagram.html:589` — A comment becomes a DM becomes a sale.
- `channel-instagram.html:664` — About the Instagram channel.
- `channel-instagram.html:697` — Your next customer just left a comment.

## Mockup and responsive composition

DM enquiry from a product post, helpful reply and next step; constrain the device and floating cards at mobile widths.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Official Instagram logo.
- Stock decision: No stock required; optional owned product thumbnail.
- Existing non-navigation image references: `images/product-mandarin-shirt.jpg`
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain instagram dm conversion” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

