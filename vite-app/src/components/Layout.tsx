import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useChatMockupPlayer } from '../hooks/useChatMockupPlayer';

export function Layout({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);

  // Re-run per route change, mirroring how a fresh HTML page load behaves.
  useScrollReveal([location.pathname]);
  useChatMockupPlayer([location.pathname]);

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
