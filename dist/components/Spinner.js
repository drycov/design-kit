import { jsx as _jsx } from "react/jsx-runtime";
export function Spinner({ className = "", label = "Loading" }) {
  return _jsx("div", { className: `dk-spinner ${className}`.trim(), role: "status", "aria-label": label });
}
