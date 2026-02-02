import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Trigger element */
	trigger: React.ReactNode;
	/** Controlled open state */
	open?: boolean;
	/** Callback when open state changes */
	onOpenChange?: (open: boolean) => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Popover component
 *
 * @example
 * ```tsx
 * <Popover trigger={<Button>Open</Button>}>
 *   <div className="p-4">
 *     Popover content
 *   </div>
 * </Popover>
 * ```
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
	({ trigger, open, onOpenChange, children, className, ...props }, ref) => {
		const [internalOpen, setInternalOpen] = useState(false);
		const popoverRef = useRef<HTMLDivElement>(null);

		const isOpen = open !== undefined ? open : internalOpen;

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
					if (open === undefined) {
						setInternalOpen(false);
					}
					onOpenChange?.(false);
				}
			};

			if (isOpen) {
				document.addEventListener("mousedown", handleClickOutside);
				return () => document.removeEventListener("mousedown", handleClickOutside);
			}
		}, [isOpen, open, onOpenChange]);

		const handleTriggerClick = () => {
			const newOpen = !isOpen;
			if (open === undefined) {
				setInternalOpen(newOpen);
			}
			onOpenChange?.(newOpen);
		};

		return (
			<div ref={popoverRef} className={clsx("relative inline-block", className)} {...props}>
				<div onClick={handleTriggerClick}>{trigger}</div>
				{isOpen && (
					<div className="absolute z-50 mt-2 min-w-50">
						<div className="bg-base-100 rounded-lg shadow-lg border border-base-300 p-4">{children}</div>
					</div>
				)}
			</div>
		);
	},
);

Popover.displayName = "Popover";
