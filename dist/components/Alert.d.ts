import type { ReactNode } from "react";
export interface AlertProps {
  tone?: "error" | "ok";
  children: ReactNode;
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element;
