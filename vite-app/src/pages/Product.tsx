import { useState } from 'react';
import '../styles/pages/pages.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';

const PRODUCT_FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is this a separate agent from the customer-facing one?',
    a: <p>Yes — different job, different access. Internal Copilot only talks to your team; it doesn't message your customers, and the customer-facing agent doesn't see your internal docs unless you connect the same source to both.</p>,
  },
  {
    q: 'Does it replace our helpdesk or wiki software?',
    a: <p>No — it sits on top of what you already use. It reads from your existing docs, CRM, and ticketing tool rather than asking you to migrate anything.</p>,
  },
  {
    q: 'Can it see sensitive customer data?',
    a: <p>Only what you connect and only for the team members you grant access to — access follows your existing tool permissions, it doesn't create a new blanket view of everything.</p>,
  },
  {
    q: 'Which tools does it connect to?',
    a: <p>The same integrations as the rest of StepsAI — Shopify, HubSpot, Calendly, and your inbox, with more added over time. See the <a href="integrations.html">full integrations list</a> for what's live today.</p>,
  },
];

/** Ported 1:1 from product.html's <main>. FAQ accordion from pages.js handled by <FaqItem>. */
export function Product() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout title="Internal Copilot — StepsAI | An AI assistant for your team" description="Internal Copilot is the StepsAI assistant for your own team — it answers from your docs and CRM, drafts replies, and automates the busywork between your tools.">
      <Breadcrumb section={null} sectionHref={null} label="Product Overview" />

      <main id="top">
        {/* ============================================================
             HERO
             ============================================================ */}
        <section className="section section--base page-hero section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br"></div>
          </div>
          <div className="hero-bg-dots" aria-hidden="true"></div>
          <div className="container page-hero-inner">
            <p className="kicker">INTERNAL COPILOT</p>
            <h1 className="page-headline">The AI assistant that knows your business as well as your team does.</h1>
            <p className="section-sub page-hero-sub">Your team asks it questions instead of digging through docs, tabs, and old Slack threads. It answers from what you've actually got connected — your knowledge base, your CRM, your tools.</p>

            <div className="crosslink-note">
              <p>Looking for the agent that talks to your <strong>customers</strong> instead? That's the one on the homepage.</p>
              <a href="agents.html">See the customer-facing agent <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        {/* ============================================================
             WHAT IT DOES
             ============================================================ */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <p className="kicker">WHAT IT DOES</p>
            <h2 className="section-title">Answers, then acts — for your team this time.</h2>
            <p className="section-sub">Same principle as the customer-facing agent, pointed inward: it doesn't just retrieve information, it uses it.</p>

            <div className="feature-grid">
              <div className="feature-card">
                <span className="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 4H14L18 8V20H6V4Z" stroke="#1A56DB" strokeWidth="1.6" strokeLinejoin="round" /><path d="M14 4V8H18" stroke="#1A56DB" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 13H15M9 16H13" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
                <h3 className="feature-card-title">Answers from your docs</h3>
                <p className="feature-card-desc">Ask it a policy, process, or product question and it answers from your actual knowledge base — not a generic model guess.</p>
              </div>

              <div className="feature-card">
                <span className="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#1A56DB" strokeWidth="1.6" /><path d="M3 9H21M8 14H12" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </span>
                <h3 className="feature-card-title">Pulls from your CRM</h3>
                <p className="feature-card-desc">Ask it "what's the status on this account?" and it answers live from HubSpot, Shopify, or whatever you've connected, without you switching tabs to check.</p>
              </div>

              <div className="feature-card">
                <span className="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 19L19 4M19 4H10M19 4V13" stroke="#1A56DB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <h3 className="feature-card-title">Drafts replies &amp; summaries</h3>
                <p className="feature-card-desc">Give it a thread or a ticket and it drafts the reply, or summarizes a long back-and-forth into three lines before your next call.</p>
              </div>

              <div className="feature-card">
                <span className="feature-card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3C14.5 5.5 15.8 8.6 15.8 12C15.8 15.4 14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12C8.2 8.6 9.5 5.5 12 3Z" stroke="#1A56DB" strokeWidth="1.6" /><path d="M3 12H21" stroke="#1A56DB" strokeWidth="1.6" /></svg>
                </span>
                <h3 className="feature-card-title">Automates the busywork</h3>
                <p className="feature-card-desc">Updates a record, files a ticket, or moves something to the next stage — the small tasks between your tools that eat a workday.</p>
              </div>
            </div>

            <div className="distinction-card">
              <p><strong>Not the same product as the customer-facing agent.</strong> That one talks to your customers on WhatsApp, Instagram, and your website. Internal Copilot talks to your team, inside the tools you already use — different job, same underlying agent technology.</p>
            </div>
          </div>
        </section>

        {/* ============================================================
             FAQ
             ============================================================ */}
        <section className="section section--base faq section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="container">
            <p className="kicker">QUESTIONS</p>
            <h2 className="section-title">Internal Copilot, answered.</h2>

            <div className="faq-grid">
              {PRODUCT_FAQS.map((item, i) => (
                <FaqItem
                  key={item.q}
                  question={item.q}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  chevronClassName="faq-chevron"
                >
                  {item.a}
                </FaqItem>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
             FINAL CTA
             ============================================================ */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">Give your team an answer, not a search bar.</h2>
            <p className="final-cta-sub">Internal Copilot is included wherever your plan already connects your tools.</p>
            <a href="pricing.html" className="btn btn-cta">See plans</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
