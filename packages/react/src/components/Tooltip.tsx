import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tooltip content */
  content: string;
  /** Tooltip position */
  position?: TooltipPosition;
  /** Tooltip variant */
  variant?: TooltipVariant;
  /** Always show tooltip */
  open?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

const positionClasses: Record<TooltipPosition, string> = {
  top: "tooltip-top",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right",
};

const variantClasses: Record<TooltipVariant, string> = {
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};

/**
 * Tooltip component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Tooltip content="This is a tooltip" position="top">
 *   <Button>Hover me</Button>
 * </Tooltip>
 * ```
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = "top", variant, open, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "tooltip",
          positionClasses[position],
          variant && variantClasses[variant],
          open && "tooltip-open",
          className
        )}
        data-tip={content}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";
