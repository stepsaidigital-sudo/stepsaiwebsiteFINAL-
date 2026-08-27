# Sample 2 — Design Record

Standalone alternate homepage. Sample 1 (`index.html` etc. at repo root) is untouched.

**Concept:** "The agent's own log." StepsAI's whole pitch is that it acted while you weren't watching — cart updated, order tracked, lead captured. Every section is styled as terminal/log output because that's a literal rendering of the product, not a decorative skin. Validated against `ui-ux-pro-max`'s design-system search (independently suggested dark navy + green "code dark, run green" + monospace — same instinct).

**Palette**
- `--bg`: `#0B0F17` (dark navy-black)
- `--surface`: `#121826`
- `--border`: `#232B3B`
- `--text`: `#F1F4F9`
- `--text-muted`: `#8B93A6`
- `--accent`: `#39E6A6` (phosphor green — cursor blink + primary CTA only, never decorative)
- `--accent-ink`: `#04160F` (text on accent-green surfaces, for contrast)

**Type**
- Display/headings: Hanken Grotesk
- Body: Hanken Grotesk
- Mono (kickers, labels, log lines, stat digits, code-styled UI): Space Mono

**Motion:** restrained, CSS-only. Scroll-reveal (fade + 16px rise, 420ms, `cubic-bezier(.16,1,.3,1)`), cursor-blink keyframe, hover-only color/border transitions (150–250ms). Full `prefers-reduced-motion` fallback (motion disabled, opacity-only reveal).

**Sections (content source: `StepsAI Website Content — RECONCILED.md`, homepage)**

| # | Section | Layout |
|---|---|---|
| 1 | Nav | Dark bar, mono links, hairline bottom border |
| 2 | Hero | Split Terminal — copy left, live timestamped action-log right |
| 3 | What It Does | 3 spec-cards (Sells/Supports/Captures), each ending `→ outcome` |
| 4 | Setup | 4-step CLI pipeline `teach → style → connect → go_live` |
| 5 | Channels & Inbox | Tab list driving one conversation panel |
| 6 | Sales & Cart Recovery | Horizontal flow diagram with state labels |
| 7 | Support & Ticketing | Two-column diff view (`+` resolved / `-` escalated) |
| 8 | Analytics | 3 stat tiles, tabular-nums, sparkline, honesty line as code comment |
| 9 | Integrations | `ls integrations/` directory-listing grid |
| 10 | How We Compare | Kept per FINAL doc instruction — `[x]`/`[ ]` checkmark styling |
| 11 | FAQ | Collapsible `> question` blocks |
| 12 | Final CTA | The one loud moment — full accent-green fill |
| 13 | Footer | Mono sitemap columns, top hairline |

**SEO baked in:** `<title>` and H1 target `ai customer service` (92,990 vol, largest keyword in the research) / `conversational ai platforms`; meta description makes no unconfirmed booking claim (see `Content Strategy.xlsx` audit + reconciliation log).
