import { useEffect, useRef, useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-support.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const SUPPORT_FAQS = [
  { q: "What happens when it doesn't know an answer?", a: 'It tells the customer a person will help them, and hands your team the full conversation — nothing invented, nothing guessed.' },
  { q: 'Does it resolve refunds itself?', a: 'No — refunds and disputes always escalate to your team, with full context attached. It handles the lookup and the explanation, not the decision.' },
  { q: 'Which order and ticketing systems does it connect to?', a: 'Shopify and WooCommerce for orders, Zendesk and Gmail for tickets — see the full list on our integrations page.' },
  { q: "Can I see what it's telling customers?", a: 'Every conversation lands in One Inbox, visible in real time — step in any time and it hands over cleanly.' },
];

const CHECK_POLYLINE = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

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

/** Ported 1:1 from support-agent.html's <main>. */
export function SupportAgent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();

  return (
    <Layout
      title="Support Agent — StepsAI | Tracks it. Answers it. Resolves it — or hands it off."
      description="Looks up order and ticket status from your real systems, answers from your actual policy documents, and escalates with full context when it doesn't know."
    >
      <Breadcrumb section="Product" sectionHref="agents.html" label="Support Agent" />

      <main id="top">

        {/* 1. HERO */}
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Support Agent</span>
              <h1 className="vertical-headline">Tracks it. Answers it. Resolves it — or hands it off.</h1>
              <p className="vertical-tagline">Looks up order and ticket status from your real systems, answers from your actual policy documents, and escalates with full context when it doesn't know.</p>
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
                  <span className="lw-avatar">N</span>
                  <div><div className="lw-name">Agent</div><div className="lw-status">Nyra Store · Active</div></div>
                </div>
                <div className="lw-body">
                  <div className="lw-bubble user">Where's my order #2453?</div>
                  <div className="lw-bubble agent">Out for delivery, arriving today by 7pm. Here's the live tracking link.</div>
                  <div className="lw-bubble user">Can I return it if it doesn't fit?</div>
                  <div className="lw-bubble agent">Yes — free returns within 14 days. Want the return steps now?</div>
                  <div className="lw-bubble user">Not yet, I'll wait and see</div>
                  <div className="lw-bubble agent">All good &mdash; the return window starts from delivery, so you've got time either way.</div>
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
            <div className="atmo-blob atmo-blob--teal atmo-blob--tl atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-left">
              <p className="kicker"><span className="n">02</span> What it does</p>
              <h2 className="section-title">The same fifteen questions your team answers, now answered in 0.5 seconds.</h2>
              <p className="section-sub">It never invents a policy — and it never guesses when it should hand off instead.</p>
            </div>

            <div className="spread reveal-left">
              <div>
                <div className="spread-index">01 / Real status, not a canned reply</div>
                <h3>"Where's my order" gets a real answer.</h3>
                <p>It pulls live order and ticket status from your real systems — Shopify, your helpdesk, your CRM — instead of a generic "we're looking into it."</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">N</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">Any update on ticket #118?</div>
                    <div className="lw-bubble agent">Your replacement shipped this morning — arriving Thursday.</div>
                    <div className="lw-bubble user">Perfect, thank you</div>
                    <div className="lw-bubble agent">Anytime! I'll close out the ticket once it's delivered.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spread reverse reveal-right">
              <div>
                <div className="spread-index">02 / Answers from your policy, never invents one</div>
                <h3>It cannot make things up.</h3>
                <p>It answers from your website and your documents, and nothing else. No invented refund policy, no invented deadline — the same discipline the whole product runs on.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">N</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">Can I exchange for a different color?</div>
                    <div className="lw-bubble agent">Yes, within 14 days, same as our return window — I'll start that for you.</div>
                    <div className="lw-bubble user">Black instead of navy, please</div>
                    <div className="lw-bubble agent">Done &mdash; exchange started for black. You'll get a prepaid return label by email.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spread reveal-left">
              <div>
                <div className="spread-index">03 / Escalates with context</div>
                <h3>When it doesn't know, it says so — and hands off cleanly.</h3>
                <p>Refunds, disputes, anything it isn't confident about — it says so, and passes the full conversation to your team. The customer never explains it twice.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">N</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">I want to speak to someone about a refund</div>
                    <div className="lw-bubble agent">Connecting you with Priya now — she has the full order and our chat already.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. SIGNATURE MOMENT — many repetitive tickets, few human handoffs */}
        <section className="section section--base">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Most of it never reaches a person</p>
              <h2 className="section-title">Five tickets come in. Four get answered on the spot.</h2>
              <p className="section-sub">The repetitive questions collapse into resolved conversations automatically. The one that actually needs a person reaches one, with the full thread attached.</p>
            </div>

            <div className="sig-sup-diagram reveal">
              <div className="sig-sup-incoming reveal reveal-stagger">
                <div className="sig-sup-ticket" style={{ '--i': 0 } as CSSProperties}>&ldquo;Where's my order #2453?&rdquo;</div>
                <div className="sig-sup-ticket" style={{ '--i': 1 } as CSSProperties}>&ldquo;Can I exchange this for a different size?&rdquo;</div>
                <div className="sig-sup-ticket" style={{ '--i': 2 } as CSSProperties}>&ldquo;Do you ship to Mumbai?&rdquo;</div>
                <div className="sig-sup-ticket" style={{ '--i': 3 } as CSSProperties}>&ldquo;Is the return window still open?&rdquo;</div>
                <div className="sig-sup-ticket sig-sup-ticket--complex" style={{ '--i': 4 } as CSSProperties}>&ldquo;I was charged twice for the same order&rdquo;</div>
              </div>
              <svg className="sig-sup-connectors" viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M80,0 C80,55 260,45 260,100" />
                <path d="M260,0 L260,100" />
                <path d="M440,0 C440,55 260,45 260,100" />
                <path d="M620,0 C620,55 260,45 260,100" />
                <path className="sig-sup-path--handoff" d="M720,0 C720,55 650,45 650,100" />
              </svg>
              <div className="sig-sup-outcomes reveal reveal-stagger">
                <div className="sig-sup-outcome sig-sup-outcome--resolved" style={{ '--i': 0 } as CSSProperties}>
                  <span className="sig-sup-status sig-sup-status--resolved">4 resolved automatically</span>
                  <div className="sig-sup-resolved-list">
                    <div className="sig-sup-resolved-row">{CHECK_POLYLINE}Order status answered from Shopify</div>
                    <div className="sig-sup-resolved-row">{CHECK_POLYLINE}Exchange started, no policy guesswork</div>
                    <div className="sig-sup-resolved-row">{CHECK_POLYLINE}Shipping coverage confirmed</div>
                    <div className="sig-sup-resolved-row">{CHECK_POLYLINE}Return window confirmed from policy doc</div>
                  </div>
                </div>
                <div className="sig-sup-outcome sig-sup-outcome--handoff" style={{ '--i': 1 } as CSSProperties}>
                  <span className="sig-sup-status sig-sup-status--handoff">Human handoff</span>
                  <div className="sig-sup-handoff-body">
                    <span className="sig-sup-handoff-avatar">P</span>
                    <div>
                      <div className="sig-sup-handoff-name">Priya &middot; Support team</div>
                      <div className="sig-sup-handoff-note">Full conversation and order history attached. The customer never repeats themselves.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TOOLS USED HERE — page-specific integration callout, reuses integrations.html's .integ-band/.integ-logo-row */}
        <section className="section section--dark">
          <div className="container">
            <div className="integ-band">
              <div className="reveal-right">
                <p className="kicker"><span className="n">04</span> Built to work with</p>
                <h2 className="section-title">Tickets land where your team already works.</h2>
                <p className="section-sub">A handover isn't a dead end — it arrives with the whole conversation attached.</p>
              </div>
              <div className="integ-logos reveal-stagger">
                <div className="integ-logo-row" style={{ '--i': 0 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 7v6c0 4.4 3.4 7.4 8 8 4.6-.6 8-3.6 8-8V7l-8-4Z" /></svg><div className="integ-logo-row-text"><div className="t1">Zendesk</div><div className="t2">Tickets land where your team already works</div></div><span className="integ-logo-row-badge">Connect</span></div>
                <div className="integ-logo-row" style={{ '--i': 1 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="6" height="6" rx="2" /><rect x="14" y="4" width="6" height="6" rx="2" /><rect x="4" y="14" width="6" height="6" rx="2" /><rect x="14" y="14" width="6" height="6" rx="2" /></svg><div className="integ-logo-row-text"><div className="t1">Slack</div><div className="t2">Handovers and alerts, right in your team's channel</div></div><span className="integ-logo-row-badge">Connect</span></div>
                <div className="integ-logo-row" style={{ '--i': 2 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg><div className="integ-logo-row-text"><div className="t1">Gmail</div><div className="t2">Email handover, with the whole thread attached</div></div><span className="integ-logo-row-badge">Connect</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tr atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-grow">
              <p className="kicker"><span className="n">05</span> FAQ</p>
              <h2 className="section-title">Questions about the Support Agent.</h2>
            </div>
            <div className="faq-grid reveal">
              <div style={{ '--i': 0 } as CSSProperties}>
                {SUPPORT_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div style={{ '--i': 1 } as CSSProperties}>
                {SUPPORT_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Stop answering the same question fifteen times a day.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Start resolving tickets tonight.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
