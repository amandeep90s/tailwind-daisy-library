import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface ItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
	/** Item icon */
	icon?: React.ReactNode;
	/** Item title */
	title?: string;
	/** Item description */
	description?: string;
	/** Right content */
	rightContent?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Item component for list items
 *
 * @example
 * ```tsx
 * <Item
 *   icon={<Icon />}
 *   title="Item Title"
 *   description="Item description"
 *   rightContent={<Badge>New</Badge>}
 * />
 * ```
 */
export const Item = forwardRef<HTMLDivElement, ItemProps>(
	({ icon, title, description, rightContent, children, className, ...props }, ref) => {
		return (
			<div ref={ref} className={clsx("flex items-center gap-3 p-3 hover:bg-base-200 rounded-lg", className)} {...props}>
				{icon && <div className="shrink-0">{icon}</div>}
				<div className="flex-1 min-w-0">
					{title && <div className="font-medium">{title}</div>}
					{description && <div className="text-sm text-base-content/70">{description}</div>}
					{children}
				</div>
				{rightContent && <div className="shrink-0">{rightContent}</div>}
			</div>
		);
	},
);

Item.displayName = "Item";
