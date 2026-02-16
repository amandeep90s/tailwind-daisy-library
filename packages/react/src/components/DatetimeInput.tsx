import { ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type DatetimeInputType = "time" | "datetime-local";

export type DatetimeInputVariant = "bordered" | "ghost" | "floating";
export type DatetimeInputColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
export type DatetimeInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface DatetimeInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "value" | "size"
> {
  /** Input type: time or datetime-local */
  type?: DatetimeInputType;
  /** Style variant */
  variant?: DatetimeInputVariant;
  /** Color variant */
  color?: DatetimeInputColor;
  /** Size */
  size?: DatetimeInputSize;
  /** Selected value - for controlled mode */
  value?: string;
  /** Default value - for uncontrolled mode */
  defaultValue?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Minimum selectable value */
  min?: string;
  /** Maximum selectable value */
  max?: string;
  /** Label for floating variant or bordered/ghost variants */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Fullwidth */
  fullWidth?: boolean;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const variantClasses: Record<DatetimeInputVariant, string> = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: "border-secondary-400",
};

const colorClasses: Record<DatetimeInputColor | "default", string> = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

const sizeClasses: Record<DatetimeInputSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

// ============================================================================
// SUB-COMPONENTS FOR REUSABILITY
// ============================================================================

interface TimeInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  currentValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: string;
  max?: string;
  inputId?: string;
  error?: string;
  inputType: DatetimeInputType;
  props: any;
}

const HiddenTimeInput: React.FC<TimeInputProps> = ({
  inputRef,
  currentValue,
  handleChange,
  handleFocus,
  handleBlur,
  min,
  max,
  inputId,
  error,
  inputType,
  props,
}) => (
  <input
    {...props}
    ref={inputRef}
    type={inputType}
    className="datetime-native"
    value={currentValue}
    onChange={handleChange}
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
 * DatetimeInput component for time and datetime-local inputs with floating label design.
 *
 * Supports both controlled and uncontrolled modes:
 * - Controlled: Pass `value` and `onChange` props
 * - Uncontrolled: Pass `defaultValue` (or neither)
 *
 * @example
 * ```tsx
 * // Controlled mode with time
 * const [time, setTime] = useState("14:30");
 * <DatetimeInput
 *   type="time"
 *   variant="floating"
 *   label="Select Time"
 *   value={time}
 *   onChange={(value) => setTime(value)}
 * />
 *
 * // Datetime-local
 * <DatetimeInput
 *   type="datetime-local"
 *   variant="floating"
 *   label="Select Date & Time"
 *   defaultValue="2024-01-01T14:30"
 * />
 * ```
 */
export const DatetimeInput = forwardRef<HTMLInputElement, DatetimeInputProps>(
  (
    {
      type = "time",
      variant = "floating",
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
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || value || "");
    const inputRef = useRef<HTMLInputElement>(null);

    // Sync internal state when value prop changes (for controlled mode)
    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    // Use controlled value if provided, otherwise use internal state
    const currentValue = value !== undefined ? value : internalValue;

    const inputId =
      id || (label ? `datetime-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // Update internal state if component is uncontrolled
      if (value === undefined) {
        setInternalValue(newValue);
      }

      // Call onChange if provided
      if (onChange) {
        onChange(newValue);
      }
    };

    const openPicker = () => {
      setIsFocused(true);
      inputRef.current?.showPicker();
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
      inputRef,
      currentValue,
      handleChange,
      handleFocus,
      handleBlur,
      min,
      max,
      error,
      inputType: type,
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
                className={`${currentValue ? "pt-4 pl-1" : ""} datetime-content flex flex-1 justify-start select-none`}
              >
                {/* Internal label - visible when not active */}
                {!currentValue && <span className="internal-label">{label}</span>}
                {/* Value display - only show when value exists */}
                {currentValue && (
                  <span className="datetime-value text-secondary-400 text-base font-medium">
                    {currentValue}
                  </span>
                )}
              </span>

              {/* Hidden native input */}
              <HiddenTimeInput {...commonInputProps} inputId={inputId} />

              {/* Lock icon */}
              <ClockIcon className="h-5 w-5 shrink-0" />
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
              className={`${currentValue ? "pl-1" : ""} datetime-content flex flex-1 justify-start select-none`}
            >
              {/* Value display - only show when value exists */}
              {currentValue ? (
                <span className="datetime-value text-secondary-400 text-base font-medium">
                  {currentValue}
                </span>
              ) : (
                <span className="text-base-content/40 text-base">--:--</span>
              )}
            </span>

            {/* Hidden native input */}
            <HiddenTimeInput {...commonInputProps} inputId={inputId} />

            {/* Lock icon */}
            <ClockIcon className="h-5 w-5 shrink-0" />
          </div>
        </div>

        <ErrorHelperText error={error} helperText={helperText} inputId={inputId} />
      </div>
    );
  }
);

DatetimeInput.displayName = "DatetimeInput";
