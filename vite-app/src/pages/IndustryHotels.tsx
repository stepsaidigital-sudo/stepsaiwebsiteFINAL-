import { useEffect, useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const HOTELS_FAQS = [
  {
    q: 'Does this replace our booking engine, or just the OTAs?',
    a: 'Neither. It sits on WhatsApp and your website, answers the room and rate questions guests already ask, and points them to your own booking link instead of a search page full of competitors.',
  },
  {
    q: 'Does it keep messaging guests after they check in?',
    a: 'Yes. It handles housekeeping, towel, and maintenance requests, answers concierge questions about the pool or restaurant, and opens a ticket for your team when a guest needs a person.',
  },
  {
    q: "Will it push upsells guests don't want?",
    a: "It only offers what fits the stay, like a room upgrade when a suite is free or airport pickup once a booking is confirmed. You decide which upgrades it's allowed to offer and at what price.",
  },
  {
    q: 'Can it handle check-in and checkout questions on its own?',
    a: "Most of them. It answers arrival time, deposit, ID, and late-checkout questions directly, and hands off to your front desk the moment a guest asks something it isn't sure about.",
  },
];

const ROW_SEARCH_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><path d="M21 21L15 15" /></svg>
);
const ROW_CALENDAR_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg>
);
const ROW_STAR_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg>
);
const ROW_CHECK_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg>
);
const ROW_WIFI_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8.5C7 3.8 17 3.8 22 8.5" /><path d="M5.5 12C9 9 15 9 18.5 12" /><path d="M9 15.5C10.5 14.3 13.5 14.3 15 15.5" /><circle cx="12" cy="19" r="1" /></svg>
);
const ROW_FOOD_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 2v6a2 2 0 0 0 2 2v12M7 2v4M11 2v4M7 6h4" /><path d="M17 2c-2.5 2-2.5 6-2.5 9 0 2 1 3 2.5 3v8" /></svg>
);
const ROW_CART_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" /><path d="M3 4H5L7.5 15H18L20 7H6" /></svg>
);
const ROW_HANDOFF_ICON = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg>
);

/** Ported 1:1 from industry-hotels.html's <main>. */
export function IndustryHotels() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useCapabilityShowcase();

  // industry-hotels.html sets these per-industry accent vars on <body>.
  useEffect(() => {
    const { body } = document;
    body.style.setProperty('--ind-accent', '#C2790F');
    body.style.setProperty('--ind-tint', '#FBF0DD');
    return () => {
      body.style.removeProperty('--ind-accent');
      body.style.removeProperty('--ind-tint');
    };
  }, []);

  return (
    <Layout
      title="Hotels &amp; Hospitality — StepsAI | Win more direct bookings"
      description="StepsAI for hotels: room discovery, direct booking, AI concierge, in-stay service requests, and upselling, across the whole guest journey."
    >
      <Breadcrumb section="Industries" sectionHref="industries.html" label="Travel &amp; Hospitality" />

      <main id="top">
        <section className="vertical-hero" style={{ backgroundImage: "url('/images/hero-hotels.jpg')" }}>
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">4</span>Hotels &amp; Hospitality</span>
            <h1 className="vertical-headline">Answer the midnight message. Handle the whole stay.</h1>
            <p className="vertical-tagline">A guest messages at midnight asking about late check-in. If nobody answers, they book through an OTA instead and the hotel pays the commission. This answers, books, and keeps the guest talking to you directly.</p>
            <div className="vertical-hero-actions">
              <a href="pricing.html" className="btn-ind">Start free trial</a>
              <a href="industries.html" className="vertical-hero-link">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                All industries
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL SCENARIO — what a real WhatsApp conversation looks like
             ============================================================ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--violet atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="spread reveal">
              <div>
                <div className="spread-index">Real scenario</div>
                <h3>What this actually looks like on WhatsApp.</h3>
                <p>Not a script — this is the midnight message that would otherwise become an OTA booking instead of a direct one.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Sundowner Resort" status="online">
                  <div className="wa-real-bubble in">Do you have a sea-view room for this weekend? Also, is late check-in past midnight okay?<span className="wa-real-time">12:04 AM</span></div>
                  <div className="wa-real-bubble out">Yes to both &mdash; late check-in is no problem. Here's what's available:<span className="wa-real-time">12:04 AM<ChatTick /></span></div>
                  <div className="chat-card">
                    <div className="chat-card-media"><img src="/images/hero-hotels.jpg" alt="Sea View Room" className="chat-card-img" /></div>
                    <div className="chat-card-body">
                      <p className="chat-card-title">Sea View Room</p>
                      <p className="chat-card-sub">Sat&ndash;Sun (1 night) &middot; 2 rooms left</p>
                      <p className="chat-card-price">&#8377;6,500<span>/night</span></p>
                      <a href="#" className="chat-card-cta">Hold this room</a>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Perfect, hold one for me<span className="wa-real-time">12:05 AM</span></div>
                  <div className="wa-real-bubble out">Held for 30 minutes &mdash; here's the payment link to confirm. Want breakfast or airport pickup added?<span className="wa-real-time">12:05 AM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Airport pickup would be great<span className="wa-real-time">12:06 AM</span></div>
                  <div className="wa-real-bubble out">Added &mdash; &#8377;800, and our driver will message you the morning of with the car number.<span className="wa-real-time">12:06 AM<ChatTick /></span></div>
                </WhatsAppMockup>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--base pain-use-section section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="pain-use-grid reveal reveal-stagger">

              <div className="usecase-feed">
                <div className="capability-showcase" data-visual-bg="/images/hero-hotels.jpg">
                  <div className="capability-visual"></div>
                  <div className="capability-list">
                    <h3 className="usecase-group-title">Discover &amp; book</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="search"><span className="usecase-row-num">{ROW_SEARCH_ICON}</span><div><h4 className="usecase-row-title">Room discovery</h4><p className="usecase-row-desc">Recommends rooms by dates, guest count, budget, view, and preferences, and compares room types and inclusions.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num">{ROW_CALENDAR_ICON}</span><div><h4 className="usecase-row-title">Direct booking assistance</h4><p className="usecase-row-desc">Checks availability and live rates, and helps guests complete direct bookings to reduce OTA dependence.</p></div></div>
                      <div className="usecase-row" data-cat="calendar"><span className="usecase-row-num">{ROW_CALENDAR_ICON}</span><div><h4 className="usecase-row-title">Booking Q&amp;A</h4><p className="usecase-row-desc">Answers check-in, checkout, deposit, tax, cancellation, and extra-bed questions, and shares booking and payment links.</p></div></div>
                      <div className="usecase-row" data-cat="star"><span className="usecase-row-num">{ROW_STAR_ICON}</span><div><h4 className="usecase-row-title">Lead capture</h4><p className="usecase-row-desc">Captures enquiries for rooms, weddings, events, corporate stays, and groups, and sends full context to reservations or sales.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">Group and event enquiries</h4><p className="usecase-row-desc">Captures event date, guest count, rooms, venue needs, and budget, and books a meeting with the events team.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Arrive &amp; stay</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">Pre-arrival communication</h4><p className="usecase-row-desc">Confirms dates, arrival time, guest count, and special requests, and offers airport transfers and upgrades.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">Digital check-in</h4><p className="usecase-row-desc">Collects registration information and permitted documents before arrival.</p></div></div>
                      <div className="usecase-row" data-cat="wifi"><span className="usecase-row-num">{ROW_WIFI_ICON}</span><div><h4 className="usecase-row-title">AI hotel concierge</h4><p className="usecase-row-desc">Answers questions about restaurants, spa, pool, gym, breakfast, transport, and local attractions.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">In-stay service requests</h4><p className="usecase-row-desc">Handles housekeeping, towels, toiletries, laundry, and maintenance requests, and creates internal service tickets.</p></div></div>
                      <div className="usecase-row" data-cat="food"><span className="usecase-row-num">{ROW_FOOD_ICON}</span><div><h4 className="usecase-row-title">Room service and dining</h4><p className="usecase-row-desc">Displays menus, takes requests, reserves tables, and answers approved allergen questions.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">Upselling</h4><p className="usecase-row-desc">Offers upgrades, breakfast, spa, dining, transfers, early check-in, and late checkout.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">Local area guide</h4><p className="usecase-row-desc">Recommends attractions, dining, shopping, and entertainment, with distance, travel time, and directions.</p></div></div>
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">WhatsApp guest communication</h4><p className="usecase-row-desc">Sends confirmations, instructions, service updates, and in-stay support.</p></div></div>
                    </div>
                    <h3 className="usecase-group-title">Resolve &amp; return</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="check"><span className="usecase-row-num">{ROW_CHECK_ICON}</span><div><h4 className="usecase-row-title">Complaint management</h4><p className="usecase-row-desc">Captures complaints, creates priority tickets, accepts image uploads, and escalates unresolved issues to staff.</p></div></div>
                      <div className="usecase-row" data-cat="cart"><span className="usecase-row-num">{ROW_CART_ICON}</span><div><h4 className="usecase-row-title">Checkout and post-stay</h4><p className="usecase-row-desc">Explains checkout, invoices, and luggage storage, and collects feedback and encourages repeat bookings.</p></div></div>
                      <div className="usecase-row" data-cat="handoff"><span className="usecase-row-num">{ROW_HANDOFF_ICON}</span><div><h4 className="usecase-row-title">Human handoff</h4><p className="usecase-row-desc">Transfers booking, complaint, or special-request conversations with full context.</p></div></div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things costing you direct bookings every single day.</p>
                <ul className="pain-list">
                  <li>Hotels miss direct booking enquiries outside working hours.</li>
                  <li>Front-desk teams answer repetitive guest questions.</li>
                  <li>Upsell opportunities are missed before and during stays.</li>
                  <li>Guest requests are scattered across calls, WhatsApp, and email.</li>
                  <li>International guests face language barriers.</li>
                  <li>Negative experiences are identified too late.</li>
                </ul>
              </aside>

            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Where to start</p>
              <h2 className="section-title">If you can only start with one thing</h2>
              <p className="section-sub">In priority order, based on what protects revenue fastest.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Room discovery and direct booking</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Booking Q&amp;A</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Pre-arrival WhatsApp</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">AI concierge</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Guest requests</span></div>
              <div className="priority-row"><span className="priority-row-num">06</span><span className="priority-row-label">Upselling</span></div>
              <div className="priority-row"><span className="priority-row-num">07</span><span className="priority-row-label">Group enquiries</span></div>
              <div className="priority-row"><span className="priority-row-num">08</span><span className="priority-row-label">Complaint handoff</span></div>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL AUTOMATION — the actual pre-arrival / upsell workflow
             ============================================================ */}
        <section className="wf-section">
          <div className="container">
            <div className="section-head center reveal">
              <h2 className="section-title">What automation looks like, live.</h2>
              <p className="section-sub">This is the exact logic behind the "Upsell Offer" template — one of many. There's no limit to what you can automate once you're connected.</p>
            </div>

            <div className="wf-canvas-wrap reveal">
              <div className="wf-canvas">
                <div className="wf-live-tag">Live example — Booking confirmed → pre-arrival</div>

                <div className="wf-trunk">
                  <div className="wf-node" data-wf-step="1">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg></span>
                    <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">Booking confirmed</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="2"></div>
                  <div className="wf-node" data-wf-step="2">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                    <div><div className="wf-node-kind">Action · Wait</div><div className="wf-node-title">Wait until 48h before arrival</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="3"></div>
                  <div className="wf-node" data-wf-step="3">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                    <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check room + rate tier</div></div>
                  </div>
                </div>

                <div className="wf-fork">
                  <div className="wf-fork-stub" data-wf-step="4"></div>
                  <div className="wf-fork-bar"></div>
                  <div className="wf-fork-row">
                    <div className="wf-branch">
                      <div className="wf-branch-stub"></div>
                      <span className="wf-badge completed">SUITE / TOP TIER</span>
                      <div className="wf-node dim">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Arrival instructions only</div></div>
                      </div>
                    </div>
                    <div className="wf-branch">
                      <div className="wf-branch-stub" data-wf-step="4"></div>
                      <span className="wf-badge abandoned">STANDARD ROOM</span>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                        <div><div className="wf-node-kind">Condition</div><div className="wf-node-title">Upgrade inventory available?</div></div>
                      </div>

                      <div className="wf-fork">
                        <div className="wf-fork-stub" data-wf-step="5"></div>
                        <div className="wf-fork-bar"></div>
                        <div className="wf-fork-row">
                          <div className="wf-branch">
                            <div className="wf-branch-stub"></div>
                            <span className="wf-badge no">NO</span>
                            <div className="wf-node dim">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Arrival instructions only</div></div>
                            </div>
                          </div>
                          <div className="wf-branch">
                            <div className="wf-branch-stub" data-wf-step="5"></div>
                            <span className="wf-badge yes">YES</span>
                            <div className="wf-node" data-wf-step="5">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Room upgrade offer</div></div>
                            </div>
                            <div className="wf-line" data-wf-step="6"></div>
                            <div className="wf-node" data-wf-step="6">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Arrival instructions sent</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wf-legend reveal">
              <span className="wf-legend-item"><span className="wf-legend-dot" style={{ background: 'var(--accent-on-dark)' }}></span>This conversation's path</span>
              <span className="wf-legend-item"><span className="wf-legend-dot" style={{ background: 'rgba(255,255,255,.2)' }}></span>Alternate branch, ready either way</span>
            </div>

            <div className="template-row reveal">
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Booking Confirmation</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Pre-Arrival Instructions</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Upsell Offer</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Post-Stay Review Request</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Cancellation Win-Back</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Special Occasion Offer</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Loyalty Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Hospitality</div><div className="tp-name">Check-in Reminder</div><div className="tp-steps">2 steps</div></div>
            </div>
          </div>
        </section>

        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--rose atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> The full guest journey</p>
              <h2 className="section-title">What the guest journey looks like end to end</h2>
              <p className="section-sub">Three workflows built specifically for how guests behave, before and during a stay.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9.5H20M8 3V6M16 3V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                <div><p className="workflow-strip-title">Booking</p><p className="workflow-strip-desc">Confirms reservation details, answers policy questions, collects arrival information, and offers useful upgrades.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 11L12 4L20 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10V20H18V10" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Pre-arrival</p><p className="workflow-strip-desc">Shares check-in instructions, directions, transfer options, and special-request confirmation.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3C14.5 5.5 15.8 8.6 15.8 12C15.8 15.4 14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12C8.2 8.6 9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12H21" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">In-stay</p><p className="workflow-strip-desc">Handles guest requests, creates service tickets, sends updates, and escalates complaints.</p></div>
              </div>
            </div>

            <div className="ind-crosslink">
              <p>Every industry runs on the same ten platform capabilities, tracked the same way.</p>
              <a href="capabilities.html">See the platform capabilities <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--teal atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Questions</p>
              <h2 className="section-title">About the hotels and hospitality agent.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {HOTELS_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chev">
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {HOTELS_FAQS.slice(2, 4).map((item, i) => {
                  const idx = i + 2;
                  return (
                    <FaqItem key={item.q} question={item.q} isOpen={openFaq === idx} onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} chevronClassName="faq-chev">
                      <p>{item.a}</p>
                    </FaqItem>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">A guest is deciding between you and an OTA right now.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Win the direct booking tonight.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
