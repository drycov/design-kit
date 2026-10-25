import type { ReactNode } from "react";

export interface StatCardProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export function StatCard({ label, value, className = "" }: StatCardProps) {
  return (
    <div className={`dk-stat ${className}`.trim()}>
      <div className="dk-stat__value">{value}</div>
      <div className="dk-stat__label">{label}</div>
    </div>
  );
}
