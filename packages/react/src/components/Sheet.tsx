import clsx from "clsx";
import React, { forwardRef, useEffect, useRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type SheetPosition = "top" | "right" | "bottom" | "left";

export interface SheetProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
	/** Whether sheet is open */
	open?: boolean;
	/** Callback when sheet should close */
	onClose?: () => void;
	/** Position of sheet */
	position?: SheetPosition;
	/** Sheet title */
	title?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Sheet component (side modal)
 *
 * @example
 * ```tsx
 * <Sheet open={isOpen} onClose={() => setIsOpen(false)} position="right" title="Settings">
 *   <p>Sheet content goes here</p>
 * </Sheet>
 * ```
 */
export const Sheet = forwardRef<HTMLDialogElement, SheetProps>(
	({ open, onClose, position = "right", title, children, className, ...props }, ref) => {
		const dialogRef = useRef<HTMLDialogElement>(null);
		const internalRef = (ref as React.RefObject<HTMLDialogElement>) || dialogRef;

		useEffect(() => {
			const dialog = internalRef.current;
			if (!dialog) return;

			if (open) {
				dialog.showModal();
			} else {
				dialog.close();
			}
		}, [open, internalRef]);

		const getPositionClasses = () => {
			switch (position) {
				case "top":
					return "items-start";
				case "bottom":
					return "items-end";
				case "left":
					return "items-center justify-start";
				case "right":
					return "items-center justify-end";
				default:
					return "items-center justify-end";
			}
		};

		const getBoxClasses = () => {
			switch (position) {
				case "top":
				case "bottom":
					return "w-full max-w-full h-auto max-h-[80vh]";
				case "left":
				case "right":
					return "h-full max-h-full w-96 max-w-[90vw]";
				default:
					return "h-full max-h-full w-96 max-w-[90vw]";
			}
		};

		return (
			<dialog ref={internalRef} className={clsx("modal", getPositionClasses(), className)} {...props}>
				<div className={clsx("modal-box", getBoxClasses(), "rounded-none")}>
					{title && (
						<div className="flex items-center justify-between mb-4">
							<h3 className="font-bold text-lg">{title}</h3>
							<button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
								✕
							</button>
						</div>
					)}
					<div className="overflow-y-auto">{children}</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button type="button" onClick={onClose}>
						close
					</button>
				</form>
			</dialog>
		);
	},
);

Sheet.displayName = "Sheet";
