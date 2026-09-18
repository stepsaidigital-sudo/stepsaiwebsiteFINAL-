# academy.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Support structured learning. Existing title: “StepsAI Academy — Learn the Platform”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [academy.html](../../../academy.html). Local styles in cascade order: `styles.css`, `nav-mega-product.css`, `pages.css`, `industries-deep.css`, `agents.css`, `blog.css`.
- Scripts to preserve and exercise: `nav.js`, `breadcrumbs.js`, `pages.js`.
- Header measured 92px desktop / 73px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 1 dark-marked sections; 1 legacy logo reference(s) at lines 702. No favicon reference detected; add the shared approved favicon as part of shell work.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Learn the platform, not just the pricing page.

Source: `academy.html:494`; current classes: `section section--base page-hero section--atmo`. Audit desktop height: 386px; padding: 116px 0px 44px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

### 2. How One Inbox Ends Support Triage; Recovering Abandoned Carts on Autopilot; Setting Up an AI Agent for Real Estate; What Your Analytics Dashboard Should Actually Tell You

Source: `academy.html:512`; current classes: `section section--raised section--atmo`. Audit desktop height: 848px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “How One Inbox Ends Support Triage”; “Recovering Abandoned Carts on Autopilot”; “Setting Up an AI Agent for Real Estate”; “What Your Analytics Dashboard Should Actually Tell You”.

Preserve destinations: `Support WA Aarav Shah Yes please, size M works 10:43 PM Resolved IG nyra.fan22 Is the 3BHK still available? 9:16 PM Book → blog-support-triage.html`; `Workflows Trigger Cart left behind Wait 30 minutes Action Send WhatsApp message Guide 6 min read Recovering Abandoned Ca → blog-cart-recovery.html`; `Real Estate K Keystone Realty online Looking for a 2BHK near the tech park Budget range? I can share matching listings r → blog-real-estate-agent.html`; `Analytics 358 /412 Answered solo Guide 5 min read What Your Analytics Dashboard Should Actually Tell You Not a message c → blog-analytics-dashboard.html`; `See all blog posts & guides → blog.html`.

### 3. Every path through the platform.

Source: `academy.html:601`; current classes: `section section--base section--atmo`. Audit desktop height: 2707px; padding: 120px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “Channels”; “Workflows & Automation”; “Built-in CRM & Tickets”; “Analytics & Insights”; “Industry Playbooks”; “Help Center”.

Preserve destinations: `Channels Website, WhatsApp, Instagram, Messenger, and the Standalone Page — one agent, every surface. Explore → channels.html`; `Workflows & Automation Follow-ups that run on their own — templates, or build your own on the canvas. Explore → workflows.html`; `Built-in CRM & Tickets Every contact, conversation and open ticket in one place, or synced to the CRM you already use. E → crm.html`; `Analytics & Insights What it handled alone, what needed you, and which page each question came from. Explore → analytics.html`; `Industry Playbooks Twelve verticals, each with its own questions, its own booking flow, its own busy season. Explore → industries.html`; `Help Center Search or browse quick answers on setup, billing, channels, and your account. Explore → help-center.html`.

### 4. Read less. See it running instead.

Source: `academy.html:660`; current classes: `section section--dark final-cta`. Audit desktop height: 464px; padding: 120px 0px.

Use the shared pale-blue final CTA: navy headline, muted supporting copy and blue primary action. Preserve the existing destination and promise. Target natural 260–340px desktop height, not a fixed height; allow mobile wrapping. Remove hardcoded white text and dark-button exceptions.

Preserve destinations: `Start free trial → pricing.html`.

## Content landmarks outside or within sections

- `academy.html:502` — Learn the platform, not just the pricing page.
- `academy.html:609` — Every path through the platform.
- `academy.html:664` — Read less. See it running instead.

## Mockup and responsive composition

Course/module listing with progression and real destinations; separate available lessons from unavailable material.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Editable lesson thumbnails.
- Stock decision: No stock required.
- Existing non-navigation image references: none in img tags; inspect CSS backgrounds before adding images.
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “support structured learning” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

