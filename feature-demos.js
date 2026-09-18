(function () {
  'use strict';

  var roots = Array.prototype.slice.call(document.querySelectorAll('[data-feature-demo]'));
  if (!roots.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var activeController = null;
  var controllers = [];

  function resolvedLabel(text) {
    if (/catalogue/i.test(text)) return 'Catalogue checked';
    if (/inventory/i.test(text)) return 'Inventory checked';
    if (/preparing checkout/i.test(text)) return 'Checkout ready';
    if (/payment/i.test(text)) return 'Payment checked';
    return 'Check complete';
  }

  function Controller(root) {
    this.root = root;
    this.steps = Array.prototype.slice.call(root.querySelectorAll('[data-demo-step]'));
    this.status = root.querySelector('[data-demo-status]');
    this.toggle = root.querySelector('[data-demo-toggle]');
    this.replay = root.querySelector('[data-demo-replay]');
    this.index = 0;
    this.state = 'idle';
    this.timer = null;
    this.startedAt = 0;
    this.remaining = 0;
    this.inView = false;
    this.userPaused = false;
    this.autoPaused = false;

    this.steps.forEach(function (step) {
      if (step.hasAttribute('data-demo-loading')) {
        var label = step.querySelector(':scope > span:last-child');
        if (label) step.dataset.initialLabel = label.textContent;
      }
    });

    root.classList.add('fd-enhanced');
    this.bind();
    this.reset();
  }

  Controller.prototype.bind = function () {
    var self = this;
    this.toggle.addEventListener('click', function () {
      if (self.state === 'playing') {
        self.userPaused = true;
        self.pause(false);
      } else if (self.state === 'paused') {
        self.userPaused = false;
        self.resume();
      } else {
        self.userPaused = false;
        self.play();
      }
    });
    this.replay.addEventListener('click', function () {
      self.userPaused = false;
      self.reset();
      self.play();
    });
  };

  Controller.prototype.setStatus = function (text) {
    if (this.status) this.status.textContent = text;
  };

  Controller.prototype.updateControls = function () {
    if (!this.toggle) return;
    if (this.state === 'playing') {
      this.toggle.textContent = 'Pause';
      this.toggle.setAttribute('aria-label', 'Pause ' + this.root.dataset.featureDemo + ' example');
      this.toggle.disabled = false;
    } else if (this.state === 'paused') {
      this.toggle.textContent = 'Resume';
      this.toggle.setAttribute('aria-label', 'Resume ' + this.root.dataset.featureDemo + ' example');
      this.toggle.disabled = false;
    } else if (this.state === 'complete') {
      this.toggle.textContent = 'Complete';
      this.toggle.disabled = true;
    } else {
      this.toggle.textContent = 'Play';
      this.toggle.disabled = false;
    }
  };

  Controller.prototype.reset = function () {
    clearTimeout(this.timer);
    this.timer = null;
    this.index = 0;
    this.remaining = 0;
    this.state = 'idle';
    this.autoPaused = false;
    this.root.classList.remove('is-playing', 'is-paused', 'is-complete');
    this.steps.forEach(function (step) {
      step.classList.remove('is-shown', 'is-loading', 'is-resolved');
      if (step.hasAttribute('data-demo-loading')) {
        var label = step.querySelector(':scope > span:last-child');
        if (label && step.dataset.initialLabel) label.textContent = step.dataset.initialLabel;
      }
    });
    this.setStatus('Ready to play');
    this.updateControls();
  };

  Controller.prototype.delayFor = function (step) {
    if (step.hasAttribute('data-demo-loading')) return 900;
    if (step.matches('.feature-product-card, .feature-inventory-card, .feature-order-card')) return 1250;
    if (step.matches('.feature-confirmation')) return 1100;
    return 720;
  };

  Controller.prototype.resolvePreviousLoading = function () {
    var previous = this.steps[this.index - 1];
    if (!previous || !previous.hasAttribute('data-demo-loading')) return;
    previous.classList.remove('is-loading');
    previous.classList.add('is-resolved');
    var label = previous.querySelector(':scope > span:last-child');
    if (label) label.textContent = resolvedLabel(previous.dataset.initialLabel || label.textContent);
  };

  Controller.prototype.schedule = function (delay) {
    var self = this;
    this.remaining = delay;
    this.startedAt = performance.now();
    clearTimeout(this.timer);
    this.timer = setTimeout(function () {
      self.timer = null;
      self.revealNext();
    }, delay);
  };

  Controller.prototype.revealNext = function () {
    if (this.state !== 'playing') return;
    this.resolvePreviousLoading();
    if (this.index >= this.steps.length) {
      this.complete();
      return;
    }
    var step = this.steps[this.index];
    step.classList.add('is-shown');
    if (step.hasAttribute('data-demo-loading')) step.classList.add('is-loading');
    this.index += 1;
    this.schedule(this.delayFor(step));
  };

  Controller.prototype.play = function () {
    if (this.state === 'complete') this.reset();
    if (activeController && activeController !== this && activeController.state === 'playing') {
      activeController.pause(true);
    }
    activeController = this;
    this.state = 'playing';
    this.autoPaused = false;
    this.root.classList.add('is-playing');
    this.root.classList.remove('is-paused', 'is-complete');
    this.setStatus('Playing example');
    this.updateControls();
    if (this.index === 0) this.revealNext();
    else this.schedule(this.remaining || 250);
  };

  Controller.prototype.pause = function (automatic) {
    if (this.state !== 'playing') return;
    if (this.timer) {
      this.remaining = Math.max(80, this.remaining - (performance.now() - this.startedAt));
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.state = 'paused';
    this.autoPaused = !!automatic;
    this.steps.forEach(function (step) { step.classList.remove('is-loading'); });
    this.root.classList.remove('is-playing');
    this.root.classList.add('is-paused');
    this.setStatus(automatic ? 'Paused off screen' : 'Paused');
    this.updateControls();
  };

  Controller.prototype.resume = function () {
    if (this.state !== 'paused') return;
    if (activeController && activeController !== this && activeController.state === 'playing') {
      activeController.pause(true);
    }
    activeController = this;
    this.state = 'playing';
    this.autoPaused = false;
    var previous = this.steps[this.index - 1];
    if (previous && previous.hasAttribute('data-demo-loading') && !previous.classList.contains('is-resolved')) {
      previous.classList.add('is-loading');
    }
    this.root.classList.add('is-playing');
    this.root.classList.remove('is-paused');
    this.setStatus('Playing example');
    this.updateControls();
    this.schedule(this.remaining || 250);
  };

  Controller.prototype.complete = function () {
    clearTimeout(this.timer);
    this.resolvePreviousLoading();
    this.state = 'complete';
    this.remaining = 0;
    this.root.classList.remove('is-playing', 'is-paused');
    this.root.classList.add('is-complete');
    this.setStatus('Example complete');
    this.updateControls();
    if (activeController === this) activeController = null;
  };

  roots.forEach(function (root) {
    var controller = new Controller(root);
    controllers.push(controller);
    if (reduceMotion) {
      root.classList.add('fd-reduced');
      controller.steps.forEach(function (step) {
        step.classList.add('is-shown');
        if (step.hasAttribute('data-demo-loading')) {
          step.classList.add('is-resolved');
          var label = step.querySelector(':scope > span:last-child');
          if (label) label.textContent = resolvedLabel(step.dataset.initialLabel || label.textContent);
        }
      });
      controller.state = 'complete';
      controller.setStatus('Complete example shown');
      controller.updateControls();
    }
  });

  if (reduceMotion) return;

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var controller = controllers.find(function (item) { return item.root === entry.target; });
        if (!controller) return;
        controller.ratio = entry.intersectionRatio;
        controller.inView = entry.isIntersecting && entry.intersectionRatio >= .25;
        if (!controller.inView && controller.state === 'playing') controller.pause(true);
      });
      if (document.hidden || (activeController && activeController.state === 'playing' && activeController.inView)) return;
      var candidate = controllers
        .filter(function (controller) {
          return controller.inView && (controller.state === 'idle' || (controller.state === 'paused' && controller.autoPaused && !controller.userPaused));
        })
        .sort(function (a, b) { return (b.ratio || 0) - (a.ratio || 0); })[0];
      if (!candidate) return;
      if (candidate.state === 'idle') candidate.play();
      else candidate.resume();
    }, { threshold: [0, .25, .45] });
    controllers.forEach(function (controller) { observer.observe(controller.root); });
  } else {
    controllers.forEach(function (controller) { controller.inView = true; controller.play(); });
  }

  document.addEventListener('visibilitychange', function () {
    controllers.forEach(function (controller) {
      if (document.hidden && controller.state === 'playing') controller.pause(true);
      else if (!document.hidden && controller.inView && controller.state === 'paused' && controller.autoPaused && !controller.userPaused) controller.resume();
    });
  });
})();
