import clsx from "clsx";
import React, { createContext, forwardRef, useContext, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type ToggleSize = "xs" | "sm" | "md" | "lg";
export type ToggleVariant = "primary" | "secondary" | "accent";

export interface ToggleProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> {
  /** Whether toggle is pressed */
  pressed?: boolean;
  /** Callback when pressed state changes */
  onPressedChange?: (pressed: boolean) => void;
  /** Toggle size */
  size?: ToggleSize;
  /** Toggle variant */
  variant?: ToggleVariant;
}

export interface ToggleGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Toggle type - single or multiple */
  type: "single" | "multiple";
  /** Selected value(s) */
  value?: string | string[];
  /** Callback when value changes */
  onChange?: (value: string | string[]) => void;
  /** Toggle size */
  size?: ToggleSize;
  /** Toggle variant */
  variant?: ToggleVariant;
}

export interface ToggleGroupItemProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "value"
> {
  /** Item value */
  value: string;
}

// ============================================================================
// CONTEXT
// ============================================================================

interface ToggleGroupContextValue {
  type: "single" | "multiple";
  value?: string | string[];
  onChange?: (value: string) => void;
  size?: ToggleSize;
  variant?: ToggleVariant;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

const useToggleGroup = () => {
  const context = useContext(ToggleGroupContext);
  if (!context) {
    throw new Error("ToggleGroupItem must be used within ToggleGroup");
  }
  return context;
};

// ============================================================================
// COMPONENT
// ============================================================================

const sizeClasses: Record<ToggleSize, string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const variantClasses: Record<ToggleVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
};

/**
 * Toggle button component
 *
 * @example
 * ```tsx
 * <Toggle pressed={isPressed} onPressedChange={setIsPressed}>
 *   Toggle me
 * </Toggle>
 * ```
 */
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ pressed, onPressedChange, size = "md", variant, children, className, ...props }, ref) => {
    const [internalPressed, setInternalPressed] = useState(false);
    const isPressed = pressed !== undefined ? pressed : internalPressed;

    const handleClick = () => {
      const newPressed = !isPressed;
      if (pressed === undefined) {
        setInternalPressed(newPressed);
      }
      onPressedChange?.(newPressed);
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        aria-pressed={isPressed}
        className={clsx(
          "btn",
          sizeClasses[size],
          variant && variantClasses[variant],
          isPressed && "btn-active",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Toggle.displayName = "Toggle";

/**
 * ToggleGroup component for multiple toggle buttons
 *
 * @example
 * ```tsx
 * <ToggleGroup type="single" value={value} onChange={setValue}>
 *   <ToggleGroupItem value="left">Left</ToggleGroupItem>
 *   <ToggleGroupItem value="center">Center</ToggleGroupItem>
 *   <ToggleGroupItem value="right">Right</ToggleGroupItem>
 * </ToggleGroup>
 * ```
 */
export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ type, value, onChange, size = "md", variant, children, className, ...props }, ref) => {
    const handleItemChange = (itemValue: string) => {
      if (type === "single") {
        onChange?.(itemValue);
      } else {
        const currentValues = Array.isArray(value) ? value : [];
        const newValues = currentValues.includes(itemValue)
          ? currentValues.filter((v) => v !== itemValue)
          : [...currentValues, itemValue];
        onChange?.(newValues);
      }
    };

    return (
      <ToggleGroupContext.Provider
        value={{ type, value, onChange: handleItemChange, size, variant }}
      >
        <div ref={ref} className={clsx("join", className)} role="group" {...props}>
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  }
);

ToggleGroup.displayName = "ToggleGroup";

export const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ value, children, className, ...props }, ref) => {
    const { type, value: groupValue, onChange, size, variant } = useToggleGroup();

    const isPressed =
      type === "single"
        ? groupValue === value
        : Array.isArray(groupValue) && groupValue.includes(value);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => onChange?.(value)}
        aria-pressed={isPressed}
        className={clsx(
          "btn join-item",
          size && sizeClasses[size],
          variant && variantClasses[variant],
          isPressed && "btn-active",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ToggleGroupItem.displayName = "ToggleGroupItem";
