# StepsAI Homepage Next.js Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the current static `index.html` homepage to a Next.js + TypeScript + Tailwind + shadcn/ui + Framer Motion app at `next-app/`, pixel-for-pixel, with a reusable design-system foundation for later page migrations.

**Architecture:** App Router Next.js project living alongside the untouched static site. Six existing CSS files are imported verbatim (guarantees visual fidelity); Tailwind + shadcn/ui are used only for genuinely new code (primitives, shadcn behavior components). Content is data (`content/homepage.ts`), section components are presentational, a handful of components carry real interactive/animated logic ported from the current vanilla JS.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion (`motion`), Chart.js via `react-chartjs-2`, Vitest + React Testing Library, Playwright (visual parity).

**Spec:** `docs/superpowers/specs/2026-09-13-nextjs-migration-design.md`

## Global Constraints

- Pixel-for-pixel fidelity to the current `index.html` — no redesign in this phase.
- New project lives at `next-app/` inside the existing repo; the static site is untouched.
- The six existing stylesheets (`styles.css`, `home-v2.css`, `home-professional.css`, `home-finish.css`, `hero-premium.css`, `benefits.css`) are ported **verbatim**, load order preserved, and referenced by their **original class names** — never re-derived into Tailwind utilities.
- shadcn/ui primitives are installed for behavior/accessibility only; their rendered DOM must carry the original class names so the ported CSS still styles them.
- Framer Motion (`motion`) is the animation library; canvas-based effects (hero tunnel) stay vanilla `<canvas>`.
- Every section's exact copy comes from `content/homepage.ts` — no hardcoded strings in section components.
- Node package manager: npm (matches `create-next-app` default; no reason to introduce pnpm/yarn here).

---

## File Structure

```
next-app/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    ui/                    # shadcn/ui primitives
    primitives/
      GradText.tsx
      SectionHeading.tsx
      RevealOnScroll.tsx
      Marquee.tsx
      StatPlate.tsx
      ChannelIcon.tsx      # shared ICONS SVG set
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      TrustStrip.tsx
      WhatItDoes.tsx
      Industries.tsx
      Channels.tsx
      Marketing.tsx
      Integrations.tsx
      Workflows.tsx
      Analytics.tsx
      Inbox.tsx
      CRM.tsx
      Setup.tsx
      WallOfLove.tsx
      FAQ.tsx
      FinalCTA.tsx
  content/
    types.ts
    homepage.ts
  lib/
    utils.ts
  public/
    images/                # ported from the static site's /images
  tailwind.config.ts
  package.json
  vitest.config.ts
  playwright.config.ts
```

---

## Task 1: Scaffold the Next.js project

**Files:**
- Create: `next-app/` (via `create-next-app`)
- Modify: none

**Interfaces:**
- Produces: a running Next.js dev server at `next-app/`, with TypeScript, Tailwind, ESLint, App Router enabled; `motion`, shadcn/ui CLI initialized, `chart.js` + `react-chartjs-2`, `vitest`, `@testing-library/react`, `@playwright/test` installed.

- [ ] **Step 1: Scaffold with create-next-app**

Run from the repo root:

```bash
npx create-next-app@latest next-app --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --use-npm
```

Answer prompts: no Turbopack changes needed, accept defaults.

- [ ] **Step 2: Install remaining dependencies**

```bash
cd next-app
npm install motion chart.js react-chartjs-2
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @playwright/test
```

- [ ] **Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init -d
```

Accept the defaults (New York style, slate base color, CSS variables) — these get overridden by our ported CSS anyway per the design-system amendment.

- [ ] **Step 4: Add vitest config**

Create `next-app/vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
})
```

Create `next-app/vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest"
```

Add to `next-app/package.json` scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 5: Verify the dev server runs**

Run: `npm run dev` (from `next-app/`)
Expected: server starts on `http://localhost:3000`, default Next.js starter page renders with no errors in the terminal.

Stop the server (Ctrl+C).

- [ ] **Step 6: Run the test runner with no tests yet**

Run: `npm test`
Expected: "No test files found" (not a crash) — confirms vitest config is wired correctly.

- [ ] **Step 7: Commit**

```bash
git add next-app/
git commit -m "chore: scaffold Next.js app for homepage migration"
```

---

## Task 2: Port global CSS, fonts, and images verbatim

**Files:**
- Create: `next-app/app/globals.css`
- Copy: `styles.css`, `home-v2.css`, `home-professional.css`, `home-finish.css`, `hero-premium.css`, `benefits.css` → `next-app/app/`
- Copy: `images/` → `next-app/public/images/`
- Modify: `next-app/tailwind.config.ts`

**Interfaces:**
- Produces: `next-app/app/globals.css` importing all six stylesheets in original order; every later component can use the original class names (`.badge`, `.sec-title`, `.grad-text`, `.container`, `.reveal`, etc.) and get pixel-identical styling.

- [ ] **Step 1: Copy the six CSS files as-is**

```bash
cd "next-app"
cp ../styles.css ./app/styles.css
cp ../home-v2.css ./app/home-v2.css
cp ../home-professional.css ./app/home-professional.css
cp ../home-finish.css ./app/home-finish.css
cp ../hero-premium.css ./app/hero-premium.css
cp ../benefits.css ./app/benefits.css
```

- [ ] **Step 2: Write globals.css to import them in the original cascade order**

Replace the contents of `next-app/app/globals.css` with:

```css
@import "./styles.css";
@import "./home-v2.css";
@import "./home-professional.css";
@import "./home-finish.css";
@import "./hero-premium.css";
@import "./benefits.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind's layers come **after** the ported CSS so Tailwind utility classes (used only in new primitives) never accidentally lose to a legacy rule of equal specificity, while the ported CSS's own internal cascade order (which the original site's `<link>` order encodes) is preserved exactly among itself.

- [ ] **Step 3: Copy the images directory**

```bash
cp -r ../images ./public/images
```

- [ ] **Step 4: Wire the Google Fonts import**

In `next-app/app/layout.tsx`, add to the `<head>` (or use `next/font` — for byte-for-byte fidelity with the current `@font-face`-less Google Fonts `<link>` approach, keep it as a manual link):

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&family=Caveat:wght@500;600;700&display=swap"
        />
      </head>
      <body id="top">{children}</body>
    </html>
  )
}
```

Remove the default `app/layout.tsx` font imports (`next/font/google` Geist setup) that `create-next-app` scaffolded, and the default `globals.css` body font-family override, since the ported `styles.css` already sets `--font-sans`/`--font-mono` and applies them.

- [ ] **Step 5: Bridge Tailwind's theme to the ported CSS custom properties**

Edit `next-app/tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
        "accent-bright": "var(--accent-bright)",
        "accent-tint": "var(--accent-tint)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "bg-surface": "var(--bg-surface)",
        "bg-base": "var(--bg-base)",
        "border-subtle": "var(--border-subtle)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
} satisfies Config
```

This means any **new** Tailwind utility class (`bg-accent`, `rounded-lg`, etc.) used in a primitive resolves to the exact same value as the ported CSS's custom properties — one source of truth, two ways to reach it.

- [ ] **Step 6: Verify a ported class renders correctly**

Temporarily add to `next-app/app/page.tsx`:

```tsx
export default function Home() {
  return <span className="badge">Test badge</span>
}
```

Run: `npm run dev`, open `http://localhost:3000`
Expected: the badge renders as a small blue pill (uppercase, rounded, `#eff6ff`-ish background per the cascade) — visually matching a `.badge` on the live static homepage, not an unstyled `<span>`.

Remove the temporary test markup from `page.tsx` (Task 8 replaces it properly).

- [ ] **Step 7: Commit**

```bash
git add next-app/
git commit -m "feat: port global CSS, fonts, and images verbatim"
```

---

## Task 3: Content types and `content/homepage.ts`

**Files:**
- Create: `next-app/content/types.ts`
- Create: `next-app/content/homepage.ts`
- Test: `next-app/content/homepage.test.ts`

**Interfaces:**
- Produces: typed exports `hero`, `trustStrip`, `whatItDoes`, `industries`, `channels`, `marketing`, `integrations`, `workflows`, `analytics`, `inbox`, `crm`, `setup`, `wallOfLove`, `faq`, `finalCta` — every later section task imports its slice from here.

- [ ] **Step 1: Write the failing test**

`next-app/content/homepage.test.ts`:

```ts
import { describe, it, expect } from "vitest"
import { hero, faq, wallOfLove } from "./homepage"

describe("homepage content", () => {
  it("hero has the exact approved copy", () => {
    expect(hero.h1).toBe("Turn more visitors and messages into")
    expect(hero.h1Grad).toBe("sales, leads, and bookings.")
    expect(hero.ticks).toEqual(["Free to start", "No code", "Live in minutes"])
  })

  it("faq has 12 items", () => {
    expect(faq.items).toHaveLength(12)
  })

  it("wall of love has 11 testimonials", () => {
    const total = wallOfLove.columns.reduce((n, col) => n + col.length, 0)
    expect(total).toBe(11)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- homepage.test.ts`
Expected: FAIL — `./homepage` module not found.

- [ ] **Step 3: Write `content/types.ts`**

```ts
export interface HeroContent {
  badge: string
  h1: string
  h1Grad: string
  sub: string
  ticks: string[]
  metrics: { value: string; label: string }[]
  notes: string[]
  scribble: string
}

export interface TrustStripContent {
  title: string
  badges: string[]
}

export interface SiaTab {
  name: string
  desc: string
}

export interface SectionHeadingContent {
  badge: string
  h2: string
  h2Grad: string
  sub: string
}

export interface IndustryCard {
  key: string
  collapsedTitle: string
  collapsedSub: string
  kicker: string
  name: string
  story: string
  handles: string
  automates: string
  cta: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}
```

- [ ] **Step 4: Write `content/homepage.ts` — Hero, TrustStrip, WhatItDoes**

Create `next-app/content/homepage.ts` starting with:

```ts
import type {
  HeroContent,
  TrustStripContent,
  SiaTab,
  SectionHeadingContent,
  IndustryCard,
  FaqItem,
  Testimonial,
} from "./types"

export const hero: HeroContent = {
  badge: "AI AGENT FOR SALES AND SUPPORT",
  h1: "Turn more visitors and messages into",
  h1Grad: "sales, leads, and bookings.",
  sub: "Steps AI answers customer questions on your website, WhatsApp, Instagram and Messenger. Your agent connects to your store, your calendar and your CRM, so every answer comes from your real records instead of a guess. Live in about five minutes.",
  ticks: ["Free to start", "No code", "Live in minutes"],
  metrics: [
    { value: "8 in 10", label: "questions answered without you" },
    { value: "95+", label: "languages" },
    { value: "0.5s", label: "average reply time" },
    { value: "3×", label: "conversion lift, results vary" },
  ],
  notes: ["Answers questions", "Checks your records", "Takes action", "Gets results"],
  scribble: "Real conversations.\nReal records.\nReal results.",
}

export const trustStrip: TrustStripContent = {
  title: "Trusted by 2,500+ growing brands",
  badges: ["Meta Business Partner", "Shopify Partner"],
}

export const whatItDoes: SectionHeadingContent = {
  badge: "What it does",
  h2: "Your whole front desk, run by",
  h2Grad: "one AI agent.",
  sub: 'One agent that sells, answers questions, books appointments, and follows up. It has never once said, "Let me check and get back to you."',
}

export const siaTabs: SiaTab[] = [
  { name: "Sales", desc: "Picks the right product, answers the doubt, and adds it to the cart." },
  { name: "Support", desc: "Opens the real order, gives the real status, and keeps the customer calm." },
  { name: "Lead capture", desc: "Turns a chat into a named contact in your CRM, with the full conversation attached." },
  { name: "Booking", desc: "Shows your open slots and confirms the appointment inside the chat." },
  { name: "Marketing", desc: "Starts with a WhatsApp broadcast and keeps going as a real conversation." },
]
```

- [ ] **Step 5: Append Industries, Channels, Marketing, Integrations**

Append to `content/homepage.ts`:

```ts
export const industries: SectionHeadingContent = {
  badge: "Industries",
  h2: "Works in your industry,",
  h2Grad: "from day one.",
  sub: "Steps AI reads your own website, products, and documents, so it sounds like your best staff member on a good day.",
}

export const industryCards: IndustryCard[] = [
  {
    key: "ecommerce",
    collapsedTitle: "E-Commerce",
    collapsedSub: "Sales and checkout",
    kicker: "Sells like your best floor staff, even at 11 pm",
    name: "E-Commerce & D2C",
    story:
      "“Do you have this in medium?” lands at 11 pm on Instagram. Your agent checks live Shopify stock, shows the exact product, adds it to the cart, and you wake up to the order already placed.",
    handles: "Product Questions · Live Stock · Order Tracking · Returns & Exchanges · Recommendations",
    automates: "Cart Recovery · Checkout Nudges · Shipping Updates · Review Requests",
    cta: "See the ecommerce AI agent →",
  },
  {
    key: "real-estate",
    collapsedTitle: "Real Estate",
    collapsedSub: "Enquiries and viewings",
    kicker: "Qualifies like your sharpest broker, at midnight",
    name: "Real Estate",
    story:
      "Someone asks the price of a 2BHK at midnight. Your agent answers, sends the floor plan, and captures their budget and timeline while they are still typing. Your team wakes up to a hot lead, not a missed call.",
    handles: "Property Questions · Floor Plans & Brochures · Budget & Timeline · Site Visit Booking · Hot Lead Routing",
    automates: "Site Visit Reminders · Post-Visit Follow-Up · New Listing Alerts · Cold Enquiry Revival · High Budget Alerts",
    cta: "See the real estate AI agent →",
  },
  {
    key: "healthcare",
    collapsedTitle: "Healthcare",
    collapsedSub: "Appointments and support",
    kicker: "Runs the front desk without putting anyone on hold",
    name: "Healthcare & Clinics",
    story:
      "Your front desk repeats timings, directions and insurance rules forty times a day. Your agent takes every one of them and books the slot, then sends anything medical to a real person straight away.",
    handles: "Appointment Booking · Rescheduling · Insurance Questions · Timings & Directions · Medical Escalation",
    automates: "Appointment Reminders · No-Show Follow-Up · Report Ready Alerts · Follow-Up Visit Nudges · Urgent Escalation",
    cta: "See the healthcare AI agent →",
  },
  {
    key: "education",
    collapsedTitle: "Education",
    collapsedSub: "Admissions and follow-up",
    kicker: "Counsels every enquiry, in the language they wrote in",
    name: "Education & Training",
    story:
      "A student asks about fees at 11 pm, then goes quiet for a week. Your agent replies in their own language, follows up without being told to, and walks them through the application form.",
    handles: "Fee & Eligibility · Application Walkthrough · Prospectus & Dates · Counsellor Calls · 95+ Languages",
    automates: "Application Drop-Off Follow-Up · Deadline Reminders · Missing Document Nudges · Fee Instalment Reminders",
    cta: "See the education AI agent →",
  },
]

export const industriesFoot = {
  cta: "Explore more industries →",
  note: "Not on this list? Your agent learns from your own pages and documents, whatever business you run.",
}

export const channels: SectionHeadingContent = {
  badge: "Channels",
  h2: "Set up once,",
  h2Grad: "show up on every channel.",
  sub: "Website, WhatsApp, Instagram, and Messenger, answered by the same agent. Change your return policy once, and all four say the new thing.",
}

export const channelList = [
  { key: "website", name: "Website", desc: "Embedded chat and help centre." },
  { key: "shopify", name: "Shopify & Store", desc: "Live inventory and order sync." },
  { key: "whatsapp", name: "WhatsApp", desc: "Official Business API and catalogues." },
  { key: "instagram", name: "Instagram", desc: "Direct messages and story replies." },
  { key: "messenger", name: "Messenger", desc: "Page messages and order tracking." },
  { key: "standalone", name: "Standalone page", desc: "Branded, shareable anywhere." },
]

export const marketing: SectionHeadingContent = {
  badge: "WhatsApp · Instagram",
  h2: "Turn broadcasts and comments into",
  h2Grad: "private conversations that sell.",
  sub: "Steps AI sends your offer to your whole WhatsApp list, DMs everyone who comments on Instagram, and handles every reply that comes back.",
}

export const integrations: SectionHeadingContent = {
  badge: "Integrations",
  h2: "Connected to the tools",
  h2Grad: "your business already runs on.",
  sub: "Connect your store, CRM, calendar and courier with a login. No API key, no developer. Ask where an order is and your agent checks the courier rather than your shipping page.",
}
```

- [ ] **Step 6: Append Workflows, Analytics, Inbox, CRM, Setup**

```ts
export const workflows: SectionHeadingContent = {
  badge: "Workflows",
  h2: "Steps AI answers the customer, then",
  h2Grad: "does the work that follows.",
  sub: "Chases the abandoned cart at 2 am. Reminds the customer who forgot. Wakes up the lead that went quiet last week. Nobody has to remember any of it.",
}

export const analytics: SectionHeadingContent = {
  badge: "Analytics",
  h2: "Analytics that tell you",
  h2Grad: "what to fix.",
  sub: "See the top three questions your customers ask, the busiest hour of your week, and which channel is worth your time.",
}

export const analyticsPanelLabel = "A look at the Steps AI analytics dashboard."

export const inbox: SectionHeadingContent = {
  badge: "Unified Inbox",
  h2: "Four channels, one inbox.",
  h2Grad: "You step in only when you are needed.",
  sub: "Steps AI answers, checks, books, and closes. When something genuinely needs you, it arrives with the full chat already there.",
}

export const crm: SectionHeadingContent = {
  badge: "CRM",
  h2: "The CRM you never have",
  h2Grad: "to update.",
  sub: "Steps AI qualifies the lead, captures the details, and updates your CRM itself. No contact limit and no extra fee, however big your list gets.",
}

export const setup: SectionHeadingContent = {
  badge: "Setup",
  h2: "Live in about five minutes.",
  h2Grad: "No code, no developer, no card.",
  sub: "Test it free on your own business before you pay anything. Stuck? Our team will finish the setup with you on a call.",
}

export const setupSteps = [
  {
    n: 1,
    title: "Add your business",
    desc: "Give StepsAI your website, products, FAQs and documents.",
    caption: "Your business information powers better answers",
  },
  {
    n: 2,
    title: "Make it yours",
    desc: "Choose its tone, appearance and instructions.",
    caption: "Same voice. Same experience. All yours",
  },
  {
    n: 3,
    title: "Connect your tools",
    desc: "Add your store, CRM, calendar and customer channels.",
    caption: "Your tools. More possibilities",
  },
  {
    n: 4,
    title: "Go live",
    desc: "Test it and publish.",
    caption: "Real conversations. Real results",
  },
]
```

- [ ] **Step 7: Append Wall of Love, FAQ, Final CTA**

```ts
export const wallOfLove: { heading: SectionHeadingContent; columns: Testimonial[][] } = {
  heading: {
    badge: "Wall of love",
    h2: "What brand owners like you say",
    h2Grad: "about us",
    sub: "Same size of business. Same problem you have right now.",
  },
  columns: [
    [
      {
        quote:
          "Every hour a question sits unanswered is an hour that customer buys from someone else. The internet doesn't sleep, so our storefront couldn't keep sleeping either.",
        name: "Ananya Rao",
        role: "Founder, Verve Living",
      },
      {
        quote:
          "Front desk answers the same five questions a hundred times a day — check-in time, parking, late checkout. Now the agent handles all of it, and my team gets to actually talk to guests standing in the lobby.",
        name: "Rohan Mehta",
        role: "GM, The Ridgeway Boutique Hotel",
      },
      {
        quote:
          "We were losing free-trial signups because nobody replied fast enough. Average response time dropped under a minute, and trial-to-paid went up the same month.",
        name: "Neha Kapoor",
        role: "Growth Lead, Cloudline",
      },
      {
        quote:
          "Booking a class used to mean calling during business hours and hoping someone picked up. Now it's instant, any hour, any day, no missed calls.",
        name: "Sameer Joshi",
        role: "Owner, FlexFit Studios",
      },
    ],
    [
      {
        quote:
          "It used to take us a full day to process appointment requests. Now StepsAI handles the scheduling instantly, and our team only steps in for complex medical queries.",
        name: "David Chen",
        role: "Operations Manager, HealthPlus",
      },
      {
        quote:
          "New client inquiries used to sit in an inbox until someone had a free hour. Now every one gets a same-day reply, and half the intake form is already filled out by the time we call back.",
        name: "Meera Iyer",
        role: "Partner, Iyer & Associates",
      },
      {
        quote:
          "A lead used to sit until someone had a gap in their calendar. Now it's qualified and booked before the prospect even closes the tab.",
        name: "Arjun Nair",
        role: "Sales Director, Northbridge Realty",
      },
    ],
    [
      {
        quote:
          "The amount of abandoned carts we've recovered over WhatsApp alone paid for the entire year's subscription in the first two weeks. It's honestly incredible.",
        name: "Sarah Jenkins",
        role: "Director of E-Commerce, Thread&Co",
      },
      {
        quote:
          "Parents ask admission questions at 11pm, every night. The agent answers on the spot and only pings my team once someone's actually ready to apply.",
        name: "Karan Bhatt",
        role: "Admissions Head, BrightPath Learning",
      },
      {
        quote:
          "Customers who'd had one bad experience just went quiet. The agent follows up on its own a few days later, and a good chunk of them actually come back.",
        name: "Divya Menon",
        role: "Head of CX, Loopwear",
      },
    ],
  ],
}

export const faq: { heading: { badge: string; h2: string; h2Grad: string }; items: FaqItem[] } = {
  heading: { badge: "FAQ", h2: "Got questions?", h2Grad: "We have you covered." },
  items: [
    {
      q: "I tried a chatbot before and switched it off. Why is this different?",
      a: 'Most chatbots only read your website and repeat it back. Ask one where an order is and you get the shipping policy. Steps AI connects to your store and opens the actual order, so the customer gets the real answer. Connect your store and ask your agent where your last order is. That one test settles it.',
    },
    {
      q: "What is the difference between an AI agent and a chatbot?",
      a: "A chatbot reads your pages and answers from them. An AI agent connects to your systems and acts: it opens the order, adds to the cart, books the slot, raises the ticket, and brings in a person when it should. Steps AI is an agent.",
    },
    {
      q: "What if the AI says something wrong to my customer?",
      a: "Your agent cannot invent a price or a policy, and you set rules for topics it must never touch, like medical, legal or financial advice. When your agent does not know something, it says so and brings in a person instead of guessing.",
    },
    {
      q: "Will this replace my team?",
      a: 'No. Your team stops answering "where is my order" forty times a day and starts talking only to people who need a human.',
    },
    {
      q: "Will it work with the tools I already use?",
      a: "Yes. Steps AI connects to Shopify, WooCommerce, HubSpot, Zendesk, Klaviyo, Slack, Google Calendar, Calendly, Notion, Airtable and Google Drive. For Indian sellers, your agent also connects to Shiprocket, Delhivery, DTDC, iThink Logistics and WareIQ, so it checks the actual shipment rather than reading your shipping page. If you use none of these, your agent still works on its own.",
    },
    {
      q: "How long does setup take?",
      a: "About five minutes. Paste your website link, check what your agent has learned, turn it on. If you would like help, our team will do it with you on a call.",
    },
    {
      q: "Where does my agent work?",
      a: "Your website, WhatsApp, Instagram and Messenger, plus a branded chat page if you do not have a website. One setup covers all of them, and WhatsApp, Instagram and Messenger connect through a single Meta login.",
    },
    {
      q: "Which languages does it support?",
      a: "More than 95, including Hindi, Tamil, Telugu, Malayalam, Kannada, Marathi, Bengali, Gujarati, English and Arabic. Train your agent once and each customer gets a reply in the language they wrote in.",
    },
    {
      q: "Do I need a developer?",
      a: "No. If you can use WhatsApp, you can set this up. WordPress users install a plugin and never see any code.",
    },
    {
      q: "Who should not buy this?",
      a: "If very few people visit your website or message you today, Steps AI has nothing to answer, and you will not see a return. Bring the traffic first. This is the most common reason people cancel, and we would rather say it now than take your money.",
    },
    {
      q: "What happens when my agent cannot answer?",
      a: "Your customer is told a person will help, and your team gets the full chat with everything already said. The customer never has to explain twice.",
    },
    {
      q: "Can I cancel?",
      a: "Yes, any time. Nothing is locked in, and you can export your data for up to thirty days after you leave.",
    },
  ],
}

export const finalCta = {
  topline: "Your business. Always in the conversation.",
  h2: "Turn the messages you are getting",
  h2Grad: "into the sales you are missing.",
  sub: "Free to start. No card. Live in five minutes.",
  buttons: ["Start free ↗", "Book a personal demo ↗"],
  ticks: ["Free to start", "No card needed", "Cancel any time"],
  bottomline: {
    text: "Built around your business.",
    link: "Build your customer experience ↗",
  },
}
```

- [ ] **Step 8: Run test to verify it passes**

Run: `npm test -- homepage.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 9: Commit**

```bash
git add next-app/content/
git commit -m "feat: add typed homepage content model"
```

---

## Task 4: Core primitives — GradText, SectionHeading, ChannelIcon

**Files:**
- Create: `next-app/components/primitives/GradText.tsx`
- Create: `next-app/components/primitives/SectionHeading.tsx`
- Create: `next-app/components/primitives/ChannelIcon.tsx`
- Test: `next-app/components/primitives/primitives.test.tsx`

**Interfaces:**
- Consumes: nothing from earlier tasks (pure presentational).
- Produces:
  - `<GradText>{children}</GradText>` → `<span className="grad-text">{children}</span>`
  - `<SectionHeading badge sub h2 h2Grad? />` → the repeated `.badge` + `.sec-title`/`h2` + `.sec-sub` markup
  - `<ChannelIcon channel="website"|"shopify"|"instagram"|"whatsapp"|"messenger"|"standalone" />` → the matching SVG from the site's `ICONS` set

- [ ] **Step 1: Write the failing test**

`next-app/components/primitives/primitives.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { GradText } from "./GradText"
import { SectionHeading } from "./SectionHeading"
import { ChannelIcon } from "./ChannelIcon"

describe("GradText", () => {
  it("renders a span.grad-text", () => {
    render(<GradText>sales, leads, and bookings.</GradText>)
    const el = screen.getByText("sales, leads, and bookings.")
    expect(el.tagName).toBe("SPAN")
    expect(el).toHaveClass("grad-text")
  })
})

describe("SectionHeading", () => {
  it("renders badge, h2 (with grad-text tail), and sub", () => {
    render(
      <SectionHeading
        badge="Industries"
        h2="Works in your industry,"
        h2Grad="from day one."
        sub="Steps AI reads your own website, products, and documents."
      />
    )
    expect(screen.getByText("Industries")).toHaveClass("badge")
    expect(screen.getByText("from day one.")).toHaveClass("grad-text")
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("sec-title")
    expect(screen.getByText(/Steps AI reads your own website/)).toHaveClass("sec-sub")
  })
})

describe("ChannelIcon", () => {
  it("renders an svg for a known channel", () => {
    const { container } = render(<ChannelIcon channel="whatsapp" />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- primitives.test.tsx`
Expected: FAIL — modules not found.

- [ ] **Step 3: Write `GradText.tsx`**

```tsx
import type { ReactNode } from "react"

export function GradText({ children }: { children: ReactNode }) {
  return <span className="grad-text">{children}</span>
}
```

- [ ] **Step 4: Write `SectionHeading.tsx`**

```tsx
interface SectionHeadingProps {
  badge: string
  h2: string
  h2Grad?: string
  sub?: string
  as?: "h2" | "h1"
}

import { GradText } from "./GradText"

export function SectionHeading({ badge, h2, h2Grad, sub, as = "h2" }: SectionHeadingProps) {
  const Heading = as
  return (
    <>
      <span className="badge">{badge}</span>
      <Heading className="sec-title">
        {h2} {h2Grad ? <GradText>{h2Grad}</GradText> : null}
      </Heading>
      {sub ? <p className="sec-sub">{sub}</p> : null}
    </>
  )
}
```

- [ ] **Step 5: Write `ChannelIcon.tsx`**

Port the exact SVG markup from the current `ICONS` object (`home-v2.js:543-549`) 1:1 — only the syntax changes (HTML attrs → JSX: `stroke-width` → `strokeWidth`, etc.):

```tsx
export type ChannelKey = "website" | "shopify" | "instagram" | "whatsapp" | "messenger" | "standalone"

export function ChannelIcon({ channel }: { channel: ChannelKey }) {
  switch (channel) {
    case "website":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <circle cx="17" cy="17" r="15" fill="none" stroke="#3c3c48" strokeWidth="2" />
          <path
            d="M2 17h30M17 2c-5 4-7 9.5-7 15s2 11 7 15c5-4 7-9.5 7-15S22 6 17 2z"
            fill="none"
            stroke="#3c3c48"
            strokeWidth="2"
          />
        </svg>
      )
    case "shopify":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <path d="M9 10.5 22.5 8l4 22-19.5 3.5L9 10.5z" fill="#95BF47" />
          <path d="M22.5 8l3 1 3.5 21-6 2.5L22.5 8z" fill="#5E8E3E" />
          <path
            d="M18.5 16.5c-.8-.4-2.6-.6-3.4.4-1.5-2 1.4-4.4 2.9-3.6l.5 3.2zm-2.8 4.2c1 .7 3 1 2.6 3-.3 2.2-3.6 2.4-5.3 1l.7-2c.9.6 2.3 1 2.5.3.2-.8-1.7-1.1-2.3-2.9-.7-2.2 1.6-4.5 4.4-3.6l-.5 2.4c-.7-.3-2.4-.5-2.4.7 0 .5.1.7.3 1.1z"
            fill="#fff"
          />
        </svg>
      )
    case "instagram":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <rect x="2" y="2" width="30" height="30" rx="9" fill="url(#igg)" />
          <rect x="8" y="8" width="18" height="18" rx="5.5" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="17" cy="17" r="4.5" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="23" cy="11" r="1.3" fill="#fff" />
        </svg>
      )
    case "whatsapp":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <circle cx="17" cy="17" r="15.5" fill="#25D366" />
          <path
            d="M17 7.5c-5.2 0-9.4 4.2-9.4 9.4 0 1.8.5 3.4 1.4 4.9L7.5 26.5l4.9-1.4a9.4 9.4 0 1 0 4.6-17.6z"
            fill="#fff"
          />
          <path
            d="M13.6 11.9c.9-.2 1 .3 1.4 1.3.4.9.5 1-.1 1.7-.4.5-.3.9.2 1.6.8 1.1 1.8 1.9 3 2.4.7.3 1 .2 1.4-.3.5-.7.7-.9 1.6-.5 1 .5 1.6.7 1.3 1.6-.9 2.6-4.6 1.6-7-.6-2.3-2.2-3.6-6.4-1.8-7.2z"
            fill="#25D366"
          />
        </svg>
      )
    case "messenger":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <circle cx="17" cy="17" r="15.5" fill="url(#msg)" />
          <path
            d="M8.5 16.4c0-4.9 3.8-8.4 8.5-8.4s8.5 3.5 8.5 8.4-3.8 8.4-8.5 8.4c-.9 0-1.8-.1-2.6-.4l-2.9 1.3.1-2.9c-1.9-1.5-3.1-3.8-3.1-6.4z"
            fill="#fff"
          />
          <path d="m12 19.5 3.6-5.6 3 2.4 3.4-2.4-3.6 5.6-3-2.4-3.4 2.4z" fill="url(#msg)" />
        </svg>
      )
    case "standalone":
      return (
        <svg viewBox="0 0 34 34" width="100%" height="100%">
          <rect x="4" y="3" width="26" height="28" rx="6" fill="none" stroke="#2563eb" strokeWidth="2" />
          <path d="M11 12h12M11 17h12M11 22h7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
  }
}
```

Note: `instagram` and `messenger` reference `url(#igg)` / `url(#msg)` gradients — these must be defined once, globally, exactly as the current homepage does. Task 6 (Header) or Task 8 (Hero, whichever renders first in the DOM) includes the shared `<svg>` gradient defs block (ported verbatim from `index.html:1117-1126`):

```tsx
export function BrandGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="igg" gradientUnits="userSpaceOnUse" x1="0" y1="34" x2="34" y2="0">
          <stop stopColor="#FFD600" />
          <stop offset=".35" stopColor="#FF7A00" />
          <stop offset=".62" stopColor="#FF0069" />
          <stop offset="1" stopColor="#7638FA" />
        </linearGradient>
        <linearGradient id="msg" gradientUnits="userSpaceOnUse" x1="6" y1="30" x2="28" y2="4">
          <stop stopColor="#0695FF" />
          <stop offset=".6" stopColor="#A334FA" />
          <stop offset="1" stopColor="#FF6968" />
        </linearGradient>
      </defs>
    </svg>
  )
}
```

Add this to `components/primitives/ChannelIcon.tsx` as a named export alongside `ChannelIcon`, and render it once near the top of `app/page.tsx` in Task 23.

- [ ] **Step 6: Run test to verify it passes**

Run: `npm test -- primitives.test.tsx`
Expected: PASS (3 tests)

- [ ] **Step 7: Commit**

```bash
git add next-app/components/primitives/
git commit -m "feat: add GradText, SectionHeading, ChannelIcon primitives"
```

---

## Task 5: RevealOnScroll, Marquee, StatPlate primitives

**Files:**
- Create: `next-app/components/primitives/RevealOnScroll.tsx`
- Create: `next-app/components/primitives/Marquee.tsx`
- Create: `next-app/components/primitives/StatPlate.tsx`
- Test: `next-app/components/primitives/reveal-marquee-stats.test.tsx`

**Interfaces:**
- Consumes: none.
- Produces:
  - `<RevealOnScroll variant="reveal"|"reveal-left"|"reveal-right"|"reveal-grow">` → wraps children in a `motion.div` that adds `is-visible` on `whileInView`, mirroring the ported CSS's `.reveal.is-visible` transitions.
  - `<Marquee items={...} renderItem={...} />` → the two-track infinite-scroll structure the ported CSS's `@keyframes` animates.
  - `<StatPlate metrics={[{value,label}]} />` → the hero's 4-metric row markup.

- [ ] **Step 1: Write the failing test**

`next-app/components/primitives/reveal-marquee-stats.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { RevealOnScroll } from "./RevealOnScroll"
import { StatPlate } from "./StatPlate"

describe("RevealOnScroll", () => {
  it("renders children inside the given reveal variant class", () => {
    render(
      <RevealOnScroll variant="reveal-left">
        <p>content</p>
      </RevealOnScroll>
    )
    expect(screen.getByText("content").parentElement).toHaveClass("reveal-left")
  })
})

describe("StatPlate", () => {
  it("renders every metric value and label", () => {
    render(
      <StatPlate
        metrics={[
          { value: "8 in 10", label: "questions answered without you" },
          { value: "95+", label: "languages" },
        ]}
      />
    )
    expect(screen.getByText("8 in 10")).toBeInTheDocument()
    expect(screen.getByText("languages")).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- reveal-marquee-stats.test.tsx`
Expected: FAIL — modules not found.

- [ ] **Step 3: Write `RevealOnScroll.tsx`**

The ported CSS drives the actual transition via `.reveal.is-visible` / `.reveal-left.is-visible` etc. (`styles.css:217-218`, `:1341-1349`). Framer Motion's `whileInView` is used only to toggle that same class at the right moment, so the existing CSS transitions fire unchanged:

```tsx
"use client"
import { motion } from "motion/react"
import type { ReactNode } from "react"

type RevealVariant = "reveal" | "reveal-left" | "reveal-right" | "reveal-grow"

export function RevealOnScroll({
  variant = "reveal",
  children,
}: {
  variant?: RevealVariant
  children: ReactNode
}) {
  return (
    <motion.div
      className={variant}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ visible: { className: `${variant} is-visible` } }}
      onViewportEnter={(entry) => {
        ;(entry?.target as HTMLElement | undefined)?.classList.add("is-visible")
      }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 4: Write `StatPlate.tsx`**

Ported verbatim from `index.html:1149-1154`:

```tsx
export function StatPlate({ metrics }: { metrics: { value: string; label: string }[] }) {
  return (
    <div className="hero-metric-plate" style={{ display: "flex", flexWrap: "wrap", gap: 22, margin: "18px 0 4px" }}>
      {metrics.map((m) => (
        <div key={m.label}>
          <b className="grad-text" style={{ fontSize: 20, fontWeight: 800 }}>
            {m.value}
          </b>
          <span style={{ display: "block", fontSize: 12, color: "var(--text-secondary)" }}>{m.label}</span>
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 5: Write `Marquee.tsx`**

Generic wrapper matching the trust-strip / app-pill marquee structure (two duplicated tracks for a seamless CSS-driven loop), parameterized so both the brand-logo marquee (Task 9) and the integrations app-pill marquee (Task 14) reuse it:

```tsx
import type { ReactNode } from "react"

export function Marquee({
  trackClassName,
  wrapClassName,
  items,
  renderItem,
}: {
  trackClassName: string
  wrapClassName: string
  items: { key: string }[]
  renderItem: (item: { key: string }, duplicate: boolean) => ReactNode
}) {
  return (
    <div className={wrapClassName}>
      <div className={trackClassName}>
        {items.map((item) => (
          <div key={item.key}>{renderItem(item, false)}</div>
        ))}
        {items.map((item) => (
          <div key={`${item.key}-dup`} aria-hidden="true">
            {renderItem(item, true)}
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 6: Run test to verify it passes**

Run: `npm test -- reveal-marquee-stats.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 7: Commit**

```bash
git add next-app/components/primitives/
git commit -m "feat: add RevealOnScroll, Marquee, StatPlate primitives"
```

---

## Task 6: shadcn/ui primitives, installed and re-themed to original class names

**Files:**
- Create (via CLI, then edit): `next-app/components/ui/accordion.tsx`, `next-app/components/ui/tabs.tsx`
- Test: `next-app/components/ui/ui-themed.test.tsx`

**Interfaces:**
- Consumes: none.
- Produces: an `Accordion`/`AccordionItem`/`AccordionTrigger`/`AccordionContent` set whose rendered root/trigger/content elements accept a `className` override that the FAQ (Task 21) and other sections pass the original `.faq-item`/`.faq-q`/`.faq-a` classes into — same for `Tabs`/`TabsList`/`TabsTrigger`/`TabsContent` accepting the site's own tab classes.

We only need `Accordion` (FAQ, Task 21) and `Tabs` (What It Does, Channels, Marketing, Workflows) for this phase — `Button`/`Badge`/`Dialog` from the original design-system list turned out unnecessary once the "keep original classNames" approach was adopted (the ported CSS already styles plain `<button className="...">`/`<span className="badge">` directly, so wrapping them in shadcn's `Button`/`Badge` would add indirection with no behavior gained). Trim the design system to what's actually used — Tabs and Accordion are the two primitives whose keyboard/focus/ARIA behavior is worth reusing.

- [ ] **Step 1: Install the two components via the CLI**

```bash
cd next-app
npx shadcn@latest add accordion tabs
```

- [ ] **Step 2: Write the failing test**

`next-app/components/ui/ui-themed.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

describe("themed Accordion", () => {
  it("accepts the site's faq-item/faq-q/faq-a classes", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a" className="faq-item">
          <AccordionTrigger className="faq-q">Question</AccordionTrigger>
          <AccordionContent className="faq-a">
            <p>Answer</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText("Question").closest(".faq-item")).toBeInTheDocument()
  })
})

describe("themed Tabs", () => {
  it("accepts the site's sia-tabs classes", () => {
    render(
      <Tabs defaultValue="sales">
        <TabsList className="sia-tabs">
          <TabsTrigger value="sales" className="sia-tab">
            Sales
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sales">Sales panel</TabsContent>
      </Tabs>
    )
    expect(screen.getByText("Sales panel")).toBeInTheDocument()
  })
})
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npm test -- ui-themed.test.tsx`
Expected: FAIL — `shadcn add` hasn't run yet in a fresh checkout, or the default generated components don't yet exist at that path. (If Step 1 already ran, this instead verifies the default shadcn output already accepts `className` — shadcn components always forward `className` via `cn()` by default, so this step usually passes immediately; if it does, proceed straight to Step 5 without code changes.)

- [ ] **Step 4: Confirm class-forwarding, adjust only if needed**

Open the generated `components/ui/accordion.tsx` and `components/ui/tabs.tsx`. shadcn's generator always merges a passed `className` with its own default classes via `cn(defaultClasses, className)`. Since our ported CSS's `.faq-item`/`.sia-tab` rules use plain class selectors (not scoped to absence of other classes), shadcn's own default utility classes coexisting alongside ours causes no visual conflict — the ported CSS rules simply also apply. No code changes needed unless a specific shadcn default (e.g. a `border` or `bg-` utility) visibly fights the ported look in Task 21/9's visual parity check — if so, strip that one default utility class from the relevant `cn()` call at that point, not preemptively here.

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- ui-themed.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 6: Commit**

```bash
git add next-app/components/ui/
git commit -m "feat: install shadcn/ui Accordion and Tabs, verified class-forwarding"
```

---
