# Mockup and image production plan

This is a production specification, not a claim that new images or final visual comps have already been created. Exact image choices and external licenses have not been researched in this audit. Do not purchase stock or publish a replacement image without checking its rights and relevance.

## Produce shared components first

1. Navigation state board at 1440×900 and 390×844: top, scrolled, open Product menu, mobile menu. Use the same header instance in every page mockup.
2. Light integration component at 1280×400 and 390px content width: official provider mark, capability description, honest informational/action state.
3. Light final CTA at 1280×320 and mobile auto height. Show a product-specific headline and existing destination.
4. Footer desktop/mobile with approved blue logo and truthful newsletter states.
5. Sales Agent pilot: full desktop and mobile flow plus readable individual hero, capability, journey, integration, FAQ and CTA boards. Never compress every section into one tiny reference image.

Use browser-rendered HTML or a design file for precise mockups. Image generation can supply illustrative/photo assets but must not become the source of UI text, partner logos, pricing values or controls. Keep native editable components as the production source of truth.

## Asset rules

- Existing blue mark: images/stepsai-logo-blue-transparent.png. Inspect edge quality against #FFFFFF and #F3F7FF before reuse. Keep original JPEG. Prefer an official transparent/vector source when available; do not generate a replacement brand mark.
- Existing Meta and Shopify partner icons are under images/partners/. Inspect before reuse. Other providers need correct official marks; generic pictograms are not provider branding.
- Reusable product-photo candidates: product-grandad-shirt.jpg, product-mandarin-shirt.jpg, product-oxford-shirts.jpg, product-diamond-necklace.jpg, product-zircon-set.jpg, product-motichoor-laddu.jpg. Confirm that image and copy describe the same product before placing it in a mockup.
- Existing contextual candidates: hero-ecommerce.jpg, hero-edtech.jpg, hero-healthcare.jpg, hero-hotels.jpg, hero-real-estate.jpg, ecommerce-luxury.jpg, healthcare-luxury.jpg, real-estate-luxury.jpg, team-collaboration.jpg. Existence is verified; licensing, provenance and suitability remain to be checked.
- Existing avatar/portrait assets are not proof of employee/customer identity. Never attach stock faces to named people, testimonials or case studies.
- Every retained or sourced image gets a manifest entry: output path, placement, source URL or user-provided origin, license, rights holder, crop/aspect, actual dimensions, alt text, approval and compression status.

## Stock photography decision

Most product, channel, role, integration, pricing, legal and help pages need no new stock images. They need better product UI. Use one optional contextual photo for an industry story only if it clarifies the business setting. Company/team/founder pages require real supplied photography for named people. A stock workplace can illustrate an environment only with clearly non-documentary context.

For an industry photo, brief: candid operational setting specific to that industry; soft natural daylight; cool-neutral whites; plausible real objects; no visible customer data; no fake product branding; no posed handshake or robot; no baked-in text. Landscape 3:2 or 16:9; subject offset to preserve crop flexibility. Healthcare/legal scenes must not imply endorsements, actual client cases, or professional advice.

For a product image, brief: isolated product on neutral background, accurate silhouette/color/material/variant, even light, no added copy. Use the same SKU photo across recommendation and checkout states. Do not call an unrelated stock shirt the named linen shirt merely because it fits the layout.

## Technical delivery

Photos: 1600–2000px source for large use, responsive 480/800/1200 variants, WebP/AVIF where supported, explicit width/height and a fallback. Aim for <200KB hero/context photos and <80KB thumbnails where visual quality allows. SVG logos stay vector and have a viewBox. Do not upscale a tiny asset to fill a hero. Lazy-load below-fold images; do not lazy-load the primary LCP image.

Mockup screens: DOM/CSS preferred. If reference screenshots are needed, desktop 1440×900 and mobile 390×844, plus individual section captures. UI source must remain legible at 100% scale. Use illustration captions when data is hypothetical. Keep motion snapshots on a stable final frame.

## Per-page production manifest

[ASSET-MANIFEST.md](ASSET-MANIFEST.md) records the exact page scenario, candidate assets, mockup outputs and whether new stock is needed. Each individual page brief repeats its relevant requirements so a coding agent can implement that route independently.
