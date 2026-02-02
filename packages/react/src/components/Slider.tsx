import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type SliderVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
export type SliderSize = "xs" | "sm" | "md" | "lg";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
	/** Slider variant */
	variant?: SliderVariant;
	/** Slider size */
	size?: SliderSize;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<SliderVariant, string> = {
	primary: "range-primary",
	secondary: "range-secondary",
	accent: "range-accent",
	info: "range-info",
	success: "range-success",
	warning: "range-warning",
	error: "range-error",
};

const sizeClasses: Record<SliderSize, string> = {
	xs: "range-xs",
	sm: "range-sm",
	md: "range-md",
	lg: "range-lg",
};

/**
 * Slider/Range component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Slider variant="primary" min={0} max={100} value={50} />
 * ```
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(
	({ variant = "primary", size = "md", className, ...props }, ref) => {
		return (
			<input
				ref={ref}
				type="range"
				className={clsx("range", variantClasses[variant], sizeClasses[size], className)}
				{...props}
			/>
		);
	},
);

Slider.displayName = "Slider";
