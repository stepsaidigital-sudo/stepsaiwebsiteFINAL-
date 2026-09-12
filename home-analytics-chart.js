/* ============================================================
   HOME-ANALYTICS-CHART.JS — Chart.js line + donut for the homepage's
   Analytics dashboard teaser (#analytics-teaser). Data is the real
   numbers from the approved analytics dashboard reference (WearBliss,
   Sep 2–10 2026): ₹41,800 assisted revenue, 612 conversations, the
   62/26/10/2% channel split. Kept separate from analytics-charts.js,
   which renders the hand-built SVG PDASH on analytics.html and does
   not use a chart library.
   ============================================================ */
(function () {
  var lineCanvas = document.getElementById('homeAnalyticsLine');
  var donutCanvas = document.getElementById('homeAnalyticsDonut');
  if (!lineCanvas || !donutCanvas || typeof Chart === 'undefined') return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var LINE_LABELS = ['Sep 2', 'Sep 3', 'Sep 4', 'Sep 5', 'Sep 6', 'Sep 7', 'Sep 8', 'Sep 9', 'Sep 10'];
  var CHATS = [0, 6, 8, 2, 0, 8, 33, 19, 21];
  var MESSAGES = [0, 16, 36, 6, 0, 126, 95, 58, 120];

  var DONUT_DATA = [
    { name: 'Website Widget', value: 25900, color: '#2563eb' },
    { name: 'WhatsApp', value: 10900, color: '#25d366' },
    { name: 'Instagram', value: 4200, color: '#e1306c' },
    { name: 'Messenger', value: 800, color: '#0084ff' }
  ];

  Chart.defaults.color = '#64748b';
  Chart.defaults.font.family = "'Inter', sans-serif";

  var built = false;
  function build() {
    if (built) return;
    built = true;

    var ctx = lineCanvas.getContext('2d');
    var chatsFill = ctx.createLinearGradient(0, 0, 0, 210);
    chatsFill.addColorStop(0, 'rgba(37,99,235,.22)');
    chatsFill.addColorStop(1, 'rgba(37,99,235,0)');
    var msgFill = ctx.createLinearGradient(0, 0, 0, 210);
    msgFill.addColorStop(0, 'rgba(16,185,129,.18)');
    msgFill.addColorStop(1, 'rgba(16,185,129,0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: LINE_LABELS,
        datasets: [
          {
            label: 'Chats',
            data: CHATS,
            borderColor: '#2563eb',
            backgroundColor: chatsFill,
            borderWidth: 2.5,
            fill: true,
            tension: .4,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#2563eb',
            pointBorderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5
          },
          {
            label: 'Messages',
            data: MESSAGES,
            borderColor: '#10b981',
            backgroundColor: msgFill,
            borderWidth: 2,
            fill: true,
            tension: .4,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#10b981',
            pointBorderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        animation: reduceMotion ? false : { duration: 900, easing: 'easeOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#0f172a',
            bodyColor: '#334155',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            padding: 10,
            boxPadding: 5,
            usePointStyle: true
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 11 } } },
          y: {
            grid: { color: '#f1f5f9', borderDash: [4, 4] },
            ticks: { font: { size: 11 } },
            suggestedMin: 0
          }
        }
      }
    });

    new Chart(donutCanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: DONUT_DATA.map(function (d) { return d.name; }),
        datasets: [{
          data: DONUT_DATA.map(function (d) { return d.value; }),
          backgroundColor: DONUT_DATA.map(function (d) { return d.color; }),
          borderColor: '#ffffff',
          borderWidth: 2,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '74%',
        animation: reduceMotion ? false : { animateScale: true, animateRotate: true, duration: 1100, easing: 'easeOutQuart' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#fff',
            titleColor: '#0f172a',
            bodyColor: '#334155',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            callbacks: {
              label: function (item) { return ' ' + item.label + ': ₹' + (item.raw / 1000).toFixed(1) + 'K'; }
            }
          }
        }
      }
    });
  }

  var section = document.getElementById('analytics-teaser');
  if (section && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { build(); io.disconnect(); }
      });
    }, { threshold: .2 });
    io.observe(section);
  } else {
    build();
  }
})();
