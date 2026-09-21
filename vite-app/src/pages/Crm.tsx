import type { CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-crm.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqChat, FaqChatKickerIcon } from '../components/FaqChat';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const CRM_FAQS = [
  { q: 'Which CRMs does it push to?', a: "HubSpot, Zoho CRM, Salesforce and more via Integrations — or skip the sync entirely and just use StepsAI's built-in one." },
  { q: "What if a contact doesn't exist yet?", a: "It's created automatically on their first conversation — no manual entry, no import step." },
  { q: 'Can I edit a record by hand?', a: 'Yes — anything the agent captures can be corrected, merged, or added to at any time.' },
  { q: 'How do tickets get assigned?', a: "You assign it — pick a person from your team, or leave it in the shared queue for whoever's up next. StepsAI doesn't guess who should take a ticket based on topic or urgency; a person decides, every time." },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
);

/** Ported 1:1 from crm.html's <main>. FAQ accordion factored into <FaqChat>. */
export function Crm() {
  useIndustryPageBehavior();
  useChannelPremium();

  return (
    <Layout title="Built-in CRM &amp; Tickets — StepsAI | Every contact, already on record" description="Every chat becomes a contact record automatically, and anything that needs follow-up becomes a ticket — logged, assigned, and closed without a spreadsheet.">
      <Breadcrumb section="Product" sectionHref="agents.html" label="Built-in CRM" />

      <main id="top">

        {/* 1. HERO */}
        <section className="vertical-hero">
          <div className="container reveal" style={{ maxWidth: '820px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Feature &middot; Built-in CRM &amp; Tickets</span>
            <h1 className="vertical-headline">Every contact, conversation and ticket — already where you need them.</h1>
            <p className="vertical-tagline">No copy-paste between apps. Every chat becomes a contact record automatically, and anything that needs follow-up becomes a ticket &mdash; logged, assigned, and closed without a spreadsheet.</p>
          </div>
        </section>

        {/* 2. THE RECORD, LIVE */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> The record</p>
              <h2 className="section-title">What a contact actually looks like.</h2>
              <p className="section-sub">One real customer, start to finish — from first chat to a resolved ticket.</p>
            </div>

            <div className="reveal">
              <div className="inbox-dash">
                <div className="inbox-dash-list">
                  <div className="inbox-dash-list-head">Contacts</div>

                  <div className="inbox-dash-row is-active">
                    <div className="inbox-dash-row-top">
                      <span className="inbox-dash-chan">Ritu Sharma</span>
                      <span className="inbox-dash-time">6 chats</span>
                    </div>
                    <p className="inbox-dash-preview">4 orders &middot; &#8377;18,400 lifetime</p>
                    <div className="inbox-dash-tags"><span className="inbox-dash-tag order">Open ticket</span></div>
                  </div>

                  <div className="inbox-dash-row">
                    <div className="inbox-dash-row-top">
                      <span className="inbox-dash-chan">Faisal K.</span>
                      <span className="inbox-dash-time">3 chats</span>
                    </div>
                    <p className="inbox-dash-preview">Asked about bulk pricing</p>
                    <div className="inbox-dash-tags"><span className="inbox-dash-tag lead">Lead</span></div>
                  </div>

                  <div className="inbox-dash-row">
                    <div className="inbox-dash-row-top">
                      <span className="inbox-dash-chan">Meghna P.</span>
                      <span className="inbox-dash-time">1 chat</span>
                    </div>
                    <p className="inbox-dash-preview">Refund &mdash; needs a person</p>
                    <div className="inbox-dash-tags"><span className="inbox-dash-tag tech">Needs handover</span></div>
                  </div>
                </div>

                <div className="inbox-dash-thread">
                  <div className="inbox-dash-thread-head">
                    <span className="inbox-dash-thread-who">Ritu Sharma</span>
                    <span className="inbox-dash-details-btn">See details</span>
                  </div>
                  <div className="inbox-dash-body">
                    <div className="inbox-dash-record">
                      <div className="inbox-dash-record-row"><label>Chats &middot; Orders</label><span>6 &middot; 4</span></div>
                      <div className="inbox-dash-record-row"><label>Lifetime value</label><span>&#8377;18,400</span></div>
                      <div className="inbox-dash-record-row"><label>Last order</label><span>2 days ago</span></div>
                    </div>

                    <p className="inbox-dash-record-note" style={{ marginTop: '4px' }}>Ticket &#35;218</p>
                    <div className="inbox-dash-record">
                      <div className="inbox-dash-record-row"><label>Raised</label><span>Damaged item on arrival</span></div>
                      <div className="inbox-dash-record-row"><label>Assigned</label><span>Priya &middot; Support</span></div>
                      <div className="inbox-dash-record-row"><label>Resolved</label><span>Refund issued, 2 days ago</span></div>
                    </div>

                    <p className="inbox-dash-record-note">Synced automatically to your CRM &mdash; no copy-paste.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sig-crm reveal">
              <div className="sig-crm-head">
                <span className="sig-crm-label">One customer, every channel</span>
                <h3 className="sig-crm-title">Not three contacts. One.</h3>
              </div>
              <div className="sig-crm-threads reveal reveal-stagger">
                <div className="sig-crm-channel" style={{ '--i': 0 } as CSSProperties}>
                  <span className="sig-crm-badge sig-crm-badge--wa">WhatsApp</span>
                  <p className="sig-crm-msg">"Is my order still on the way?"</p>
                </div>
                <div className="sig-crm-channel" style={{ '--i': 1 } as CSSProperties}>
                  <span className="sig-crm-badge sig-crm-badge--web">Website</span>
                  <p className="sig-crm-msg">"Do you have this in a size M?"</p>
                </div>
                <div className="sig-crm-channel" style={{ '--i': 2 } as CSSProperties}>
                  <span className="sig-crm-badge sig-crm-badge--ig">Instagram</span>
                  <p className="sig-crm-msg">"Loved this one, restocking soon?"</p>
                </div>
              </div>
              <svg className="sig-crm-connectors" viewBox="0 0 600 80" preserveAspectRatio="none" aria-hidden="true">
                <path d="M100,0 C100,45 300,35 300,80" />
                <path d="M300,0 L300,80" />
                <path d="M500,0 C500,45 300,35 300,80" />
              </svg>
              <div className="sig-crm-record reveal">
                <span className="sig-crm-avatar">R</span>
                <div><div className="sig-crm-name">Ritu Sharma</div><div className="sig-crm-sub">3 channels &middot; 6 chats &middot; 1 record</div></div>
                <span className="sig-crm-note">One contact</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. YOU STAY IN CONTROL */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> You stay in control</p>
              <h2 className="section-title">Automatic doesn't mean out of your hands.</h2>
              <p className="section-sub">Everything gets logged. Nothing gets locked.</p>
            </div>

            <div className="inbox-controls-row reveal">
              <span className="inbox-control-chip"><CheckIcon />Every chat becomes a contact automatically</span>
              <span className="inbox-control-chip"><CheckIcon />Push to HubSpot, Zoho, Salesforce &mdash; or just use StepsAI's</span>
              <span className="inbox-control-chip"><CheckIcon />Edit or merge any record by hand, any time</span>
              <span className="inbox-control-chip"><CheckIcon />Nothing gets logged twice</span>
            </div>
          </div>
        </section>

        {/* 4. WHY IT MATTERS — differentiators */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Why it matters</p>
              <h2 className="section-title">Nothing lives only in someone's memory.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>No copy-paste between apps</h4><p>Every conversation becomes a record the moment it happens, not something someone types up at the end of the day.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Tickets that don't get lost</h4><p>Raised, assigned and tracked to resolution, visible to whoever picks it up next &mdash; not buried in a chat someone forgot.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Works with what you already use</h4><p>Native inside StepsAI out of the box, or synced straight into the CRM your team already lives in.</p></div>
            </div>
          </div>
        </section>

        {/* 5. FAQ — message-style, chat bubbles */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">{FaqChatKickerIcon}<span className="n">05</span> Questions</p>
              <h2 className="section-title">About the CRM.</h2>
              <p className="section-sub">Answered the way the record itself would answer them.</p>
            </div>

            <FaqChat head="You · Built-in CRM" items={CRM_FAQS} />
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Never ask "wait, who is this?" again.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Every conversation becomes a record from day one.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>

      </main>
    </Layout>
  );
}
