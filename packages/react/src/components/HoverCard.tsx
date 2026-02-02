import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Trigger element */
	trigger: React.ReactNode;
	/** Delay before showing (ms) */
	openDelay?: number;
	/** Delay before hiding (ms) */
	closeDelay?: number;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * HoverCard component - shows content on hover
 *
 * @example
 * ```tsx
 * <HoverCard trigger={<Button>Hover me</Button>}>
 *   <div className="card compact bg-base-100 shadow-xl">
 *     <div className="card-body">
 *       <h3>Hover Content</h3>
 *       <p>This appears on hover</p>
 *     </div>
 *   </div>
 * </HoverCard>
 * ```
 */
export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
	({ trigger, openDelay = 200, closeDelay = 300, children, className, ...props }, ref) => {
		const [isOpen, setIsOpen] = useState(false);
		const openTimeoutRef = useRef<number | undefined>(undefined);
		const closeTimeoutRef = useRef<number | undefined>(undefined);

		useEffect(() => {
			return () => {
				if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
				if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
			};
		}, []);

		const handleMouseEnter = () => {
			if (closeTimeoutRef.current) {
				clearTimeout(closeTimeoutRef.current);
			}
			openTimeoutRef.current = window.setTimeout(() => {
				setIsOpen(true);
			}, openDelay);
		};

		const handleMouseLeave = () => {
			if (openTimeoutRef.current) {
				clearTimeout(openTimeoutRef.current);
			}
			closeTimeoutRef.current = window.setTimeout(() => {
				setIsOpen(false);
			}, closeDelay);
		};

		return (
			<div
				ref={ref}
				className={clsx("relative inline-block", className)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				{...props}
			>
				{trigger}
				{isOpen && (
					<div className="absolute z-50 mt-2 left-0 top-full">
						<div className="animate-in fade-in-0 zoom-in-95">{children}</div>
					</div>
				)}
			</div>
		);
	},
);

HoverCard.displayName = "HoverCard";
