import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerType = "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
export type SpinnerColor =
  | "primary"
  | "secondary"
  | "accent"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Spinner size */
  size?: SpinnerSize;
  /** Spinner animation type */
  type?: SpinnerType;
  /** Spinner color */
  color?: SpinnerColor;
}

// ============================================================================
// COMPONENT
// ============================================================================

const sizeClasses: Record<SpinnerSize, string> = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
  xl: "loading-xl",
};

const typeClasses: Record<SpinnerType, string> = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity",
};

const colorClasses: Record<SpinnerColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

/**
 * Spinner/Loading component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Spinner size="md" type="spinner" />
 * <Spinner size="lg" type="dots" color="primary" />
 * ```
 */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = "md", type = "spinner", color, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          "loading",
          typeClasses[type],
          sizeClasses[size],
          color && colorClasses[color],
          className
        )}
        {...props}
      />
    );
  }
);

Spinner.displayName = "Spinner";
