import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

export function Chip({ active, className = "", children, ...rest }: ChipProps) {
  return (
    <button
      type="button"
      className={`dk-chip${active ? " is-active" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
