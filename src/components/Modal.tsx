import type { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
  className?: string;
}

export function Modal({ open, title, children, footer, onClose, className = "" }: ModalProps) {
  if (!open) return null;
  return (
    <div className="dk-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className={`dk-modal ${className}`.trim()}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {(title || onClose) && (
          <div className="dk-modal__head">
            <h3>{title}</h3>
            {onClose ? (
              <button type="button" className="dk-btn dk-btn--ghost dk-btn--icon dk-btn--sm" onClick={onClose} aria-label="Close">
                ×
              </button>
            ) : null}
          </div>
        )}
        <div className="dk-modal__body">{children}</div>
        {footer ? <div className="dk-modal__foot">{footer}</div> : null}
      </div>
    </div>
  );
}
