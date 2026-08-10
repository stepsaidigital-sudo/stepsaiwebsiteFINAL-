/* ============================================================
   STEPSAI — SHARED "CONTENT PAGE" SCRIPT
   Used by Solutions, Partner, and Product pages. Nav scroll/burger/
   dropdowns live in the shared nav.js (loaded before this file).
   This file only has the one thing those pages need beyond that:
   the FAQ accordion — queries by class, not a single id, so a page
   can have more than one .faq-grid if it ever needs to.
   ============================================================ */
(function () {
  'use strict';

  Array.prototype.slice.call(document.querySelectorAll('.faq-grid')).forEach(function (grid) {
    var items = Array.prototype.slice.call(grid.querySelectorAll('.faq-item'));
    items.forEach(function (item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;

      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');
        items.forEach(function (other) {
          other.classList.remove('is-open');
          var otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0px';
        });
        if (!isOpen) {
          item.classList.add('is-open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  });
})();
