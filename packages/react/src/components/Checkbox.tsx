import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type CheckboxVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
export type CheckboxSize = "xs" | "sm" | "md" | "lg";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Checkbox variant */
  variant?: CheckboxVariant;
  /** Checkbox size */
  size?: CheckboxSize;
  /** Label text */
  label?: string;
  /** Indeterminate state */
  indeterminate?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<CheckboxVariant, string> = {
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error",
};

const sizeClasses: Record<CheckboxSize, string> = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "checkbox-md",
  lg: "checkbox-lg",
};

/**
 * Checkbox component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" variant="primary" />
 * <Checkbox checked={true} variant="success" size="sm" />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ variant, size = "md", label, indeterminate, className, id, ...props }, ref) => {
    const checkboxId =
      id || (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    const checkbox = (
      <input
        ref={ref}
        id={checkboxId}
        type="checkbox"
        className={clsx(
          "checkbox",
          variant && variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );

    if (label) {
      return (
        <label htmlFor={checkboxId} className="label cursor-pointer justify-start gap-2">
          {checkbox}
          <span className="label-text">{label}</span>
        </label>
      );
    }

    return checkbox;
  }
);

Checkbox.displayName = "Checkbox";
