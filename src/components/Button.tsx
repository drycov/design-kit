import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
export type ButtonSize = "md" | "sm" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconOnly?: boolean;
  children: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "dk-btn dk-btn--primary",
  secondary: "dk-btn dk-btn--secondary",
  danger: "dk-btn dk-btn--danger",
  ghost: "dk-btn dk-btn--ghost",
};

export function Button({
  variant = "primary",
  size = "md",
  iconOnly,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const sizeClass = size === "sm" ? " dk-btn--sm" : size === "lg" ? " dk-btn--lg" : "";
  const iconClass = iconOnly ? " dk-btn--icon" : "";
  return (
    <button
      type="button"
      className={`${variantClass[variant]}${sizeClass}${iconClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
