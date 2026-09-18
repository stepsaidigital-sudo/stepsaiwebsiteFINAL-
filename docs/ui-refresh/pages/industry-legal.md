# industry-legal.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain legal-service intake. Existing title: “Legal Services — StepsAI | Capture more qualified enquiries”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [industry-legal.html](../../../industry-legal.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `pages.css`, `industries-deep.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 857. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Answer every enquiry the moment it comes in. Leave the legal judgment to your lawyers.

Source: `industry-legal.html:485`; current classes: `vertical-hero`. Audit desktop height: 697px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All industries → industries.html`.

### 2. You already know these

Source: `industry-legal.html:501`; current classes: `section section--base pain-use-section section--atmo`. Audit desktop height: 2779px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Intake & screen”; “Book & onboard”; “Support & escalate”.

### 3. What it will never do

Source: `industry-legal.html:566`; current classes: `section section--raised section--atmo`. Audit desktop height: 710px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. If you can only start with one thing

Source: `industry-legal.html:594`; current classes: `section section--base section--atmo`. Audit desktop height: 791px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. What automation looks like, live.

Source: `industry-legal.html:620`; current classes: `wf-section`. Audit desktop height: 1469px; padding: 112px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. What follow-up looks like after the enquiry

Source: `industry-legal.html:719`; current classes: `section section--raised section--atmo`. Audit desktop height: 715px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See the platform capabilities → capabilities.html`.

### 7. Where this comes from

Source: `industry-legal.html:757`; current classes: `section section--base section--atmo`. Audit desktop height: 951px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. About legal intake with Steps AI.

Source: `industry-legal.html:778`; current classes: `section section--raised section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 9. Someone is comparing you to three other firms right now.

Source: `industry-legal.html:814`; current classes: `section section--dark final-cta`. Audit desktop height: 493px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `industry-legal.html:489` — Answer every enquiry the moment it comes in. Leave the legal judgment to your lawyers.
- `industry-legal.html:510` — You already know these
- `industry-legal.html:574` — What it will never do
- `industry-legal.html:602` — If you can only start with one thing
- `industry-legal.html:623` — What automation looks like, live.
- `industry-legal.html:727` — What follow-up looks like after the enquiry
- `industry-legal.html:765` — Where this comes from
- `industry-legal.html:786` — About legal intake with Steps AI.
- `industry-legal.html:818` — Someone is comparing you to three other firms right now.

## Mockup and responsive composition

Initial enquiry, practice-area routing and consultation request; do not present the agent as giving legal advice.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Editable intake UI.
- Stock decision: Optional: restrained office detail; no stock person represented as a real lawyer.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain legal-service intake” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

