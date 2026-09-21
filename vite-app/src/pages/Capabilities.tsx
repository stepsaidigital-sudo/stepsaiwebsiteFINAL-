import { Fragment, useState, type CSSProperties } from 'react';
import '../styles/pages/pages.css';
import '../styles/pages/industries-deep.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';

const CAPABILITIES = [
  {
    title: '01 · Knowledge Q&A',
    desc: 'Answers approved questions from websites, documents, FAQs, policies, catalogues, programmes, properties, services, or internal systems.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
  },
  {
    title: '02 · Lead or request capture',
    desc: 'Collects structured customer information without forcing a long static form.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    title: '03 · Intent detection',
    desc: 'Recognizes when a visitor is ready to book, buy, apply, visit, consult, or speak with a human.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  },
  {
    title: '04 · Cards and recommendations',
    desc: 'Shows properties, courses, doctors, rooms, services, or lawyers with clear next actions.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
  },
  {
    title: '05 · Booking',
    desc: 'Books site visits, counselling sessions, medical appointments, hotel services, or legal consultations.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  },
  {
    title: '06 · WhatsApp follow-up',
    desc: 'Continues the journey after the visitor leaves the website.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  },
  {
    title: '07 · Document and image uploads',
    desc: 'Collects supporting documents, screenshots, reports, evidence, or identification where permitted.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
  },
  {
    title: '08 · Ticket creation',
    desc: 'Creates internal tasks for unresolved questions, complaints, service requests, or specialist review.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-2Z" /><line x1="10" y1="7" x2="10" y2="17" strokeDasharray="2 2" /></svg>,
  },
  {
    title: '09 · Human handoff',
    desc: 'Transfers the complete conversation and structured context to the right team.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  },
  {
    title: '10 · Analytics',
    desc: 'Tracks enquiry volume, common questions, bookings, lead sources, drop-off, and agent outcomes.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  },
];

const WORKFLOW_STEPS = [
  {
    title: '1 · Capture permission',
    desc: 'Collect a clear WhatsApp opt-in through the website, form, booking flow, QR code, or an existing conversation.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  },
  {
    title: '2 · Start from a trigger',
    desc: 'Launch after a defined event: an enquiry, incomplete application, booking, site visit, or consultation request.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg>,
  },
  {
    title: '3 · Load the right context',
    desc: 'Pull the customer profile, enquiry details, selected service, and the next expected action.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" /></svg>,
  },
  {
    title: '4 · Send the approved message',
    desc: 'A concise message with a clear purpose, useful information, and one primary call to action.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>,
  },
  {
    title: '5 · Let the AI handle replies',
    desc: 'Answer follow-up questions, retrieve approved information, and recommend the next step.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    title: '6 · Branch by customer action',
    desc: 'Move the customer into the correct path based on reply, click, booking, upload, payment, or opt-out.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M6 9v6" /><path d="M18 6a4 4 0 0 1-4 4H9" /><circle cx="18" cy="6" r="3" /></svg>,
  },
  {
    title: '7 · Complete an action',
    desc: 'Book a meeting, create a lead, share a document, update a ticket, or notify the internal team.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  },
  {
    title: '8 · Escalate intent or risk',
    desc: 'Transfer high-intent, sensitive, urgent, or unresolved conversations to a human with full context attached.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
  },
  {
    title: '9 · Record the outcome',
    desc: 'Track the response, booking, conversion, handoff, ticket, and next follow-up date.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
  },
];

const LOGIC_STRIP = ['Trigger', 'Segment', 'Approved message', 'Customer reply', 'AI conversation', 'Action or human handoff', 'Outcome tracking'];

const CAPABILITY_FAQS = [
  { q: 'Do we need all ten capabilities to get started?', a: 'No. Most businesses start with two or three (usually Knowledge Q&A plus one action, like Booking or Lead capture) and add the rest as the agent proves itself.' },
  { q: 'Can we turn a capability off later?', a: "Yes. Each one is a toggle, not a package. Turning one off doesn't affect the others or require a new setup." },
  { q: 'Does the WhatsApp workflow logic apply to every channel?', a: "The nine-step logic above is specific to WhatsApp's opt-in and messaging rules. Website and Instagram follow-ups use the same underlying agent, without the opt-in step." },
  { q: 'Who decides which capabilities a customer sees?', a: "You do. Each capability is scoped to your business during setup, so the agent only offers to book, upload, or escalate where you've actually turned that on." },
];

const LogicArrow = () => (
  <svg className="workflow-logic-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/** Ported 1:1 from capabilities.html's <main>. This page loads only nav.js + breadcrumbs.js, so no industries.js / channel-premium.js behavior hooks are needed. */
export function Capabilities() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout title="Platform Capabilities — StepsAI" description="Ten reusable capabilities behind every StepsAI deployment, plus how WhatsApp follow-up and broadcasting work end to end.">
      <Breadcrumb section="Product" sectionHref="agents.html" label="Skills & Capabilities" />

      <main id="top">
        <section className="section section--base page-hero section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="hero-bg-dots" aria-hidden="true"></div>
          <div className="container page-hero-inner">
            <p className="kicker">PLATFORM CAPABILITIES</p>
            <h1 className="page-headline">Ten building blocks. Every industry combines them differently.</h1>
            <p className="section-sub page-hero-sub">Real estate leans on property discovery and site visits. A law firm leans on intake and conflict screening. Underneath, it's the same ten capabilities, wired for the job in front of them.</p>
          </div>
        </section>

        {/* ============================================================
             TEN CAPABILITIES
             ============================================================ */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">01</span> The building blocks</p>
              <h2 className="section-title">Ten capabilities. Every deployment uses a different mix.</h2>
            </div>
            <div className="prem-box-row reveal reveal-stagger">
              {CAPABILITIES.map((cap, i) => (
                <div key={cap.title} className="prem-box" style={{ '--i': i } as CSSProperties}>
                  <span className="prem-box-icon">{cap.icon}</span>
                  <div className="prem-box-title">{cap.title}</div>
                  <p className="prem-box-desc">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
             WHATSAPP WORKFLOW LOGIC
             ============================================================ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> WhatsApp workflows</p>
              <h2 className="section-title">How a one-to-one follow-up actually runs.</h2>
              <p className="section-sub">The same nine-step logic behind every automated WhatsApp workflow, whatever triggers it.</p>
            </div>

            <div className="workflow-logic-strip reveal">
              {LOGIC_STRIP.map((step, i) => (
                <Fragment key={step}>
                  {i > 0 && <LogicArrow />}
                  <span className="workflow-logic-step">{step}</span>
                </Fragment>
              ))}
            </div>

            <div className="prem-box-row reveal reveal-stagger" style={{ marginTop: '32px' }}>
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.title} className="prem-box" style={{ '--i': i } as CSSProperties}>
                  <span className="prem-box-icon">{step.icon}</span>
                  <div className="prem-box-title">{step.title}</div>
                  <p className="prem-box-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="ind-crosslink" style={{ background: 'var(--accent-tint)', marginTop: '32px' }}>
              <p>Segmented broadcasting — campaigns to opted-in audiences — runs on this same logic and is live today.</p>
              <a href="whatsapp-broadcast.html">See how broadcasting works <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        {/* ============================================================
             FAQ
             ============================================================ */}
        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Questions</p>
              <h2 className="section-title">About the platform capabilities.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {CAPABILITY_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {CAPABILITY_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <FaqItem key={item.q} question={item.q} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}>
                      <p>{item.a}</p>
                    </FaqItem>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">See these ten capabilities running in your industry.</h2>
            <p className="final-cta-sub">Same platform, wired for what your business actually needs it to do.</p>
            <a href="industries.html" className="btn btn-cta">Browse industries</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
