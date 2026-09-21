import { useEffect, useRef, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-instagram.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { InstagramMockup } from '../components/PhoneMockup';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const INSTAGRAM_FAQS = [
  { q: 'Does it work on comments AND DMs?', a: 'Yes — it watches post comments, Story replies, and direct messages, and moves the conversation to DM whenever it turns into a real question.' },
  { q: 'Can it detect spam comments?', a: 'Yes — generic spam and bot comments are filtered out automatically, so it only engages with real customers.' },
  { q: 'Do I need an Instagram Business account?', a: 'Yes — Instagram requires a Business or Creator account connected to a Facebook Page for the API access this uses.' },
  { q: 'Will replies sound like me?', a: 'You set the tone and voice once — casual, playful, formal — and it stays consistent across every comment and DM.' },
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

/** Ported 1:1 from channel-instagram.html's <main>. */
export function ChannelInstagram() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();

  // The whole brand-colour token set in channel-premium.css keys off
  // body[data-brand]; in the static site it came from <body data-brand="instagram">.
  useEffect(() => {
    document.body.dataset.brand = 'instagram';
    return () => {
      delete document.body.dataset.brand;
    };
  }, []);

  return (
    <Layout title="Instagram — StepsAI | Turn a comment into a customer." description="A public comment on your post becomes a private conversation automatically — no chatbot can do this, because it isn't a chat at all until the agent makes it one.">
      <Breadcrumb section="Channels" sectionHref="channels.html" label="Instagram Channel" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Instagram</span>
              <h1 className="vertical-headline">Turn a comment into a customer.</h1>
              <p className="vertical-tagline">A public comment on your post becomes a private conversation automatically — no chatbot can do this, because it isn't a chat at all until the agent makes it one.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="agents.html#channels" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All channels
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="mock-annotation"><span className="ig-mock-avatar">N</span><p><strong>aarav.k</strong> commented "is this available in size M?" &mdash; moved to DM automatically:</p></div>
              <InstagramMockup handle="nyra.store" status="Active now">
                <div className="ig-real-bubble in">Is this available in size M?</div>
                <div className="ig-real-bubble out">Let me check stock for you.</div>
                <div className="chat-card">
                  <div className="chat-card-media"><img src="/images/product-mandarin-shirt.jpg" alt="Nyra Rib Jacket" className="chat-card-img" /></div>
                  <div className="chat-card-body">
                    <p className="chat-card-title">Aria Linen Shirt</p>
                    <p className="chat-card-sub">Size M &middot; 4 in stock</p>
                    <p className="chat-card-price">&#8377;1,799</p>
                    <a href="#" className="chat-card-cta">Hold this item</a>
                  </div>
                </div>
                <div className="ig-real-bubble in">Perfect, hold one and I'll pay now</div>
                <div className="ig-real-bubble out">Held for 20 minutes &mdash; here's your payment link, size M already selected.</div>
              </InstagramMockup>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="spread reveal">
              <div>
                <div className="spread-index">02 / Two surfaces, one agent</div>
                <h3>Comments and DMs — it watches both.</h3>
                <p>A public comment is answered in a way that protects your brand, then quietly continued in DM the moment it turns into a real question about price, size, or availability.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">N</span><div><div className="lw-name">Agent</div><div className="lw-status">Nyra Store · Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">Loved this post 😍 how much is it?</div>
                    <div className="lw-bubble agent">Thank you! Sent you the price and sizes in DM.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Comment to conversion</p>
              <h2 className="section-title">A comment becomes a DM becomes a sale.</h2>
              <p className="section-sub">The moment a comment turns into a real question about price or size, the agent moves it to DM, holds the item, and sends the payment link &mdash; before the customer thinks to leave the post.</p>
            </div>
            <div className="sig-ig-diagram reveal">
              <div className="sig-ig-post">
                <div className="sig-ig-post-head">
                  <span className="sig-ig-post-avatar">N</span>
                  <span className="sig-ig-post-user">nyra.store</span>
                  <span className="sig-ig-post-more" aria-hidden="true">&#8226;&#8226;&#8226;</span>
                </div>
                <div className="sig-ig-post-media"><img src="/images/product-mandarin-shirt.jpg" alt="Aria Linen Shirt post" className="sig-ig-post-img" /></div>
                <div className="sig-ig-post-actions">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </div>
                <p className="sig-ig-post-caption"><strong>nyra.store</strong> New arrivals just dropped &#127807;</p>
                <div className="sig-ig-post-comment">
                  <span className="sig-ig-comment-avatar">A</span>
                  <p className="sig-ig-comment-body"><strong>aarav.k</strong> is this available in size M? how much?</p>
                </div>
              </div>
              <svg className="sig-ig-connector" viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true">
                <path d="M50,2 V58" />
                <path d="M40,48 L50,60 L60,48" />
              </svg>
              <div className="sig-ig-dm">
                <p className="sig-ig-dm-label">Moved to DM &middot; automatically</p>
                <div className="sig-ig-bubble in">Is this available in size M? how much?</div>
                <div className="sig-ig-bubble out">Yes &mdash; &#8377;1,799, 4 left in size M. Want me to hold one?</div>
                <div className="sig-ig-bubble in">Yes, hold it and send the payment link</div>
                <div className="sig-ig-bubble out">Held for 20 minutes. Payment link sent, size M already selected.</div>
                <span className="sig-ig-pill sig-ig-pill--sale">Order placed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="spread reverse reveal">
              <div>
                <div className="spread-index">04 / Stories count too</div>
                <h3>A Story reply is a lead the same way a comment is.</h3>
                <p>Same detection, same conversion into a private conversation — whoever replies to your Story gets the same instant, on-brand response.</p>
              </div>
              <div className="ig-mock">
                <div className="ig-mock-dm" style={{ paddingTop: '18px' }}>
                  <div className="ig-mock-dm-label">Story reply · Today 6:02 PM</div>
                  <div className="wa-mock-bubble in">omg need this in my life</div>
                  <div className="wa-mock-bubble out">Haha, it's ₹1,799 — want me to send the link?</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">05</span> Questions</p>
              <h2 className="section-title">About the Instagram channel.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {INSTAGRAM_FAQS.slice(0, 2).map((item, i) => (
                  <PlusFaqItem key={item.q} question={item.q} answer={item.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
                ))}
              </div>
              <div>
                {INSTAGRAM_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Your next customer just left a comment.</h2>
            <p className="final-cta-sub">Same afternoon setup. Watches comments, Stories, and DMs.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
