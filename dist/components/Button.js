import { jsx as _jsx } from "react/jsx-runtime";
const variantClass = {
  primary: "dk-btn dk-btn--primary",
  secondary: "dk-btn dk-btn--secondary",
  danger: "dk-btn dk-btn--danger",
};
export function Button({ variant = "primary", size = "md", className = "", children, ...rest }) {
  const sizeClass = size === "sm" ? " dk-btn--sm" : "";
  return _jsx("button", { type: "button", className: `${variantClass[variant]}${sizeClass} ${className}`.trim(), ...rest, children });
}
