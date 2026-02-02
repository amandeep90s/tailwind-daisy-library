import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type ProgressVariant = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";

export interface ProgressProps extends React.ProgressHTMLAttributes<HTMLProgressElement> {
	/** Progress variant */
	variant?: ProgressVariant;
	/** Current value (0-100) */
	value?: number;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<ProgressVariant, string> = {
	primary: "progress-primary",
	secondary: "progress-secondary",
	accent: "progress-accent",
	info: "progress-info",
	success: "progress-success",
	warning: "progress-warning",
	error: "progress-error",
};

/**
 * Progress component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Progress value={75} variant="primary" />
 * <Progress value={50} variant="success" max={100} />
 * ```
 */
export const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
	({ variant = "primary", value, className, ...props }, ref) => {
		return (
			<progress
				ref={ref}
				className={clsx("progress w-full", variantClasses[variant], className)}
				value={value}
				max={100}
				{...props}
			/>
		);
	},
);

Progress.displayName = "Progress";
