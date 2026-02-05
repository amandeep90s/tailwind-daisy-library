import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type DropdownPosition = "top" | "bottom" | "left" | "right" | "end";

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Trigger element */
  trigger: React.ReactNode;
  /** Dropdown position */
  position?: DropdownPosition;
  /** Open on hover instead of click */
  hover?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

const positionClasses: Record<DropdownPosition, string> = {
  top: "dropdown-top",
  bottom: "dropdown-bottom",
  left: "dropdown-left",
  right: "dropdown-right",
  end: "dropdown-end",
};

/**
 * Dropdown component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Dropdown trigger={<Button>Menu</Button>} position="bottom">
 *   <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
 *     <li><a>Item 1</a></li>
 *     <li><a>Item 2</a></li>
 *   </ul>
 * </Dropdown>
 * ```
 */
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      trigger,
      position = "bottom",
      hover = false,
      open,
      onOpenChange,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isOpen = open !== undefined ? open : internalOpen;

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          if (open === undefined) {
            setInternalOpen(false);
          }
          onOpenChange?.(false);
        }
      };

      if (isOpen && !hover) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, hover, open, onOpenChange]);

    const handleTriggerClick = () => {
      if (!hover) {
        const newOpen = !isOpen;
        if (open === undefined) {
          setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      }
    };

    return (
      <div
        ref={dropdownRef}
        className={clsx(
          "dropdown",
          positionClasses[position],
          hover && "dropdown-hover",
          isOpen && "dropdown-open",
          className
        )}
        {...props}
      >
        <div tabIndex={0} role="button" onClick={handleTriggerClick}>
          {trigger}
        </div>
        {children}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

/**
 * DropdownMenu component for menu content
 */
export interface DropdownMenuProps extends React.HTMLAttributes<HTMLUListElement> {}

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        tabIndex={0}
        className={clsx(
          "dropdown-content menu bg-base-100 rounded-box z-1 w-auto max-w-75 min-w-52 truncate p-2 shadow",
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";
