import { useState, type CSSProperties } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import '../styles/pages/channel-premium.css';
import '../styles/pages/channel-premium-bold.css';
import '../styles/pages/signature-meetings.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useChannelPremium } from '../hooks/useChannelPremium';

const MEETINGS_FAQS = [
  { q: 'Which calendar tools does it connect to?', a: 'Calendly out of the box, with more calendar integrations available — it only ever offers slots that are genuinely free.' },
  { q: 'Can customers reschedule themselves?', a: 'Yes — right inside the same conversation, no separate rescheduling link needed.' },
  { q: 'Does it handle timezones?', a: "Yes — it works off your calendar's configured timezone and confirms the time clearly to avoid confusion." },
  { q: 'What if two people want the same slot?', a: "Whoever books first gets it — the calendar updates instantly, so the next person only ever sees what's actually still open." },
];

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 18 9-18 9 4-9-4-9Z" /></svg>
);

/** Ported 1:1 from meetings-agent.html's <main>. */
export function MeetingsAgent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useChannelPremium();
  return (
    <Layout
      title="Meetings Agent — StepsAI | Real slots. Real bookings. No back-and-forth."
      description="Offers your actual open calendar slots and confirms the time — right inside the conversation, with reminders handled automatically."
    >
      <Breadcrumb section="Product" sectionHref="agents.html" label="Meeting Booking" />

      <main id="top">
        <section className="vertical-hero">
          <div className="container vertical-hero-inner">
            <div className="reveal">
              <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">01</span>Meetings Agent</span>
              <h1 className="vertical-headline">Real slots. Real bookings. No back-and-forth.</h1>
              <p className="vertical-tagline">Offers your actual open calendar slots and confirms the time — right inside the conversation, with reminders handled automatically.</p>
              <div className="vertical-hero-actions">
                <a href="pricing.html" className="btn btn-accent btn-lg">Start free trial</a>
                <a href="agents.html#four-agents" className="vertical-hero-link">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  All four agents
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="live-widget">
                <div className="lw-head">
                  <span className="lw-avatar">K</span>
                  <div><div className="lw-name">Agent</div><div className="lw-status">Keystone Realty · Active</div></div>
                </div>
                <div className="lw-body">
                  <div className="lw-bubble user">Can I see the 3BHK this weekend?</div>
                  <div className="lw-bubble agent">Here's what's open:</div>
                  <div className="chat-card">
                    <p className="chat-card-slot-label">Site visit &middot; 3BHK</p>
                    <div className="chat-card-slots">
                      <span className="chat-card-slot">Sat, 11:00 AM</span>
                      <span className="chat-card-slot">Sun, 3:00 PM</span>
                    </div>
                  </div>
                  <div className="lw-bubble user">Saturday 11am</div>
                  <div className="lw-bubble agent">Booked — you'll get a reminder the day before, and I'll send the exact address that morning.</div>
                </div>
                <div className="lw-footer">
                  <div className="lw-input">Ask me anything</div>
                  <span className="lw-send"><SendIcon /></span>
                </div>
                <div className="lw-powered">Powered by <b>StepsAI</b></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tl atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--br atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-left">
              <p className="kicker"><span className="n">02</span> What it does</p>
              <h2 className="section-title">Booking that ends in a confirmed time, not a "let me check."</h2>
              <p className="section-sub">It offers your real open slots and confirms the time — the customer never leaves the chat to do it.</p>
            </div>

            <div className="spread reveal-left">
              <div>
                <div className="spread-index">01 / Real availability</div>
                <h3>It checks your actual calendar, live.</h3>
                <p>Connected to Calendly or your calendar of choice, it only offers slots that are genuinely open — never a double-booking, never a slot that's already gone.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">K</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">Any slots tomorrow morning?</div>
                    <div className="lw-bubble agent">Here's what's open:</div>
                    <div className="chat-card">
                      <p className="chat-card-slot-label">Tomorrow morning</p>
                      <div className="chat-card-slots">
                        <span className="chat-card-slot">9:30 AM</span>
                        <span className="chat-card-slot">10:45 AM</span>
                      </div>
                    </div>
                    <div className="lw-bubble user">10:45 works</div>
                    <div className="lw-bubble agent">Booked for 10:45am tomorrow &mdash; calendar invite on its way.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spread reverse reveal-right">
              <div>
                <div className="spread-index">02 / Confirms and reminds</div>
                <h3>Confirmations and reminders happen automatically.</h3>
                <p>Once booked, a reminder goes out 24 hours before — handled by Workflows, so no-shows drop without anyone on your team lifting a finger.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">K</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble agent">Reminder: your visit is tomorrow at 11am. Reply to reschedule.</div>
                    <div className="lw-bubble user">See you then!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spread reveal-left">
              <div>
                <div className="spread-index">03 / Reschedules cleanly</div>
                <h3>Plans change — it handles that too.</h3>
                <p>If a customer needs a new time, it offers the next real openings and updates the booking, without needing anyone on your team to step in.</p>
              </div>
              <div className="spread-visual">
                <div className="live-widget">
                  <div className="lw-head"><span className="lw-avatar">K</span><div><div className="lw-name">Agent</div><div className="lw-status">Active</div></div></div>
                  <div className="lw-body">
                    <div className="lw-bubble user">Can we move it to Sunday?</div>
                    <div className="lw-bubble agent">Here's what's open Sunday:</div>
                    <div className="chat-card">
                      <p className="chat-card-slot-label">Reschedule</p>
                      <div className="chat-card-slots">
                        <span className="chat-card-slot">2:00 PM</span>
                        <span className="chat-card-slot">4:00 PM</span>
                      </div>
                    </div>
                    <div className="lw-bubble user">4pm please</div>
                    <div className="lw-bubble agent">Moved to Sunday, 4pm &mdash; your confirmation is updated.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> The calendar responds as you talk</p>
              <h2 className="section-title">The conversation and the calendar are the same event.</h2>
              <p className="section-sub">There's no separate booking form. The moment a time is picked in chat, it's the slot that shows booked on the calendar.</p>
            </div>

            <div className="sig-meet-layout">
              <div className="sig-meet-convo">
                <div className="sig-meet-convo-head">Booking conversation</div>
                <div className="sig-meet-thread reveal reveal-stagger">
                  <div className="sig-meet-bubble in" style={{ '--i': 0 } as CSSProperties}>Can I see the 3BHK this weekend?</div>
                  <div className="sig-meet-bubble out" style={{ '--i': 1 } as CSSProperties}>Here's what's open &mdash; Saturday 11 AM or Sunday 3 PM.</div>
                  <div className="sig-meet-bubble in" style={{ '--i': 2 } as CSSProperties}>Saturday 11am works for me</div>
                  <div className="sig-meet-bubble out sig-meet-bubble--confirm" style={{ '--i': 3 } as CSSProperties}>Booked for Saturday, 11:00 AM. You'll get a reminder the day before.</div>
                </div>
              </div>

              <div className="sig-meet-calendar">
                <div className="sig-meet-calendar-head">Keystone Realty &middot; This week</div>
                <div className="sig-meet-grid reveal reveal-stagger">
                  <div className="sig-meet-day" style={{ '--i': 0 } as CSSProperties}>
                    <span className="sig-meet-day-label">Thu</span>
                    <span className="sig-meet-day-empty">No slots</span>
                  </div>
                  <div className="sig-meet-day" style={{ '--i': 1 } as CSSProperties}>
                    <span className="sig-meet-day-label">Fri</span>
                    <span className="sig-meet-day-empty">No slots</span>
                  </div>
                  <div className="sig-meet-day sig-meet-day--active" style={{ '--i': 2 } as CSSProperties}>
                    <span className="sig-meet-day-label">Sat</span>
                    <span className="sig-meet-slot sig-meet-slot--booked">11:00 AM &middot; Booked</span>
                  </div>
                  <div className="sig-meet-day" style={{ '--i': 3 } as CSSProperties}>
                    <span className="sig-meet-day-label">Sun</span>
                    <span className="sig-meet-slot">3:00 PM &middot; Open</span>
                  </div>
                </div>
                <div className="sig-meet-confirmed reveal">
                  <span className="sig-meet-status sig-meet-status--booked">Meeting booked</span>
                  <div className="sig-meet-confirmed-detail">Site visit &middot; 3BHK &middot; Sat, 11:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container">
            <div className="integ-band">
              <div className="reveal-right">
                <p className="kicker"><span className="n">04</span> Built to work with</p>
                <h2 className="section-title">Books into the calendar you already use.</h2>
                <p className="section-sub">No separate booking tool to manage — it reads real availability and writes the confirmed slot back.</p>
              </div>
              <div className="integ-logos reveal-stagger">
                <div className="integ-logo-row" style={{ '--i': 0 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /><path d="m9 15 2 2 4-4" /></svg><div className="integ-logo-row-text"><div className="t1">Google Calendar</div><div className="t2">Two-way sync — new bookings appear instantly, no double-booking</div></div><span className="integ-logo-row-badge">Connect</span></div>
                <div className="integ-logo-row" style={{ '--i': 1 } as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg><div className="integ-logo-row-text"><div className="t1">Calendly</div><div className="t2">Real slot booking, not just availability talk</div></div><span className="integ-logo-row-badge">Connect</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tr atmo-blob--soft"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--bl atmo-blob--soft"></div>
          </div>
          <div className="container">
            <div className="section-head reveal-grow">
              <p className="kicker"><span className="n">05</span> FAQ</p>
              <h2 className="section-title">Questions about the Meetings Agent.</h2>
            </div>
            <div className="faq-grid reveal">
              <div style={{ '--i': 0 } as CSSProperties}>
                {MEETINGS_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)}>
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div style={{ '--i': 1 } as CSSProperties}>
                {MEETINGS_FAQS.slice(2, 4).map((item, i) => {
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
          <div className="container reveal-pop" style={{ textAlign: 'center' }}>
            <h2 className="final-cta-headline">Your next booking doesn't need a back-and-forth.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Start booking real slots tonight.</p>
            <a href="pricing.html" className="btn btn-cta btn-lg">Start free trial</a>
            <p className="final-cta-note">No credit card. Cancel any time.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
