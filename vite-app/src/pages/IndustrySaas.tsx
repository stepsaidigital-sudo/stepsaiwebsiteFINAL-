import { useEffect, useState } from 'react';
import '../styles/pages/pages.css';
import '../styles/pages/industries-deep.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const SAAS_FAQS = [
  {
    q: 'Does it actually know our pricing tiers and integrations?',
    a: 'Yes. It answers from your actual docs and pricing page, not a guess. Ask it whether you integrate with Salesforce or what separates Pro from Team, and it pulls the real answer.',
  },
  {
    q: 'Can it book a demo straight onto our calendar?',
    a: 'Yes. It checks your real open slots and books the demo directly, no email back and forth. The trial user picks a time and it lands on your calendar.',
  },
  {
    q: 'What happens when a question turns technical or touches billing?',
    a: 'It hands off to your team with the full conversation attached, so nobody has to repeat themselves. You get the context, not just a ticket number.',
  },
  {
    q: 'Does it open a support ticket for every question?',
    a: "No. It answers from your help docs first and only creates a ticket when the docs don't cover it, so your queue stays for the questions that actually need a person.",
  },
];

/** Ported 1:1 from industry-saas.html's <main>. */
export function IndustrySaas() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useCapabilityShowcase();

  // industry-saas.html sets these per-industry accent vars on <body>.
  useEffect(() => {
    const { body } = document;
    body.style.setProperty('--ind-accent', '#0891B2');
    body.style.setProperty('--ind-tint', '#E3F6FA');
    return () => {
      body.style.removeProperty('--ind-accent');
      body.style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout
      title="SaaS — StepsAI | Answer the product question at 2am."
      description="StepsAI for SaaS: product Q&A, high-intent lead capture, demo booking, and trial activation, on your website and WhatsApp."
    >
      <Breadcrumb section="Industries" sectionHref="industries.html" label="SaaS &amp; Tech" />

      <main id="top">
        <section className="vertical-hero">

          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">2</span>SaaS</span>
            <h1 className="vertical-headline">Answer the product question at 2am.</h1>
            <p className="vertical-tagline">Trial users don't wait for office hours. StepsAI answers pricing, integration, and setup questions the moment they're asked, and books the demo before the trial goes cold.</p>
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
             WHAT YOUR CUSTOMERS ACTUALLY ASK — mandatory per Addendum D
             Template C. Real questions, 2x2, not paraphrased marketing.
             ============================================================ */}
        <section className="section section--raised quoted-questions section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> What trial users ask</p>
              <h2 className="section-title">What your customers actually ask</h2>
              <p className="section-sub">Real questions, the way Ledgerly's trial users actually type them.</p>
            </div>
            <div className="quoted-questions-grid reveal reveal-stagger">
              <div className="quoted-question-card">
                <span className="quoted-question-mark">&ldquo;</span>
                <p className="quoted-question-text">Does this integrate with Salesforce?</p>
                <p className="quoted-question-source">Asked via website chat</p>
              </div>
              <div className="quoted-question-card">
                <span className="quoted-question-mark">&ldquo;</span>
                <p className="quoted-question-text">What's the difference between the Pro and Team plan?</p>
                <p className="quoted-question-source">Asked via website chat</p>
              </div>
              <div className="quoted-question-card">
                <span className="quoted-question-mark">&ldquo;</span>
                <p className="quoted-question-text">Can I get a demo this week?</p>
                <p className="quoted-question-source">Asked via WhatsApp</p>
              </div>
              <div className="quoted-question-card">
                <span className="quoted-question-mark">&ldquo;</span>
                <p className="quoted-question-text">Why isn't my API key working?</p>
                <p className="quoted-question-source">Asked via website chat</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base pain-use-section section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="pain-use-grid reveal reveal-stagger">

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things every SaaS support queue deals with daily.</p>
                <ul className="pain-list">
                  <li>Trial users churn quietly when a question goes unanswered.</li>
                  <li>The same integration and pricing questions repeat in every demo call.</li>
                  <li>Support tickets pile up for questions the docs already answer.</li>
                  <li>High-intent leads ask a question at 11pm and hear back at 9am.</li>
                  <li>Sales reps spend calls answering questions instead of closing.</li>
                  <li>Onboarding stalls on the same setup step, over and over.</li>
                </ul>
              </aside>

              <div className="usecase-feed">

                <div>
                  <h3 className="usecase-group-title">Discover &amp; evaluate</h3>
                  <div className="usecase-group-list">
                    <div className="usecase-row"><span className="usecase-row-num">01</span><div><h4 className="usecase-row-title">Product Q&amp;A</h4><p className="usecase-row-desc">Answers feature, pricing-tier, and integration questions from your actual docs and pricing page.</p></div></div>
                    {/* Renamed from "High-intent lead capture" / "qualified lead" — implied a lead-
                         scoring or qualification model, which isn't a real feature. Reworded to the
                         actual behavior: it notices a specific buying-stage question and captures it. */}
                    <div className="usecase-row"><span className="usecase-row-num">02</span><div><h4 className="usecase-row-title">Buying-signal capture</h4><p className="usecase-row-desc">Recognizes buying-stage questions like "does this work with Salesforce" and creates a lead your sales team can act on right away.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">03</span><div><h4 className="usecase-row-title">Demo booking</h4><p className="usecase-row-desc">Offers real open slots and books the demo, no back-and-forth.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">04</span><div><h4 className="usecase-row-title">Competitor comparison Q&amp;A</h4><p className="usecase-row-desc">Answers "how is this different from X" honestly, using your approved positioning.</p></div></div>
                  </div>
                </div>

                <div>
                  <h3 className="usecase-group-title">Trial &amp; onboarding</h3>
                  <div className="usecase-group-list">
                    <div className="usecase-row"><span className="usecase-row-num">05</span><div><h4 className="usecase-row-title">Trial activation nudge</h4><p className="usecase-row-desc">Checks in on inactive trial users and answers the question that's blocking setup.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">06</span><div><h4 className="usecase-row-title">Setup walkthrough</h4><p className="usecase-row-desc">Guides a user through connecting their first integration, step by step.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">07</span><div><h4 className="usecase-row-title">Docs-first support</h4><p className="usecase-row-desc">Answers from your help docs before creating a ticket.</p></div></div>
                  </div>
                </div>

                <div>
                  <h3 className="usecase-group-title">Support &amp; expand</h3>
                  <div className="usecase-group-list">
                    <div className="usecase-row"><span className="usecase-row-num">08</span><div><h4 className="usecase-row-title">Ticket deflection</h4><p className="usecase-row-desc">Resolves the repeat questions your support team answers daily.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">09</span><div><h4 className="usecase-row-title">Renewal &amp; upgrade signals</h4><p className="usecase-row-desc">Notices upgrade-intent questions and flags the account to sales.</p></div></div>
                    <div className="usecase-row"><span className="usecase-row-num">10</span><div><h4 className="usecase-row-title">Human handoff</h4><p className="usecase-row-desc">Transfers technical or billing edge cases to your team with full context.</p></div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Where to start</p>
              <h2 className="section-title">If you can only start with one thing</h2>
              <p className="section-sub">In priority order, based on what keeps a trial from going cold.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Product Q&amp;A</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Demo booking</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Trial activation nudge</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Buying-signal capture</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Docs-first support</span></div>
              <div className="priority-row"><span className="priority-row-num">06</span><span className="priority-row-label">Ticket deflection</span></div>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL AUTOMATION — the actual trial nurture workflow
             ============================================================ */}
        <section className="wf-section">
          <div className="container">
            <div className="section-head center reveal">
              <h2 className="section-title">What automation looks like, live.</h2>
              <p className="section-sub">This is the exact logic behind the "Trial Expiry Nurture" template — one of many. There's no limit to what you can automate once you're connected.</p>
            </div>

            <div className="wf-canvas-wrap reveal">
              <div className="wf-canvas">
                <div className="wf-live-tag">Live example — Trial signup nurture</div>

                <div className="wf-trunk">
                  <div className="wf-node" data-wf-step="1">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" /></svg></span>
                    <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Free trial started</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="2"></div>
                  <div className="wf-node" data-wf-step="2">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                    <div><div className="wf-node-kind">Action · Wait</div><div className="wf-node-title">Wait 3 days</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="3"></div>
                  <div className="wf-node" data-wf-step="3">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                    <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check activation status</div></div>
                  </div>
                </div>

                <div className="wf-fork">
                  <div className="wf-fork-stub" data-wf-step="4"></div>
                  <div className="wf-fork-bar"></div>
                  <div className="wf-fork-row">
                    <div className="wf-branch">
                      <div className="wf-branch-stub"></div>
                      <span className="wf-badge completed">ACTIVATED</span>
                      <div className="wf-node dim">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">End</div></div>
                      </div>
                    </div>
                    <div className="wf-branch">
                      <div className="wf-branch-stub" data-wf-step="4"></div>
                      <span className="wf-badge abandoned">NOT ACTIVATED</span>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                        <div><div className="wf-node-kind">Condition</div><div className="wf-node-title">Onboarding step completed?</div></div>
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
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Onboarding nudge email</div></div>
                            </div>
                          </div>
                          <div className="wf-branch">
                            <div className="wf-branch-stub" data-wf-step="5"></div>
                            <span className="wf-badge yes">YES</span>
                            <div className="wf-node" data-wf-step="5">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Feature adoption tip</div></div>
                            </div>
                            <div className="wf-line" data-wf-step="6"></div>
                            <div className="wf-node" data-wf-step="6">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Trial-expiry reminder</div></div>
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
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">Trial Expiry Nurture</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">Onboarding Checklist Nudge</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">Feature Adoption Nudge</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">Renewal Reminder</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">Churn Risk Win-Back</div><div className="tp-steps">5 steps</div></div>
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">Upgrade Prompt</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">NPS / Feedback Request</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">SaaS</div><div className="tp-name">Usage Alert</div><div className="tp-steps">3 steps</div></div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> After the trial signs up</p>
              <h2 className="section-title">What follow-up looks like after the trial signs up</h2>
              <p className="section-sub">Three workflows built specifically for how trial users behave.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9.5H20M8 3V6M16 3V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                <div><p className="workflow-strip-title">Trial-ending reminder</p><p className="workflow-strip-desc">Reminds trial users before it ends and answers the question that's stopping them from converting.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Inactive-trial nudge</p><p className="workflow-strip-desc">Checks in on trial users who haven't logged in, and unblocks whatever stalled them.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 4L22 9L12 14L2 9L12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M6 11V17C6 17 8.5 19.5 12 19.5C15.5 19.5 18 17 18 17V11" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Post-demo follow-up</p><p className="workflow-strip-desc">Follows up after a demo with the answer to whatever came up on the call.</p></div>
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
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Questions</p>
              <h2 className="section-title">About the SaaS agent.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {SAAS_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chev">
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {SAAS_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Your next trial user has a question right now.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Stop losing trials to slow replies tonight.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
