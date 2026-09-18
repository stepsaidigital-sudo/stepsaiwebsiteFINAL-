import { useEffect, useRef, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const STAR_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg>
);
const TAG_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4L11 3.8A2 2 0 0 0 9.6 3H4a1 1 0 0 0-1 1v5.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l4.6-4.6a2 2 0 0 0 0-2.8Z" /><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" /></svg>
);
const CHECK_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg>
);
const CALENDAR_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg>
);
const HANDOFF_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg>
);
const COMPARE_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h10M4 18h7" /><circle cx="19" cy="12" r="2" /><circle cx="16" cy="18" r="2" /></svg>
);

const SALES_FAQS = [
  { q: "Does it quote a price we haven't approved?", a: "No. It answers from pricing you've set, and if a question needs a discount or a custom quote, it hands that off instead of guessing." },
  { q: 'What actually lands on our calendar?', a: 'A meeting where the pricing question is already answered, so the call starts at the actual decision, not back at "so what does this cost."' },
  { q: "What happens if someone books and doesn't show up?", a: 'It reaches out the same day to rebook, instead of the slot just sitting empty on your calendar until you notice.' },
  { q: 'Does the pipeline report replace our CRM?', a: "No, it's a weekly plain-English summary of what came in, qualified or not, and why, meant to sit alongside your CRM, not replace it." },
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

/** Ported 1:1 from role-sales.html's <main>. */
export function RoleSales() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useCapabilityShowcase();

  // role-*.html sets these per-page accent tokens on <body>; industries-deep.css reads them.
  useEffect(() => {
    const { style } = document.body;
    style.setProperty('--ind-accent', '#4338CA');
    style.setProperty('--ind-tint', '#EAEAFB');
    return () => {
      style.removeProperty('--ind-accent');
      style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout title="Sales — StepsAI | Qualify leads and close deals faster" description="StepsAI for sales teams: answers pricing and fit questions, qualifies who’s ready to buy, and books the meeting without a rep touching it.">
      <Breadcrumb section="Solutions" sectionHref="solutions.html" label="For Sales Teams" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">3</span>Role</span>
            <h1 className="vertical-headline">It answers the pricing question. You take the meeting that&rsquo;s already qualified.</h1>
            <p className="vertical-tagline">Most deals stall on the same three questions &mdash; pricing, fit, and timeline &mdash; asked at 11pm when no rep is around. This answers them immediately, checks fit against your ICP, and only books time with a rep once someone&rsquo;s actually ready.</p>
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
                  <div className="wa-real-bubble in">What&rsquo;s included in the Pro plan?<span className="wa-real-time">4:52 PM</span></div>
                  <div className="wa-real-bubble out">Pro includes usage-based billing, SSO, and priority support &mdash; want me to book 15 minutes with a rep, or send the comparison sheet first?<span className="wa-real-time">4:52 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Let's do the call<span className="wa-real-time">4:53 PM</span></div>
                  <div className="wa-real-bubble out">Here's when a rep is free this week:<span className="wa-real-time">4:53 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <p className="chat-card-slot-label">Cobalt Analytics &middot; Sales</p>
                    <div className="chat-card-slots">
                      <span className="chat-card-slot">Tue, 2:00 PM</span>
                      <span className="chat-card-slot">Wed, 10:00 AM</span>
                      <span className="chat-card-slot">Thu, 3:00 PM</span>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Wednesday 10am<span className="wa-real-time">4:54 PM</span></div>
                  <div className="wa-real-bubble out">Booked &mdash; a rep will call you Wednesday at 10am. I've sent a calendar invite and a quick primer on your use case to prep.<span className="wa-real-time">4:54 PM<ChatTick /></span></div>
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
                    <h3 className="usecase-group-title">Qualify</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="star"><span className="usecase-row-num">{STAR_ICON}</span><div><h4 className="usecase-row-title">ICP fit-check</h4><p className="usecase-row-desc">Asks the questions that separate a fit from a browser, against your ideal customer profile.</p></div></div>
                      <div className="usecase-row" data-cat="tag"><span className="usecase-row-num">{TAG_ICON}</span><div><h4 className="usecase-row-title">Pricing &amp; packaging Q&amp;A</h4><p className="usecase-row-desc">Answers plan, pricing, and add-on questions using only your current, approved pricing.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{CHECK_ICON}</span><div><h4 className="usecase-row-title">Objection handling</h4><p className="usecase-row-desc">Responds to the common &ldquo;why not just use X&rdquo; objections with your approved positioning.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Convert</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num">{CALENDAR_ICON}</span><div><h4 className="usecase-row-title">Meeting booking</h4><p className="usecase-row-desc">Offers real open slots from your calendar and books the meeting, no back-and-forth.</p></div></div>
                      <div className="usecase-row" data-cat="handoff"><span className="usecase-row-num">{HANDOFF_ICON}</span><div><h4 className="usecase-row-title">Warm handoff to rep</h4><p className="usecase-row-desc">Hands a qualified lead to the right rep with the full conversation and fit notes attached.</p></div></div>
                      <div className="usecase-row" data-cat="compare"><span className="usecase-row-num">{COMPARE_ICON}</span><div><h4 className="usecase-row-title">Proposal &amp; comparison sends</h4><p className="usecase-row-desc">Sends the pricing sheet, case study, or comparison doc a prospect asks for.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Follow up</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{CHECK_ICON}</span><div><h4 className="usecase-row-title">Stalled-deal nudge</h4><p className="usecase-row-desc">Follows up once on a lead that went quiet mid-conversation, before writing them off.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{CHECK_ICON}</span><div><h4 className="usecase-row-title">Renewal &amp; upsell signals</h4><p className="usecase-row-desc">Flags when an existing customer&rsquo;s usage or questions suggest they&rsquo;re ready to expand.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things every sales team loses hours to, every week.</p>
                <ul className="pain-list">
                  <li>Pricing and fit questions come in outside working hours.</li>
                  <li>Reps spend time qualifying people who were never going to buy.</li>
                  <li>Good leads go cold waiting for a callback slot.</li>
                  <li>Meetings get booked with people who aren&rsquo;t the actual decision-maker.</li>
                  <li>Handoffs lose context &mdash; the prospect repeats themselves to the rep.</li>
                  <li>No visibility into which questions are actually stalling deals.</li>
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
              <p className="section-sub">It qualifies and books. Negotiating and closing custom terms stays with a rep.</p>
            </div>
            <div className="guardrail-card reveal">
              <div className="guardrail-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 6V11C21 16 17.5 20.5 12 22C6.5 20.5 3 16 3 11V6L12 2Z" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 8V13M12 16V16.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Guardrails
              </div>
              <ul className="guardrail-list">
                <li>Never quotes a price outside your published plans without a rep.</li>
                <li>Never negotiates custom contract terms or discounts.</li>
                <li>Never signs or confirms a deal &mdash; that&rsquo;s the rep&rsquo;s call.</li>
                <li>Hands off immediately if a prospect asks for a human.</li>
                <li>Flags every fit-check result honestly, even when the answer is &ldquo;not a fit yet&rdquo;.</li>
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
              <p className="section-sub">In priority order, based on what actually stalls a pipeline.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Pricing &amp; packaging Q&amp;A</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Meeting booking</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">ICP fit-check</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Warm handoff to rep</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Stalled-deal nudge</span></div>
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
              <h2 className="section-title">What follow-up looks like after the first reply</h2>
              <p className="section-sub">Three workflows built for how a pipeline actually moves.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">Booking confirmation</p><p className="workflow-strip-desc">Confirms the meeting, shares an agenda, and sends a reminder before the call.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">No-show recovery</p><p className="workflow-strip-desc">Reaches out the same day to rebook, instead of letting the slot just disappear.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="7" y="13" width="2.6" height="7" fill="currentColor" /><rect x="11.5" y="9" width="2.6" height="11" fill="currentColor" /><rect x="16" y="5" width="2.6" height="15" fill="currentColor" /></svg></span>
                <div><p className="workflow-strip-title">Pipeline report</p><p className="workflow-strip-desc">Reports what came in, qualified vs. not, and why &mdash; weekly, in plain English.</p></div>
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
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--indigo atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">06</span> Questions</p>
              <h2 className="section-title">About the sales role.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {SALES_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
                {SALES_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Someone is asking about pricing right now.</h2>
            <p className="final-cta-sub">Answer before they go looking at a competitor instead.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
