import { useEffect, useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';

const CHANNELS_FAQS = [
  { q: 'Which channel should we start with?', a: 'Whichever one your customers already use most. Most businesses start with Website or WhatsApp, then add the rest once the first one is proving itself.' },
  { q: 'Do we need a separate setup for each channel?', a: "No. It's trained once, on your business. Adding a channel is connecting a new surface to the same agent, not building a second one." },
  { q: "Does a customer's history carry over between channels?", a: "Yes. If they message on WhatsApp after asking something on your website, the agent already has the context — it's the same memory either way." },
  { q: 'Can we turn a channel off later?', a: 'Yes, any time, without affecting the others. Each one is a connection you can add or remove, not a separate commitment.' },
];

/**
 * Ports industries.js's initScrollStack, which useIndustryPageBehavior
 * does not cover — the scale/rotate/dissolve cross-fade as each sticky
 * .scroll-stack-card is overtaken by the next one.
 */
function useScrollStack() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.scroll-stack-card'));
    if (!cards.length) return;

    function handleScroll() {
      requestAnimationFrame(() => {
        const stickyTop = window.innerHeight * 0.15; // Matches top: 15vh in CSS

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();

          if (rect.top <= stickyTop + 1) {
            if (index < cards.length - 1) {
              const nextRect = cards[index + 1].getBoundingClientRect();
              const distance = nextRect.top - rect.top;
              const maxDistance = rect.height + 40; // Card height + margin-bottom
              const progress = Math.max(0, Math.min(1, 1 - distance / maxDistance));

              if (progress > 0) {
                const scale = 1 - progress * 0.05;
                const rotate = (index % 2 === 0 ? -1 : 1) * (progress * 2);
                card.style.transform = `scale(${scale}) rotateZ(${rotate}deg)`;
                card.style.opacity = (1 - progress * 0.5).toString();
              } else {
                card.style.transform = 'none';
                card.style.opacity = '1';
              }
            }
          } else {
            card.style.transform = 'none';
            card.style.opacity = '1';
          }
        });
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
}

/** Ported 1:1 from channels.html's <main>. */
export function Channels() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useScrollStack();

  return (
    <Layout
      title="Channels — StepsAI | Every surface, one agent"
      description="Website, WhatsApp, Instagram, Messenger, and a shareable Standalone Page — the same agent, the same memory, wherever your customers already are."
    >
      <Breadcrumb section="Channels" sectionHref={null} label="All Channels" />

      <main id="top">
        <section className="vertical-hero" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: '760px' }}>
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Channels</span>
              <h1 className="vertical-headline" style={{ fontSize: 'clamp(32px,4.4vw,50px)' }}>Every surface, one agent.</h1>
              <p className="vertical-tagline">Same brain, same memory, same answer &mdash; whether they message you on WhatsApp, land on your website, or click an ad into Messenger.</p>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo" style={{ paddingTop: 0 }}>
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--amber atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="scroll-stack-container reveal reveal-stagger" id="scroll-stack">

              <a className="scroll-stack-card" href="channel-website.html" style={{ '--i': 0 } as CSSProperties}>
                <span className="industry-hub-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12H21M12 3C14.5 5.5 15.8 8.6 15.8 12C15.8 15.4 14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12C8.2 8.6 9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <h3>Website</h3>
                <p>Answer before they leave the page.</p>
                <span className="industry-hub-card-arrow">See how it works <svg viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </a>

              <a className="scroll-stack-card" href="channel-whatsapp.html" style={{ '--i': 1 } as CSSProperties}>
                <span className="industry-hub-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M17.472 14.383c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></span>
                <h3>WhatsApp</h3>
                <p>Sell where they already message you.</p>
                <span className="industry-hub-card-arrow">See how it works <svg viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </a>

              <a className="scroll-stack-card" href="channel-instagram.html" style={{ '--i': 2 } as CSSProperties}>
                <span className="industry-hub-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg></span>
                <h3>Instagram</h3>
                <p>Turn a comment into a customer.</p>
                <span className="industry-hub-card-arrow">See how it works <svg viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </a>

              <a className="scroll-stack-card" href="channel-messenger.html" style={{ '--i': 3 } as CSSProperties}>
                <span className="industry-hub-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.02 2 11c0 2.84 1.44 5.38 3.7 7.03V22l3.4-1.87c.9.25 1.87.38 2.9.38 5.52 0 10-4.02 10-9S17.52 2 12 2Z" /><path d="M7 12.5L10.5 9L13 11.5L17 8" /></svg></span>
                <h3>Messenger</h3>
                <p>Ad clicks and Page DMs, already in context.</p>
                <span className="industry-hub-card-arrow">See how it works <svg viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </a>

              <a className="scroll-stack-card" href="channel-standalone.html" style={{ '--i': 4 } as CSSProperties}>
                <span className="industry-hub-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M14 4H20V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 4L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                <h3>Agent Page</h3>
                <p>A shareable page for your agent.</p>
                <span className="industry-hub-card-arrow">See how it works <svg viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </a>

            </div>

            <div className="ind-crosslink">
              <p>Every channel shares the same memory of who's already a customer.</p>
              <a href="agents.html">See the platform capabilities <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Questions</p>
              <h2 className="section-title">About channels.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {CHANNELS_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {CHANNELS_FAQS.slice(2, 4).map((item, i) => {
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
            <h2 className="final-cta-headline">Wherever they message you, someone's asking a question right now.</h2>
            <p className="final-cta-sub">Set it up this afternoon. See what it handles tonight.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
