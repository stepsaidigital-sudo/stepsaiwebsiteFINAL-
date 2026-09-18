import { useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const EDTECH_FAQS = [
  {
    q: 'Does it actually know our courses, fees, and eligibility rules, or just give generic answers?',
    a: "It answers from your actual programme list, fees, and eligibility criteria, not generic education advice. If a student asks something you haven't given it an answer for, it says so and passes the question to a counsellor instead of guessing.",
  },
  {
    q: 'Can it book a counsellor call itself, or does it just tell students to call in?',
    a: 'It shows real counsellor availability, books the slot the student picks, and sends the confirmation and a reminder before the call, the same way it does in the WhatsApp example above.',
  },
  {
    q: 'What happens if a student gets stuck partway through the application form?',
    a: "It walks them through the form and the documents required, and flags anything missing before they submit, then follows up on WhatsApp if they still haven't finished a day or two later.",
  },
  {
    q: 'Does a human ever take over the conversation?',
    a: "Yes. Once an applicant is ready to move ahead, or asks for a person directly, it hands off to a counsellor with the full conversation and their qualifications attached, so nobody re-asks what's already been answered.",
  },
];

/** Ported 1:1 from industry-edtech.html's <main>. */
export function IndustryEdtech() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useCapabilityShowcase();
  return (
    <Layout
      title="EdTech — StepsAI | Improve admissions conversion"
      description="StepsAI for education: course discovery, admissions Q&A, application assistance, counselling booking, and student retention, in one agent."
    >
      <Breadcrumb section="Industries" sectionHref="industries.html" label="Education & Training" />

      <main id="top">
        <section className="vertical-hero" style={{ backgroundImage: "url('/images/hero-edtech.jpg')" }}>
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">2</span>EdTech</span>
            <h1 className="vertical-headline">Answer the eligibility and fee questions. Keep the applicant moving.</h1>
            <p className="vertical-tagline">Every applicant asks the same eligibility and fee questions. Every counsellor answers them the same way, over and over, while the ones who don't get a fast answer quietly apply somewhere else.</p>
            <div className="vertical-hero-actions">
              <a href="pricing.html" className="btn-ind">Start free trial</a>
              <a href="industries.html" className="vertical-hero-link">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                All industries
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL SCENARIO — what a real WhatsApp conversation looks like
             ============================================================ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="spread reveal">
              <div>
                <div className="spread-index">Real scenario</div>
                <h3>What this actually looks like on WhatsApp.</h3>
                <p>Not a script — this is a real student going quiet, followed up before they apply somewhere else.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Riverstone Institute" status="online">
                  <div className="wa-real-bubble out">Still thinking about the fall intake? Happy to walk you through the application.<span className="wa-real-time">6:15 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Yes! What documents do I need?<span className="wa-real-time">6:16 PM</span></div>
                  <div className="wa-real-bubble out">Just your 12th marksheet, a passport photo, and the fee receipt. Want the checklist plus a quick counsellor call to walk through it?<span className="wa-real-time">6:16 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">A call would help, yes<span className="wa-real-time">6:17 PM</span></div>
                  <div className="wa-real-bubble out">Here's when a counsellor is free this week:<span className="wa-real-time">6:17 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <p className="chat-card-slot-label">Admissions counsellor</p>
                    <div className="chat-card-slots">
                      <span className="chat-card-slot">Tue, 3:00 PM</span>
                      <span className="chat-card-slot">Wed, 11:00 AM</span>
                      <span className="chat-card-slot">Thu, 5:00 PM</span>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Tuesday 3pm works<span className="wa-real-time">6:18 PM</span></div>
                  <div className="wa-real-bubble out">Booked &mdash; a counsellor will call this number Tuesday at 3pm, and I've sent the document checklist to your email too.<span className="wa-real-time">6:18 PM<ChatTick /></span></div>
                </WhatsAppMockup>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base pain-use-section section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="pain-use-grid reveal reveal-stagger">

              <div className="usecase-feed">
                <div className="capability-showcase" data-visual-bg="/images/hero-edtech.jpg">
                  <div className="capability-visual"></div>
                  <div className="capability-list">
                    <h3 className="usecase-group-title">Discover &amp; apply</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="search"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><path d="M21 21L15 15" /></svg></span><div><h4 className="usecase-row-title">Course discovery</h4><p className="usecase-row-desc">Recommends programmes by interests, education, budget, and career goals, and compares fees, duration, and outcomes.</p></div></div>
                      <div className="usecase-row" data-cat="chat"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.8 8.8 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.4h.4a8.5 8.5 0 0 1 8 8v.1Z" /></svg></span><div><h4 className="usecase-row-title">Admissions Q&amp;A</h4><p className="usecase-row-desc">Answers eligibility, fees, deadlines, document, exam, and selection questions, and shares prospectuses and admission guides.</p></div></div>
                      <div className="usecase-row" data-cat="star"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg></span><div><h4 className="usecase-row-title">Student lead generation</h4><p className="usecase-row-desc">Captures name, phone, email, location, qualification, and course interest, and creates the lead with the conversation attached.</p></div></div>
                      {/* Renamed from "Intent-based qualification" — that name implied a lead-scoring
                           model, which isn't a real feature. Reworded to describe the actual rule-based
                           trigger: it notices a specific action, it doesn't score intent. */}
                      <div className="usecase-row" data-cat="star"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg></span><div><h4 className="usecase-row-title">Ready-to-enrol alerts</h4><p className="usecase-row-desc">Notices when an applicant asks to book a call or move ahead, and flags the counsellor right away instead of waiting for a daily report.</p></div></div>
                      <div className="usecase-row" data-cat="form"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 11H15M9 15H13" /></svg></span><div><h4 className="usecase-row-title">Application assistance</h4><p className="usecase-row-desc">Guides students step by step through forms and document requirements, and explains missing or incomplete items.</p></div></div>
                      <div className="usecase-row" data-cat="form"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 11H15M9 15H13" /></svg></span><div><h4 className="usecase-row-title">Application status</h4><p className="usecase-row-desc">Shows current status and pending actions, and notifies students when documents, interviews, or payments are required.</p></div></div>
                      <div className="usecase-row" data-cat="chat"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.8 8.8 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.4h.4a8.5 8.5 0 0 1 8 8v.1Z" /></svg></span><div><h4 className="usecase-row-title">Fee and scholarship support</h4><p className="usecase-row-desc">Explains tuition, payment schedules, scholarships, and financial aid, and shares approved payment links.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Engage &amp; enrol</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg></span><div><h4 className="usecase-row-title">Counselling booking</h4><p className="usecase-row-desc">Shows counsellor availability and books calls, virtual sessions, or campus visits, then sends confirmations and reminders.</p></div></div>
                      <div className="usecase-row" data-cat="form"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 11H15M9 15H13" /></svg></span><div><h4 className="usecase-row-title">Open day and webinar registration</h4><p className="usecase-row-desc">Registers students for events and sends reminders, joining links, and post-event follow-ups.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg></span><div><h4 className="usecase-row-title">Campus and programme guide</h4><p className="usecase-row-desc">Explains accommodation, placements, facilities, faculty, and student life, and shares campus tours.</p></div></div>
                      <div className="usecase-row" data-cat="clock"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7V12L15.5 14.5" /></svg></span><div><h4 className="usecase-row-title">WhatsApp follow-ups</h4><p className="usecase-row-desc">Follows up with incomplete applicants, and sends deadline reminders, brochures, and course updates.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Support &amp; retain</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg></span><div><h4 className="usecase-row-title">Student onboarding</h4><p className="usecase-row-desc">Shares orientation, registration, login, and first-week checklists.</p></div></div>
                      <div className="usecase-row" data-cat="chat"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.8 8.8 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.4h.4a8.5 8.5 0 0 1 8 8v.1Z" /></svg></span><div><h4 className="usecase-row-title">Existing student support</h4><p className="usecase-row-desc">Answers attendance, timetable, exam, fee, certificate, and portal questions, and creates tickets for unresolved issues.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg></span><div><h4 className="usecase-row-title">At-risk student engagement</h4><p className="usecase-row-desc">Checks in with inactive students, identifies blockers, and notifies student-success teams for human intervention.</p></div></div>
                      <div className="usecase-row" data-cat="handoff"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg></span><div><h4 className="usecase-row-title">Human handoff</h4><p className="usecase-row-desc">Transfers serious applicants to counsellors with qualifications, course interest, and full context attached.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things your counsellors deal with every single day.</p>
                <ul className="pain-list">
                  <li>Admissions teams answer the same questions repeatedly.</li>
                  <li>Student enquiries go cold when responses are delayed.</li>
                  <li>Applicants drop off before completing forms or documents.</li>
                  <li>Counsellors spend time on basic eligibility and fee queries.</li>
                  <li>Deadlines, scholarships, and payment requirements are missed.</li>
                  <li>Current students struggle to find administrative information.</li>
                </ul>
              </aside>

            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Where to start</p>
              <h2 className="section-title">If you can only start with one thing</h2>
              <p className="section-sub">In priority order, based on what moves an applicant forward fastest.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Course discovery</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Admissions Q&amp;A</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Lead capture</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Counselling booking</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Application assistance</span></div>
              <div className="priority-row"><span className="priority-row-num">06</span><span className="priority-row-label">WhatsApp follow-up</span></div>
              <div className="priority-row"><span className="priority-row-num">07</span><span className="priority-row-label">Student onboarding</span></div>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL AUTOMATION — the actual enrollment nurture workflow
             ============================================================ */}
        <section className="wf-section">
          <div className="container">
            <div className="section-head center reveal">
              <h2 className="section-title">What automation looks like, live.</h2>
              <p className="section-sub">This is the exact logic behind the "Enrollment Nurture" template — one of many. There's no limit to what you can automate once you're connected.</p>
            </div>

            <div className="wf-canvas-wrap reveal">
              <div className="wf-canvas">
                <div className="wf-live-tag">Live example — Course enquiry nurture</div>

                <div className="wf-trunk">
                  <div className="wf-node" data-wf-step="1">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg></span>
                    <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Course page enquiry</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="2"></div>
                  <div className="wf-node" data-wf-step="2">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                    <div><div className="wf-node-kind">Action · Wait</div><div className="wf-node-title">Wait 1 hour</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="3"></div>
                  <div className="wf-node" data-wf-step="3">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                    <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check enrollment status</div></div>
                  </div>
                </div>

                <div className="wf-fork">
                  <div className="wf-fork-stub" data-wf-step="4"></div>
                  <div className="wf-fork-bar"></div>
                  <div className="wf-fork-row">
                    <div className="wf-branch">
                      <div className="wf-branch-stub"></div>
                      <span className="wf-badge completed">ENROLLED</span>
                      <div className="wf-node dim">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">End</div></div>
                      </div>
                    </div>
                    <div className="wf-branch">
                      <div className="wf-branch-stub" data-wf-step="4"></div>
                      <span className="wf-badge abandoned">NOT YET</span>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                        <div><div className="wf-node-kind">Condition</div><div className="wf-node-title">Email known?</div></div>
                      </div>

                      <div className="wf-fork">
                        <div className="wf-fork-stub" data-wf-step="5"></div>
                        <div className="wf-fork-bar"></div>
                        <div className="wf-fork-row">
                          <div className="wf-branch">
                            <div className="wf-branch-stub"></div>
                            <span className="wf-badge no">NO</span>
                            <div className="wf-node dim">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Widget popup</div></div>
                            </div>
                          </div>
                          <div className="wf-branch">
                            <div className="wf-branch-stub" data-wf-step="5"></div>
                            <span className="wf-badge yes">YES</span>
                            <div className="wf-node" data-wf-step="5">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Send syllabus + pricing</div></div>
                            </div>
                            <div className="wf-line" data-wf-step="6"></div>
                            <div className="wf-node" data-wf-step="6">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Enrollment reminder</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wf-legend reveal">
              <span className="wf-legend-item"><span className="wf-legend-dot" style={{ background: 'var(--accent-on-dark)' }}></span>This conversation's path</span>
              <span className="wf-legend-item"><span className="wf-legend-dot" style={{ background: 'rgba(255,255,255,.2)' }}></span>Alternate branch, ready either way</span>
            </div>

            <div className="template-row reveal">
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Enrollment Nurture</div><div className="tp-steps">5 steps</div></div>
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Abandoned Signup Follow-up</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Assignment Deadline Nudge</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Course Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Certificate Ready Notification</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Renewal Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Webinar Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">EdTech</div><div className="tp-name">Re-engagement Win-Back</div><div className="tp-steps">4 steps</div></div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Follow-up workflows</p>
              <h2 className="section-title">What follow-up looks like after the enquiry</h2>
              <p className="section-sub">Three workflows built specifically for how applicants behave.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 4L22 9L12 14L2 9L12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M6 11V17C6 17 8.5 19.5 12 19.5C15.5 19.5 18 17 18 17V11" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Course enquiry</p><p className="workflow-strip-desc">Shares programme information, checks basic eligibility, answers fee questions, and books counselling.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 4H14L18 8V20H6V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M14 4V8H18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">Incomplete application</p><p className="workflow-strip-desc">Reminds students about incomplete forms, missing documents, payments, interviews, and deadlines.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9.5H20M8 3V6M16 3V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                <div><p className="workflow-strip-title">Event registration</p><p className="workflow-strip-desc">Registers students for webinars or open days, sends joining reminders, and follows up after attendance.</p></div>
              </div>
            </div>

            <div className="ind-crosslink">
              <p>Every industry runs on the same ten platform capabilities, tracked the same way.</p>
              <a href="capabilities.html">See the platform capabilities <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Questions</p>
              <h2 className="section-title">About the EdTech agent.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {EDTECH_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chev">
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {EDTECH_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <FaqItem key={item.q} question={item.q} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} chevronClassName="faq-chev">
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
            <h2 className="final-cta-headline">Your next applicant is filling out a form right now.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Stop losing applicants to slow replies tonight.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
