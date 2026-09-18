# Shared visual specification

## Tokens

| Role | Target |
| --- | --- |
| Main canvas | #FFFFFF |
| Quiet canvas | #FAFCFF |
| Alternate / integration canvas | #F3F7FF |
| Card / UI surface | #FFFFFF |
| Primary ink | #0A1020 |
| Body ink | #475A76 |
| Secondary ink | #5E6F87; verify actual contrast on its background |
| Primary action | #0868F7; white text; verify small-label contrast |
| Action hover | #0755D8 |
| Hairline | #DCE7F5 |
| Control radius | 10–12px |
| Product-panel radius | 16–20px |
| Section container | max-width 1280px; 32px desktop / 24px tablet / 20px mobile gutters |
| Elevation | 0 12px 30px rgba(20,45,85,.07), only on genuinely raised product panels |

Use the site's existing token names where possible and map the values once. Do not globally alias every dark token to a light one: code windows and native product chrome may legitimately need dark colors.

## Typography and density

Schibsted Grotesk for branding, headings, body and controls. JetBrains Mono only for real identifiers, timestamps and technical values. Do not introduce a third general-purpose typeface. Keep the homepage trust component's existing reference-driven Arial override within that component unless separately redesigned.

- H1: 52–60px desktop, 40–48px tablet, 32–38px mobile; 1.06–1.12 line height; tracking no tighter than -.04em.
- H2: 34–42px desktop, 28–32px mobile. Avoid oversized 72px headings on subpages.
- H3: 20–24px. Body: 16–18px, line-height 1.5–1.65, 60–70ch measure. Mockup UI: 13–15px; small auxiliary metadata 11–12px minimum.
- Standard section padding: 72–88px desktop, 48–56px mobile. Internal gaps: 12/16/24/32/48px. Keep approved homepage trust padding compact.
- Never set fixed section heights for text. Target dimensions in briefs are mockup guidance; allow content to expand under zoom and translations.

## Navigation and breadcrumb

Implement a shared header contract rather than copying homepage-only selectors into each page. header#nav is outside main#top; #top .nav rules do not apply. Keep nav.js as the single scroll/menu state owner.

- Header outer box: 76px desktop / 64px mobile including border; set box-sizing:border-box and derive inner height accordingly. Audit measured Home is currently 77/65px.
- Logo: approved blue transparent mark, 42px wide desktop / 36px mobile, natural ratio; wordmark 23px / 21px.
- All direct links AND dropdown buttons: display:flex; align-items:center; min-height:44px; 14–15px text. This explicitly prevents the prior Pricing misalignment.
- Top over a hero: transparent. Scrolled >40px: near-white 94% surface, subtle border, restrained shadow. Open menus: opaque/readable regardless of scroll.
- No header-height animation. Transition only fill/border/shadow for 180–220ms; reduced-motion removes transitions.
- Use one --site-nav-height for scrim top, fixed mega-menu top, mobile menu clearance, hero padding and anchor offsets. Break to mobile before the links collide; test 981–1100px carefully.
- Unsupported backdrop-filter: opaque #FAFCFF fallback. A blur must not establish an unexpected containing block for fixed child menus; verify their computed top while scrolled.
- Breadcrumb: 12–13px, container-aligned, one row below header. Header + breadcrumb + hero clearance must be calculated once.
- Normal page restoration and explicit anchors must work. Do not force every page load to scroll to zero as a styling fix.

## Hero and product mockups

Use the existing content layout for each page: split product heroes, editorial article headers, operational forms. Product pages get a restrained white/blue hero and a real DOM-based demonstration. Keep the background light behind text and concentrate atmosphere behind the mockup; at most two low-opacity contours at the outer edges.

Mockup pattern: one customer question → grounded information → visible action/result. Represent the page's actual feature. Keep text live and selectable. Never rasterize a dashboard or chat just to match a comp. Include initial, loading, result, empty and human-handoff/error states where the feature needs them; label example records as illustrative rather than customer proof.

Keep native channel colors inside accurate UI or official logos. No robot art or abstract 3D as the main explanation. Reuse existing signature-* components and improve them instead of deleting them for a generic card grid.

## Light integrations

Create an explicit light integration variant, e.g. .section--integrations-light. Migrate the relevant markup and the .integ-logo-row child rules together.

- Section background #F3F7FF; navy heading/body; two columns at desktop, one below 900px.
- Integration rows white, 1px #DCE7F5 border, 14–16px radius, 16–20px padding, provider logo 24–28px, 15px title and 13px description.
- Provider names stay text. Use official, locally stored SVG marks; include source and license/brand-use notes.
- A real destination can say View integration. Noninteractive rows use Supported or a plain capability note. Do not show Connected or operational Connect buttons without the corresponding state/flow.
- Remove dark tokens from .t1, .t2, svg and badges in this variant. Check default, hover, focus and disabled appearances.

## Final CTA

Create a shared .final-cta--light variant with #EFF5FF background and a white/blue fade near the footer. Heading navy, 36–42px desktop / 28–32px mobile; supporting text 16px; 48–52px blue primary button, 12px radius. Section padding 56–72px desktop / 40–48px mobile. Typical desktop total 260–340px, not a fixed height.

Retain each page's specific closing message and working destination. Reuse the homepage's action language only where the same action is genuinely offered. Legal and contact pages can end with a contextual help link rather than a trial promotion. A secondary Book a demo link is optional when already supported. Never add trial duration, guarantees, customer counts or savings claims.

## Footer and forms

One footer logo, typography, column rhythm, newsletter style and status treatment. Keep current links; 4–5 columns desktop, 2 columns tablet, stacked mobile. Light surface and very quiet decorative field; no unrelated saturated background. Newsletter input/button must have labels, visible validation and truthful submission state. Static forms must not simulate successful delivery.

## Accessibility and behavior

Body text contrast >=4.5:1; large text >=3:1; actual computed colors tested. 44px interactive targets; clear focus outline. Keyboard menus, Escape close, mobile scroll lock, focus return, accordion state, tabs and form feedback verified. Native link semantics for navigation and button semantics for state changes. All page content remains accessible with reduced motion and at 200% zoom. Decorative images get empty alt; meaningful images get descriptive alt after asset selection.
