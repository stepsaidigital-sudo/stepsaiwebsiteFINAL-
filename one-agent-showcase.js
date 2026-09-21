/* =========================================================
   USE CASES / ONE AGENT SHOWCASE - INTERACTIVE BEHAVIORS
   ========================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Interactive Time Slot selection in Booking card
    var slotButtons = document.querySelectorAll('#one-agent .uc-slot-btn');
    slotButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        slotButtons.forEach(function (b) {
          b.classList.remove('uc-slot-btn--active');
        });
        btn.classList.add('uc-slot-btn--active');
      });
    });

    // 2. Interactive Add to Cart button feedback
    var addCartBtn = document.querySelector('#one-agent .uc-action-btn--blue');
    if (addCartBtn) {
      addCartBtn.addEventListener('click', function () {
        var originalText = addCartBtn.textContent;
        addCartBtn.textContent = 'Added! ✓';
        addCartBtn.style.backgroundColor = '#059669';
        setTimeout(function () {
          addCartBtn.textContent = originalText;
          addCartBtn.style.backgroundColor = '';
        }, 1800);
      });
    }

    // 3. Interactive Confirm Booking button feedback
    var confirmBookingBtn = document.querySelector('#one-agent .uc-confirm-btn');
    if (confirmBookingBtn) {
      confirmBookingBtn.addEventListener('click', function () {
        var originalText = confirmBookingBtn.textContent;
        confirmBookingBtn.textContent = 'Confirmed! ✓';
        confirmBookingBtn.style.backgroundColor = '#059669';
        setTimeout(function () {
          confirmBookingBtn.textContent = originalText;
          confirmBookingBtn.style.backgroundColor = '';
        }, 1800);
      });
    }
  });
})();
