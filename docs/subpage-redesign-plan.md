# StepsAI: 55-subpage redesign plan

Status: planning only. Reference: ChatGPT Image Sep 18, 2026, 08_46_26 AM.png supplied by the user. Scope: 55 root-level HTML pages excluding index.html; nested sample and application copies are not separate public pages in this inventory.

## Design direction

Use the supplied Website Widget reference as the visual benchmark. Build a close visual match on channel-website.html first: bright white and pale blue surfaces, dark navy typography, saturated blue actions, restrained secondary colors, realistic application previews, subtle depth, and clear alternating feature compositions. Carry its level of finish across the other pages while designing imagery, content, and interactions around each page's purpose.

The reference is a visual guide, not evidence for product promises. Trial duration, partnerships, customer logos, performance figures, integrations, and security statements must come from verified existing business content. Do not copy illustrative claims as facts.

## Pilot: Website Widget

1. Header: compact shared navigation, consistent logo sizing, restrained menu motion, clear primary action.
2. Hero: left-aligned benefit headline and concise supporting copy; right-side website scene with an overlapping working chat widget. Match the reference's proportions, whitespace, blue background treatment, and depth at its native aspect ratio.
3. Trust strip: concise, evenly spaced supported platform marks; separate integrations from actual endorsements or partnerships.
4. Conversation feature: credible conversation list with status changes and a readable explanation beside it.
5. Knowledge feature: website, document, and FAQ sources displayed with distinct states; a source preview can show how an answer is grounded.
6. Interactive example: question, answer, booking or lead action, then confirmation. Include replay and a completed state for reduced motion.
7. Integrations: relevant platforms with useful descriptions and genuine destinations.
8. FAQ: short accessible accordion with installation, customization, performance, and mobile questions.
9. Final CTA and footer: reference-inspired pale blue closing panel and a clean shared footer.

Deliver desktop and mobile screenshots before extending the design to the next family. Refine the pilot until the composition, artwork, typography, and interaction quality establish a dependable standard.

## Complete page inventory and tailored direction

### Channels: 7 pages

| Page | Primary visual and interaction |
|---|---|
| channel-website.html | Reference pilot; website plus chat widget and booking action |
| channel-whatsapp.html | Recognizable messaging conversation with catalog and order flow |
| channel-instagram.html | Post/comment to private-message sequence |
| channel-messenger.html | Page conversation with customer context and resolution |
| channel-shopify.html | Storefront, product variant selection, cart and order state |
| channel-standalone.html | Branded agent page with customizable appearance preview |
| channels.html | Compact channel selector showing one coordinated experience |

### Product and capabilities: 14 pages

| Page | Primary visual and interaction |
|---|---|
| product.html | Platform overview with a connected customer journey |
| agents.html | Agent workspace, knowledge, conversation and completed action |
| sales-agent.html | Product recommendation through cart confirmation |
| support-agent.html | Order lookup, answer and contextual human handoff |
| lead-agent.html | Qualification conversation becoming a CRM record |
| meetings-agent.html | Availability selection and confirmed appointment |
| whatsapp-broadcast.html | Campaign preparation, message preview and individual reply |
| workflows.html | Readable workflow with controlled run simulation |
| one-inbox.html | Channel filters, conversation selection and handoff state |
| crm.html | Contact record, conversation history and update activity |
| analytics.html | Meaningful chart views with clearly labeled example data |
| integrations.html | Searchable integration directory and connection explanations |
| capabilities.html | Capability groups with contextual examples |
| skills.html | Focused skill demonstrations and what each action needs |

### Industries: 8 pages

| Page | Primary visual and interaction |
|---|---|
| industries.html | Visually distinct industry directory with useful filters |
| industry-ecommerce.html | Product questions, variants and order support |
| industry-healthcare.html | Clinic booking and administrative intake; preserve clinical boundaries |
| industry-real-estate.html | Property selection, enquiry qualification and viewing schedule |
| industry-edtech.html | Course comparison, eligibility information and counselling booking |
| industry-hotels.html | Stay enquiries, amenities and guest assistance |
| industry-saas.html | Product question, knowledge answer and demo request |
| industry-legal.html | Practice-area enquiry and intake; preserve legal judgment boundaries |

### Roles and solutions: 6 pages

| Page | Primary visual and interaction |
|---|---|
| solutions.html | Outcome-led navigation to the right role and capability |
| role-growth.html | Acquisition conversation through qualified next step |
| role-marketing.html | Campaign response and follow-up journey |
| role-sales.html | Qualified prospect, context and meeting handoff |
| role-support.html | Queue resolution and escalation with full context |
| role-appointments.html | Booking, reminder and rescheduling journey |

### Partners: 3 pages

| Page | Primary visual and interaction |
|---|---|
| partner.html | Brand customization and partner offering preview |
| become-an-affiliate.html | Referral journey with clear program terms |
| hire-an-agency.html | Service selection and credible provider information |

### Resources: 8 pages

| Page | Primary visual and interaction |
|---|---|
| help-center.html | Search-first support navigation and scannable categories |
| academy.html | Learning paths and lesson hierarchy |
| case-studies.html | Evidence-led stories; label examples when results are not verified |
| blog.html | Editorial index with strong images and topic navigation |
| blog-analytics-dashboard.html | Readable article with useful chart illustrations |
| blog-cart-recovery.html | Article with a cart-recovery sequence |
| blog-real-estate-agent.html | Article with property enquiry and viewing examples |
| blog-support-triage.html | Article with queue and handoff illustrations |

### Company and conversion: 6 pages

| Page | Primary visual and interaction |
|---|---|
| about.html | Company story, product purpose and authentic imagery |
| team.html | Real people and roles; no invented portraits or credentials |
| career.html | Working culture and truthful vacancy states |
| founders-note.html | Personal editorial treatment with readable typography |
| contact.html | Clear contact choices, form states and submission feedback |
| pricing.html | Understandable plan comparison and supported billing controls |

### Trust and legal: 3 pages

| Page | Primary visual and interaction |
|---|---|
| security.html | Clear security explanations and verified assurances |
| privacy-policy.html | Readable document, contents navigation and preserved policy text |
| terms-of-service.html | Readable document, contents navigation and preserved terms |

Total: 55 pages.

## Visual and asset system

- Establish shared typography, content widths, spacing, buttons, links, focus states, shadows, radii and semantic colors from the pilot.
- Keep blue as the brand/action anchor. Use restrained teal, violet, green and warm accents where they clarify a channel, category or state.
- Give every commercial page a subject-specific hero and at least one meaningful product example. Reuse interface primitives, not identical compositions.
- Build readable interface text and controls in HTML/CSS. Use images for photographic scenes and appropriate illustration, not for baked-in interface text.
- Audit existing assets before commissioning replacements. Use authentic company material where available and clearly illustrative assets elsewhere.
- Reserve image dimensions, provide responsive image sizes and lazy-load below-the-fold media. Avoid large decorative image downloads on phones.

## Motion and behavior

- One central demonstration per commercial page, with short user-triggered transitions and a purposeful action sequence.
- Typical control transitions: 150–220ms; scene transitions: 220–350ms; demos: approximately 3–6 seconds where needed for comprehension.
- Start entrance playback once when visible. Provide replay; stop pending work on tab changes and when the demonstration leaves view.
- Respect reduced motion and keep final information available immediately.
- No scroll locking, long pinned sequences, forced auto carousels or motion that hides essential content.
- Demo controls remain local simulations unless a genuine product connection is intentionally implemented. Identify examples unobtrusively.

## Mobile specification

- Preserve normal readable page text and touch targets; scale only illustrative desktop interfaces.
- Keep key desktop relationships inside compact previews. Move the essential explanation, tab controls and CTA outside any scaled detail.
- Prefer one selected example with compact tabs over many repeated full-height mockups.
- Use content-driven spacing, typically 40–56px between major mobile sections; avoid oversized empty regions.
- Allow deliberate local horizontal browsing only where useful, with a clear affordance; never cause page-wide horizontal scrolling.
- Evaluate total page height against its previous version. Remove repetition rather than hiding essential information or shrinking all text.
- Target 44px touch controls. Verify 360, 390, 430, 768, 1024, 1280 and 1440px, plus zoom and long content.

## Implementation sequence

1. Baseline: capture current page screenshots and heights, route inventory, shared dependencies, content and asset gaps. Establish which source is actually served before modifying nested application copies.
2. Pilot: implement channel-website.html closely against the supplied reference and review desktop/mobile renders.
3. Foundation: extract proven pilot primitives, shared header/footer behavior and animation helpers; remove superseded style layers as each page migrates.
4. Channels: finish the other six channel pages with their own native-looking demonstrations.
5. Product: migrate 14 product/capability pages; group related UI work such as CRM, inbox and analytics.
6. Industry and role: migrate 14 pages with business-specific content and distinct scenarios.
7. Partners: migrate three pages around their actual program and conversion goals.
8. Resources: migrate eight pages using directory and editorial layouts appropriate to reading and discovery.
9. Company/conversion/trust: migrate nine pages, preserving forms, pricing behavior and legal content.
10. Whole-site review: link graph, navigation parity, responsive regression, accessibility, asset loading, console errors and visual consistency.

For later delegated implementation, assign non-overlapping page families to workers. Keep shared styles and navigation owned by one coordinator. A separate review pass checks outputs against the pilot so parallel implementation does not introduce competing systems.

## Per-page completion gate

- Distinct page purpose, hero, visual story and relevant action.
- Reference-level composition verified with rendered screenshots; pilot compared at matching viewport dimensions.
- Correct content preserved, including SEO metadata, headings, links, policies and real form behavior.
- No invented customer evidence, partnerships, metrics or product commitments.
- Keyboard access, visible focus, correct control names, useful image alternatives and adequate contrast.
- No page-wide horizontal overflow, unreadable essential text, clipped controls or oversized mobile blank space.
- Replay and rapid switching work; reduced-motion path remains complete.
- Correct images, no broken local routes and no new runtime errors.
- Before/after screenshots and a concise QA note recorded for the page.

## Deliverables

An approved-quality Website Widget pilot; a shared visual foundation; 55 individually reviewed subpages; purposeful page-specific imagery and demonstrations; desktop/mobile screenshot evidence; a route and QA checklist documenting remaining content dependencies.

Exact pixel matching applies to the Website Widget pilot at the reference viewport. Other page families inherit the visual standard while adapting their composition to their content and purpose. Different viewport sizes require deliberate responsive adaptations rather than literal screenshot scaling.
