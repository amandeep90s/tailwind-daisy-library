import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type KbdSize = "xs" | "sm" | "md" | "lg";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  /** Size variant */
  size?: KbdSize;
}

// ============================================================================
// COMPONENT
// ============================================================================

const sizeClasses: Record<KbdSize, string> = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: "kbd-md",
  lg: "kbd-lg",
};

/**
 * Kbd component for keyboard shortcuts
 *
 * @example
 * ```tsx
 * <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
 * <Kbd size="lg">Ctrl</Kbd>
 * ```
 */
export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ size = "md", children, className, ...props }, ref) => {
    return (
      <kbd ref={ref} className={clsx("kbd", sizeClasses[size], className)} {...props}>
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";
