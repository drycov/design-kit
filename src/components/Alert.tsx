import type { ReactNode } from "react";

export interface AlertProps {
  tone?: "error" | "ok";
  children: ReactNode;
  className?: string;
}

export function Alert({ tone = "ok", children, className = "" }: AlertProps) {
  return <div className={`dk-alert dk-alert--${tone} ${className}`.trim()}>{children}</div>;
}
