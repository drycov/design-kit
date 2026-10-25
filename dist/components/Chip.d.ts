import type { ButtonHTMLAttributes, ReactNode } from "react";
export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
