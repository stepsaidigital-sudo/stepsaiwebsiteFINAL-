# index.html — UI implementation brief

Status: planned, not implemented. Apply after the shared shell and Sales Agent pilot.

## Objective and constraints

Visitor understands the platform and chooses a next step. Existing title: “StepsAI — Turn more visitors and messages into sales, leads and bookings”. Preserve useful content, routes and actual product claims. Read [shared system](../02-SHARED-SYSTEM.md), [asset plan](../03-ASSET-AND-MOCKUP-PLAN.md) and [implementation gates](../04-IMPLEMENTATION.md) first.

## Evidence and edit boundary

- Source: [index.html](../../../index.html). Local styles in cascade order: `styles.css?v=2.1`, `home-v2.css?v=1.3`, `home-professional.css?v=3`, `home-finish.css?v=2`, `hero-premium.css?v=5`, `workflows-premium.css?v=3`, `benefits.css?v=1`, `solutions-menu.css?v=1`, `partnership-menu.css?v=1`, `resources-menu.css?v=1`.
- Scripts to preserve and exercise: `nav.js?v=2.0`, `home.js?v=2.0`, `home-v2.js?v=1.6`, `analytics-charts.js?v=2.0`, `home-professional.js?v=2`, `hero-premium.js?v=3`, `benefits.js?v=1`, `https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js`, `home-analytics-chart.js?v=1`.
- Header measured 77px desktop / 65px mobile. Shared target is 76/64px border-box; coordinate through the shared owner.
- Mobile document width: 390px at a 390px viewport. No horizontal overflow measured in this isolated state; verify other widths and open interactive states.
- 0 dark-marked sections; 0 legacy logo reference(s). A favicon reference exists; confirm current identity.
- No direct local-resource failures were inventoried. External requests were blocked during this audit; production fonts and integrations still need live verification.

## Section-by-section implementation

### 1. Turn more visitors and messages into sales, leads, and bookings.

Source: `index.html:1976`; current classes: `hero hero--centered-v3`. Audit desktop height: 1243px; padding: 104px 24px 24px.

Use the page-specific mockup below beside the existing headline. Keep the atmospheric blue near the visual, with a quiet readable copy area. Desktop copy/visual split is approximately 45/55; mobile is copy, actions, then visual. Use natural height, with no forced full-screen minimum.

Retain these content units: “Adventure without limits”.

Preserve destinations: `Get started for free → → pricing.html`; `Book a Demo → contact.html`; `Shop now → → #pricing`.

### 2. Built to deliver measurable results.

Source: `index.html:2423`; current classes: `proven-impact-section`. Audit desktop height: 612px; padding: 28px 0px 32px.

Preserve the approved compact trust-strip proportions, partner identities and 0.2s value. Do not apply hero typography or regular 72–88px section padding here. Keep metrics easy to scan and wrap to two columns on narrow screens.

### 3. Your whole front desk, run by one AI agent.

Source: `index.html:2648`; current classes: `how`. Audit desktop height: 1245px; padding: 80px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 4. Built for every business.

Source: `index.html:2793`; current classes: `industries`. Audit desktop height: 929px; padding: 84px 0px 88px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “E-Commerce”; “E-Commerce & Retail”; “Real Estate”; “Real Estate & Rentals”; “Healthcare & Clinics”; “Healthcare & Clinics”; “Education & Training”; “Education & Training”.

Preserve destinations: `Learn more → → industry-ecommerce.html`; `Explore E-Commerce → → industry-ecommerce.html`; `Learn more → → industry-real-estate.html`; `Explore Real Estate → → industry-real-estate.html`; `Learn more → → industry-healthcare.html`; `Explore Healthcare → → industry-healthcare.html`; `Learn more → → industry-edtech.html`; `Explore Education → → industry-edtech.html`; `Explore more industries → → industries.html`.

### 5. Set up once, show up on every channel.

Source: `index.html:3071`; current classes: `channels`. Audit desktop height: 1228px; padding: 80px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 6. Connected to the tools your business already runs on.

Source: `index.html:3104`; current classes: `knowledge-sec`. Audit desktop height: 559px; padding: 80px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable. For provider rows use white cards on a pale-blue band, verified provider marks and readable connection labels. A static status badge must not look like an interactive Connect button.

### 7. One conversation. All your systems working together.

Source: `index.html:3171`; current classes: `integrations`. Audit desktop height: 1284px; padding: 80px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 8. Turn broadcasts and comments into private conversations that sell.

Source: `index.html:3238`; current classes: `wa revenue-section`. Audit desktop height: 1005px; padding: 48px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Retain these content units: “An invitation. A conversation. A new favourite.”.

Preserve destinations: `Explore WhatsApp automation ↗ → whatsapp-broadcast.html`; `See it with your business ↗ → contact.html`.

### 9. Four channels, one inbox. You step in only when you are needed.

Source: `index.html:3287`; current classes: `inbox-sec`. Audit desktop height: 817px; padding: 32px 0px 36px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See how One Inbox works → → #inbox-teaser`.

### 10. Steps AI answers the customer, then does the work that follows.

Source: `index.html:3368`; current classes: `automation`. Audit desktop height: 955px; padding: 48px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 11. The CRM you never have to update.

Source: `index.html:3568`; current classes: `inbox-sec crm-sec`. Audit desktop height: 934px; padding: 64px 0px 48px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable. For provider rows use white cards on a pale-blue band, verified provider marks and readable connection labels. A static status badge must not look like an interactive Connect button.

Preserve destinations: `See all platform capabilities → → #integrations`.

### 12. Analytics that tell you what to fix.

Source: `index.html:3655`; current classes: `command`. Audit desktop height: 940px; padding: 80px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `See the full analytics dashboard → → #analytics-teaser`.

### 13. Live in about five minutes.

Source: `index.html:3781`; current classes: `setup`. Audit desktop height: 0px; padding: 88px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 14. Trusted to handle real customer conversations.

Source: `index.html:3893`; current classes: `proof`. Audit desktop height: 975px; padding: 80px 0px.

Preserve the approved compact trust-strip proportions, partner identities and 0.2s value. Do not apply hero typography or regular 72–88px section padding here. Keep metrics easy to scan and wrap to two columns on narrow screens.

### 15. What brand owners like you say about us

Source: `index.html:3991`; current classes: `section sp4-section`. Audit desktop height: 5345px; padding: 100px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

### 16. Turn the messages you are getting into the sales you are missing.

Source: `index.html:4128`; current classes: `final final-reference-cta`. Audit desktop height: 1276px; padding: 80px 0px.

Keep the content sequence and distinctive demonstration. Use the shared reading width, type scale and spacing; remove competing decorative layers. Stack copy before its visual on mobile and keep meaningful UI text readable.

Preserve destinations: `Get Started For Free → pricing.html`.

### 17. Got questions? We have you covered.

Source: `index.html:4214`; current classes: `faq-sec`.

Use a white FAQ section with thin separators, generous click targets and clear expanded state. Preserve the exact questions and answers. Verify keyboard operation, aria-expanded and hidden content behavior; do not replace answers with marketing filler.

## Content landmarks outside or within sections

- `index.html:1997` — Turn more visitors and messages into sales, leads, and bookings.
- `index.html:2453` — Built to deliver measurable results.
- `index.html:2653` — Your whole front desk, run by one AI agent.
- `index.html:2801` — Built for every business.
- `index.html:3076` — Set up once, show up on every channel.
- `index.html:3110` — Connected to the tools your business already runs on.
- `index.html:3177` — One conversation. All your systems working together.
- `index.html:3242` — Turn broadcasts and comments into private conversations that sell.
- `index.html:3292` — Four channels, one inbox. You step in only when you are needed.
- `index.html:3374` — Steps AI answers the customer, then does the work that follows.
- `index.html:3573` — The CRM you never have to update.
- `index.html:3660` — Analytics that tell you what to fix.
- `index.html:3787` — Live in about five minutes.
- `index.html:3898` — Trusted to handle real customer conversations.
- `index.html:3928` — What businesses notice after StepsAI goes live.
- `index.html:4020` — What brand owners like you say about us
- `index.html:4192` — Turn the messages you are getting into the sales you are missing.
- `index.html:4218` — Got questions? We have you covered.

## Mockup and responsive composition

Preserve the channel-switching conversation demo and compact partner/results strip; refine atmosphere behind the hero without adding height.

Create a readable desktop composition at 1440px and a separate 390px mobile composition, plus an enlarged reference for the principal UI demonstration. The visual must explain this page’s task; avoid generic dashboard substitutions. UI is editable HTML/CSS with selectable text. Use fictional sample records and label illustrative metrics. Capture empty, selected, expanded or failure states when the existing page exposes them; do not create nonfunctional controls solely for decoration.

Use 1280px maximum content width and 32/24/20px responsive gutters. Regular sections use 72–88px desktop and 48–56px mobile vertical spacing; follow the explicit homepage trust exception. Keep product cards within their container, set shrinking grid children to min-width:0, and use contained scrolling only for genuinely wide tables.

## Asset instructions

- Proposed candidates: Existing hero background and approved partner SVGs.
- Stock decision: No new stock required.
- Existing non-navigation image references: `images/hero/trail-jacket.png`, `images/partners/meta.svg`, `images/partners/shopify.svg`, `images/ecommerce-luxury.jpg`, `images/real-estate-luxury.jpg`, `images/healthcare-luxury.jpg`, `images/hero-edtech.jpg`, `images/product-diamond-necklace.jpg`, `https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85`, `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80`, `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=85`, `https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=85`, `https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=120&q=80`, `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80`, `https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=120&q=80`, `https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&q=80`, `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80`, `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80`, `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80`, `https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80`, `https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80`
- Verify candidate dimensions, crop and usage rights before reuse; availability is not license clearance. New imagery follows the naming, responsive exports and provenance rules in the shared asset plan. Brand logos come from approved assets or official brand sources, never generative approximations.

## Page-specific completion checks

1. The mockup communicates “visitor understands the platform and chooses a next step” and the original content landmarks remain accessible.
2. Validate each preserved section destination above, navigation, footer links and page-specific scripts. Do not change prices, legal terms or invent customer evidence.
3. Match light surfaces and button states with Home; inspect integration children and final CTA at default, hover and focus. Replace legacy footer identity while preserving its information and links.
4. Test 320, 390, 768, 1024 and 1440px widths, 200% zoom, reduced motion and keyboard use. No unintended document overflow; header and content never overlap.
5. Capture matching before/after top, key demonstration, integrations (where present), CTA and mobile views with actual fonts loaded. Record any unverified external dependency.

## Completion record

Implementation status: not started in this audit. Required evidence on completion: changed files, approved assets and their provenance, screenshot paths, interaction checks, measured mobile width, and any remaining limitation. Do not mark complete from source changes alone.

