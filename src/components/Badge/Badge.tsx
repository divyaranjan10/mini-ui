import type { HTMLAttributes, ReactNode } from "react";
import "./Badge.css";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "success" | "warning" | "danger";
  children: ReactNode;
};

export function Badge({
  variant = "success",
  children,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span className={`ui-badge ui-badge--${variant} ${className}`} {...props}>
      {children}
    </span>
  );
}
