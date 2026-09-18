import { useState } from 'react';
import '../styles/pages/industries-deep.css';
import '../styles/pages/agents.css';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/Breadcrumb';
import { WhatsAppMockup, ChatTick } from '../components/PhoneMockup';
import { FaqItem } from '../components/FaqItem';
import { useIndustryPageBehavior } from '../hooks/useIndustryPageBehavior';
import { useCapabilityShowcase } from '../hooks/useCapabilityShowcase';

const REAL_ESTATE_FAQS = [
  {
    q: 'Can it actually answer questions about a specific property, or does it just send listings?',
    a: 'It answers questions about area, amenities, availability, possession, maintenance, and payment plans, and shares the brochure, floor plan, or price sheet right in the chat when you ask.',
  },
  {
    q: 'Does it handle the actual site-visit booking, or just hand out a phone number?',
    a: 'It shows the open slots, books the visit, and sends confirmation, directions, and a reminder beforehand. Need to reschedule or cancel? It handles that the same way, no calls back and forth.',
  },
  {
    q: "How does it know which enquiries are worth your sales team's time?",
    a: 'It watches for the practical signs of a serious buyer, someone asking about loan options, pricing, or a site visit, and flags that lead for sales right away instead of waiting on a report.',
  },
  {
    q: "What happens once a buyer's ready to negotiate?",
    a: "Your agent hands them to a person on your team, with the budget, preferences, and every property they've viewed already attached. Nobody has to re-ask what the buyer already said.",
  },
];

/** Ported 1:1 from industry-real-estate.html's <main>. */
export function IndustryRealEstate() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useIndustryPageBehavior();
  useCapabilityShowcase();
  return (
    <Layout
      title="Real Estate — StepsAI | Convert enquiries into booked site visits"
      description="StepsAI for real estate: property discovery, Q&A, neighbourhood guides, site-visit booking, and WhatsApp follow-up, in one agent."
    >
      <Breadcrumb section="Industries" sectionHref="industries.html" label="Real Estate" />

      <main id="top">
        {/* ============================================================
             HERO
             ============================================================ */}
        <section className="vertical-hero" style={{ backgroundImage: "url('/images/hero-real-estate.jpg')" }}>
          <div className="container">
            <span className="vertical-hero-eyebrow"><span className="vertical-hero-eyebrow-num">1</span>Real Estate</span>
            <h1 className="vertical-headline">Answer the 11pm enquiry. Book the site visit before they move on.</h1>
            <p className="vertical-tagline">Buyers ask about price, possession, and neighbourhood at 11pm on WhatsApp. Someone has to answer before they move on to the next listing. Here's what that looks like handled by an agent instead of a person.</p>
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
            <div className="atmo-blob atmo-blob--teal atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="spread reveal">
              <div>
                <div className="spread-index">Real scenario</div>
                <h3>What this actually looks like on WhatsApp.</h3>
                <p>Not a script — this is the shape of a real enquiry, answered the moment it arrives, not the next morning.</p>
              </div>
              <div className="spread-visual">
                <WhatsAppMockup name="Keystone Realty" status="online">
                  <div className="wa-real-bubble in">Looking for a 2BHK near the tech park<span className="wa-real-time">11:02 PM</span></div>
                  <div className="wa-real-bubble out">Budget range? I can share matching listings right now.<span className="wa-real-time">11:02 PM<ChatTick /></span></div>
                  <div className="wa-real-bubble in">Around 65 lakhs<span className="wa-real-time">11:03 PM</span></div>
                  <div className="wa-real-bubble out">Found one that fits well:<span className="wa-real-time">11:03 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <div className="chat-card-media"><img src="/images/real-estate-luxury.jpg" alt="Prestige Meridian 2BHK" className="chat-card-img" /></div>
                    <div className="chat-card-body">
                      <p className="chat-card-title">Prestige Meridian &middot; 2BHK</p>
                      <p className="chat-card-sub">0.8km from the tech park</p>
                      <p className="chat-card-price">&#8377;64L</p>
                      <a href="#" className="chat-card-cta">View listing</a>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Can I see it this weekend?<span className="wa-real-time">11:04 PM</span></div>
                  <div className="wa-real-bubble out">Here's what's open for a site visit:<span className="wa-real-time">11:04 PM<ChatTick /></span></div>
                  <div className="chat-card">
                    <p className="chat-card-slot-label">Site visit &middot; Prestige Meridian</p>
                    <div className="chat-card-slots">
                      <span className="chat-card-slot">Sat, 11:00 AM</span>
                      <span className="chat-card-slot">Sat, 4:00 PM</span>
                      <span className="chat-card-slot">Sun, 10:30 AM</span>
                    </div>
                  </div>
                  <div className="wa-real-bubble in">Saturday 4pm<span className="wa-real-time">11:05 PM</span></div>
                  <div className="wa-real-bubble out">Booked &mdash; Saturday, 4pm at Prestige Meridian. I'll send the exact location and the agent's number 30 minutes before.<span className="wa-real-time">11:05 PM<ChatTick /></span></div>
                </WhatsAppMockup>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
             PAIN POINTS + USE CASES (sticky rail + grouped ledger)
             ============================================================ */}
        <section className="section section--base pain-use-section section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--amber atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--blue atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="pain-use-grid reveal reveal-stagger">

              <div className="usecase-feed">
                <div className="capability-showcase" data-visual-bg="/images/hero-real-estate.jpg">
                  <div className="capability-visual"></div>
                  <div className="capability-list">
                    <h3 className="usecase-group-title">Discover &amp; compare</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="search">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><path d="M21 21L15 15" /></svg></span>
                        <div><h4 className="usecase-row-title">Property discovery</h4><p className="usecase-row-desc">Recommends properties by budget, location, size, amenities, and possession date, with property cards showing images, price, and details.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="chat">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.8 8.8 0 0 1-4-1L3 20l1.2-4.2a8.4 8.4 0 0 1-1-4A8.4 8.4 0 0 1 12 3.4h.4a8.5 8.5 0 0 1 8 8v.1Z" /></svg></span>
                        <div><h4 className="usecase-row-title">Property Q&amp;A</h4><p className="usecase-row-desc">Answers questions about area, amenities, availability, possession, maintenance, and payment plans, and shares brochures, floor plans, and price sheets.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="compare">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h10M4 18h7" /><circle cx="19" cy="12" r="2" /><circle cx="16" cy="18" r="2" /></svg></span>
                        <div><h4 className="usecase-row-title">Property comparison</h4><p className="usecase-row-desc">Compares price, carpet area, location, commute, possession, and amenities, and explains the strongest trade-offs between shortlisted properties.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="map">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4L3 6.5V20L9 17.5L15 20L21 17.5V4L15 6.5L9 4Z" /><path d="M9 4V17.5M15 6.5V20" /></svg></span>
                        <div><h4 className="usecase-row-title">Neighbourhood guide</h4><p className="usecase-row-desc">Shows nearby schools, hospitals, malls, parks, and transit, with distance, travel time, ratings, and directions.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="search">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><path d="M21 21L15 15" /></svg></span>
                        <div><h4 className="usecase-row-title">Commute-based recommendations</h4><p className="usecase-row-desc">Recommends properties based on travel time to work, school, airport, or family locations.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="video">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 9.5L22 6v12l-6-3.5" /></svg></span>
                        <div><h4 className="usecase-row-title">Virtual property tours</h4><p className="usecase-row-desc">Shares 360 tours, videos, walkthroughs, and floor plans, and lets buyers ask questions while exploring.</p></div>
                      </div>
                    </div>
                    <h3 className="usecase-group-title">Qualify &amp; finance</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="star">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg></span>
                        <div><h4 className="usecase-row-title">Lead generation</h4><p className="usecase-row-desc">Captures name, phone, email, budget, location, and property preference, and creates the lead with the full conversation attached.</p></div>
                      </div>
                      {/* Renamed from "Intent-based qualification" — "classifies leads as high
                           intent, interested, or researching" described a lead-scoring model, which
                           isn't a real feature. Reworded to the actual rule-based trigger. */}
                      <div className="usecase-row" data-cat="star">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg></span>
                        <div><h4 className="usecase-row-title">Serious-buyer signals</h4><p className="usecase-row-desc">Notices when a buyer asks about loan options, pricing, or a site visit — the practical signs someone's ready to move — and flags the lead for sales instead of waiting for a report.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="note">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4H14L18 8V20H6V4Z" /><path d="M14 4V8H18" /><path d="M9 12H15M9 15.5H13" /></svg></span>
                        <div><h4 className="usecase-row-title">Inventory and availability</h4><p className="usecase-row-desc">Shows available units, floors, configurations, and current prices, and avoids recommending sold or unavailable units.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="check">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 12.5L10.5 15L16 9" /></svg></span>
                        <div><h4 className="usecase-row-title">EMI and affordability</h4><p className="usecase-row-desc">Estimates EMI from price, down payment, interest rate, and loan duration, and connects interested buyers with the finance team.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="star">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L14.6 8.9L21 9.6L16.2 13.9L17.6 20.3L12 17L6.4 20.3L7.8 13.9L3 9.6L9.4 8.9L12 3Z" /></svg></span>
                        <div><h4 className="usecase-row-title">Seller and rental leads</h4><p className="usecase-row-desc">Captures owner, tenant, and landlord requirements, and books valuation calls or rental property tours.</p></div>
                      </div>
                    </div>
                    <h3 className="usecase-group-title">Book &amp; follow up</h3>
                    <div className="usecase-group-list">
                      <div className="usecase-row" data-cat="calendar">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5H20M8 3V6M16 3V6" /></svg></span>
                        <div><h4 className="usecase-row-title">Site visit booking</h4><p className="usecase-row-desc">Shows available slots and books, reschedules, or cancels visits, then sends confirmation, directions, reminders, and sales-team notifications.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="clock">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7V12L15.5 14.5" /></svg></span>
                        <div><h4 className="usecase-row-title">WhatsApp follow-ups</h4><p className="usecase-row-desc">Shares shortlisted properties and brochures, and sends visit reminders, price changes, and new inventory updates.</p></div>
                      </div>
                      <div className="usecase-row" data-cat="handoff">
                        <span className="usecase-row-num"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13C4 8 7.5 4.5 12 4.5C16.5 4.5 20 8 20 13" /><rect x="3.5" y="13" width="4" height="6" rx="1.5" /><rect x="16.5" y="13" width="4" height="6" rx="1.5" /></svg></span>
                        <div><h4 className="usecase-row-title">Human handoff</h4><p className="usecase-row-desc">Transfers serious buyers to sales with budget, preferences, properties viewed, and full context attached.</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="pain-rail">
                <h2 className="pain-rail-title">You already know these</h2>
                <p className="pain-rail-sub">Six things costing you deals every single week.</p>
                <ul className="pain-list">
                  <li>Property enquiries are not answered quickly enough.</li>
                  <li>Sales teams spend time repeating project details.</li>
                  <li>Buyers struggle to compare properties and neighbourhoods.</li>
                  <li>Site-visit scheduling and follow-up are manual.</li>
                  <li>High-intent leads are mixed with casual researchers.</li>
                  <li>Property inventory and availability change frequently.</li>
                </ul>
              </aside>

            </div>
          </div>
        </section>

        {/* ============================================================
             PRIORITY PACKAGE
             ============================================================ */}
        <section className="section section--raised section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--emerald atmo-blob--tl"></div>
            <div className="atmo-blob atmo-blob--rose atmo-blob--br"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">02</span> Where to start</p>
              <h2 className="section-title">If you can only start with one thing</h2>
              <p className="section-sub">In priority order, based on what moves a deal forward fastest.</p>
            </div>
            <div className="priority-ledger reveal reveal-stagger">
              <div className="priority-row"><span className="priority-row-num">01</span><span className="priority-row-label">Property discovery</span></div>
              <div className="priority-row"><span className="priority-row-num">02</span><span className="priority-row-label">Property Q&amp;A</span></div>
              <div className="priority-row"><span className="priority-row-num">03</span><span className="priority-row-label">Neighbourhood guide</span></div>
              <div className="priority-row"><span className="priority-row-num">04</span><span className="priority-row-label">Serious-buyer signals</span></div>
              <div className="priority-row"><span className="priority-row-num">05</span><span className="priority-row-label">Site-visit booking</span></div>
              <div className="priority-row"><span className="priority-row-num">06</span><span className="priority-row-label">WhatsApp follow-up</span></div>
              <div className="priority-row"><span className="priority-row-num">07</span><span className="priority-row-label">Human handoff</span></div>
            </div>
          </div>
        </section>

        {/* ============================================================
             REAL AUTOMATION — the actual lead follow-up workflow
             ============================================================ */}
        <section className="wf-section">
          <div className="container">
            <div className="section-head center reveal">
              <h2 className="section-title">What automation looks like, live.</h2>
              <p className="section-sub">This is the exact logic behind the "Lead Follow-up" template — one of many. There's no limit to what you can automate once you're connected.</p>
            </div>

            <div className="wf-canvas-wrap reveal">
              <div className="wf-canvas">
                <div className="wf-live-tag">Live example — Enquiry follow-up</div>

                <div className="wf-trunk">
                  <div className="wf-node" data-wf-step="1">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></span>
                    <div><div className="wf-node-kind">Trigger</div><div className="wf-node-title">New property enquiry</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="2"></div>
                  <div className="wf-node" data-wf-step="2">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                    <div><div className="wf-node-kind">Action · Wait</div><div className="wf-node-title">Wait 10 minutes</div></div>
                  </div>
                  <div className="wf-line" data-wf-step="3"></div>
                  <div className="wf-node" data-wf-step="3">
                    <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1 21 6l-4 3.9M3 12v-2a4 4 0 0 1 4-4h14M7 21.9 3 18l4-3.9M21 12v2a4 4 0 0 1-4 4H3" /></svg></span>
                    <div><div className="wf-node-kind">Connector</div><div className="wf-node-title">Check response status</div></div>
                  </div>
                </div>

                <div className="wf-fork">
                  <div className="wf-fork-stub" data-wf-step="4"></div>
                  <div className="wf-fork-bar"></div>
                  <div className="wf-fork-row">
                    <div className="wf-branch">
                      <div className="wf-branch-stub"></div>
                      <span className="wf-badge completed">RESPONDED</span>
                      <div className="wf-node dim">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /></svg></span>
                        <div><div className="wf-node-kind">Action</div><div className="wf-node-title">End</div></div>
                      </div>
                    </div>
                    <div className="wf-branch">
                      <div className="wf-branch-stub" data-wf-step="4"></div>
                      <span className="wf-badge abandoned">NO REPLY</span>
                      <div className="wf-node" data-wf-step="4">
                        <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5V15M18 6H10a4 4 0 0 0-4 4" /><circle cx="18" cy="6" r="2.5" /></svg></span>
                        <div><div className="wf-node-kind">Condition</div><div className="wf-node-title">Phone number given?</div></div>
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
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Send info pack</div></div>
                            </div>
                          </div>
                          <div className="wf-branch">
                            <div className="wf-branch-stub" data-wf-step="5"></div>
                            <span className="wf-badge yes">YES</span>
                            <div className="wf-node" data-wf-step="5">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Call reminder to agent</div></div>
                            </div>
                            <div className="wf-line" data-wf-step="6"></div>
                            <div className="wf-node" data-wf-step="6">
                              <span className="wf-node-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span>
                              <div><div className="wf-node-kind">Action</div><div className="wf-node-title">Viewing slot offered</div></div>
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
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">Lead Follow-up</div><div className="tp-steps">4 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">Viewing Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">Post-Viewing Check-in</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">Price-Drop Alert</div><div className="tp-steps">2 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">New-Listing Match Alert</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">Offer Follow-up</div><div className="tp-steps">5 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">Document Reminder</div><div className="tp-steps">3 steps</div></div>
              <div className="template-pill"><div className="tp-tag">Real Estate</div><div className="tp-name">Cold Lead Re-engagement</div><div className="tp-steps">6 steps</div></div>
            </div>
          </div>
        </section>

        {/* ============================================================
             WHATSAPP WORKFLOWS FOR THIS INDUSTRY
             ============================================================ */}
        <section className="section section--base section--atmo">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--blue atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--violet atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">03</span> Three follow-up workflows</p>
              <h2 className="section-title">What follow-up looks like after the enquiry</h2>
              <p className="section-sub">Three workflows built specifically for how property buyers behave.</p>
            </div>
            <div className="workflow-strip-list reveal reveal-stagger">
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 11L12 4L20 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 10V20H18V10" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">New enquiry</p><p className="workflow-strip-desc">Captures requirements, shares matched properties, asks for a shortlist, and offers a site visit.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M4 9.5H20M8 3V6M16 3V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
                <div><p className="workflow-strip-title">Site visit</p><p className="workflow-strip-desc">Confirms the visit, shares directions and agent details, sends a reminder, collects feedback, and suggests the next step.</p></div>
              </div>
              <div className="workflow-strip-item">
                <span className="workflow-strip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3C14.5 5.5 15.8 8.6 15.8 12C15.8 15.4 14.5 18.5 12 21C9.5 18.5 8.2 15.4 8.2 12C8.2 8.6 9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12H21" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                <div><p className="workflow-strip-title">Dormant lead</p><p className="workflow-strip-desc">Asks whether requirements changed, shares new matches, and routes replies to sales.</p></div>
              </div>
            </div>

            <div className="ind-crosslink">
              <p>Every industry runs on the same ten platform capabilities, tracked the same way.</p>
              <a href="capabilities.html">See the platform capabilities <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
        </section>

        {/* ============================================================
             FAQ
             ============================================================ */}
        <section className="section section--raised section--atmo" id="faq">
          <div className="atmo-mesh" aria-hidden="true">
            <div className="atmo-blob atmo-blob--teal atmo-blob--tr"></div>
            <div className="atmo-blob atmo-blob--emerald atmo-blob--bl"></div>
          </div>
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker"><span className="n">04</span> Questions</p>
              <h2 className="section-title">About property enquiries and site visits.</h2>
            </div>

            <div className="faq-grid reveal">
              <div>
                {REAL_ESTATE_FAQS.slice(0, 2).map((item, i) => (
                  <FaqItem key={item.q} question={item.q} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} chevronClassName="faq-chev">
                    <p>{item.a}</p>
                  </FaqItem>
                ))}
              </div>
              <div>
                {REAL_ESTATE_FAQS.slice(2, 4).map((item, i) => {
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

        {/* ============================================================
             FINAL CTA + FOOTER
             ============================================================ */}
        <section className="section section--dark final-cta" id="final-cta">
          <div className="final-cta-glow" aria-hidden="true"></div>
          <div className="final-cta-dots" aria-hidden="true"></div>
          <div className="container final-cta-inner">
            <h2 className="final-cta-headline">Your next buyer is comparing listings right now.</h2>
            <p className="final-cta-sub">Set it up this afternoon. Start qualifying leads tonight.</p>
            <a href="pricing.html" className="btn btn-cta">Start free trial</a>
            <p className="final-cta-note">No credit card. Live in under an hour.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
