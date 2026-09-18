import { useRef } from 'react';
import { useNavBehavior } from '../hooks/useNavBehavior';

/**
 * Ported 1:1 from the nav markup duplicated across all 56 HTML pages
 * (see index.html header#nav) — one real component instead of 56 copies.
 * Hrefs are kept as the original static filenames; once a page is migrated
 * to a route in this app, wire its href to a router <Link> at that point.
 */
export function Nav() {
  const navRef = useRef<HTMLElement | null>(null);
  useNavBehavior(navRef);

  return (
    <header className="nav" id="nav" ref={navRef as never}>
      <div className="nav-inner">
        <a href="index.html#top" className="nav-logo" aria-label="StepsAI home">
          <img src="/images/stepsai-logo-blue-transparent.png" alt="StepsAI Logo" className="nav-logo-img" width="42" height="30" />
          <span>StepsAI</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {/* 1. PRODUCT MEGA MENU */}
          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger" type="button" aria-expanded="false" aria-haspopup="true">
              Product
              <svg className="nav-dropdown-caret" width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-panel nav-dropdown-panel--product nav-dropdown-panel--product-v2" role="menu">
              <div className="nav-mega-layout nav-mega-layout--product-v2">
                <div className="nav-mega-col">
                  <div className="nav-mega-thumb nav-mega-thumb--violet" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-agents.png" alt="" width="480" height="320" />
                  </div>
                  <div className="nav-mega-col-head">
                    <span className="nav-col-icon nav-col-icon--violet"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                    </svg></span>
                    <span className="nav-mega-header">Agents</span>
                  </div>
                  <a href="channel-whatsapp.html" className="nav-mega-simple-row">WhatsApp Agent</a>
                  <a href="channel-website.html" className="nav-mega-simple-row">Website Agent</a>
                  <a href="channel-instagram.html" className="nav-mega-simple-row">Instagram Agent</a>
                  <a href="channel-messenger.html" className="nav-mega-simple-row">Facebook Agent</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-mega-thumb nav-mega-thumb--green" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-sales.png" alt="" width="480" height="320" />
                  </div>
                  <div className="nav-mega-col-head">
                    <span className="nav-col-icon nav-col-icon--green"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg></span>
                    <span className="nav-mega-header">Sales</span>
                  </div>
                  <a href="sales-agent.html" className="nav-mega-simple-row">Checkout Conversion</a>
                  <a href="sales-agent.html" className="nav-mega-simple-row">Cart Abandonment</a>
                  <a href="sales-agent.html" className="nav-mega-simple-row">Product Recommendations</a>
                  <a href="sales-agent.html" className="nav-mega-simple-row">Guided Checkout</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-mega-thumb nav-mega-thumb--indigo" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-support.png" alt="" width="480" height="320" />
                  </div>
                  <div className="nav-mega-col-head">
                    <span className="nav-col-icon nav-col-icon--indigo"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3z" /><path d="M9 12l2 2 4-4" />
                    </svg></span>
                    <span className="nav-mega-header">Support</span>
                  </div>
                  <a href="support-agent.html" className="nav-mega-simple-row">Query Resolution</a>
                  <a href="support-agent.html" className="nav-mega-simple-row">Order Tracking</a>
                  <a href="support-agent.html" className="nav-mega-simple-row">Human Handoff</a>
                  <a href="support-agent.html" className="nav-mega-simple-row">Ticket Creation</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-mega-thumb nav-mega-thumb--rose" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-lead-capture.png" alt="" width="480" height="320" />
                  </div>
                  <div className="nav-mega-col-head">
                    <span className="nav-col-icon nav-col-icon--rose"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg></span>
                    <span className="nav-mega-header">Lead Capture</span>
                  </div>
                  <a href="lead-agent.html" className="nav-mega-simple-row">Lead Qualification</a>
                  <a href="crm.html" className="nav-mega-simple-row">CRM Sync</a>
                  <a href="lead-agent.html" className="nav-mega-simple-row">Contact Capture</a>
                  <a href="lead-agent.html" className="nav-mega-simple-row">Smart Routing</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-mega-thumb nav-mega-thumb--orange" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-marketing.png" alt="" width="480" height="320" />
                  </div>
                  <div className="nav-mega-col-head">
                    <span className="nav-col-icon nav-col-icon--orange"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                    </svg></span>
                    <span className="nav-mega-header">Marketing</span>
                  </div>
                  <a href="whatsapp-broadcast.html" className="nav-mega-simple-row">Broadcasting</a>
                  <a href="whatsapp-broadcast.html" className="nav-mega-simple-row">Campaign Replies</a>
                  <a href="whatsapp-broadcast.html" className="nav-mega-simple-row">Audience Segments</a>
                  <a href="whatsapp-broadcast.html" className="nav-mega-simple-row">Automated Follow-ups</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-mega-thumb nav-mega-thumb--teal" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-booking.png" alt="" width="480" height="320" />
                  </div>
                  <div className="nav-mega-col-head">
                    <span className="nav-col-icon nav-col-icon--teal"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg></span>
                    <span className="nav-mega-header">Booking</span>
                  </div>
                  <a href="meetings-agent.html" className="nav-mega-simple-row">Slot Reservation</a>
                  <a href="meetings-agent.html" className="nav-mega-simple-row">Rescheduling</a>
                  <a href="meetings-agent.html" className="nav-mega-simple-row">Reminders</a>
                  <a href="meetings-agent.html" className="nav-mega-simple-row">Calendar Sync</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-mega-thumb nav-mega-thumb--blue" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-analytics.png" alt="" width="480" height="320" />
                  </div>
                  <div className="nav-mega-col-head">
                    <span className="nav-col-icon nav-col-icon--blue"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg></span>
                    <span className="nav-mega-header">More Features</span>
                  </div>
                  <a href="analytics.html" className="nav-mega-simple-row">Analytics</a>
                  <a href="one-inbox.html" className="nav-mega-simple-row">Unified Inbox</a>
                  <a href="integrations.html" className="nav-mega-simple-row">Integrations</a>
                  <a href="agents.html" className="nav-mega-simple-row nav-mega-more-link">See all features &rarr;</a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. SOLUTIONS MEGA MENU v2 */}
          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger" type="button" aria-expanded="false" aria-haspopup="true">
              Solutions
              <svg className="nav-dropdown-caret" width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-panel nav-dropdown-panel--solutions nav-dropdown-panel--solutions-v2" role="menu">
              <div className="nav-mega-layout nav-mega-layout--solutions-v2">
                <div className="nav-mega-col">
                  <div className="nav-sol-visual nav-sol-visual--violet" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-solutions-use-cases.png" alt="" width="720" height="320" />
                  </div>
                  <div className="nav-mega-col-head nav-mega-col-head--desc">
                    <span className="nav-col-icon nav-col-icon--violet nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></span>
                    <div><span className="nav-mega-header">Use Cases</span><span className="nav-mega-header-desc">Solve key business challenges with AI agents</span></div>
                  </div>
                  <a href="support-agent.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--indigo nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Customer Support</span><span className="nav-mega-row-desc">Automate and scale support</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="sales-agent.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--green nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Sales</span><span className="nav-mega-row-desc">Convert more visitors</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="whatsapp-broadcast.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--orange nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11v3a1 1 0 0 0 1 1h2l3.5 4.5A1 1 0 0 0 11 19V6a1 1 0 0 0-1.5-.87L6 9H4a1 1 0 0 0-1 1z" /><path d="M15.5 8.5a5 5 0 0 1 0 8" /><path d="M18 6a8 8 0 0 1 0 12" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Marketing</span><span className="nav-mega-row-desc">Engage and grow your audience</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="meetings-agent.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--violet nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Booking</span><span className="nav-mega-row-desc">Schedule and manage appointments</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="lead-agent.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--rose nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Lead Capture</span><span className="nav-mega-row-desc">Capture and qualify leads</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="solutions.html" className="nav-sol-more">See all use cases &rarr;</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-sol-visual nav-sol-visual--blue" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-solutions-industries.png" alt="" width="720" height="320" />
                  </div>
                  <div className="nav-mega-col-head nav-mega-col-head--desc">
                    <span className="nav-col-icon nav-col-icon--blue nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="1" /><line x1="9" y1="7" x2="9" y2="7" /><line x1="15" y1="7" x2="15" y2="7" /><line x1="9" y1="12" x2="9" y2="12" /><line x1="15" y1="12" x2="15" y2="12" /><line x1="9" y1="17" x2="9" y2="17" /><line x1="15" y1="17" x2="15" y2="17" /></svg></span>
                    <div><span className="nav-mega-header">Industries</span><span className="nav-mega-header-desc">Tailored solutions for every business</span></div>
                  </div>
                  <a href="industry-ecommerce.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--rose nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">E-commerce</span><span className="nav-mega-row-desc">D2C &amp; retail brands</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="industry-healthcare.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--green nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Healthcare</span><span className="nav-mega-row-desc">Clinics &amp; hospitals</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="industry-edtech.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--violet nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Education</span><span className="nav-mega-row-desc">Schools &amp; EdTech</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="industry-real-estate.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--orange nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Real Estate</span><span className="nav-mega-row-desc">Agents &amp; property management</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="industry-saas.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--teal nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">SaaS</span><span className="nav-mega-row-desc">B2B &amp; technology</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="industry-hotels.html" className="nav-sol-row">
                    <span className="nav-col-icon nav-col-icon--blue nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l19-7-7 19-3-8-9-4Z" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Travel &amp; Hospitality</span><span className="nav-mega-row-desc">Hotels, resorts &amp; travel brands</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="industries.html" className="nav-sol-more">See all industries &rarr;</a>
                </div>

                <div className="nav-mega-col">
                  <div className="nav-sol-visual nav-sol-visual--green" aria-hidden="true">
                    <img src="/images/nav-illustrations/nav-solutions-integrations.png" alt="" width="720" height="320" />
                  </div>
                  <div className="nav-mega-col-head nav-mega-col-head--desc">
                    <span className="nav-col-icon nav-col-icon--green nav-sol-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg></span>
                    <div><span className="nav-mega-header">Integrations</span><span className="nav-mega-header-desc">Works with the tools you already love</span></div>
                  </div>
                  <a href="integrations.html" className="nav-sol-row">
                    <span className="nav-sol-icon" style={{ background: 'rgba(66,133,244,.12)' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Google Calendar</span><span className="nav-mega-row-desc">Sync appointments</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="integrations.html" className="nav-sol-row">
                    <span className="nav-sol-icon" style={{ background: 'rgba(149,191,71,.14)' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#5E8E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Shopify</span><span className="nav-mega-row-desc">E-commerce integration</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="channel-whatsapp.html" className="nav-sol-row">
                    <span className="nav-sol-icon" style={{ background: 'rgba(37,211,102,.14)' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">WhatsApp</span><span className="nav-mega-row-desc">Business messaging</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="channel-instagram.html" className="nav-sol-row">
                    <span className="nav-sol-icon" style={{ background: 'rgba(225,48,108,.14)' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Instagram</span><span className="nav-mega-row-desc">Comments to DMs</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="channel-messenger.html" className="nav-sol-row">
                    <span className="nav-sol-icon" style={{ background: 'rgba(24,119,242,.12)' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg></span>
                    <span className="nav-mega-row-body"><span className="nav-mega-row-label">Facebook</span><span className="nav-mega-row-desc">Social media automation</span></span>
                    <svg className="nav-sol-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                  </a>
                  <a href="integrations.html" className="nav-sol-more">View all integrations &rarr;</a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. PARTNERSHIP MEGA MENU v2 */}
          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger" type="button" aria-expanded="false" aria-haspopup="true">
              Partnership
              <svg className="nav-dropdown-caret" width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-panel nav-dropdown-panel--partnership nav-dropdown-panel--partnership-v2" role="menu">
              <div className="nav-mega-layout nav-mega-layout--partnership-v2">
                <a href="become-an-affiliate.html" className="nav-res-item">
                  <span className="nav-partner-art" aria-hidden="true"></span>
                  <span className="nav-res-title">Affiliate Marketing</span>
                  <span className="nav-res-desc">Earn rewards by referring StepsAI to your audience.</span>
                  <svg className="nav-res-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
                <a href="hire-an-agency.html" className="nav-res-item">
                  <span className="nav-partner-art" aria-hidden="true"></span>
                  <span className="nav-res-title">Affiliate Partnership</span>
                  <span className="nav-res-desc">Partner with us for long-term growth and revenue.</span>
                  <svg className="nav-res-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
                <a href="partner.html" className="nav-res-item">
                  <span className="nav-partner-art" aria-hidden="true"></span>
                  <span className="nav-res-title">White-labeling Agent Partner</span>
                  <span className="nav-res-desc">Power your brand with our AI agents.</span>
                  <svg className="nav-res-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* 5. PRICING */}
          <a href="pricing.html">Pricing</a>

          {/* 6. RESOURCES MEGA MENU v2 */}
          <div className="nav-dropdown">
            <button className="nav-dropdown-trigger" type="button" aria-expanded="false" aria-haspopup="true">
              Resources
              <svg className="nav-dropdown-caret" width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown-panel nav-dropdown-panel--resources nav-dropdown-panel--resources-v2" role="menu">
              <div className="nav-mega-layout nav-mega-layout--resources-v2">
                <a href="academy.html" className="nav-res-item">
                  <span className="nav-resource-art" aria-hidden="true"></span>
                  <span className="nav-res-title">Blocks</span>
                  <span className="nav-res-desc">Ready-to-use resources and building blocks</span>
                  <svg className="nav-res-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
                <a href="help-center.html" className="nav-res-item">
                  <span className="nav-resource-art" aria-hidden="true"></span>
                  <span className="nav-res-title">Help Center</span>
                  <span className="nav-res-desc">Get help and find answers</span>
                  <svg className="nav-res-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
                <a href="case-studies.html" className="nav-res-item">
                  <span className="nav-resource-art" aria-hidden="true"></span>
                  <span className="nav-res-title">Case Studies</span>
                  <span className="nav-res-desc">See how businesses use StepsAI</span>
                  <svg className="nav-res-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
                <a href="https://docs.stepsai.co" className="nav-res-item" target="_blank" rel="noopener">
                  <span className="nav-resource-art" aria-hidden="true"></span>
                  <span className="nav-res-title">Docs</span>
                  <span className="nav-res-desc">Product documentation and setup guides</span>
                  <svg className="nav-res-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="nav-actions">
          <div className="nav-lang-picker" title="Language selection">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>EN</span>
            <svg className="nav-lang-caret" width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <a href="pricing.html#login" className="nav-signin">Log in</a>
          <a href="contact.html" className="nav-cta-btn">
            <span>Talk to an expert</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <button className="nav-burger" id="navBurger" aria-label="Open menu" aria-expanded="false" aria-controls="navMobile">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className="nav-mobile" id="navMobile">
        <details className="nav-mobile-group" name="navMobileAccordion">
          <summary>Product</summary>
          <div className="nav-mobile-sub">
            <a href="agents.html">AI Agents Overview</a>
            <a href="sales-agent.html">Sales Agent</a>
            <a href="lead-agent.html">Lead Qualification Agent</a>
            <a href="meetings-agent.html">Meeting Booking Agent</a>
            <a href="support-agent.html">Support Agent</a>
            <a href="workflows.html">Workflows</a>
            <a href="one-inbox.html">One Inbox</a>
            <a href="analytics.html">Analytics &amp; Insights</a>
            <a href="integrations.html">Integrations</a>
            <a href="whatsapp-broadcast.html">WhatsApp Broadcast</a>
            <a href="crm.html">Built-in CRM</a>
            <a href="capabilities.html">Skills &amp; Capabilities</a>
            <a href="channel-website.html">Website Channel</a>
            <a href="channel-whatsapp.html">WhatsApp Channel</a>
            <a href="channel-instagram.html">Instagram Channel</a>
            <a href="channel-messenger.html">Messenger Channel</a>
            <a href="channel-standalone.html">Agent Page</a>
            <a href="channels.html">All Channels</a>
          </div>
        </details>
        <details className="nav-mobile-group" name="navMobileAccordion">
          <summary>Solutions</summary>
          <div className="nav-mobile-sub">
            <a href="support-agent.html">Customer Support</a>
            <a href="sales-agent.html">Sales</a>
            <a href="whatsapp-broadcast.html">Marketing</a>
            <a href="meetings-agent.html">Booking</a>
            <a href="lead-agent.html">Lead Capture</a>
            <a href="industry-ecommerce.html">E-commerce</a>
            <a href="industry-healthcare.html">Healthcare</a>
            <a href="industry-edtech.html">Education</a>
            <a href="industry-real-estate.html">Real Estate</a>
            <a href="industry-saas.html">SaaS</a>
            <a href="industry-hotels.html">Travel &amp; Hospitality</a>
            <a href="industries.html">See all 12 industries &rarr;</a>
            <a href="integrations.html">Integrations &rarr;</a>
          </div>
        </details>
        <details className="nav-mobile-group" name="navMobileAccordion">
          <summary>Partnership</summary>
          <div className="nav-mobile-sub">
            <a href="partner.html">Partner With Us</a>
            <a href="become-an-affiliate.html">Become an Affiliate</a>
            <a href="hire-an-agency.html">Hire an Agency</a>
          </div>
        </details>
        <a href="pricing.html" className="nav-mobile-link">Pricing</a>
        <details className="nav-mobile-group" name="navMobileAccordion">
          <summary>Resources</summary>
          <div className="nav-mobile-sub">
            <a href="blog.html">Blog</a>
            <a href="academy.html">Academy</a>
            <a href="help-center.html">Help Center</a>
            <a href="case-studies.html">Case Studies</a>
            <a href="about.html">About</a>
            <a href="team.html">Team</a>
            <a href="security.html">Security &amp; Trust</a>
            <a href="career.html">Careers</a>
            <a href="contact.html">Contact</a>
          </div>
        </details>
        <div className="nav-mobile-actions">
          <button className="btn btn-secondary btn-full" type="button">Sign in</button>
          <a href="pricing.html" className="btn btn-accent btn-full">Start free trial</a>
        </div>
      </div>
    </header>
  );
}
