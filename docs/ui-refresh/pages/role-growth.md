# role-growth.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Explain growth-team value. Existing title: “Growth &mdash; StepsAI | Turn traffic into qualified conversations”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [role-growth.html](../../../role-growth.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 403px at a 390px viewport. Confirmed horizontal overflow. Find the actual overflowing element; inspect min-width, fixed demo widths, grid children and translated decorations. Do not hide the defect with global overflow-x:hidden.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 777. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Catch the interest while it&rsquo;s still warm.

Source: `role-growth.html:485`; current classes: `vertical-hero`. Audit desktop height: 624px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Preserve destinations: `Start free trial → pricing.html`; `All roles → solutions.html`.

### 2. What this actually looks like in the channel.

Source: `role-growth.html:504`; current classes: `section section--base section--atmo`. Audit desktop height: 942px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “What this actually looks like in the channel.”.

Preserve destinations: `View product → #`.

### 3. You already know these

Source: `role-growth.html:558`; current classes: `section section--base pain-use-section section--atmo`. Audit desktop height: 2720px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Capture & respond”; “Qualify & route”; “Re-engage & report”.

### 4. What it will never do

Source: `role-growth.html:613`; current classes: `section section--raised section--atmo`. Audit desktop height: 665px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. If you can only start with one thing

Source: `role-growth.html:640`; current classes: `section section--base section--atmo`. Audit desktop height: 707px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. What follow-up looks like after the first reply

Source: `role-growth.html:662`; current classes: `section section--raised section--atmo`. Audit desktop height: 715px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See the platform capabilities → capabilities.html`.

### 7. About the growth role.

Source: `role-growth.html:698`; current classes: `section section--raised section--atmo`. Audit desktop height: 631px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. Someone is interested in you right now.

Source: `role-growth.html:734`; current classes: `section section--dark final-cta`. Audit desktop height: 493px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `role-growth.html:489` — Catch the interest while it&rsquo;s still warm.
- `role-growth.html:594` — You already know these
- `role-growth.html:621` — What it will never do
- `role-growth.html:648` — If you can only start with one thing
- `role-growth.html:670` — What follow-up looks like after the first reply
- `role-growth.html:706` — About the growth role.
- `role-growth.html:738` — Someone is interested in you right now.

## Mockup and responsive composition

Conversation source to qualified outcome with clearly illustrative funnel values.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Editable funnel and conversation.
- Stock decision: No stock required.
- Existing non-navigation image references: `images/product-oxford-shirts.jpg`
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “explain growth-team value” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

