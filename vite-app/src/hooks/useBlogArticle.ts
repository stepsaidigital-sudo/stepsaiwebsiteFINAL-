import { useEffect } from 'react';

/**
 * Ports blog.js: reading progress bar (#readingProgress), TOC scroll-spy
 * (.article-toc a / heading ids), and copy-link ([data-copy-link]) /
 * copy-code ([data-copy-code]) buttons. Used by the 4 blog-*.html article
 * pages (safe no-op on blog.html itself, which has none of these elements).
 */
export function useBlogArticle(deps: readonly unknown[] = []) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* ---------- Reading progress bar ---------- */
    const progress = document.getElementById('readingProgress');
    if (progress) {
      const updateProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        progress.style.width = (height > 0 ? (scrollTop / height) * 100 : 0) + '%';
      };
      window.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();
      cleanups.push(() => window.removeEventListener('scroll', updateProgress));
    }

    /* ---------- TOC scroll-spy ---------- */
    const tocLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.article-toc a'));
    if (tocLinks.length && 'IntersectionObserver' in window) {
      const headings = tocLinks
        .map((link) => document.getElementById(link.getAttribute('href')!.slice(1)))
        .filter((el): el is HTMLElement => Boolean(el));

      const setActive = (id: string) => {
        tocLinks.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: '-15% 0px -70% 0px' }
      );
      headings.forEach((h) => observer.observe(h));
      cleanups.push(() => observer.disconnect());
    }

    /* ---------- Copy-link share button ---------- */
    function copyText(text: string, done: () => void) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
        } catch {
          /* no-op */
        }
        document.body.removeChild(ta);
        done();
      }
    }

    const copyLinkBtns = Array.from(document.querySelectorAll<HTMLElement>('[data-copy-link]'));
    const copyLinkHandlers = copyLinkBtns.map((btn) => {
      const onClick = () => {
        const url = window.location.href;
        copyText(url, () => {
          btn.classList.add('is-copied');
          setTimeout(() => btn.classList.remove('is-copied'), 1600);
        });
      };
      btn.addEventListener('click', onClick);
      return { btn, onClick };
    });
    cleanups.push(() => copyLinkHandlers.forEach(({ btn, onClick }) => btn.removeEventListener('click', onClick)));

    /* ---------- Copy-code button ---------- */
    const copyCodeBtns = Array.from(document.querySelectorAll<HTMLElement>('[data-copy-code]'));
    const copyCodeHandlers = copyCodeBtns.map((btn) => {
      const onClick = () => {
        const target = document.getElementById(btn.getAttribute('data-copy-code')!);
        if (!target) return;
        const text = (target as HTMLElement).innerText;
        const original = btn.textContent;
        copyText(text, () => {
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = original;
          }, 1600);
        });
      };
      btn.addEventListener('click', onClick);
      return { btn, onClick };
    });
    cleanups.push(() => copyCodeHandlers.forEach(({ btn, onClick }) => btn.removeEventListener('click', onClick)));

    return () => cleanups.forEach((fn) => fn());
  }, deps);
}
