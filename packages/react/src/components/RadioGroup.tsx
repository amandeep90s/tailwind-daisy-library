import clsx from "clsx";
import React, { createContext, forwardRef, useContext } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type RadioGroupVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "subtle";
export type RadioGroupSize = "xs" | "sm" | "md" | "lg";

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Group name */
  name: string;
  /** Selected value */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Radio variant */
  variant?: RadioGroupVariant;
  /** Radio size */
  size?: RadioGroupSize;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
}

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  /** Radio value */
  value: string;
  /** Radio label */
  label?: string;
  /** Unique identifier for the radio */
  id?: string;
}

// ============================================================================
// CONTEXT
// ============================================================================

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: RadioGroupVariant;
  size?: RadioGroupSize;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("Radio must be used within RadioGroup");
  }
  return context;
};

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<RadioGroupVariant, string> = {
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  info: "radio-info",
  success: "radio-success",
  warning: "radio-warning",
  error: "radio-error",
  subtle: "", // Handled specially in Radio component
};

const sizeClasses: Record<RadioGroupSize, string> = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg",
};

/**
 * RadioGroup component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <RadioGroup name="option" value={value} onChange={setValue}>
 *   <Radio value="1" label="Option 1" />
 *   <Radio value="2" label="Option 2" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      value,
      onChange,
      variant,
      size = "md",
      orientation = "vertical",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupContext.Provider value={{ name, value, onChange, variant, size }}>
        <div
          ref={ref}
          className={clsx(
            "flex",
            orientation === "vertical" ? "flex-col gap-2" : "flex-row gap-4",
            className
          )}
          role="radiogroup"
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, label, className, id, ...props }, ref) => {
    const { name, value: groupValue, onChange, variant, size } = useRadioGroup();
    const radioId = id || `radio-${name}-${value}`;
    const isChecked = groupValue === value;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    // For subtle variant, apply special styling
    const getRadioClasses = () => {
      if (variant === "subtle") {
        return clsx(
          "radio",
          size && sizeClasses[size],
          isChecked
            ? "radio-accent"
            : "!border-gray-400 !bg-transparent checked:!border-accent checked:!bg-accent",
          className
        );
      }
      return clsx(
        "radio",
        variant && variantClasses[variant],
        size && sizeClasses[size],
        className
      );
    };

    const radio = (
      <input
        ref={ref}
        id={radioId}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        className={getRadioClasses()}
        {...props}
      />
    );

    if (label) {
      return (
        <label htmlFor={radioId} className="label cursor-pointer justify-start gap-2">
          {radio}
          <span className="label-text">{label}</span>
        </label>
      );
    }

    return radio;
  }
);

Radio.displayName = "Radio";
