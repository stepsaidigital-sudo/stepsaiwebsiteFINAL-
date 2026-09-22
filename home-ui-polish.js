(function () {
  'use strict';

  function buildUseCaseTabs() {
    var section = document.querySelector('#one-agent');
    if (!section || section.querySelector('.home-usecase-tabs')) return;
    var hero = section.querySelector('.uc-hero');
    var cards = Array.from(section.querySelectorAll('.uc-card'));
    if (!hero || !cards.length) return;

    var tabs = document.createElement('div');
    tabs.className = 'home-usecase-tabs';
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Front desk jobs');

    cards.forEach(function (card, index) {
      var title = card.querySelector('.uc-card-title');
      var label = title ? title.textContent.trim() : 'Use case ' + (index + 1);
      var id = 'home-usecase-panel-' + index;
      var button = document.createElement('button');
      card.id = card.id || id;
      button.type = 'button';
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', card.id);
      button.id = 'home-usecase-tab-' + index;
      button.setAttribute('aria-selected', String(index === 0));
      button.tabIndex = index === 0 ? 0 : -1;
      button.textContent = label;
      card.classList.toggle('is-mobile-active', index === 0);
      card.setAttribute('role', 'tabpanel');
      card.setAttribute('aria-labelledby', button.id);
      card.hidden = index !== 0 && window.matchMedia('(max-width: 800px)').matches;

      button.addEventListener('click', function () {
        cards.forEach(function (candidate, candidateIndex) {
          var active = candidateIndex === index;
          candidate.classList.toggle('is-mobile-active', active);
          candidate.hidden = !active;
          tabs.children[candidateIndex].setAttribute('aria-selected', String(active));
          tabs.children[candidateIndex].tabIndex = active ? 0 : -1;
        });
      });

      button.addEventListener('keydown', function (event) {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        var next = event.key === 'Home' ? 0 : event.key === 'End' ? cards.length - 1 : event.key === 'ArrowRight' ? (index + 1) % cards.length : (index - 1 + cards.length) % cards.length;
        tabs.children[next].click();
        tabs.children[next].focus();
      });
      tabs.appendChild(button);
    });

    hero.after(tabs);

    var mobileQuery = window.matchMedia('(max-width: 800px)');
    function syncPanels() {
      cards.forEach(function (card, index) {
        card.hidden = mobileQuery.matches ? !card.classList.contains('is-mobile-active') : false;
      });
    }
    if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', syncPanels);
    syncPanels();
  }

  function improveChannelTabs() {
    var tabs = Array.from(document.querySelectorAll('#deploy-everywhere .ch-item'));
    var panel = document.querySelector('#deploy-everywhere .ch-panel');
    tabs.forEach(function (tab) {
      var index = tabs.indexOf(tab);
      tab.id = tab.id || 'home-channel-tab-' + index;
      tab.setAttribute('aria-controls', panel && panel.id ? panel.id : 'chPanel');
      tab.setAttribute('aria-selected', String(tab.classList.contains('active')));
      tab.tabIndex = tab.classList.contains('active') ? 0 : -1;
      tab.addEventListener('click', function () {
        requestAnimationFrame(function () {
          tabs.forEach(function (candidate) {
            var active = candidate.classList.contains('active');
            candidate.setAttribute('aria-selected', String(active));
            candidate.tabIndex = active ? 0 : -1;
          });
          if (panel) panel.setAttribute('aria-labelledby', tab.id);
        });
      });
      tab.addEventListener('keydown', function (event) {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        var next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (event.key === 'ArrowRight' || event.key === 'ArrowDown') ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
        tabs[next].click();
        tabs[next].focus();
      });
    });
    if (panel) {
      panel.setAttribute('role', 'tabpanel');
      var active = tabs.find(function (tab) { return tab.classList.contains('active'); });
      if (active) panel.setAttribute('aria-labelledby', active.id);
    }
  }

  function init() {
    buildUseCaseTabs();
    improveChannelTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
}());
