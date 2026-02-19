import { ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  type?: DatetimeInputType;
  variant?: DatetimeInputVariant;
  color?: DatetimeInputColor;
  size?: DatetimeInputSize;
  /** Controlled value */
  value?: string;
  /** Uncontrolled default value */
  defaultValue?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

// ============================================================================
// CONSTANTS
// ============================================================================

const VARIANT_CLASSES: Record<DatetimeInputVariant, string> = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: "border-secondary-400",
};

const COLOR_CLASSES: Record<DatetimeInputColor | "default", string> = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

const SIZE_CLASSES: Record<DatetimeInputSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

const PLACEHOLDER: Record<DatetimeInputType, string> = {
  time: "HH:MM",
  "datetime-local": "DD/MM/YYYY HH:MM",
};

// ============================================================================
// HELPERS
// ============================================================================

function autoFormatTypedInput(raw: string, type: DatetimeInputType): string {
  const digits = raw.replace(/\D/g, "");

  if (type === "time") {
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
  }

  // datetime-local → DD/MM/YYYY HH:MM
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  if (digits.length <= 8) return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  if (digits.length <= 10)
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)} ${digits.slice(8)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)} ${digits.slice(8, 10)}:${digits.slice(10, 12)}`;
}

function parseTypedToNative(display: string, type: DatetimeInputType): string | null {
  if (type === "time") {
    if (display.length !== 5 || !display.includes(":")) return null;
    const [hh, mm] = display.split(":");
    const h = parseInt(hh, 10);
    const m = parseInt(mm, 10);
    if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59) return null;
    return display;
  }

  const expectedLen = PLACEHOLDER["datetime-local"].length; // 16
  if (display.length !== expectedLen) return null;

  const [datePart, timePart] = display.split(" ");
  if (!datePart || !timePart) return null;

  const [dd, mm, yyyy] = datePart.split("/");
  const [hh, min] = timePart.split(":");

  const d = parseInt(dd, 10);
  const mo = parseInt(mm, 10);
  const y = parseInt(yyyy, 10);
  const h = parseInt(hh, 10);
  const mi = parseInt(min, 10);

  if ([d, mo, y, h, mi].some(isNaN)) return null;
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  if (h < 0 || h > 23 || mi < 0 || mi > 59) return null;
  if (y < 1000 || y > 9999) return null;

  const isoDate = `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
  const date = new Date(isoDate);
  if (
    isNaN(date.getTime()) ||
    date.getDate() !== d ||
    date.getMonth() + 1 !== mo ||
    date.getFullYear() !== y
  )
    return null;

  return `${isoDate}T${hh.padStart(2, "0")}:${min.padStart(2, "0")}`;
}

function nativeToDisplay(nativeValue: string, type: DatetimeInputType): string {
  if (!nativeValue) return "";
  if (type === "time") return nativeValue;

  const [datePart, timePart] = nativeValue.split("T");
  if (!datePart || !timePart) return nativeValue;
  const [yyyy, mm, dd] = datePart.split("-");
  return `${dd}/${mm}/${yyyy} ${timePart.slice(0, 5)}`;
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
    _ref
  ) => {
    const isControlled = value !== undefined;

    const [isFocused, setIsFocused] = useState(false);
    const [internalNative, setInternalNative] = useState(defaultValue ?? "");
    const [typedValue, setTypedValue] = useState(() =>
      nativeToDisplay(defaultValue ?? value ?? "", type)
    );

    const inputRef = useRef<HTMLInputElement>(null);

    const currentNative = isControlled ? value! : internalNative;
    const placeholder = PLACEHOLDER[type];
    const maxTypedLength = placeholder.length;

    // Sync display when controlled value changes externally
    useEffect(() => {
      if (isControlled) {
        setTypedValue(value ? nativeToDisplay(value, type) : "");
      }
    }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

    // Re-format display when type changes
    useEffect(() => {
      if (currentNative) setTypedValue(nativeToDisplay(currentNative, type));
    }, [type]); // eslint-disable-line react-hooks/exhaustive-deps

    const inputId = useMemo(
      () => id ?? (label ? `datetime-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined),
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

    const commitNative = useCallback(
      (native: string) => {
        if (!isControlled) setInternalNative(native);
        if (inputRef.current) inputRef.current.value = native;
        onChange?.(native);
      },
      [isControlled, onChange]
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (!isControlled) setInternalNative(newValue);
        setTypedValue(newValue ? nativeToDisplay(newValue, type) : "");
        onChange?.(newValue);
      },
      [isControlled, type, onChange]
    );

    const handleTypedChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = autoFormatTypedInput(e.target.value, type);
        setTypedValue(formatted);

        if (formatted.length === maxTypedLength) {
          const native = parseTypedToNative(formatted, type);
          if (native) commitNative(native);
        } else if (formatted.length === 0) {
          commitNative("");
        }
      },
      [type, maxTypedLength, commitNative]
    );

    const handleTypedBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (typedValue) {
          const native = parseTypedToNative(typedValue, type);
          if (!native) setTypedValue(currentNative ? nativeToDisplay(currentNative, type) : "");
        }
        setIsFocused(false);
        props.onBlur?.(e);
      },
      [typedValue, type, currentNative, props.onBlur]
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
      inputRef.current?.showPicker();
    }, []);

    const handleIconClick = useCallback(
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
        ref={inputRef}
        type={type}
        className="datetime-native"
        value={currentNative}
        onChange={handleChange}
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
        placeholder={variant === "floating" ? undefined : placeholder}
        maxLength={maxTypedLength}
        inputMode="numeric"
        autoComplete="off"
        id={inputId}
        aria-invalid={error ? "true" : undefined}
      />
    );

    const clockIcon = (
      <ClockIcon className="h-5 w-5 shrink-0 cursor-pointer" onClick={handleIconClick} />
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
                className={clsx("datetime-content flex min-w-0 flex-1", typedValue && "pt-4 pl-1")}
              >
                <span className="internal-label">{label}</span>
                {visibleTextInput}
              </span>
              {hiddenNativeInput}
              {clockIcon}
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
            {clockIcon}
          </div>
        </div>
        <ErrorHelperText error={error} helperText={helperText} inputId={inputId} />
      </div>
    );
  }
);

DatetimeInput.displayName = "DatetimeInput";
