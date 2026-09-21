import { useState, type CSSProperties, type ReactNode } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/creative-showcase.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useSetupUrlTyping } from '../hooks/useAgentsPage';

const SETUP_TABS = [
  { key: 'teach', label: 'Teach it' },
  { key: 'brand', label: 'Make it yours' },
  { key: 'connect', label: 'Connect it' },
  { key: 'golive', label: 'Go live' },
] as const;

const WFLOW_TABS = [
  { key: 'carts', label: 'Recover carts' },
  { key: 'leads', label: 'Follow up leads' },
  { key: 'reminders', label: 'Remind customers' },
  { key: 'reengage', label: 'Re-engage' },
  { key: 'broadcast', label: 'Broadcast & promote' },
] as const;

const AGENTS_FAQS = [
  { q: 'Is this just a chatbot?', a: 'No. A chatbot answers from a script. This reads your actual products, stock, and calendar, then takes the action itself — books, saves, updates.' },
  { q: 'Will it sound like a robot?', a: "You write its tone and welcome message. Most customers don't realize they're talking to an agent until it tells them." },
  { q: 'Do I need a developer?', a: "No. Paste your URL, connect the tools you already use, and it's live — no code, no training data to prepare." },
  { q: "What if it doesn't know an answer?", a: "It says so, and hands the conversation to your team with full context — it never guesses at something it isn't sure of." },
  { q: "Can I see what it's saying to customers?", a: 'Every conversation lands in one inbox, visible in real time, across every channel.' },
  { q: 'What happens when I want to take over?', a: 'Step in any time. The agent hands over cleanly, with the full conversation history intact.' },
  { q: 'Which languages does it speak?', a: 'Whatever language your customer writes in first — it matches them, not the other way around.' },
  { q: "How long until it's live?", a: 'Most businesses are live the same afternoon they paste in their website link.' },
];

const SHOPIFY_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M19.349 7.086c-.035-.047-.07-.082-.105-.117a.64.64 0 0 0-.258-.164L15.342.152a.774.774 0 0 0-.305-.129A1.066 1.066 0 0 0 14.628 0h-.012c-.105 0-.2.023-.293.047L8.694 1.84c-.035.012-.059.023-.082.047a.9.9 0 0 0-.305.21c-.047.059-.094.106-.117.165l-2.027 6.164a61.16 61.16 0 0 0-1.418.176c-.539.082-.926.152-1.125.21a.7.7 0 0 0-.504.657 1.83 1.83 0 0 0 .14.62c.188.458.551 1.043 1.137 1.77 1.348 1.64 3.012 3.328 4.887 5.086 2.309 2.156 4.793 4.254 7.277 6.28.188.153.422.235.656.235h.023c.27 0 .528-.117.715-.317a364.5 364.5 0 0 0 3.328-3.668c.95-1.078 1.758-2.086 2.309-2.918.574-.879.797-1.547.785-2.051v-.012a.855.855 0 0 0-.27-.61 5.92 5.92 0 0 0-.761-.597c-.668-.469-1.63-.996-2.73-1.57-1.442-.762-3.13-1.559-4.302-2.156 2.051-1.395 3.305-2.285 3.305-2.285a.732.732 0 0 0 .152-1.02Zm-11.414 1.85L9.67 3.513c-.024-.035-.047-.046-.07-.07a2.533 2.533 0 0 0-.469.153l-2.004.61-1.031 3.104a37.398 37.398 0 0 1 1.84-.374Zm8.168-1.523a1.443 1.443 0 0 0-1.066.457c-2.11 2.015-3.082 3.656-3.235 3.937a.64.64 0 0 0 .422.95 240.24 240.24 0 0 0 5.461 1.183c-1.535-1.523-2.344-3.164-2.508-4.101a1.278 1.278 0 0 0 .164 0c.281 0 .527.152.715.35.492.54 1.195 1.548 1.886 2.872a56.544 56.544 0 0 0 1.266-3.575l-3.105-2.074ZM15 1.196L18.42 6.84c-1.36-.61-3.657-1.22-6.528-1.56L15 1.195Zm-4.3 1.3a74.1 74.1 0 0 1 6.809 1.63 70.083 70.083 0 0 0-4.043-4.501c-.13-.153-.305-.153-.352-.14l-2.414.807Z" /></svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
);

/** The lightweight .wa-mock chat shell repeated once per workflow panel — head is identical each time, only the body differs. */
function WaMock({ children }: { children: ReactNode }) {
  return (
    <div className="wa-mock">
      <div className="wa-mock-head"><span className="wa-mock-avatar">N</span><div><div className="wa-mock-name">Nyra Store</div><div className="wa-mock-status">online</div></div></div>
      {children}
    </div>
  );
}

/**
 * Ported 1:1 from agents.html's <main> — the AI Agents product overview.
 * agents.js's setup/workflow tab wiring becomes component state; its step-1
 * URL typewriter is useSetupUrlTyping.
 *
 * NOTE: agents.html also carries three intentionally disabled blocks wrapped
 * in <template data-disabled-section="AGENTS_CREATIVE_SHOWCASE_*"> (fabricated
 * stats kept for later restoration, per site convention). Templates render
 * nothing, so they are not reproduced here; agents.html remains their record.
 */
export function AgentsOverview() {
  const [setupTab, setSetupTab] = useState<string>('teach');
  const [wflowTab, setWflowTab] = useState<string>('carts');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { sectionRef: setupSectionRef, typedUrl } = useSetupUrlTyping('https://nyrastore.com');
  useIndustryPageBehavior();

  return (
    <Layout
      title="AI Agents — StepsAI | It answers. Then it acts."
      description="Four agents, one brain, every channel: sales, leads, meetings, and support — answering on WhatsApp, Instagram and your website, then taking the action itself."
    >
      <Breadcrumb section="Product" sectionHref={null} label="AI Agents" />

      <main id="top">
        {/* 1. HERO */}
        <section className="vertical-hero">
          <div className="container reveal" style={{ maxWidth: '800px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>AI Agents</span>
            <h1 className="vertical-headline">It answers. Then it acts.</h1>
            <p className="vertical-tagline">Answers customer questions on WhatsApp, Instagram and your website — then books the meeting, saves the lead, or updates the order. This is everything it does, in depth.</p>
          </div>
        </section>

        {/* 2. FOUR AGENTS */}
        <section className="section section--raised section--atmo" id="four-agents">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Four agents, one brain</p>
              <h2 className="section-title">Four jobs. One agent that knows your business.</h2>
              <p className="section-sub">Each agent handles a different job. They share the same memory of your products, your customers, and your answers.</p>
            </div>

            <div className="agents-bento reveal reveal-stagger">
              <div className="agent-card lg" style={{ '--i': 0 } as CSSProperties}>
                <span className="agent-card-icon">{SHOPIFY_ICON}</span>
                <h3>Sales Agent</h3>
                <p>Recommends products, checks real stock, and closes the sale — right inside the conversation.</p>
                <div className="agent-card-example">
                  <div className="agent-example-bubble">Reserved the linen shirt for you.</div>
                  <div className="agent-example-receipt"><CheckIcon />Shopify &middot; Cart updated</div>
                </div>
              </div>
              <div className="agent-card" style={{ '--i': 1 } as CSSProperties}>
                <span className="agent-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                <h3>Lead Agent</h3>
                <p>Qualifies who they are, what they need, and how soon — saved to your CRM automatically.</p>
                <div className="agent-card-example">
                  <div className="agent-example-bubble">Sent you the 3BHK details.</div>
                  <div className="agent-example-receipt"><CheckIcon />CRM &middot; Site visit scheduled</div>
                </div>
              </div>
              <div className="agent-card" style={{ '--i': 2 } as CSSProperties}>
                <span className="agent-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg></span>
                <h3>Meetings Agent</h3>
                <p>Offers your real open slots and confirms the time — no back-and-forth.</p>
                <div className="agent-card-example">
                  <div className="agent-example-bubble">Booked you for Saturday 11am.</div>
                  <div className="agent-example-receipt"><CheckIcon />Calendly &middot; Confirmed</div>
                </div>
              </div>
              <div className="agent-card" style={{ '--i': 3 } as CSSProperties}>
                <span className="agent-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
                <h3>Support Agent</h3>
                <p>Tracks orders, answers policy questions, and resolves issues without waiting for a human.</p>
                <div className="agent-card-example">
                  <div className="agent-example-bubble">Here's the course fee and dates.</div>
                  <div className="agent-example-receipt"><CheckIcon />CRM &middot; Enquiry captured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ONE INBOX / OMNICHANNEL */}
        <section className="section section--base section--atmo" id="channels">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="omni-inbox-section reveal">
              <div className="omni-inbox-content">
                <p className="kicker">ONE INBOX &middot; NOTHING GETS MISSED</p>
                <h2 className="section-title">Every conversation, one place &mdash; and a person who can step in anytime.</h2>
                <p className="section-sub">Website, WhatsApp, and Instagram, side by side. The AI handles what it can; your team sees exactly when it doesn't &mdash; nothing sits unanswered in a tab nobody checks.</p>
                <a href="one-inbox.html" className="omni-inbox-link">See how One Inbox works &rarr;</a>
              </div>
              <div className="omni-inbox-visual">
                <div className="inbox-dash">
                  <div className="inbox-dash-list">
                    <div className="inbox-dash-list-head">Conversations</div>

                    <div className="inbox-dash-row is-active">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="web"></i>Web</span>
                        <span className="inbox-dash-time">2m</span>
                      </div>
                      <p className="inbox-dash-preview">What's your return policy?</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag inquiry">Product Inquiry</span></div>
                    </div>

                    <div className="inbox-dash-row">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="ig"></i>Instagram</span>
                        <span className="inbox-dash-time">12m</span>
                      </div>
                      <p className="inbox-dash-preview">Is this available in blue?</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag inquiry">Product Inquiry</span></div>
                    </div>

                    <div className="inbox-dash-row">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="wa"></i>WhatsApp</span>
                        <span className="inbox-dash-time">28m</span>
                      </div>
                      <p className="inbox-dash-preview">Can you confirm my order shipped?</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag order">Order</span></div>
                    </div>

                    <div className="inbox-dash-row">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="web"></i>Web</span>
                        <span className="inbox-dash-time">1h</span>
                      </div>
                      <p className="inbox-dash-preview">Do you ship internationally?</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag lead">Lead</span></div>
                    </div>

                    <div className="inbox-dash-row">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="wa"></i>WhatsApp</span>
                        <span className="inbox-dash-time">3h</span>
                      </div>
                      <p className="inbox-dash-preview">My discount code isn't working</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag tech">Technical Issue</span></div>
                    </div>
                  </div>

                  <div className="inbox-dash-thread">
                    <div className="inbox-dash-thread-head">
                      <span className="inbox-dash-thread-who">Priya M. <span className="inbox-dash-thread-chan"><i className="web"></i>Web</span></span>
                      <span className="inbox-dash-details-btn">See details</span>
                    </div>
                    <div className="inbox-dash-body">
                      <div className="inbox-dash-msg user">
                        <div className="inbox-dash-msg-meta">Priya &middot; 2m ago<span className="inbox-dash-msg-avatar">P</span></div>
                        <div className="inbox-dash-bubble">What's your return policy?</div>
                      </div>
                      <div className="inbox-dash-msg agent">
                        <div className="inbox-dash-msg-meta"><span className="inbox-dash-msg-avatar">SA</span>StepsAI Agent &middot; 2m ago</div>
                        <div className="inbox-dash-answer">
                          You can return any unworn item within <b>14 days</b> of delivery for a full refund.
                          <ul>
                            <li>Free return pickup across India</li>
                            <li>Refund processed in 3&ndash;5 business days</li>
                            <li>Exchanges available for size or colour, subject to stock</li>
                          </ul>
                          <p>Want me to start a return for a specific order?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SETUP */}
        <section className="section section--raised section--atmo" id="setup" ref={setupSectionRef}>
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Live in an afternoon</p>
              <h2 className="section-title">Paste your website link. That's step one.</h2>
              <p className="section-sub">No developer. No training data. No three-month rollout.</p>
            </div>

            <div className="reveal">
              <div className="setup-tabs">
                {SETUP_TABS.map((tab) => (
                  <button
                    key={tab.key}
                    className={`setup-tab-btn${setupTab === tab.key ? ' active' : ''}`}
                    type="button"
                    onClick={() => setSetupTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className={`setup-tab-panel${setupTab === 'teach' ? ' active' : ''}`}>
                <div><h3>It reads your site, automatically</h3><p>Paste your URL. It crawls your pages and learns your products, policies, and tone — no documents to prepare.</p></div>
                <div className="setup-visual">
                  <div className="setup-field-label">Website URL</div>
                  <div className="setup-field"><span>{typedUrl}</span></div>
                  <div className="setup-row-ready"><b>47 pages found</b><span>Ready</span></div>
                </div>
              </div>

              <div className={`setup-tab-panel${setupTab === 'brand' ? ' active' : ''}`}>
                <div><h3>It sounds like your business</h3><p>Name it, give it a welcome message, and pick your accent color. Most customers don't realize they're talking to an agent until it tells them.</p></div>
                <div className="setup-visual">
                  <div className="setup-field-label">Agent name</div>
                  <div className="setup-field">Nyra Store Assistant</div>
                  <div className="setup-field-label">Accent color</div>
                  <div className="setup-swatches">
                    <span className="setup-swatch active" style={{ background: '#1A56DB' }}></span>
                    <span className="setup-swatch" style={{ background: '#0B9E58' }}></span>
                    <span className="setup-swatch" style={{ background: '#D97917' }}></span>
                  </div>
                  <div className="setup-field-label">Welcome message</div>
                  <div className="setup-field">Hi! Ask me anything about Nyra Store.</div>
                </div>
              </div>

              <div className={`setup-tab-panel${setupTab === 'connect' ? ' active' : ''}`}>
                <div><h3>Connect the tools you already use</h3><p>Each integration unlocks a real action — checking stock, booking a slot, saving a lead — not just answering questions about it.</p></div>
                <div className="setup-visual">
                  <div className="setup-integ-row"><span>Shopify</span><span className="state">Connected</span></div>
                  <div className="setup-integ-row"><span>Calendly</span><span className="state">Connected</span></div>
                  <div className="setup-integ-row"><span>HubSpot</span><span className="state">Connected</span></div>
                  <div className="setup-integ-row"><span>Inbox</span><span className="state">Connected</span></div>
                </div>
              </div>

              <div className={`setup-tab-panel${setupTab === 'golive' ? ' active' : ''}`}>
                <div><h3>Test it, then flip it on</h3><p>Ask it a real question first. When you're happy, turn on each channel — live in minutes, not weeks.</p></div>
                <div className="setup-visual">
                  <div className="setup-field">"Where's my order?" <span style={{ marginLeft: 'auto', color: 'var(--success)', fontWeight: 600, fontSize: '12px' }}>Passed</span></div>
                  <div className="setup-toggle-row"><span>Website</span><span className="setup-toggle"></span></div>
                  <div className="setup-toggle-row"><span>Instagram</span><span className="setup-toggle"></span></div>
                  <div className="setup-toggle-row"><span>WhatsApp</span><span className="setup-toggle"></span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WORKFLOWS (dark) — automation, reminders, and broadcast */}
        <section className="section section--dark" id="workflows">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Automated workflows</p>
              <h2 className="section-title">When the customer stops, it keeps going.</h2>
              <p className="section-sub">Carts get abandoned. Leads go quiet. Appointments get forgotten. Promotions need sending. It runs all of it so you don't have to.</p>
            </div>

            <div className="reveal">
              <div className="wflow-tabs">
                {WFLOW_TABS.map((tab) => (
                  <button
                    key={tab.key}
                    className={`wflow-tab${wflowTab === tab.key ? ' active' : ''}`}
                    type="button"
                    onClick={() => setWflowTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className={`wflow-panel${wflowTab === 'carts' ? ' active' : ''}`}>
                <div className="wf-canvas-wrap">
                  <div className="wf-canvas">
                    <div className="wf-live-tag">Live example — Shopify cart recovery</div>
                    <div className="wf-trunk">
                      <div className="wf-node" data-wf-step="1">
                        <span className="wf-node-icon">{SHOPIFY_ICON}</span>
                        <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Cart left behind &middot; ₹2,400</div></div>
                      </div>
                      <div className="wf-line" data-wf-step="2"></div>
                      <div className="wf-node" data-wf-step="2">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                        <div><div className="wf-node-kind">Action &middot; Wait</div><div className="wf-node-title">Wait 30 minutes</div></div>
                      </div>
                      <div className="wf-line" data-wf-step="3"></div>
                      <div className="wf-node" data-wf-step="3">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                        <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check — order not placed</div></div>
                      </div>
                      <div className="wf-line" data-wf-step="4"></div>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M17.472 14.383c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></span>
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

              <div className={`wflow-panel${wflowTab === 'leads' ? ' active' : ''}`}>
                <div className="wflow-rail-wrap">
                  <div className="wflow-rail">
                    <div className="wflow-rail-node done">Lead goes quiet &middot; 3 days no reply</div>
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

              <div className={`wflow-panel${wflowTab === 'reminders' ? ' active' : ''}`}>
                <div className="wflow-rail-wrap">
                  <div className="wflow-rail">
                    <div className="wflow-rail-node done">Appointment booked &middot; tomorrow 4:30pm</div>
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

              <div className={`wflow-panel${wflowTab === 'reengage' ? ' active' : ''}`}>
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

              <div className={`wflow-panel${wflowTab === 'broadcast' ? ' active' : ''}`}>
                <div className="wflow-rail-wrap">
                  <div className="wflow-rail">
                    <div className="wflow-rail-node done">Build a segment &middot; booked before, inactive 60d+</div>
                    <div className="wflow-rail-node done">Schedule for Friday 10am</div>
                    <div className="wflow-rail-node done">Send to 1,240 customers, one message each</div>
                    <div className="wflow-rail-node done">Replies route back into the same inbox</div>
                  </div>
                  <WaMock>
                    <div className="wa-mock-broadcast" style={{ margin: '16px' }}>
                      <span className="wa-mock-broadcast-label">Broadcast &middot; sent to 1,240 customers</span>
                      <p className="wa-mock-broadcast-msg">"New season, new arrivals — 20% off this weekend only."</p>
                    </div>
                    <div className="wa-mock-body" style={{ paddingTop: 0 }}>
                      <div className="wa-mock-bubble in">Ooh, does this include the linen shirts?</div>
                      <div className="wa-mock-bubble out">Yes — want me to hold one in your size?</div>
                    </div>
                  </WaMock>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ONE INBOX */}
        <section className="section section--base section--atmo" id="one-inbox">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">06</span> You stay in control</p>
              <h2 className="section-title">It handles what it can. You handle what matters.</h2>
              <p className="section-sub">Every conversation lands in one inbox. Step in whenever you want — the agent hands over cleanly, with full context.</p>
            </div>

            <div className="inbox-controls-row reveal">
              <span className="inbox-control-chip"><CheckIcon />You decide what it answers</span>
              <span className="inbox-control-chip"><CheckIcon />You decide when it stops</span>
              <span className="inbox-control-chip"><CheckIcon />Every conversation is visible</span>
              <span className="inbox-control-chip"><CheckIcon />Handover keeps the full history</span>
            </div>

            <div className="inbox-list reveal reveal-stagger">
              <div className="inbox-list-row" style={{ '--i': 0 } as CSSProperties}><span className="inbox-channel-tag">WA</span><span className="inbox-name">Aarav Shah</span><span className="inbox-preview">Yes please, size M works</span><span className="inbox-time">10:43 PM</span><span className="inbox-status resolved">Resolved</span></div>
              <div className="inbox-list-row" style={{ '--i': 1 } as CSSProperties}><span className="inbox-channel-tag">IG</span><span className="inbox-name">nyra.fan22</span><span className="inbox-preview">Is the 3BHK still available?</span><span className="inbox-time">9:16 PM</span><span className="inbox-status booked">Booked</span></div>
              <div className="inbox-list-row" style={{ '--i': 2 } as CSSProperties}><span className="inbox-channel-tag">Web</span><span className="inbox-name">Meera R.</span><span className="inbox-preview">Can I speak to someone about a refund?</span><span className="inbox-time">8:52 PM</span><span className="inbox-status handover">With Priya</span></div>
              <div className="inbox-list-row" style={{ '--i': 3 } as CSSProperties}><span className="inbox-channel-tag">WA</span><span className="inbox-name">Karthik V.</span><span className="inbox-preview">Got it, thank you!</span><span className="inbox-time">7:30 PM</span><span className="inbox-status booked">Lead saved</span></div>
              <div className="inbox-list-row" style={{ '--i': 4 } as CSSProperties}><span className="inbox-channel-tag">Web</span><span className="inbox-name">Divya S.</span><span className="inbox-preview">Where's my order #2453?</span><span className="inbox-time">6:58 PM</span><span className="inbox-status resolved">Answered</span></div>
            </div>
          </div>
        </section>

        {/* 7. ANALYTICS */}
        <section className="section section--raised section--atmo" id="analytics">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">07</span> See what it did</p>
              <h2 className="section-title">Every answer, every action, in plain English.</h2>
              <p className="section-sub">Not a wall of charts. A weekly summary of what your agent actually handled — and what needs you.</p>
            </div>

            <p className="analytics-note reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="9" /></svg>Every number on this page is from a real account or clearly marked as an example.</p>

            <div className="analytics-dash reveal">
              <div className="analytics-stat-row" data-count-container="">
                <div className="analytics-stat"><b data-count="412">0</b><span>Conversations</span></div>
                <div className="analytics-stat"><b data-count="358">0</b><span>Answered solo</span></div>
                <div className="analytics-stat"><b data-count="24">0</b><span>Meetings booked</span></div>
                <div className="analytics-stat"><b data-count="30">0</b><span>Passed to team</span></div>
              </div>
              <div className="analytics-bars" aria-hidden="true">
                <span style={{ height: '38%' }}></span><span style={{ height: '62%' }}></span><span style={{ height: '44%' }}></span><span style={{ height: '71%' }}></span><span style={{ height: '55%' }}></span><span style={{ height: '80%' }}></span><span style={{ height: '60%' }}></span>
              </div>
            </div>
          </div>
        </section>

        {/* REAL PROOF — unhide only when real, attributed material is available.
            Do not populate with placeholder logos, invented quotes, or sample customers. */}
        <section className="section section--base section--atmo" id="real-proof" style={{ display: 'none' }}>
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <p className="kicker">Real results</p>
            <h2 className="section-title">Real businesses. Real numbers.</h2>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="section section--base section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">08</span> Questions</p>
              <h2 className="section-title">Everything else.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {AGENTS_FAQS.slice(0, 4).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {AGENTS_FAQS.slice(4, 8).map((item, i) => {
                  const idx = i + 4;
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

        {/* 9. FINAL CTA */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Paste your website link. Watch it start answering.</h2>
            <p className="final-cta-sub">Same afternoon setup. Live on WhatsApp, Instagram, and your website.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
