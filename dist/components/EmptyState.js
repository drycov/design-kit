import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function EmptyState({ icon, title, children, action, className = "" }) {
  return _jsxs("div", {
    className: `dk-empty ${className}`.trim(),
    children: [
      icon ? _jsx("div", { className: "dk-empty__icon", children: icon }) : null,
      title ? _jsx("strong", { style: { display: "block", marginBottom: 6 }, children: title }) : null,
      children,
      action ? _jsx("div", { style: { marginTop: 14 }, children: action }) : null,
    ],
  });
}
