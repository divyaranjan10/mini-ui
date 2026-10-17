import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  children: ReactNode;
};

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`ui-button ${props.className ?? ""}`}
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  );
}
