import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function StatCard({ label, value, className = "" }) {
  return _jsxs("div", {
    className: `dk-stat ${className}`.trim(),
    children: [_jsx("div", { className: "dk-stat__value", children: value }), _jsx("div", { className: "dk-stat__label", children: label })],
  });
}
