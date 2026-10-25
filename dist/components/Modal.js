import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Modal({ open, title, children, footer, onClose, className = "" }) {
  if (!open) return null;
  return _jsx("div", {
    className: "dk-modal-backdrop",
    role: "presentation",
    onClick: onClose,
    children: _jsxs("div", {
      className: `dk-modal ${className}`.trim(),
      role: "dialog",
      "aria-modal": "true",
      onClick: (e) => e.stopPropagation(),
      children: [
        (title || onClose)
          ? _jsxs("div", {
              className: "dk-modal__head",
              children: [
                _jsx("h3", { children: title }),
                onClose
                  ? _jsx("button", {
                      type: "button",
                      className: "dk-btn dk-btn--ghost dk-btn--icon dk-btn--sm",
                      onClick: onClose,
                      "aria-label": "Close",
                      children: "×",
                    })
                  : null,
              ],
            })
          : null,
        _jsx("div", { className: "dk-modal__body", children }),
        footer ? _jsx("div", { className: "dk-modal__foot", children: footer }) : null,
      ],
    }),
  });
}
