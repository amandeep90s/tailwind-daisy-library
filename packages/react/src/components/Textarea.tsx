import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type TextareaVariant = "bordered" | "ghost" | "floating";
export type TextareaColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";
export type TextareaSize = "xs" | "sm" | "md" | "lg";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Textarea variant */
  variant?: TextareaVariant;
  /** Textarea color */
  color?: TextareaColor;
  /** Textarea size */
  size?: TextareaSize;
  /** Label for floating variant */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<TextareaVariant, string> = {
  bordered: "textarea-bordered",
  ghost: "textarea-ghost",
  floating: "textarea-bordered",
};

const colorClasses: Record<TextareaColor, string> = {
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error",
};

const sizeClasses: Record<TextareaSize, string> = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "textarea-md",
  lg: "textarea-lg",
};

/**
 * Textarea component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Textarea variant="bordered" placeholder="Enter text..." />
 * <Textarea color="primary" rows={5} />
 * <Textarea variant="floating" label="Message" placeholder="Enter message..." />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { variant = "bordered", color, size = "md", label, error, helperText, className, id, ...props },
    ref
  ) => {
    const textareaId =
      id || (label ? `textarea-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

    const textareaClasses = clsx(
      "textarea w-full",
      variant !== "floating" && variantClasses[variant],
      error ? colorClasses.error : color && colorClasses[color],
      sizeClasses[size],
      className
    );

    // Floating label variant
    if (variant === "floating") {
      return (
        <div className="form-control w-full">
          <label className="floating-label">
            <span className="label-text">{label ?? props.placeholder}</span>
            <textarea
              ref={ref}
              id={textareaId}
              className={clsx(
                "textarea w-full",
                variantClasses[variant],
                error ? colorClasses.error : color && colorClasses[color],
                sizeClasses[size],
                className
              )}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={
                error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
              }
              placeholder={props.placeholder ?? label}
              {...props}
            />
          </label>
          {error && (
            <label className="label" id={`${textareaId}-error`}>
              <span className="label-text-alt text-error">{error}</span>
            </label>
          )}
          {!error && helperText && (
            <label className="label" id={`${textareaId}-helper`}>
              <span className="label-text-alt">{helperText}</span>
            </label>
          )}
        </div>
      );
    }

    // Standard variants (bordered, ghost)
    return (
      <div className="form-control w-full">
        {label && (
          <label className="label" htmlFor={textareaId}>
            <span className="label-text font-medium">{label}</span>
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        {error && (
          <label className="label" id={`${textareaId}-error`}>
            <span className="label-text-alt text-error">{error}</span>
          </label>
        )}
        {!error && helperText && (
          <label className="label" id={`${textareaId}-helper`}>
            <span className="label-text-alt">{helperText}</span>
          </label>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
