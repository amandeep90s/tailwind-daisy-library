import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type SeparatorOrientation = "horizontal" | "vertical";
export type SeparatorVariant = "default" | "primary" | "secondary" | "accent";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Separator orientation */
  orientation?: SeparatorOrientation;
  /** Separator variant */
  variant?: SeparatorVariant;
  /** Text to display in separator */
  text?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<SeparatorVariant, string> = {
  default: "",
  primary: "divider-primary",
  secondary: "divider-secondary",
  accent: "divider-accent",
};

/**
 * Separator/Divider component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Separator />
 * <Separator text="OR" />
 * <Separator orientation="vertical" />
 * ```
 */
export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { orientation = "horizontal", variant = "default", text, className, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "divider",
          orientation === "vertical" && "divider-horizontal",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {text || children}
      </div>
    );
  }
);

Separator.displayName = "Separator";
