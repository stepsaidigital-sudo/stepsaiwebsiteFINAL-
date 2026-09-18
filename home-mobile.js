/* Scale demonstrations, not the surrounding readable page. Zoom participates
   in layout, so scaled previews do not leave their desktop height behind. */
(function () {
  'use strict';
  var mobile = window.matchMedia('(max-width: 800px)');
  var previews = document.querySelectorAll('#inbox-teaser .dash-stage, #crm-teaser .dash-stage, #analytics-teaser .dash-stage, #workflows-teaser .wf-canvas-card');
  var simulation = document.querySelector('#workflows-teaser .wf-sim-btn');
  if (simulation) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'mobile-simulate';
    button.textContent = 'Run workflow simulation';
    button.addEventListener('click', function () { simulation.click(); });
    simulation.closest('.wf-canvas-card').after(button);
  }
  function resize() {
    previews.forEach(function (preview) {
      if (!mobile.matches) {
        preview.style.removeProperty('zoom');
        preview.classList.remove('mobile-desktop-preview');
        return;
      }
      preview.classList.add('mobile-desktop-preview');
      var parent = preview.parentElement;
      var styles = getComputedStyle(parent);
      var width = parent.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      preview.style.zoom = Math.min(1, width / 1100);
    });
  }
  var observer = new ResizeObserver(resize);
  previews.forEach(function (preview) { observer.observe(preview.parentElement); });
  mobile.addEventListener('change', resize);
  resize();
}());
