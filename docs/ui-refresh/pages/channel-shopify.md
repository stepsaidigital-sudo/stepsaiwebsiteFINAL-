# channel-shopify.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain storefront integration. Existing title: “Shopify — StepsAI | Answers with the order in front of it.”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [channel-shopify.html](../../../channel-shopify.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `channel-premium.css`, `channel-premium-bold.css`, `signature-shopify.css`.
- Scripts to preserve and exercise: `nav.js`, `industries.js`, `channel-premium.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 714. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Answers with the order in front of it.

Source: `channel-shopify.html:489`; current classes: `vertical-hero`. Audit desktop height: 616px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All channels → agents.html#channels`.

### 2. The cart gets checked before the customer forgets it.

Source: `channel-shopify.html:532`; current classes: `section section--base`. Audit desktop height: 932px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See all workflow types → workflows.html`.

### 3. One question becomes three different lookups.

Source: `channel-shopify.html:573`; current classes: `section section--raised`. Audit desktop height: 860px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

### 4. It reads your Shopify store. It doesn't create discount codes or override your return policy.

Source: `channel-shopify.html:614`; current classes: `section section--base`. Audit desktop height: 529px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “It reads your Shopify store. It doesn't create discount codes or override your return policy.”.

### 5. About the Shopify channel.

Source: `channel-shopify.html:634`; current classes: `section section--raised section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. Every order question, answered before it becomes a refund.

Source: `channel-shopify.html:673`; current classes: `section section--dark final-cta`. Audit desktop height: 501px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `channel-shopify.html:493` — Answers with the order in front of it.
- `channel-shopify.html:536` — The cart gets checked before the customer forgets it.
- `channel-shopify.html:577` — One question becomes three different lookups.
- `channel-shopify.html:642` — About the Shopify channel.
- `channel-shopify.html:675` — Every order question, answered before it becomes a refund.

## Mockup and responsive composition

Product enquiry, live stock context and cart/checkout action; do not imply a paid order before confirmation.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Official Shopify mark and existing matching product images.
- Stock decision: No new stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain storefront integration” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

