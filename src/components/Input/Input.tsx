import type { InputHTMLAttributes } from "react";
import "./Input.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, id, ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label className="ui-input-label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="ui-input"
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />

      {error && (
        <p className="ui-input-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
