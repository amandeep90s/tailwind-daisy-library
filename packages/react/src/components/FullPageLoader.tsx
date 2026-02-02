import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type FullPageLoaderSize = "xs" | "sm" | "md" | "lg" | "xl";
export type FullPageLoaderType =
  | "spinner"
  | "dots"
  | "ring"
  | "ball"
  | "bars"
  | "infinity";
export type FullPageLoaderVariant =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface FullPageLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the loader is visible */
  visible?: boolean;
  /** Loader spinner size */
  size?: FullPageLoaderSize;
  /** Loader animation type */
  type?: FullPageLoaderType;
  /** Loader color variant */
  variant?: FullPageLoaderVariant;
  /** Loading text to display below spinner */
  text?: string;
  /** Background opacity (0-100) */
  backgroundOpacity?: number;
  /** Whether to blur the background */
  blur?: boolean;
  /** Z-index for the overlay */
  zIndex?: number;
}

// ============================================================================
// COMPONENT
// ============================================================================

const sizeClasses: Record<FullPageLoaderSize, string> = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
  xl: "w-16 h-16",
};

const typeClasses: Record<FullPageLoaderType, string> = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity",
};

const variantClasses: Record<FullPageLoaderVariant, string> = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

const textSizeClasses: Record<FullPageLoaderSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

/**
 * Full Page Loader component - displays a full-screen loading overlay
 */
export const FullPageLoader = forwardRef<HTMLDivElement, FullPageLoaderProps>(
  (
    {
      visible = true,
      size = "lg",
      type = "spinner",
      variant = "primary",
      text,
      backgroundOpacity = 80,
      blur = false,
      zIndex = 50,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    if (!visible) return null;

    const opacityValue = Math.min(100, Math.max(0, backgroundOpacity));

    return (
      <div
        ref={ref}
        className={clsx("fixed inset-0", className)}
        style={{
          zIndex,
          ...style,
        }}
        role="status"
        aria-live="polite"
        aria-busy="true"
        {...props}
      >
        {/* Backdrop layer */}
        <div
          className={clsx(
            "absolute inset-0 bg-base-100",
            blur && "backdrop-blur-sm",
          )}
          style={{
            opacity: opacityValue / 100,
          }}
        />
        {/* Content layer - centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center justify-center gap-0">
            <span
              className={clsx(
                "loading",
                typeClasses[type],
                sizeClasses[size],
                variantClasses[variant],
              )}
              aria-hidden="true"
            />
            {text && (
              <p
                className={clsx(
                  "mt-4 font-medium",
                  textSizeClasses[size],
                  variantClasses[variant],
                )}
              >
                {text}
              </p>
            )}
          </div>
        </div>
        {/* Screen reader text */}
        <span className="sr-only">{text || "Loading..."}</span>
      </div>
    );
  },
);

FullPageLoader.displayName = "FullPageLoader";
