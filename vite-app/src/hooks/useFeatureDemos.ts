import { useEffect } from 'react';

/**
 * Ported 1:1 from feature-demos.js (used only by sales-agent.html).
 *
 * Stays a DOM effect rather than React state because feature-demos.css treats the
 * fully-revealed markup as the no-JS fallback and only stages it once `.fd-enhanced`
 * is present — driving the same class toggles keeps that contract exact.
 */

type DemoState = 'idle' | 'playing' | 'paused' | 'complete';

function resolvedLabel(text: string): string {
  if (/catalogue/i.test(text)) return 'Catalogue checked';
  if (/inventory/i.test(text)) return 'Inventory checked';
  if (/preparing checkout/i.test(text)) return 'Checkout ready';
  if (/payment/i.test(text)) return 'Payment checked';
  return 'Check complete';
}

/** Shared "only one demo plays at a time" slot, scoped to a single hook run. */
type DemoGroup = { active: Controller | null };

class Controller {
  readonly root: HTMLElement;
  readonly steps: HTMLElement[];
  private readonly status: HTMLElement | null;
  private readonly toggle: HTMLButtonElement | null;
  private readonly replay: HTMLButtonElement | null;
  private readonly group: DemoGroup;
  private readonly cleanups: Array<() => void> = [];

  index = 0;
  state: DemoState = 'idle';
  inView = false;
  userPaused = false;
  autoPaused = false;
  ratio = 0;

  private timer: number | null = null;
  private startedAt = 0;
  private remaining = 0;

  constructor(root: HTMLElement, group: DemoGroup) {
    this.root = root;
    this.group = group;
    this.steps = Array.from(root.querySelectorAll<HTMLElement>('[data-demo-step]'));
    this.status = root.querySelector<HTMLElement>('[data-demo-status]');
    this.toggle = root.querySelector<HTMLButtonElement>('[data-demo-toggle]');
    this.replay = root.querySelector<HTMLButtonElement>('[data-demo-replay]');

    this.steps.forEach((step) => {
      if (step.hasAttribute('data-demo-loading')) {
        const label = this.loadingLabel(step);
        if (label) step.dataset.initialLabel = label.textContent ?? '';
      }
    });

    root.classList.add('fd-enhanced');
    this.bind();
    this.reset();
  }

  private loadingLabel(step: HTMLElement): HTMLElement | null {
    return step.querySelector<HTMLElement>(':scope > span:last-child');
  }

  private bind(): void {
    if (this.toggle) {
      const onToggle = () => {
        if (this.state === 'playing') {
          this.userPaused = true;
          this.pause(false);
        } else if (this.state === 'paused') {
          this.userPaused = false;
          this.resume();
        } else {
          this.userPaused = false;
          this.play();
        }
      };
      this.toggle.addEventListener('click', onToggle);
      this.cleanups.push(() => this.toggle?.removeEventListener('click', onToggle));
    }
    if (this.replay) {
      const onReplay = () => {
        this.userPaused = false;
        this.reset();
        this.play();
      };
      this.replay.addEventListener('click', onReplay);
      this.cleanups.push(() => this.replay?.removeEventListener('click', onReplay));
    }
  }

  setStatus(text: string): void {
    if (this.status) this.status.textContent = text;
  }

  updateControls(): void {
    if (!this.toggle) return;
    const name = this.root.dataset.featureDemo ?? '';
    if (this.state === 'playing') {
      this.toggle.textContent = 'Pause';
      this.toggle.setAttribute('aria-label', `Pause ${name} example`);
      this.toggle.disabled = false;
    } else if (this.state === 'paused') {
      this.toggle.textContent = 'Resume';
      this.toggle.setAttribute('aria-label', `Resume ${name} example`);
      this.toggle.disabled = false;
    } else if (this.state === 'complete') {
      this.toggle.textContent = 'Complete';
      this.toggle.disabled = true;
    } else {
      this.toggle.textContent = 'Play';
      this.toggle.disabled = false;
    }
  }

  reset(): void {
    this.clearTimer();
    this.index = 0;
    this.remaining = 0;
    this.state = 'idle';
    this.autoPaused = false;
    this.root.classList.remove('is-playing', 'is-paused', 'is-complete');
    this.steps.forEach((step) => {
      step.classList.remove('is-shown', 'is-loading', 'is-resolved');
      if (step.hasAttribute('data-demo-loading')) {
        const label = this.loadingLabel(step);
        if (label && step.dataset.initialLabel) label.textContent = step.dataset.initialLabel;
      }
    });
    this.setStatus('Ready to play');
    this.updateControls();
  }

  private delayFor(step: HTMLElement): number {
    if (step.hasAttribute('data-demo-loading')) return 900;
    if (step.matches('.feature-product-card, .feature-inventory-card, .feature-order-card')) return 1250;
    if (step.matches('.feature-confirmation')) return 1100;
    return 720;
  }

  private resolvePreviousLoading(): void {
    const previous = this.steps[this.index - 1];
    if (!previous || !previous.hasAttribute('data-demo-loading')) return;
    previous.classList.remove('is-loading');
    previous.classList.add('is-resolved');
    const label = this.loadingLabel(previous);
    if (label) label.textContent = resolvedLabel(previous.dataset.initialLabel || label.textContent || '');
  }

  private clearTimer(): void {
    if (this.timer !== null) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private schedule(delay: number): void {
    this.remaining = delay;
    this.startedAt = performance.now();
    this.clearTimer();
    this.timer = window.setTimeout(() => {
      this.timer = null;
      this.revealNext();
    }, delay);
  }

  private revealNext(): void {
    if (this.state !== 'playing') return;
    this.resolvePreviousLoading();
    if (this.index >= this.steps.length) {
      this.complete();
      return;
    }
    const step = this.steps[this.index];
    step.classList.add('is-shown');
    if (step.hasAttribute('data-demo-loading')) step.classList.add('is-loading');
    this.index += 1;
    this.schedule(this.delayFor(step));
  }

  play(): void {
    if (this.state === 'complete') this.reset();
    const active = this.group.active;
    if (active && active !== this && active.state === 'playing') active.pause(true);
    this.group.active = this;
    this.state = 'playing';
    this.autoPaused = false;
    this.root.classList.add('is-playing');
    this.root.classList.remove('is-paused', 'is-complete');
    this.setStatus('Playing example');
    this.updateControls();
    if (this.index === 0) this.revealNext();
    else this.schedule(this.remaining || 250);
  }

  pause(automatic: boolean): void {
    if (this.state !== 'playing') return;
    if (this.timer !== null) {
      this.remaining = Math.max(80, this.remaining - (performance.now() - this.startedAt));
      this.clearTimer();
    }
    this.state = 'paused';
    this.autoPaused = automatic;
    this.steps.forEach((step) => step.classList.remove('is-loading'));
    this.root.classList.remove('is-playing');
    this.root.classList.add('is-paused');
    this.setStatus(automatic ? 'Paused off screen' : 'Paused');
    this.updateControls();
  }

  resume(): void {
    if (this.state !== 'paused') return;
    const active = this.group.active;
    if (active && active !== this && active.state === 'playing') active.pause(true);
    this.group.active = this;
    this.state = 'playing';
    this.autoPaused = false;
    const previous = this.steps[this.index - 1];
    if (previous && previous.hasAttribute('data-demo-loading') && !previous.classList.contains('is-resolved')) {
      previous.classList.add('is-loading');
    }
    this.root.classList.add('is-playing');
    this.root.classList.remove('is-paused');
    this.setStatus('Playing example');
    this.updateControls();
    this.schedule(this.remaining || 250);
  }

  private complete(): void {
    this.clearTimer();
    this.resolvePreviousLoading();
    this.state = 'complete';
    this.remaining = 0;
    this.root.classList.remove('is-playing', 'is-paused');
    this.root.classList.add('is-complete');
    this.setStatus('Example complete');
    this.updateControls();
    if (this.group.active === this) this.group.active = null;
  }

  showReducedMotionFinalState(): void {
    this.root.classList.add('fd-reduced');
    this.steps.forEach((step) => {
      step.classList.add('is-shown');
      if (step.hasAttribute('data-demo-loading')) {
        step.classList.add('is-resolved');
        const label = this.loadingLabel(step);
        if (label) label.textContent = resolvedLabel(step.dataset.initialLabel || label.textContent || '');
      }
    });
    this.state = 'complete';
    this.setStatus('Complete example shown');
    this.updateControls();
  }

  destroy(): void {
    this.clearTimer();
    this.cleanups.forEach((fn) => fn());
    if (this.group.active === this) this.group.active = null;
  }
}

export function useFeatureDemos(deps: readonly unknown[] = []) {
  useEffect(() => {
    const roots = Array.from(document.querySelectorAll<HTMLElement>('[data-feature-demo]'));
    if (!roots.length) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const group: DemoGroup = { active: null };
    const controllers = roots.map((root) => new Controller(root, group));

    if (reduceMotion) {
      controllers.forEach((controller) => controller.showReducedMotionFinalState());
      return () => controllers.forEach((controller) => controller.destroy());
    }

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const controller = controllers.find((item) => item.root === entry.target);
            if (!controller) return;
            controller.ratio = entry.intersectionRatio;
            controller.inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
            if (!controller.inView && controller.state === 'playing') controller.pause(true);
          });
          const active = group.active;
          if (document.hidden || (active && active.state === 'playing' && active.inView)) return;
          const candidate = controllers
            .filter(
              (controller) =>
                controller.inView &&
                (controller.state === 'idle' ||
                  (controller.state === 'paused' && controller.autoPaused && !controller.userPaused)),
            )
            .sort((a, b) => b.ratio - a.ratio)[0];
          if (!candidate) return;
          if (candidate.state === 'idle') candidate.play();
          else candidate.resume();
        },
        { threshold: [0, 0.25, 0.45] },
      );
      controllers.forEach((controller) => observer?.observe(controller.root));
    } else {
      controllers.forEach((controller) => {
        controller.inView = true;
        controller.play();
      });
    }

    const onVisibilityChange = () => {
      controllers.forEach((controller) => {
        if (document.hidden && controller.state === 'playing') controller.pause(true);
        else if (
          !document.hidden &&
          controller.inView &&
          controller.state === 'paused' &&
          controller.autoPaused &&
          !controller.userPaused
        ) {
          controller.resume();
        }
      });
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer?.disconnect();
      controllers.forEach((controller) => controller.destroy());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
