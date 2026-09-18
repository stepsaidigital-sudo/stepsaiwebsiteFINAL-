# agents.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Help choose among four agents. Existing title: “AI Agents — StepsAI | It answers. Then it acts.”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [agents.html](../../../agents.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `industries-deep.css`, `agents.css`, `creative-showcase.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `industries.js`, `agents.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 2 dark-marked sections; 1 legacy logo reference(s) at lines 1339. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. It answers. Then it acts.

Source: `agents.html:489`; current classes: `vertical-hero`. Audit desktop height: 408px; padding: 72px 0px 90px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

### 2. Four jobs. One agent that knows your business.

Source: `agents.html:501`; current classes: `section section--raised section--atmo`. Audit desktop height: 1082px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Sales Agent”; “Lead Agent”; “Meetings Agent”; “Support Agent”.

### 3. One platform to converse, collaborate and deliver

Source: `agents.html:561`; current classes: `section section--base section--atmo`. Audit desktop height: 781px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `Get started today → pricing.html`.

### 4. Every conversation, one place &mdash; and a person who can step in anytime.

Source: `agents.html:671`; current classes: `section section--base section--atmo`. Audit desktop height: 712px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See how One Inbox works &rarr; → one-inbox.html`.

### 5. Paste your website link. That's step one.

Source: `agents.html:768`; current classes: `section section--raised section--atmo`. Audit desktop height: 1111px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “It reads your site, automatically”; “It sounds like your business”; “Connect the tools you already use”; “Test it, then flip it on”.

### 6. When the customer stops, it keeps going.

Source: `agents.html:839`; current classes: `section section--dark`. Audit desktop height: 832px; padding: 120px 0px.

Replace the full dark marketing surface with the explicit light variant. Change nested headings, descriptions, icons, borders and cards together; inherited white text must not remain. Use navy headings, muted body text and the shared blue action color.

### 7. It handles what it can. You handle what matters.

Source: `agents.html:971`; current classes: `section section--base section--atmo`. Audit desktop height: 811px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. Every answer, every action, in plain English.

Source: `agents.html:1003`; current classes: `section section--raised section--atmo`. Audit desktop height: 0px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 9. Real businesses. Real numbers.

Source: `agents.html:1036`; current classes: `section section--base section--atmo`. Audit desktop height: 930px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 10. Reduce errors streamline work, stay productive

Source: `agents.html:1053`; current classes: `section section--base section--atmo`. Audit desktop height: 501px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `Get started today → pricing.html`.

### 11. Tasks, better outcomes

Source: `agents.html:1136`; current classes: `section section--raised section--atmo creative-bento-section`.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “One platform for every task and project”; “A workflow designed to fit your style”; “Boosted productivity”; “Data-driven insights”; “Deadline tracking”.

### 12. Everything else.

Source: `agents.html:1243`; current classes: `section section--base section--atmo`.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 13. Paste your website link. Watch it start answering.

Source: `agents.html:1298`; current classes: `section section--dark final-cta`.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `agents.html:493` — It answers. Then it acts.
- `agents.html:509` — Four jobs. One agent that knows your business.
- `agents.html:570` — One platform to converse, collaborate and deliver
- `agents.html:680` — Every conversation, one place &mdash; and a person who can step in anytime.
- `agents.html:776` — Paste your website link. That's step one.
- `agents.html:843` — When the customer stops, it keeps going.
- `agents.html:979` — It handles what it can. You handle what matters.
- `agents.html:1011` — Every answer, every action, in plain English.
- `agents.html:1043` — Real businesses. Real numbers.
- `agents.html:1110` — Reduce errors streamline work, stay productive
- `agents.html:1144` — Tasks, better outcomes
- `agents.html:1251` — Everything else.
- `agents.html:1300` — Paste your website link. Watch it start answering.

## Mockup and responsive composition

Four distinct previews for sales, support, lead capture and meetings with equal visual weight and working detail links.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Existing agent navigation illustrations.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “help choose among four agents” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

