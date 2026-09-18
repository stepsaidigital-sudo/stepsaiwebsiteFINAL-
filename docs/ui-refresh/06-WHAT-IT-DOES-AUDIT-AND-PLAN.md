# “What it does” — focused audit and implementation plan

Date: 18 September 2026. Status: the three Sales Agent demonstrations are implemented and verified. Lead and Support remain comparison pages for a later phase. “23 sections” was interpreted as 2–3 representative sections, not authorization to redesign 23 sections simultaneously.

## Design decision

Keep the alternating copy/mockup layout the user likes. Make each visual demonstrate the action described beside it. Add a product image, a short believable conversation, an understandable loading state and a visible result. Use StepsAI blues to give the scene depth, with white surfaces for readable UI. The surrounding website stays light.

Treat “real conversations” as realistic illustrative examples, not authenticated customer conversations or case studies. Label the component “Example conversation.” Do not imply that the marketing page connects to a visitor’s store, sends messages, creates orders or processes payments.

This focused specification supplements the existing page briefs. Its Sales Agent scope is now delivered: the three feature rows use one coherent product scenario, distinct catalogue/inventory/checkout results, controllable playback and a real local product photograph.

## Implementation result

- `feature-demos.css` and `feature-demos.js` provide scoped presentation and deterministic playback for the three opt-in `[data-feature-demo]` scenes.
- `nav.js` and `industries.js` exclude these scenes from the legacy chat player and tilt effect, so one controller owns each demonstration.
- `images/product-oxford-shirts-card.webp` is a 640×640, 36KB derivative of the existing local product photograph. It is lazy-loaded with declared dimensions in all three scenes.
- The Sales newsletter feedback now targets its actual status element and reports that signup is not connected rather than failing silently.
- Automated interaction checks cover playback, pause/resume, replay, off-screen pause, reduced motion, JavaScript failure and widths from 320px through 1440px. The whole-site audit still passes all 57 local documents with no missing local resources or browser errors.
- [Completed desktop section](evidence/features/sales-feature-section-complete.png), [loading state](evidence/features/sales-feature-row-1-loading.png), [completed recommendation](evidence/features/sales-feature-row-1-interactive-complete.png), and [mobile result](evidence/features/sales-feature-row-1-mobile.png).

## What was actually audited

Inspected the current HTML, styles and animation owners for Sales Agent, Lead Agent and Support Agent. Captured all nine zigzag rows in Edge at 1440px width with normal motion enabled and external requests blocked. Inspected selected captures at readable size. These are observations of the existing implementation, not proposed mockup renders. Production-font rendering and mobile animation behavior need verification during implementation.

- [Raw observations](evidence/features/audit.json)
- [Sales recommendation row](evidence/features/sales-agent-row-1.png)
- [Lead CRM row](evidence/features/lead-agent-row-2.png)
- [Support policy row](evidence/features/support-agent-row-2.png)
- Reproduction: `node docs/ui-refresh/audit-feature-demos.cjs`

The two time samples per row are a short observation window. A false `messageSequenceChangedDuringObservation` value does not prove there is no animation; a sequence can be between steps or already finished. Source inspection confirms an existing player.

## Findings and causes

| Finding | Evidence | Effect | Planned correction |
|---|---|---|---|
| Existing animation is hidden in an unrelated owner | `nav.js`, CHAT MOCKUP PLAYER around lines 147–228 | A new player could accidentally double-run on the same chat | Add an explicit opt-in component and make the legacy selector skip it |
| Typing and message reveals already exist | `playConversation()` adds `.cm-pending`, inserts typing dots, then `.cm-shown` | The task is improving a sequence, not adding animation from scratch | Keep the basic progression; add task-specific states |
| Playback runs once and unobserves the mockup | Observer calls `unobserve()` after starting | Returning visitors cannot replay it; offscreen timers continue | Pause/resume while out of view; provide Pause/Replay and a persistent completed state |
| Timing varies randomly | Agent typing uses `800 + Math.random() * 500` milliseconds | Review captures differ and pacing is difficult to tune | Use deterministic, explicit scene timings |
| Invisible future messages retain their layout space | Pending messages are hidden with opacity/transform; typing indicators are inserted into the flow | Large empty chat panels during playback; inserting typing can move content | Separate the loading slot from the stable transcript area; reserve space intentionally |
| Nine rows have no image elements | Browser audit of `.spread` rows | Recommendations remain words without a product to recognize | Product imagery inside relevant Sales cards; avoid irrelevant photography in CRM/support UI |
| Nine rows have no button controls | Browser audit | No pause, replay or alternate scenario control | Small keyboard-accessible controls in the frame footer |
| Sales copy promises results without showing their state | Recommendation is text-only; stock and checkout use the same generic chat frame | Three features look nearly identical | Distinct product, inventory and order result components within one common frame |
| Sample data changes across scenes | Lead capture number differs from CRM number; CRM budget/timeline are not established in the shown chat | The sequence feels assembled from unrelated examples | One scenario record feeds every displayed field |
| Success semantics are inconsistent | Sales five-step journey says “Order placed” while its message only reserves checkout | A reservation looks like payment confirmation | Explicitly separate checkout-ready from paid/confirmed states |
| Brand colors drift across feature rows | Lead rows use violet, green and amber inline accents | Color becomes arbitrary rather than functional | Blue for brand emphasis; green for completion; amber only for attention |
| Other inherited defects remain | Support headline still says 0.5 seconds; newsletter handler in Sales searches within a form for a status node outside it | Contradictory copy and a submission error | Address in the implementation checklist, not by claiming the existing pilot is flawless |

Measured “What it does” section heights: Sales 1442px, Lead 2541px, Support 1532px. Lead also includes its signature lead progression inside that section, so these heights are not directly comparable. Reduce redundant empty space without compressing the UI text.

## Research translated into decisions

1. Product demonstrations should expose the action and resulting object. Intercom’s ecommerce documentation describes catalog recommendations, cart actions and checkout, with differences by channel. This supports the design inference that a recommendation card and a checkout state communicate more clearly than a bare text reply. It does not establish that StepsAI supports any additional capability. [Intercom ecommerce documentation](https://www.intercom.com/help/en/articles/14997821-fin-for-ecommerce-explained)
2. Animate small transitions with opacity and transforms. Avoid animating large blur fields or dimensions continuously; inspect rendering cost rather than assuming GPU acceleration. [web.dev animation guidance](https://web.dev/articles/animations-guide)
3. Automatic movement lasting over five seconds alongside other content needs a pause/stop/hide mechanism when the criterion applies. This plan includes Pause, Replay and Show full conversation controls. [W3C Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html)
4. Observe actual visibility to control playback. Use one IntersectionObserver for the demo instances, with document visibility handling for background tabs. [MDN Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

These references inform functionality, performance and accessibility. The specific blue scenes and zigzag composition below are design proposals for StepsAI, not copied competitor screens. No stock images were purchased or downloaded, and no stock license was verified in this research pass.

## Visual system for the three pilot rows

Desktop container: 1200–1280px maximum. Copy/mockup proportions approximately 40/60; alternate the sides for row two. Gap 48–64px. Keep body copy 16–17px and mockup messages 14–15px. Use 24px feature headings and a small numbered feature label. Row spacing 48–64px, with 72px outer section padding. These are layout targets, not fixed content heights.

Mockup stage: blue-tinted scene behind one white application frame, 20–24px outer stage radius and 14–18px frame radius. A subtle edge contour can echo the supplied logo. Place saturated color behind the frame’s edges, not under its text. Use one soft blue shadow to separate the frame. Avoid piling a phone, browser, dashboard and floating badges into one row.

Palette: primary #0868F7; deep brand blue #2345C9; bright supporting blue #5894FF; pale stages #EDF5FF and #E5EFFF; ink #0A1020; body #475A76. Green is reserved for confirmed success. Stock imagery supplies natural color without adding unrelated interface accents. Verify text contrast on the actual rendered background.

At 900px and below, stack copy then visual in reading order, including the reversed row. At 390px, use 20px page gutters and a 350px available frame; at 320px, the frame must fit 280px. Reflow product details under the image when needed. Do not scale down a desktop screenshot to illegible text. Height remains content-driven under zoom; clipping is permitted only for decorative scene layers.

## Pilot 1 — recommendation with a product people can see

Composition: copy left, product conversation right on a pale sky-blue stage. Use one catalog photograph, visible product name, price, size and stock status. A second tiny accessory card is optional only after the main state reads clearly.

Proposed example sequence:

1. Shopper: “A casual shirt under ₹2,000. Do you have medium?”
2. Loading label: “Checking the catalogue…” with three quiet dots or a product-shaped skeleton.
3. Agent: “This shirt is ₹1,799. Medium is in stock.”
4. Product card: the exact photographed shirt, ₹1,799, size M, “In stock”.
5. Shopper: “Can I see the size details?”
6. Agent: show a concise sample size detail only if included in the scenario data; otherwise end at the product result.

Use example data, not claimed real inventory. Do not assert fabric, fit or product identity from an image filename alone. The current 10% discount should not appear unless the same configured promotion is explicitly represented. A card action within the demo advances the example only and must not imply a live checkout destination.

## Pilot 2 — inventory check with an observable result

Composition: mockup left, copy right. Shift the pale stage to a slightly deeper blue near the lower edge. Keep the same product image and identity to create continuity.

Proposed example sequence:

1. Shopper: “Is medium available in navy?”
2. Status: “Checking inventory…”; use a compact lookup row, not a spinning page loader.
3. Result: variant Navy / M and stock status “Available” in a small inventory panel.
4. Agent: “Yes—navy in medium is available.”
5. Rest on that resolved frame; show Replay.

Optional user-triggered alternate: “See out-of-stock example.” Swap to a specified unavailable variant, then offer a sample notification request. No real notification is sent; do not show an invented restock date. Only add this alternate after the primary sequence passes visual review.

## Pilot 3 — checkout progression with honest success states

Composition: copy left, order summary right. Use a quiet blue stage; green appears only after the final confirmation state.

Proposed example sequence:

1. Shopper: “I’ll take the navy shirt in medium.”
2. Status: “Preparing checkout…”
3. Summary: same photo, product, variant and ₹1,799 amount; status “Ready for checkout”.
4. Shopper: “Payment is complete.”
5. Status: “Checking payment…”
6. Final example: order #5193, “Payment confirmed”, same item and amount.

Label the sequence “Example conversation” throughout. The confirmation is a scripted demonstration, not a transaction on this page. Do not claim a paid order when only a reservation/link has been created. If the sequence is too long for the first release, end at “Ready for checkout” and remove payment-confirmed framing consistently.

## Motion specification

| Event | Proposed timing | Behavior |
|---|---|---|
| Frame enters view | 280ms | Fade with at most 8px vertical translation; no rotation while reading |
| Customer message | 200ms | Reveal the entire message; no character-by-character typing |
| System lookup | 650–900ms | Dedicated loading slot, gentle dots/skeleton, clear task label |
| Agent response | 200ms | Fade in with at most 6px translation |
| Product/result card | 240ms | Reveal after the lookup; maintain reserved stage geometry |
| Reading interval | 1000–1800ms | Tune by text length; user may pause at any time |
| Completion | No automatic restart | Final state remains visible; Replay resets intentionally |

These timings are storytelling durations. They are not a measured service reply time and must not be presented as evidence for the approved 0.2s marketing metric.

Start only when roughly 45% of the frame is visible and no other demo is actively playing; use sensible visibility handling for frames taller than the viewport. Pause when outside view or when the browser tab is hidden. Resume at the same step. A user pause always overrides auto-resume. Keep one active demo at a time. No looping loading indicators after completion.

Reduced motion: immediately show the complete readable result and transcript, without typing pulses, parallax or automatic replay. JavaScript disabled or failed: all meaningful content is available. Give screen-reader users a stable full transcript; do not announce every decorative typing tick. Controls need visible focus, clear accessible labels and 44px targets.

## Assets and stock-image production

| Need | Existing candidate / production instruction | Acceptance |
|---|---|---|
| Sales product | Inspect `images/product-oxford-shirts.jpg`, `product-mandarin-shirt.jpg`, `product-grandad-shirt.jpg` | Select the photograph first; align fictional name/color with visible garment; confirm reuse rights |
| Replacement product if needed | Licensed studio garment image, neutral white/light gray background, no embedded text, one clearly visible item | Record source URL/license; same product throughout all three rows |
| Alternate variant | Only acquire if the optional stock scenario needs it | Same garment style and credible alternate color; do not recolor a real product without authorization |
| UI frame and conversation | Build from DOM/CSS | Live text, crisp on mobile, no rasterized text screenshots |
| Background | CSS-based blue scene with restrained contour | No heavyweight stock “technology” background or autoplay video needed |
| Lead / Support follow-on | CRM fields, ticket state and policy excerpt | No portrait or office stock image required to explain these actions |

Product exports: 1:1 or 4:5 crop; 320px and 640px variants, WebP/AVIF where supported with a suitable fallback. Aim under 100KB per small product asset where quality permits. Declare dimensions to reserve layout space and lazy-load below-fold images. All message text, price and variant information remains separate from the photo.

Implementation evidence now includes one readable desktop and mobile capture for each pilot row, plus enlarged loading and completed states for the recommendation demo. The frames are browser renders of the working page rather than static design boards.

## Implemented architecture

1. Scoped `feature-demos.css` and `feature-demos.js` preserve the static HTML stack and activate only opt-in roots.
2. Product, inventory and order panels share the same item, price, size and color. The checkout scene adds one explicit example order reference.
3. The legacy player and tilt effect skip the new scenes, preventing duplicate animation ownership.
4. Controller states are idle → playing → paused → playing → complete, with an explicit Replay reset. Timers are deterministic and cleared when playback pauses.
5. Dedicated loading and result regions preserve readable geometry. Height remains content-driven and all tested viewport widths stay within the document.
6. Newsletter feedback is resolved within the enclosing card and makes no false success claim.
7. Lead and Support migration remains outside this completed Sales scope. If migrated later, reuse the controller for Lead capture → CRM → routing and Support lookup → policy answer → handoff.

No other page migration is required for this focused phase. The existing site-wide roadmap remains queued.

## Acceptance record

- Desktop and mobile captures exist for all three scenes. Loading and completed recommendation states were also captured from normal interactive playback.
- Width checks pass at 320, 390, 768, 1024 and 1440px with no document overflow.
- Pause during loading, resume, Replay, off-screen pause, reduced motion and JavaScript-disabled content all pass the focused browser verification.
- The stable hidden transcript, visible control labels, 44px targets and reduced-motion final state are present.
- The optimized product derivative is lazy-loaded with declared dimensions. Sample data stays consistent and no unsupported discount or restock promise appears.
- The checkout example presents “Payment confirmed” only after the shopper’s explicit “Payment is complete” step and a payment-checking state.
