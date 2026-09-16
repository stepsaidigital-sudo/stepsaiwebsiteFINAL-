# StepsAI hero — implementation handoff

Prepared 2026-09-16. Status: implemented and verified on desktop and mobile.

## 1. User intent and delivery

Refine the current homepage hero to professionally reproduce the supplied device compositions, with believable platform interfaces and controlled animation. The user has already corrected other homepage content. Preserve those corrections. Deliver working HTML/CSS/JS and verified screenshots, not another design proposal or an image of a website.

This document is the implementation brief for the next model. Read the current files before editing: they have uncommitted user/agent changes. Do not reset, restore, or overwrite unrelated work. No migration, deployment, dependency overhaul, or other-page redesign is part of this task.

## 2. Target and evidence

The implemented homepage is the root `index.html`. Its hero is `section#hero.hero--centered-v3`, approximately lines 2012–2510 when inspected. Its dedicated files are `hero-premium.css` and `hero-premium.js`. Line numbers can change; find selectors instead.

The `next-app/app/page.tsx` inspected on this date renders only a Test badge. Do not implement there or copy the homepage into Next.js as part of this work.

Relevant incumbent files:

- `index.html`: hero structure, inline style overrides, stylesheet and script order.
- `hero-premium.css`: roughly 2,050 lines including device shells, per-channel UI, and breakpoints.
- `hero-premium.js`: `SCREEN_TEMPLATES`, `switchHeroChannel`, initial WhatsApp state.
- `styles.css`: shared tokens; currently accent #2563EB.
- `home-v2.css`, `home-professional.css`, `home-finish.css`: potential competing hero rules.
- `home.js`, `home-v2.js`, `home-professional.js`: inspect for shared hero ownership before changing listeners.
- `DESIGN_ANIMATION_SYSTEM.md`: incumbent motion vocabulary.
- `images/logo.png`: candidate actual logo; inspect before use.

Observed problems, not yet browser-verified:

- Hero rules contain many `!important` declarations and compete with other stylesheets/inline rules.
- `PROJECT.md` documents older colors/fonts (#1A56DB, Outfit); these disagree with current styles. It is historical context, not unquestioned visual authority.
- Current hero title uses Schibsted Grotesk; shared font token says Inter. Inspect computed fonts and actual font loading.
- Phone template product image points to an external Unsplash photograph instead of the isolated reference jacket.
- Switching phone channels uses an uncancelled 120 ms timeout to replace innerHTML. Rapid clicks can enqueue stale renders.
- Laptop/phone switching uses immediate display changes. There is no coordinated device transition or message sequence in this controller.
- Side panels are independently authored and need a consistency pass against the main conversation.

Do not claim an observed browser defect from these code findings until rendered.

## 3. References and decision defaults

All four supplied PNGs live in `C:/Users/user/Downloads/COURSE FILE/`:

| File | Role |
| --- | --- |
| `ChatGPT Image Sep 16, 2026, 03_08_21 AM.png` | Image #4: Website laptop composition |
| `ChatGPT Image Sep 16, 2026, 03_08_45 AM.png` | Image #1: WhatsApp foreground phone |
| `ChatGPT Image Sep 16, 2026, 03_08_40 AM.png` | Image #2: provisional Instagram composition |
| `ChatGPT Image Sep 16, 2026, 03_08_33 AM.png` | Image #3: alternate phone composition; do not mix its UI into #2 |

The user has not answered the earlier composition/DM clarification. These are explicit working assumptions, not confirmed choices:

1. “Instagram profile UI” means the direct-message conversation visible in the supplied images, not a bio/posts profile page.
2. Use #2 for Instagram composition, #1 for WhatsApp, #4 for Website. Messenger follows the same physical phone and backdrop system; no foreground Messenger reference was supplied.
3. Keep WhatsApp as the initial production channel, preserving existing behavior. Build Instagram first for fidelity review.
4. Preserve current headline, paragraph, CTA labels, links, and metric values. Reference copy differs from the corrected page; do not silently replace it.
5. Preserve the current blue brand family. Platform gradients belong to platform icons and supported chat themes. Do not introduce #3's purple headline gradient across the brand.

Proceed on these defaults when implementation is requested unless the user corrects them. Ask only if a remaining conflict prevents meaningful progress. Exact text wrapping cannot match an image containing different copy; report that deliberate difference rather than shrinking type unnaturally.

## 4. Scope

In scope: hero background, spacing, channel controls, device mockups, channel conversations, side-panel depth, device transitions, message sequence, responsive adaptation, and accessibility for the hero.

Preserve navigation and everything below the hero, including links, copy, analytics, and interactions. Reuse the actual brand logo; do not approximate it with two circles or arbitrary letters. Retain existing factual metric copy without adding claims or badges. Avoid fake verification marks unless a verified identity is supplied; the generated images are not evidence of verification.

Primary edit ownership: hero markup in `index.html`, `hero-premium.css`, `hero-premium.js`, and dedicated local assets under `images/hero/` if needed. Consolidate conflicting hero rules narrowly; do not remove a shared rule used elsewhere. Avoid appending another layer of overrides.

## 5. Visual specification

Treat the images as 1024 × 1536 composition references, not proof of real app UI. Establish measured bounds by viewing the originals before implementation. These approximate visual anchors are starting estimates, not pixel measurements:

| Element | Approximate reference geometry |
| --- | --- |
| Channel bar in phone states | x 197–827; y 534–594 |
| Instagram foreground frame, #2 | x 330–695; y 607–1373 |
| WhatsApp foreground frame, #1 | x 305–665; y 607–1377 |
| Website laptop, #4 including base | x 7–1017; y 647–1342 |
| Metrics | y 1405–1475 |

Reference-space acceptance applies primarily to device composition because corrected page copy can move the stage vertically. Compare both a stage-aligned crop and a full-page image. Keep explicit notes of intentional differences.

Composition:

- Calm white/very pale blue field, broad soft curved bands, restrained blue illumination. Avoid dot grids if they conflict with the selected references.
- One crisp foreground device; rear panels are secondary, softly tinted, with progressively lower contrast. No strong blur on foreground text.
- Stable central frame across all phone channels. Use a realistic portrait aspect ratio derived from the chosen frame; no stretching between channels.
- Side panels stay behind the foreground bezel and outside its screen clipping boundary. Do not duplicate the active channel merely to fill a slot.
- Use local vector/CSS device chrome where practical: layered bezel highlights, thin metallic edge, consistent corner nesting, camera island, status bar and home indicator. A licensed transparent frame asset is also acceptable if it improves fidelity and its source is recorded.
- All screen UI remains real HTML and legible. Do not rasterize chat text into a generated full-screen picture.
- Same jacket image, name and price throughout. Find an appropriate existing asset first. If none exists, create/source a suitable asset through available tools and document provenance; do not substitute an unrelated clothing photograph.
- Match reference CTA shape with moderate rounding within the hero if needed; keep shared button styles intact.
- The metric row is visually light with separators, not a heavy glass card.

Use native platform-like system typography inside devices, independently from the brand headline font. Match icon stroke, baseline, size, and spacing within each platform. No emoji replacements for toolbar controls.

## 6. Channel interface contract

Instagram: select one real iOS DM reference/theme and record its source/version context. Verify header, avatar, username/status, call/video affordances, incoming/outgoing alignment, bubble radii, receipt placement and composer controls against that single reference. Do not combine incompatible toolbars from the generated images. Use a coherent demo business identity across channels. Incoming messages should read as messages from that business; StepsAI powers the conversation without adding an invented native bot label on every bubble.

Official starting reference: https://about.fb.com/news/2025/02/new-instagram-dm-features-stay-connected/ . It supports DM feature research but is not an exhaustive current pixel specification. Consult actual first-party imagery or a user-provided app capture before claiming exact native fidelity. If unavailable, finish a clearly described approximation and name the remaining uncertainty.

WhatsApp: coherent iOS header/status bar, light patterned conversation surface, correct incoming/outgoing treatment, timestamp/tick alignment and bottom composer. Verify native details rather than treating green tint as sufficient.

Messenger: blue-themed outgoing treatment, neutral incoming treatment, coherent Messenger header/composer and avatar placement, verified against first-party imagery when possible.

Website: believable laptop shell with browser chrome and outdoor storefront; StepsAI widget overlays the right side. Storefront remains visually secondary to the conversation. Use the same product image and identity. Keep the widget fully inside the display and its input visible.

Product cards/quick replies: generated references may depict capabilities that are not native or available for the actual integration. Verify the intended message format. Prefer a supported product/link preview with a view-product action over inventing native checkout controls. Document any deliberate demo simplification. Do not claim that clicking a demo updates a real cart.

Conversation narrative: customer asks about Trail Jacket XL → agent confirms stock/delivery → relevant product preview → customer follow-up → useful answer. Keep message lengths short enough for the chosen frame. Preserve current demo facts where possible; change wording only as needed for accurate platform formatting, not to invent product promises.

## 7. Animation and interaction contract

Ship manual channel selection first. No automatic channel carousel by default; it interferes with reading and predictable screenshotting. A conversation may play once on channel activation, then hold the complete result indefinitely.

Proposed timings (tune once after visual inspection):

| Event | Timing/behavior |
| --- | --- |
| Active tab feedback | immediate state, 180–220 ms visual transition |
| Phone channel change | 180 ms old screen fade, replace hidden content, 220 ms new screen fade; frame remains stable |
| Laptop/phone transition | 450 ms opacity and small vertical/scale movement; no geometric morph between unrelated frames |
| First customer message | appears after device settles |
| Typing indicator | 600–900 ms, then removed |
| Agent reply/product | 220–280 ms reveal, roughly 350 ms separation |
| Follow-up/answer | short readable pause between groups; whole sequence approximately 6–8 seconds |
| Final state | stable, no repeated flashing, bouncing or looping |

Use the existing flat UI easing for user-driven transitions; no spring overshoot. Prefer opacity/transform. Reserve the stage's responsive height so switching does not move metrics or subsequent sections. Keep header and composer pinned in the screen; only the message area may scroll. Never scroll the page as messages arrive.

Controller design: one owner for active channel, animation phase, and cancellable scheduled work. On each selection, invalidate the previous run and clear its timers/animations. Re-selecting the active tab should not restart unexpectedly. Rapid Website → Instagram → WhatsApp clicks must end on WhatsApp without stale content or callbacks.

Pause/cancel when the document is hidden or the hero leaves view. On return, show a stable appropriate state; avoid accumulated delayed events. Reduced motion renders the selected completed conversation immediately. No autoplay audio.

Tabs: complete tablist/tab/tabpanel relationships, selected state, roving tabindex, Left/Right/Home/End keyboard behavior and visible focus. Hidden panels must not expose focusable elements. Decorative rear panels are aria-hidden and inert. Provide a concise accessible demo description; do not announce every animation frame/message through an aggressive live region. Mock phone toolbar icons should not masquerade as working calls or inputs.

## 8. Responsive behavior

- 1024 px reference width: establish the measured composition first.
- 1440 × 900 and 1280 × 800: centered copy and visible device entrance; do not compress the whole tall reference into one viewport. Scrolling to see the full device is acceptable.
- 768 × 1024: reduce/remove far panels, preserve foreground readability and tab access.
- 390 × 844 and 360 × 800: foreground device only; hide handwritten notes and rear panels. Use compact, readable tabs with at least 44 px hit areas. Metrics become a two-column grid if content fits. No horizontal page scrolling.
- Mobile Website state: preserve readable chat through an intentionally simplified storefront/widget composition rather than shrinking desktop chat to illegible text. This is an explicit responsive adaptation, not a pixel match to the desktop laptop.
- Test 200% zoom: content and controls remain reachable without overlap.

## 9. Implementation sequence

1. Read applicable instructions, inspect git diff/status and preserve existing changes. Use the relevant UI skill; do not generate a new design direction.
2. Start the static homepage through an available local server. Capture baseline desktop/mobile screenshots and inspect computed hero rules. Identify which selectors/scripts actually win before editing.
3. View original reference files and actual logo/assets. Record refined bounds and palette in a short implementation note. Resolve current font loading.
4. Consolidate hero ownership and define scoped tokens for stage geometry, bezel, screen radii, channel colors, spacing and motion. Keep global tokens intact.
5. Build the complete static Instagram frame and screen first. Then WhatsApp, Messenger, and Website plus rear panels. Implement all static states before motion.
6. Add the cancellable controller, accessible tab behavior, deterministic completed states and message timeline.
7. Finish responsive layouts and reduced-motion/visibility behavior.
8. Run one batched visual and functional verification, fix all material findings together, then one confirmation pass. Do not enter endless screenshot polish loops.
9. Deliver changed-file summary, desktop/mobile screenshots, verification results and any precise unresolved platform/asset limitation. Do not deploy unless requested.

The static-Instagram milestone is an implementation order, not a mandatory approval stop. Continue through all states when the user authorizes implementation.

## 10. Verification and acceptance

Provide deterministic inspection mode, e.g. `?heroChannel=instagram&heroMotion=off`, validated against the four allowed channel names. It sets a stable final state with no entrance effects. It must not change ordinary production defaults. This is for screenshot comparison, not a visible developer control in the marketing page.

Capture the four final channel states at 1024 × 1536, all four mobile adaptations, and representative laptop viewport(s). Use stage-aligned overlays for device fidelity; compare full page separately for composition. Measure primary frame/tab bounds, rather than trusting a global image-difference score that includes changed copy and font rasterization. Aim for primary bounds within roughly 4 CSS px of the agreed measured reference at 1024 width, unless an intentional difference is documented.

Functional acceptance:

- Every tab displays its matching device/interface and selected state.
- Rapid repeated switching produces no stale screen or exception.
- Keyboard tab navigation works; hidden controls cannot receive focus.
- No overflow at 360 px, clipped composer, text-bezel collision, stretched asset, or broken image.
- Completed conversations remain readable and still for screenshots.
- Reduced motion shows final content without transitions.
- Switching channel does not shift the metric row/page layout at a fixed viewport.
- No new browser errors; local assets load; typography is not silently falling back.
- Header, corrected copy, CTA destinations and below-hero content remain intact.
- Inspect before/after diff for accidental unrelated edits.

Use existing browser/test tooling where available; do not add a framework just for this hero. Meaningful automated checks may cover switch cancellation, keyboard behavior and overflow. Do not write tests that merely assert internal class names. Run the UI skill's required detector on changed targets after implementation and address relevant findings without overriding the user's visual references.

## 11. Handoff instruction

Implement this plan in the existing static homepage. Begin with source and browser inspection, then build the static Instagram state and complete the remaining channels and animation. Preserve current corrected copy and unrelated changes. Follow the documented defaults unless the user changes them. Finish with verified screenshots and a concise report; do not stop after another plan. Do not describe generated reference UI as verified native Instagram without independent evidence.
