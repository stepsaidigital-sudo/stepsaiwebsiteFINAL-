# sales-agent.html — UI implementation brief

Status: implemented as the first pilot on 2026-09-17. The page-specific stylesheet proves the new light direction before the rules are promoted to shared components.

## Objective and constraints

Explain recommendation through checkout. Existing title: “Sales Agent — StepsAI | It doesn't just chat. It sells.”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [sales-agent.html](../../../sales-agent.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `channel-premium.css`, `channel-premium-bold.css`, `signature-sales.css`, `sales-agent-polish.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`, `channel-premium.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 2 dark-marked sections; 1 legacy logo reference(s) at lines 764. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. It doesn't just chat. It sells.

Source: `sales-agent.html:491`; current classes: `vertical-hero`. Audit desktop height: 621px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All four agents → agents.html#four-agents`.

### 2. A salesperson who's read your entire catalogue.

Source: `sales-agent.html:533`; current classes: `section section--raised section--atmo`. Audit desktop height: 1557px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Reads your catalogue, not a script.”; “It never promises something you don't have.”; “The conversation ends at checkout, not at "let me check."”.

### 3. Follow one customer from "does this exist" to "order placed."

Source: `sales-agent.html:608`; current classes: `section section--base`. Audit desktop height: 1161px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. Connects to the store and CRM you already run.

Source: `sales-agent.html:665`; current classes: `section section--dark`. Audit desktop height: 499px; padding: 120px 0px.

Replace the full dark marketing surface with the explicit light variant. Change nested headings, descriptions, icons, borders and cards together; inherited white text must not remain. Use navy headings, muted body text and the shared blue action color. For provider rows use white cards on a pale-blue band, verified provider marks and readable connection labels. A static status badge must not look like an interactive Connect button.

### 5. Questions about the Sales Agent.

Source: `sales-agent.html:685`; current classes: `section section--base section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

### 6. Your next sale is one recommendation away.

Source: `sales-agent.html:723`; current classes: `section section--dark final-cta`. Audit desktop height: 501px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `sales-agent.html:496` — It doesn't just chat. It sells.
- `sales-agent.html:541` — A salesperson who's read your entire catalogue.
- `sales-agent.html:612` — Follow one customer from "does this exist" to "order placed."
- `sales-agent.html:670` — Connects to the store and CRM you already run.
- `sales-agent.html:693` — Questions about the Sales Agent.
- `sales-agent.html:725` — Your next sale is one recommendation away.

## Mockup and responsive composition

### Pilot component dimensions and states

| Component | Desktop composition | Mobile composition | Required detail |
|---|---|---|---|
| Hero | Copy and conversation in two columns, 40–56px gap | Copy, actions, then full-width conversation | Keep message text at least 14px; reduce oversized background blobs rather than shrinking the entire UI |
| Capability rows | Three alternating rows; 48–64px between rows | Copy above matching demo; 32–40px between pairs | Recommendation, stock check and checkout use the same fictional transaction |
| Five-step journey | 640–760px readable flow area; slim numbered rail | 24px rail plus 12px gap, remaining width for cards | Discovery → stock check → recommendation → buying intent → confirmed order; green only for final success |
| Integration band | Copy plus three provider rows; natural 320–400px total height | Copy then rows; no fixed height | Shopify, HubSpot and Salesforce marks in 24–28px boxes; informational status, not a fake Connect button |
| FAQ | Heading with 760–880px answer area | Full available width | Closed/open, keyboard focus, long answer wrapping |
| Final CTA | Centered pale-blue field, natural 260–340px height | Wrapped headline and comfortably sized button | Preserve pricing.html destination and existing trial terms |

Inspect `industries-deep.css` integration-row background and text rules and `styles.css` final-CTA child colors before changing section classes. `channel-premium-bold.css` introduces atmosphere and animation: reduce decoration within this page's explicit scope, without disabling functional demonstrations. Diagnose the measured 13px mobile overflow using element bounds; the audit establishes the defect but does not establish its exact offending selector.

A shopper asks for an in-stock blue shirt under ₹2,000; show recommendation, size check, checkout reservation and confirmed order as five readable states.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Existing product shirt photos, only if they match the illustrated catalogue.
- Stock decision: No stock required; use editable product conversation UI.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain recommendation through checkout” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: complete for the pilot scope, including the three “What it does” demonstrations. Changed `sales-agent.html`, `nav.js` and `industries.js`; added `sales-agent-polish.css`, `feature-demos.css`, `feature-demos.js`, and the optimized 36KB product derivative `images/product-oxford-shirts-card.webp`. The recommendation, inventory and checkout scenes now share one coherent product story, expose deterministic loading/result states, and provide Pause and Replay controls. Reduced-motion visitors receive the complete state immediately; with JavaScript unavailable, all meaningful scene content and the stable transcript remain available.

The final audit measured 1440px at a 1440px viewport and 390px at a 390px viewport, removing the previous 403px mobile overflow. Additional width checks passed at 320, 768 and 1024px. Navigation is 77px/65px including its one-pixel border, with centered Pricing and a restored blue expert CTA. Dark-marked sections fell from two to zero, the footer old-logo reference was removed, FAQ state now exposes `aria-expanded` and `aria-controls`, and the newsletter reports its disconnected state without a script error. Focused browser verification covers normal playback, pause/resume, replay, off-screen pause, reduced motion and JavaScript failure; run it with `node docs/ui-refresh/verify-feature-demos.cjs`. Selected screenshots live in `../evidence/`, including `../evidence/features/sales-feature-section-complete.png`. External fonts and real integration connectivity remain production checks.
