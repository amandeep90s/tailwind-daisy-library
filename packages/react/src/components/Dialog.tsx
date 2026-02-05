import clsx from "clsx";
import React, { forwardRef, useEffect, useRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type DialogVerticalPosition = "top" | "middle" | "bottom";
export type DialogHorizontalPosition = "start" | "center" | "end";
export type DialogSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";

export interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  /** Whether the dialog is open */
  open?: boolean;
  /** Callback when dialog close is requested */
  onClose?: () => void;
  /** Vertical position of the dialog */
  position?: DialogVerticalPosition;
  /** Horizontal position of the dialog */
  horizontalPosition?: DialogHorizontalPosition;
  /** Whether clicking outside closes the dialog */
  closeOnClickOutside?: boolean;
  /** Whether pressing Escape closes the dialog */
  closeOnEscape?: boolean;
  /** Show close button in corner */
  showCloseButton?: boolean;
  /** Custom close button content */
  closeButtonContent?: React.ReactNode;
  /** Size preset for the dialog */
  size?: DialogSize;
  /** Custom max width class (e.g., "max-w-2xl") - overrides size */
  maxWidth?: string;
  /** Responsive: move to bottom on small screens */
  responsive?: boolean;
}

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Content of the title */
  children: React.ReactNode;
}

export interface DialogDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Content of the description */
  children: React.ReactNode;
}

export interface DialogActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Action buttons */
  children: React.ReactNode;
}

export interface DialogCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Close button content */
  children?: React.ReactNode;
}

// ============================================================================
// COMPONENT
// ============================================================================

const verticalPositionClasses: Record<DialogVerticalPosition, string> = {
  top: "modal-top",
  middle: "modal-middle",
  bottom: "modal-bottom",
};

const horizontalPositionClasses: Record<DialogHorizontalPosition, string> = {
  start: "modal-start",
  center: "",
  end: "modal-end",
};

const sizeClasses: Record<DialogSize, string> = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  full: "max-w-full w-full h-full rounded-none",
};

/**
 * Dialog Title component
 */
export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3 ref={ref} className={clsx("text-lg font-bold", className)} {...props}>
        {children}
      </h3>
    );
  }
);

DialogTitle.displayName = "DialogTitle";

/**
 * Dialog Description component
 */
export const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={clsx("py-4", className)} {...props}>
        {children}
      </p>
    );
  }
);

DialogDescription.displayName = "DialogDescription";

/**
 * Dialog Actions component - container for action buttons
 */
export const DialogActions = forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("modal-action", className)} {...props}>
        {children}
      </div>
    );
  }
);

DialogActions.displayName = "DialogActions";

/**
 * Dialog Close Button - positioned in the corner
 */
export const DialogCloseButton = forwardRef<HTMLButtonElement, DialogCloseButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx("btn btn-sm btn-circle btn-ghost absolute top-2 right-2", className)}
        aria-label="Close dialog"
        {...props}
      >
        {children || "✕"}
      </button>
    );
  }
);

DialogCloseButton.displayName = "DialogCloseButton";

/**
 * Dialog/Modal component with DaisyUI styling
 */
export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  (
    {
      open,
      onClose,
      position = "middle",
      horizontalPosition = "center",
      closeOnClickOutside = true,
      closeOnEscape = true,
      showCloseButton = false,
      closeButtonContent,
      size,
      maxWidth,
      responsive = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
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

    // Handle Escape key
    useEffect(() => {
      const dialog = internalRef.current;
      if (!dialog || !open) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          if (closeOnEscape) {
            e.preventDefault();
            onClose?.();
          }
        }
      };

      dialog.addEventListener("keydown", handleKeyDown);
      return () => dialog.removeEventListener("keydown", handleKeyDown);
    }, [open, closeOnEscape, onClose, internalRef]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (!closeOnClickOutside) return;

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

    // Build modal box classes
    const modalBoxClasses = clsx(
      "modal-box overflow-x-hidden",
      maxWidth || (size && sizeClasses[size]),
      responsive && "sm:modal-middle modal-bottom"
    );

    // Build modal classes
    const modalClasses = clsx(
      "modal",
      !responsive && verticalPositionClasses[position],
      horizontalPositionClasses[horizontalPosition],
      responsive && "modal-bottom sm:modal-middle",
      className
    );

    return (
      <dialog ref={internalRef} className={modalClasses} onClick={handleBackdropClick} {...props}>
        <div className={modalBoxClasses}>
          {showCloseButton && (
            <DialogCloseButton onClick={onClose}>{closeButtonContent}</DialogCloseButton>
          )}
          {children}
        </div>
        {closeOnClickOutside && (
          <form method="dialog" className="modal-backdrop">
            <button type="button" onClick={onClose}>
              close
            </button>
          </form>
        )}
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

// Legacy export for backward compatibility
export type DialogPosition = DialogVerticalPosition;
