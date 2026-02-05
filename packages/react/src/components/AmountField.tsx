import clsx from "clsx";
import React, { forwardRef, useEffect, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type AmountFieldVariant = "bordered" | "ghost" | "floating";

export type AmountFieldColor =
  | "default"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type AmountFieldSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AmountFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "type" | "onChange" | "value"
> {
  /** Style variant of the input */
  variant?: AmountFieldVariant;
  /** Color variant of the input */
  color?: AmountFieldColor;
  /** Size of the input */
  size?: AmountFieldSize;
  /** Label text displayed above the input */
  label?: string;
  /** Error message displayed below the input */
  error?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Value as a number or string */
  value?: number | string | null;
  /** Callback when value changes, returns number or string based on valueAsString prop */
  onChange?: (value: number | string | null) => void;
  /** Currency symbol to display (default: $) */
  currencySymbol?: string;
  /** Maximum decimal places (default: 2) */
  decimalPlaces?: number;
  /** Whether to allow negative amounts */
  allowNegative?: boolean;
  /** Maximum amount allowed */
  max?: number;
  /** Minimum amount allowed */
  min?: number;
  /** When true, onChange returns string value instead of number */
  valueAsString?: boolean;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const variantClasses: Record<AmountFieldVariant, string> = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: "",
};

const colorClasses: Record<AmountFieldColor, string> = {
  default: "",
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

const sizeClasses: Record<AmountFieldSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Format a number as USD currency with commas
 */
const formatCurrency = (value: number, decimalPlaces: number = 2): string => {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
};

/**
 * Parse a formatted currency string to a number
 */
const parseCurrency = (value: string): number | null => {
  // Remove all non-numeric characters except decimal point and minus sign
  const cleaned = value.replace(/[^0-9.-]/g, "");
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? null : parsed;
};

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * AmountField component for USD currency input with DaisyUI styling
 * Automatically formats amounts with commas and decimal places
 *
 * @example
 * ```tsx
 * <AmountField
 *   label="Price"
 *   value={1000.50}
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 */
export const AmountField = forwardRef<HTMLInputElement, AmountFieldProps>(
  (
    {
      variant = "bordered",
      color = "default",
      size = "md",
      label,
      error,
      helperText,
      value,
      onChange,
      currencySymbol = "$",
      decimalPlaces = 2,
      allowNegative = false,
      max,
      min,
      className,
      disabled,
      placeholder = "0.00",
      onBlur,
      onFocus,
      id,
      valueAsString = false,
      ...props
    },
    ref,
  ) => {
    const [displayValue, setDisplayValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputId =
      id ||
      (label
        ? `amount-${label.toLowerCase().replace(/\s+/g, "-")}`
        : undefined);

    // Update display value when prop value changes
    useEffect(() => {
      if (value !== undefined && value !== null && value !== "") {
        const numValue = typeof value === "string" ? parseFloat(value) : value;
        if (!isNaN(numValue) && !isFocused) {
          setDisplayValue(formatCurrency(numValue, decimalPlaces));
        }
      } else if (!isFocused) {
        setDisplayValue("");
      }
    }, [value, decimalPlaces, isFocused]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      // Allow empty input
      if (inputValue === "") {
        setDisplayValue("");
        onChange?.(valueAsString ? "" : null);
        return;
      }

      // Remove formatting to get raw number
      const numValue = parseCurrency(inputValue);

      if (numValue === null) {
        return;
      }

      // Validate negative numbers
      if (!allowNegative && numValue < 0) {
        return;
      }

      // Don't validate min/max while typing - only on blur
      // This allows users to type intermediate values
      // For example, typing "5000" when min is 1000

      // Update display with the raw input while typing
      setDisplayValue(inputValue);
      onChange?.(valueAsString ? String(numValue) : numValue);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      // Show raw number without formatting when focused
      if (value !== undefined && value !== null && value !== "") {
        const numValue = typeof value === "string" ? parseFloat(value) : value;
        if (!isNaN(numValue)) {
          setDisplayValue(numValue.toString());
        }
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      // Format the number when blur
      const numValue = parseCurrency(displayValue);
      if (numValue !== null) {
        // Validate and clamp to min/max on blur
        let finalValue = numValue;

        if (min !== undefined && finalValue < min) {
          finalValue = min;
        }
        if (max !== undefined && finalValue > max) {
          finalValue = max;
        }

        setDisplayValue(formatCurrency(finalValue, decimalPlaces));
        onChange?.(valueAsString ? String(finalValue) : finalValue);
      } else if (displayValue === "") {
        onChange?.(valueAsString ? "" : null);
      }
      onBlur?.(e);
    };

    const inputClasses = clsx(
      "input w-full",
      variant !== "floating" && variantClasses[variant],
      error ? colorClasses.error : colorClasses[color],
      sizeClasses[size],
      disabled && "input-disabled",
      className,
    );

    const renderInput = () => (
      <div className="relative w-full flex items-center">
        {currencySymbol && (
          <span
            className={clsx(
              "absolute left-3 top-1/2 -translate-y-1/2 z-10 text-base-content pointer-events-none font-medium",
              disabled && "opacity-50",
            )}
          >
            {currencySymbol}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          type="text"
          inputMode="decimal"
          value={displayValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          className={clsx(inputClasses, currencySymbol && "pl-8")}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
                ? `${inputId}-helper`
                : undefined
          }
          {...props}
        />
      </div>
    );

    // Floating label variant
    if (variant === "floating") {
      return (
        <div className="form-control w-full">
          <label className="floating-label">
            <span>{label}</span>
            <div className="relative w-full flex items-center">
              {currencySymbol && (
                <span
                  className={clsx(
                    "absolute left-3 top-1/2 -translate-y-1/2 z-10 text-base-content pointer-events-none font-medium",
                    disabled && "opacity-50",
                  )}
                >
                  {currencySymbol}
                </span>
              )}
              <input
                ref={ref}
                id={inputId}
                type="text"
                inputMode="decimal"
                value={displayValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                placeholder={placeholder}
                className={clsx(inputClasses, currencySymbol && "pl-8")}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={
                  error
                    ? `${inputId}-error`
                    : helperText
                      ? `${inputId}-helper`
                      : undefined
                }
                {...props}
              />
            </div>
          </label>
          {error && (
            <span className="label-text-alt text-xs text-error mt-1">
              {error}
            </span>
          )}
          {!error && helperText && (
            <span className="label-text-alt text-xs mt-1">{helperText}</span>
          )}
        </div>
      );
    }

    // If no label, error, or helperText, return just the input
    if (!label && !error && !helperText) {
      return renderInput();
    }

    // Return wrapped version with label/error/helper text
    return (
      <div className="form-control w-full">
        {label && (
          <label className="label" htmlFor={inputId}>
            <span className="label-text">{label}</span>
          </label>
        )}
        {renderInput()}
        {error && (
          <label className="label" id={`${inputId}-error`}>
            <span className="label-text-alt text-error">{error}</span>
          </label>
        )}
        {!error && helperText && (
          <label className="label" id={`${inputId}-helper`}>
            <span className="label-text-alt text-base-content/60">
              {helperText}
            </span>
          </label>
        )}
      </div>
    );
  },
);

AmountField.displayName = "AmountField";
