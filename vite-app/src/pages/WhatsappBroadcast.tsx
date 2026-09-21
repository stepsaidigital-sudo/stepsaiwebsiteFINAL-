import type { CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-broadcast.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqChat, FaqChatKickerIcon } from '../components/FaqChat';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const BROADCAST_FAQS = [
  { q: 'Do I need a WhatsApp Business API account?', a: 'Yes — StepsAI connects to your WhatsApp Business API number and handles template submission and approval for you.' },
  { q: 'What happens to people who reply?', a: "Every reply lands in your One Inbox as a normal conversation — the agent answers what it can, and hands off what it can't." },
  { q: 'Can I schedule it for later?', a: 'Yes, pick a date and time — or let it queue for the next allowed sending window automatically.' },
  { q: 'What if someone opts out?', a: "They're removed from every future broadcast instantly. They can still message you directly any time." },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
);

/** Ported 1:1 from whatsapp-broadcast.html's <main>. FAQ accordion factored into <FaqChat>. */
export function WhatsappBroadcast() {
  useIndustryPageBehavior();
  useChannelPremium();

  return (
    <Layout title="WhatsApp Broadcast — StepsAI | Reach everyone, answer everyone" description="Send one WhatsApp broadcast to a real, defined audience — every reply that comes back still gets handled like it's the only conversation happening.">
      <Breadcrumb section="Product" sectionHref="agents.html" label="WhatsApp Broadcast" />

      <main id="top">

        {/* 1. HERO */}
        <section className="vertical-hero">
          <div className="container reveal" style={{ maxWidth: '820px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Feature &middot; WhatsApp Broadcast</span>
            <h1 className="vertical-headline">One message to a thousand people. A thousand different replies, each one answered.</h1>
            <p className="vertical-tagline">Send a single broadcast to a real, defined audience on WhatsApp — every reply that comes back still gets handled like it's the only conversation happening that day.</p>
          </div>
        </section>

        {/* 2. THE BROADCAST, LIVE */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> The broadcast</p>
              <h2 className="section-title">What actually happens when you hit send.</h2>
              <p className="section-sub">One real scenario, start to finish — a sale announcement to people who've bought before.</p>
            </div>

            <div className="reveal">
              <div className="inbox-dash">
                <div className="inbox-dash-list">
                  <div className="inbox-dash-list-head">The broadcast</div>
                  <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div className="inbox-dash-record-row"><label>Audience</label><span>842 contacts</span></div>
                    <div className="inbox-dash-record-row"><label>Segment</label><span>Bought in 90 days</span></div>
                    <div className="inbox-dash-record-row"><label>Template</label><span>Sale Announcement</span></div>
                    <div className="inbox-dash-record-row"><label>Sends at</label><span>11:00 AM</span></div>
                    <div className="inbox-dash-record-row"><label>Delivered</label><span>842</span></div>
                    <span className="inbox-dash-record-ticket">Pre-approved template</span>
                  </div>
                  <div style={{ padding: '4px 16px 16px' }}>
                    <div className="inbox-dash-answer" style={{ margin: 0 }}>
                      Hi Priya! Our new collection is here &#10024;<br />15% off on all summer tees.<br />Shop now before it's gone &rarr;
                    </div>
                  </div>
                </div>

                <div className="inbox-dash-thread">
                  <div className="inbox-dash-thread-head">
                    <span className="inbox-dash-thread-who">What comes back</span>
                  </div>
                  <div className="inbox-dash-body">

                    <div className="inbox-dash-msg user">
                      <div className="inbox-dash-msg-meta">Aisha &middot; just now<span className="inbox-dash-msg-avatar">A</span></div>
                      <div className="inbox-dash-bubble">Does the blue one come in size L?</div>
                    </div>
                    <div className="inbox-dash-msg agent">
                      <div className="inbox-dash-msg-meta"><span className="inbox-dash-msg-avatar">SA</span>StepsAI Agent &middot; just now</div>
                      <div className="inbox-dash-answer">Yes &mdash; blue is back in L. Want me to hold one for you at 15% off?</div>
                    </div>

                    <div className="inbox-dash-msg user">
                      <div className="inbox-dash-msg-meta">Karthik &middot; 1m ago<span className="inbox-dash-msg-avatar">K</span></div>
                      <div className="inbox-dash-bubble">Please stop messaging me</div>
                    </div>
                    <div className="inbox-dash-msg agent">
                      <div className="inbox-dash-msg-meta"><span className="inbox-dash-msg-avatar">SA</span>StepsAI Agent &middot; 1m ago</div>
                      <div className="inbox-dash-answer">Done &mdash; you're removed from broadcasts, everywhere. You can still message us here any time.</div>
                    </div>

                    <div className="inbox-dash-msg user">
                      <div className="inbox-dash-msg-meta">Rohan &middot; 3m ago<span className="inbox-dash-msg-avatar">R</span></div>
                      <div className="inbox-dash-bubble">Thanks! Just grabbed one</div>
                    </div>
                    <div className="inbox-dash-msg agent">
                      <div className="inbox-dash-msg-meta"><span className="inbox-dash-msg-avatar">SA</span>StepsAI Agent &middot; 3m ago</div>
                      <div className="inbox-dash-answer">Love that &mdash; tag us when it arrives &#128156;</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. SIGNATURE MOMENT — build a segment, watch it send */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Build a segment, watch it send</p>
              <h2 className="section-title">Start with everyone. Send to who actually matters.</h2>
              <p className="section-sub">Every filter narrows the number for real. This is one real audience, built down from your whole customer list.</p>
            </div>

            <div className="sig-bcast-diagram reveal">
              <div className="sig-bcast-funnel reveal reveal-stagger">
                <div className="sig-bcast-step" style={{ '--i': 0 } as CSSProperties}>
                  <span className="sig-bcast-step-count">8,400</span>
                  <span className="sig-bcast-step-label">All customers</span>
                </div>
                <div className="sig-bcast-filter" style={{ '--i': 1 } as CSSProperties}>booked before</div>
                <div className="sig-bcast-step" style={{ '--i': 2 } as CSSProperties}>
                  <span className="sig-bcast-step-count">3,150</span>
                  <span className="sig-bcast-step-label">Booked before</span>
                </div>
                <div className="sig-bcast-filter" style={{ '--i': 3 } as CSSProperties}>inactive 60+ days</div>
                <div className="sig-bcast-step" style={{ '--i': 4 } as CSSProperties}>
                  <span className="sig-bcast-step-count">1,240</span>
                  <span className="sig-bcast-step-label">Inactive 60+ days</span>
                </div>
                <div className="sig-bcast-filter sig-bcast-filter--cap" style={{ '--i': 5 } as CSSProperties}>capped at 1,000 per send</div>
                <div className="sig-bcast-step sig-bcast-step--final" style={{ '--i': 6 } as CSSProperties}>
                  <span className="sig-bcast-step-count">1,000</span>
                  <span className="sig-bcast-step-label">Sending now</span>
                </div>
              </div>

              <div className="sig-bcast-live reveal">
                <div className="sig-bcast-live-row">
                  <span className="sig-bcast-live-dot" aria-hidden="true"></span>
                  <strong>1,000 delivered</strong>
                  <span className="sig-bcast-live-time">just now</span>
                </div>
                <div className="sig-bcast-live-reply">
                  <span className="inbox-dash-chan"><i className="wa"></i>WhatsApp</span>
                  <p>&ldquo;Does this include the linen shirts?&rdquo;</p>
                  <span className="sig-bcast-live-badge">Replied by the agent</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. YOU STAY IN CONTROL */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> You stay in control</p>
              <h2 className="section-title">Every rule WhatsApp has, already built in.</h2>
              <p className="section-sub">Nothing sends that shouldn't, to anyone who's opted out, outside the hours you'd expect.</p>
            </div>

            <div className="inbox-controls-row reveal">
              <span className="inbox-control-chip"><CheckIcon />Only pre-approved templates go out</span>
              <span className="inbox-control-chip"><CheckIcon />Opt-outs are removed instantly, everywhere</span>
              <span className="inbox-control-chip"><CheckIcon />Nothing sends outside quiet hours</span>
              <span className="inbox-control-chip"><CheckIcon />You pick the audience &mdash; never "everyone"</span>
            </div>
          </div>
        </section>

        {/* 5. WHY IT MATTERS — differentiators */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Why it matters</p>
              <h2 className="section-title">A broadcast isn't a dead end.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>Every reply, answered individually</h4><p>A product question, an opt-out, a simple thanks &mdash; each gets the right response, automatically, the moment it arrives.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Segmented, not sprayed</h4><p>Built from real order and chat history &mdash; "bought in 90 days," not a static list you exported once and forgot.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Inside WhatsApp's own rules</h4><p>Approved templates, respected opt-outs, and quiet hours &mdash; so your number stays in good standing.</p></div>
            </div>
          </div>
        </section>

        {/* 6. FAQ — message-style, chat bubbles */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">{FaqChatKickerIcon}<span className="n">06</span> Questions</p>
              <h2 className="section-title">About broadcasting.</h2>
              <p className="section-sub">Answered the way the inbox itself would answer them.</p>
            </div>

            <FaqChat head="You · WhatsApp Broadcast" items={BROADCAST_FAQS} />
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Say it once. Handle every reply anyway.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Live on your WhatsApp number today.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>

      </main>
    </Layout>
  );
}
