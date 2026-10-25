export interface SpinnerProps {
  className?: string;
  label?: string;
}

export function Spinner({ className = "", label = "Loading" }: SpinnerProps) {
  return <div className={`dk-spinner ${className}`.trim()} role="status" aria-label={label} />;
}
