# StepsAI UI consistency refresh — implementation handoff

Status: audited and planned across the full site. Sales Agent is now implemented as the first visual-system pilot; the remaining pages stay in the page index for sequential implementation.

## Read in this order

Completed focused follow-up: [“What it does” audit, specification and implementation record](06-WHAT-IT-DOES-AUDIT-AND-PLAN.md). The three Sales Agent feature rows are implemented and verified; Lead and Support remain comparison pages for a later phase.

1. [Audit and evidence](01-AUDIT.md)
2. [Shared visual and component specification](02-SHARED-SYSTEM.md)
3. [Mockup and image production](03-ASSET-AND-MOCKUP-PLAN.md)
4. [Implementation sequence and acceptance gates](04-IMPLEMENTATION.md)
5. [Page index](05-PAGE-INDEX.md), then the individual page brief being implemented.

## Scope and authority

The active website is the 56 HTML pages in the repository root. Every one has an individual brief. `sample2/index.html` is an alternate design and has a separate preservation brief. `next-app/app/page.tsx` currently returns null; a separate implementation-boundary brief documents it. Do not silently move this static website into Next.js.

The user's newest direction controls: unify pages with the current light homepage; correct dark integration bands, old CTA styling, inconsistent navigation, outdated branding, and responsive defects. Preserve page-specific content and useful demonstrations. The compact homepage trust section and its 0.2s value remain the approved exception to the regular marketing-section scale.

These documents supersede conflicting visual prescriptions in PROJECT.md and SUBPAGE_DESIGN_SYSTEM.md for this refresh only. Those older documents remain useful for product context. They are not reliable page inventories: PROJECT.md lists 13 pages, while 56 root routes now exist. Its intentional-dark-CTA guidance is specifically retired by this brief. The old font references and 120–160px section spacing in SUBPAGE_DESIGN_SYSTEM.md should not be copied into the new work.

## Intended result

A visitor should recognize the same brand when moving from Home to Sales Agent, Integrations, Pricing, or Contact: the same blue logo, header proportions, type scale, light surfaces, buttons, integration cards, CTA treatment, and footer. Page narratives can differ. Authentic WhatsApp/Instagram UI colors and readable code/editor surfaces inside product demonstrations are allowed; full dark marketing sections are not the target.

## Deliverables already present

- Source and browser inventory: [page-inventory.json](evidence/page-inventory.json).
- Desktop 1440×900 and mobile 390×844 measurements for all 57 static documents.
- Selected viewport and section screenshots in `evidence/`, including the actual Sales Agent integrations and CTA.
- One detailed implementation brief per static document, plus the Next.js boundary brief.
- Shared specifications and a per-page asset manifest with mockup scenarios, reusable image candidates, and stock-photo decisions.

The browser audit blocked external font/CDN requests for consistent local inspection. Exact typography must be rechecked with production fonts available. Screenshot references support composition and surface findings; they are not a claim of pixel-identical output. No backend functionality, external links, or image licenses were certified by this audit.
