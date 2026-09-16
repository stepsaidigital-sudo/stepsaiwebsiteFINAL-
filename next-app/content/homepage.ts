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
