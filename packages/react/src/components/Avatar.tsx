import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "offline" | null;
export type AvatarShape = "circle" | "rounded" | "square" | "squircle" | "hexagon" | "triangle";
export type AvatarRingColor =
  | "default"
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Size variant */
  size?: AvatarSize;
  /** Online status indicator */
  status?: AvatarStatus;
  /** Fallback content when no image (text or ReactNode) */
  fallback?: React.ReactNode;
  /** Shape of avatar */
  shape?: AvatarShape;
  /** Ring around avatar */
  ring?: boolean;
  /** Ring color */
  ringColor?: AvatarRingColor;
  /** Ring offset */
  ringOffset?: boolean;
  /** Placeholder background color */
  placeholderColor?: AvatarRingColor;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const sizeClasses: Record<AvatarSize, string> = {
  xs: "w-8",
  sm: "w-12",
  md: "w-16",
  lg: "w-24",
  xl: "w-32",
};

const sizeFontClasses: Record<AvatarSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

const shapeClasses: Record<AvatarShape, string> = {
  circle: "rounded-full",
  rounded: "rounded-xl",
  square: "rounded-none",
  squircle: "mask mask-squircle",
  hexagon: "mask mask-hexagon",
  triangle: "mask mask-triangle",
};

const ringColorClasses: Record<AvatarRingColor, string> = {
  default: "ring-base-content",
  neutral: "ring-neutral",
  primary: "ring-primary",
  secondary: "ring-secondary",
  accent: "ring-accent",
  info: "ring-info",
  success: "ring-success",
  warning: "ring-warning",
  error: "ring-error",
};

const placeholderColorClasses: Record<AvatarRingColor, string> = {
  default: "bg-neutral text-neutral-content",
  neutral: "bg-neutral text-neutral-content",
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  info: "bg-info text-info-content",
  success: "bg-success text-success-content",
  warning: "bg-warning text-warning-content",
  error: "bg-error text-error-content",
};

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Avatar component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="User" size="md" status="online" />
 * <Avatar fallback="JD" size="lg" />
 * <Avatar fallback="AB" shape="hexagon" ring ringColor="primary" />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = "",
      size = "md",
      status,
      fallback,
      shape = "circle",
      ring = false,
      ringColor = "default",
      ringOffset = false,
      placeholderColor = "default",
      className,
      ...props
    },
    ref
  ) => {
    const isPlaceholder = !src;

    // Ring classes
    const ringClasses = ring
      ? clsx("ring", ringColorClasses[ringColor], ringOffset && "ring-offset ring-offset-base-100")
      : "";

    // Placeholder classes
    const placeholderClasses = isPlaceholder ? placeholderColorClasses[placeholderColor] : "";

    return (
      <div
        ref={ref}
        className={clsx(
          "avatar",
          status === "online" && "avatar-online",
          status === "offline" && "avatar-offline",
          isPlaceholder && "avatar-placeholder",
          className
        )}
        {...props}
      >
        <div
          className={clsx(
            sizeClasses[size],
            shapeClasses[shape], // Directly use shape prop
            ringClasses,
            isPlaceholder && placeholderClasses
          )}
        >
          {src ? <img src={src} alt={alt} /> : <span className={sizeFontClasses[size]}>{fallback || "?"}</span>}
        </div>
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

// ============================================================================
// AVATAR GROUP
// ============================================================================

/**
 * AvatarGroup component for displaying multiple avatars
 */
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show */
  max?: number;
  /** Size for child avatars and counter */
  size?: AvatarSize;
  /** Shape for child avatars and counter */
  shape?: AvatarShape;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max, size = "md", shape = "circle", className, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const displayChildren = max ? childArray.slice(0, max) : childArray;
    const remaining = max && childArray.length > max ? childArray.length - max : 0;

    return (
      <div ref={ref} className={clsx("avatar-group -space-x-6 rtl:space-x-reverse", className)} {...props}>
        {displayChildren}
        {remaining > 0 && (
          <div className="avatar avatar-placeholder">
            <div className={clsx(sizeClasses[size], shapeClasses[shape], "bg-neutral text-neutral-content")}>
              <span className={sizeFontClasses[size]}>+{remaining}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
