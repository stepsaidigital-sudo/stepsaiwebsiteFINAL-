# whatsapp-broadcast.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain campaign creation and outcomes. Existing title: “WhatsApp Broadcast — StepsAI | Reach everyone, answer everyone”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [whatsapp-broadcast.html](../../../whatsapp-broadcast.html). Local styles in cascade order: `styles.css?v=2.0`, `nav-mega-product.css`, `industries-deep.css?v=2.0`, `agents.css?v=2.0`, `channel-premium.css`, `channel-premium-bold.css`, `signature-broadcast.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`, `channel-premium.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 806. A favicon reference exists; confirm current identity.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. One message to a thousand people. A thousand different replies, each one answered.

Source: `whatsapp-broadcast.html:496`; current classes: `vertical-hero`. Audit desktop height: 679px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

### 2. What actually happens when you hit send.

Source: `whatsapp-broadcast.html:511`; current classes: `section section--base section--atmo`. Audit desktop height: 1016px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 3. Start with everyone. Send to who actually matters.

Source: `whatsapp-broadcast.html:589`; current classes: `section section--raised section--atmo`. Audit desktop height: 1136px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. Every rule WhatsApp has, already built in.

Source: `whatsapp-broadcast.html:644`; current classes: `section section--base section--atmo`. Audit desktop height: 548px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. A broadcast isn't a dead end.

Source: `whatsapp-broadcast.html:668`; current classes: `section section--raised section--atmo`. Audit desktop height: 582px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. About broadcasting.

Source: `whatsapp-broadcast.html:689`; current classes: `section section--base section--atmo`. Audit desktop height: 767px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 7. Say it once. Handle every reply anyway.

Source: `whatsapp-broadcast.html:765`; current classes: `section section--dark final-cta`. Audit desktop height: 501px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `whatsapp-broadcast.html:500` — One message to a thousand people. A thousand different replies, each one answered.
- `whatsapp-broadcast.html:519` — What actually happens when you hit send.
- `whatsapp-broadcast.html:597` — Start with everyone. Send to who actually matters.
- `whatsapp-broadcast.html:652` — Every rule WhatsApp has, already built in.
- `whatsapp-broadcast.html:676` — A broadcast isn't a dead end.
- `whatsapp-broadcast.html:697` — About broadcasting.
- `whatsapp-broadcast.html:767` — Say it once. Handle every reply anyway.

## Mockup and responsive composition

Audience selection, approved message preview and delivery summary with illustrative data; show consent and unsubscribe treatment where applicable.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Official WhatsApp mark and editable message UI.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain campaign creation and outcomes” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

