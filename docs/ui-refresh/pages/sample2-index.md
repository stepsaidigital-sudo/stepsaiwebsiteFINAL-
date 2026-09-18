# sample2/index.html — UI implementation brief

Status: planned, not implemented. Reference-only document; do not alter the live homepage based on this sample without a separate decision.

## Objective and constraints

Preserve the alternate homepage reference. Existing title: “StepsAI — AI Customer Service That Acts, Not Just Answers”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [sample2/index.html](../../../sample2/index.html). Local styles in cascade order: `styles.css`.
- Scripts to preserve and exercise: `script.js`.
- Header measured unavailablepx desktop / unavailablepx mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 0 dark-marked sections; 2 legacy logo reference(s) at lines 17, 381. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. It sells, supports, and captures — from the same knowledge base.

Source: `sample2/index.html:58`; current classes: ``. Audit desktop height: 673px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Sells”; “Supports”; “Captures”.

### 2. From your website to a live agent, in one pass.

Source: `sample2/index.html:89`; current classes: ``. Audit desktop height: 565px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Paste your URL”; “Make it yours”; “Connect your tools”; “Go live”.

### 3. Build it once. It works everywhere your customer already is.

Source: `sample2/index.html:128`; current classes: ``. Audit desktop height: 669px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. It notices the cart before you do.

Source: `sample2/index.html:165`; current classes: ``. Audit desktop height: 543px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 5. It answers first. A person steps in second.

Source: `sample2/index.html:184`; current classes: ``. Audit desktop height: 668px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. It tells you what happened, in a sentence.

Source: `sample2/index.html:210`; current classes: ``. Audit desktop height: 577px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 7. Works with what you already use.

Source: `sample2/index.html:238`; current classes: ``. Audit desktop height: 754px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. compare

Source: `sample2/index.html:275`; current classes: ``. Audit desktop height: 666px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 9. Everything else.

Source: `sample2/index.html:301`; current classes: ``. Audit desktop height: 876px; padding: 96px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 10. Ready to deploy your AI agent

Source: `sample2/index.html:364`; current classes: `final-cta`. Audit desktop height: 485px; padding: 110px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `start_free_trial → #`; `book_a_demo → #`.

## Content landmarks outside or within sections

- `sample2/index.html:39` — It answers before your team wakes up
- `sample2/index.html:62` — It sells, supports, and captures — from the same knowledge base.
- `sample2/index.html:93` — From your website to a live agent, in one pass.
- `sample2/index.html:132` — Build it once. It works everywhere your customer already is.
- `sample2/index.html:169` — It notices the cart before you do.
- `sample2/index.html:188` — It answers first. A person steps in second.
- `sample2/index.html:214` — It tells you what happened, in a sentence.
- `sample2/index.html:242` — Works with what you already use.
- `sample2/index.html:305` — Everything else.
- `sample2/index.html:366` — Ready to deploy your AI agent

## Mockup and responsive composition

Do not migrate this sample into the production index. Compare only intentionally selected visual treatments.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Existing sample assets.
- Stock decision: No new stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “preserve the alternate homepage reference” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

