import type { ReactNode } from "react";

export interface CardProps {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section className={`dk-card ${className}`.trim()}>
      {title ? <div className="dk-card__head">{title}</div> : null}
      <div className="dk-card__body">{children}</div>
    </section>
  );
}
