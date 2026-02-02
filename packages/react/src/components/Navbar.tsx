import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type NavbarColor =
	| "default"
	| "neutral"
	| "primary"
	| "secondary"
	| "accent"
	| "info"
	| "success"
	| "warning"
	| "error";

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Background color variant */
	color?: NavbarColor;
	/** Add shadow */
	shadow?: boolean;
	/** Add border */
	bordered?: boolean;
	/** Make navbar sticky to top */
	sticky?: boolean;
	/** Glass effect background */
	glass?: boolean;
}

export interface NavbarStartProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface NavbarCenterProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface NavbarEndProps extends React.HTMLAttributes<HTMLDivElement> {}

// ============================================================================
// CLASS MAPPINGS
// ============================================================================

const colorClasses: Record<NavbarColor, string> = {
	default: "bg-base-100",
	neutral: "bg-neutral text-neutral-content",
	primary: "bg-primary text-primary-content",
	secondary: "bg-secondary text-secondary-content",
	accent: "bg-accent text-accent-content",
	info: "bg-info text-info-content",
	success: "bg-success text-success-content",
	warning: "bg-warning text-warning-content",
	error: "bg-error text-error-content",
};

// ============================================================================
// COMPONENTS
// ============================================================================

/**
 * Navbar component with DaisyUI styling
 *
 * A navigation bar for the top of the page with start, center, and end sections.
 *
 * @example
 * ```tsx
 * <Navbar>
 *   <NavbarStart>
 *     <a className="btn btn-ghost text-xl">daisyUI</a>
 *   </NavbarStart>
 *   <NavbarCenter>
 *     <a className="btn btn-ghost">Home</a>
 *     <a className="btn btn-ghost">About</a>
 *   </NavbarCenter>
 *   <NavbarEnd>
 *     <button className="btn btn-primary">Login</button>
 *   </NavbarEnd>
 * </Navbar>
 * ```
 */
export const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
	(
		{
			color = "default",
			shadow = false,
			bordered = false,
			sticky = false,
			glass = false,
			className,
			children,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={clsx(
					"navbar",
					colorClasses[color],
					shadow && "shadow-lg",
					bordered && "border-b border-base-300",
					sticky && "sticky top-0 z-50",
					glass && "glass",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Navbar.displayName = "Navbar";

/**
 * NavbarStart - Left section of the navbar (fills 50% width)
 */
export const NavbarStart = forwardRef<HTMLDivElement, NavbarStartProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={clsx("navbar-start", className)} {...props}>
			{children}
		</div>
	);
});

NavbarStart.displayName = "NavbarStart";

/**
 * NavbarCenter - Center section of the navbar
 */
export const NavbarCenter = forwardRef<HTMLDivElement, NavbarCenterProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={clsx("navbar-center", className)} {...props}>
			{children}
		</div>
	);
});

NavbarCenter.displayName = "NavbarCenter";

/**
 * NavbarEnd - Right section of the navbar (fills 50% width)
 */
export const NavbarEnd = forwardRef<HTMLDivElement, NavbarEndProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={clsx("navbar-end", className)} {...props}>
			{children}
		</div>
	);
});

NavbarEnd.displayName = "NavbarEnd";
