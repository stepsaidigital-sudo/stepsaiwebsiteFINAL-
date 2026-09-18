# terms-of-service.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Make terms readable. Existing title: “Terms of Service — StepsAI”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [terms-of-service.html](../../../terms-of-service.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `pages.css`, `industries-deep.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 621. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Terms of Service

Source: `terms-of-service.html:489`; current classes: `section section--base page-hero section--atmo`. Audit desktop height: 355px; padding: 116px 0px 44px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

### 2. 1. Acceptance of terms

Source: `terms-of-service.html:502`; current classes: `section section--raised section--atmo`. Audit desktop height: 3059px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `1. Acceptance of terms → #acceptance`; `2. The service → #service`; `3. Accounts & registration → #accounts`; `4. Subscriptions & billing → #billing`; `5. Acceptable use → #use`; `6. Your content & data → #content`; `7. Third-party integrations → #integrations`; `8. Intellectual property → #ip`; `9. Disclaimers & limitation of liability → #disclaimer`; `10. Termination → #termination`; `11. Governing law → #law`; `12. Changes to these terms → #changes`; `13. Contact us → #contact`; `Privacy Policy → privacy-policy.html`; `Privacy Policy → privacy-policy.html`; `our contact page → contact.html`.

### 3. Questions before you sign up?

Source: `terms-of-service.html:581`; current classes: `section section--dark final-cta`. Audit desktop height: 409px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `Contact us → contact.html`.

## Content landmarks outside or within sections

- `terms-of-service.html:497` — Terms of Service
- `terms-of-service.html:528` — 1. Acceptance of terms
- `terms-of-service.html:531` — 2. The service
- `terms-of-service.html:534` — 3. Accounts & registration
- `terms-of-service.html:537` — 4. Subscriptions & billing
- `terms-of-service.html:545` — 5. Acceptable use
- `terms-of-service.html:554` — 6. Your content & data
- `terms-of-service.html:557` — 7. Third-party integrations
- `terms-of-service.html:560` — 8. Intellectual property
- `terms-of-service.html:563` — 9. Disclaimers & limitation of liability
- `terms-of-service.html:566` — 10. Termination
- `terms-of-service.html:569` — 11. Governing law
- `terms-of-service.html:572` — 12. Changes to these terms
- `terms-of-service.html:575` — 13. Contact us
- `terms-of-service.html:583` — Questions before you sign up?

## Mockup and responsive composition

Single reading column with stable anchors, readable lists and exact existing terms.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: No imagery.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “make terms readable” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

