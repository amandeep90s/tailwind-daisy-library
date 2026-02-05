import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type DrawerPosition = "left" | "right" | "top" | "bottom";

export interface DrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  /** Whether drawer is open */
  open?: boolean;
  /** Callback when drawer should close */
  onClose?: () => void;
  /** Position of drawer */
  position?: DrawerPosition;
  /** Drawer content */
  content: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Drawer component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Drawer
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   position="right"
 *   content={<div className="menu p-4 w-80">Drawer content</div>}
 * >
 *   <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
 * </Drawer>
 * ```
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ open, onClose, position = "left", content, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("drawer", position === "right" && "drawer-end", className)}
        {...props}
      >
        <input
          type="checkbox"
          className="drawer-toggle"
          checked={open}
          onChange={(e) => {
            if (!e.target.checked) {
              onClose?.();
            }
          }}
          readOnly
        />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side z-40">
          <label className="drawer-overlay" onClick={onClose} />
          {content}
        </div>
      </div>
    );
  }
);

Drawer.displayName = "Drawer";
