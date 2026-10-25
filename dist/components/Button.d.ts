import type { ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "danger";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "md" | "sm";
  children: ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
