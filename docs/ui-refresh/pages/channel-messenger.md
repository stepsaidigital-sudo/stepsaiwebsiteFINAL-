# channel-messenger.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain Messenger support and sales. Existing title: “Messenger — StepsAI | Every Page message, already in context”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [channel-messenger.html](../../../channel-messenger.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `channel-premium.css`, `channel-premium-bold.css`, `signature-messenger.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`, `channel-premium.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 723. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. It already knows why they messaged.

Source: `channel-messenger.html:495`; current classes: `vertical-hero`. Audit desktop height: 812px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All channels → agents.html#channels`.

### 2. A DM from an ad isn't a cold message.

Source: `channel-messenger.html:550`; current classes: `section section--base section--atmo`. Audit desktop height: 576px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “A DM from an ad isn't a cold message.”.

### 3. The ad they clicked walks into the conversation with them.

Source: `channel-messenger.html:583`; current classes: `section section--raised`. Audit desktop height: 1355px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. It connects to your Facebook Page — it doesn't replace it.

Source: `channel-messenger.html:619`; current classes: `section section--raised section--atmo`. Audit desktop height: 503px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable. For provider rows use white cards on a pale-blue band, verified provider marks and readable connection labels. A static status badge must not look like an interactive Connect button.

Retain these content units: “It connects to your Facebook Page — it doesn't replace it.”.

### 5. About the Messenger channel.

Source: `channel-messenger.html:643`; current classes: `section section--base section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. Someone's messaging your Page right now.

Source: `channel-messenger.html:682`; current classes: `section section--dark final-cta`. Audit desktop height: 501px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `channel-messenger.html:500` — It already knows why they messaged.
- `channel-messenger.html:587` — The ad they clicked walks into the conversation with them.
- `channel-messenger.html:651` — About the Messenger channel.
- `channel-messenger.html:684` — Someone's messaging your Page right now.

## Mockup and responsive composition

Messenger enquiry to resolution with clear sender states, responsive message bubbles and legible timestamps.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Official Messenger logo.
- Stock decision: No stock required.
- Existing non-navigation image references: `images/product-mandarin-shirt.jpg`
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain messenger support and sales” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

