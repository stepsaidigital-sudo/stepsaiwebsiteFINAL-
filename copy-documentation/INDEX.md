# StepsAI Subpage Copy Audit — Index

Verbatim copy transcription of all 55 non-homepage pages (`index.html` excluded, per instructions), extracted directly from HTML source on 2026-09-15. Every heading, kicker, body paragraph, CTA button label, and FAQ question/answer is copied word-for-word, punctuation-for-punctuation — nothing rewritten, shortened, or reordered. Each entry in the group files is labeled by element type (`[H1]`, `[CTA]`, `[FAQ Q]`, etc.) in document order, so a copywriter can scan structure at a glance.

This folder is documentation only — no HTML/CSS files were touched to produce it.

## Groups (55 pages, 13 files)

| # | File | Pages | Count |
|---|---|---|---|
| 1 | [01-core-agents.md](01-core-agents.md) | sales-agent, support-agent, lead-agent, meetings-agent | 4 |
| 2 | [02-channel-agents.md](02-channel-agents.md) | channel-whatsapp, channel-website, channel-instagram, channel-messenger | 4 |
| 3 | [03-other-channels.md](03-other-channels.md) | channel-shopify, channel-standalone | 2 |
| 4 | [04-marketing.md](04-marketing.md) | whatsapp-broadcast | 1 |
| 5 | [05-operations.md](05-operations.md) | analytics, one-inbox, integrations, crm | 4 |
| 6 | [06-automation.md](06-automation.md) | workflows, skills | 2 |
| 7 | [07-product-overview.md](07-product-overview.md) | agents, product, capabilities, channels, solutions | 5 |
| 8 | [08-industries.md](08-industries.md) | industries (hub) + ecommerce, edtech, healthcare, hotels, legal, real-estate, saas | 8 |
| 9 | [09-roles.md](09-roles.md) | role-appointments, role-growth, role-marketing, role-sales, role-support | 5 |
| 10 | [10-pricing.md](10-pricing.md) | pricing | 1 |
| 11 | [11-company.md](11-company.md) | about, career, contact, founders-note, team, partner, become-an-affiliate, hire-an-agency | 8 |
| 12 | [12-resources.md](12-resources.md) | blog + 4 blog posts, case-studies, academy, help-center | 8 |
| 13 | [13-legal.md](13-legal.md) | security, privacy-policy, terms-of-service | 3 |

**Total: 55 pages.**

## Things flagged during extraction — worth a look, not fixed here

This was a read-only transcription pass, so nothing below was changed. Surfacing them because they came up while reading every page's source line by line:

1. **`privacy-policy.html` and `terms-of-service.html` are unfinished placeholder drafts, live on the site.** Both pages literally say "Draft template — pending legal review" in their own copy, with unfilled brackets still in place: `[Month Day, Year]`, `[privacy@stepsai.co]`, `[legal@stepsai.co]`, `[jurisdiction]`, `[12] months`. See `13-legal.md`.
2. **Two dead/disabled `<template>` blocks contain fabricated content** that never renders (so they're harmless as-is, but are stale/unused code worth deleting):
   - `analytics.html` (~line 672–774): `<template data-disabled-section="ANALYTICS_CREATIVE_SHOWCASE">` with fabricated stats.
   - `workflows.html`: a disabled bento grid + dark task deck section (including a "Reduce errors streamline work, stay productive" headline).
3. **`analytics.html` contains one ~277,000-character line** — an inline SVG India-map path with no text content. Harmless, but worth knowing if anyone opens that file in an editor that chokes on long lines.
4. **`analytics.html`'s "proof quote" is explicitly marked in the HTML as a placeholder**, not a real testimonial — noted inline in `05-operations.md`.
