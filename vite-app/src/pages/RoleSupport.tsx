import { useEffect, useRef, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const CART_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" /><path d="M3 4H5L7.5 15H18L20 7H6" /></svg>
);
const CHAT_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.8 8.8 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.4h.4a8.5 8.5 0 0 1 8 8v.1Z" /></svg>
);
const HANDOFF_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg>
);
const ALERT_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 20H22L12 3Z" /><path d="M12 9V13M12 16.5V17" /></svg>
);
const CHECK_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg>
);
const NOTE_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4H14L18 8V20H6V4Z" /><path d="M14 4V8H18" /><path d="M9 12H15M9 15.5H13" /></svg>
);

const SUPPORT_FAQS = [
  { q: 'What if it gives a customer the wrong answer?', a: "It answers from what you've approved, and says so when it isn't sure, handing the ticket to a person instead of guessing." },
  { q: 'Does it actually close tickets, or just reply to them?', a: "It checks back that the fix worked before closing, so a ticket doesn't get marked resolved on a hunch." },
  { q: 'What happens during an escalation?', a: 'The customer gets kept updated while your team works the harder case, instead of going quiet until someone gets to it.' },
  { q: 'Does the weekly report replace our helpdesk analytics?', a: "No, it's a plain-English summary of volume, resolution rate, and recurring issues, meant to sit alongside your existing helpdesk, not replace it." },
];

/** Role-page FAQ rows use the `.faq-chev` plus-glyph (rotated to an × when open), not Pricing's caret, so the shared <FaqItem> chevron can't be reused here. */
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

/** Ported 1:1 from role-support.html's <main>. */
export function RoleSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useCapabilityShowcase();

  // role-*.html sets these per-page accent tokens on <body>; industries-deep.css reads them.
  useEffect(() => {
    const { style } = document.body;
    style.setProperty('--ind-accent', '#0369A1');
    style.setProperty('--ind-tint', '#E0F2FE');
    return () => {
      style.removeProperty('--ind-accent');
      style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout title="Support — StepsAI | Resolve tickets and delight customers" description="StepsAI for support teams: resolves the questions you answer every day, and hands over cleanly, with full history, when it can’t.">
      <Breadcrumb section="Solutions" sectionHref="solutions.html" label="For Support Teams" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">4</span>Role</span>
            <h1 className="vertical-headline">Most tickets are the same five questions. Let it answer those.</h1>
            <p className="vertical-tagline">Order status, account access, and &ldquo;how do I&rdquo; questions make up most of a support queue. This resolves them on the spot, in the channel the customer already used, and hands off the rest with nothing lost in translation.</p>
            <div className="vertical-hero-actions">
              <a href="pricing.html" className="btn-ind">Start free trial</a>
              <a href="solutions.html" className="vertical-hero-link">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                All roles
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL SCENARIO
             ============================================================ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="spread reveal">
              <div>
                <div className="spread-index">Real scenario</div>
                <h3>What this actually looks like in the channel.</h3>
                <p>Not a script &mdash; this is the shape of a real conversation, answered in seconds instead of a queue.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Cobalt Analytics" status="online">
                  <div className="wa-real-bubble in">My export has been stuck at &ldquo;processing&rdquo; for an hour.<span className="wa-real-time">4:52 PM</span></div>
                  <div className="wa-real-bubble out">Let me check that for you.<span className="wa-real-time">4:52 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble out">Found it &mdash; it actually finished 2 minutes ago, just needed a refresh. Here&rsquo;s the direct download link.<span className="wa-real-time">4:53 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Oh perfect, got it. Thank you!<span className="wa-real-time">4:53 PM</span></div>
                  <div className="wa-real-bubble out">Anytime! I've also flagged the refresh delay to the team so it doesn't happen again.<span className="wa-real-time">4:54 PM<ChatTick /></span></div>
                </WhatsAppMockup>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base pain-use-section section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="pain-use-grid reveal reveal-stagger">

              <div className="usecase-feed">
                <div className="capability-showcase">
                  <div className="capability-visual"></div>
                  <div className="capability-list">
                    <h3 className="usecase-group-title">Resolve</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="cart"><span className="usecase-row-num">{CART_ICON}</span><div><h4 className="usecase-row-title">Order &amp; account status</h4><p className="usecase-row-desc">Answers order, subscription, and account-status questions instantly, verified against your system.</p></div></div>
                      <div className="usecase-row" data-cat="chat"><span className="usecase-row-num">{CHAT_ICON}</span><div><h4 className="usecase-row-title">How-do-I support</h4><p className="usecase-row-desc">Walks customers through common product questions using your help docs, not guesses.</p></div></div>
                      <div className="usecase-row" data-cat="chat"><span className="usecase-row-num">{CHAT_ICON}</span><div><h4 className="usecase-row-title">Troubleshooting</h4><p className="usecase-row-desc">Runs through the standard fix sequence for known issues before escalating.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Escalate cleanly</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="handoff"><span className="usecase-row-num">{HANDOFF_ICON}</span><div><h4 className="usecase-row-title">Human handoff with context</h4><p className="usecase-row-desc">Transfers to a person with the full conversation and any relevant account details attached.</p></div></div>
                      <div className="usecase-row" data-cat="handoff"><span className="usecase-row-num">{HANDOFF_ICON}</span><div><h4 className="usecase-row-title">Ticket creation</h4><p className="usecase-row-desc">Opens a ticket for anything it can&rsquo;t resolve, with the full conversation attached so your team isn&rsquo;t starting cold.</p></div></div>
                      <div className="usecase-row" data-cat="alert"><span className="usecase-row-num">{ALERT_ICON}</span><div><h4 className="usecase-row-title">Escalates on frustration</h4><p className="usecase-row-desc">Recognizes anger or urgency in the message and hands off to a person immediately, instead of trying one more script.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Learn &amp; report</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{CHECK_ICON}</span><div><h4 className="usecase-row-title">Recurring-issue detection</h4><p className="usecase-row-desc">Flags when the same problem is spiking, before it becomes a wave of tickets.</p></div></div>
                      <div className="usecase-row" data-cat="note"><span className="usecase-row-num">{NOTE_ICON}</span><div><h4 className="usecase-row-title">Plain-English reporting</h4><p className="usecase-row-desc">Reports what it resolved, what it escalated, and why, on a schedule you set.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things that quietly burn out every support team.</p>
                <ul className="pain-list">
                  <li>The same five questions make up most of the ticket queue.</li>
                  <li>Customers repeat their issue to every person they get handed to.</li>
                  <li>Response times slip the moment volume spikes.</li>
                  <li>Simple account and order questions wait behind genuinely hard ones.</li>
                  <li>No one has time to write up what&rsquo;s actually going wrong, at scale.</li>
                  <li>After-hours messages just wait until morning.</li>
                </ul>
              </aside>

            </div>
          </div>
        </section>

        {/* ============================================================
             GUARDRAILS
             ============================================================ */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Guardrails</p>
              <h2 className="section-title">What it will never do</h2>
              <p className="section-sub">It resolves what&rsquo;s known and safe. Judgment calls and refunds stay with your team.</p>
            </div>
            <div className="guardrail-card reveal">
              <div className="guardrail-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 6V11C21 16 17.5 20.5 12 22C6.5 20.5 3 16 3 11V6L12 2Z" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 8V13M12 16V16.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Guardrails
              </div>
              <ul className="guardrail-list">
                <li>Never issues a refund or credit without your approval rules.</li>
                <li>Never guesses at an answer it isn&rsquo;t confident about &mdash; escalates instead.</li>
                <li>Never closes a ticket the customer hasn&rsquo;t confirmed is resolved.</li>
                <li>Escalates immediately on anger, legal language, or safety concerns.</li>
                <li>Keeps the full conversation history attached through every handoff.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Where to start</p>
              <h2 className="section-title">If you can only start with one thing</h2>
              <p className="section-sub">In priority order, based on what removes the most ticket volume fastest.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Order &amp; account status</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Human handoff with context</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">How-do-I support</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Ticket creation</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Recurring-issue detection</span></div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Follow-up</p>
              <h2 className="section-title">What follow-up looks like after a resolution</h2>
              <p className="section-sub">Three workflows built for how a queue actually recovers.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">Resolution confirmation</p><p className="workflow-strip-desc">Checks back that the fix actually worked before closing the ticket.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Escalation loop</p><p className="workflow-strip-desc">Keeps the customer updated while a human works a harder case, instead of going silent.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="7" y="13" width="2.6" height="7" fill="currentColor" /><rect x="11.5" y="9" width="2.6" height="11" fill="currentColor" /><rect x="16" y="5" width="2.6" height="15" fill="currentColor" /></svg></span>
                <div><p className="workflow-strip-title">Weekly report</p><p className="workflow-strip-desc">Summarizes ticket volume, resolution rate, and recurring issues in plain English.</p></div>
              </div>
            </div>

            <div className="ind-crosslink">
              <p>Every role runs on the same ten platform capabilities, tracked the same way.</p>
              <a href="capabilities.html">See the platform capabilities <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        {/* ============================================================
             FAQ
             ============================================================ */}
        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">06</span> Questions</p>
              <h2 className="section-title">About the support role.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {SUPPORT_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
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

        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">Your queue just got five questions shorter.</h2>
            <p className="final-cta-sub">Free your team for the tickets that actually need them.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
