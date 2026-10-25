export interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

export function Progress({ value, max = 100, className = "" }: ProgressProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={`dk-progress ${className}`.trim()} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <span className="dk-progress__bar" style={{ width: `${pct}%` }} />
    </div>
  );
}
