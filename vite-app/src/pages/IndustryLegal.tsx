import { useEffect, useState } from 'react';
import '../styles/pages/pages.css';
import '../styles/pages/industries-deep.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const LEGAL_FAQS = [
  {
    q: 'What does it actually ask when a new lead reaches out?',
    a: "It asks the firm-approved questions: practice area, jurisdiction, key dates, and urgency. That's enough for your team to see whether the matter fits before anyone picks up the phone.",
  },
  {
    q: "Does it decide whether there's a conflict of interest?",
    a: "No. It collects the names of the client, opposing parties, and related entities, and sends them to your firm's conflict-check system. The conflict decision itself stays with your team, every time.",
  },
  {
    q: 'Can someone actually book a consultation through it?',
    a: 'Yes, it shows real open slots, books the appointment, and sends reminders so fewer people no-show. Reschedules and cancellations go through the same flow.',
  },
  {
    q: 'Can it tell an existing client how their case is going?',
    a: "It answers approved questions about appointments, documents received, and what's next administratively. The moment a question needs legal judgment, it hands the conversation to your team with full context attached.",
  },
];

/** Ported 1:1 from industry-legal.html's <main>. */
export function IndustryLegal() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useCapabilityShowcase();

  // industry-legal.html sets these per-industry accent vars on <body>.
  useEffect(() => {
    const { body } = document;
    body.style.setProperty('--ind-accent', '#8C2F45');
    body.style.setProperty('--ind-tint', '#F8E9EE');
    return () => {
      body.style.removeProperty('--ind-accent');
      body.style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout
      title="Legal Services — StepsAI | Capture more qualified enquiries"
      description="StepsAI for law firms: 24/7 intake, practice-area routing, consultation booking, and secure document collection, with lawyer judgment and confidentiality preserved."
    >
      <Breadcrumb section="Industries" sectionHref="industries.html" label="Legal &amp; Professional" />

      <main id="top">
        <section className="vertical-hero">

          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">5</span>Legal Services</span>
            <h1 className="vertical-headline">Answer every enquiry the moment it comes in. Leave the legal judgment to your lawyers.</h1>
            <p className="vertical-tagline">Most people contact several firms and hire whichever one replies first. This answers, screens, and books the consultation, and hands off before anything resembling legal advice is at stake.</p>
            <div className="vertical-hero-actions">
              <a href="pricing.html" className="btn-ind">Start free trial</a>
              <a href="industries.html" className="vertical-hero-link">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                All industries
              </a>
            </div>
          </div>
        </section>

        <section className="section section--base pain-use-section section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="pain-use-grid reveal reveal-stagger">

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Seven things your intake process fights every single week.</p>
                <ul className="pain-list">
                  <li>Potential clients contact multiple firms and choose the first responsive one.</li>
                  <li>Lawyers and paralegals spend billable time on repetitive intake questions.</li>
                  <li>Case-fit, jurisdiction, conflict, and urgency details are collected inconsistently.</li>
                  <li>Consultation booking and follow-up require manual coordination.</li>
                  <li>Documents and evidence arrive through scattered channels.</li>
                  <li>Existing clients repeatedly request case, billing, and appointment updates.</li>
                  <li>Legal AI creates confidentiality, accuracy, and unauthorized-practice risks.</li>
                </ul>
              </aside>

              <div className="usecase-feed">

                <div>
                  <h3 className="usecase-group-title">Intake &amp; screen</h3>
                  <div className="usecase-group-list">
                    <div className="usecase-row"><span className="usecase-row-num">01</span><div><h4 className="usecase-row-title">24/7 legal enquiry intake</h4><p className="usecase-row-desc">Answers approved firm, practice-area, location, fee, and consultation questions, and captures enquiries outside office hours without presenting legal advice.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">02</span><div><h4 className="usecase-row-title">Practice-area routing</h4><p className="usecase-row-desc">Identifies whether the enquiry relates to personal injury, family, immigration, criminal, employment, or another supported area, and routes it to the correct team.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">03</span><div><h4 className="usecase-row-title">Preliminary case screening</h4><p className="usecase-row-desc">Asks firm-approved questions about incident type, dates, jurisdiction, and urgency, and determines whether the matter fits the firm's intake criteria for attorney review.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">04</span><div><h4 className="usecase-row-title">Conflict-check preparation</h4><p className="usecase-row-desc">Collects names of clients, opposing parties, and related entities, and sends the information to the firm's approved conflict-check system. Never declares a conflict decision independently.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">05</span><div><h4 className="usecase-row-title">Multilingual intake</h4><p className="usecase-row-desc">Conducts intake in the prospect's preferred language, and escalates when translation accuracy or legal nuance is uncertain.</p></div></div>
                  </div>
                </div>

                <div>
                  <h3 className="usecase-group-title">Book &amp; onboard</h3>
                  <div className="usecase-group-list">
                    <div className="usecase-row"><span className="usecase-row-num">06</span><div><h4 className="usecase-row-title">Consultation booking</h4><p className="usecase-row-desc">Shows available lawyer or intake-team slots, and books, reschedules, or cancels consultations with reminders.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">07</span><div><h4 className="usecase-row-title">Legal lead follow-up</h4><p className="usecase-row-desc">Follows up when a prospect does not finish intake or book a consultation, with approved reminders and booking links.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">08</span><div><h4 className="usecase-row-title">Secure document collection</h4><p className="usecase-row-desc">Requests police reports, notices, contracts, or other approved evidence, and attaches uploads to the lead or matter securely.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">09</span><div><h4 className="usecase-row-title">Fee and process Q&amp;A</h4><p className="usecase-row-desc">Explains approved consultation fees, billing models, and intake steps, and avoids estimating total legal costs unless the firm has approved the response.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">10</span><div><h4 className="usecase-row-title">Retainer and onboarding support</h4><p className="usecase-row-desc">Sends approved engagement documents and e-signature links, and provides onboarding checklists after the firm accepts the client.</p></div></div>
                  </div>
                </div>

                <div>
                  <h3 className="usecase-group-title">Support &amp; escalate</h3>
                  <div className="usecase-group-list">
                    <div className="usecase-row"><span className="usecase-row-num">11</span><div><h4 className="usecase-row-title">Existing client updates</h4><p className="usecase-row-desc">Answers approved questions about appointments, documents received, and next administrative steps. Does not provide strategy, predictions, or unapproved case analysis.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">12</span><div><h4 className="usecase-row-title">Deadline and urgency escalation</h4><p className="usecase-row-desc">Detects court dates, limitation concerns, custody, detention, or other urgent phrases, and immediately escalates to the legal team with the full conversation.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">13</span><div><h4 className="usecase-row-title">Referral and rejection workflows</h4><p className="usecase-row-desc">Politely explains when the firm cannot accept a matter, and offers approved referral resources without creating an attorney-client relationship.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">14</span><div><h4 className="usecase-row-title">Client support tickets</h4><p className="usecase-row-desc">Creates tickets for document requests, billing questions, and callback requests, with secure image and document uploads.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">15</span><div><h4 className="usecase-row-title">Human handoff</h4><p className="usecase-row-desc">Transfers high-intent, sensitive, or urgent enquiries to staff, with contact details, practice area, key facts, and complete context.</p></div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
             GUARDRAILS — explicit ethical/UPL boundaries
             ============================================================ */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Guardrails</p>
              <h2 className="section-title">What it will never do</h2>
              <p className="section-sub">Intake and screening are automated. Legal advice and case strategy stay with your lawyers, by design.</p>
            </div>
            <div className="guardrail-card reveal">
              <div className="guardrail-card-title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 6V11C21 16 17.5 20.5 12 22C6.5 20.5 3 16 3 11V6L12 2Z" stroke="#B45309" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 8V13M12 16V16.5" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" /></svg>
                Guardrails
              </div>
              <ul className="guardrail-list">
                <li>Never presents legal advice during intake, only firm-approved information.</li>
                <li>Never declares a conflict-check decision independently.</li>
                <li>Never estimates total legal costs unless the firm has approved the response.</li>
                <li>Never provides strategy, predictions, or unapproved case analysis to existing clients.</li>
                <li>Never implies an attorney-client relationship before the firm accepts the matter.</li>
                <li>Escalates court dates, limitation concerns, and other urgent matters immediately.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Where to start</p>
              <h2 className="section-title">If you can only start with one thing</h2>
              <p className="section-sub">In priority order, based on what converts enquiries fastest.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">24/7 legal enquiry intake</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Practice-area routing</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Preliminary case screening</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Consultation booking</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Secure document collection</span></div>
              <div className="priority-row"><span className="priority-row-num">06</span><span className="priority-row-label">Deadline and urgency escalation</span></div>
              <div className="priority-row"><span className="priority-row-num">07</span><span className="priority-row-label">Human handoff</span></div>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL AUTOMATION — the actual consultation follow-up workflow
             ============================================================ */}
        <section className="wf-section">
          <div className="container">
            <div className="section-head center reveal">
              <h2 className="section-title">What automation looks like, live.</h2>
              <p className="section-sub">This is the exact logic behind the "Consultation Follow-up" template — one of many. There's no limit to what you can automate once you're connected.</p>
            </div>

            <div className="wf-canvas-wrap reveal">
              <div className="wf-canvas">
                <div className="wf-live-tag">Live example — Consultation request follow-up</div>

                <div className="wf-trunk">
                  <div className="wf-node" data-wf-step="1">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><path d="M5 8l-3 6a3 3 0 0 0 6 0z" /><path d="M19 8l-3 6a3 3 0 0 0 6 0z" /><path d="M5 8h14" /><path d="M8 21h8" /></svg></span>
                    <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Consultation requested</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="2"></div>
                  <div className="wf-node" data-wf-step="2">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                    <div><div className="wf-node-kind">Action · Wait</div><div className="wf-node-title">Wait 20 minutes</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="3"></div>
                  <div className="wf-node" data-wf-step="3">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                    <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check confirmation status</div></div>
                  </div>
                </div>

                <div className="wf-fork">
                  <div className="wf-fork-stub" data-wf-step="4"></div>
                  <div className="wf-fork-bar"></div>
                  <div className="wf-fork-row">
                    <div className="wf-branch">
                      <div className="wf-branch-stub"></div>
                      <span className="wf-badge completed">CONFIRMED</span>
                      <div className="wf-node dim">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">End</div></div>
                      </div>
                    </div>
                    <div className="wf-branch">
                      <div className="wf-branch-stub" data-wf-step="4"></div>
                      <span className="wf-badge abandoned">PENDING</span>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                        <div><div className="wf-node-kind">Condition</div><div className="wf-node-title">Contact info complete?</div></div>
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
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Request missing details</div></div>
                            </div>
                          </div>
                          <div className="wf-branch">
                            <div className="wf-branch-stub" data-wf-step="5"></div>
                            <span className="wf-badge yes">YES</span>
                            <div className="wf-node" data-wf-step="5">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Confirmation + intake form</div></div>
                            </div>
                            <div className="wf-line" data-wf-step="6"></div>
                            <div className="wf-node" data-wf-step="6">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Document checklist reminder</div></div>
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
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Consultation Follow-up</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Document Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Case Status Update</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Intake Form Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Appointment Reminder</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Retainer/Fee Reminder</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Review Request</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Legal</div><div className="tp-name">Re-engagement</div><div className="tp-steps">4 steps</div></div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Follow-up</p>
              <h2 className="section-title">What follow-up looks like after the enquiry</h2>
              <p className="section-sub">Three workflows built specifically for how prospective clients behave.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 4H14L18 8V20H6V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M14 4V8H18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg></span>
                <div><p className="workflow-strip-title">New enquiry</p><p className="workflow-strip-desc">Shows the legal-information disclaimer, identifies the practice area, collects intake details, and offers a consultation.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9.5H20M8 3V6M16 3V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                <div><p className="workflow-strip-title">Consultation</p><p className="workflow-strip-desc">Confirms the appointment, requests approved documents, sends reminders, and notifies the intake team.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 11L12 4L20 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10V20H18V10" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Incomplete intake</p><p className="workflow-strip-desc">Reminds the prospect to finish forms or uploads, without discussing legal strategy.</p></div>
              </div>
            </div>

            <div className="ind-crosslink">
              <p>Every industry runs on the same ten platform capabilities, tracked the same way.</p>
              <a href="capabilities.html">See the platform capabilities <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        {/* ============================================================
             RESEARCH BASIS — sources behind the legal-vertical
             recommendations, kept here since they're specific to this
             vertical rather than shared across all five.
             ============================================================ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Sources</p>
              <h2 className="section-title">Where this comes from</h2>
              <p className="section-sub">These recommendations reflect current law-firm intake workflows and ethical guidance, not a generic template. Legal intake platforms commonly support structured screening, consultation booking, document collection, and case-management sync. ABA Formal Opinion 512 covers duties of competence, confidentiality, communication, supervision, candor, and reasonable fees when lawyers use generative AI.</p>
            </div>
            <ul className="pain-list reveal reveal-stagger" style={{ marginTop: '20px', maxWidth: '60ch' }}>
              <li>Smith.ai — legal intake and law-firm answering workflows</li>
              <li>Clio Grow — client intake and CRM software for law firms</li>
              <li>Clio — online legal intake forms</li>
              <li>LawDroid — automating client intake with legal chatbots</li>
              <li>American Bar Association — Formal Opinion 512</li>
            </ul>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">06</span> Questions</p>
              <h2 className="section-title">About legal intake with Steps AI.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {LEGAL_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chev">
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {LEGAL_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Someone is comparing you to three other firms right now.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Be the first firm that answers tonight.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
