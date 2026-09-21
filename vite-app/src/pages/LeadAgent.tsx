import { useEffect, useRef, useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-lead.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const LEAD_FAQS = [
  { q: 'Will it replace my sales team?', a: "No. It makes sure your team only spends time on people worth talking to — it qualifies, it doesn't sell." },
  { q: 'Which CRMs does it connect to?', a: 'HubSpot out of the box, with more on the way. No CRM? Leads are still saved and visible in your inbox.' },
  { q: 'How does it decide what\'s a "qualified" lead?', a: 'You define the criteria — budget thresholds, timeline, use case. It applies your rules, not a generic guess.' },
  { q: 'Does it follow up if someone goes quiet?', a: "Yes — that's handled by Workflows, which follows up automatically and answers whatever question was still open." },
];

/** Agent-page FAQ rows use the `.faq-chev` plus-glyph (rotated to an × when open), not Pricing's caret, so the shared <FaqItem> chevron can't be reused here. */
function PlusFaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-question" type="button" onClick={onToggle}>{question}<svg className="faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></button>
      <div className="faq-answer" ref={answerRef}><p>{answer}</p></div>
    </div>
  );
}

/** Ported 1:1 from lead-agent.html's <main>. */
export function LeadAgent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();

  return (
    <Layout
      title="Lead Agent — StepsAI | Every enquiry, qualified before it reaches you."
      description="Captures who they are, what they need, and how soon — saved to your CRM automatically, with the full conversation attached."
    >
      <Breadcrumb section="Product" sectionHref="agents.html" label="Lead Qualification" />

      <main id="top">

        {/* 1. HERO */}
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Lead Agent</span>
              <h1 className="vertical-headline">Every enquiry, qualified before it reaches you.</h1>
              <p className="vertical-tagline">Captures who they are, what they need, and how soon — saved to your CRM automatically, with the whole conversation attached.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="agents.html#four-agents" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All four agents
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="live-widget">
                <div className="lw-head">
                  <span className="lw-avatar">K</span>
                  <div><div className="lw-name">Agent</div><div className="lw-status">Keystone Realty · Active</div></div>
                </div>
                <div className="lw-body">
                  <div className="lw-bubble user">Looking for a 2BHK near the tech park</div>
                  <div className="lw-bubble agent">Got it — what's your budget range and how soon are you looking to move?</div>
                  <div className="lw-bubble user">₹85L–1.1Cr, ideally within 60 days</div>
                  <div className="lw-bubble agent">Perfect. Can I get your name and number so our team can send matching listings?</div>
                  <div className="lw-bubble user">Ananya Rao, 98765 43210</div>
                  <div className="lw-bubble agent">Thanks Ananya — saved. Sameer from our team will reach out within the hour.</div>
                </div>
                <div className="lw-footer">
                  <div className="lw-input">Ask me anything</div>
                  <span className="lw-send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 18 9-18 9 4-9-4-9Z" /></svg></span>
                </div>
                <div className="lw-powered">Powered by <b>StepsAI</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IT DOES */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-left">
              <p className="kicker"><span className="n">02</span> What it does</p>
              <h2 className="section-title">A qualifying conversation, not a dead-end form.</h2>
              <p className="section-sub">Most people who leave a website contact form never fill it out. This happens inside the chat they're already having.</p>
            </div>

            <div className="spread reveal-left" style={{ '--ind-accent': '#7C3AED', '--ind-tint': 'rgba(124,58,237,.08)' } as CSSProperties}>
              <div>
                <div className="spread-index">01 / Captures</div>
                <h3>Who they are, what they need, how soon.</h3>
                <p>It asks the qualifying questions your sales team would ask — budget, timeline, use case — naturally, inside the conversation, without ever feeling like a form.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">K</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">Interested in your 3BHK listing</div>
                    <div className="lw-bubble agent">Great — is this for you to live in, or an investment?</div>
                    <div className="lw-bubble user">To live in, moving from out of state</div>
                    <div className="lw-bubble agent">Good to know. What's the best number to reach you on?</div>
                    <div className="lw-bubble user">98123 45678</div>
                    <div className="chat-card">
                      <div className="chat-card-fields">
                        <div className="chat-card-field"><span>Interested in</span><span>3BHK Listing</span></div>
                        <div className="chat-card-field"><span>Reason</span><span>Relocating, out of state</span></div>
                        <div className="chat-card-field"><span>Contact</span><span>98123 45678</span></div>
                      </div>
                      <div className="chat-card-synced is-captured"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Details captured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spread reverse reveal-right" style={{ '--ind-accent': '#059669', '--ind-tint': 'rgba(5,150,105,.08)' } as CSSProperties}>
              <div>
                <div className="spread-index">02 / Saves it, attached</div>
                <h3>Every lead arrives with the whole conversation.</h3>
                <p>Every lead lands in HubSpot or your CRM with the full chat attached — your sales team never asks a customer to repeat themselves.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">K</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble agent">Passed this along to our team, with everything attached:</div>
                    <div className="chat-card">
                      <div className="chat-card-fields">
                        <div className="chat-card-field"><span>Name</span><span>Ananya Rao</span></div>
                        <div className="chat-card-field"><span>Phone</span><span>98765 43210</span></div>
                        <div className="chat-card-field"><span>Budget</span><span>&#8377;85L&ndash;1.1Cr</span></div>
                        <div className="chat-card-field"><span>Timeline</span><span>60 days</span></div>
                      </div>
                      <div className="chat-card-synced"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Synced to HubSpot</div>
                    </div>
                    <div className="lw-bubble user">Perfect, thanks!</div>
                    <div className="lw-bubble agent">Priya from our sales team will reach out today with your matching listings.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spread reveal-left" style={{ '--ind-accent': '#D97706', '--ind-tint': 'rgba(217,119,6,.08)' } as CSSProperties}>
              <div>
                <div className="spread-index">03 / Routes to the right person</div>
                <h3>High-intent leads reach a human fast.</h3>
                <p>It recognizes when someone's ready to talk to a person — a bulk enquiry, a serious buyer — and routes it immediately, instead of letting it sit in a queue.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">K</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">We need 12 units for our team, relocating next month</div>
                    <div className="lw-bubble agent">That's a priority enquiry — flagging this for our leasing manager right now.</div>
                    <div className="chat-card">
                      <div className="chat-card-synced is-routed"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>Routed to Priya &middot; Leasing Manager</div>
                    </div>
                    <div className="lw-bubble user">Appreciate the quick response</div>
                    <div className="lw-bubble agent">Of course &mdash; expect a call within the hour with unit options.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sig-lead reveal">
              <div className="sig-lead-head">
                <span className="sig-lead-label">Same visitor, one card</span>
                <h3 className="sig-lead-title">"Anonymous Visitor" becomes a qualified lead, field by field.</h3>
              </div>
              <div className="sig-lead-stage">
                <div className="sig-lead-convo">
                  <div className="sig-lead-msg in">Looking for a 2BHK near the tech park</div>
                  <div className="sig-lead-msg out">Got it. What's your budget and how soon are you moving?</div>
                  <div className="sig-lead-msg in">&#8377;85L&ndash;1.1Cr, ideally within 60 days</div>
                  <div className="sig-lead-msg out">And your name and number, so our team can send matching listings?</div>
                  <div className="sig-lead-msg in">Ananya Rao, 98765 43210</div>
                </div>
                <div className="sig-lead-card">
                  <div className="sig-lead-card-head">
                    <span className="sig-lead-avatar">?</span>
                    <div><div className="sig-lead-name">Anonymous Visitor</div><div className="sig-lead-sub">Just started chatting</div></div>
                  </div>
                  <div className="sig-lead-fields reveal reveal-stagger">
                    <div className="sig-lead-field" style={{ '--i': 0 } as CSSProperties}><span className="k">Name</span><span className="v">Ananya Rao</span></div>
                    <div className="sig-lead-field" style={{ '--i': 1 } as CSSProperties}><span className="k">Contact</span><span className="v">98765 43210</span></div>
                    <div className="sig-lead-field" style={{ '--i': 2 } as CSSProperties}><span className="k">Interested in</span><span className="v">2BHK, near tech park</span></div>
                    <div className="sig-lead-field" style={{ '--i': 3 } as CSSProperties}><span className="k">Budget</span><span className="v">&#8377;85L&ndash;1.1Cr</span></div>
                    <div className="sig-lead-field" style={{ '--i': 4 } as CSSProperties}><span className="k">Timeline</span><span className="v">60 days</span></div>
                    <div className="sig-lead-field sig-lead-field--score" style={{ '--i': 5 } as CSSProperties}><span className="k">Lead score</span><span className="v">Qualified &middot; Hot</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TOOLS USED HERE — page-specific integration callout, reuses integrations.html's .integ-band/.integ-logo-row */}
        <section className="section section--dark">
          <div className="container">
            <div className="integ-band">
              <div className="reveal-right">
                <p className="kicker"><span className="n">03</span> Built to work with</p>
                <h2 className="section-title">Every lead lands exactly where your team already works.</h2>
                <p className="section-sub">No copy-paste, no lost context — the full conversation travels with the lead.</p>
              </div>
              <div className="integ-logos reveal-stagger">
                <div className="integ-logo-row" style={{ '--i': 0 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="17" r="3" /><circle cx="17" cy="7" r="3" /><path d="M9.5 14.5 14.5 9.5" /></svg><div className="integ-logo-row-text"><div className="t1">HubSpot</div><div className="t2">Lead capture with full conversation attached</div></div><span className="integ-logo-row-badge">Connect</span></div>
                <div className="integ-logo-row" style={{ '--i': 1 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M8 4v5" /></svg><div className="integ-logo-row-text"><div className="t1">Airtable</div><div className="t2">Every lead saved as a new row, updated automatically</div></div><span className="integ-logo-row-badge">Connect</span></div>
                <div className="integ-logo-row" style={{ '--i': 2 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="6" height="6" rx="2" /><rect x="14" y="4" width="6" height="6" rx="2" /><rect x="4" y="14" width="6" height="6" rx="2" /><rect x="14" y="14" width="6" height="6" rx="2" /></svg><div className="integ-logo-row-text"><div className="t1">Slack</div><div className="t2">Instant alert the moment a lead needs a person</div></div><span className="integ-logo-row-badge">Connect</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-grow">
              <p className="kicker"><span className="n">04</span> FAQ</p>
              <h2 className="section-title">Questions about the Lead Agent.</h2>
            </div>
            <div className="faq-grid reveal">
              <div style={{ '--i': 0 } as CSSProperties}>
                {LEAD_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div style={{ '--i': 1 } as CSSProperties}>
                {LEAD_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. FINAL CTA */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal-pop" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Stop losing enquiries to a form nobody fills out.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Start qualifying leads tonight.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
