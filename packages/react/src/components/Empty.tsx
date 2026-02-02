import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Empty state icon */
	icon?: React.ReactNode;
	/** Empty state title */
	title?: string;
	/** Empty state description */
	description?: string;
	/** Action button */
	action?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Empty state component
 *
 * @example
 * ```tsx
 * <Empty
 *   icon={<Icon />}
 *   title="No items found"
 *   description="Try adjusting your search"
 *   action={<Button>Add New</Button>}
 * />
 * ```
 */
export const Empty = forwardRef<HTMLDivElement, EmptyProps>(
	({ icon, title, description, action, children, className, ...props }, ref) => {
		return (
			<div ref={ref} className={clsx("flex flex-col items-center justify-center py-12 px-4", className)} {...props}>
				{icon && <div className="mb-4 text-base-content/50">{icon}</div>}
				{title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
				{description && <p className="text-sm text-base-content/70 mb-4 text-center">{description}</p>}
				{action && <div className="mt-4">{action}</div>}
				{children}
			</div>
		);
	},
);

Empty.displayName = "Empty";
