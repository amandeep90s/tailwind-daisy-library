import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type MenubarOrientation = "horizontal" | "vertical";
export type MenubarSize = "xs" | "sm" | "md" | "lg";

export interface MenubarProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Orientation of menu */
  orientation?: MenubarOrientation;
  /** Size variant */
  size?: MenubarSize;
  /** Compact mode */
  compact?: boolean;
}

export interface MenubarItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Item href */
  href?: string;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Whether item is active */
  active?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

const sizeClasses: Record<MenubarSize, string> = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: "menu-md",
  lg: "menu-lg",
};

/**
 * Menubar component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Menubar>
 *   <MenubarItem active>Home</MenubarItem>
 *   <MenubarItem href="/about">About</MenubarItem>
 *   <MenubarItem disabled>Settings</MenubarItem>
 * </Menubar>
 * ```
 */
export const Menubar = forwardRef<HTMLUListElement, MenubarProps>(
  ({ orientation = "horizontal", size = "md", compact, children, className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={clsx(
          "menu",
          orientation === "horizontal" && "menu-horizontal",
          orientation === "vertical" && "menu-vertical",
          sizeClasses[size],
          compact && "menu-compact",
          "bg-base-100",
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

Menubar.displayName = "Menubar";

export const MenubarItem = forwardRef<HTMLLIElement, MenubarItemProps>(
  ({ href, disabled, active, children, className, ...props }, ref) => {
    const content = href ? <a href={href}>{children}</a> : <a>{children}</a>;

    return (
      <li ref={ref} className={clsx(disabled && "disabled", className)} {...props}>
        <a className={clsx(active && "active")}>{children}</a>
      </li>
    );
  }
);

MenubarItem.displayName = "MenubarItem";
