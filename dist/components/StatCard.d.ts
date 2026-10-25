import type { ReactNode } from "react";
export interface StatCardProps {
  label: string;
  value: ReactNode;
  className?: string;
}
export declare function StatCard(props: StatCardProps): JSX.Element;
