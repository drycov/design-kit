import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Input({ label, hint, error, className = "", id, ...rest }) {
  const fieldId = id || rest.name;
  return _jsxs("div", {
    className: "dk-field",
    children: [
      label ? _jsx("label", { className: "dk-label", htmlFor: fieldId, children: label }) : null,
      _jsx("input", { id: fieldId, className: `dk-input ${className}`.trim(), ...rest }),
      error ? _jsx("div", { className: "dk-hint dk-text-danger", children: error }) : hint ? _jsx("div", { className: "dk-hint", children: hint }) : null,
    ],
  });
}
