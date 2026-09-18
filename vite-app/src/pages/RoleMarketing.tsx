import { useEffect, useRef, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

/**
 * role-*.html pages use a plus-shaped .faq-chev that CSS rotates 45deg when
 * open, so the shared <FaqItem>'s chevron glyph can't be reused here.
 */
function RoleFaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-question" type="button" onClick={onToggle}>
        {question}
        <svg className="faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
      </button>
      <div className="faq-answer" ref={answerRef}><p>{answer}</p></div>
    </div>
  );
}

const MARKETING_FAQS = [
  { q: 'Does it write the campaign, or just handle what comes back?', a: 'Just what comes back. You still write and send the campaign, it handles the replies, the non-converter nudge, and the report afterward.' },
  { q: 'How does it know which reply is predictable and which needs a person?', a: "It answers what it can verify from your actual offer and pages. Anything it isn't sure of gets handed to your team with the thread attached." },
  { q: 'Can we control when the non-converter nudge goes out?', a: "Yes, it's a schedule you set, and it only sends once, so contacts who opened but didn't act get a single nudge, not a chase." },
  { q: 'Does the campaign report track revenue, not just replies?', a: 'It reports what the send actually produced, replies, conversions, and outcomes, in plain English, next to whatever numbers your team already tracks.' },
];

const TAG_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4L11 3.8A2 2 0 0 0 9.6 3H4a1 1 0 0 0-1 1v5.6a2 2 0 0 0 .6 1.4l9.6 9.6a2 2 0 0 0 2.8 0l4.6-4.6a2 2 0 0 0 0-2.8Z" /><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" /></svg>
);
const MEGAPHONE_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10V14H6L13 19V5L6 10H3Z" /><path d="M17 9C18 10 18 14 17 15" /></svg>
);
const NOTE_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4H14L18 8V20H6V4Z" /><path d="M14 4V8H18" /><path d="M9 12H15M9 15.5H13" /></svg>
);

/** Ported 1:1 from role-marketing.html's <main>. */
export function RoleMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useCapabilityShowcase();

  // role-marketing.html sets these per-role accents on <body>.
  useEffect(() => {
    const { body } = document;
    body.style.setProperty('--ind-accent', '#C0247A');
    body.style.setProperty('--ind-tint', '#FBE8F3');
    return () => {
      body.style.removeProperty('--ind-accent');
      body.style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout
      title="Marketing — StepsAI | Campaigns that keep talking after they're sent"
      description="StepsAI for marketing teams: answer questions about your campaigns and promos instantly, and re-engage the contacts who didn’t convert the first time."
    >
      <Breadcrumb section="Solutions" sectionHref="solutions.html" label="For Marketing Teams" />

      <main id="top">

        <section className="vertical-hero">
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">2</span>Role</span>
            <h1 className="vertical-headline">A campaign doesn&rsquo;t end when you hit send.</h1>
            <p className="vertical-tagline">The broadcast goes out, then the replies come in &mdash; does the code still work, what sizes are left, is this the same offer as last time. This answers every one of them instantly, and quietly re-opens the conversation with everyone who didn&rsquo;t act.</p>
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
                <WhatsAppMockup name="Nyra Store" status="online">
                  <div className="wa-real-bubble in">Does the 15% code still work?<span className="wa-real-time">4:52 PM</span></div>
                  <div className="wa-real-bubble out">Yes &mdash; valid till Sunday midnight. Here&rsquo;s your saved cart:<span className="wa-real-time">4:52 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <div className="chat-card-media"><img src="/images/product-oxford-shirts.jpg" alt="Aria Linen Shirt" className="chat-card-img" /></div>
                    <div className="chat-card-body">
                      <p className="chat-card-title">Aria Linen Shirt</p>
                      <p className="chat-card-sub">Code WELCOME15 applied</p>
                      <p className="chat-card-price">&#8377;1,529<span>&#8377;1,799</span></p>
                      <a href="#" className="chat-card-cta">Checkout</a>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Oh nice, didn't realize it dropped that much<span className="wa-real-time">4:53 PM</span></div>
                  <div className="wa-real-bubble out">That's with the code auto-applied. Ready to check out?<span className="wa-real-time">4:53 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Yes, sending payment now<span className="wa-real-time">4:54 PM</span></div>
                  <div className="wa-real-bubble out">Perfect &mdash; here's your checkout link, code and free shipping already applied.<span className="wa-real-time">4:54 PM<ChatTick /></span></div>
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
                    <h3 className="usecase-group-title">Answer &amp; convert</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="tag"><span className="usecase-row-num">{TAG_ICON}</span><div><h4 className="usecase-row-title">Campaign &amp; promo Q&amp;A</h4><p className="usecase-row-desc">Answers eligibility, code validity, and terms instantly, using only the current campaign&rsquo;s approved copy.</p></div></div>
                      <div className="usecase-row" data-cat="cart"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" /><path d="M3 4H5L7.5 15H18L20 7H6" /></svg></span><div><h4 className="usecase-row-title">Instant checkout assist</h4><p className="usecase-row-desc">Surfaces a saved cart or product link the moment someone asks, code pre-applied.</p></div></div>
                      <div className="usecase-row" data-cat="list"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6H20M8 12H20M8 18H20" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></svg></span><div><h4 className="usecase-row-title">Cross-channel consistency</h4><p className="usecase-row-desc">Gives the same answer whether the question comes on WhatsApp, Instagram, or the website.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Segment &amp; re-engage</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="megaphone"><span className="usecase-row-num">{MEGAPHONE_ICON}</span><div><h4 className="usecase-row-title">Cold-list re-engagement</h4><p className="usecase-row-desc">Reopens WhatsApp threads with contacts who didn&rsquo;t act, with a message relevant to what they last looked at.</p></div></div>
                      <div className="usecase-row" data-cat="clock"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7V12L15.5 14.5" /></svg></span><div><h4 className="usecase-row-title">Segmented follow-up</h4><p className="usecase-row-desc">Groups contacts by what they clicked or asked, and follows up differently for each group.</p></div></div>
                      <div className="usecase-row" data-cat="megaphone"><span className="usecase-row-num">{MEGAPHONE_ICON}</span><div><h4 className="usecase-row-title">Win-back sequencing</h4><p className="usecase-row-desc">Runs a short, non-spammy sequence for lapsed contacts instead of one blast and silence.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Measure &amp; report</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="note"><span className="usecase-row-num">{NOTE_ICON}</span><div><h4 className="usecase-row-title">Send-level reporting</h4><p className="usecase-row-desc">Shows replies, conversions, and revenue per campaign, not just delivery numbers.</p></div></div>
                      <div className="usecase-row" data-cat="note"><span className="usecase-row-num">{NOTE_ICON}</span><div><h4 className="usecase-row-title">Content-driven conversation</h4><p className="usecase-row-desc">Turns a blog post, video, or announcement into an entry point people can ask questions against.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things that quietly waste every campaign&rsquo;s second half.</p>
                <ul className="pain-list">
                  <li>A broadcast gets replies faster than anyone can read them.</li>
                  <li>The same three questions get asked hundreds of times per send.</li>
                  <li>People who didn&rsquo;t convert never hear from you again.</li>
                  <li>Promo codes and terms live in five different places, so answers drift.</li>
                  <li>No one knows which send actually drove revenue versus noise.</li>
                  <li>Segmentation exists in theory, not in the actual send list.</li>
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
              <p className="section-sub">It runs the conversation your campaign starts. It doesn&rsquo;t invent the campaign.</p>
            </div>
            <div className="guardrail-card reveal">
              <div className="guardrail-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 6V11C21 16 17.5 20.5 12 22C6.5 20.5 3 16 3 11V6L12 2Z" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 8V13M12 16V16.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Guardrails
              </div>
              <ul className="guardrail-list">
                <li>Never extends an offer or code past its actual terms.</li>
                <li>Never sends outside the frequency and consent rules you&rsquo;ve set.</li>
                <li>Never messages someone who&rsquo;s opted out.</li>
                <li>Uses only the current campaign&rsquo;s approved copy &mdash; no improvising terms.</li>
                <li>Escalates disputes about a past promo to your team.</li>
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
              <p className="section-sub">In priority order, based on what a live send needs first.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Instant reply on your next send</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Campaign &amp; promo Q&amp;A</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Cold-list re-engagement</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Send-level reporting</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Segmented follow-up</span></div>
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
              <h2 className="section-title">What follow-up looks like after a send</h2>
              <p className="section-sub">Three workflows built around how a campaign's replies actually arrive.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">Reply triage</p><p className="workflow-strip-desc">Answers the predictable questions in the first hour, when reply volume peaks.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Non-converter nudge</p><p className="workflow-strip-desc">Follows up once, a day or two later, with the contacts who opened but didn&rsquo;t act.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="7" y="13" width="2.6" height="7" fill="currentColor" /><rect x="11.5" y="9" width="2.6" height="11" fill="currentColor" /><rect x="16" y="5" width="2.6" height="15" fill="currentColor" /></svg></span>
                <div><p className="workflow-strip-title">Campaign report</p><p className="workflow-strip-desc">Sends a plain-English summary of what the send actually produced.</p></div>
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
            <div className="atmo-blob atmo-blob--orange atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">06</span> Questions</p>
              <h2 className="section-title">About the marketing role.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {MARKETING_FAQS.slice(0, 2).map((item, i) => (
                  <RoleFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
                {MARKETING_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <RoleFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
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
            <h2 className="final-cta-headline">Your last campaign is still getting replies.</h2>
            <p className="final-cta-sub">Make sure every one of them gets answered.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
