(function () {
  const page = document.querySelector('.wp-page');
  if (!page) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const story = page.querySelector('[data-wp-story]');
  const parts = story ? Array.from(story.querySelectorAll('[data-wp-demo-part]')) : [];
  const steps = story ? Array.from(story.querySelectorAll('[data-wp-step]')) : [];
  const replay = story?.querySelector('[data-wp-replay]');
  let timers = [];
  let played = false;

  function clearTimers() {
    timers.forEach(window.clearTimeout);
    timers = [];
  }

  function setStoryState(index) {
    const completedIndex = Math.max(0, Math.min(index, parts.length - 1));
    parts.forEach((part, partIndex) => part.classList.toggle('is-pending', partIndex > completedIndex));
    steps.forEach((step, stepIndex) => {
      const isActive = stepIndex === Math.min(completedIndex, steps.length - 1);
      step.classList.toggle('is-active', isActive);
      step.querySelector('button')?.setAttribute('aria-pressed', String(isActive));
    });
  }

  function playStory() {
    if (!story) return;
    clearTimers();
    if (reduceMotion.matches) {
      setStoryState(parts.length - 1);
      return;
    }
    parts.forEach((part) => part.classList.add('is-pending'));
    steps.forEach((step) => {
      step.classList.remove('is-active');
      step.querySelector('button')?.setAttribute('aria-pressed', 'false');
    });
    [0, 1, 2, 3].forEach((index) => {
      timers.push(window.setTimeout(() => setStoryState(index), 260 + index * 560));
    });
  }

  if (story) {
    setStoryState(parts.length - 1);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio > .28 && !played) {
        played = true;
        playStory();
      } else if (!entry.isIntersecting) {
        clearTimers();
        setStoryState(parts.length - 1);
      }
    }, { threshold: [0, .28, .65] });
    observer.observe(story);
  }

  replay?.addEventListener('click', playStory);
  steps.forEach((step) => {
    step.querySelector('button')?.addEventListener('click', () => {
      clearTimers();
      const index = Number(step.dataset.wpStep);
      setStoryState(index === 0 ? 0 : index === 1 ? 1 : parts.length - 1);
    });
  });

  page.querySelector('[data-wp-scroll-demo]')?.addEventListener('click', () => {
    document.getElementById('wp-live-demo')?.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
  });

  page.querySelectorAll('.wp-faq-item').forEach((item) => {
    const button = item.querySelector('button');
    const panel = item.querySelector('div');
    button?.addEventListener('click', () => {
      const open = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      if (panel) panel.hidden = !open;
    });
  });
}());
