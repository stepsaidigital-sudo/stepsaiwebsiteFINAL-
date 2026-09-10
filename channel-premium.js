/* Gates the bold direction's ambient drift to elements currently on
   screen -- same pattern as the homepage's .hero-in-view toggle, so an
   off-screen animation doesn't run for nothing. No-ops entirely for
   reduced-motion or on pages with no .glass-stage--bold element (i.e.
   the restrained-direction mockups). */
(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var stages = document.querySelectorAll('.glass-stage--bold');
  if (reduceMotion || !stages.length || !('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  }, { threshold: .2 });

  stages.forEach(function (stage) { io.observe(stage); });
})();
