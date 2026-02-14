import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";

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
export type SelectSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  hidden?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /** Select variant. 'floating' uses custom UI with floating label, 'bordered' and 'ghost' use DaisyUI native select */
  variant?: SelectVariant;
  /** Select color */
  color?: SelectColor;
  /** Select size */
  size?: SelectSize;
  /** Options array */
  options?: SelectOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Show custom arrow (only for floating variant) */
  showArrow?: boolean;
  /** Label text (required for floating variant, optional for others) */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Default value for uncontrolled mode */
  defaultValue?: string;
  /** Full width */
  fullWidth?: boolean;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

// For floating variant, use input classes (like DatePicker)
const floatingVariantClasses = {
  floating: "border-secondary-400",
};

const floatingColorClasses: Record<SelectColor | "default", string> = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error",
};

const floatingSizeClasses: Record<SelectSize, string> = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl",
};

// For standard variants (bordered, ghost), use DaisyUI's select classes
const selectVariantClasses: Record<Exclude<SelectVariant, "floating">, string> = {
  bordered: "select-bordered",
  ghost: "select-ghost",
};

const selectColorClasses: Record<SelectColor, string> = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error",
};

const selectSizeClasses: Record<SelectSize, string> = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg",
  xl: "select-xl",
};

// ============================================================================
// SUB-COMPONENTS FOR REUSABILITY
// ============================================================================

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
 * Select component with DaisyUI styling and floating label support.
 *
 * Features:
 * - **Floating variant**: Custom UI with floating label that moves to top when value is selected
 * - **Bordered/Ghost variants**: Use DaisyUI's native select component for standard behavior
 * - Supports controlled and uncontrolled modes
 *
 * @example
 * ```tsx
 * // Floating variant (custom UI with label display)
 * <Select
 *   variant="floating"
 *   label="Select Country"
 *   value={country}
 *   onChange={(e) => setCountry(e.target.value)}
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 * />
 *
 * // Bordered variant (DaisyUI native select)
 * <Select
 *   variant="bordered"
 *   placeholder="Choose an option"
 *   options={options}
 * />
 *
 * // Uncontrolled mode
 * <Select
 *   variant="floating"
 *   label="Category"
 *   defaultValue="tech"
 *   options={options}
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "bordered",
      color,
      size = "lg",
      options,
      placeholder,
      children,
      className,
      showArrow = true,
      label,
      error,
      helperText,
      id,
      value,
      defaultValue,
      onChange,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || value || "");
    const selectRef = useRef<HTMLSelectElement>(null);

    const selectId =
      id || (label ? `select-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    // Sync internal state when value prop changes (for controlled mode)
    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    // Use controlled value if provided, otherwise use internal state
    const currentValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value;

      // Update internal state if component is uncontrolled
      if (value === undefined) {
        setInternalValue(newValue);
      }

      // Call onChange if provided
      if (onChange) {
        onChange(e);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const openSelect = () => {
      selectRef.current?.focus();
    };

    const isActive = !!currentValue || isFocused;

    // Get selected option label for display (only used in floating variant)
    const getSelectedLabel = () => {
      if (!currentValue) return "";
      if (options) {
        const selectedOption = options.find((opt) => opt.value === currentValue);
        return selectedOption?.label || "";
      }
      return currentValue;
    };

    const selectedLabel = getSelectedLabel();

    // Floating label variant with custom UI (uses input classes)
    if (variant === "floating") {
      const inputClasses = clsx(
        size === "lg" && "h-15",
        floatingVariantClasses.floating,
        error
          ? floatingColorClasses.error
          : color
            ? floatingColorClasses[color]
            : floatingColorClasses.default,
        floatingSizeClasses[size],
        className
      );

      return (
        <div className="form-control w-full">
          <label className={`floating-label ${isActive ? "active" : ""}`}>
            {/* Outer floating label - visible when active (has value or focused) */}
            <span className="outer-label">{label}</span>

            <div
              className={clsx(
                "select select-bordered outline-nonerelative flex w-full cursor-pointer",
                "bg-size-[1.5em_1.5em] bg-position-[right_1rem_center] bg-no-repeat outline-none",
                "items-center gap-2 px-4 py-3 transition-colors",
                "bg-none", // Important: Override DaisyUI's default background image
                fullWidth ? "w-full" : "inline-flex",
                inputClasses
              )}
              onClick={openSelect}
            >
              {/* Content area */}
              <span
                className={`${currentValue ? "pt-4 pl-1" : ""} select-content flex flex-1 justify-start select-none`}
              >
                {/* Internal label - visible when not active */}
                <span className="internal-label">{label || placeholder}</span>
                {/* Selected value display */}
                {currentValue && (
                  <span className="select-value text-secondary-400 text-base">{selectedLabel}</span>
                )}
              </span>

              {/* Hidden native select */}
              <select
                ref={(node) => {
                  // Handle both forwarded ref and internal ref
                  if (typeof ref === "function") {
                    ref(node);
                  } else if (ref) {
                    ref.current = node;
                  }
                  // @ts-ignore - selectRef is a mutable ref
                  selectRef.current = node;
                }}
                id={selectId}
                value={currentValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="select-native"
                aria-invalid={error ? "true" : undefined}
                {...props}
              >
                {/* Hidden placeholder option to prevent showing first option */}
                <option value="" disabled hidden>
                  {label || placeholder || "Select an option"}
                </option>
                {options
                  ? options.map((option) => (
                      <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                      </option>
                    ))
                  : children}
              </select>

              {/* Chevron icon */}
              {showArrow && <ChevronDownIcon className="h-5 w-5 shrink-0" />}
            </div>
          </label>

          <ErrorHelperText error={error} helperText={helperText} inputId={selectId} />
        </div>
      );
    }

    // Standard variants (bordered, ghost) - Use DaisyUI's native select
    const selectClasses = clsx(
      "select w-full outline-none bg-size-[1.5em_1.5em] bg-position-[right_1rem_center] bg-no-repeat",
      "bg-none", // Important: Override DaisyUI's default background image
      selectVariantClasses[variant as Exclude<SelectVariant, "floating">],
      error ? selectColorClasses.error : color && selectColorClasses[color],
      selectSizeClasses[size],
      fullWidth ? "w-full" : "",
      // rightPadding,
      className
    );

    return (
      <div className="form-control w-full">
        {label && (
          <label className="label" htmlFor={selectId}>
            <span className="label-text font-medium">{label}</span>
          </label>
        )}

        <div className="relative w-full">
          <select
            style={{ backgroundImage: "none !important" }}
            ref={ref}
            id={selectId}
            value={currentValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={selectClasses}
            aria-invalid={error ? "true" : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled={!currentValue} hidden={true}>
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

        <ErrorHelperText error={error} helperText={helperText} inputId={selectId} />
      </div>
    );
  }
);

Select.displayName = "Select";
