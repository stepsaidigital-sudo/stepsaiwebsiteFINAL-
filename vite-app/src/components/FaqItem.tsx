import { useEffect, useRef, type ReactNode } from 'react';

/** Ported from pricing.js's FAQ accordion (max-height driven open/close, one open at a time). */
export function FaqItem({
  question,
  isOpen,
  onToggle,
  chevronClassName = 'faq-chev',
  children,
}: {
  question: string;
  isOpen: boolean;
  onToggle: () => void;
  chevronClassName?: string;
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
        <svg className={chevronClassName} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="faq-answer" ref={answerRef}>
        {children}
      </div>
    </div>
  );
}
