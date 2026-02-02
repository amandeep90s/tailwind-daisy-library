import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type TextareaVariant = "bordered" | "ghost";
export type TextareaColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
export type TextareaSize = "xs" | "sm" | "md" | "lg";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	/** Textarea variant */
	variant?: TextareaVariant;
	/** Textarea color */
	color?: TextareaColor;
	/** Textarea size */
	size?: TextareaSize;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<TextareaVariant, string> = {
	bordered: "textarea-bordered",
	ghost: "textarea-ghost",
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
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ variant = "bordered", color, size = "md", className, ...props }, ref) => {
		return (
			<textarea
				ref={ref}
				className={clsx(
					"textarea w-full",
					variantClasses[variant],
					color && colorClasses[color],
					sizeClasses[size],
					className,
				)}
				{...props}
			/>
		);
	},
);

Textarea.displayName = "Textarea";
