import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "md" | "sm";
  children: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "dk-btn dk-btn--primary",
  secondary: "dk-btn dk-btn--secondary",
  danger: "dk-btn dk-btn--danger",
};

export function Button({ variant = "primary", size = "md", className = "", children, ...rest }: ButtonProps) {
  const sizeClass = size === "sm" ? " dk-btn--sm" : "";
  return (
    <button type="button" className={`${variantClass[variant]}${sizeClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
