import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { Calendar } from "./Calendar";

// ============================================================================
// TYPES
// ============================================================================

export type DateInputVariant = "bordered" | "ghost";

export type DateInputColor =
  | "default"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type DateInputSize = "xs" | "sm" | "md" | "lg" | "xl";

export type DateFormat = "dd/mm/yyyy" | "mm/dd/yyyy" | "yyyy/mm/dd" | "yyyy-mm-dd";

export interface DateInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "value" | "onChange"
> {
  /** Style variant of the input */
  variant?: DateInputVariant;
  /** Color variant of the input */
  color?: DateInputColor;
  /** Size of the input */
  size?: DateInputSize;
  /** Label text displayed above the input */
  label?: string;
  /** Error message displayed below the input */
  error?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Selected date value */
  value?: Date | null;
  /** Callback when date changes */
  onChange?: (date: Date | null) => void;
  /** Date display format */
  dateFormat?: DateFormat;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Show calendar picker */
  showCalendar?: boolean;
  /** Placeholder text */
  placeholder?: string;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const variantClasses: Record<DateInputVariant, string> = {
  bordered: "input-bordered",
  ghost: "input-ghost",
};

const colorClasses: Record<DateInputColor, string> = {
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

const sizeClasses: Record<DateInputSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

// ============================================================================
// HELPERS
// ============================================================================

const formatPlaceholders: Record<DateFormat, string> = {
  "dd/mm/yyyy": "DD/MM/YYYY",
  "mm/dd/yyyy": "MM/DD/YYYY",
  "yyyy/mm/dd": "YYYY/MM/DD",
  "yyyy-mm-dd": "YYYY-MM-DD",
};

function formatDateToString(date: Date | null, format: DateFormat): string {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  switch (format) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    case "yyyy/mm/dd":
      return `${year}/${month}/${day}`;
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    default:
      return `${day}/${month}/${year}`;
  }
}

function parseStringToDate(dateString: string, format: DateFormat): Date | null {
  if (!dateString) return null;

  const separator = format.includes("-") ? "-" : "/";
  const parts = dateString.split(separator);

  if (parts.length !== 3) return null;

  let day: number, month: number, year: number;

  switch (format) {
    case "dd/mm/yyyy":
      day = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      year = parseInt(parts[2], 10);
      break;
    case "mm/dd/yyyy":
      month = parseInt(parts[0], 10) - 1;
      day = parseInt(parts[1], 10);
      year = parseInt(parts[2], 10);
      break;
    case "yyyy/mm/dd":
    case "yyyy-mm-dd":
      year = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      day = parseInt(parts[2], 10);
      break;
    default:
      return null;
  }

  // Validate date
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
  if (day < 1 || day > 31 || month < 0 || month > 11 || year < 1000 || year > 9999) return null;

  const date = new Date(year, month, day);

  // Check if the date is valid (handles cases like Feb 30)
  if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
    return null;
  }

  return date;
}

function isValidDateString(value: string, format: DateFormat): boolean {
  const separator = format.includes("-") ? "-" : "/";
  const parts = value.split(separator);

  // Allow partial input
  if (parts.length <= 3) {
    const formatParts = format.split(/[-/]/);
    return parts.every((part, index) => {
      if (!formatParts[index]) return false;
      const maxLength = formatParts[index].length;
      return part.length <= maxLength && /^\d*$/.test(part);
    });
  }

  return false;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * DateInput component with customizable date format display
 *
 * @example
 * ```tsx
 * <DateInput
 *   label="Birth Date"
 *   value={birthDate}
 *   onChange={setBirthDate}
 *   dateFormat="dd/mm/yyyy"
 * />
 * ```
 */
export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
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
      dateFormat = "dd/mm/yyyy",
      minDate,
      maxDate,
      showCalendar = true,
      placeholder,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputId =
      id || (label ? `date-input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    // Sync input value with prop value
    useEffect(() => {
      setInputValue(formatDateToString(value || null, dateFormat));
    }, [value, dateFormat]);

    // Handle click outside to close calendar
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsCalendarOpen(false);
        }
      };

      if (isCalendarOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isCalendarOpen]);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const separator = dateFormat.includes("-") ? "-" : "/";

        // Auto-insert separator as user types
        let formattedValue = newValue.replace(/[^0-9]/g, "");
        const formatParts = dateFormat.split(/[-/]/);
        let result = "";
        let charIndex = 0;

        for (let i = 0; i < formatParts.length && charIndex < formattedValue.length; i++) {
          const partLength = formatParts[i].length;
          const part = formattedValue.slice(charIndex, charIndex + partLength);
          result += part;
          charIndex += partLength;

          if (charIndex < formattedValue.length && i < formatParts.length - 1) {
            result += separator;
          }
        }

        setInputValue(result);

        // Try to parse the date
        const parsedDate = parseStringToDate(result, dateFormat);
        if (parsedDate) {
          // Validate against min/max
          if (minDate && parsedDate < minDate) return;
          if (maxDate && parsedDate > maxDate) return;
          onChange?.(parsedDate);
        } else if (result === "") {
          onChange?.(null);
        }
      },
      [dateFormat, minDate, maxDate, onChange]
    );

    const handleCalendarSelect = useCallback(
      (date: Date) => {
        setInputValue(formatDateToString(date, dateFormat));
        onChange?.(date);
        setIsCalendarOpen(false);
      },
      [dateFormat, onChange]
    );

    const toggleCalendar = () => {
      if (!disabled) {
        setIsCalendarOpen(!isCalendarOpen);
      }
    };

    return (
      <div className="form-control w-full" ref={containerRef}>
        {label && (
          <label className="label" htmlFor={inputId}>
            <span className="label-text font-medium">{label}</span>
          </label>
        )}

        <div className="relative">
          <label
            className={clsx(
              "input flex w-full items-center gap-2",
              variantClasses[variant],
              error ? colorClasses.error : colorClasses[color],
              sizeClasses[size],
              disabled && "input-disabled",
              className
            )}
          >
            <input
              ref={ref}
              id={inputId}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholder || formatPlaceholders[dateFormat]}
              disabled={disabled}
              className="grow border-none bg-transparent outline-none"
              aria-invalid={error ? "true" : undefined}
              aria-describedby={
                error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
              }
              {...props}
            />
            {showCalendar && (
              <button
                type="button"
                onClick={toggleCalendar}
                disabled={disabled}
                className="text-base-content/50 hover:text-base-content transition-colors"
                aria-label="Open calendar"
              >
                <CalendarDaysIcon className="h-5 w-5" />
              </button>
            )}
          </label>

          {/* Calendar Popover */}
          {isCalendarOpen && showCalendar && (
            <div className="absolute right-0 z-50 mt-2">
              <Calendar
                value={value || undefined}
                onChange={handleCalendarSelect}
                minDate={minDate}
                maxDate={maxDate}
              />
            </div>
          )}
        </div>

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
      </div>
    );
  }
);

DateInput.displayName = "DateInput";
