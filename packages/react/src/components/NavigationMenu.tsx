import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {}

export interface NavigationMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
	href?: string;
	active?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * NavigationMenu component
 *
 * @example
 * ```tsx
 * <NavigationMenu>
 *   <NavigationMenuItem href="/" active>Home</NavigationMenuItem>
 *   <NavigationMenuItem href="/about">About</NavigationMenuItem>
 * </NavigationMenu>
 * ```
 */
export const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(({ children, className, ...props }, ref) => {
	return (
		<nav ref={ref} className={clsx("navbar bg-base-100", className)} {...props}>
			<ul className="menu menu-horizontal px-1">{children}</ul>
		</nav>
	);
});

NavigationMenu.displayName = "NavigationMenu";

export const NavigationMenuItem = forwardRef<HTMLLIElement, NavigationMenuItemProps>(
	({ href, active, children, className, ...props }, ref) => {
		return (
			<li ref={ref} className={className} {...props}>
				{href ? (
					<a href={href} className={clsx(active && "active")}>
						{children}
					</a>
				) : (
					<span className={clsx(active && "active")}>{children}</span>
				)}
			</li>
		);
	},
);

NavigationMenuItem.displayName = "NavigationMenuItem";
