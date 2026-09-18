import { useEffect, useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-whatsapp.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const WHATSAPP_FAQS = [
  { q: 'Do I need my own WhatsApp Business number?', a: "Yes — StepsAI connects to your verified WhatsApp Business number through the official API. If you don't have one yet, we help you set it up." },
  { q: 'Can it send images or product catalogs?', a: 'Yes — product photos, your catalog, and checkout links all send natively inside the conversation.' },
  { q: 'How does opt-out work for broadcasts?', a: 'Every broadcast respects WhatsApp’s opt-in rules — anyone who replies "stop" is removed from future segments automatically.' },
  { q: 'Is there a limit on messages per day?', a: "Limits follow WhatsApp's own messaging tiers, which expand automatically as your account builds a good quality rating." },
];

/** Ported 1:1 from channel-whatsapp.html's <main>. */
export function ChannelWhatsapp() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();

  // The whole brand-colour token set in channel-premium.css keys off
  // body[data-brand]; in the static site it came from <body data-brand="whatsapp">.
  useEffect(() => {
    document.body.dataset.brand = 'whatsapp';
    return () => {
      delete document.body.dataset.brand;
    };
  }, []);

  return (
    <Layout title="WhatsApp — StepsAI | Sell where they already message you." description="One-to-one booking conversations and one-to-many segment broadcasts, in the same channel, with the same memory of who's already a customer.">
      <Breadcrumb section="Channels" sectionHref="channels.html" label="WhatsApp Channel" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>WhatsApp</span>
              <h1 className="vertical-headline">Sell where they already message you.</h1>
              <p className="vertical-tagline">One-to-one booking conversations and one-to-many segment broadcasts, in the same channel, with the same memory of who's already a customer.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="agents.html#channels" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All channels
                </a>
              </div>
            </div>
            <div className="reveal">
              <WhatsAppMockup name="Nyra Store" status="online">
                <div className="wa-real-bubble in">Do you have slots open this weekend?<span className="wa-real-time">10:41 PM</span></div>
                <div className="wa-real-bubble out">Here's what's open:<span className="wa-real-time">10:41 PM<ChatTick /></span></div>
                <div className="chat-card">
                  <p className="chat-card-slot-label">This weekend</p>
                  <div className="chat-card-slots">
                    <span className="chat-card-slot">Sat, 11:00 AM</span>
                    <span className="chat-card-slot">Sat, 3:00 PM</span>
                    <span className="chat-card-slot">Sun, 1:00 PM</span>
                  </div>
                </div>
                <div className="wa-real-bubble in">Saturday 11am<span className="wa-real-time">10:42 PM</span></div>
                <div className="wa-real-bubble out">Booked &mdash; Saturday, 11 AM. I'll send a reminder the morning of.<span className="wa-real-time">10:42 PM<ChatTick /></span></div>
              </WhatsAppMockup>
              <div className="mock-annotation" style={{ marginTop: '14px' }}>
                <span className="wa-mock-avatar" style={{ width: '26px', height: '26px', fontSize: '10px' }}>N</span>
                <p>Same number, minutes later &mdash; <strong>broadcast</strong> to 1,240 inactive customers: &ldquo;It's been a while &mdash; here's 15% off your next visit.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> One channel, two jobs</p>
              <h2 className="section-title">The agent that booked her Saturday slot also sends to 1,240 people like her.</h2>
              <p className="section-sub">It answered one customer at 10:41 PM last night and booked a Saturday slot. This morning, it builds a list from behavior: booked before, quiet for 60 days, and sends to all 1,240 of them. Whoever replies lands in the same inbox as any other message.</p>
            </div>
            <div className="wflow-rail-wrap reveal">
              <div className="wflow-rail">
                <div className="wflow-rail-node done">Build a segment · booked before, inactive 60d+</div>
                <div className="wflow-rail-node done">Schedule for Friday 10am</div>
                <div className="wflow-rail-node done">Send to 1,240 customers, one message each</div>
                <div className="wflow-rail-node done">Replies route back into the same inbox</div>
              </div>
              <div className="wa-mock">
                <div className="wa-mock-head"><span className="wa-mock-avatar">N</span><div><div className="wa-mock-name">Nyra Store</div><div className="wa-mock-status">online</div></div></div>
                <div className="wa-mock-broadcast" style={{ margin: '16px' }}>
                  <span className="wa-mock-broadcast-label">Broadcast · sent to 1,240 customers</span>
                  <p className="wa-mock-broadcast-msg">"New season, new arrivals — 20% off this weekend only."</p>
                </div>
                <div className="wa-mock-body" style={{ paddingTop: 0 }}>
                  <div className="wa-mock-bubble in">Ooh, does this include the linen shirts?</div>
                  <div className="wa-mock-bubble out">Yes — want me to hold one in your size?</div>
                </div>
              </div>
            </div>
            <div className="ind-crosslink">
              <p>This is one tab inside the full Workflows builder.</p>
              <a href="workflows.html">See all workflow types <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        <section className="section section--raised">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> One message, handled differently every time</p>
              <h2 className="section-title">One broadcast becomes a dozen different conversations.</h2>
              <p className="section-sub">Same message, sent to 1,240 people. What comes back is never the same question twice — a sale, a request for a person, an order check. Each reply gets its own answer.</p>
            </div>
            <div className="sig-wa-diagram reveal">
              <div className="sig-wa-broadcast">
                <span className="sig-wa-broadcast-label">Broadcast &middot; sent to 1,240 customers</span>
                <p className="sig-wa-broadcast-msg">&ldquo;New season, new arrivals. 20% off this weekend only.&rdquo;</p>
              </div>
              <svg className="sig-wa-connectors" viewBox="0 0 800 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M400,0 C400,55 150,45 150,100" />
                <path d="M400,0 L400,100" />
                <path d="M400,0 C400,55 650,45 650,100" />
              </svg>
              <div className="sig-wa-threads reveal reveal-stagger">
                <div className="sig-wa-thread" style={{ '--i': 0 } as CSSProperties}>
                  <div className="sig-wa-thread-head"><span className="sig-wa-status sig-wa-status--sale">Sale</span></div>
                  <div className="sig-wa-bubble in">Does this include the linen shirts?</div>
                  <div className="sig-wa-bubble out">Yes. Want me to hold one in your size?</div>
                </div>
                <div className="sig-wa-thread" style={{ '--i': 1 } as CSSProperties}>
                  <div className="sig-wa-thread-head"><span className="sig-wa-status sig-wa-status--handoff">Handed off</span></div>
                  <div className="sig-wa-bubble in">I'd rather talk to someone about a bulk order.</div>
                  <div className="sig-wa-bubble out">Connecting you with Priya from our team now.</div>
                </div>
                <div className="sig-wa-thread" style={{ '--i': 2 } as CSSProperties}>
                  <div className="sig-wa-thread-head"><span className="sig-wa-status sig-wa-status--tracked">Order tracked</span></div>
                  <div className="sig-wa-bubble in">Is my order #10482 still on the way?</div>
                  <div className="sig-wa-bubble out">Out for delivery. Arriving by 6 PM today.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base">
          <div className="container">
            <div className="spread reverse reveal">
              <div>
                <div className="spread-index">04 / Built on the real thing</div>
                <h3>It connects to your WhatsApp Business number — it doesn't replace it.</h3>
                <p>You keep your existing verified number and green checkmark. StepsAI plugs into the official WhatsApp Business API, so every message is sent the way WhatsApp actually intends it.</p>
              </div>
              <div className="setup-visual">
                <div className="setup-integ-row"><span>WhatsApp Business number</span><span className="state">Connected</span></div>
                <div className="setup-integ-row"><span>Verified business profile</span><span className="state">Connected</span></div>
                <div className="setup-integ-row"><span>Message templates</span><span className="state">Approved</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Questions</p>
              <h2 className="section-title">About the WhatsApp channel.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {WHATSAPP_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {WHATSAPP_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Your next customer is already on WhatsApp.</h2>
            <p className="final-cta-sub">Same afternoon setup. Connects to your real number.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
