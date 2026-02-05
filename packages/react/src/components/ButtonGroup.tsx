import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation of the button group */
  orientation?: "horizontal" | "vertical";
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * ButtonGroup component with DaisyUI join styling
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button>One</Button>
 *   <Button>Two</Button>
 *   <Button>Three</Button>
 * </ButtonGroup>
 * ```
 */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ orientation = "horizontal", children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("join", orientation === "vertical" && "join-vertical", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              className: clsx((child.props as any).className, "join-item"),
            });
          }
          return child;
        })}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
