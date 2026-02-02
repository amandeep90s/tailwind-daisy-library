import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type BadgeVariant =
	| "default"
	| "primary"
	| "secondary"
	| "accent"
	| "info"
	| "success"
	| "warning"
	| "error"
	| "ghost"
	| "outline";

export type BadgeSize = "xs" | "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/** Badge variant */
	variant?: BadgeVariant;
	/** Badge size */
	size?: BadgeSize;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<BadgeVariant, string> = {
	default: "badge-neutral",
	primary: "badge-primary",
	secondary: "badge-secondary",
	accent: "badge-accent",
	info: "badge-info",
	success: "badge-success",
	warning: "badge-warning",
	error: "badge-error",
	ghost: "badge-ghost",
	outline: "badge-outline",
};

const sizeClasses: Record<BadgeSize, string> = {
	xs: "badge-xs",
	sm: "badge-sm",
	md: "badge-md",
	lg: "badge-lg",
};

/**
 * Badge component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 * <Badge variant="success" size="sm">Active</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	({ variant = "default", size = "md", children, className, ...props }, ref) => {
		return (
			<span ref={ref} className={clsx("badge", variantClasses[variant], sizeClasses[size], className)} {...props}>
				{children}
			</span>
		);
	},
);

Badge.displayName = "Badge";
