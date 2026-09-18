import { useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const HEALTHCARE_FAQS = [
  {
    q: 'Can patients book a same-day appointment through it?',
    a: 'Yes, if a slot is open on the calendar your team has approved for booking. It checks real-time availability and confirms the slot right in the chat, no back-and-forth with the front desk.',
  },
  {
    q: 'Can it answer insurance and billing questions?',
    a: "It answers what's in your approved list, like accepted insurance plans and standard billing questions. A dispute or an edge case gets turned into a ticket for your staff instead.",
  },
  {
    q: 'What happens when a patient misses their appointment?',
    a: "It checks who didn't check in, sends a reminder with a reschedule link, and flags anyone without a phone number on file so your front desk can follow up directly.",
  },
  {
    q: 'Does it ever make a clinical call on its own?',
    a: 'No. It handles scheduling, intake, and routing. The moment a question needs medical judgment, it hands the conversation to your team instead of guessing.',
  },
];

/** Ported 1:1 from industry-healthcare.html's <main>. */
export function IndustryHealthcare() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useCapabilityShowcase();
  return (
    <Layout
      title="Healthcare — StepsAI | Reduce patient-access friction"
      description="StepsAI for healthcare: doctor discovery, appointment booking, patient intake, and follow-up care, with clinical decisions always left to your team."
    >
      <Breadcrumb section="Industries" sectionHref="industries.html" label="Healthcare & Clinics" />

      <main id="top">
        <section className="vertical-hero" style={{ backgroundImage: "url('/images/hero-healthcare.jpg')" }}>
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">3</span>Healthcare</span>
            <h1 className="vertical-headline">Skip the hold queue. Keep the clinical calls with your team.</h1>
            <p className="vertical-tagline">Patients wait on hold to book a slot the front desk could confirm in ten seconds. This handles the access and scheduling work, and stops exactly where clinical judgment starts.</p>
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
                <p>Not a script — this is the shape of a real conversation, in the channel patients already use, answered in seconds instead of a hold queue.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Clove Clinic" status="online">
                  <div className="wa-real-bubble in">Do you take Star Health insurance?<span className="wa-real-time">4:52 PM</span></div>
                  <div className="wa-real-bubble out">Yes, cashless for OPD. Want me to book you a slot with Dr. Rao?<span className="wa-real-time">4:52 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Yes please, sometime this week<span className="wa-real-time">4:53 PM</span></div>
                  <div className="wa-real-bubble out">Here's what's open this week:<span className="wa-real-time">4:53 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <p className="chat-card-slot-label">Dr. Rao &middot; General OPD</p>
                    <div className="chat-card-slots">
                      <span className="chat-card-slot">Wed, 11:00 AM</span>
                      <span className="chat-card-slot">Thu, 4:30 PM</span>
                      <span className="chat-card-slot">Fri, 10:00 AM</span>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Thursday 4:30 works<span className="wa-real-time">4:54 PM</span></div>
                  <div className="wa-real-bubble out">Booked &mdash; Thursday, 4:30 PM with Dr. Rao. You'll get a reminder that morning, and can reschedule anytime right from this chat.<span className="wa-real-time">4:54 PM<ChatTick /></span></div>
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
                <div className="capability-showcase" data-visual-bg="/images/hero-healthcare.jpg">
                  <div className="capability-visual"></div>
                  <div className="capability-list">
                    <h3 className="usecase-group-title">Discover &amp; book</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="search"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><path d="M21 21L15 15" /></svg></span><div><h4 className="usecase-row-title">Doctor and service discovery</h4><p className="usecase-row-desc">Recommends doctors by speciality, location, language, and availability, with profiles that include a book-appointment action.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg></span><div><h4 className="usecase-row-title">Appointment management</h4><p className="usecase-row-desc">Books, reschedules, or cancels appointments, and supports new and existing patients with confirmations.</p></div></div>
                      <div className="usecase-row" data-cat="bell"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg></span><div><h4 className="usecase-row-title">Appointment reminders</h4><p className="usecase-row-desc">Sends WhatsApp, SMS, or email reminders, and allows confirmation, cancellation, or rescheduling from the reminder itself.</p></div></div>
                      <div className="usecase-row" data-cat="chat"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.8 8.8 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.4h.4a8.5 8.5 0 0 1 8 8v.1Z" /></svg></span><div><h4 className="usecase-row-title">Patient Q&amp;A</h4><p className="usecase-row-desc">Answers timings, locations, services, insurance, preparation, and policy questions, using only provider-approved information.</p></div></div>
                      <div className="usecase-row" data-cat="form"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" /><path d="M9 11H15M9 15H13" /></svg></span><div><h4 className="usecase-row-title">Digital patient intake</h4><p className="usecase-row-desc">Collects registration details, reason for visit, forms, and documents before arrival.</p></div></div>
                      <div className="usecase-row" data-cat="id"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12" r="2" /><path d="M13.5 10H18M13.5 14H16.5" /></svg></span><div><h4 className="usecase-row-title">Patient verification</h4><p className="usecase-row-desc">Verifies identity using approved information before sharing account-specific details.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Guide &amp; care</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="compass"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15 9l-2 6-6 2 2-6 6-2Z" /></svg></span><div><h4 className="usecase-row-title">Symptom navigation</h4><p className="usecase-row-desc">Asks approved non-diagnostic questions and guides patients to the right department or care setting.</p></div></div>
                      <div className="usecase-row" data-cat="alert"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 20H22L12 3Z" /><path d="M12 9V13M12 16.5V17" /></svg></span><div><h4 className="usecase-row-title">Emergency escalation</h4><p className="usecase-row-desc">Detects approved emergency phrases, and directs the patient to local emergency services while stopping routine flows.</p></div></div>
                      <div className="usecase-row" data-cat="pill"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4.5" y="4.5" width="15" height="15" rx="7.5" transform="rotate(45 12 12)" /><path d="M8 16L16 8" /></svg></span><div><h4 className="usecase-row-title">Prescription refill requests</h4><p className="usecase-row-desc">Captures medication and request details, and sends the request to the clinical team without independently approving it.</p></div></div>
                      <div className="usecase-row" data-cat="route"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19H14A4 4 0 0 0 18 15V9A4 4 0 0 1 22 5" /></svg></span><div><h4 className="usecase-row-title">Referral management</h4><p className="usecase-row-desc">Contacts referred patients, helps them schedule, and follows up on incomplete referrals.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg></span><div><h4 className="usecase-row-title">Pre-appointment support</h4><p className="usecase-row-desc">Sends approved preparation, fasting, medication, location, and document instructions.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg></span><div><h4 className="usecase-row-title">Post-visit follow-up</h4><p className="usecase-row-desc">Sends approved care instructions, collects feedback, and books follow-ups.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Support &amp; recall</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="note"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4H14L18 8V20H6V4Z" /><path d="M14 4V8H18" /><path d="M9 12H15M9 15.5H13" /></svg></span><div><h4 className="usecase-row-title">Lab and report support</h4><p className="usecase-row-desc">Notifies patients when reports are available, and helps them access results or book a doctor consultation.</p></div></div>
                      <div className="usecase-row" data-cat="receipt"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3H18V21L15 19L12 21L9 19L6 21V3Z" /><path d="M9 8H15M9 12H15" /></svg></span><div><h4 className="usecase-row-title">Billing and insurance</h4><p className="usecase-row-desc">Answers basic billing and accepted-insurance questions, and creates tickets for disputes or complex cases.</p></div></div>
                      <div className="usecase-row" data-cat="recall"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.7 2.7L21 8" /><path d="M21 3v5h-5" /></svg></span><div><h4 className="usecase-row-title">Care recall outreach</h4><p className="usecase-row-desc">Reminds patients about approved check-ups, screenings, or vaccinations, and helps them book care.</p></div></div>
                      <div className="usecase-row" data-cat="handoff"><span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg></span><div><h4 className="usecase-row-title">Human handoff and tickets</h4><p className="usecase-row-desc">Transfers sensitive or complex conversations securely, and allows document or image uploads for billing, reports, or complaints.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================
             GUARDRAILS — explicit clinical/compliance boundaries
             ============================================================ */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Clinical guardrails</p>
              <h2 className="section-title">What it will never do</h2>
              <p className="section-sub">Access and scheduling are automated. Clinical judgment stays with your team, by design.</p>
            </div>
            <div className="guardrail-card reveal">
              <div className="guardrail-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 6V11C21 16 17.5 20.5 12 22C6.5 20.5 3 16 3 11V6L12 2Z" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 8V13M12 16V16.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Guardrails
              </div>
              <ul className="guardrail-list">
                <li>Does not diagnose medical conditions.</li>
                <li>Does not prescribe or recommend medication.</li>
                <li>Does not independently interpret medical reports.</li>
                <li>Escalates emergency warning signs immediately.</li>
                <li>Uses only provider-approved content and workflows.</li>
                <li>Protects patient information and restricts access.</li>
                <li>Keeps clinical decisions with qualified healthcare professionals.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL AUTOMATION — the actual no-show recovery workflow
             ============================================================ */}
        <section className="wf-section">
          <div className="container">
            <div className="section-head center reveal">
              <h2 className="section-title">What automation looks like, live.</h2>
              <p className="section-sub">This is the exact logic behind the "No-Show Follow-up" template — one of many. There's no limit to what you can automate once you're connected.</p>
            </div>

            <div className="wf-canvas-wrap reveal">
              <div className="wf-canvas">
                <div className="wf-live-tag">Live example — Missed-appointment recovery</div>

                <div className="wf-trunk">
                  <div className="wf-node" data-wf-step="1">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="m9 15 2 2 4-4" /></svg></span>
                    <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Appointment time passed</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="2"></div>
                  <div className="wf-node" data-wf-step="2">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                    <div><div className="wf-node-kind">Action · Wait</div><div className="wf-node-title">Wait 15 minutes</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="3"></div>
                  <div className="wf-node" data-wf-step="3">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                    <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check-in status</div></div>
                  </div>
                </div>

                <div className="wf-fork">
                  <div className="wf-fork-stub" data-wf-step="4"></div>
                  <div className="wf-fork-bar"></div>
                  <div className="wf-fork-row">
                    <div className="wf-branch">
                      <div className="wf-branch-stub"></div>
                      <span className="wf-badge completed">CHECKED IN</span>
                      <div className="wf-node dim">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">End</div></div>
                      </div>
                    </div>
                    <div className="wf-branch">
                      <div className="wf-branch-stub" data-wf-step="4"></div>
                      <span className="wf-badge abandoned">NO-SHOW</span>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                        <div><div className="wf-node-kind">Condition</div><div className="wf-node-title">Phone number on file?</div></div>
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
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Flag for front desk</div></div>
                            </div>
                          </div>
                          <div className="wf-branch">
                            <div className="wf-branch-stub" data-wf-step="5"></div>
                            <span className="wf-badge yes">YES</span>
                            <div className="wf-node" data-wf-step="5">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Reminder + reschedule link</div></div>
                            </div>
                            <div className="wf-line" data-wf-step="6"></div>
                            <div className="wf-node" data-wf-step="6">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Rebooking confirmed</div></div>
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
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">Appointment Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">No-Show Follow-up</div><div className="tp-steps">5 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">Post-Visit Check-in</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">Recall / Annual Checkup Nudge</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">New Patient Intake</div><div className="tp-steps">6 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">Insurance Verification Follow-up</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">Prescription Refill Reminder</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Healthcare</div><div className="tp-name">Waitlist Notification</div><div className="tp-steps">4 steps</div></div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> After the visit</p>
              <h2 className="section-title">What follow-up looks like after the visit</h2>
              <p className="section-sub">Three workflows built specifically for how patients behave.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9.5H20M8 3V6M16 3V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                <div><p className="workflow-strip-title">Appointment</p><p className="workflow-strip-desc">Confirms the booking, shares approved preparation instructions, reminds the patient, and allows confirmation or rescheduling.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Referral</p><p className="workflow-strip-desc">Contacts referred patients, helps them book, and follows up when scheduling is incomplete.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 7.2L5.5 9.7L11 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">Post-visit</p><p className="workflow-strip-desc">Sends approved care information, collects feedback, and books follow-up care when instructed.</p></div>
              </div>
            </div>

            <div className="ind-crosslink">
              <p>Every industry runs on the same ten platform capabilities, tracked the same way.</p>
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
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Questions</p>
              <h2 className="section-title">About booking with Steps AI.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {HEALTHCARE_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chev">
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {HEALTHCARE_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Your patients are trying to book right now.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Clear the call queue tonight.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
