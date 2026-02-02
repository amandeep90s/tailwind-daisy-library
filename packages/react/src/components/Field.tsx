import clsx from "clsx";
import React, { createContext, forwardRef, useContext, useId } from "react";

// ============================================================================
// CONTEXT
// ============================================================================

interface FieldContextValue {
  id: string;
  error?: string;
  required?: boolean;
}

const FieldContext = createContext<FieldContextValue | null>(null);

function useFieldContext() {
  return useContext(FieldContext);
}

// ============================================================================
// FIELD ROOT COMPONENT
// ============================================================================

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field name/id (auto-generated if not provided) */
  name?: string;
  /** Error message for this field */
  error?: string;
  /** Whether the field is required */
  required?: boolean;
}

/**
 * Field root component following shadcn composable pattern
 *
 * @example
 * ```tsx
 * <Field name="email" error={errors.email} required>
 *   <FieldLabel>Email</FieldLabel>
 *   <Input type="email" />
 *   <FieldDescription>We'll never share your email.</FieldDescription>
 *   <FieldError />
 * </Field>
 * ```
 */
export const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ name, error, required, children, className, ...props }, ref) => {
    const generatedId = useId();
    const id = name || generatedId;

    return (
      <FieldContext.Provider value={{ id, error, required }}>
        <div
          ref={ref}
          className={clsx("form-control w-full space-y-2", className)}
          {...props}
        >
          {children}
        </div>
      </FieldContext.Provider>
    );
  },
);

Field.displayName = "Field";

// ============================================================================
// FIELD LABEL COMPONENT
// ============================================================================

export interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ children, className, ...props }, ref) => {
    const context = useFieldContext();

    return (
      <label
        ref={ref}
        htmlFor={context?.id}
        className={clsx("label-text font-medium text-sm", className)}
        {...props}
      >
        {children}
        {context?.required && <span className="text-error ml-1">*</span>}
      </label>
    );
  },
);

FieldLabel.displayName = "FieldLabel";

// ============================================================================
// FIELD DESCRIPTION COMPONENT
// ============================================================================

export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldDescription = forwardRef<
  HTMLParagraphElement,
  FieldDescriptionProps
>(({ children, className, ...props }, ref) => {
  const context = useFieldContext();

  // Don't render description if there's an error (error takes precedence)
  if (context?.error) return null;

  return (
    <p
      ref={ref}
      className={clsx("text-sm text-base-content/60", className)}
      {...props}
    >
      {children}
    </p>
  );
});

FieldDescription.displayName = "FieldDescription";

// ============================================================================
// FIELD ERROR COMPONENT
// ============================================================================

export interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Override error message from context */
  message?: string;
}

export const FieldError = forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ message, children, className, ...props }, ref) => {
    const context = useFieldContext();
    const errorMessage = message || context?.error || children;

    if (!errorMessage) return null;

    return (
      <p
        ref={ref}
        className={clsx("text-sm text-error", className)}
        role="alert"
        {...props}
      >
        {errorMessage}
      </p>
    );
  },
);

FieldError.displayName = "FieldError";

// ============================================================================
// FIELD GROUP COMPONENT
// ============================================================================

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Direction of the group */
  direction?: "horizontal" | "vertical";
}

export const FieldGroup = forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ direction = "vertical", children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "space-y-4",
          direction === "horizontal" && "flex flex-row gap-4 space-y-0",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FieldGroup.displayName = "FieldGroup";

// ============================================================================
// FIELD SEPARATOR COMPONENT
// ============================================================================

export interface FieldSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FieldSeparator = forwardRef<HTMLDivElement, FieldSeparatorProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={clsx("divider", className)} {...props} />;
  },
);

FieldSeparator.displayName = "FieldSeparator";

// ============================================================================
// FIELDSET COMPONENT
// ============================================================================

export interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

export const FieldSet = forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        className={clsx(
          "space-y-4 border border-base-300 rounded-lg p-4",
          className,
        )}
        {...props}
      >
        {children}
      </fieldset>
    );
  },
);

FieldSet.displayName = "FieldSet";

// ============================================================================
// FIELDSET LEGEND COMPONENT
// ============================================================================

export interface FieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {}

export const FieldLegend = forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <legend
        ref={ref}
        className={clsx("text-lg font-semibold px-2", className)}
        {...props}
      >
        {children}
      </legend>
    );
  },
);

FieldLegend.displayName = "FieldLegend";
