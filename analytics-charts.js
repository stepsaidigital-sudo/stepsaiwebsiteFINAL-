/* ============================================================
   ANALYTICS-CHARTS.JS — renders the PDASH (pixel-matched replica
   of the real in-app Analytics dashboard) on analytics.html, plus
   the per-agent performance-table filter. The homepage teaser's
   mini PDASH is pure static HTML (no JS needed for that one).

   Data: the 3 KPI numbers (41 chats / 110 messages / 1.5s), the
   channel split (40 Web / 1 WhatsApp) and the geo numbers (38 IN /
   2 US, Kochi 27 / Hyderabad 5) are the literal real numbers from
   the real dashboard screenshots (Aug 25–31, 2026). The day-by-day
   chart shape and the hour-by-day heatmap are a labelled
   illustrative reconstruction of those same screenshots' shapes —
   same "real totals, illustrative shape" convention as the rest of
   this page.
   ============================================================ */
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Tabs: Performance / Geography ---------------- */
  var tabs = document.querySelectorAll('.pdash-tab[data-pdash-tab]');
  var panels = document.querySelectorAll('.pdash-panel[data-pdash-panel]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-pdash-tab');
      tabs.forEach(function (t) { t.classList.toggle('is-active', t === tab); });
      panels.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-pdash-panel') === target); });
    });
  });

  /* ---------------- Chats & Messages Over Time (dual area+line) ---------------- */
  var DAYS = ['Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28', 'Aug 29', 'Aug 30', 'Aug 31'];
  var MESSAGES = [1, 24, 59, 8, 4, 13, 7, 3];
  var CHATS = [0, 7, 16, 3, 2, 5, 3, 1];

  // Catmull-Rom -> cubic Bezier smoothing, so the curve reads as an
  // organic hand-drawn line rather than sharp straight segments.
  function smoothPath(pts) {
    if (pts.length < 3) return 'M' + pts.map(function (p) { return p[0] + ',' + p[1]; }).join('L');
    var d = 'M' + pts[0][0] + ',' + pts[0][1];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i === 0 ? 0 : i - 1], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];
      var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += ' C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' + p2[0] + ',' + p2[1];
    }
    return d;
  }

  function renderChart() {
    var svg = document.getElementById('pdashChart');
    if (!svg) return;
    var w = 760, h = 220, pad = 8, base = h - pad;
    var max = 62; // fixed scale so the 0/15/30/45/60 gridlines line up like the real screenshot
    var stepX = (w - pad * 2) / (DAYS.length - 1);
    function toPts(series) {
      return series.map(function (v, i) {
        var x = pad + i * stepX;
        var y = base - (v / max) * (base - pad);
        return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
      });
    }
    var msgPts = toPts(MESSAGES), chatPts = toPts(CHATS);
    var msgLine = smoothPath(msgPts), chatLine = smoothPath(chatPts);
    var msgArea = msgLine + ' L' + msgPts[msgPts.length - 1][0] + ',' + base + ' L' + msgPts[0][0] + ',' + base + ' Z';
    var chatArea = chatLine + ' L' + chatPts[chatPts.length - 1][0] + ',' + base + ' L' + chatPts[0][0] + ',' + base + ' Z';

    var gridLines = '', gridLabels = '';
    var steps = [0, 15, 30, 45, 60];
    steps.forEach(function (v) {
      var y = base - (v / max) * (base - pad);
      gridLines += '<line class="pdash-grid-line" x1="' + pad + '" y1="' + y.toFixed(1) + '" x2="' + (w - pad) + '" y2="' + y.toFixed(1) + '"/>';
      gridLabels += '<text class="pdash-axis-label" x="0" y="' + (y + 3).toFixed(1) + '">' + v + '</text>';
    });
    var xLabels = '';
    DAYS.forEach(function (label, i) {
      xLabels += '<text class="pdash-axis-label" text-anchor="middle" x="' + msgPts[i][0] + '" y="' + (h + 2) + '">' + label + '</text>';
    });

    svg.setAttribute('viewBox', '-34 0 ' + (w + 34) + ' ' + (h + 16));
    svg.innerHTML =
      '<g>' + gridLines + gridLabels + '</g>' +
      '<path class="pdash-area pdash-area-orange" d="' + msgArea + '"/>' +
      '<path class="pdash-area pdash-area-purple" d="' + chatArea + '"/>' +
      '<path class="pdash-line pdash-line-orange" id="pdashLineMsg" d="' + msgLine + '"/>' +
      '<path class="pdash-line pdash-line-purple" id="pdashLineChat" d="' + chatLine + '"/>' +
      '<g>' + xLabels + '</g>';

    ['pdashLineMsg', 'pdashLineChat'].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (reduceMotion) { el.style.strokeDasharray = 'none'; return; }
      var len = el.getTotalLength();
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
      el.getBoundingClientRect();
      el.style.transition = 'stroke-dashoffset 1200ms cubic-bezier(.16,1,.3,1)';
      requestAnimationFrame(function () { el.style.strokeDashoffset = 0; });
    });
  }

  /* ---------------- Channel Breakdown (gauge-style donut) ---------------- */
  function renderDonut() {
    var svg = document.getElementById('pdashDonut');
    if (!svg) return;
    var cx = 69, cy = 69, r = 54, sw = 15;
    var circumference = 2 * Math.PI * r;
    var gapDeg = 62; // top gap, matching the real dashboard's gauge-style ring
    var arcDeg = 360 - gapDeg;
    var arcLen = circumference * (arcDeg / 360);
    var webPct = 0.976, waPct = 0.024;
    var webLen = arcLen * webPct, waLen = arcLen * waPct;
    var rotate = 90 + gapDeg / 2; // center the gap at the top

    svg.setAttribute('viewBox', '0 0 138 138');
    svg.innerHTML =
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#20232c" stroke-width="' + sw + '" stroke-linecap="round" stroke-dasharray="' + arcLen.toFixed(1) + ' ' + circumference.toFixed(1) + '" transform="rotate(' + rotate + ' ' + cx + ' ' + cy + ')"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="var(--pd-green)" stroke-width="' + sw + '" stroke-linecap="round" stroke-dasharray="' + waLen.toFixed(1) + ' ' + circumference.toFixed(1) + '" transform="rotate(' + rotate + ' ' + cx + ' ' + cy + ')"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="var(--pd-purple)" stroke-width="' + sw + '" stroke-linecap="round" stroke-dasharray="' + webLen.toFixed(1) + ' ' + circumference.toFixed(1) + '" stroke-dashoffset="-' + waLen.toFixed(1) + '" transform="rotate(' + rotate + ' ' + cx + ' ' + cy + ')"/>';
  }

  /* ---------------- Activity Heatmap (hour x day-of-week) ---------------- */
  // Sparse map of lit cells, illustrative shape traced from the real
  // screenshot: {day: 0=Mon..6=Sun, hour: 0-23, level: 1-4}.
  var HEAT_CELLS = [
    { day: 2, hour: 4, level: 2 },
    { day: 1, hour: 10, level: 2 }, { day: 1, hour: 11, level: 3 }, { day: 1, hour: 12, level: 3 },
    { day: 1, hour: 14, level: 2 }, { day: 1, hour: 15, level: 3 }, { day: 1, hour: 16, level: 3 },
    { day: 2, hour: 11, level: 2 }, { day: 2, hour: 12, level: 3 }, { day: 2, hour: 13, level: 4 },
    { day: 2, hour: 14, level: 3 }, { day: 2, hour: 15, level: 2 }, { day: 2, hour: 16, level: 2 },
    { day: 3, hour: 12, level: 2 },
    { day: 5, hour: 15, level: 2 },
    { day: 6, hour: 12, level: 2 },
  ];
  function renderHeatmap() {
    var grid = document.getElementById('pdashHeatGrid');
    var hours = document.getElementById('pdashHeatHours');
    if (!grid) return;
    var dayNames = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    var levelColor = { 1: 'var(--pd-heat-1)', 2: 'var(--pd-heat-2)', 3: 'var(--pd-heat-3)', 4: 'var(--pd-heat-4)' };
    var lookup = {};
    HEAT_CELLS.forEach(function (c) { lookup[c.day + '-' + c.hour] = c.level; });

    var html = '';
    for (var d = 0; d < 7; d++) {
      html += '<div class="pdash-heatmap-day">' + dayNames[d] + '</div>';
      for (var h = 0; h < 24; h++) {
        var level = lookup[d + '-' + h];
        var bg = level ? levelColor[level] : 'var(--pd-heat-0)';
        html += '<div class="pdash-heatmap-cell" style="background:' + bg + '" title="' + dayNames[d] + ' ' + (h % 12 === 0 ? 12 : h % 12) + (h < 12 ? 'AM' : 'PM') + '"></div>';
      }
    }
    grid.innerHTML = html;

    if (hours) {
      var hHtml = '<div></div>';
      for (var i = 0; i < 24; i++) {
        var label = i % 3 === 0 ? ((i % 12 === 0 ? 12 : i % 12) + (i < 12 ? 'AM' : 'PM')) : '';
        hHtml += '<div class="pdash-heatmap-hour">' + label + '</div>';
      }
      hours.innerHTML = hHtml;
    }
  }

  renderChart();
  renderDonut();
  renderHeatmap();

  /* ---------------- Per-agent performance-table filter (unchanged) ---------------- */
  var agentSelect = document.getElementById('anAgentFilter');
  if (agentSelect) {
    agentSelect.addEventListener('change', function () {
      var val = agentSelect.value;
      document.querySelectorAll('.an-perf-table tbody tr').forEach(function (row) {
        row.classList.toggle('is-dimmed', val !== 'all' && row.getAttribute('data-agent') !== val);
      });
    });
  }
})();
