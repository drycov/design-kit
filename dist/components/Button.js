import { jsx as _jsx } from "react/jsx-runtime";
const variantClass = {
  primary: "dk-btn dk-btn--primary",
  secondary: "dk-btn dk-btn--secondary",
  danger: "dk-btn dk-btn--danger",
  ghost: "dk-btn dk-btn--ghost",
};
export function Button({ variant = "primary", size = "md", iconOnly, className = "", children, ...rest }) {
  const sizeClass = size === "sm" ? " dk-btn--sm" : size === "lg" ? " dk-btn--lg" : "";
  const iconClass = iconOnly ? " dk-btn--icon" : "";
  return _jsx("button", { type: "button", className: `${variantClass[variant]}${sizeClass}${iconClass} ${className}`.trim(), ...rest, children });
}
