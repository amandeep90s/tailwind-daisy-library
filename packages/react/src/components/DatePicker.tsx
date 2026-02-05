import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type DatePickerVariant = "bordered" | "ghost" | "floating";
export type DatePickerColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
export type DatePickerSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface DatePickerProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "value" | "min" | "max" | "size"
> {
  /** Style variant */
  variant?: DatePickerVariant;
  /** Color variant */
  color?: DatePickerColor;
  /** Size */
  size?: DatePickerSize;
  /** Selected date */
  value?: Date;
  /** Callback when date changes */
  onChange?: (date: Date | null) => void;
  /** Minimum selectable date */
  min?: Date;
  /** Maximum selectable date */
  max?: Date;
  /** Label for floating variant */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const variantClasses: Record<DatePickerVariant, string> = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: "",
};

const colorClasses: Record<DatePickerColor | "default", string> = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

const sizeClasses: Record<DatePickerSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

// ============================================================================
// HELPERS
// ============================================================================

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDate(dateString: string): Date | null {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * DatePicker component with native input
 *
 * @example
 * ```tsx
 * <DatePicker value={selectedDate} onChange={setSelectedDate} />
 * <DatePicker variant="floating" label="Birth Date" />
 * ```
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      variant = "bordered",
      color,
      size = "md",
      value,
      onChange,
      min,
      max,
      label,
      error,
      helperText,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || (label ? `datepicker-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = parseDate(e.target.value);
      onChange?.(date);
    };

    const inputClasses = clsx(
      "input w-full",
      variant !== "floating" && variantClasses[variant],
      error ? colorClasses.error : color && colorClasses[color],
      sizeClasses[size],
      className
    );

    // Floating label variant
    if (variant === "floating") {
      return (
        <div className="form-control w-full">
          <label className="floating-label">
            <span>{label}</span>
            <input
              ref={ref}
              id={inputId}
              type="date"
              value={value ? formatDate(value) : ""}
              onChange={handleChange}
              min={min ? formatDate(min) : undefined}
              max={max ? formatDate(max) : undefined}
              className={inputClasses}
              aria-invalid={error ? "true" : undefined}
              {...props}
            />
          </label>
          {error && <span className="label-text-alt text-error mt-1 text-xs">{error}</span>}
          {!error && helperText && (
            <span className="label-text-alt mt-1 text-xs">{helperText}</span>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        id={inputId}
        type="date"
        value={value ? formatDate(value) : ""}
        onChange={handleChange}
        min={min ? formatDate(min) : undefined}
        max={max ? formatDate(max) : undefined}
        className={inputClasses}
        {...props}
      />
    );
  }
);

DatePicker.displayName = "DatePicker";
