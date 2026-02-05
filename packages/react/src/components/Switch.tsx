import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type SwitchVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral";
export type SwitchSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  /** Switch variant */
  variant?: SwitchVariant;
  /** Switch size */
  size?: SwitchSize;
  /** Label text */
  label?: string;
  /** Icon to show when checked (enabled state) */
  checkedIcon?: React.ReactNode;
  /** Icon to show when unchecked (disabled state) */
  uncheckedIcon?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<SwitchVariant, string> = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  neutral: "toggle-neutral",
  info: "toggle-info",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error",
};

const sizeClasses: Record<SwitchSize, string> = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "toggle-md",
  lg: "toggle-lg",
  xl: "toggle-xl",
};

/**
 * Switch/Toggle component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" variant="primary" />
 * <Switch checked={true} variant="success" size="sm" />
 * <Switch checkedIcon={<CheckIcon />} uncheckedIcon={<XIcon />} />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ variant, size = "md", label, checkedIcon, uncheckedIcon, className, ...props }, ref) => {
    // If icons are provided, we need to wrap in a label with toggle class
    if (checkedIcon || uncheckedIcon) {
      return (
        <label
          className={clsx(
            "toggle text-base-content",
            variant && variantClasses[variant],
            sizeClasses[size],
            className
          )}
        >
          <input ref={ref} type="checkbox" {...props} />
          {checkedIcon}
          {uncheckedIcon}
        </label>
      );
    }

    const switchElement = (
      <input
        ref={ref}
        type="checkbox"
        className={clsx("toggle", variant && variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );

    if (label) {
      return (
        <label className="label cursor-pointer justify-start gap-2">
          {switchElement}
          <span className="label-text">{label}</span>
        </label>
      );
    }

    return switchElement;
  }
);

Switch.displayName = "Switch";
