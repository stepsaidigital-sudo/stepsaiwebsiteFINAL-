import type { CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-inbox.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqChat, FaqChatKickerIcon } from '../components/FaqChat';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const INBOX_FAQS = [
  { q: 'Can my whole team use it?', a: 'Yes — invite as many teammates as you need. Any of them can step into a conversation the agent handed over.' },
  { q: 'Does it cover every channel?', a: 'Website, WhatsApp, Instagram, Messenger and Gmail — all five, in this one inbox. No separate app for any of them.' },
  { q: 'What does handover actually look like?', a: 'The conversation moves into your queue with the full thread attached. You reply from the same inbox — the customer sees no interruption.' },
  { q: 'Can I take over mid-conversation?', a: "Any time. Step in whenever you want, hand it back whenever you're done — the agent picks up exactly where you left off." },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 13 4 4L19 7" /></svg>
);

/** Ported 1:1 from one-inbox.html's <main>. FAQ accordion factored into <FaqChat>. */
export function OneInbox() {
  useIndustryPageBehavior();
  useChannelPremium();

  return (
    <Layout title="One Inbox — StepsAI | Every conversation. One screen." description="Every conversation your agent has — on WhatsApp, Instagram, or your website — lands in one inbox. Step in whenever you want, with full context.">
      <Breadcrumb section="Product" sectionHref="agents.html" label="Unified One Inbox" />

      <main id="top">

        {/* 1. HERO */}
        <section className="vertical-hero">
          <div className="container reveal" style={{ maxWidth: '800px' }}>
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Platform · One Inbox</span>
            <h1 className="vertical-headline">Every conversation. One screen.</h1>
            <p className="vertical-tagline">Every conversation lands in one inbox. Step in whenever you want — the agent hands over cleanly, with full context.</p>
          </div>
        </section>

        {/* 2. THE DASHBOARD */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="omni-inbox-section reveal">
              <div className="omni-inbox-content">
                <p className="kicker"><span className="n">02</span> The dashboard</p>
                <h2 className="section-title">This is what it looks like, live.</h2>
                <p className="section-sub">Website, WhatsApp, and Instagram, side by side. Click into any thread and see the full conversation — what the customer asked, what the agent answered, and what still needs you.</p>
              </div>
              <div className="omni-inbox-visual">
                <div className="inbox-dash">
                  <div className="inbox-dash-list">
                    <div className="inbox-dash-list-head">Conversations</div>

                    <div className="inbox-dash-row is-active">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="wa"></i>WhatsApp</span>
                        <span className="inbox-dash-time">4m</span>
                      </div>
                      <p className="inbox-dash-preview">Can I speak to someone about a refund?</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag tech">Needs handover</span></div>
                    </div>

                    <div className="inbox-dash-row">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="ig"></i>Instagram</span>
                        <span className="inbox-dash-time">9m</span>
                      </div>
                      <p className="inbox-dash-preview">Is the 3BHK still available?</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag lead">Lead</span></div>
                    </div>

                    <div className="inbox-dash-row">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="web"></i>Web</span>
                        <span className="inbox-dash-time">31m</span>
                      </div>
                      <p className="inbox-dash-preview">Where's my order #2453?</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag order">Order</span></div>
                    </div>

                    <div className="inbox-dash-row">
                      <div className="inbox-dash-row-top">
                        <span className="inbox-dash-chan"><i className="wa"></i>WhatsApp</span>
                        <span className="inbox-dash-time">1h</span>
                      </div>
                      <p className="inbox-dash-preview">Yes please, size M works</p>
                      <div className="inbox-dash-tags"><span className="inbox-dash-tag resolved">Resolved</span></div>
                    </div>
                  </div>

                  <div className="inbox-dash-thread">
                    <div className="inbox-dash-thread-head">
                      <span className="inbox-dash-thread-who">Meera R. <span className="inbox-dash-thread-chan"><i className="wa"></i>WhatsApp</span></span>
                      <span className="inbox-dash-details-btn">See details</span>
                    </div>
                    <div className="inbox-dash-body">
                      <div className="inbox-dash-msg user">
                        <div className="inbox-dash-msg-meta">Meera &middot; 4m ago<span className="inbox-dash-msg-avatar">M</span></div>
                        <div className="inbox-dash-bubble">Can I speak to someone about a refund?</div>
                      </div>
                      <div className="inbox-dash-msg agent">
                        <div className="inbox-dash-msg-meta"><span className="inbox-dash-msg-avatar">SA</span>StepsAI Agent &middot; 3m ago</div>
                        <div className="inbox-dash-answer">
                          Of course &mdash; I've flagged this for our team with your full order history attached.
                          <p>Priya will pick this up shortly. You won't need to repeat anything.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SIGNATURE MOMENT — three channels converging into one list */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Three channels, one list</p>
              <h2 className="section-title">Stop checking three apps for the same thing.</h2>
              <p className="section-sub">A message on WhatsApp, a comment turned DM on Instagram, a question typed into your website widget. All three land in the same list, in the order they arrive.</p>
            </div>

            <div className="sig-inbox-diagram reveal">
              <div className="sig-inbox-sources reveal reveal-stagger">
                <div className="sig-inbox-source" style={{ '--i': 0 } as CSSProperties}>
                  <span className="inbox-dash-chan"><i className="wa"></i>WhatsApp</span>
                  <p className="sig-inbox-source-msg">"Do you have slots open this weekend?"</p>
                </div>
                <div className="sig-inbox-source" style={{ '--i': 1 } as CSSProperties}>
                  <span className="inbox-dash-chan"><i className="ig"></i>Instagram</span>
                  <p className="sig-inbox-source-msg">"Is the 3BHK still available?"</p>
                </div>
                <div className="sig-inbox-source" style={{ '--i': 2 } as CSSProperties}>
                  <span className="inbox-dash-chan"><i className="web"></i>Website</span>
                  <p className="sig-inbox-source-msg">"Where's my order #2453?"</p>
                </div>
              </div>
              <svg className="sig-inbox-connectors" viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M150,0 C150,55 400,45 400,100" />
                <path d="M400,0 L400,100" />
                <path d="M650,0 C650,55 400,45 400,100" />
              </svg>
              <div className="sig-inbox-unified reveal">
                <span className="sig-inbox-unified-label">One inbox &middot; 3 channels</span>
                <div className="sig-inbox-unified-row"><span className="inbox-channel-tag">WA</span><span className="sig-inbox-unified-text">Do you have slots open this weekend?</span><span className="sig-inbox-unified-time">4m</span></div>
                <div className="sig-inbox-unified-row"><span className="inbox-channel-tag">IG</span><span className="sig-inbox-unified-text">Is the 3BHK still available?</span><span className="sig-inbox-unified-time">9m</span></div>
                <div className="sig-inbox-unified-row"><span className="inbox-channel-tag">Web</span><span className="sig-inbox-unified-text">Where's my order #2453?</span><span className="sig-inbox-unified-time">31m</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. YOU STAY IN CONTROL */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--mid"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> You stay in control</p>
              <h2 className="section-title">It handles what it can. You handle what matters.</h2>
              <p className="section-sub">Nothing happens off the record. Every answer, every handover, visible the moment it happens.</p>
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

        {/* 5. WHY ONE INBOX — differentiators */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Why it matters</p>
              <h2 className="section-title">Five channels don't mean five inboxes.</h2>
            </div>
            <div className="diff-grid reveal reveal-stagger">
              <div className="diff-card" style={{ '--i': 0 } as CSSProperties}><h4>One screen, every channel</h4><p>Website, WhatsApp, Instagram, Messenger and Gmail — every conversation lands in the same place, no tab-switching between apps.</p></div>
              <div className="diff-card" style={{ '--i': 1 } as CSSProperties}><h4>Handover with full history</h4><p>When it passes a conversation to you, the customer never repeats themselves — you see everything the agent saw.</p></div>
              <div className="diff-card" style={{ '--i': 2 } as CSSProperties}><h4>Real-time, not a daily digest</h4><p>Conversations appear the moment they happen. You can watch, step in, or leave it running.</p></div>
            </div>
          </div>
        </section>

        {/* 6. FAQ — message-style, chat bubbles */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">{FaqChatKickerIcon}<span className="n">06</span> Questions</p>
              <h2 className="section-title">About the inbox.</h2>
              <p className="section-sub">Answered the way the inbox itself would answer them.</p>
            </div>

            <FaqChat head="You · One Inbox" items={INBOX_FAQS} />
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">See every conversation, in one place.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Live on WhatsApp, Instagram, and your website.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>

      </main>
    </Layout>
  );
}
