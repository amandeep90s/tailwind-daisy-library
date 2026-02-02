import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface DatePickerProps extends Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"type" | "onChange" | "value" | "min" | "max" | "min" | "max"
> {
	/** Selected date */
	value?: Date;
	/** Callback when date changes */
	onChange?: (date: Date | null) => void;
	/** Minimum selectable date */
	min?: Date;
	/** Maximum selectable date */
	max?: Date;
}

// ============================================================================
// HELPERS
// ============================================================================

function formatDate(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function parseDate(dateString: string): Date | null {
	const date = new Date(dateString);
	return isNaN(date.getTime()) ? null : date;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * DatePicker component with native input
 *
 * @example
 * ```tsx
 * <DatePicker value={selectedDate} onChange={setSelectedDate} />
 * ```
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
	({ value, onChange, min, max, className, ...props }, ref) => {
		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const date = parseDate(e.target.value);
			onChange?.(date);
		};

		return (
			<input
				ref={ref}
				type="date"
				value={value ? formatDate(value) : ""}
				onChange={handleChange}
				min={min ? formatDate(min) : undefined}
				max={max ? formatDate(max) : undefined}
				className={clsx("input input-bordered w-full", className)}
				{...props}
			/>
		);
	},
);

DatePicker.displayName = "DatePicker";
