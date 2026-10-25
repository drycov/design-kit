import { jsx as _jsx } from "react/jsx-runtime";
export function Badge({ tone = "unknown", children, className = "" }) {
  return _jsx("span", { className: `dk-badge dk-badge--${tone} ${className}`.trim(), children });
}
