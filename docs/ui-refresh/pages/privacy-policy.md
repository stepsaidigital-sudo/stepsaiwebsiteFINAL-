# privacy-policy.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Make the policy readable. Existing title: “Privacy Policy — StepsAI”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [privacy-policy.html](../../../privacy-policy.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `pages.css`, `industries-deep.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 625. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Privacy Policy

Source: `privacy-policy.html:489`; current classes: `section section--base page-hero section--atmo`. Audit desktop height: 355px; padding: 116px 0px 44px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

### 2. 1. Overview

Source: `privacy-policy.html:502`; current classes: `section section--raised section--atmo`. Audit desktop height: 3263px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `1. Overview → #overview`; `2. Information we collect → #collect`; `3. How we use information → #use`; `4. Data we process on behalf of our customers → #processor`; `5. Cookies & tracking → #cookies`; `6. Sharing & third-party services → #sharing`; `7. Data retention → #retention`; `8. Your rights → #rights`; `9. Security → #security`; `10. Children's privacy → #children`; `11. Changes to this policy → #changes`; `12. Contact us → #contact`; `our contact page → contact.html`.

### 3. Questions about your data?

Source: `privacy-policy.html:585`; current classes: `section section--dark final-cta`. Audit desktop height: 409px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

Preserve destinations: `Contact us → contact.html`.

## Content landmarks outside or within sections

- `privacy-policy.html:497` — Privacy Policy
- `privacy-policy.html:527` — 1. Overview
- `privacy-policy.html:530` — 2. Information we collect
- `privacy-policy.html:539` — 3. How we use information
- `privacy-policy.html:549` — 4. Data we process on behalf of our customers
- `privacy-policy.html:552` — 5. Cookies & tracking
- `privacy-policy.html:555` — 6. Sharing & third-party services
- `privacy-policy.html:564` — 7. Data retention
- `privacy-policy.html:567` — 8. Your rights
- `privacy-policy.html:570` — 9. Security
- `privacy-policy.html:573` — 10. Children's privacy
- `privacy-policy.html:576` — 11. Changes to this policy
- `privacy-policy.html:579` — 12. Contact us
- `privacy-policy.html:587` — Questions about your data?

## Mockup and responsive composition

Single reading column, clear heading hierarchy and real anchor navigation without changing legal text.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: No imagery.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “make the policy readable” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

