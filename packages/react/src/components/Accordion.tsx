import clsx from "clsx";
import React, { forwardRef, useCallback, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type AccordionVariant = "default" | "plus" | "arrow";
export type AccordionIconPosition = "left" | "right";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: AccordionVariant;
  /** Whether the accordion is open by default */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
}

export interface AccordionItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Title/summary content */
  title: React.ReactNode;
  /** Whether this item is open */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Variant style */
  variant?: AccordionVariant;
  /** Position of the accordion icon */
  iconPosition?: AccordionIconPosition;
  /** Action elements (buttons, icons) to display on the right side */
  actions?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<AccordionVariant, string> = {
  default: "",
  plus: "collapse-plus",
  arrow: "collapse-arrow",
};

// Icon position classes - reverses the icon position
const iconPositionClasses: Record<AccordionIconPosition, string> = {
  left: "",
  right: "[&>.collapse-title]:flex-row-reverse",
};

/**
 * Accordion component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Accordion variant="arrow">
 *   <AccordionItem title="Section 1" iconPosition="right" actions={<button>Edit</button>}>
 *     Content 1
 *   </AccordionItem>
 *   <AccordionItem title="Section 2">Content 2</AccordionItem>
 * </Accordion>
 * ```
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("space-y-2", className)} {...props}>
        {children}
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

/**
 * Chevron icon for accordion
 */
const ChevronIcon = ({ isOpen, className }: { isOpen: boolean; className?: string }) => (
  <svg
    className={clsx(
      "h-5 w-5 shrink-0 transition-transform duration-200",
      isOpen && "rotate-180",
      className
    )}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/**
 * AccordionItem component with customizable icon position and action slots
 *
 * @example
 * ```tsx
 * <AccordionItem
 *   title="Jack Jonas"
 *   iconPosition="right"
 *   actions={
 *     <>
 *       <button onClick={() => console.log('edit')}>Edit</button>
 *       <button onClick={() => console.log('delete')}>Delete</button>
 *     </>
 *   }
 * >
 *   Content here
 * </AccordionItem>
 * ```
 */
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      title,
      children,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      variant = "default",
      iconPosition = "left",
      actions,
      className,
      ...props
    },
    ref
  ) => {
    // Internal state for uncontrolled mode
    const [internalOpen, setInternalOpen] = useState(defaultOpen);

    // Determine if controlled or uncontrolled
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;

    // Toggle handler - only triggered by title/icon click
    const handleToggle = useCallback(() => {
      const newOpen = !isOpen;
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [isOpen, isControlled, onOpenChange]);

    // Handle title/icon click
    const handleTitleClick = useCallback(
      (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleToggle();
      },
      [handleToggle]
    );

    // Handle keyboard accessibility
    const handleTitleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      },
      [handleToggle]
    );

    // Stop propagation for actions to prevent accordion toggle
    const handleActionsClick = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
    }, []);

    // Use custom icon rendering when variant is "default" or we need right positioning
    const useCustomIcon = variant === "default" || iconPosition === "right";

    return (
      <div
        ref={ref}
        className={clsx(
          "collapse",
          "bg-base-200",
          // Only apply variant classes if not using custom icon
          !useCustomIcon && variantClasses[variant],
          isOpen && "collapse-open",
          className
        )}
        {...props}
      >
        {/* Hidden checkbox for DaisyUI collapse functionality - we control it manually */}
        <input type="checkbox" className="hidden" checked={isOpen} readOnly />

        {/* Custom title with icon positioning and actions */}
        <div
          className={clsx(
            "collapse-title text-xl font-medium",
            "flex cursor-pointer items-center gap-3 select-none",
            iconPosition === "right" && "flex-row-reverse justify-between"
          )}
          onClick={handleTitleClick}
          onKeyDown={handleTitleKeyDown}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
        >
          {/* Icon */}
          {useCustomIcon && <ChevronIcon isOpen={isOpen} />}

          {/* Title */}
          <span className={clsx("grow", iconPosition === "right" && "text-left")}>{title}</span>

          {/* Actions slot - stops propagation to prevent toggle */}
          {actions && (
            <div
              className="flex items-center gap-2"
              onClick={handleActionsClick}
              onKeyDown={(e) => e.stopPropagation()}
              role="group"
              aria-label="Item actions"
            >
              {actions}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="collapse-content">{children}</div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";
