import type { ReactNode } from 'react';

/**
 * Ported from the .wa-real / .ig-real phone-chat mockups repeated verbatim
 * throughout every industry-*.html / role-*.html page (identical status bar,
 * header icon sets, and composer bar each time — only the messages differ).
 * Factoring these out is exactly the "components instead of copy-paste"
 * payoff called out in VITE_TS_PHASE1_PLAN.md §2.
 */
function PhoneStatusBar() {
  return (
    <div className="phone-status">
      <span>9:41</span>
      <span className="phone-status-icons">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5" /><rect x="4.3" y="5" width="3" height="6" rx="0.5" /><rect x="8.6" y="3" width="3" height="8" rx="0.5" /><rect x="12.9" y="0" width="3" height="11" rx="0.5" /></svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 4C4.7 0.7 10.3 0.7 14 4" /><path d="M3.3 6.4C5.7 4.2 9.3 4.2 11.7 6.4" /><path d="M6 8.7C6.9 7.9 8.1 7.9 9 8.7" /></svg>
        <svg width="24" height="11" viewBox="0 0 24 11" fill="none"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke="currentColor" /><rect x="2" y="2" width="17" height="7" rx="1.2" fill="currentColor" /><rect x="21.3" y="3.3" width="1.7" height="4.4" rx="0.8" fill="currentColor" /></svg>
      </span>
    </div>
  );
}

const BackIcon = () => (
  <svg className="back" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 4L7 12L15 20" /></svg>
);

export function WhatsAppMockup({ name, status, children }: { name: string; status: string; children: ReactNode }) {
  return (
    <div className="wa-real">
      <PhoneStatusBar />
      <div className="wa-real-header">
        <BackIcon />
        <span className="wa-real-avatar">{name.charAt(0)}</span>
        <div className="wa-real-id"><span className="wa-real-name">{name}</span><span className="wa-real-active">{status}</span></div>
        <span className="wa-real-icons">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 9.5L22 6v12l-6-3.5" /></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.7c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" /></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="12" cy="19" r="1.8" /></svg>
        </span>
      </div>
      <div className="wa-real-body">{children}</div>
      <div className="wa-real-composer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 10.5v.01M15.5 10.5v.01M8 14.5c1.2 1.2 2.8 1.2 4 1.2s2.8 0 4-1.2" /></svg>
        <span className="wa-real-input">Message</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7l1.5-3h5L16 7" /><circle cx="12" cy="13.5" r="3.5" /></svg>
        <span className="wa-real-mic-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg></span>
      </div>
      <div className="phone-home-bar"></div>
    </div>
  );
}

export function InstagramMockup({ handle, status, children }: { handle: string; status: string; children: ReactNode }) {
  return (
    <div className="ig-real">
      <PhoneStatusBar />
      <div className="ig-real-header">
        <BackIcon />
        <span className="ig-real-avatar">{handle.charAt(0).toUpperCase()}</span>
        <div className="ig-real-id"><span className="ig-real-name">{handle}</span><span className="ig-real-active">{status}</span></div>
        <span className="ig-real-icons">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1v3.4c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.7c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z" /></svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 9.5L22 6v12l-6-3.5" /></svg>
        </span>
      </div>
      <div className="ig-real-body">{children}</div>
      <div className="ig-real-composer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7l1.5-3h5L16 7" /><circle cx="12" cy="13.5" r="3.5" /></svg>
        <span className="ig-real-input">Message...</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M21 15l-5-5-4 4-3-3-6 6" /></svg>
      </div>
      <div className="phone-home-bar"></div>
    </div>
  );
}

export function ChatTick() {
  return <svg viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6.5L4.5 10L10.5 2" /><path d="M6.5 6.5L10 10L17 2" /></svg>;
}
