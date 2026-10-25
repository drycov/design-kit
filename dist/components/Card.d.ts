import type { ReactNode } from "react";
export interface CardProps {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}
export declare function Card(props: CardProps): JSX.Element;
