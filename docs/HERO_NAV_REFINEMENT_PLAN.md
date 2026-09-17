# Homepage hero and navbar — implementation handoff

Status: plan only. Do not change the page until implementing this brief.
Target: index.html and its homepage hero/navigation styles.
Reference: user screenshot supplied September 17, 2026.

## Objective
Refine the existing hero, rather than redesigning the page. Keep its centered headline, blue emphasis, two calls to action, channel selector, working product demo, and new blue StepsAI logo. Make the navbar slimmer and transparent at the top, with a readable surface after scrolling. Give the background intentional brand character without increasing hero height. Preserve the compact trust section and its 0.2s metric exactly.

## Audit findings
1. The opaque white navbar and bottom border visually separate it from the hero. In home-professional.css, body:has(#hero) .nav forces a white background and wins over the shared navbar styling. nav.js already toggles .scrolled above 40px; fix the CSS state conflict instead of adding another scroll listener.
2. In the supplied screenshot the navbar is approximately 98px tall; its large CTA competes with the hero buttons. The top badge sits too close to its lower edge. Improve the proportions and reserve deliberate space below the header.
3. The background is not literally empty: hero-premium.css layers a base gradient and several radial glows. Their overlap produces a broad, generic blue wash with little relationship to the product. Replace the redundant layers with one controlled composition.
4. The headline and channel demo are strong. The largest gains will come from the surrounding space and navigation rather than rewriting copy or enlarging anything.
5. The new logo is a JPEG with a white background. That rectangle will become visible over a transparent tinted header. Use an approved transparent version of the exact mark; do not substitute a generated lookalike or distort its proportions.
6. Styles are distributed across styles.css, home-professional.css, home-finish.css, hero-premium.css, and inline rules in index.html. Inspect computed styles before editing. In particular, lower-specificity short-screen hero padding rules may not override #top #hero.

## Committed visual direction
A cool ivory-white canvas with two very faint, oversized curved contours derived from the loops of the new logo. Keep the center behind the headline nearly white. Concentrate a soft blue light behind the product demo, with a restrained blue tint at the outer edges. The navbar sits within the same continuous canvas at the top.

Use CSS radial gradients for light and a lightweight SVG or CSS geometry for the contours. The contours are decorative, cropped beyond the viewport, and never rendered as a large literal logo watermark. No grid, particles, new floating cards, or animated background is needed. Keep the existing hand annotations by the demo at their current hierarchy.

Background specification:
- Base: #FAFCFF; center reading area approaches #FFFFFF.
- Lower-left blue: #DCEAFF, approximately 30–45% opacity, centered near 8% horizontal / 72% vertical.
- Lower-right blue: #E7EFFF, approximately 25–35% opacity, centered near 94% / 68%.
- One light ellipse behind the device: #EAF2FF, maximum 55% opacity, with a long soft falloff.
- At most two contour strokes, 1px at 6–9% blue opacity, outside the central text column. Do not add a pattern of repeated rings.
- Fade the last 100–140px into white to meet the existing trust section.
- Decorative layers must have pointer-events:none, aria-hidden where applicable, and no effect on document height.
- Reuse .hero-atmos-bg as the single decorative layer owner; remove redundant glows rather than stacking more effects.

## Navbar dimensions and behavior
Keep a full-width fixed header. Its content should align with the hero container, not sit inside a new floating capsule.

| Element | Desktop | Mobile |
| --- | --- | --- |
| Header height | 76px, stable in all states | 64px, stable in all states |
| Inner container | max-width 1320px, centered; 32px side gutters | 20px side gutters |
| Logo mark | approximately 42px wide, natural aspect ratio | approximately 36px wide |
| StepsAI wordmark text | 23px, weight 700 | 21px, weight 700 |
| Navigation text | 14px, weight 500 | existing mobile menu hierarchy |
| Navigation hit area | at least 44px high | at least 44px square |
| Navbar CTA | 44px high, 16–20px horizontal padding, 11px radius, 14px text | preserve existing responsive visibility |

Use one consistent font stack for navigation. Keep all current links, dropdowns, language controls, and login behavior. Do not enlarge the logo to fill the header.

State contract:
1. Top, scrollY <= 40, menus closed: transparent background, no bottom border, no shadow, no backdrop blur. The hero background must physically extend beneath the fixed header. Keep dark ink navigation labels.
2. Scrolled, scrollY > 40: rgba(250,252,255,.94) background, 12px backdrop blur, 1px rgba(20,45,85,.08) lower border, shadow 0 4px 18px rgba(20,45,85,.05). Provide an opaque #FAFCFF fallback without backdrop-filter support.
3. Desktop dropdown open (.menu-open) or mobile menu open (.open): readable near-white header/panel regardless of scroll. Open-menu state takes precedence. Retain existing dropdown positioning and dismissal behavior.
4. Close menu: resolve to the current scroll state, not always to transparent.
5. Initial page load at a restored scroll position or anchor: correct surface immediately; retain nav.js's initial onScroll() call.
6. Transition background, border color, and shadow over 180–220ms. Do not animate header height, padding, or blur. Disable transitions for reduced-motion preference.

Interpretation: transparency belongs to the initial hero view; scrolling introduces the pale hero-colored navbar surface. Do not keep the header transparent while moving text and cards pass beneath it.

## Hero spacing and scale
Keep the current copy and overall composition. Reduce vertical overhead; do not create another full-screen section.
- Desktop hero padding-top: header height + 28px (104px with a 76px header).
- Mobile hero padding-top: header height + 24px (88px with a 64px header).
- Badge: 30–32px high, 11–12px text; 20–24px gap before headline.
- Headline: retain the current typeface and two-line desktop structure, with a maximum 60–64px at wide desktop widths. No larger than the current version. Allow natural wrapping at narrower sizes; remove unconditional white-space:nowrap when it causes overflow.
- Supporting copy: 16–17px, line-height 1.55, maximum 740px wide, 18–20px below headline.
- Hero buttons: 52px high, 16px text, 12px radius, 14px gap. Preserve labels and destinations.
- Assurance row: 14–16px below buttons; preserve readability and touch-independent content.
- Channel selector: 24px below assurance row, approximately 54–56px high with at least 44px hit areas.
- Device preview: preserve all existing channel behavior and device proportions. Keep its top visible in a 1366×768 viewport. Do not shrink the entire page with transform or zoom.
- At <=600px, maintain legible text and existing stacked button behavior. Simplify background contours and weaken the demo glow. Do not hide meaningful content to meet a fixed height.

## Files and implementation sequence
1. Capture desktop and mobile baselines, and inspect computed nav height, hero padding, and font sizes. Record 1366×768 and 390×844.
2. In home-professional.css, replace the unconditional homepage white-navbar declaration with explicit homepage top/scrolled/menu-open/open states. Use selectors with matching specificity. Scope changes to the homepage so shared subpages retain their behavior.
3. Keep the shared .scrolled listener in nav.js. Modify JavaScript only if actual behavior requires it; do not install a second scroll handler.
4. Put the new hero background and hero sizing rules in hero-premium.css, its existing owner. Consolidate conflicting relevant rules instead of appending another stylesheet or !important cascade.
5. Review index.html's short-screen inline overrides and ensure the intended styles actually win. Update scroll-padding/scroll-margin and any dropdown or scrim top offset to match the new header height. Search for hardcoded 76px, 90px, and 98px assumptions.
6. Preserve the new blue logo geometry. If only the supplied JPEG is available, prepare or obtain a faithful transparent asset before final visual sign-off. Do not apply mix-blend-mode as a substitute because it can change brand color. Keep explicit dimensions and object-fit:contain.
7. Preserve the current trust section, client logos, all copy, navigation destinations, and product demo logic. Update asset query versions if required by the project's existing caching convention.
8. Verify once across the matrix below, fix identified defects in one batch, then confirm. Deliver before/after screenshots and a concise change summary.

## Acceptance checks
- At scroll 0, the navbar and hero form a continuous background, with no white rectangle around the logo.
- At scroll 80px, a stable pale surface makes every nav label readable; no jump in layout or header height.
- Menus work at scroll 0 and after scrolling; Escape, outside click, keyboard focus, mobile scroll lock, and existing link targets remain functional.
- Returning to scroll 0 restores transparency. Reload at a scrolled position restores the correct state.
- Test 1600×900, 1366×768, 1024×768, 768×1024, 390×844, and 320×740. No horizontal overflow or collisions; collapse desktop nav before it stops fitting.
- At 200% zoom, navigation remains usable and the headline wraps without clipping.
- Text contrast at least 4.5:1, large text at least 3:1, visible keyboard focus, and 44px minimum interactive targets.
- Test reduced motion and no-backdrop-filter fallback. No new continuous animation, canvas, video, or background dependency.
- Verify all four channel tabs and dropdowns still work. No changes to trust-section height or the 0.2s figure.
- Final screenshots: top desktop, scrolled desktop, open dropdown, and mobile top.

## Additional source findings — resolve before styling
- header#nav is a sibling before main#top. Selectors such as #top .nav, #top .nav-inner, and #top #nav .nav-inner cannot match the header. Do not reuse those selectors for this change. Use a homepage body class or the existing body:has(#hero) scope.
- solutions-menu.css contains broad navbar styling, including larger logo, link padding, and CTA sizing. Inspect approximately lines 80–88 and neutralize the relevant homepage conflicts in the chosen navbar owner. Its intended #top-scoped header sizing is ineffective.
- home-v2.js approximately lines 803–814 targets #mainNav, which is absent from this homepage. That transparency logic does not run. Remove or retire that dead homepage logic only after checking whether other pages use it; retain nav.js as the sole homepage scroll-state owner.
- Define --home-nav-height as 76px desktop / 64px mobile and use it consistently for header sizing, hero clearance, scrim placement, dropdown anchoring, and scroll offsets. Avoid duplicate numeric assumptions.
- Include one shared subpage in regression checks because nav.js and the menu styles are shared.

## Audit provenance and limits
Method: two independent assessments (visual_audit and implementation_audit), synthesized with direct source inspection and the user screenshot. No website implementation changes were made for this request.
The mechanical detector ran once but lacked its HTML/CSS parser dependencies and fell back to regex. It reported six mainly out-of-scope findings; it did not validate computed contrast, selector matching, or custom properties. No new live-browser verification or overlay was performed for this plan. The viewport matrix above is required implementation validation, not a claimed test pass. No audit server was started.
