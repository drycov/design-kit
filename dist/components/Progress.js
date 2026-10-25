import { jsx as _jsx } from "react/jsx-runtime";
export function Progress({ value, max = 100, className = "" }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return _jsx("div", {
    className: `dk-progress ${className}`.trim(),
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    children: _jsx("span", { className: "dk-progress__bar", style: { width: `${pct}%` } }),
  });
}
