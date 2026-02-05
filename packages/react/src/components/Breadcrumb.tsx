import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Link href */
  href?: string;
  /** Whether this is the current/active item */
  current?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Breadcrumb navigation component
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
 *   <BreadcrumbItem current>Details</BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={clsx("breadcrumbs text-sm", className)}
        {...props}
      >
        <ul>{children}</ul>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ href, current, children, className, ...props }, ref) => {
    const content = href && !current ? <a href={href}>{children}</a> : children;

    return (
      <li ref={ref} className={clsx(className)} {...props}>
        {content}
      </li>
    );
  }
);

BreadcrumbItem.displayName = "BreadcrumbItem";
