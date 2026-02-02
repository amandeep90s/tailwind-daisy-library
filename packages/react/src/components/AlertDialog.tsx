import clsx from "clsx";
import React, { forwardRef, useEffect, useRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface AlertDialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
	/** Whether the dialog is open */
	open?: boolean;
	/** Callback when dialog close is requested */
	onClose?: () => void;
	/** Dialog title */
	title?: string;
	/** Dialog description */
	description?: string;
	/** Action buttons */
	actions?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * AlertDialog component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <AlertDialog
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Confirm Action"
 *   description="Are you sure you want to proceed?"
 *   actions={<>
 *     <Button onClick={onConfirm}>Confirm</Button>
 *     <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
 *   </>}
 * />
 * ```
 */
export const AlertDialog = forwardRef<HTMLDialogElement, AlertDialogProps>(
	({ open, onClose, title, description, actions, children, className, ...props }, ref) => {
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

		const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
			const dialog = e.currentTarget;
			const rect = dialog.getBoundingClientRect();
			const isInDialog =
				rect.top <= e.clientY &&
				e.clientY <= rect.top + rect.height &&
				rect.left <= e.clientX &&
				e.clientX <= rect.left + rect.width;

			if (!isInDialog) {
				onClose?.();
			}
		};

		return (
			<dialog ref={internalRef} className={clsx("modal", className)} onClick={handleBackdropClick} {...props}>
				<div className="modal-box">
					{title && <h3 className="font-bold text-lg">{title}</h3>}
					{description && <p className="py-4">{description}</p>}
					{children}
					{actions && <div className="modal-action">{actions}</div>}
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

AlertDialog.displayName = "AlertDialog";
