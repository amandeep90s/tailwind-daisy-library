import { CalendarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type DatePickerFormat =
  | "dd/mm/yyyy"
  | "mm/dd/yyyy"
  | "yyyy-mm-dd"
  | "dd-mm-yyyy"
  | "mm-dd-yyyy";

export interface DateInfo {
  /** Date in ISO format (yyyy-mm-dd) */
  iso: string;
  /** Date in display format based on selected format */
  display: string;
  /** Selected format */
  format: DatePickerFormat;
}

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
  "type" | "onChange" | "value" | "size"
> {
  /** Style variant */
  variant?: DatePickerVariant;
  /** Color variant */
  color?: DatePickerColor;
  /** Size */
  size?: DatePickerSize;
  /** Selected date value (ISO string yyyy-mm-dd) - for controlled mode */
  value?: string;
  /** Default date value (ISO string yyyy-mm-dd) - for uncontrolled mode */
  defaultValue?: string;
  /** Callback when date changes */
  onChange?: (dateInfo: DateInfo | null) => void;
  /** Minimum selectable date (ISO string yyyy-mm-dd) */
  min?: string;
  /** Maximum selectable date (ISO string yyyy-mm-dd) */
  max?: string;
  /** Label for floating variant or bordered/ghost variants */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Date display format */
  format?: DatePickerFormat;
  /** Fullwidth */
  fullWidth?: boolean;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const variantClasses: Record<DatePickerVariant, string> = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: "border-secondary-400",
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

/**
 * Convert ISO date (yyyy-mm-dd) to specified display format
 */
function formatDateByPattern(isoDate: string, format: DatePickerFormat): string {
  if (!isoDate) return "";

  const [year, month, day] = isoDate.split("-");

  switch (format) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    case "yyyy-mm-dd":
      return isoDate;
    case "dd-mm-yyyy":
      return `${day}-${month}-${year}`;
    case "mm-dd-yyyy":
      return `${month}-${day}-${year}`;
    default:
      return `${day}/${month}/${year}`;
  }
}

/**
 * Get placeholder text based on format
 */
function getPlaceholderByFormat(format: DatePickerFormat): string {
  return format;
}

// ============================================================================
// SUB-COMPONENTS FOR REUSABILITY
// ============================================================================

interface DateInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  currentValue: string;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  inputId?: string;
  error?: string;
  props: any;
}

const HiddenDateInput: React.FC<DateInputProps> = ({
  inputRef,
  currentValue,
  handleDateChange,
  handleFocus,
  handleBlur,
  min,
  max,
  inputId,
  error,
  props,
}) => (
  <input
    {...props}
    ref={inputRef}
    type="date"
    className="datepicker-native"
    value={currentValue}
    onChange={handleDateChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    min={min}
    max={max}
    id={inputId}
    aria-invalid={error ? "true" : undefined}
  />
);

interface ErrorHelperTextProps {
  error?: string;
  helperText?: string;
  inputId?: string;
}

const ErrorHelperText: React.FC<ErrorHelperTextProps> = ({ error, helperText, inputId }) => (
  <>
    {error && (
      <label className="label" id={`${inputId}-error`}>
        <span className="label-text-alt text-error">{error}</span>
      </label>
    )}
    {!error && helperText && (
      <label className="label" id={`${inputId}-helper`}>
        <span className="label-text-alt">{helperText}</span>
      </label>
    )}
  </>
);

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * DatePicker component that displays dates in customizable formats
 * using a native <input type="date"> under the hood (no third-party packages).
 *
 * The native date input always uses yyyy-mm-dd internally,
 * but we overlay a formatted display on top of it.
 *
 * Supports both controlled and uncontrolled modes:
 * - Controlled: Pass `value` and `onChange` props
 * - Uncontrolled: Pass `defaultValue` (or neither)
 *
 * @example
 * ```tsx
 * // Controlled mode with custom format
 * const [date, setDate] = useState("2024-01-01");
 * <DatePicker
 *   variant="floating"
 *   label="Pick a date"
 *   value={date}
 *   format="mm/dd/yyyy"
 *   onChange={(info) => setDate(info?.iso || "")}
 * />
 *
 * // Uncontrolled mode
 * <DatePicker variant="bordered" defaultValue="2024-01-01" format="dd-mm-yyyy" />
 *
 * // Display only (value without onChange)
 * <DatePicker variant="bordered" value="2024-01-01" />
 * ```
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      variant = "bordered",
      color,
      size = "lg",
      value,
      defaultValue,
      onChange,
      min,
      max,
      label,
      error,
      helperText,
      className,
      id,
      fullWidth = false,
      format = "dd/mm/yyyy",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || value || "");
    const dateInputRef = useRef<HTMLInputElement>(null);

    // Sync internal state when value prop changes (for controlled mode)
    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    // Use controlled value if provided, otherwise use internal state
    const currentValue = value !== undefined ? value : internalValue;
    const displayValue = currentValue ? formatDateByPattern(currentValue, format) : "";
    const placeholder = getPlaceholderByFormat(format);

    const inputId =
      id || (label ? `datepicker-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const dateValue = e.target.value; // yyyy-mm-dd

      // Update internal state if component is uncontrolled
      if (value === undefined) {
        setInternalValue(dateValue);
      }

      // Call onChange if provided
      if (onChange) {
        if (dateValue) {
          onChange({
            iso: dateValue,
            display: formatDateByPattern(dateValue, format),
            format,
          });
        } else {
          onChange(null);
        }
      }
    };

    const openPicker = () => {
      setIsFocused(true);
      dateInputRef.current?.showPicker();
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const isActive = currentValue || isFocused;

    const inputClasses = clsx(
      size === "lg" && "h-15",
      variantClasses[variant],
      error ? colorClasses.error : color && colorClasses[color],
      sizeClasses[size],
      className
    );

    const commonInputProps = {
      inputRef: dateInputRef,
      currentValue,
      handleDateChange,
      handleFocus,
      handleBlur,
      min,
      max,
      error,
      props,
    };

    // Floating label variant with custom UI
    if (variant === "floating") {
      return (
        <div className="form-control w-full">
          <label className={`floating-label ${isActive ? "active" : ""}`}>
            {/* Outer floating label - visible when active (has value or focused) */}
            <span className="outer-label">{label}</span>

            <div
              className={clsx(
                "input input-bordered relative flex cursor-pointer outline-none",
                "items-center gap-2 px-4 py-3 transition-colors",
                fullWidth ? "w-full" : "inline-flex",
                inputClasses
              )}
              onClick={openPicker}
            >
              {/* Content area */}
              <span
                className={`${currentValue ? "pt-4 pl-1" : ""} datepicker-content flex flex-1 justify-start select-none`}
              >
                {/* Internal label - visible when not active */}
                <span className="internal-label">{label}</span>
                {/* Formatted date display */}
                {currentValue && (
                  <span className="date-value text-secondary-400 text-base">{displayValue}</span>
                )}
              </span>

              {/* Hidden native date input */}
              <HiddenDateInput {...commonInputProps} inputId={inputId} />

              {/* Calendar icon */}
              <CalendarIcon className="h-5 w-5 shrink-0" />
            </div>
          </label>

          <ErrorHelperText error={error} helperText={helperText} inputId={inputId} />
        </div>
      );
    }

    // Standard variants (bordered, ghost)
    return (
      <div className="form-control w-full">
        {label && (
          <label className="label" htmlFor={inputId}>
            <span className="label-text font-medium">{label}</span>
          </label>
        )}

        <div className="relative inline-block w-full">
          <div
            className={clsx(
              "input flex w-full items-center justify-between px-4 py-3 outline-none",
              inputClasses
            )}
            onClick={openPicker}
          >
            {/* Content area */}
            <span
              className={`${currentValue ? "pl-1" : ""} datepicker-content flex flex-1 justify-start select-none`}
            >
              {/* Formatted date display */}
              <span className="date-value text-secondary-400 text-base">
                {displayValue || placeholder}
              </span>
            </span>

            {/* Hidden native date input */}
            <HiddenDateInput {...commonInputProps} inputId={inputId} />

            {/* Calendar icon */}
            <CalendarIcon className="h-5 w-5 shrink-0" />
          </div>
        </div>

        <ErrorHelperText error={error} helperText={helperText} inputId={inputId} />
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
