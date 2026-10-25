import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card({ title, children, className = "" }) {
  return _jsxs("section", {
    className: `dk-card ${className}`.trim(),
    children: [title ? _jsx("div", { className: "dk-card__head", children: title }) : null, _jsx("div", { className: "dk-card__body", children })],
  });
}
