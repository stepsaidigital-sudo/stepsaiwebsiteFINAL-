import { useState, type CSSProperties, type ReactNode } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/creative-showcase.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-workflows.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const WORKFLOWS_FAQS = [
  { q: 'Do I need to build these myself?', a: 'No — start from a template and customize it, or build one from scratch with the same trigger/wait/condition/action pieces.' },
  { q: 'Can broadcasts get me flagged as spam?', a: "Broadcasts respect opt-outs and WhatsApp's messaging rules automatically — you build the segment, we handle the compliance." },
  { q: 'What happens if a customer replies mid-workflow?', a: 'The agent takes over the conversation immediately — a workflow only sends the next message when nothing has happened yet.' },
  { q: 'Can I see which workflows are running?', a: 'Yes — every run shows up in Analytics & Insights, alongside everything else your agent handled.' },
];

const TEMPLATES = [
  { tag: 'E-commerce', name: 'Cart Abandonment', steps: '8 steps' },
  { tag: 'E-commerce', name: 'Checkout Abandonment', steps: '7 steps' },
  { tag: 'E-commerce', name: 'Order Confirmation', steps: '2 steps' },
  { tag: 'Marketing', name: 'New Customer Welcome Series', steps: '6 steps' },
  { tag: 'General', name: 'Appointment Reminder', steps: '3 steps' },
  { tag: 'Marketing', name: 'Re-engagement Win-Back', steps: '4 steps' },
  { tag: 'Marketing', name: 'Segment Broadcast', steps: '4 steps' },
  { tag: 'Support', name: 'Refund Alert (Internal)', steps: '2 steps' },
];

const TABS = [
  { key: 'carts', label: 'Recover carts' },
  { key: 'leads', label: 'Follow up leads' },
  { key: 'reminders', label: 'Remind customers' },
  { key: 'reengage', label: 'Re-engage' },
  { key: 'broadcast', label: 'Broadcast & promote' },
];

const SHOPIFY_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M19.349 7.086c-.035-.047-.07-.082-.105-.117a.64.64 0 0 0-.258-.164L15.342.152a.774.774 0 0 0-.305-.129A1.066 1.066 0 0 0 14.628 0h-.012c-.105 0-.2.023-.293.047L8.694 1.84c-.035.012-.059.023-.082.047a.9.9 0 0 0-.305.21c-.047.059-.094.106-.117.165l-2.027 6.164a61.16 61.16 0 0 0-1.418.176c-.539.082-.926.152-1.125.21a.7.7 0 0 0-.504.657 1.83 1.83 0 0 0 .14.62c.188.458.551 1.043 1.137 1.77 1.348 1.64 3.012 3.328 4.887 5.086 2.309 2.156 4.793 4.254 7.277 6.28.188.153.422.235.656.235h.023c.27 0 .528-.117.715-.317a364.5 364.5 0 0 0 3.328-3.668c.95-1.078 1.758-2.086 2.309-2.918.574-.879.797-1.547.785-2.051v-.012a.855.855 0 0 0-.27-.61 5.92 5.92 0 0 0-.761-.597c-.668-.469-1.63-.996-2.73-1.57-1.442-.762-3.13-1.559-4.302-2.156 2.051-1.395 3.305-2.285 3.305-2.285a.732.732 0 0 0 .152-1.02Zm-11.414 1.85L9.67 3.513c-.024-.035-.047-.046-.07-.07a2.533 2.533 0 0 0-.469.153l-2.004.61-1.031 3.104a37.398 37.398 0 0 1 1.84-.374Zm8.168-1.523a1.443 1.443 0 0 0-1.066.457c-2.11 2.015-3.082 3.656-3.235 3.937a.64.64 0 0 0 .422.95 240.24 240.24 0 0 0 5.461 1.183c-1.535-1.523-2.344-3.164-2.508-4.101a1.278 1.278 0 0 0 .164 0c.281 0 .527.152.715.35.492.54 1.195 1.548 1.886 2.872a56.544 56.544 0 0 0 1.266-3.575l-3.105-2.074ZM15 1.196L18.42 6.84c-1.36-.61-3.657-1.22-6.528-1.56L15 1.195Zm-4.3 1.3a74.1 74.1 0 0 1 6.809 1.63 70.083 70.083 0 0 0-4.043-4.501c-.13-.153-.305-.153-.352-.14l-2.414.807Z" /></svg>
);

const WHATSAPP_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M17.472 14.383c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

function WaMock({ children }: { children: ReactNode }) {
  return (
    <div className="wa-mock">
      <div className="wa-mock-head"><span className="wa-mock-avatar">N</span><div><div className="wa-mock-name">Nyra Store</div><div className="wa-mock-status">online</div></div></div>
      {children}
    </div>
  );
}

/**
 * Ported 1:1 from workflows.html's <main>. The two
 * <template data-disabled-section="WORKFLOWS_CREATIVE_*"> blocks in the source
 * render nothing and are omitted here; the source HTML remains their record.
 * The .wflow-tab/.wflow-panel switcher is driven by state — workflows.html never
 * loaded agents.js, so its tabs were inert, but the initial render is identical.
 */
export function Workflows() {
  const [activeTab, setActiveTab] = useState('carts');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();

  const panelClass = (key: string) => `wflow-panel${activeTab === key ? ' active' : ''}`;

  return (
    <Layout
      title="Workflows — StepsAI | When the customer stops, it keeps going."
      description="Cart recovery, lead follow-up, reminders, re-engagement, and WhatsApp broadcasts — automated workflows that run on their own, built from real triggers, conditions, and actions."
    >
      <Breadcrumb section="Product" sectionHref="agents.html" label="Workflows" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container reveal" style={{ maxWidth: '800px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">&#9679;</span>Runs on its own</span>
            <h1 className="vertical-headline">96 out of 100 visitors leave without buying.<br /><span className="vertical-headline-accent">Your workflow chases the ones who left a full cart.</span></h1>
            <p className="vertical-tagline">Carts get abandoned. Leads go quiet. Appointments get forgotten. Promotions need sending. It runs all of it — triggers, waits, conditions, and actions — so you don't have to.</p>
          </div>
        </section>

        <section className="section section--dark" id="workflows">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> See it run</p>
              <h2 className="section-title">Five jobs, one automation engine.</h2>
              <p className="section-sub">Every workflow is built from the same four pieces: a trigger, a wait, a condition, and an action. Watch each one play out.</p>
            </div>

            <div className="reveal">
              <div className="wflow-tabs">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    className={`wflow-tab${activeTab === tab.key ? ' active' : ''}`}
                    data-tab={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className={panelClass('carts')} data-panel="carts">
                <div className="wf-canvas-wrap">
                  <div className="wf-canvas">
                    <div className="wf-live-tag">Live example — Shopify cart recovery</div>
                    <div className="wf-trunk">
                      <div className="wf-node" data-wf-step="1">
                        <span className="wf-node-icon">{SHOPIFY_ICON}</span>
                        <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Cart left behind · ₹2,400</div></div>
                      </div>
                      <div className="wf-line" data-wf-step="2"></div>
                      <div className="wf-node" data-wf-step="2">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                        <div><div className="wf-node-kind">Action · Wait</div><div className="wf-node-title">Wait 30 minutes</div></div>
                      </div>
                      <div className="wf-line" data-wf-step="3"></div>
                      <div className="wf-node" data-wf-step="3">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                        <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check — order not placed</div></div>
                      </div>
                      <div className="wf-line" data-wf-step="4"></div>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon">{WHATSAPP_ICON}</span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Send WhatsApp message</div></div>
                      </div>
                      <div className="wf-line" data-wf-step="5"></div>
                      <div className="wf-node" data-wf-step="5">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Answer questions, share checkout</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={panelClass('leads')} data-panel="leads">
                <div className="wflow-rail-wrap">
                  <div className="wflow-rail">
                    <div className="wflow-rail-node done">Lead goes quiet · 3 days no reply</div>
                    <div className="wflow-rail-node done">Wait 1 day</div>
                    <div className="wflow-rail-node done">Check — still not booked</div>
                    <div className="wflow-rail-node done">Send a follow-up, answer the open question</div>
                  </div>
                  <WaMock>
                    <div className="wa-mock-body">
                      <div className="wa-mock-bubble in">Still deciding on the 2BHK?</div>
                      <div className="wa-mock-bubble out">Yes — is the maintenance fee negotiable?</div>
                      <div className="wa-mock-bubble in">Let me connect you with our agent — they can discuss that directly.</div>
                    </div>
                  </WaMock>
                </div>
              </div>

              <div className={panelClass('reminders')} data-panel="reminders">
                <div className="wflow-rail-wrap">
                  <div className="wflow-rail">
                    <div className="wflow-rail-node done">Appointment booked · tomorrow 4:30pm</div>
                    <div className="wflow-rail-node done">Wait until 24 hours before</div>
                    <div className="wflow-rail-node done">Send reminder with reschedule option</div>
                  </div>
                  <WaMock>
                    <div className="wa-mock-body">
                      <div className="wa-mock-bubble in">Reminder: your appointment is tomorrow at 4:30pm. Reply to reschedule.</div>
                      <div className="wa-mock-bubble out">See you then!</div>
                    </div>
                  </WaMock>
                </div>
              </div>

              <div className={panelClass('reengage')} data-panel="reengage">
                <div className="wflow-rail-wrap">
                  <div className="wflow-rail">
                    <div className="wflow-rail-node done">No purchase in 60 days</div>
                    <div className="wflow-rail-node done">Check — not unsubscribed</div>
                    <div className="wflow-rail-node done">Send a personalized win-back offer</div>
                  </div>
                  <WaMock>
                    <div className="wa-mock-body">
                      <div className="wa-mock-bubble in">We miss you — here's 15% off, just for you.</div>
                      <div className="wa-mock-bubble out">Perfect timing, I needed a refill</div>
                    </div>
                  </WaMock>
                </div>
              </div>

              <div className={panelClass('broadcast')} data-panel="broadcast">
                <div className="wflow-rail-wrap">
                  <div className="wflow-rail">
                    <div className="wflow-rail-node done">Build a segment · booked before, inactive 60d+</div>
                    <div className="wflow-rail-node done">Schedule for Friday 10am</div>
                    <div className="wflow-rail-node done">Send to 1,240 customers, one message each</div>
                    <div className="wflow-rail-node done">Replies route back into the same inbox</div>
                  </div>
                  <WaMock>
                    <div className="wa-mock-broadcast" style={{ margin: '16px' }}>
                      <span className="wa-mock-broadcast-label">Broadcast · sent to 1,240 customers</span>
                      <p className="wa-mock-broadcast-msg">"New season, new arrivals — 20% off this weekend only."</p>
                    </div>
                    <div className="wa-mock-body" style={{ paddingTop: '0' }}>
                      <div className="wa-mock-bubble in">Ooh, does this include the linen shirts?</div>
                      <div className="wa-mock-bubble out">Yes — want me to hold one in your size?</div>
                    </div>
                  </WaMock>
                </div>
              </div>
            </div>

            <div className="sig-wf-live-strip reveal">
              <span className="sig-wf-live-dot" aria-hidden="true"></span>
              <span className="sig-wf-live-text"><strong>4 workflows active</strong> right now for Nyra Store</span>
              <span className="sig-wf-live-divider" aria-hidden="true"></span>
              <span className="sig-wf-live-text">12 total &middot; 1 draft</span>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> How it's built</p>
              <h2 className="section-title">Four building blocks. Any workflow you need.</h2>
              <p className="section-sub">No code — pick a trigger, add steps, and it runs. Every workflow above is built from the same pieces.</p>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>Triggers</h4><p>A cart is left, a message arrives, a form is submitted, a schedule fires — six trigger types start any workflow.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Waits &amp; conditions</h4><p>Pause for a fixed time, then branch on whatever's true — email known or not, order placed or not.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Actions</h4><p>Send a message, make a request, hand off to a person — or fan out to a whole segment at once.</p></div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Ready-made</p>
              <h2 className="section-title">Start from a template, not a blank canvas.</h2>
              <p className="section-sub">Twelve-plus templates, built from what actually works for real businesses.</p>
            </div>
            <div className="template-row reveal" style={{ marginTop: '0' }}>
              {TEMPLATES.map((t) => (
                <div className="template-pill" key={t.name}><div className="tp-tag">{t.tag}</div><div className="tp-name">{t.name}</div><div className="tp-steps">{t.steps}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--mid"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Questions</p>
              <h2 className="section-title">About workflows.</h2>
            </div>
            <div className="faq-grid reveal">
              <div>
                {WORKFLOWS_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {WORKFLOWS_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <FaqItem key={item.q} question={item.q} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}>
                      <p>{item.a}</p>
                    </FaqItem>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Set one up. Watch it run itself.</h2>
            <p className="final-cta-sub">Start from a template — live in minutes, not a project.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
