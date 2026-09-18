# Evidence-based UI audit

## Coverage and method

Examined the supplied full-page Sales Agent reference and current HTML/CSS/JS. Rendered 56 root HTML routes and the sample2 alternate at 1440×900 and 390×844 in headless Edge. Collected section backgrounds/heights, document overflow, header dimensions, local assets, loaded styles, headings, and source line numbers. Inspected representative Sales Agent section captures at readable size.

The supplied image is 1863×7550 but the conversation preview is downscaled. Source inspection and new browser captures provide readable evidence for the small UI details. All page plans distinguish measured defects from things to verify during implementation. This is not a complete interactive audit of every route.

## Confirmed findings

| Priority | Finding | Evidence | Required correction |
| --- | --- | --- | --- |
| P1 | Old dark sections remain across the site | 52 of 57 static documents contain `section--dark` markup; inventory records each section | Migrate marketing bands and CTAs to explicit light variants, including child text/icon/card tokens |
| P1 | Sales Agent integration band is an abrupt near-black block | sales-agent.html:665; styles.css `.section--dark`; industries-deep.css `.integ-logo-row` | Pale-blue section, white rows, navy copy, recognizable provider logos |
| P1 | Final CTA is visually unrelated to homepage | sales-agent.html:723; shared `.final-cta-*` colors explicitly use dark tokens | One shared light CTA with blue primary button and consistent radius/type/spacing |
| P1 | Header geometry diverges by route | Home measures 77px desktop/65px mobile; Sales Agent, Integrations and Pricing measure 92px/73px | One 76px/64px border-box header system; align plain Pricing link and dropdown labels |
| P1 | Old branding survives in footers and assets | 56 documents still reference `images/logo.png`; Sales Agent footer at line 764 | Replace intended StepsAI brand locations with approved blue mark; inspect alpha and crop |
| P1 | Mobile document overflow | 18 root pages exceed 390px viewport width | Identify the overflowing element per page; fix grid minima, fixed widths, mockups and long text; never hide all body overflow to mask it |
| P2 | Integrations use substitute symbols | Sales Agent Shopify row renders an unrelated silhouette; HubSpot/Salesforce are generic line shapes | Use verified provider SVG assets in consistent 24–28px boxes |
| P2 | Integration badges resemble actions without being controls | `.integ-logo-row-badge` contains Connect as a span | Use honest informational status, or real links to integration details; never imply an implemented connection flow |
| P2 | Hero atmosphere is much louder than homepage | Sales Agent uses full blue atmospheric artwork; current Home uses a restrained white/blue field | Keep split hero and product UI, reduce background saturation and eliminate heavy ambient animation |
| P2 | Legacy font and spacing documentation conflicts | SUBPAGE_DESIGN_SYSTEM.md says Inter/Geist; live pages load Schibsted Grotesk/JetBrains Mono | Follow current family and the new scale; verify loaded font, not just CSS declaration |
| P2 | Outdated reply-time copy remains | support-agent.html:541 says 0.5 seconds | Align the same reply-time claim with user-approved 0.2s; inventory comparable claims before changing unrelated numbers |
| P2 | Earlier bug diagnosis introduced forced scroll resets | index.html head sets manual restoration and repeatedly scrolls to 0 | Reassess/remove unsolicited resets; normal refresh restoration is not itself a bug. Verify anchors and Back/Forward |
| P2 | Menu styles have competing owners | styles.css, nav-mega-product.css, solutions-menu.css, homepage-only selectors | Consolidate shared presentation and derive all panel/scrim offsets from one height token |

No missing directly referenced local stylesheet/script/image file was detected. No pageerror event occurred in the isolated pass. These checks do not include every CSS url(), deferred network request, or interaction.

## Mobile overflow routes

channel-instagram, channel-messenger, channel-standalone, channel-website; industry-ecommerce, industry-edtech, industry-healthcare, industry-hotels, industry-real-estate; lead-agent, meetings-agent, sales-agent, support-agent; role-appointments, role-growth, role-marketing, role-sales, role-support. Exact measured widths are in each page brief.

## Sales Agent section-by-section audit

1. **Navigation / breadcrumb.** The shared frame differs from Home in height and menu styling. Preserve breadcrumb hierarchy but place it below the fixed header without double-counting clearance. Use a small 12–13px breadcrumb on a quiet surface. Plain Pricing text must center vertically like dropdown buttons.
2. **Hero.** Preserve the left sales proposition and right conversation. The blue atmospheric artwork overwhelms the page and the message UI is less concrete than the content below. Show one product suggestion, actual stock status and a next action. Use white mockup chrome, readable text and a pale outer surface.
3. **Capabilities.** Retain the three alternating recommendation/stock/checkout rows. Normalize row spacing and mockup heights. Do not stretch chat screenshots into large empty boxes. Support section copy with the corresponding stage of the same transaction.
4. **Conversation journey.** Keep the five-beat narrative, which is distinctive and useful. At large screens align the journey to the body grid; at mobile keep the vertical rail and give the text the remaining width. Preserve the green final success state. Ensure wrapping of product name/price rather than clipping.
5. **Integrations.** Convert background, cards, labels, secondary copy, icons and badge together. The current near-black section is around 500px high in the audit viewport; aim for 320–400px on desktop with content-driven height. Use genuine Shopify, HubSpot and Salesforce marks. A supported integration is not necessarily connected for the current visitor.
6. **FAQ.** Keep the existing questions and accordion behavior. Increase usable answer width and normalize row spacing; no new decorative art. Focus, expanded state and readable answers matter more than motion.
7. **CTA.** Replace the large black block and small white button with pale blue, navy heading, blue 48–52px button, and restrained supporting text. Keep the conversion destination. Confirm existing trial claims with product truth; do not invent them.
8. **Footer.** Replace the old multicolor logo, standardize spacing/columns, quiet the waves and newsletter container. Test the real form outcome before presenting success messaging. Preserve legal links and routes.

## Evidence images

- [Sales Agent desktop](evidence/sales-agent-desktop.png)
- [Sales Agent mobile](evidence/sales-agent-mobile.png)
- [Integration band](evidence/sales-agent-integrations.png)
- [Current CTA](evidence/sales-agent-cta.png)
- [Conversation journey](evidence/sales-agent-workflow.png)
- [Homepage desktop](evidence/index-desktop.png)
- [Integrations desktop](evidence/integrations-desktop.png)
- [Pricing desktop](evidence/pricing-desktop.png)

## What stays

Page-specific narratives, useful diagrams, real conversation stages, controls, route destinations, legal copy and price values. Retain homepage's approved compact trust layout, new logo geometry and 0.2s metric. Do not replace readable product UI with stock photography or image-generated text.
