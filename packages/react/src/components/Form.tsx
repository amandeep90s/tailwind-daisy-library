import clsx from "clsx";
import React, { createContext, forwardRef, useContext, useId } from "react";

// ============================================================================
// CONTEXT
// ============================================================================

interface FormFieldContextValue {
  id: string;
  name: string;
  error?: string;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

function useFormFieldContext() {
  return useContext(FormFieldContext);
}

// ============================================================================
// FORM ROOT COMPONENT
// ============================================================================

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

/**
 * Form component wrapper
 *
 * @example
 * ```tsx
 * <Form onSubmit={handleSubmit}>
 *   <FormField name="email">
 *     <FormItem>
 *       <FormLabel>Email</FormLabel>
 *       <FormControl>
 *         <Input type="email" />
 *       </FormControl>
 *       <FormDescription>Your email address</FormDescription>
 *       <FormMessage />
 *     </FormItem>
 *   </FormField>
 * </Form>
 * ```
 */
export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <form ref={ref} className={clsx("space-y-4", className)} {...props}>
        {children}
      </form>
    );
  }
);

Form.displayName = "Form";

// ============================================================================
// FORM FIELD COMPONENT
// ============================================================================

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field name (required) */
  name: string;
  /** Error message for this field */
  error?: string;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ name, error, children, className, ...props }, ref) => {
    const generatedId = useId();
    const id = `${name}-${generatedId}`;

    return (
      <FormFieldContext.Provider value={{ id, name, error }}>
        <div ref={ref} className={className} {...props}>
          {children}
        </div>
      </FormFieldContext.Provider>
    );
  }
);

FormField.displayName = "FormField";

// ============================================================================
// FORM ITEM COMPONENT
// ============================================================================

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("form-control w-full space-y-2", className)} {...props}>
        {children}
      </div>
    );
  }
);

FormItem.displayName = "FormItem";

// ============================================================================
// FORM LABEL COMPONENT
// ============================================================================

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();

    return (
      <label
        ref={ref}
        htmlFor={context?.id}
        className={clsx(
          "label-text text-sm font-medium",
          context?.error && "text-error",
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

FormLabel.displayName = "FormLabel";

// ============================================================================
// FORM CONTROL COMPONENT
// ============================================================================

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();

    // Clone child and inject id and name
    const child = React.Children.only(children);

    const clonedChild = React.isValidElement(child)
      ? React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
          id: context?.id,
          name: context?.name,
          "aria-describedby": context?.error ? `${context.id}-error` : undefined,
          "aria-invalid": context?.error ? true : undefined,
        })
      : child;

    return (
      <div ref={ref} className={className} {...props}>
        {clonedChild}
      </div>
    );
  }
);

FormControl.displayName = "FormControl";

// ============================================================================
// FORM DESCRIPTION COMPONENT
// ============================================================================

export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();

    // Don't show description when there's an error
    if (context?.error) return null;

    return (
      <p ref={ref} className={clsx("text-base-content/60 text-sm", className)} {...props}>
        {children}
      </p>
    );
  }
);

FormDescription.displayName = "FormDescription";

// ============================================================================
// FORM MESSAGE COMPONENT
// ============================================================================

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Override error message from context */
  message?: string;
}

export const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ message, children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    const errorMessage = message || context?.error || children;

    if (!errorMessage) return null;

    return (
      <p
        ref={ref}
        id={context?.id ? `${context.id}-error` : undefined}
        className={clsx("text-error text-sm", className)}
        role="alert"
        {...props}
      >
        {errorMessage}
      </p>
    );
  }
);

FormMessage.displayName = "FormMessage";

// ============================================================================
// FORM SECTION COMPONENT
// ============================================================================

export interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
}

export const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(
  ({ title, description, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("space-y-4", className)} {...props}>
        {(title || description) && (
          <div className="space-y-1">
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            {description && <p className="text-base-content/60 text-sm">{description}</p>}
          </div>
        )}
        <div className="space-y-4">{children}</div>
      </div>
    );
  }
);

FormSection.displayName = "FormSection";

// ============================================================================
// FORM ACTIONS COMPONENT
// ============================================================================

export interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Alignment of actions */
  align?: "start" | "center" | "end" | "between";
}

export const FormActions = forwardRef<HTMLDivElement, FormActionsProps>(
  ({ align = "end", children, className, ...props }, ref) => {
    const alignClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    };

    return (
      <div
        ref={ref}
        className={clsx("flex items-center gap-2 pt-4", alignClasses[align], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FormActions.displayName = "FormActions";
