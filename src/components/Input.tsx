import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
}

export function Input({ label, hint, error, className = "", id, ...rest }: InputProps) {
  const fieldId = id || rest.name;
  return (
    <div className="dk-field">
      {label ? <label className="dk-label" htmlFor={fieldId}>{label}</label> : null}
      <input id={fieldId} className={`dk-input ${className}`.trim()} {...rest} />
      {error ? <div className="dk-hint dk-text-danger">{error}</div> : hint ? <div className="dk-hint">{hint}</div> : null}
    </div>
  );
}
