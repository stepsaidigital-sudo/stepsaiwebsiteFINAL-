# StepsAI — Design & Animation System

**Status:** implemented and live in `styles.css` + `nav.js` (loaded on all 55 pages), plus `home.css`/`home.js`/`index.html` (homepage only).
**Source brief:** `taskopia-design-animation-audit.md` (a live-DOM audit of a polished Webflow template, used as the reference spec — see that file for the full research).
**Goal of this pass:** close the gaps between what the audit recommended and what the site already had, without re-architecting what already worked.

---

## 0. What we found before touching anything

The site already had more of this system than expected:

| Audit recommendation | Site's status *before* this pass |
|---|---|
| Scroll-reveal (fade + slide-up, staggered) | ✅ Already built: `.reveal` / `.reveal-stagger` + a universal `IntersectionObserver` in `nav.js`, running on all 54 subpages. |
| Inverse letter-spacing (tight headings, wide labels) | ✅ Already correct: `h1,h2,h3{letter-spacing:-0.03em}`, nav/badge/eyebrow text uses `+0.04em` to `+0.2em`. |
| One rationed accent color | ✅ Already the pattern: `--accent` only ever fills buttons/links/small icon chips, never a section background. |
| Browser-chrome mockup framing | ✅ Partially: the homepage "One Inbox" panel hand-builds its own dark chrome bar (`.inbox-dash-topbar`, traffic-light dots) — good, but bespoke per-mockup, no reusable component. |
| Two-layer swipe-fill button hover | ❌ Missing — buttons only did lift + shadow + (on `.btn-accent`) a passive auto-looping shimmer. |
| Separate easing for entrances vs. hover | ❌ Backwards in one spot — the shared `.btn` hover transform used the *bouncy* `--ease-spring` curve, which the audit flags as exactly the kind of mixup that makes a clone feel "off." |
| Smoothed parallax | ❌ Missing — no scroll-tied parallax utility existed. |

**Bug found and fixed along the way:** `styles.css` defined `.reveal`/`.reveal-stagger` **twice** — an early block (450/400ms, deliberately shortened per an in-code comment fixing a "mid-fade during screenshot" bug) and a second, longer block (480/440ms) further down the file. Same selector, same specificity → the later one silently won the cascade, meaning that documented fix wasn't actually in effect. Removed the duplicate; the 450/400ms version is now the only definition. (Same root-cause pattern as the CSS override issue from earlier sessions — verify the *computed* winner, not just presence of a rule.)

---

## 1. Easing vocabulary (the rule underneath everything else)

```css
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);  /* bouncy — ENTRANCES ONLY */
--ease-ui:     cubic-bezier(0.4, 0, 0.2, 1);              /* flat, fast — HOVER/CLICK ONLY */
```

**Rule:** anything that plays once when content *appears* (reveal-on-scroll, a badge popping in, a counter landing) may use `--ease-spring` or the reveal curve (`--ease-out`). Anything that responds to a *user action* (hover, click, focus) uses `--ease-ui` — flat, ~200–380ms, no overshoot. Mixing these is the single biggest tell that separates a template clone from the real thing.

`styles.css`'s shared `.btn` rule was corrected to use `--ease-ui` for hover (it was using `--ease-spring` before).

---

## 2. Reveal-on-scroll system

Base system (unchanged, already good) — apply to any block:

```html
<div class="reveal">fades up 20px, once, on scroll</div>
<div class="reveal-stagger">
  <div style="--i:0">card 1</div>
  <div style="--i:1">card 2 (+90ms)</div>
  <div style="--i:2">card 3 (+180ms)</div>
</div>
```

**New this pass — opt-in direction/emphasis variants** (same observer in `nav.js`, same duration family, different initial offset):

```html
<div class="reveal-left">...</div>   <!-- slides in from the left -->
<div class="reveal-right">...</div>  <!-- slides in from the right -->
<div class="reveal-grow">...</div>   <!-- scales up from 0.85 -->
<div class="reveal-pop">...</div>    <!-- fast settle + spring overshoot — for ONE-OFF badges/counters -->
```

**Use `.reveal` for everything by default.** The audit's core lesson is that *consistency* (one recipe, everywhere) reads as more expensive than variety — the variants exist for the occasional emphasis moment (a badge, a stat, a "new" tag), not as a per-section design choice. `.reveal-pop` is now live on the homepage hero's top pill (`.hero-top-pill`) as the one example — it pops in on load instead of just sitting static.

⚠️ Don't apply any reveal class to an element that already has a continuous CSS `animation` on `transform` (e.g. `.hero-stat-card-3x`'s floating loop) — the animation will fight the entrance transition. Wrap it in a parent instead if you want that element to also reveal.

---

## 3. Button system — two-layer swipe-fill

Every button under `.btn-accent`, `.btn-brand`, `.btn-cta` (in `styles.css`), and the homepage's `.hero-btn-primary` (in `home.css`) now sweeps a second ink-colored layer up from the bottom on hover, instead of a flat color/shadow change:

```css
.btn-accent, .btn-brand, .btn-cta {
  position: relative;
  isolation: isolate;              /* lets the fill sit at z-index:-1 without hiding the label */
}
.btn-accent::before, .btn-brand::before, .btn-cta::before {
  content: ""; position: absolute; inset: 0; z-index: -1; border-radius: inherit;
  background: var(--dark-canvas);  /* swap per-button if needed, see .btn-cta::before */
  transform: translateY(100%);
  transition: transform 380ms var(--ease-ui);
}
.btn-accent:hover::before { transform: translateY(0); }
```

**No markup changes required** — the trick is `isolation: isolate` on the button plus `z-index: -1` on the `::before`: per CSS stacking rules, a negative-z-index pseudo-element paints *below* the button's own in-flow text but *above* the button's own background, so the label stays legible through the whole sweep without needing a wrapping `<span>`.

The existing passive shimmer (`.btn-accent::after`, a light sweep that loops every 5s) is untouched and layers fine on top of this — different pseudo-element, different trigger.

---

## 4. Browser-chrome mockup frame (new reusable component)

```html
<div class="browser-frame">
  <div class="browser-frame-bar">
    <span class="browser-frame-dot browser-frame-dot--red"></span>
    <span class="browser-frame-dot browser-frame-dot--yellow"></span>
    <span class="browser-frame-dot browser-frame-dot--green"></span>
  </div>
  <div class="browser-frame-body">
    <img src="..." alt="...">
  </div>
</div>
```

White rounded card, real traffic-light colors (`#FF5F56`/`#FFBD2E`/`#27C93F` — the same values already used in the homepage's One Inbox dashboard chrome), soft radial pink→purple→blue wash behind it, soft "lift" shadow (`0 18px 40px -18px rgba(15,23,42,.45)`, matching the audit's measured close/heavy-blur shadow style).

**When to use it vs. the homepage's hand-built dashboard chrome:** the One Inbox section (`.inbox-dash--pro` in `home.css`) is a full bespoke dark dashboard — keep building those by hand when you need real interactive-looking UI. Reach for `.browser-frame` when you just need to drop a static screenshot, video, or simple panel into a premium "framed" look without hand-building a whole chrome bar each time (industry pages, case studies, blog posts). Not yet deployed anywhere — the site currently has no bare unframed screenshots to retrofit (everything is a hand-built live mockup already), so this is ready for the next one you add.

---

## 5. Smoothed parallax (new, opt-in)

```html
<div data-parallax="0.15">drifts at 15% of scroll speed, heavily smoothed</div>
<div data-parallax="0.3" data-parallax-smoothing="0.05">stronger drift, even gentler lag</div>
```

Implemented in `nav.js`, active on every page automatically wherever `[data-parallax]` appears — no per-page wiring needed. Respects `prefers-reduced-motion` (skipped entirely). Mirrors the audit's measured Webflow config: heavy smoothing (default `0.08`) so the element gently lags the scroll position instead of tracking it 1:1, which is what keeps parallax feeling fluid instead of jittery. Not yet applied to any element — a good next candidate is the hero's ambient mesh blobs (`.hero-mesh-blob`) or the atmo blobs used across section backgrounds.

---

## 6. What's live right now vs. what's next

**Live everywhere (all 55 pages, via `styles.css`/`nav.js`):**
- Fixed duplicate `.reveal` definition (real bug, now correct 450/400ms everywhere)
- `--ease-ui` token + corrected hover easing on the shared `.btn` system
- Two-layer swipe-fill on `.btn-accent` / `.btn-brand` / `.btn-cta`
- Reveal variants (`.reveal-left/right/grow/pop`) available to use
- `.browser-frame` component available to use
- `data-parallax` utility available to use

**Live on the homepage specifically:**
- `.hero-btn-primary` (the actual "Start 14-day free trial" CTA) has the swipe-fill
- `.hero-top-pill` now pops in with `.reveal-pop` instead of sitting static

**Good next steps (not done in this pass — flagging for prioritization, not silently skipped):**
- Roll `.reveal-pop` onto a few more one-off badges/counters across subpages
- Apply `data-parallax` to the hero mesh blobs or section-background atmo blobs for a subtle depth layer
- Wrap the next screenshot/video mockup that gets added anywhere on the site in `.browser-frame` instead of a bare image
- If useful, extend the swipe-fill treatment to `.btn-outline`/`.btn-cta-outline` (currently untouched — outline buttons keep their simpler border/lift hover, which reads fine but wasn't part of this pass's scope)
