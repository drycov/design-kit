import { jsx as _jsx } from "react/jsx-runtime";
export function Alert({ tone = "ok", children, className = "" }) {
  return _jsx("div", { className: `dk-alert dk-alert--${tone} ${className}`.trim(), children });
}
