import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type SelectVariant = "bordered" | "ghost";
export type SelectColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
export type SelectSize = "xs" | "sm" | "md" | "lg";

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
	/** Select variant */
	variant?: SelectVariant;
	/** Select color */
	color?: SelectColor;
	/** Select size */
	size?: SelectSize;
	/** Options array */
	options?: SelectOption[];
	/** Placeholder text */
	placeholder?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<SelectVariant, string> = {
	bordered: "select-bordered",
	ghost: "select-ghost",
};

const colorClasses: Record<SelectColor, string> = {
	primary: "select-primary",
	secondary: "select-secondary",
	accent: "select-accent",
	info: "select-info",
	success: "select-success",
	warning: "select-warning",
	error: "select-error",
};

const sizeClasses: Record<SelectSize, string> = {
	xs: "select-xs",
	sm: "select-sm",
	md: "select-md",
	lg: "select-lg",
};

/**
 * Select component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Select
 *   variant="bordered"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *   ]}
 *   placeholder="Select an option"
 * />
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ variant = "bordered", color, size = "md", options, placeholder, children, className, ...props }, ref) => {
		return (
			<select
				ref={ref}
				className={clsx(
					"select w-full",
					variantClasses[variant],
					color && colorClasses[color],
					sizeClasses[size],
					className,
				)}
				{...props}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options
					? options.map((option) => (
							<option key={option.value} value={option.value} disabled={option.disabled}>
								{option.label}
							</option>
						))
					: children}
			</select>
		);
	},
);

Select.displayName = "Select";
