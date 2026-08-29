/* ============================================================
   ANALYTICS-CHARTS.JS — volume chart, channel bars, heatmap and
   the filter bar that drives them, for analytics.html only.
   All data below is the same illustrative "example account"
   already labelled on this page (see .analytics-note) — the four
   headline numbers (412 / 358 / 24 / 30) are the real published
   ones; day-by-day and hour-by-hour shapes are a deterministic
   formula, not literal history, so they never change between
   visits and never claim to be something they're not.
   ============================================================ */
(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Data ---------------- */

  // Deterministic daily-conversation shape: gentle upward trend +
  // weekly seasonality (Sat/Sun lighter) + a small smooth wobble.
  // No Math.random — same numbers every time this page loads.
  function volumeSeries(days) {
    var weeklyMul = [1, 1.08, 1.1, 1.05, 1.12, 0.78, 0.7]; // Mon..Sun
    var out = [];
    for (var i = 0; i < days; i++) {
      var t = i / days;
      var base = 8 + t * 7; // 8/day -> 15/day drift across the range
      var wobble = Math.sin(i / 3.2) * 1.6;
      var dow = weeklyMul[i % 7];
      out.push(Math.max(1, Math.round((base + wobble) * dow)));
    }
    return out;
  }
  var SERIES = { 7: volumeSeries(7), 30: volumeSeries(30), 90: volumeSeries(90) };

  var CHANNELS = [
    { name: 'Website', pct: 46, color: 'var(--viz-cat-1)' },
    { name: 'WhatsApp', pct: 31, color: 'var(--viz-cat-2)' },
    { name: 'Instagram', pct: 15, color: 'var(--viz-cat-3)' },
    { name: 'Standalone Page', pct: 8, color: 'var(--viz-cat-4)' },
  ];

  // Hour-of-day curve (0-23) x day-of-week multiplier -> 7x24 heatmap.
  function heatmapData() {
    var hourCurve = [2,1,1,1,1,2,4,7,10,12,13,15,17,15,13,12,13,16,18,17,14,10,6,3];
    var dayMul = [1, 1.05, 1.1, 1.02, 1.15, 0.75, 0.6]; // Mon..Sun
    var grid = [];
    for (var d = 0; d < 7; d++) {
      var row = [];
      for (var h = 0; h < 24; h++) row.push(Math.round(hourCurve[h] * dayMul[d]));
      grid.push(row);
    }
    return grid;
  }

  /* ---------------- Filter bar ---------------- */
  var rangePills = document.querySelectorAll('.an-filter-pill[data-range]');
  var agentSelect = document.getElementById('anAgentFilter');

  rangePills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      rangePills.forEach(function (p) { p.classList.remove('is-active'); });
      pill.classList.add('is-active');
      renderVolumeChart(SERIES[pill.getAttribute('data-range')]);
    });
  });

  if (agentSelect) {
    agentSelect.addEventListener('change', function () {
      var val = agentSelect.value;
      document.querySelectorAll('.an-perf-table tbody tr').forEach(function (row) {
        row.classList.toggle('is-dimmed', val !== 'all' && row.getAttribute('data-agent') !== val);
      });
    });
  }

  /* ---------------- Volume chart (hand-built SVG, no library) ---------------- */
  var svg = document.getElementById('anVolumeChart');
  var tooltip = document.getElementById('anChartTooltip');
  var chartData = [];

  function renderVolumeChart(data) {
    if (!svg) return;
    chartData = data;
    var w = 600, h = 220, pad = 8;
    var max = Math.max.apply(null, data) * 1.15;
    var stepX = (w - pad * 2) / (data.length - 1);
    var pts = data.map(function (v, i) {
      var x = pad + i * stepX;
      var y = h - pad - (v / max) * (h - pad * 2);
      return [x, y];
    });

    var linePath = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    var areaPath = linePath + ' L' + pts[pts.length - 1][0].toFixed(1) + ',' + (h - pad) + ' L' + pts[0][0].toFixed(1) + ',' + (h - pad) + ' Z';

    var gridLines = '';
    for (var g = 1; g <= 3; g++) {
      var gy = pad + (g * (h - pad * 2)) / 4;
      gridLines += '<line class="an-chart-grid-line" x1="' + pad + '" y1="' + gy + '" x2="' + (w - pad) + '" y2="' + gy + '"/>';
    }

    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    svg.innerHTML =
      '<defs><linearGradient id="anAreaGradient" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="var(--accent)" stop-opacity="0.16"/>' +
      '<stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>' +
      gridLines +
      '<path class="an-chart-area" d="' + areaPath + '"/>' +
      '<path class="an-chart-line" id="anChartLinePath" d="' + linePath + '"/>' +
      '<line class="an-chart-crosshair" id="anCrosshair" x1="0" y1="' + pad + '" x2="0" y2="' + (h - pad) + '"/>' +
      '<circle class="an-chart-dot" id="anChartDot" r="4"/>' +
      '<rect id="anChartHitArea" x="0" y="0" width="' + w + '" height="' + h + '" fill="transparent"/>';

    var linePathEl = document.getElementById('anChartLinePath');
    if (reduceMotion) {
      linePathEl.style.strokeDasharray = 'none';
    } else {
      var len = linePathEl.getTotalLength();
      linePathEl.style.strokeDasharray = len;
      linePathEl.style.strokeDashoffset = len;
      linePathEl.getBoundingClientRect(); // force layout before transition
      linePathEl.style.transition = 'stroke-dashoffset 1100ms var(--ease-out, ease)';
      requestAnimationFrame(function () { linePathEl.style.strokeDashoffset = 0; });
    }

    wireChartHover(pts, data, w);
  }

  function wireChartHover(pts, data, w) {
    var hit = document.getElementById('anChartHitArea');
    var dot = document.getElementById('anChartDot');
    var crosshair = document.getElementById('anCrosshair');
    if (!hit) return;
    hit.addEventListener('mousemove', function (e) {
      var rect = svg.getBoundingClientRect();
      var xRatio = (e.clientX - rect.left) / rect.width;
      var idx = Math.max(0, Math.min(data.length - 1, Math.round(xRatio * (data.length - 1))));
      var p = pts[idx];
      dot.setAttribute('cx', p[0]); dot.setAttribute('cy', p[1]); dot.style.opacity = 1;
      crosshair.setAttribute('x1', p[0]); crosshair.setAttribute('x2', p[0]); crosshair.style.opacity = 1;
      if (tooltip) {
        var dayLabel = data.length <= 7 ? ('Day ' + (idx + 1)) : ('Day ' + (idx + 1) + ' of ' + data.length);
        tooltip.innerHTML = '<b>' + data[idx] + '</b> conversations &middot; ' + dayLabel;
        var leftPct = (p[0] / w) * 100;
        tooltip.style.left = leftPct + '%';
        tooltip.style.top = (p[1] / 220) * 100 + '%';
        tooltip.style.opacity = 1;
      }
    });
    hit.addEventListener('mouseleave', function () {
      dot.style.opacity = 0; crosshair.style.opacity = 0;
      if (tooltip) tooltip.style.opacity = 0;
    });
  }

  if (svg) renderVolumeChart(SERIES[30]);

  /* ---------------- Channel bars (animate in on scroll) ---------------- */
  var channelList = document.getElementById('anChannelList');
  if (channelList) {
    channelList.innerHTML = CHANNELS.map(function (c) {
      return '<div class="an-channel-row">' +
        '<span class="an-channel-name"><span class="an-channel-swatch" style="background:' + c.color + '"></span>' + c.name + '</span>' +
        '<span class="an-channel-track"><span class="an-channel-fill" data-pct="' + c.pct + '" style="background:' + c.color + '"></span></span>' +
        '<span class="an-channel-pct">' + c.pct + '%</span></div>';
    }).join('');
  }

  /* ---------------- Heatmap ---------------- */
  var heatmapEl = document.getElementById('anHeatmap');
  if (heatmapEl) {
    var grid = heatmapData();
    var flat = grid.reduce(function (a, r) { return a.concat(r); }, []);
    var max = Math.max.apply(null, flat);
    var dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var seqSteps = ['var(--viz-seq-100)', 'var(--viz-seq-200)', 'var(--viz-seq-300)', 'var(--viz-seq-450)', 'var(--viz-seq-550)', 'var(--viz-seq-700)'];

    var html = '<div></div>';
    for (var h = 0; h < 24; h++) {
      html += '<div class="an-heatmap-hour-label">' + (h % 3 === 0 ? h : '') + '</div>';
    }
    grid.forEach(function (row, d) {
      html += '<div class="an-heatmap-day-label">' + dayNames[d] + '</div>';
      row.forEach(function (v, h) {
        var ratio = v / max;
        var step = seqSteps[Math.min(seqSteps.length - 1, Math.floor(ratio * seqSteps.length))];
        html += '<div class="an-heatmap-cell" style="background:' + step + '" data-day="' + dayNames[d] + '" data-hour="' + h + '" data-value="' + v + '" title="' + dayNames[d] + ' ' + h + ':00 &mdash; ' + v + ' conversations"></div>';
      });
    });
    heatmapEl.innerHTML = html;
  }

  /* ---------------- Scroll-reveal for bars + heatmap (shared observer) ---------------- */
  if ('IntersectionObserver' in window) {
    var barsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.an-channel-fill').forEach(function (fill, i) {
          setTimeout(function () { fill.style.width = fill.getAttribute('data-pct') + '%'; }, reduceMotion ? 0 : i * 90);
        });
        barsObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    if (channelList) barsObserver.observe(channelList);

    var heatObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var cells = entry.target.querySelectorAll('.an-heatmap-cell');
        cells.forEach(function (cell, i) {
          setTimeout(function () { cell.classList.add('is-in'); }, reduceMotion ? 0 : Math.min(900, i * 4));
        });
        heatObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15 });
    if (heatmapEl) heatObserver.observe(heatmapEl);
  } else {
    if (channelList) channelList.querySelectorAll('.an-channel-fill').forEach(function (f) { f.style.width = f.getAttribute('data-pct') + '%'; });
    if (heatmapEl) heatmapEl.querySelectorAll('.an-heatmap-cell').forEach(function (c) { c.classList.add('is-in'); });
  }
})();
