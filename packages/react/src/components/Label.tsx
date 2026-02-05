import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** The content of the label */
  children: React.ReactNode;
  /** Whether this label is required (shows asterisk) */
  required?: boolean;
  /** Alternative/helper text style */
  alt?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Label component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Label>Username</Label>
 * <Label required>Email</Label>
 * <Label alt>Optional field</Label>
 * ```
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required = false, alt = false, className, ...props }, ref) => {
    return (
      <label ref={ref} className={clsx("label", className)} {...props}>
        <span className={clsx(alt ? "label-text-alt" : "label-text", "font-medium")}>
          {children}
          {required && <span className="text-error ml-1">*</span>}
        </span>
      </label>
    );
  }
);

Label.displayName = "Label";
