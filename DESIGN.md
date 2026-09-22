---
name: StepsAI Product Studio
description: A clear, bright product studio for conversational business automation.
colors:
  ink: "#090E17"
  body: "#475569"
  paper: "#FFFFFF"
  canvas: "#FAFBFC"
  wash: "#EFF6FF"
  brand-blue: "#2563EB"
  brand-blue-deep: "#1D4ED8"
  line: "#E2E8F0"
  success: "#10B981"
typography:
  display:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 64px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 650
    lineHeight: 1
rounded:
  sm: "8px"
  md: "12px"
  lg: "20px"
  xl: "32px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "44px"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-product:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: StepsAI Product Studio

## Overview

**Creative North Star: "The Luminous Product Studio"**

StepsAI uses a bright, precise visual world that makes complex automation feel understandable. Paper-white product surfaces sit on pale-blue washes, while navy type and a focused royal-blue accent create the hierarchy. Product demonstrations carry the story; decoration stays quiet enough for the UI to remain credible.

The system favors useful density, visible outcomes, and a connected-agent narrative. On phones, examples become focused views rather than scaled desktop canvases.

**Key Characteristics:**
- Bright paper surfaces on cool, low-contrast backgrounds.
- Strong navy hierarchy with one primary blue action color.
- Real product UI and connected business outcomes as the main visual proof.
- Compact navigation, restrained depth, and native responsive reflow.

## Colors

Royal blue is scarce and purposeful; pale blue establishes atmosphere without lowering readability.

- **Midnight Ink** (#090E17): headlines and high-priority labels.
- **Slate Body** (#475569): descriptions and supporting copy.
- **Paper** (#FFFFFF): cards, menus, and product surfaces.
- **Cool Canvas** (#FAFBFC): page foundation.
- **Agent Blue** (#2563EB): primary actions, selection, and emphasis.
- **Hairline** (#E2E8F0): structure and separation.
- **Success Green** (#10B981): live and completed states only.

**The One Blue Rule.** Use royal blue for actions, active state, and one phrase of emphasis; do not turn whole sections blue.

## Typography

**Display Font:** Inter with system sans-serif fallbacks

**Body Font:** Inter with system sans-serif fallbacks

**Label Font:** Inter; Geist Mono is reserved for compact technical metadata.

Display type is broad, dark, and tightly tracked. Body copy is calm and limited in line length; labels stay short and functional.

- **Display** (800, `clamp(34px, 4.4vw, 64px)`, 1.05): hero and section promises.
- **Headline** (700–800, 30–44px, 1.08): section titles.
- **Title** (650–700, 17–22px, 1.2): cards and product panels.
- **Body** (400–500, 14–16px, 1.5–1.65): explanations, generally under 70 characters per line.
- **Label** (650, 11–13px): tabs, states, and compact navigation.

## Layout

The shared maximum width is 1280px with safe inline padding. Desktop pages use editorial two- and three-column compositions with generous negative space. Dense demonstrations sit inside bounded product stages. At 800px and below, layouts reflow into one column; selectors become compact tab rows and only the active detailed example remains visible. Never preserve a wide desktop canvas through forced minimum widths or page-level horizontal scrolling.

## Elevation & Depth

Depth is ambient. Hairline borders establish structure; low shadows separate resting cards and a slightly stronger diffuse shadow marks a focused product stage. Hover changes use a one- or two-pixel lift with no bounce.

- **Low surface:** `0 12px 34px -24px rgba(20, 48, 92, .34)`.
- **Focused stage:** `0 28px 70px -38px rgba(18, 67, 151, .42)`.

**The Quiet Depth Rule.** A shadow clarifies layer or focus; it never becomes decoration.

## Shapes

Small controls use 8–12px radii, cards use 15–20px, and major frames may reach 32px. Borders are cool gray-blue hairlines. Pills are reserved for status, tabs, and compact metadata.

## Components

### Buttons
- Primary buttons use Agent Blue, white text, 10–12px corners, and restrained blue depth.
- Hover moves up by at most 1px; focus uses a visible blue outline.
- Secondary buttons use paper or transparent surfaces with a hairline border.

### Cards and Product Stages
- Cards use paper, a hairline border, and 15–20px corners.
- Product stages may use a pale-blue atmospheric wash and a stronger ambient shadow.
- Related capabilities must expose a shared context or outcome instead of reading as unrelated tiles.

### Navigation and Mega Menus
- Desktop mega menus are compact, centered, illustration-led panels with selectable text.
- Hover opens only on fine pointers; click and keyboard remain first-class.
- Mobile uses a scroll-locked disclosure menu with contained focus and Escape close.

### Tabs
- Tabs use roving focus, arrow keys, Home/End, `aria-controls`, and labelled tab panels.
- On phones, tab rows may scroll horizontally, but the page itself must not.

## Do's and Don'ts

- **Do** lead with clear customer questions, product actions, and measurable outcomes.
- **Do** keep mobile examples focused and native to the viewport.
- **Do** use semantic color and reduced-motion fallbacks.
- **Don't** scale an entire desktop dashboard down to phone size.
- **Don't** combine heavy blur, dark scrims, and large shadows.
- **Don't** stack decorative cards inside decorative cards.
- **Don't** canonize promotional eyebrow labels as a required pattern; existing legacy instances should be removed as pages migrate.
