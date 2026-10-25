import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, children, action, className = "" }: EmptyStateProps) {
  return (
    <div className={`dk-empty ${className}`.trim()}>
      {icon ? <div className="dk-empty__icon">{icon}</div> : null}
      {title ? <strong style={{ display: "block", marginBottom: 6 }}>{title}</strong> : null}
      {children}
      {action ? <div style={{ marginTop: 14 }}>{action}</div> : null}
    </div>
  );
}
