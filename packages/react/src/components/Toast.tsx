import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { createContext, forwardRef, useContext, useEffect, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type ToastPosition =
  | "top"
  | "top-start"
  | "top-center"
  | "top-end"
  | "middle"
  | "middle-start"
  | "middle-center"
  | "middle-end"
  | "bottom"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end";

export type ToastVariant = "info" | "success" | "warning" | "error";

export interface Toast {
  id: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Toast variant */
  variant?: ToastVariant;
  /** Auto-dismiss duration (ms) */
  duration?: number;
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
}

// ============================================================================
// CONTEXT
// ============================================================================

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<ToastVariant, string> = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error",
};

const variantIcons: Record<ToastVariant, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: ExclamationCircleIcon,
};

const positionClasses: Record<ToastPosition, string> = {
  top: "toast-top toast-center",
  "top-start": "toast-top toast-start",
  "top-center": "toast-top toast-center",
  "top-end": "toast-top toast-end",
  middle: "toast-middle toast-center",
  "middle-start": "toast-middle toast-start",
  "middle-center": "toast-middle toast-center",
  "middle-end": "toast-middle toast-end",
  bottom: "toast-bottom toast-center",
  "bottom-start": "toast-bottom toast-start",
  "bottom-center": "toast-bottom toast-center",
  "bottom-end": "toast-bottom toast-end",
};

/**
 * Toast notification component
 */
export const ToastItem = forwardRef<HTMLDivElement, ToastProps & { message: string }>(
  ({ message, variant = "info", duration = 3000, onDismiss, className, ...props }, ref) => {
    const Icon = variantIcons[variant];

    useEffect(() => {
      if (duration && onDismiss) {
        const timer = setTimeout(onDismiss, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onDismiss]);

    return (
      <div ref={ref} className={clsx("alert", variantClasses[variant], className)} {...props}>
        <Icon className="h-6 w-6" />
        <span>{message}</span>
        {onDismiss && (
          <button onClick={onDismiss} className="btn btn-sm btn-circle btn-ghost ml-auto">
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  }
);

ToastItem.displayName = "ToastItem";

/**
 * ToastProvider component - wrap your app with this
 */
export interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = "bottom-end",
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {toasts.length > 0 && (
        <div className={clsx("toast z-50", positionClasses[position])}>
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              message={toast.message}
              variant={toast.variant}
              duration={toast.duration}
              onDismiss={() => removeToast(toast.id)}
            />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};
