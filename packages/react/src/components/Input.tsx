import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type InputVariant = "bordered" | "ghost";

export type InputColor =
	| "default"
	| "neutral"
	| "primary"
	| "secondary"
	| "accent"
	| "info"
	| "success"
	| "warning"
	| "error";

export type InputSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	/** Style variant of the input */
	variant?: InputVariant;
	/** Color variant of the input */
	color?: InputColor;
	/** Size of the input */
	size?: InputSize;
	/** Label text displayed above the input */
	label?: string;
	/** Error message displayed below the input */
	error?: string;
	/** Helper text displayed below the input */
	helperText?: string;
	/** Icon or element to display at the start (left) of the input */
	startIcon?: React.ReactNode;
	/** Icon or element to display at the end (right) of the input */
	endIcon?: React.ReactNode;
	/** Whether to use the wrapper style (input class on container) */
	wrapperStyle?: boolean;
}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const variantClasses: Record<InputVariant, string> = {
	bordered: "input-bordered",
	ghost: "input-ghost",
};

const colorClasses: Record<InputColor, string> = {
	default: "",
	neutral: "input-neutral",
	primary: "input-primary",
	secondary: "input-secondary",
	accent: "input-accent",
	info: "input-info",
	success: "input-success",
	warning: "input-warning",
	error: "input-error",
};

const sizeClasses: Record<InputSize, string> = {
	xs: "input-xs",
	sm: "input-sm",
	md: "input-md",
	lg: "input-lg",
	xl: "input-xl",
};

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Input component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter text" />
 * <Input label="Email" type="email" />
 * <Input label="Password" error="Invalid password" />
 * <Input startIcon={<SearchIcon />} placeholder="Search..." />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			variant = "bordered",
			color = "default",
			size = "md",
			label,
			error,
			helperText,
			startIcon,
			endIcon,
			wrapperStyle = false,
			className,
			id,
			...props
		},
		ref,
	) => {
		const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);

		const inputClasses = clsx(
			"input w-full",
			variantClasses[variant],
			error ? colorClasses.error : colorClasses[color],
			sizeClasses[size],
			className,
		);

		// If we have icons or want wrapper style, use the wrapper approach
		const hasWrapper = startIcon || endIcon || wrapperStyle;

		const renderInput = () => {
			if (hasWrapper) {
				return (
					<label
						className={clsx(
							"input flex items-center gap-2 w-full",
							variantClasses[variant],
							error ? colorClasses.error : colorClasses[color],
							sizeClasses[size],
							className,
						)}
					>
						{startIcon && <span className="text-base-content/50">{startIcon}</span>}
						<input
							ref={ref}
							id={inputId}
							className="grow bg-transparent border-none outline-none"
							aria-invalid={error ? "true" : undefined}
							aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
							{...props}
						/>
						{endIcon && <span className="text-base-content/50">{endIcon}</span>}
					</label>
				);
			}

			return (
				<input
					ref={ref}
					id={inputId}
					className={inputClasses}
					aria-invalid={error ? "true" : undefined}
					aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
					{...props}
				/>
			);
		};

		return (
			<div className="form-control w-full">
				{label && (
					<label className="label" htmlFor={inputId}>
						<span className="label-text font-medium">{label}</span>
					</label>
				)}

				{renderInput()}

				{error && (
					<label className="label" id={`${inputId}-error`}>
						<span className="label-text-alt text-error">{error}</span>
					</label>
				)}

				{!error && helperText && (
					<label className="label" id={`${inputId}-helper`}>
						<span className="label-text-alt">{helperText}</span>
					</label>
				)}
			</div>
		);
	},
);

Input.displayName = "Input";
