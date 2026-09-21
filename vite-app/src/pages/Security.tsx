import type { CSSProperties } from 'react';
import '../styles/pages/pages.css';
import '../styles/pages/creative-showcase.css';
import '../styles/pages/security.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
);

/** Ported 1:1 from security.html's <main>; its inline <style> block lives in styles/pages/security.css. */
export function Security() {
  return (
    <Layout title="Security & Trust — StepsAI" description="How StepsAI protects your business and customer data — encryption, access controls, and what we're honest about not having certified yet.">
      <Breadcrumb section="Company" sectionHref="about.html" label="Security & Trust" />

      <main>
        <section className="section section--base security-hero section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="reveal">
              <span className="security-hero-kicker">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Security &amp; Trust
              </span>
              <h1 className="security-hero-title">Security and privacy, built in by default.</h1>
              <p className="security-hero-sub">Your customer data, conversation history, and CRM records belong to you. We don't sell it, and we don't use your conversations to train models for other customers. "Enterprise-grade security" gets said by every company with a login page — below is specifically what we do, and where we're still building toward bigger certifications.</p>
            </div>

            <div className="security-badges-grid reveal-stagger">
              <div className="security-badge-card" style={{ '--i': 0 } as CSSProperties}>
                <div className="security-badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <h3 className="security-badge-title">Encryption everywhere</h3>
                <p className="security-badge-desc">Data is encrypted in transit and at rest, using current industry-standard protocols.</p>
              </div>

              <div className="security-badge-card" style={{ '--i': 1 } as CSSProperties}>
                <div className="security-badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <h3 className="security-badge-title">Your data isn't training material</h3>
                <p className="security-badge-desc">Conversations and CRM records that flow through StepsAI aren't used to train models for other customers.</p>
              </div>

              <div className="security-badge-card" style={{ '--i': 2 } as CSSProperties}>
                <div className="security-badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h3 className="security-badge-title">Access, export, or delete — on request</h3>
                <p className="security-badge-desc">You, and the people who chat with your agent, can ask to access, export, or delete personal data, consistent with our Privacy Policy.</p>
              </div>

              <div className="security-badge-card" style={{ '--i': 3 } as CSSProperties}>
                <div className="security-badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>
                </div>
                <h3 className="security-badge-title">Access controls for your team</h3>
                <p className="security-badge-desc">Control who on your team can see what, with account-level permissions and secure authentication on every login.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="container">
            <div className="section-head center reveal">
              <p className="kicker">Architecture</p>
              <h2 className="section-title">How we protect your business and your customers.</h2>
              <p className="section-sub">What that looks like in practice — across infrastructure, the AI itself, and who gets access to what.</p>
            </div>

            <div className="security-pillars-grid reveal-stagger">
              <div className="security-pillar-card" style={{ '--i': 0 } as CSSProperties}>
                <h3 className="security-pillar-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  Data Privacy &amp; Isolation
                </h3>
                <p className="security-pillar-desc">Every business's workspace on StepsAI is kept separate. No other business can see your data, conversations, or CRM records.</p>
                <ul className="security-pillar-list">
                  <li>{CHECK} Request deletion of your account data when you cancel</li>
                  <li>{CHECK} Messages arrive through WhatsApp's official Meta Cloud API, not a workaround</li>
                  <li>{CHECK} We look at usage patterns in aggregate, not individual conversations, to improve the product</li>
                </ul>
              </div>

              <div className="security-pillar-card" style={{ '--i': 1 } as CSSProperties}>
                <h3 className="security-pillar-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  AI Safety &amp; Guardrails
                </h3>
                <p className="security-pillar-desc">StepsAI agents operate within guardrails you set. They answer only from your approved content, and hand off to a human when they're not sure.</p>
                <ul className="security-pillar-list">
                  <li>{CHECK} Filters to catch prompt injection and jailbreak attempts</li>
                  <li>{CHECK} The agent won't invent discounts, policies, or facts that aren't in your content</li>
                  <li>{CHECK} When it isn't confident, it says so and hands off — it doesn't bluff</li>
                </ul>
              </div>

              <div className="security-pillar-card" style={{ '--i': 2 } as CSSProperties}>
                <h3 className="security-pillar-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  Infrastructure &amp; Availability
                </h3>
                <p className="security-pillar-desc">Hosted on established cloud infrastructure, with backups and monitoring so an outage doesn't mean losing your data.</p>
                <ul className="security-pillar-list">
                  <li>{CHECK} Uptime commitments available for Enterprise customers, on request</li>
                  <li>{CHECK} Regular backups, so a bad day doesn't mean losing your data</li>
                  <li>{CHECK} Standard protections against traffic spikes and denial-of-service attempts</li>
                </ul>
              </div>

              <div className="security-pillar-card" style={{ '--i': 3 } as CSSProperties}>
                <h3 className="security-pillar-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  Compliance &amp; Vendor Assessments
                </h3>
                <p className="security-pillar-desc">If your procurement process needs a security questionnaire or a Data Processing Agreement, we'll work through it with you directly.</p>
                <ul className="security-pillar-list">
                  <li>{CHECK} A Data Processing Agreement (DPA), available on request</li>
                  <li>{CHECK} Straight answers on what we do — and don't — have in place yet</li>
                  <li>{CHECK} Support for security reviews as part of your evaluation</li>
                </ul>
              </div>
            </div>

            <div className="security-contact-box reveal">
              <h3>Need a security review or a DPA?</h3>
              <p>We're happy to walk through a security questionnaire, documentation, or a compliance review directly with your team.</p>
              <a href="contact.html" className="btn btn-accent">Talk to us &rarr;</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
