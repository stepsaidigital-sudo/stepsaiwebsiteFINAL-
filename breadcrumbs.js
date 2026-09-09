/* ============================================================
   STEPSAI — BREADCRUMB TRAIL
   Renders "Home / Section / Page" top-right, just under the main
   nav, driven by a single lookup table below (keyed by filename)
   so no per-page markup is needed -- add a <div id="breadcrumbBar">
   right after </header> and this fills it in automatically. Pages
   not in the table (or the homepage itself) are left alone.
   ============================================================ */
(function () {
  'use strict';

  var MAP = {
    // Product — AI agents
    'sales-agent.html':      { section: 'Product', sectionHref: 'agents.html', label: 'Sales Agent' },
    'lead-agent.html':       { section: 'Product', sectionHref: 'agents.html', label: 'Lead Qualification' },
    'support-agent.html':    { section: 'Product', sectionHref: 'agents.html', label: 'Support Agent' },
    'meetings-agent.html':   { section: 'Product', sectionHref: 'agents.html', label: 'Meeting Booking' },
    'agents.html':           { section: 'Product', sectionHref: null, label: 'AI Agents' },
    // Product — platform capabilities
    'one-inbox.html':        { section: 'Product', sectionHref: 'agents.html', label: 'Unified One Inbox' },
    'whatsapp-broadcast.html': { section: 'Product', sectionHref: 'agents.html', label: 'WhatsApp Broadcast' },
    'analytics.html':        { section: 'Product', sectionHref: 'agents.html', label: 'Analytics & Insights' },
    'crm.html':               { section: 'Product', sectionHref: 'agents.html', label: 'Built-in CRM' },
    'capabilities.html':     { section: 'Product', sectionHref: 'agents.html', label: 'Skills & Capabilities' },
    'integrations.html':     { section: 'Product', sectionHref: 'agents.html', label: 'Integrations' },
    'workflows.html':        { section: 'Product', sectionHref: 'agents.html', label: 'Workflows' },

    // Solutions — by role
    'role-sales.html':       { section: 'Solutions', sectionHref: 'solutions.html', label: 'For Sales Teams' },
    'role-support.html':     { section: 'Solutions', sectionHref: 'solutions.html', label: 'For Support Teams' },
    'role-growth.html':      { section: 'Solutions', sectionHref: 'solutions.html', label: 'For Growth & RevOps' },
    'role-marketing.html':   { section: 'Solutions', sectionHref: 'solutions.html', label: 'For Marketing Teams' },
    'role-appointments.html': { section: 'Solutions', sectionHref: 'solutions.html', label: 'For Appointment Booking' },
    'solutions.html':        { section: 'Solutions', sectionHref: null, label: 'All Solutions' },

    // Solutions — industries
    'industries.html':       { section: 'Industries', sectionHref: null, label: 'All Industries' },
    'industry-ecommerce.html':   { section: 'Industries', sectionHref: 'industries.html', label: 'E-Commerce & D2C' },
    'industry-healthcare.html':  { section: 'Industries', sectionHref: 'industries.html', label: 'Healthcare & Clinics' },
    'industry-real-estate.html': { section: 'Industries', sectionHref: 'industries.html', label: 'Real Estate' },
    'industry-edtech.html':      { section: 'Industries', sectionHref: 'industries.html', label: 'Education & Training' },
    'industry-hotels.html':      { section: 'Industries', sectionHref: 'industries.html', label: 'Travel & Hospitality' },
    'industry-saas.html':        { section: 'Industries', sectionHref: 'industries.html', label: 'SaaS & Tech' },
    'industry-legal.html':       { section: 'Industries', sectionHref: 'industries.html', label: 'Legal & Professional' },

    // Solutions — channels
    'channels.html':          { section: 'Channels', sectionHref: null, label: 'All Channels' },
    'channel-website.html':   { section: 'Channels', sectionHref: 'channels.html', label: 'Website Channel' },
    'channel-whatsapp.html':  { section: 'Channels', sectionHref: 'channels.html', label: 'WhatsApp Channel' },
    'channel-instagram.html': { section: 'Channels', sectionHref: 'channels.html', label: 'Instagram Channel' },
    'channel-messenger.html': { section: 'Channels', sectionHref: 'channels.html', label: 'Messenger Channel' },
    'channel-standalone.html': { section: 'Channels', sectionHref: 'channels.html', label: 'Agent Page' },

    // Partnership
    'partner.html':              { section: 'Partnership', sectionHref: null, label: 'Partner With Us' },
    'become-an-affiliate.html':  { section: 'Partnership', sectionHref: 'partner.html', label: 'Become an Affiliate' },
    'hire-an-agency.html':       { section: 'Partnership', sectionHref: 'partner.html', label: 'Hire an Agency' },

    // Resources
    'blog.html':          { section: 'Resources', sectionHref: null, label: 'Blog' },
    'academy.html':       { section: 'Resources', sectionHref: null, label: 'Academy' },
    'help-center.html':   { section: 'Resources', sectionHref: null, label: 'Help Center' },
    'case-studies.html':  { section: 'Resources', sectionHref: null, label: 'Case Studies' },
    'blog-analytics-dashboard.html': { section: 'Resources', sectionHref: 'blog.html', label: 'Analytics Dashboard' },
    'blog-cart-recovery.html':       { section: 'Resources', sectionHref: 'blog.html', label: 'Cart Recovery' },
    'blog-real-estate-agent.html':   { section: 'Resources', sectionHref: 'blog.html', label: 'Real Estate Agent' },
    'blog-support-triage.html':      { section: 'Resources', sectionHref: 'blog.html', label: 'Support Triage' },

    // Company & Trust
    'about.html':          { section: 'Company', sectionHref: null, label: 'About' },
    'team.html':           { section: 'Company', sectionHref: 'about.html', label: 'Team' },
    'security.html':       { section: 'Company', sectionHref: 'about.html', label: 'Security & Trust' },
    'career.html':         { section: 'Company', sectionHref: 'about.html', label: 'Careers' },
    'founders-note.html':  { section: 'Company', sectionHref: 'about.html', label: "Founder's Note" },
    'contact.html':        { section: 'Company', sectionHref: null, label: 'Contact' },

    // Top level / legal
    'pricing.html':          { section: null, sectionHref: null, label: 'Pricing' },
    'product.html':          { section: null, sectionHref: null, label: 'Product Overview' },
    'privacy-policy.html':   { section: 'Company', sectionHref: null, label: 'Privacy Policy' },
    'terms-of-service.html': { section: 'Company', sectionHref: null, label: 'Terms of Service' }
  };

  var file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var entry = MAP[file];
  var mount = document.getElementById('breadcrumbBar');
  if (!entry || !mount) return;

  var parts = ['<a href="index.html">Home</a>'];
  if (entry.section) {
    if (entry.sectionHref) {
      parts.push('<a href="' + entry.sectionHref + '">' + entry.section + '</a>');
    } else {
      parts.push('<span>' + entry.section + '</span>');
    }
  }
  parts.push('<span aria-current="page">' + entry.label + '</span>');

  mount.innerHTML = '<nav class="breadcrumb-bar" aria-label="Breadcrumb"><div class="container breadcrumb-inner">' +
    parts.join('<span class="breadcrumb-sep">/</span>') +
    '</div></nav>';
})();
