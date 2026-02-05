import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type NativeSelectVariant = "bordered" | "ghost";
export type NativeSelectColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
export type NativeSelectSize = "xs" | "sm" | "md" | "lg";

export interface NativeSelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  /** Select variant */
  variant?: NativeSelectVariant;
  /** Select color */
  color?: NativeSelectColor;
  /** Select size */
  size?: NativeSelectSize;
  /** Options array */
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<NativeSelectVariant, string> = {
  bordered: "select-bordered",
  ghost: "select-ghost",
};

const colorClasses: Record<NativeSelectColor, string> = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};

const sizeClasses: Record<NativeSelectSize, string> = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
};

/**
 * NativeSelect component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <NativeSelect
 *   variant="bordered"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *   ]}
 * />
 * ```
 */
export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ variant = "bordered", color, size = "md", options, children, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={clsx(
          "select w-full",
          variantClasses[variant],
          color && colorClasses[color],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {options
          ? options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))
          : children}
      </select>
    );
  }
);

NativeSelect.displayName = "NativeSelect";
