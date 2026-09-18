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

const APPOINTMENTS_FAQS = [
  { q: 'Can it double-book a slot by mistake?', a: 'No, it checks the live calendar before offering a slot, and never overrides a block or hold your team has already set.' },
  { q: 'Does it cancel appointments on its own?', a: "No, it never cancels without confirming with the customer first, and it escalates anything that isn't a standard scheduling request." },
  { q: 'How fast does it follow up after a no-show?', a: 'Same day, so the slot gets a chance at rebooking instead of just sitting empty until someone notices.' },
  { q: 'Does the weekly report replace our own booking numbers?', a: "No, it's a plain-English summary of bookings, reschedules, no-shows, and recoveries, meant to sit alongside whatever you already track." },
];

const CALENDAR_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg>
);

/** Ported 1:1 from role-appointments.html's <main>. */
export function RoleAppointments() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useCapabilityShowcase();

  // role-appointments.html sets these per-role accents on <body>.
  useEffect(() => {
    const { body } = document;
    body.style.setProperty('--ind-accent', '#475569');
    body.style.setProperty('--ind-tint', '#EEF1F4');
    return () => {
      body.style.removeProperty('--ind-accent');
      body.style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout
      title="Appointments — StepsAI | Scheduling, reminders and the follow-through"
      description="StepsAI for appointment-based businesses: books, reminds, and reschedules automatically, then runs the recovery and reporting workflows your team keeps meaning to get to."
    >
      <Breadcrumb section="Solutions" sectionHref="solutions.html" label="For Appointment Booking" />

      <main id="top">

        <section className="vertical-hero">
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">5</span>Role</span>
            <h1 className="vertical-headline">The booking is the easy part. The follow-through is where it usually drops.</h1>
            <p className="vertical-tagline">A confirmed slot still needs a reminder, a reschedule handled without a phone call, and a follow-up if someone doesn&rsquo;t show. This runs all of it on a schedule, and reports what happened &mdash; in plain English, every week.</p>
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
                <WhatsAppMockup name="Keystone Realty" status="online">
                  <div className="wa-real-bubble in">Can I reschedule my 4pm visit tomorrow?<span className="wa-real-time">4:52 PM</span></div>
                  <div className="wa-real-bubble out">Sure &mdash; here's what's open tomorrow:<span className="wa-real-time">4:52 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <p className="chat-card-slot-label">Keystone Realty &middot; Site visit</p>
                    <div className="chat-card-slots">
                      <span className="chat-card-slot">11:00 AM</span>
                      <span className="chat-card-slot">5:30 PM</span>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">5:30pm works better<span className="wa-real-time">4:53 PM</span></div>
                  <div className="wa-real-bubble out">Done &mdash; moved to 5:30pm tomorrow. I've updated your confirmation and the agent's calendar.<span className="wa-real-time">4:53 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Great, thank you<span className="wa-real-time">4:53 PM</span></div>
                  <div className="wa-real-bubble out">You're welcome! I'll send a reminder an hour before.<span className="wa-real-time">4:54 PM<ChatTick /></span></div>
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
                    <h3 className="usecase-group-title">Book &amp; remind</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num">{CALENDAR_ICON}</span><div><h4 className="usecase-row-title">Appointment booking</h4><p className="usecase-row-desc">Offers real open slots and books directly, for new and returning customers.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num">{CALENDAR_ICON}</span><div><h4 className="usecase-row-title">Rescheduling &amp; cancellation</h4><p className="usecase-row-desc">Handles changes conversationally, no call required, and keeps the calendar accurate.</p></div></div>
                      <div className="usecase-row" data-cat="bell"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg></span><div><h4 className="usecase-row-title">Reminders that let you act</h4><p className="usecase-row-desc">Sends a reminder that can be confirmed, rescheduled, or cancelled from the message itself.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Recover &amp; automate</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="clock"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7V12L15.5 14.5" /></svg></span><div><h4 className="usecase-row-title">No-show recovery</h4><p className="usecase-row-desc">Reaches out the same day to rebook a missed slot instead of leaving it empty.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num">{CALENDAR_ICON}</span><div><h4 className="usecase-row-title">Abandoned-booking recovery</h4><p className="usecase-row-desc">Follows up on a booking that was started but never confirmed.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num">{CALENDAR_ICON}</span><div><h4 className="usecase-row-title">Scheduled workflows</h4><p className="usecase-row-desc">Runs recurring outreach &mdash; check-ins, renewals, seasonal reminders &mdash; on the schedule you set.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Report</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="note"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4H14L18 8V20H6V4Z" /><path d="M14 4V8H18" /><path d="M9 12H15M9 15.5H13" /></svg></span><div><h4 className="usecase-row-title">Weekly plain-English report</h4><p className="usecase-row-desc">Summarizes bookings, reschedules, no-shows, and recoveries, every week.</p></div></div>
                      <div className="usecase-row" data-cat="link"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4H11V7H13C14.1 7 15 7.9 15 9V11H18V9H20V15H18V13H15V15C15 16.1 14.1 17 13 17H11V20H9V17H7C5.9 17 5 16.1 5 15V13H2V11H5V9C5 7.9 5.9 7 7 7H9V4Z" /></svg></span><div><h4 className="usecase-row-title">Calendar sync</h4><p className="usecase-row-desc">Keeps one calendar as the source of truth across every channel a booking comes in from.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things every appointment-based business loses time to.</p>
                <ul className="pain-list">
                  <li>Rescheduling a slot means a phone call, both ways.</li>
                  <li>No-shows waste a slot that could&rsquo;ve gone to someone else.</li>
                  <li>Reminders get sent late, or not at all.</li>
                  <li>Abandoned bookings and quiet leads never get a second attempt.</li>
                  <li>Follow-up after the appointment is the first thing to slip.</li>
                  <li>No one has time to write the weekly &ldquo;what happened&rdquo; summary.</li>
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
              <p className="section-sub">It manages the calendar. Judgment calls about who gets seen stay with your team.</p>
            </div>
            <div className="guardrail-card reveal">
              <div className="guardrail-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 6V11C21 16 17.5 20.5 12 22C6.5 20.5 3 16 3 11V6L12 2Z" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 8V13M12 16V16.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Guardrails
              </div>
              <ul className="guardrail-list">
                <li>Never double-books &mdash; always checks the live calendar first.</li>
                <li>Never cancels an appointment without confirming with the customer.</li>
                <li>Never overrides a block or hold your team has set.</li>
                <li>Escalates immediately for anything that isn&rsquo;t a standard scheduling request.</li>
                <li>Reports every no-show and recovery honestly, not just the wins.</li>
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
              <p className="section-sub">In priority order, based on what stops empty slots fastest.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Appointment booking</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Reminders that let you act</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Rescheduling &amp; cancellation</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">No-show recovery</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Weekly plain-English report</span></div>
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
              <h2 className="section-title">What follow-up looks like after the appointment</h2>
              <p className="section-sub">Three workflows built for how a calendar actually behaves.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M8 12.5L10.5 15L16 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">Post-visit check-in</p><p className="workflow-strip-desc">Sends a short follow-up and collects feedback after the appointment.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Recovery workflow</p><p className="workflow-strip-desc">Reaches out same-day on any no-show or abandoned booking, before the slot is forgotten.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 20V4M4 20H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="7" y="13" width="2.6" height="7" fill="currentColor" /><rect x="11.5" y="9" width="2.6" height="11" fill="currentColor" /><rect x="16" y="5" width="2.6" height="15" fill="currentColor" /></svg></span>
                <div><p className="workflow-strip-title">Weekly report</p><p className="workflow-strip-desc">Plain-English summary of bookings, reschedules, no-shows, and what was recovered.</p></div>
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
              <h2 className="section-title">About the appointments role.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {APPOINTMENTS_FAQS.slice(0, 2).map((item, i) => (
                  <RoleFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
                {APPOINTMENTS_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <RoleFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
             TOOLS USED HERE — page-specific integration callout,
             reuses integrations.html's .integ-band/.integ-logo-row
             ============================================================ */}
        <section className="section section--dark">
          <div className="container">
            <div className="integ-band">
              <div className="reveal">
                <p className="kicker"><span className="n">07</span> Built to work with</p>
                <h2 className="section-title">No calendar juggling. It books straight into what you use.</h2>
                <p className="section-sub">Real availability in, a confirmed slot out. Nothing to reconcile by hand.</p>
              </div>
              <div className="reveal">
                <div className="integ-logos">
                  <div className="integ-logo-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="m9 15 2 2 4-4" /></svg><div className="integ-logo-row-text"><div className="t1">Google Calendar</div><div className="t2">Two-way sync — new bookings appear instantly, no double-booking</div></div><span className="integ-logo-row-badge">Connect</span></div>
                  <div className="integ-logo-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg><div className="integ-logo-row-text"><div className="t1">Calendly</div><div className="t2">Real slot booking, not just availability talk</div></div><span className="integ-logo-row-badge">Connect</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">Someone just tried to book, reschedule, or cancel.</h2>
            <p className="final-cta-sub">Handle it before it becomes a phone call.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
