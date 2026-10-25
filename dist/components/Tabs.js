import { jsx as _jsx } from "react/jsx-runtime";
export function Tabs({ items, value, onChange, className = "" }) {
  return _jsx("div", {
    className: `dk-tabs ${className}`.trim(),
    role: "tablist",
    children: items.map((item) =>
      _jsx(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": item.id === value,
          className: `dk-tab${item.id === value ? " is-active" : ""}`,
          onClick: () => onChange(item.id),
          children: item.label,
        },
        item.id
      )
    ),
  });
}
