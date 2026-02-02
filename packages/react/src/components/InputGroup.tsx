import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface InputGroupProps extends React.HTMLAttributes<HTMLLabelElement> {
	/** Left addon content */
	left?: React.ReactNode;
	/** Right addon content */
	right?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * InputGroup component for input with addons
 *
 * @example
 * ```tsx
 * <InputGroup left="$" right=".00">
 *   <Input type="number" />
 * </InputGroup>
 * ```
 */
export const InputGroup = forwardRef<HTMLLabelElement, InputGroupProps>(
	({ left, right, children, className, ...props }, ref) => {
		return (
			<label ref={ref} className={clsx("input input-bordered flex items-center gap-2", className)} {...props}>
				{left && <span className="text-base-content/70">{left}</span>}
				{children}
				{right && <span className="text-base-content/70">{right}</span>}
			</label>
		);
	},
);

InputGroup.displayName = "InputGroup";
