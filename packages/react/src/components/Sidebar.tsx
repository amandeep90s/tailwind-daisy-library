import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Whether sidebar is collapsed */
	collapsed?: boolean;
}

export interface SidebarItemProps extends React.HTMLAttributes<HTMLLIElement> {
	/** Item icon */
	icon?: React.ReactNode;
	/** Item href */
	href?: string;
	/** Whether item is active */
	active?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Sidebar navigation component
 *
 * @example
 * ```tsx
 * <Sidebar>
 *   <SidebarItem icon={<Icon />} href="/" active>Home</SidebarItem>
 *   <SidebarItem icon={<Icon />} href="/settings">Settings</SidebarItem>
 * </Sidebar>
 * ```
 */
export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({ collapsed, children, className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={clsx("bg-base-200 h-full transition-all duration-300", collapsed ? "w-16" : "w-64", className)}
			{...props}
		>
			<ul className="menu p-4 h-full">{children}</ul>
		</div>
	);
});

Sidebar.displayName = "Sidebar";

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>(
	({ icon, href, active, children, className, ...props }, ref) => {
		const content = (
			<>
				{icon && <span className="shrink-0">{icon}</span>}
				<span>{children}</span>
			</>
		);

		return (
			<li ref={ref} className={className} {...props}>
				{href ? (
					<a href={href} className={clsx(active && "active")}>
						{content}
					</a>
				) : (
					<span className={clsx(active && "active")}>{content}</span>
				)}
			</li>
		);
	},
);

SidebarItem.displayName = "SidebarItem";
