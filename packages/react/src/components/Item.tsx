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
      <div
        ref={ref}
        className={clsx("hover:bg-base-200 flex items-center gap-3 rounded-lg p-3", className)}
        {...props}
      >
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="min-w-0 flex-1">
          {title && <div className="font-medium">{title}</div>}
          {description && <div className="text-base-content/70 text-sm">{description}</div>}
          {children}
        </div>
        {rightContent && <div className="shrink-0">{rightContent}</div>}
      </div>
    );
  }
);

Item.displayName = "Item";
