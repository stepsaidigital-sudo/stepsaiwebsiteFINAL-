import { useEffect, type RefObject } from 'react';

/**
 * Ports analytics-charts.js — the PDASH (pixel-matched replica of the real
 * in-app Analytics dashboard) on analytics.html.
 *
 * Data: the 3 KPI numbers (41 chats / 110 messages / 1.5s), the channel split
 * (40 Web / 1 WhatsApp) and the geo numbers (38 IN / 2 US, Kochi 27 /
 * Hyderabad 5) are the literal real numbers from the real dashboard
 * screenshots (Aug 25-31, 2026). The day-by-day chart shape and the
 * hour-by-day heatmap are a labelled illustrative reconstruction of those same
 * screenshots' shapes — same "real totals, illustrative shape" convention as
 * the rest of this page.
 *
 * The original built the three visuals via innerHTML; here the geometry is
 * computed once at module scope and rendered declaratively. Only the line-draw
 * reveal stays imperative (it needs getTotalLength), as usePdashLineDraw.
 */

type Point = [number, number];

/* ---------------- Chats & Messages Over Time (dual area+line) ---------------- */

export const PDASH_DAYS = ['Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28', 'Aug 29', 'Aug 30', 'Aug 31'];
const MESSAGES = [1, 24, 59, 8, 4, 13, 7, 3];
const CHATS = [0, 7, 16, 3, 2, 5, 3, 1];

const W = 760;
const H = 220;
const PAD = 8;
const BASE = H - PAD;
const MAX = 62; // fixed scale so the 0/15/30/45/60 gridlines line up like the real screenshot
const STEP_X = (W - PAD * 2) / (PDASH_DAYS.length - 1);

// Catmull-Rom -> cubic Bezier smoothing, so the curve reads as an organic
// hand-drawn line rather than sharp straight segments.
function smoothPath(pts: Point[]): string {
  if (pts.length < 3) return 'M' + pts.map((p) => p[0] + ',' + p[1]).join('L');
  let d = 'M' + pts[0][0] + ',' + pts[0][1];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i === 0 ? 0 : i - 1];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ' C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' + p2[0] + ',' + p2[1];
  }
  return d;
}

function toPoints(series: number[]): Point[] {
  return series.map((v, i) => {
    const x = PAD + i * STEP_X;
    const y = BASE - (v / MAX) * (BASE - PAD);
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  });
}

function closeArea(line: string, pts: Point[]): string {
  return line + ' L' + pts[pts.length - 1][0] + ',' + BASE + ' L' + pts[0][0] + ',' + BASE + ' Z';
}

const msgPts = toPoints(MESSAGES);
const chatPts = toPoints(CHATS);
const msgLine = smoothPath(msgPts);
const chatLine = smoothPath(chatPts);

export const PDASH_CHART = {
  viewBox: `-34 0 ${W + 34} ${H + 16}`,
  pad: PAD,
  right: W - PAD,
  xLabelY: H + 2,
  msgLine,
  chatLine,
  msgArea: closeArea(msgLine, msgPts),
  chatArea: closeArea(chatLine, chatPts),
  xLabels: PDASH_DAYS.map((label, i) => ({ label, x: msgPts[i][0] })),
  gridLines: [0, 15, 30, 45, 60].map((value) => ({ value, y: BASE - (value / MAX) * (BASE - PAD) })),
};

/** Replays the original's stroke-dashoffset line reveal on the two chart lines. */
export function usePdashLineDraw(refs: readonly RefObject<SVGPathElement | null>[]) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    refs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      if (reduceMotion) {
        el.style.strokeDasharray = 'none';
        return;
      }
      const len = el.getTotalLength();
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
      el.getBoundingClientRect();
      el.style.transition = 'stroke-dashoffset 1200ms cubic-bezier(.16,1,.3,1)';
      requestAnimationFrame(() => {
        el.style.strokeDashoffset = '0';
      });
    });
  }, []);
}

/* ---------------- Channel Breakdown (gauge-style donut) ---------------- */

const DONUT_R = 54;
const CIRCUMFERENCE = 2 * Math.PI * DONUT_R;
const GAP_DEG = 62; // top gap, matching the real dashboard's gauge-style ring
const ARC_LEN = CIRCUMFERENCE * ((360 - GAP_DEG) / 360);

export const PDASH_DONUT = {
  cx: 69,
  cy: 69,
  r: DONUT_R,
  strokeWidth: 15,
  circumference: CIRCUMFERENCE,
  arcLen: ARC_LEN,
  webLen: ARC_LEN * 0.976,
  waLen: ARC_LEN * 0.024,
  // center the gap at the top
  transform: `rotate(${90 + GAP_DEG / 2} 69 69)`,
};

/* ---------------- Activity Heatmap (hour x day-of-week) ---------------- */

// Sparse map of lit cells, illustrative shape traced from the real screenshot:
// {day: 0=Mon..6=Sun, hour: 0-23, level: 1-4}.
const HEAT_CELLS = [
  { day: 2, hour: 4, level: 2 },
  { day: 1, hour: 10, level: 2 }, { day: 1, hour: 11, level: 3 }, { day: 1, hour: 12, level: 3 },
  { day: 1, hour: 14, level: 2 }, { day: 1, hour: 15, level: 3 }, { day: 1, hour: 16, level: 3 },
  { day: 2, hour: 11, level: 2 }, { day: 2, hour: 12, level: 3 }, { day: 2, hour: 13, level: 4 },
  { day: 2, hour: 14, level: 3 }, { day: 2, hour: 15, level: 2 }, { day: 2, hour: 16, level: 2 },
  { day: 3, hour: 12, level: 2 },
  { day: 5, hour: 15, level: 2 },
  { day: 6, hour: 12, level: 2 },
];

const HEAT_LOOKUP = new Map(HEAT_CELLS.map((c) => [`${c.day}-${c.hour}`, c.level]));

export const PDASH_HEAT_DAYS = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
export const PDASH_HOURS = Array.from({ length: 24 }, (_, i) => i);

export function pdashHeatBackground(day: number, hour: number): string {
  const level = HEAT_LOOKUP.get(`${day}-${hour}`);
  return level ? `var(--pd-heat-${level})` : 'var(--pd-heat-0)';
}

export function pdashHourLabel(hour: number): string {
  return `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? 'AM' : 'PM'}`;
}
