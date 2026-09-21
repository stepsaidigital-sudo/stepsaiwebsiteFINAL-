import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Ported from pricing.js / industries.js / pages.js's FAQ accordion
 * (max-height driven open/close, one open at a time).
 *
 * The site uses two different toggle icons depending on the page family:
 * pricing.html uses a small caret; every industry/role/agent/company page
 * uses a plus glyph that `styles.css` rotates 45° into an × when open.
 * They are NOT the same icon at different sizes — pass `variant` to match
 * whichever `<svg class="faq-chev(ron)">` the source page actually has.
 */
export function FaqItem({
  question,
  isOpen,
  onToggle,
  chevronClassName = 'faq-chev',
  variant = 'plus',
  children,
}: {
  question: string;
  isOpen: boolean;
  onToggle: () => void;
  chevronClassName?: string;
  variant?: 'caret' | 'plus';
  children: ReactNode;
}) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
  }, [isOpen]);

  return (
    <div className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-question" onClick={onToggle} type="button">
        {question}
        {variant === 'plus' ? (
          <svg className={chevronClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        ) : (
          <svg className={chevronClassName} width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
      <div className="faq-answer" ref={answerRef}>
        {children}
      </div>
    </div>
  );
}
