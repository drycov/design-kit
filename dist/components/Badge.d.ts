import type { ReactNode } from "react";
export type BadgeTone = "online" | "offline" | "maintenance" | "unknown" | "admin" | "engineer" | "warning";
export interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}
export declare function Badge(props: BadgeProps): JSX.Element;
