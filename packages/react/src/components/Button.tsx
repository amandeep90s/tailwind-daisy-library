import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link"
  | "outline";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonShape = "default" | "wide" | "block" | "circle" | "square";

/**
 * Props for the Link component passed to the `as` prop.
 * Compatible with react-router-dom Link, Next.js Link, etc.
 */
export interface LinkComponentProps {
  to: string;
  className?: string;
  children?: React.ReactNode;
  "aria-disabled"?: boolean;
  tabIndex?: number;
  onClick?: (e: React.MouseEvent) => void;
}

interface BaseButtonProps {
  /** Color variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Shape of the button */
  shape?: ButtonShape;
  /** Show loading spinner */
  loading?: boolean;
  /** Active state */
  active?: boolean;
  /** Glass effect */
  glass?: boolean;
  /** Disable animation */
  noAnimation?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}

export interface ButtonAsButtonProps
  extends
    BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  /** Render as a button element (default) */
  as?: "button";
}

export interface ButtonAsLinkProps extends BaseButtonProps {
  /**
   * Render as a Link component for navigation.
   * Pass a Link component from react-router-dom or similar.
   * @example
   * import { Link } from 'react-router-dom';
   * <Button as={Link} to="/dashboard">Dashboard</Button>
   */
  as: React.ComponentType<LinkComponentProps>;
  /** The URL path to navigate to (required when using `as` prop) */
  to: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const variantClasses: Record<ButtonVariant, string> = {
  default: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  ghost: "btn-ghost",
  link: "btn-link",
  outline: "btn-outline",
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  default: "",
  wide: "btn-wide",
  block: "btn-block",
  circle: "btn-circle",
  square: "btn-square",
};

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Button component with DaisyUI styling.
 * Can be rendered as a button or as a Link component for navigation.
 *
 * @example
 * ```tsx
 * // As a button (default)
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" loading>Loading...</Button>
 * <Button variant="ghost" shape="circle">X</Button>
 *
 * // As a Link (for navigation)
 * import { Link } from 'react-router-dom';
 * <Button as={Link} to="/dashboard" variant="primary">Dashboard</Button>
 * ```
 */
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    children,
    variant = "default",
    size = "md",
    shape = "default",
    loading = false,
    active = false,
    glass = false,
    noAnimation = false,
    className,
    ...restProps
  } = props;

  const buttonClasses = clsx(
    "btn",
    variantClasses[variant],
    sizeClasses[size],
    shapeClasses[shape],
    active && "btn-active",
    glass && "glass",
    noAnimation && "no-animation",
    className,
  );

  // Check if rendering as a Link component
  if ("as" in props && props.as && props.as !== "button") {
    const {
      as: LinkComponent,
      to,
      disabled,
      ...linkRestProps
    } = props as ButtonAsLinkProps & { disabled?: boolean };

    const handleClick = (e: React.MouseEvent) => {
      if (disabled || loading) {
        e.preventDefault();
      }
    };

    return (
      <LinkComponent
        to={to}
        className={clsx(
          buttonClasses,
          (disabled || loading) &&
            "btn-disabled pointer-events-auto cursor-not-allowed",
        )}
        aria-disabled={disabled || loading}
        tabIndex={disabled || loading ? -1 : undefined}
        onClick={handleClick}
      >
        {loading && <span className="loading loading-spinner" />}
        {children}
      </LinkComponent>
    );
  }

  // Render as a regular button
  const {
    disabled,
    type = "button",
    ...buttonRestProps
  } = restProps as Omit<ButtonAsButtonProps, keyof BaseButtonProps>;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled || loading}
      className={buttonClasses}
      {...buttonRestProps}
    >
      {loading && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
});

Button.displayName = "Button";
