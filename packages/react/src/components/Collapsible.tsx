import clsx from "clsx";
import React, { forwardRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface CollapsibleProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Whether the collapsible is open by default */
	defaultOpen?: boolean;
	/** Controlled open state */
	open?: boolean;
	/** Callback when open state changes */
	onOpenChange?: (open: boolean) => void;
	/** Trigger element */
	trigger: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Collapsible component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Collapsible trigger={<Button>Toggle</Button>}>
 *   <p>Collapsible content goes here</p>
 * </Collapsible>
 * ```
 */
export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
	({ defaultOpen = false, open: controlledOpen, onOpenChange, trigger, children, className, ...props }, ref) => {
		const [internalOpen, setInternalOpen] = useState(defaultOpen);
		const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

		const handleToggle = () => {
			const newOpen = !isOpen;
			if (controlledOpen === undefined) {
				setInternalOpen(newOpen);
			}
			onOpenChange?.(newOpen);
		};

		return (
			<div ref={ref} className={clsx("collapse", isOpen && "collapse-open", className)} {...props}>
				<div className="collapse-title" onClick={handleToggle} role="button" tabIndex={0}>
					{trigger}
				</div>
				<div className="collapse-content">{children}</div>
			</div>
		);
	},
);

Collapsible.displayName = "Collapsible";
