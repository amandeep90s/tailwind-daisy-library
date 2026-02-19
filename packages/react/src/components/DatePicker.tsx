import { CalendarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  variant?: DatePickerVariant;
  color?: DatePickerColor;
  size?: DatePickerSize;
  /** Controlled value (ISO yyyy-mm-dd) */
  value?: string;
  /** Uncontrolled default value (ISO yyyy-mm-dd) */
  defaultValue?: string;
  onChange?: (dateInfo: DateInfo | null) => void;
  min?: string;
  max?: string;
  label?: string;
  error?: string;
  helperText?: string;
  format?: DatePickerFormat;
  fullWidth?: boolean;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const VARIANT_CLASSES: Record<DatePickerVariant, string> = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: "border-secondary-400",
};

const COLOR_CLASSES: Record<DatePickerColor | "default", string> = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

const SIZE_CLASSES: Record<DatePickerSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

// ============================================================================
// HELPERS
// ============================================================================

function getSeparator(format: DatePickerFormat): string {
  return format.includes("/") ? "/" : "-";
}

function formatDateByPattern(isoDate: string, format: DatePickerFormat): string {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  const sep = getSeparator(format);

  switch (format) {
    case "dd/mm/yyyy":
    case "dd-mm-yyyy":
      return `${day}${sep}${month}${sep}${year}`;
    case "mm/dd/yyyy":
    case "mm-dd-yyyy":
      return `${month}${sep}${day}${sep}${year}`;
    case "yyyy-mm-dd":
      return isoDate;
    default:
      return `${day}/${month}/${year}`;
  }
}

function parseDisplayToISO(displayValue: string, format: DatePickerFormat): string | null {
  if (!displayValue || displayValue.length !== format.length) return null;

  const sep = getSeparator(format);
  const parts = displayValue.split(sep);
  if (parts.length !== 3) return null;

  let day: string, month: string, year: string;

  switch (format) {
    case "dd/mm/yyyy":
    case "dd-mm-yyyy":
      [day, month, year] = parts;
      break;
    case "mm/dd/yyyy":
    case "mm-dd-yyyy":
      [month, day, year] = parts;
      break;
    case "yyyy-mm-dd":
      [year, month, day] = parts;
      break;
    default:
      return null;
  }

  const d = parseInt(day, 10);
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);

  if (isNaN(d) || isNaN(m) || isNaN(y)) return null;
  if (m < 1 || m > 12 || d < 1 || d > 31) return null;
  if (y < 1000 || y > 9999) return null;

  const iso = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  const date = new Date(iso);
  if (isNaN(date.getTime())) return null;
  if (date.getDate() !== d || date.getMonth() + 1 !== m || date.getFullYear() !== y) return null;

  return iso;
}

function autoFormatDateInput(raw: string, format: DatePickerFormat): string {
  const sep = getSeparator(format);
  const digits = raw.replace(/\D/g, "");

  if (format === "yyyy-mm-dd") {
    if (digits.length <= 4) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 4)}${sep}${digits.slice(4)}`;
    return `${digits.slice(0, 4)}${sep}${digits.slice(4, 6)}${sep}${digits.slice(6, 8)}`;
  }

  // 2-2-4 pattern
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}${sep}${digits.slice(2)}`;
  return `${digits.slice(0, 2)}${sep}${digits.slice(2, 4)}${sep}${digits.slice(4, 8)}`;
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

const ErrorHelperText: React.FC<{ error?: string; helperText?: string; inputId?: string }> = ({
  error,
  helperText,
  inputId,
}) => (
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
    _ref
  ) => {
    const isControlled = value !== undefined;

    const [isFocused, setIsFocused] = useState(false);
    const [internalISO, setInternalISO] = useState(defaultValue ?? "");
    const [typedValue, setTypedValue] = useState(() =>
      formatDateByPattern(defaultValue ?? value ?? "", format)
    );

    const dateInputRef = useRef<HTMLInputElement>(null);

    // Current ISO value (controlled vs uncontrolled)
    const currentISO = isControlled ? value! : internalISO;

    // Sync display when controlled value changes externally
    useEffect(() => {
      if (isControlled) {
        setTypedValue(value ? formatDateByPattern(value, format) : "");
      }
    }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

    // Re-format display when format changes
    useEffect(() => {
      if (currentISO) setTypedValue(formatDateByPattern(currentISO, format));
    }, [format]); // eslint-disable-line react-hooks/exhaustive-deps

    const inputId = useMemo(
      () => id ?? (label ? `datepicker-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined),
      [id, label]
    );

    const inputClasses = useMemo(
      () =>
        clsx(
          size === "lg" && "h-15",
          VARIANT_CLASSES[variant],
          error ? COLOR_CLASSES.error : color && COLOR_CLASSES[color],
          SIZE_CLASSES[size],
          className
        ),
      [variant, color, size, error, className]
    );

    const commitISO = useCallback(
      (iso: string, display: string) => {
        if (!isControlled) setInternalISO(iso);
        if (dateInputRef.current) dateInputRef.current.value = iso;
        onChange?.({ iso, display, format });
      },
      [isControlled, format, onChange]
    );

    const handleDateChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const iso = e.target.value;
        if (!isControlled) setInternalISO(iso);
        const display = iso ? formatDateByPattern(iso, format) : "";
        setTypedValue(display);
        onChange?.(iso ? { iso, display, format } : null);
      },
      [isControlled, format, onChange]
    );

    const handleTypedChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = autoFormatDateInput(e.target.value, format);
        setTypedValue(formatted);

        if (formatted.length === format.length) {
          const iso = parseDisplayToISO(formatted, format);
          if (iso) commitISO(iso, formatted);
        } else if (formatted.length === 0) {
          if (!isControlled) setInternalISO("");
          if (dateInputRef.current) dateInputRef.current.value = "";
          onChange?.(null);
        }
      },
      [format, isControlled, commitISO, onChange]
    );

    const handleTypedBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (typedValue) {
          const iso = parseDisplayToISO(typedValue, format);
          if (!iso) setTypedValue(currentISO ? formatDateByPattern(currentISO, format) : "");
        }
        setIsFocused(false);
        props.onBlur?.(e);
      },
      [typedValue, format, currentISO, props.onBlur]
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(e);
      },
      [props.onFocus]
    );

    const openPicker = useCallback(() => {
      setIsFocused(true);
      dateInputRef.current?.showPicker();
    }, []);

    const handleCalendarClick = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        openPicker();
      },
      [openPicker]
    );

    const isActive = typedValue || isFocused;

    // ── Shared elements ──────────────────────────────────────────────────────

    const hiddenNativeInput = (
      <input
        ref={dateInputRef}
        type="date"
        className="datepicker-native"
        value={currentISO}
        onChange={handleDateChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        min={min}
        max={max}
        aria-hidden="true"
        tabIndex={-1}
      />
    );

    const visibleTextInput = (
      <input
        {...props}
        type="text"
        className="text-secondary-400 min-w-0 flex-1 border-none bg-transparent text-base outline-none focus:ring-0"
        value={typedValue}
        onChange={handleTypedChange}
        onFocus={handleFocus}
        onBlur={handleTypedBlur}
        placeholder={variant === "floating" ? undefined : format}
        maxLength={format.length}
        inputMode="numeric"
        autoComplete="off"
        id={inputId}
        aria-invalid={error ? "true" : undefined}
      />
    );

    const calendarIcon = (
      <CalendarIcon className="h-5 w-5 shrink-0 cursor-pointer" onClick={handleCalendarClick} />
    );

    // ── Floating variant ─────────────────────────────────────────────────────

    if (variant === "floating") {
      return (
        <div className="form-control w-full">
          <label className={`floating-label ${isActive ? "active" : ""}`}>
            <span className="outer-label">{label}</span>
            <div
              className={clsx(
                "input input-bordered relative flex outline-none",
                "items-center gap-2 px-4 py-3 transition-colors",
                fullWidth ? "w-full" : "inline-flex",
                inputClasses
              )}
            >
              <span
                className={clsx(
                  "datepicker-content flex min-w-0 flex-1",
                  typedValue && "pt-4 pl-1"
                )}
              >
                <span className="internal-label">{label}</span>
                {visibleTextInput}
              </span>
              {hiddenNativeInput}
              {calendarIcon}
            </div>
          </label>
          <ErrorHelperText error={error} helperText={helperText} inputId={inputId} />
        </div>
      );
    }

    // ── Bordered / Ghost variants ────────────────────────────────────────────

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
              "input flex w-full items-center gap-2 px-4 py-3 outline-none",
              inputClasses
            )}
          >
            {visibleTextInput}
            {hiddenNativeInput}
            {calendarIcon}
          </div>
        </div>
        <ErrorHelperText error={error} helperText={helperText} inputId={inputId} />
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";
