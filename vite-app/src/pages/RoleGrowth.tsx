import { useEffect, useRef, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const CHECK_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg>
);
const LIST_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6H20M8 12H20M8 18H20" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></svg>
);
const CHAT_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.8 8.8 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.4h.4a8.5 8.5 0 0 1 8 8v.1Z" /></svg>
);
const STAR_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg>
);
const HANDOFF_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg>
);
const MEGAPHONE_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10V14H6L13 19V5L6 10H3Z" /><path d="M17 9C18 10 18 14 17 15" /></svg>
);
const NOTE_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4H14L18 8V20H6V4Z" /><path d="M14 4V8H18" /><path d="M9 12H15M9 15.5H13" /></svg>
);

const GROWTH_FAQS = [
  { q: 'Does it qualify leads, or just collect names and numbers?', a: "It asks the questions that decide fit, budget, timeline, the specifics your team already asks, and passes on only what's actually worth a meeting." },
  { q: 'What happens to a lead that goes quiet?', a: 'It follows up on the schedule you set, instead of the lead quietly going cold in a list nobody reopens.' },
  { q: 'Can we see why a lead was marked warm or handed off?', a: 'Yes. The full conversation travels with the handoff, so sales sees exactly what was asked and answered, not just a label.' },
  { q: 'Does the weekly rollup replace our own reporting?', a: "No, it's a plain-English summary of what came in and what happened to it, meant to sit alongside whatever dashboard you already use." },
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

/** Ported 1:1 from role-growth.html's <main>. */
export function RoleGrowth() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useCapabilityShowcase();

  // role-*.html sets these per-page accent tokens on <body>; industries-deep.css reads them.
  useEffect(() => {
    const { style } = document.body;
    style.setProperty('--ind-accent', '#15803D');
    style.setProperty('--ind-tint', '#E4F5E9');
    return () => {
      style.removeProperty('--ind-accent');
      style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout title="Growth — StepsAI | Turn traffic into qualified conversations" description="StepsAI for growth teams: capture leads from comments, DMs and site visits the moment they show intent, and qualify them before a human ever sees the thread.">
      <Breadcrumb section="Solutions" sectionHref="solutions.html" label="For Growth & RevOps" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">1</span>Role</span>
            <h1 className="vertical-headline">Catch the interest while it&rsquo;s still warm.</h1>
            <p className="vertical-tagline">Every rupee of growth spend earns you a comment, a DM, or a visit. Most of what happens next &mdash; the five minutes before someone replies &mdash; decides whether that spend turns into a lead or a bounce. This replies inside that window, on the channel they used, and only forwards what&rsquo;s actually qualified.</p>
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
                {/* Trimmed variant of the .ig-real mockup — no header call/video icons, a
                    two-item composer, and no home bar — so <InstagramMockup> can't be reused. */}
                <div className="ig-real">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span className="phone-status-icons">
                      <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5" /><rect x="4.3" y="5" width="3" height="6" rx="0.5" /><rect x="8.6" y="3" width="3" height="8" rx="0.5" /><rect x="12.9" y="0" width="3" height="11" rx="0.5" /></svg>
                      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 4C4.7 0.7 10.3 0.7 14 4" /><path d="M3.3 6.4C5.7 4.2 9.3 4.2 11.7 6.4" /><path d="M6 8.7C6.9 7.9 8.1 7.9 9 8.7" /></svg>
                      <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" /><rect x="2" y="2" width="17" height="7" rx="1.2" fill="currentColor" /><rect x="21.3" y="3.3" width="1.7" height="4.4" rx="0.8" fill="currentColor" /></svg>
                    </span>
                  </div>
                  <div className="ig-real-header">
                    <svg className="back" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4L7 12L15 20" /></svg>
                    <span className="ig-real-avatar">N</span>
                    <div className="ig-real-id"><span className="ig-real-name">nyra.store</span><span className="ig-real-active">Active now</span></div>
                  </div>
                  <div className="ig-real-body">
                    <div className="ig-real-bubble in">Where can I get the jacket from your reel? 😍</div>
                    <div className="ig-real-bubble out">That&rsquo;s the Nyra Rib Jacket &mdash; here's a closer look:</div>
                    <div className="chat-card">
                      <div className="chat-card-media"><img src="/images/product-oxford-shirts.jpg" alt="Aria Linen Shirt" className="chat-card-img" /></div>
                      <div className="chat-card-body">
                        <p className="chat-card-title">Nyra Rib Jacket</p>
                        <p className="chat-card-sub">3 colors in stock</p>
                        <p className="chat-card-price">&#8377;2,499</p>
                        <a href="#" className="chat-card-cta">View product</a>
                      </div>
                    </div>
                    <div className="ig-real-bubble in">Do you have it in black?</div>
                    <div className="ig-real-bubble out">Yes! Black, olive, and rust are all in stock. Want a 10% code for today?</div>
                    <div className="ig-real-bubble in">Yes please 🙏</div>
                    <div className="ig-real-bubble out">Here you go: WELCOME10, valid for the next 2 hours. Tap below to shop black.</div>
                  </div>
                  <div className="ig-real-composer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 10.5v.01M15.5 10.5v.01M8 14.5c1.2 1.2 2.8 1.2 4 1.2s2.8 0 4-1.2" /></svg>
                    <span className="ig-real-input">Message...</span>
                  </div>
                </div>
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
                    <h3 className="usecase-group-title">Capture &amp; respond</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{CHECK_ICON}</span><div><h4 className="usecase-row-title">Comment-to-DM conversion</h4><p className="usecase-row-desc">Replies to comments and story mentions, moves the conversation to DM, and answers before interest cools.</p></div></div>
                      <div className="usecase-row" data-cat="list"><span className="usecase-row-num">{LIST_ICON}</span><div><h4 className="usecase-row-title">Instant reply on every channel</h4><p className="usecase-row-desc">Answers website chat, WhatsApp, and Instagram the moment someone reaches out, day or night.</p></div></div>
                      <div className="usecase-row" data-cat="chat"><span className="usecase-row-num">{CHAT_ICON}</span><div><h4 className="usecase-row-title">Landing page Q&amp;A</h4><p className="usecase-row-desc">Answers pricing, fit, and &ldquo;does this work for me&rdquo; questions right on the page instead of losing the click.</p></div></div>
                      <div className="usecase-row" data-cat="star"><span className="usecase-row-num">{STAR_ICON}</span><div><h4 className="usecase-row-title">Lead capture, one list</h4><p className="usecase-row-desc">Every channel&rsquo;s leads land in the same list, with source and intent attached.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Qualify &amp; route</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="star"><span className="usecase-row-num">{STAR_ICON}</span><div><h4 className="usecase-row-title">Fit qualification</h4><p className="usecase-row-desc">Asks the two or three questions that separate a browser from a buyer, without feeling like a form.</p></div></div>
                      <div className="usecase-row" data-cat="handoff"><span className="usecase-row-num">{HANDOFF_ICON}</span><div><h4 className="usecase-row-title">Warm-lead handoff</h4><p className="usecase-row-desc">Hands qualified leads to sales with the full conversation attached &mdash; no re-asking.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{CHECK_ICON}</span><div><h4 className="usecase-row-title">Waitlist &amp; pre-launch capture</h4><p className="usecase-row-desc">Collects interest for things not live yet, and re-opens the conversation when they are.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Re-engage &amp; report</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="megaphone"><span className="usecase-row-num">{MEGAPHONE_ICON}</span><div><h4 className="usecase-row-title">Cold-contact re-engagement</h4><p className="usecase-row-desc">Reopens quiet WhatsApp threads with a relevant nudge, not a generic blast.</p></div></div>
                      <div className="usecase-row" data-cat="note"><span className="usecase-row-num">{NOTE_ICON}</span><div><h4 className="usecase-row-title">Channel-attributed reporting</h4><p className="usecase-row-desc">Shows which channel, campaign, or post actually produced a qualified conversation.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{CHECK_ICON}</span><div><h4 className="usecase-row-title">A/B message testing</h4><p className="usecase-row-desc">Tries different opening replies on the same offer and keeps what converts.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things that quietly cap every growth number you report.</p>
                <ul className="pain-list">
                  <li>Comments and story replies pile up faster than anyone can answer them.</li>
                  <li>By the time a DM gets a reply, the person has moved on.</li>
                  <li>Paid traffic lands on a page with no one to answer a quick question.</li>
                  <li>Leads sit in a spreadsheet nobody re-engages.</li>
                  <li>Every channel captures leads differently, so nothing rolls up cleanly.</li>
                  <li>Marketing can&rsquo;t prove which conversations actually turned into pipeline.</li>
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
              <p className="section-sub">It captures and qualifies interest. It doesn&rsquo;t invent claims or discount without you.</p>
            </div>
            <div className="guardrail-card reveal">
              <div className="guardrail-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 6V11C21 16 17.5 20.5 12 22C6.5 20.5 3 16 3 11V6L12 2Z" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 8V13M12 16V16.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Guardrails
              </div>
              <ul className="guardrail-list">
                <li>Never quotes a price or discount you haven&rsquo;t approved.</li>
                <li>Never claims a feature, timeline, or stock level it can&rsquo;t verify.</li>
                <li>Never pressures someone who&rsquo;s already said no.</li>
                <li>Escalates immediately if someone asks for a human.</li>
                <li>Keeps every capture channel&rsquo;s data in the one shared record &mdash; nothing siloed.</li>
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
              <p className="section-sub">In priority order, based on what stops leaking leads fastest.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Instant reply on your busiest channel</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Comment-to-DM conversion</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Lead capture into one list</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Fit qualification</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Warm-lead handoff to sales</span></div>
              <div className="priority-row"><span className="priority-row-num">06</span><span className="priority-row-label">Cold-contact re-engagement</span></div>
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
              <p className="section-sub">Three workflows built for how interest actually decays.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">Same-day nudge</p><p className="workflow-strip-desc">If a qualified lead goes quiet for a few hours, sends one relevant follow-up before they forget.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Warm handoff</p><p className="workflow-strip-desc">Passes qualified leads to sales with the full thread, so nobody re-asks what was already answered.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="7" y="13" width="2.6" height="7" fill="currentColor" /><rect x="11.5" y="9" width="2.6" height="11" fill="currentColor" /><rect x="16" y="5" width="2.6" height="15" fill="currentColor" /></svg></span>
                <div><p className="workflow-strip-title">Weekly rollup</p><p className="workflow-strip-desc">Reports what came in, by channel and by outcome, in plain English.</p></div>
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
            <div className="atmo-blob atmo-blob--indigo atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">06</span> Questions</p>
              <h2 className="section-title">About the growth role.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {GROWTH_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
                {GROWTH_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Someone is interested in you right now.</h2>
            <p className="final-cta-sub">Answer inside the window that actually converts.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
