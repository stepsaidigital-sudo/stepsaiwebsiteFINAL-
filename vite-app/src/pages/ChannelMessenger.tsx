import { useEffect, useRef, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-messenger.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const MESSENGER_FAQS = [
  { q: 'Do I need a Facebook Page?', a: "Yes — StepsAI connects to your Facebook Page's Messenger inbox through the official Messenger Platform API." },
  { q: 'Does it work with click-to-Messenger ads?', a: "Yes — it reads the ad or post someone clicked and opens the conversation already knowing what they're asking about." },
  { q: 'Can my team jump in too?', a: 'Any time — handover works the same as every other channel, full conversation history included.' },
  { q: 'Does it replace my Page inbox?', a: 'No — it works inside it. Your team sees and can reply to the same conversations, any time.' },
];

/** channel-*.html FAQ rows use the `.faq-chev` plus-glyph (CSS rotates it 45deg into an ×), not the caret baked into the shared <FaqItem>. */
function PlusFaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-question" type="button" onClick={onToggle}>{question}<svg className="faq-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></button>
      <div className="faq-answer" ref={answerRef}><p>{answer}</p></div>
    </div>
  );
}

/** Ported 1:1 from channel-messenger.html's <main>. */
export function ChannelMessenger() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();

  // The whole brand-colour token set in channel-premium.css keys off
  // body[data-brand]; in the static site it came from <body data-brand="messenger">.
  useEffect(() => {
    document.body.dataset.brand = 'messenger';
    return () => {
      delete document.body.dataset.brand;
    };
  }, []);

  return (
    <Layout title="Messenger — StepsAI | Every Page message, already in context" description="A click on an ad or a Page post arrives with context most bots throw away — the agent opens the conversation already knowing what they're asking about.">
      <Breadcrumb section="Channels" sectionHref="channels.html" label="Messenger Channel" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Messenger</span>
              <h1 className="vertical-headline">It already knows why they messaged.</h1>
              <p className="vertical-tagline">A click on an ad or a Page post arrives with context most bots throw away — the agent opens the conversation already knowing what they're asking about.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="agents.html#channels" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All channels
                </a>
              </div>
            </div>
            <div className="reveal">
              {/* .mg-real is Messenger-only chrome (referral ref line, no mic button), so it can't reuse <WhatsAppMockup>/<InstagramMockup>. */}
              <div className="mg-real">
                <div className="phone-status">
                  <span>9:41</span>
                  <span className="phone-status-icons">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5" /><rect x="4.3" y="5" width="3" height="6" rx="0.5" /><rect x="8.6" y="3" width="3" height="8" rx="0.5" /><rect x="12.9" y="0" width="3" height="11" rx="0.5" /></svg>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 4C4.7 0.7 10.3 0.7 14 4" /><path d="M3.3 6.4C5.7 4.2 9.3 4.2 11.7 6.4" /><path d="M6 8.7C6.9 7.9 8.1 7.9 9 8.7" /></svg>
                    <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" /><rect x="2" y="2" width="17" height="7" rx="1.2" fill="currentColor" /><rect x="21.3" y="3.3" width="1.7" height="4.4" rx="0.8" fill="currentColor" /></svg>
                  </span>
                </div>
                <div className="mg-real-header">
                  <svg className="back" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4L7 12L15 20" /></svg>
                  <span className="mg-real-avatar">N</span>
                  <div className="mg-real-id"><span className="mg-real-name">Nyra Store</span><span className="mg-real-active">Active now</span></div>
                  <span className="mg-real-icons">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.7c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" /></svg>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 9.5L22 6v12l-6-3.5" /></svg>
                  </span>
                </div>
                <div className="mg-real-body">
                  <span className="mg-real-ref">From ad &middot; Linen Shirt Collection</span>
                  <div className="mg-real-bubble in">Hi! Is this still available?</div>
                  <div className="mg-real-bubble out">Yes! The Linen Shirt Collection is back in stock &mdash; want to see sizes?</div>
                  <div className="mg-real-bubble in">Yes, size M</div>
                  <div className="mg-real-bubble out">Size M is available &mdash; here's your link, 10% off today only.</div>
                </div>
                <div className="mg-real-composer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 10.5v.01M15.5 10.5v.01M8 14.5c1.2 1.2 2.8 1.2 4 1.2s2.8 0 4-1.2" /></svg>
                  <span className="mg-real-input">Message...</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7l1.5-3h5L16 7" /><circle cx="12" cy="13.5" r="3.5" /></svg>
                </div>
                <div className="phone-home-bar"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="spread reveal">
              <div>
                <div className="spread-index">02 / It knows why they messaged</div>
                <h3>A DM from an ad isn't a cold message.</h3>
                <p>When someone messages from a "Send Message" button on an ad or a Page post, the referral comes with it &mdash; the agent starts the conversation already knowing what they clicked, not guessing from scratch.</p>
              </div>
              <div className="spread-visual">
                <div className="wa-mock">
                  <div className="wa-mock-head"><span className="wa-mock-avatar">N</span><div><div className="wa-mock-name">Nyra Store</div><div className="wa-mock-status">Active now</div></div></div>
                  <div className="wa-mock-broadcast" style={{ margin: '16px' }}>
                    <span className="wa-mock-broadcast-label">From ad &middot; Linen Shirt Collection</span>
                    <p className="wa-mock-broadcast-msg">"Is this still available?"</p>
                  </div>
                  <div className="wa-mock-body" style={{ paddingTop: 0 }}>
                    <div className="wa-mock-bubble in">Yes, size M</div>
                    <div className="wa-mock-bubble out">Size M is available &mdash; here's your link, 10% off today only.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> See the context arrive</p>
              <h2 className="section-title">The ad they clicked walks into the conversation with them.</h2>
              <p className="section-sub">No "what are you looking for?" No re-explaining. The agent opens already knowing the ad or post, and answers the actual question first.</p>
            </div>
            <div className="sig-mg-diagram reveal">
              <div className="sig-mg-ad">
                <p className="sig-mg-ad-label">Ad &middot; Send Message</p>
                <div className="sig-mg-ad-media"><img src="/images/product-mandarin-shirt.jpg" alt="Linen Shirt Collection ad" className="sig-mg-ad-img" /></div>
                <div className="sig-mg-ad-body">
                  <p className="sig-mg-ad-title">Linen Shirt Collection</p>
                  <p className="sig-mg-ad-sub">nyra.store &middot; Sponsored</p>
                  <span className="sig-mg-ad-cta">Send Message</span>
                </div>
              </div>
              <svg className="sig-mg-connector" viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true">
                <path d="M50,2 V58" />
                <path d="M40,48 L50,60 L60,48" />
              </svg>
              <div className="sig-mg-convo">
                <p className="sig-mg-convo-ref">From ad &middot; Linen Shirt Collection</p>
                <div className="sig-mg-bubble in">Hi! Is this still available?</div>
                <div className="sig-mg-bubble out">Yes &mdash; the Linen Shirt Collection is back in stock. Want to see sizes?</div>
                <div className="sig-mg-bubble in">Yes, size M</div>
                <div className="sig-mg-bubble out">Size M is available &mdash; here's your link, 10% off today only.</div>
                <span className="sig-mg-pill sig-mg-pill--handled">Handled instantly</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="spread reverse reveal">
              <div>
                <div className="spread-index">04 / Built on the real thing</div>
                <h3>It connects to your Facebook Page — it doesn't replace it.</h3>
                <p>You keep your existing Page, your existing team inbox, and your existing ad account. StepsAI plugs into the official Messenger Platform API, so nothing about how customers already find you changes.</p>
              </div>
              <div className="setup-visual">
                <div className="setup-integ-row"><span>Facebook Page</span><span className="state">Connected</span></div>
                <div className="setup-integ-row"><span>Page inbox</span><span className="state">Connected</span></div>
                <div className="setup-integ-row"><span>Click-to-Messenger ads</span><span className="state">Connected</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Questions</p>
              <h2 className="section-title">About the Messenger channel.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {MESSENGER_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
                {MESSENGER_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="container reveal" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Someone's messaging your Page right now.</h2>
            <p className="final-cta-sub">Same afternoon setup. Works with your existing Facebook Page.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
