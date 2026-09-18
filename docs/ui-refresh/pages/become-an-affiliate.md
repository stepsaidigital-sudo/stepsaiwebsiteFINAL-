# become-an-affiliate.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain affiliate application. Existing title: “Become an Affiliate | StepsAI”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [become-an-affiliate.html](../../../become-an-affiliate.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `pages.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `pages.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 701. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Send a client. Get paid every month they stay.

Source: `become-an-affiliate.html:491`; current classes: `section section--base page-hero section--atmo`. Audit desktop height: 621px; padding: 116px 0px 44px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Partner with us &rarr; → partner.html`.

### 2. Your link. Our work. Your payout.

Source: `become-an-affiliate.html:521`; current classes: `section section--raised section--atmo`. Audit desktop height: 540px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Your link”; “Auto-tracking”; “Auto-commission”; “Monthly payout”.

### 3. You refer. We do everything after that.

Source: `become-an-affiliate.html:559`; current classes: `section section--base section--atmo`. Audit desktop height: 570px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “What you do”; “What StepsAI does”.

### 4. We won't cut you out after the introduction.

Source: `become-an-affiliate.html:591`; current classes: `section section--raised section--atmo`. Audit desktop height: 561px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. Affiliate questions, answered.

Source: `become-an-affiliate.html:616`; current classes: `section section--base faq section--atmo`. Audit desktop height: 782px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `white-label reselling → partner.html`.

### 6. Your first referral can go out today.

Source: `become-an-affiliate.html:657`; current classes: `section section--dark final-cta`. Audit desktop height: 493px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

## Content landmarks outside or within sections

- `become-an-affiliate.html:499` — Send a client. Get paid every month they stay.
- `become-an-affiliate.html:528` — Your link. Our work. Your payout.
- `become-an-affiliate.html:566` — You refer. We do everything after that.
- `become-an-affiliate.html:598` — We won't cut you out after the introduction.
- `become-an-affiliate.html:623` — Affiliate questions, answered.
- `become-an-affiliate.html:661` — Your first referral can go out today.

## Mockup and responsive composition

Program terms, process and clear application states; preserve actual rates and qualification rules.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: No photography needed.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain affiliate application” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

