# StepsAI: complete 56-route UI redesign plan

Status: complete and ready for execution. The Website Widget pilot is an implementation reference that must still pass the visual approval gate. Reference: ChatGPT Image Sep 18, 2026, 08_46_26 AM.png supplied by the user. Scope: the home page plus 55 root-level subpages; nested sample and application copies are not separate public pages in this inventory.

## Design direction

Use the supplied Website Widget reference as the visual benchmark. Build a close visual match on channel-website.html first: bright white and pale blue surfaces, dark navy typography, saturated blue actions, restrained secondary colors, realistic application previews, subtle depth, and clear alternating feature compositions. Carry its level of finish across the other pages while designing imagery, content, and interactions around each page's purpose.

The reference is a visual guide, not evidence for product promises. Trial duration, partnerships, customer logos, performance figures, integrations, and security statements must come from verified existing business content. Do not copy illustrative claims as facts.

## Final confirmed design brief

### Job and audience

StepsAI must persuade business owners and customer-facing teams that one AI agent can answer, qualify, recommend, book, update records, and support customers across their existing channels. Visitors arrive evaluating whether the product feels credible, understandable, modern, and ready for real business use.

### Outcome and proof

Every commercial page must make one capability understandable within the first viewport and then prove it through a realistic product demonstration. The visitor should always know what the agent does, see the action happen, and find a clear next step. Product UI, channel conversations, workflow states, CRM records, knowledge sources, analytics, and booking confirmations are the core proof. Illustrative data must be labelled when it could be mistaken for customer evidence.

### Selected direction

The visual world is a bright, precise product studio: paper-white space, pale blue atmospheric fields, dark navy type, saturated StepsAI blue actions, and controlled mint, violet, coral, and amber states. Large product scenes carry the page. Fine borders, soft shadows, compact browser frames, crisp interface typography, and authored annotations create depth. The memorable moment is the agent visibly turning a customer question into a completed business action inside the same scene.

### Scope and boundaries

Redesign all 56 public routes while preserving URLs, the StepsAI logo, factual content, working forms, navigation destinations, and legal text. Preserve the home hero and trust section as quality references unless a responsive defect requires correction. Replace outdated middle sections, oversized mobile compositions, generic illustrations, inconsistent menus, and legacy footer treatments. Do not invent metrics, customer endorsements, certifications, prices, or partnerships.

### Interaction and layout

Use benefit-led opening compositions, one dominant product demonstration, alternating explanation and evidence, useful integrations or proof, a concise FAQ where relevant, and a compact closing action. Desktop uses composed two-column scenes and controlled overlaps. Mobile keeps the same visual idea through smaller bounded product previews, reordered content, fewer repeated examples, readable type, and substantially less empty vertical space. Motion explains state changes and never controls the reading pace.

### Binding constraints

The site remains a static multi-page web project. Shared navigation, menus, tokens, controls, preview frames, focus states, motion helpers, and footer patterns must have one owner. All pages support keyboard navigation, reduced motion, visible focus, sufficient contrast, useful alternative text, and 44px touch targets. The builder must not choose a competing visual style, introduce unverified claims, or solve mobile layouts by uniformly shrinking desktop pages.

## Visual system specification

### Color roles

| Role | Direction | Use |
|---|---|---|
| Paper | Pure and cool white | Primary page surface and product canvases |
| Atmosphere | Very pale blue | Hero fields, feature bands, closing panels and quiet transitions |
| Ink | Deep navy | Headlines, product labels and high-priority information |
| Body | Cool slate | Paragraphs, supporting labels and secondary navigation |
| Action | Saturated StepsAI blue | Primary buttons, selected states, links and active progress |
| Success | Clear mint/green | Connected, complete and resolved states |
| Assist | Violet | Knowledge, automation and secondary AI states |
| Attention | Coral or amber | Warnings, campaign activity and selected illustration accents |

Blue remains the only universal action color. Secondary colors communicate meaning inside demonstrations; they do not become competing page themes. Large gradients are limited to pale atmospheric fields and must not reduce text contrast.

### Typography

- Keep Schibsted Grotesk as the core interface and marketing family unless a route already requires a proven editorial reading face.
- Desktop display headings should normally occupy two to four lines; mobile headings two to five short lines with deliberate breaks.
- Primary body copy remains comfortably readable, with a target line length of roughly 48–68 characters.
- Interface previews use a compact internal scale, but essential labels cannot fall below readable mobile size.
- Use sentence case. Reserve uppercase and tracked text for rare metadata labels, never as a repeated section-heading formula.
- Weight creates hierarchy before size. Avoid oversized headings that force the demonstration below the first viewport.

### Space and alignment

- Use one shared maximum content width and visible left/right alignment lines across header, hero, features, CTA and footer.
- Establish a consistent section rhythm: compact transition, standard feature, and focal showcase. Do not apply the same large padding to every section.
- Copy and product previews align by their meaningful visual centers, not by equal card height.
- Cards in a row share heading, body and action baselines. Icons align optically with text rather than only mathematically.
- Mobile gutters stay consistent throughout a route. Full-bleed atmospheric backgrounds may extend beyond them; readable content may not.

### Shape and depth

- Controls use compact radii; ordinary cards use medium radii; focal browser or dashboard scenes may use a larger radius. Pills are reserved for statuses, filters and small labels.
- Borders provide the default separation. Shadows communicate actual elevation: menu above page, chat above browser, modal above app.
- Use one soft low-elevation shadow and one stronger focal shadow. Avoid multiple blurred shadows on the same object.
- Product mockups keep crisp edges and believable proportions. Decorative blobs cannot replace product imagery.

### Imagery and product scenes

- Every commercial route gets one page-specific hero scene and at least one detailed product interaction.
- Use real interface text in HTML/CSS wherever it must remain readable. Raster imagery supplies photography, atmosphere, characters, or illustration—not baked-in UI copy.
- Channel pages visually resemble the channel without copying protected interface chrome pixel for pixel.
- Dashboard examples show plausible density, selected states, timestamps, status changes and completed actions.
- Decorative images must support the page's mechanism. Remove generic robots, floating cubes, or random charts that do not explain the capability.

### Component behavior

- Primary buttons have stable dimensions and a restrained hover response: color/depth change and no more than a slight lift.
- Cards may reveal a border, shadow or small translation on hover; they must not noticeably enlarge or collide with neighbors.
- Mega menus open as compact, anchored panels with a short opacity/position transition. Their scale is based on content, not viewport height.
- Accordions, tabs, carousels and demonstrations expose selected state clearly and remain usable by keyboard.
- Product scenes animate between meaningful states such as question, answer, action and confirmation. Do not scatter unrelated entrance animations across every object.

## UI priority and scoring

The acceptance decision is weighted toward visible design quality:

| Area | Weight | Blocking examples |
|---|---:|---|
| Composition and hierarchy | 20% | Weak focal point, oversized hero, repetitive layouts, unclear action |
| Product imagery and credibility | 15% | Generic art, unreadable mockups, empty dashboards, inconsistent visual scale |
| Typography | 10% | Poor wraps, tiny essential text, weak contrast, inconsistent hierarchy |
| Spacing and alignment | 10% | Drifting container edges, excessive blank space, misaligned cards or icons |
| Color, shape and depth | 10% | Competing accents, excessive radii, muddy shadows, flat focal scenes |
| Responsive composition and scrolling | 20% | Horizontal overflow, excessive mobile height, clipped overlays, desktop merely shrunk |
| Interaction, accessibility and motion | 15% | Inert controls, missing focus, broken expanded states, motion without reduced-motion path |

A route needs at least 90/100 overall and cannot contain a critical or high-severity finding. Composition, product imagery, and responsive composition must each pass independently; a technically correct page cannot compensate for weak UI.

## UI-first priority — user clarification

Visual UI quality is the primary design objective. Responsive engineering supports that objective. A page does not pass because it has no overflow: it must look deliberately composed, polished, colorful and credible on both desktop and mobile. The supplied reference remains the visual authority; the current pilot is a candidate implementation, not an automatically approved standard.

Review and improve in this order:

1. **Composition and hierarchy:** one clear focal point per section; balanced copy-to-visual proportions; intentional heading wraps; primary action easy to find; varied section layouts that still belong to one brand.
2. **Product imagery:** crisp, believable conversations, workflows and dashboards with page-specific content. Replace generic decoration and oversized empty mockups. Match perspective, image crop, frame proportions and overlapping elements to the reference where applicable.
3. **Typography:** coherent heading weights and line heights, comfortable body copy, consistent labels, and readable contrast. Avoid oversized headlines, stranded words and tiny essential text.
4. **Spacing and alignment:** align section edges, cards, icons and text baselines. Reduce blank mobile space and repetitive blocks while retaining a clear visual rhythm.
5. **Color and depth:** use pale blue and white as the foundation, navy for hierarchy, saturated blue for actions, and purposeful secondary accents. Control border contrast, shadow softness and surface separation.
6. **Component finish:** consistent button proportions, restrained corner radii, polished inputs, compact dropdowns, coherent icons, and complete hover, focus, selected, expanded and disabled states.
7. **Motion:** add life through short, meaningful changes after the static design works. Animation must never compensate for weak composition or increase scrolling.

### Visual acceptance process

- Compare the reference and pilot at the same viewport, section by section: silhouette, focal-object size, text wrapping, spacing, color, borders and depth. Record remaining deviations rather than claiming pixel accuracy without evidence.
- Review each family first as a desktop/mobile visual pair before extracting reusable components. Mobile receives its own composition, with compact desktop-style previews where the user requested them.
- Inspect full-page rhythm and individual sections at normal viewing size. A strong hero cannot compensate for weak middle sections or an oversized footer.
- Require a visual pass for every category above. Any conspicuously oversized object, mismatched illustration, weak hierarchy, inconsistent alignment, or unreadable preview is a blocking design finding even when technical checks pass.
- Complete each family's visual refinement before expanding the same pattern across more pages. Preserve the home hero and trust section as existing reference points while improving the rest.

### First visual priorities

Start with the home page's “Your whole front desk, run by one AI agent” section, four-channel preview, workflows and CRM compositions. Then refine the Website Widget reference match and compact Product, Solutions, Partnership and Resources menus. These establish the visual language for the remaining families. Screenshot measurement and structural cleanup run alongside this work; they do not replace visual review.

## Structural findings supporting the UI work

The site has 56 public root pages, more than 40 root CSS files, and roughly 7,500 declarations related to responsive rules, type sizes, radius, shadow, transform, transition, and overflow. Several large style layers overlap: `home.css` is about 220 KB, `home-v2.css` about 194 KB, `styles.css` about 70 KB, and multiple page-level files add further overrides. The design problem is therefore both visual and structural: fixing isolated sections without controlling cascade order will create more inconsistencies.

The migration must establish one owned foundation and move one page family at a time. Existing functionality, content, links, metadata, navigation, and forms stay intact until their replacement passes the page completion gate. Old route-specific layers are removed only after the migrated route has screenshot and interaction evidence.

## Complete UX/UI audit framework

Every public route will be reviewed against the following ten systems. Findings are recorded per breakpoint with a severity, source selector, visual evidence, and correction owner.

| System | What is inspected | Completion standard |
|---|---|---|
| Scrolling | Total page height, repeated sections, sticky elements, nested scroll areas, accidental horizontal overflow, scroll jumps | One document scrollbar; no page-wide overflow; mobile length reduced through better hierarchy rather than unreadable scaling |
| Positioning | Absolute/fixed elements, overlays, stacking contexts, anchor offsets, sticky header clearance | No collisions, clipped menus, detached annotations, or content hidden beneath navigation |
| Sizing | Container widths, preview scale, image dimensions, controls, cards, touch targets | Fluid containers; product previews scale as a unit; interactive targets at least 44px on touch screens |
| Radius | Buttons, cards, inputs, modals, browser frames | A small documented radius scale; radius communicates hierarchy instead of making every object a pill |
| Shadows | Depth, blur, opacity, spread, stacking | Shadows appear only on elevated interactive or focal surfaces; no muddy stacked shadows |
| Transforms | Hover lift, scale, rotation, translated overlays | Transform never causes clipping, layout shift, text blur, or oversized hover movement |
| Transitions | Duration, easing, changed properties, interruption | 150–220ms controls and 220–350ms scenes; no `transition: all`; rapid interaction remains stable |
| Type scale | Heading steps, body size, labels, line length, wrapping | Readable modular scale; body at least 16px for primary copy; compact UI text remains legible and high contrast |
| Alignment | Container edges, baselines, grid gaps, vertical centering, icon/text rhythm | Repeated elements share visible axes; cards do not depend on arbitrary heights to align |
| Visibility | Responsive hide/show rules, focus states, expanded content, reduced motion | Essential information remains available at every size; hidden content is also hidden from assistive technology |

## Foundation before page rollout

Create a shared `design-system.css` and a small shared interaction module only after the pilot tokens have been measured. The foundation owns:

- Semantic color tokens for paper, ink, muted text, border, brand action, success, warning and illustrative states.
- Container widths, section spacing, grid gaps and a documented mobile density scale.
- A type scale for display, section heading, subsection, body, small text and UI labels.
- Radius tokens for control, card, focal frame and full capsule; no arbitrary route values.
- Shadow tokens for low, medium and focal elevation, plus a focus ring token.
- Motion tokens for quick, standard and scene durations with two approved easing curves.
- Buttons, text actions, form controls, browser frames, product-preview labels, FAQ rows, integration rows and compact footer primitives.
- Shared breakpoints based on layout failure rather than device names: compact, stacked, intermediate and wide.

Page files may define composition and theme accents, but they must not redefine shared control sizing, focus, typography, navigation behavior, or breakpoint policy.

## Responsive behavior plan

### Compact phones: 360–430px

- Use a single content column with 14–20px gutters and 40–64px section spacing.
- Keep the hero message and primary action visible early; prevent decorative art from increasing the first viewport beyond its value.
- Scale complex desktop interfaces inside a bounded preview. Keep the explanation and controls outside the scaled preview.
- Prefer one active tab or example over four vertically repeated mockups.
- Collapse low-priority navigation into the existing mobile menu; never hide the primary conversion action without an equivalent.
- Use a compact two-column footer link layout and keep the closing section plus footer under a practical height budget.

### Tablets and small laptops: 768–1024px

- Reflow two-column sections when either column drops below its readable width; do not preserve desktop columns by shrinking text.
- Keep product previews at useful scale and move supporting copy above them when necessary.
- Validate dropdowns, sticky navigation, footer columns, and cards specifically at 768, 820 and 1024px, where current rules overlap most.

### Desktop: 1280–1440px and above

- Use a consistent maximum content width and maintain intentional negative space.
- Constrain line lengths and prevent headings from expanding merely because space exists.
- Hover motion remains minimal: 1–3px translation or a restrained color/shadow change, with no large scaling.
- Product demonstrations remain the focal objects; decorative graphics cannot compete with headings or calls to action.

## Scrolling and page-height budgets

Page height is judged by content value, not a universal pixel cap. The following budgets trigger review rather than automatic failure:

- Marketing overview page: approximately 5–8 meaningful sections.
- Focused feature/channel page: approximately 6–9 meaningful sections, including FAQ and closing action.
- Mobile sections: usually 40–64px vertical padding; larger only for a deliberate focal moment.
- Footer on compact phones: target under 650px; avoid newsletter/sitemap duplication on every route.
- No repeated explanation of the same capability in adjacent sections.
- A page that remains long must provide clear section changes, useful anchors where appropriate, and no artificial empty space.

For every migrated route, record document height and horizontal scroll width at 360, 390, 430, 768, 1024, 1280 and 1440px. Compare mobile height with the baseline and document why any increase is necessary.

## Interaction and motion specification

- Hover states use color, border, shadow, or at most a 1–3px lift; cards never enlarge enough to touch adjacent content.
- Dropdowns and mega menus animate with opacity and a short vertical offset; opening them must not shift the page.
- Focus-visible styles equal or exceed hover clarity and are never removed.
- Accordions synchronize visual state, `aria-expanded`, `aria-controls`, and the actual hidden state of panels.
- Demonstrations start once when meaningfully visible, provide replay, cancel pending timers offscreen, and expose the final state for reduced motion.
- Header, menu, modal, and demo layers use a documented z-index scale to eliminate accidental stacking contests.

## Visual QA and regression matrix

Each migrated page receives the same evidence package:

1. Full-page desktop render at 1440px and compact render at 390px.
2. Overflow and page-height measurements at all seven target widths.
3. Keyboard pass for header, menus, buttons, forms, accordions, and footer.
4. Reduced-motion pass and rapid repeated-interaction pass.
5. Local asset/link resolution check, console-error check, and broken-image check.
6. Comparison against the Website Widget quality bar for spacing, hierarchy, depth, typography, product realism and closing rhythm.
7. Independent finish review before a page family is declared complete.

Severity rules: critical blocks navigation or task completion; high affects responsive layout, truth, accessibility, or major visual hierarchy; medium creates visible inconsistency or friction; low is polish that can be grouped into the family closeout.

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

## Page-family composition blueprints

These are shared story structures, not identical templates. Each route must vary its focal scene, content density, color emphasis, and interaction according to its purpose.

### Home

1. Preserve the existing hero and trust section, correcting only responsive defects.
2. Rebuild “Your whole front desk, run by one AI agent” around a single coordinated workspace scene rather than a collection of unrelated cards.
3. Present the four channels inside one compact orchestration panel, with a clear active channel and a shared customer record.
4. Show workflows as a readable trigger-to-action path and CRM as the resulting customer context.
5. Use one proof section, one concise integration section, and one focused closing action.

### Channel pages

1. Outcome-led hero with a recognizable channel scene.
2. Conversation or event enters through the channel.
3. StepsAI finds business context or knowledge.
4. The agent completes the channel-specific action.
5. A compact cross-channel connection explains how the interaction joins inbox, CRM, workflow or analytics.
6. Relevant integrations, FAQ and closing action.

### Product, agent and capability pages

1. Hero demonstrates the capability inside the product workspace.
2. A before/after operational flow establishes the problem and resulting state.
3. A detailed interactive demonstration exposes controls, state and result.
4. Supporting capabilities appear as a connected system, not a grid of generic benefit cards.
5. Evidence, related integrations, FAQ where useful, and closing action.

### Industry and role pages

1. Industry- or role-specific outcome and realistic scene.
2. Three-stage journey using vocabulary from that audience.
3. A product workspace view showing the context captured from the conversation.
4. Boundaries and handoff states appropriate to the domain.
5. Related capabilities and a tailored action such as demo, enquiry or consultation.

### Partner pages

1. Clear program type and audience.
2. Visual explanation of referral, implementation or white-label relationship.
3. What the partner does, what StepsAI supplies, and how the customer experience appears.
4. Eligibility, process, terms and application action without invented earnings or guarantees.

### Resource indexes

1. Search or orientation first.
2. Strong featured item or learning path.
3. Scannable category system with clear metadata.
4. Useful empty, loading and no-result states when search/filter behavior exists.
5. Contextual newsletter or product action only after the resource content.

### Articles and legal pages

1. Reading-first title area with useful metadata.
2. Stable article width, strong subheading hierarchy and optional contents navigation.
3. Product examples, charts or callouts integrated into the reading flow.
4. Preserve policy wording exactly on legal routes; improve typography and navigation only.
5. Related reading or a restrained next action at the end.

### Pricing, contact and company pages

1. Pricing centers plan comprehension, billing state and comparison; contact centers intent routing and form completion; company pages center credible story and people.
2. Forms expose validation, loading, success and error states.
3. Comparison tables remain readable on mobile through prioritized rows or deliberate local scrolling with a visible cue.
4. Real evidence receives visual emphasis; illustrative content remains labelled.

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

## Execution milestones and approval gates

| Wave | Scope | Required output before the next wave |
|---|---|---|
| 0 — Baseline | Home plus all 55 subpages | Route inventory, loaded CSS/JS map, page heights, overflow results, current screenshots, broken asset/link report |
| 1 — Quality bar | Website Widget pilot | Approved 1440/390 renders, interaction pass, compact footer, motion/reduced-motion pass, documented tokens |
| 2 — Shared shell | Header, product/solution/partner/resource menus, footer, global controls | One shared shell verified on home, a channel page, an article, pricing, and legal content |
| 3 — Home | `index.html` | Responsive story and density corrected without breaking hero/trust sections; all home-specific style layers consolidated |
| 4 — Channels | Seven channel pages | Seven distinct channel demos, shared family primitives, family screenshot matrix |
| 5 — Product | Fourteen product/capability pages | Workspace, workflow, inbox, CRM and analytics patterns unified and verified |
| 6 — Industries and roles | Fourteen pages | Scenario-specific content, responsible domain boundaries, no duplicated generic hero art |
| 7 — Partners/resources | Eleven pages | Conversion and editorial systems verified; listing/filter/search behavior checked |
| 8 — Company/pricing/trust | Nine pages | Forms, pricing, company evidence, policy content and security claims reviewed for truth and accessibility |
| 9 — Release candidate | All 56 routes | Cross-page navigation, visual regression, performance, accessibility and mobile scroll report with no open critical/high issues |

No wave advances because its HTML is merely complete. It advances when the rendered behavior passes the evidence gate. Medium findings may be grouped into the current family closeout; critical and high findings block the next wave.

## Safe migration rules

- Preserve the existing route and URL contract. Do not rename public HTML files during visual migration.
- Keep the old page section hidden only during active comparison; remove it before final family completion so inaccessible duplicate content and dead styles do not ship.
- Do not edit the same shared stylesheet from multiple parallel workers. Shared tokens and shell components have one owner.
- Migrate selectors behind a page-family namespace, then remove superseded selectors after visual parity is confirmed.
- Do not use JavaScript to correct layout that CSS can solve. JavaScript owns state and behavior, not fixed coordinates.
- Do not shrink full desktop pages uniformly for mobile. Recompose the layout while preserving the most useful desktop relationships inside previews.
- New product claims, customer evidence, security statements and partner badges require a verified source or an explicit illustrative label.

## Definition of professional finish

The site is complete when it feels like one authored product across all 56 routes: navigation opens consistently, each page has a distinct purpose and credible product visual, mobile layouts are compact without becoming unreadable, vertical rhythm is intentional, shadows and radii are restrained, hover motion is subtle, forms and disclosures expose their real state, and there are no accidental overflow areas or legacy sections visible. The final release report must include the measured viewport matrix and the remaining low-severity polish list, if any.

## Decisions closed by this plan

- The supplied Website Widget reference is the binding visual authority.
- UI quality has priority over decorative quantity and is weighted explicitly in acceptance.
- The home hero and trust section remain visual reference points; the front-desk, channel, workflow and CRM sections are the first redesign targets.
- Schibsted Grotesk, StepsAI blue, deep navy, white and pale blue form the shared visual system.
- Each commercial route must prove one page-specific action through a realistic product scene.
- Mobile receives a deliberate compact composition and measured page-height review at every target width.
- Shared navigation, menus, tokens, controls, preview frames, motion helpers and footer patterns have one implementation owner.
- The execution order and page-family gates are fixed. Asset or content gaps are documented and labelled; they do not authorize generic filler or invented claims.

The next action is Wave 0: capture the full 56-route baseline and begin the first visual implementation batch on the home page priorities and Website Widget quality bar.

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
