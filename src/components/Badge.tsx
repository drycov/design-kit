import type { ReactNode } from "react";

export type BadgeTone = "online" | "offline" | "maintenance" | "unknown" | "admin" | "engineer" | "warning";

export interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}

export function Badge({ tone = "unknown", children, className = "" }: BadgeProps) {
  return <span className={`dk-badge dk-badge--${tone} ${className}`.trim()}>{children}</span>;
}
