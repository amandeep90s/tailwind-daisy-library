import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type SelectVariant = "bordered" | "ghost" | "floating";
export type SelectColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
export type SelectSize = "xs" | "sm" | "md" | "lg";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /** Select variant */
  variant?: SelectVariant;
  /** Select color */
  color?: SelectColor;
  /** Select size */
  size?: SelectSize;
  /** Options array */
  options?: SelectOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Show custom arrow (default: true) */
  showArrow?: boolean;
  /** Label for floating variant */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<SelectVariant, string> = {
  bordered: "select-bordered",
  ghost: "select-ghost",
  floating: "",
};

const colorClasses: Record<SelectColor, string> = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};

const sizeClasses: Record<SelectSize, string> = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
};

/**
 * Select component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Select
 *   variant="bordered"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *   ]}
 *   placeholder="Select an option"
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "bordered",
      color,
      size = "md",
      options,
      placeholder,
      children,
      className,
      showArrow = true,
      label,
      error,
      helperText,
      id,
      ...props
    },
    ref
  ) => {
    const selectId =
      id || (label ? `select-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
    // Calculate right padding based on whether arrow is shown
    const rightPadding = showArrow ? "pr-10" : "pr-4";

    const selectElement = (
      <div className="relative w-full">
        <select
          ref={ref}
          id={selectId}
          className={clsx(
            "select w-full appearance-none bg-size-[1.5em_1.5em] bg-position-[right_1rem_center] bg-no-repeat",
            "bg-none", // Important: Override DaisyUI's default background image
            variant !== "floating" && variantClasses[variant],
            error ? colorClasses.error : color && colorClasses[color],
            sizeClasses[size],
            rightPadding,
            className
          )}
          style={{
            // Ensure no native arrow shows up in any browser
            backgroundImage: "none !important",
          }}
          aria-invalid={error ? "true" : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options
            ? options.map((option) => (
                <option key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>
              ))
            : children}
        </select>
        {showArrow && (
          <ChevronDownIcon
            className="text-base-content/70 pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2"
            aria-hidden="true"
          />
        )}
      </div>
    );

    // Floating label variant
    if (variant === "floating") {
      return (
        <div className="form-control w-full">
          <label className="floating-label">
            <span>{label}</span>
            {selectElement}
          </label>
          {error && <span className="label-text-alt text-error mt-1 text-xs">{error}</span>}
          {!error && helperText && (
            <span className="label-text-alt mt-1 text-xs">{helperText}</span>
          )}
        </div>
      );
    }

    return selectElement;
  }
);

Select.displayName = "Select";
