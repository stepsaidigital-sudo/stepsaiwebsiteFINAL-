# industry-hotels.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain hospitality enquiries. Existing title: “Hotels & Hospitality — StepsAI | Win more direct bookings”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [industry-hotels.html](../../../industry-hotels.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 861. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Answer the midnight message. Handle the whole stay.

Source: `industry-hotels.html:485`; current classes: `vertical-hero`. Audit desktop height: 661px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All industries → industries.html`.

### 2. What this actually looks like on WhatsApp.

Source: `industry-hotels.html:503`; current classes: `section section--base section--atmo`. Audit desktop height: 942px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “What this actually looks like on WhatsApp.”.

Preserve destinations: `Hold this room → #`.

### 3. You already know these

Source: `industry-hotels.html:565`; current classes: `section section--base pain-use-section section--atmo`. Audit desktop height: 3613px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Discover & book”; “Arrive & stay”; “Resolve & return”.

### 4. If you can only start with one thing

Source: `industry-hotels.html:623`; current classes: `section section--raised section--atmo`. Audit desktop height: 791px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. What automation looks like, live.

Source: `industry-hotels.html:650`; current classes: `wf-section`. Audit desktop height: 1500px; padding: 112px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. What the guest journey looks like end to end

Source: `industry-hotels.html:749`; current classes: `section section--base section--atmo`. Audit desktop height: 742px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See the platform capabilities → capabilities.html`.

### 7. About the hotels and hospitality agent.

Source: `industry-hotels.html:782`; current classes: `section section--raised section--atmo`. Audit desktop height: 682px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. A guest is deciding between you and an OTA right now.

Source: `industry-hotels.html:818`; current classes: `section section--dark final-cta`. Audit desktop height: 493px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `industry-hotels.html:488` — Answer the midnight message. Handle the whole stay.
- `industry-hotels.html:607` — You already know these
- `industry-hotels.html:631` — If you can only start with one thing
- `industry-hotels.html:653` — What automation looks like, live.
- `industry-hotels.html:757` — What the guest journey looks like end to end
- `industry-hotels.html:790` — About the hotels and hospitality agent.
- `industry-hotels.html:822` — A guest is deciding between you and an OTA right now.

## Mockup and responsive composition

Room availability enquiry, amenity answer and booking handoff with sample dates.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: images/hero-hotels.jpg.
- Stock decision: Optional: bright hotel reception or room, no recognizable hotel branding.
- Existing non-navigation image references: `images/hero-hotels.jpg`
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain hospitality enquiries” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

