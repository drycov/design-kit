import { jsx as _jsx } from "react/jsx-runtime";
export function Chip({ active, className = "", children, ...rest }) {
  return _jsx("button", {
    type: "button",
    className: `dk-chip${active ? " is-active" : ""} ${className}`.trim(),
    ...rest,
    children,
  });
}
