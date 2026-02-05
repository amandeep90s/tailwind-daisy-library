import clsx from "clsx";
import React, { forwardRef } from "react";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

// ============================================================================
// TYPES
// ============================================================================

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alert variant/type */
  variant?: AlertVariant;
  /** Optional icon (if not provided, default icon will be shown) */
  icon?: React.ReactNode;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

// ============================================================================
// DEFAULT ICONS
// ============================================================================

const defaultIcons: Record<AlertVariant, React.ReactNode> = {
  info: <InformationCircleIcon className="h-6 w-6 shrink-0 stroke-current" />,
  success: <CheckCircleIcon className="h-6 w-6 shrink-0 stroke-current" />,
  warning: <ExclamationTriangleIcon className="h-6 w-6 shrink-0 stroke-current" />,
  error: <XCircleIcon className="h-6 w-6 shrink-0 stroke-current" />,
};

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<AlertVariant, string> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

/**
 * Alert component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Alert variant="success">
 *   <AlertTitle>Success</AlertTitle>
 *   <AlertDescription>Your changes have been saved.</AlertDescription>
 * </Alert>
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = "info", icon, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={clsx("alert", variant && variantClasses[variant], className)}
        {...props}
      >
        {icon ?? defaultIcons[variant]}
        <span>{children}</span>
      </div>
    );
  }
);

Alert.displayName = "Alert";

/**
 * AlertTitle component for alert headings
 */
export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3 ref={ref} className={clsx("font-bold", className)} {...props}>
        {children}
      </h3>
    );
  }
);

AlertTitle.displayName = "AlertTitle";

/**
 * AlertDescription component for alert body text
 */
export const AlertDescription = forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("text-sm", className)} {...props}>
        {children}
      </div>
    );
  }
);

AlertDescription.displayName = "AlertDescription";
