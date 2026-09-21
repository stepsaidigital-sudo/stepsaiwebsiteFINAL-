import { useEffect, useRef, useState } from 'react';

/**
 * Ported from industries.js's FAQ CHAT accordion — the message-style FAQ
 * shared by one-inbox.html, whatsapp-broadcast.html and crm.html
 * (max-height driven, first item open, one open at a time).
 */
/** The speech-bubble kicker icon that precedes the "Questions" kicker on every .faq-chat section. */
export const FaqChatKickerIcon = (
  <svg className="kicker-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.5c-4.7 0-8.5 3.2-8.5 7.2 0 2.3 1.25 4.35 3.2 5.7-.1.95-.5 2.1-1.35 3.3 1.7-.2 3.15-.85 4.3-1.65.75.2 1.55.3 2.35.3 4.7 0 8.5-3.2 8.5-7.2S16.7 3.5 12 3.5Z" /><path d="M10.3 9.4c0-1 .75-1.7 1.7-1.7s1.7.6 1.7 1.5c0 1.1-1.7 1.2-1.7 2.5" /><circle cx="12" cy="14.4" r=".5" fill="currentColor" stroke="none" /></svg>
);

export function FaqChat({ head, items }: { head: string; items: readonly { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-chat reveal">
      <div className="faq-chat-head">
        <span className="faq-chat-head-dot" aria-hidden="true"></span>
        {head}
      </div>
      <div className="faq-chat-body">
        {items.map((item, i) => (
          <FaqChatItem
            key={item.q}
            id={`faqA${i + 1}`}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}

function FaqChatItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px';
  }, [isOpen]);

  return (
    <div className={`faq-chat-item${isOpen ? ' is-open' : ''}`}>
      <button className="faq-chat-q" aria-expanded={isOpen} aria-controls={id} onClick={onToggle} type="button">
        <span className="faq-chat-q-bubble">
          {question}
          <svg className="faq-chat-q-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
        </span>
        <span className="faq-chat-q-avatar">Y</span>
      </button>
      <div className="faq-chat-a" id={id} ref={answerRef}>
        <div className="faq-chat-a-inner">
          <span className="faq-chat-a-avatar">SA</span>
          <p className="faq-chat-a-bubble">{answer}</p>
        </div>
      </div>
    </div>
  );
}
