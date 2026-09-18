# Implementation sequence and review gates

## Batch 1 — shared shell, then Sales Agent pilot

1. Re-read current files and git status; line numbers in these briefs are audit-time anchors and may move. Preserve unrelated user edits.
2. Capture baseline Home, Sales Agent, Integrations, Pricing and one legal page with fonts loaded. Keep the approved compact trust component unchanged.
3. Consolidate header tokens/state styles into one shared owner. Current styles.css and nav-mega-product.css are shared; homepage refinements live in home-professional.css. Choose one common ownership boundary and remove superseded rules only after checking every consumer. Do not copy the full homepage stylesheet onto subpages.
4. Move dark integration and CTA components to explicit light variants. Implement children and text tokens in the same change. Do not blanket-replace dark CSS across the site.
5. Unify logo and footer, and fix Pricing alignment in the shared navigation contract. Derive fixed offsets from the header height token.
6. Apply the Sales Agent brief completely, including mobile overflow, provider icons and the five-step mockup. This route is the pilot for the rest.
7. Verify Home still renders its compact trust strip and 0.2s metric correctly, and that shared modifications do not alter product demos or anchor behavior.

## Batch 2 — page families

- Product/features: agents, product, sales/lead/meetings/support agents, CRM, one inbox, analytics, workflows, skills, broadcast, integrations.
- Channels: channel hub and each dedicated channel. Preserve real platform colors only inside UI and brand marks.
- Role and industry pages: repair mobile width causes first, then migrate shared sections and refine the page-specific scenarios.
- Pricing and acquisition: preserve all existing prices/calculation logic; normalize styling and keyboard/toggle/form states.
- Company/resources/editorial/legal: use the shared shell; keep appropriate article/forms/legal hierarchy. Do not impose sales-page mockups on policy text.
- Alternate sample2 is reference-only. Next.js app is not part of the active HTML migration.

## Execution boundaries for multiple coding agents

One owner edits shared CSS/nav/footer contracts. Other implementers edit assigned page HTML, its signature stylesheet and unique assets only. Each reads the master spec plus its page brief. Shared fixes must land before route screenshots are approved. Do not let separate agents create competing header/CTA/footer implementations or rename shared tokens independently.

## Definition of done, per page

1. Capture desktop 1440×900 and mobile 390×844, plus 320px, 768px, 1024px and 1366×768 checks. Measure document width; identify the actual offender if it exceeds the viewport.
2. Check top, mid-scroll, menu open, footer and explicit hash deep link. Navigation has stable 76/64px border-box geometry. Pricing centers like the other items.
3. Confirm light integration/CTA surfaces, readable default/hover/focus text, correct provider logos and approved blue StepsAI mark.
4. Click each relevant tab/filter/accordion/toggle. Use keyboard-only navigation, Escape and focus return. Test reduced motion and 200% zoom. Forms report real success/error outcomes.
5. Verify no local asset failure, uncaught JavaScript error, broken internal destination or new font dependency. Production-font and remote-CDN validation is required because the audit intentionally blocked those requests.
6. Compare factual copy, prices and routes against baseline; flag unverified claims instead of manufacturing new proof. Support Agent's repeated reply-time claim needs the approved 0.2s consistency update.
7. Record changed files, assets, screenshots and remaining limitations in the page brief's completion block. Do not label a page complete from source edits alone.

## Rollout / review

Each family is a small reviewable change. Review Sales Agent + Home first, then one family at a time. Keep before/after screenshots at matching dimensions and final-frame states. Publishing/deployment is separate from local implementation. The audit scripts and planning docs do not modify website source.
