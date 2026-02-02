import clsx from "clsx";
import React, { forwardRef } from "react";
import { Controller as RHFController, type Control } from "react-hook-form";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Radio, RadioGroup } from "./RadioGroup";
import { Select, type SelectOption } from "./Select";
import { Textarea } from "./Textarea";

// ============================================================================
// TYPES
// ============================================================================

export type DynamicFieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "date"
  | "time"
  | "datetime-local"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "hidden";

export interface DynamicFieldValidation {
  /** Field is required */
  required?: boolean | string;
  /** Minimum length for text fields */
  minLength?: number | { value: number; message: string };
  /** Maximum length for text fields */
  maxLength?: number | { value: number; message: string };
  /** Minimum value for number fields */
  min?: number | { value: number; message: string };
  /** Maximum value for number fields */
  max?: number | { value: number; message: string };
  /** Regex pattern for validation */
  pattern?: RegExp | { value: RegExp; message: string };
  /** Custom validation function */
  validate?:
    | ((value: unknown) => boolean | string)
    | Record<string, (value: unknown) => boolean | string>;
}

export interface DynamicFieldOption {
  /** Option value */
  value: string;
  /** Option display label */
  label: string;
  /** Whether option is disabled */
  disabled?: boolean;
}

export interface DynamicFieldConfig {
  /** Unique field name (required) */
  name: string;
  /** Field type */
  type: DynamicFieldType;
  /** Field label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Default value */
  defaultValue?: unknown;
  /** Helper/description text */
  description?: string;
  /** Whether field is disabled */
  disabled?: boolean;
  /** Whether field is readonly */
  readOnly?: boolean;
  /** Options for select/radio fields */
  options?: DynamicFieldOption[];
  /** Validation rules (compatible with react-hook-form) */
  validation?: DynamicFieldValidation;
  /** Additional CSS classes for the field wrapper */
  className?: string;
  /** Additional CSS classes for the input element */
  inputClassName?: string;
  /** Number of rows for textarea */
  rows?: number;
  /** Auto-focus this field */
  autoFocus?: boolean;
  /** Autocomplete attribute */
  autoComplete?: string;
  /** Custom props to pass to the underlying component */
  componentProps?: Record<string, unknown>;
}

export interface DynamicFormFieldProps {
  /** Field configuration */
  field: DynamicFieldConfig;
  /** Error message for this field */
  error?: string;
  /** Field value (controlled) */
  value?: unknown;
  /** onChange handler (controlled) */
  onChange?: (value: unknown) => void;
  /** onBlur handler */
  onBlur?: () => void;
  /** Custom ref */
  inputRef?: React.Ref<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

interface FieldWrapperProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

const FieldWrapper = forwardRef<HTMLDivElement, FieldWrapperProps>(
  ({ label, description, error, required, className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("form-control w-full space-y-1", className)}
      >
        {label && (
          <label className="label-text font-medium text-sm">
            {label}
            {required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        {children}
        {error ? (
          <p className="text-sm text-error" role="alert">
            {error}
          </p>
        ) : description ? (
          <p className="text-sm text-base-content/60">{description}</p>
        ) : null}
      </div>
    );
  },
);

FieldWrapper.displayName = "FieldWrapper";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * DynamicFormField - Renders form fields dynamically based on JSON configuration
 *
 * @example
 * ```tsx
 * // With react-hook-form Controller
 * import { Controller, useForm } from "react-hook-form";
 *
 * const { control, formState: { errors } } = useForm();
 *
 * <Controller
 *   name={field.name}
 *   control={control}
 *   rules={field.validation}
 *   render={({ field: controllerField }) => (
 *     <DynamicFormField
 *       field={fieldConfig}
 *       value={controllerField.value}
 *       onChange={controllerField.onChange}
 *       onBlur={controllerField.onBlur}
 *       error={errors[field.name]?.message}
 *     />
 *   )}
 * />
 * ```
 */
export const DynamicFormField: React.FC<DynamicFormFieldProps> = ({
  field,
  error,
  value,
  onChange,
  onBlur,
  inputRef,
}) => {
  const {
    name,
    type,
    label,
    placeholder,
    description,
    disabled,
    readOnly,
    options = [],
    validation,
    className,
    inputClassName,
    rows = 3,
    autoFocus,
    autoComplete,
    componentProps = {},
  } = field;

  const isRequired = Boolean(validation?.required);

  // Handle change for different input types
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const handleRadioChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  // Render based on field type
  const renderField = () => {
    switch (type) {
      case "hidden":
        return (
          <input
            type="hidden"
            name={name}
            value={value as string | undefined}
          />
        );

      case "textarea":
        return (
          <Textarea
            ref={inputRef as React.Ref<HTMLTextAreaElement>}
            id={name}
            name={name}
            placeholder={placeholder}
            rows={rows}
            color={error ? "error" : undefined}
            className={inputClassName}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            value={(value as string) ?? ""}
            onChange={handleInputChange}
            onBlur={onBlur}
            {...componentProps}
          />
        );

      case "select":
        return (
          <Select
            ref={inputRef as React.Ref<HTMLSelectElement>}
            id={name}
            name={name}
            options={options as SelectOption[]}
            placeholder={placeholder}
            color={error ? "error" : undefined}
            className={inputClassName}
            disabled={disabled}
            autoFocus={autoFocus}
            value={(value as string) ?? ""}
            onChange={handleInputChange}
            onBlur={onBlur}
            {...componentProps}
          />
        );

      case "checkbox":
        return (
          <Checkbox
            ref={inputRef as React.Ref<HTMLInputElement>}
            id={name}
            name={name}
            label={label}
            variant={error ? "error" : undefined}
            className={inputClassName}
            disabled={disabled}
            autoFocus={autoFocus}
            checked={(value as boolean) ?? false}
            onChange={handleCheckboxChange}
            onBlur={onBlur}
            {...componentProps}
          />
        );

      case "radio":
        return (
          <RadioGroup
            name={name}
            value={(value as string) ?? ""}
            onChange={handleRadioChange}
            variant={error ? "error" : undefined}
            {...componentProps}
          >
            {options.map((option) => (
              <Radio
                key={option.value}
                value={option.value}
                label={option.label}
                disabled={option.disabled || disabled}
              />
            ))}
          </RadioGroup>
        );

      // Input types: text, email, password, number, tel, url, date, time, datetime-local
      default:
        return (
          <Input
            ref={inputRef as React.Ref<HTMLInputElement>}
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            color={error ? "error" : undefined}
            className={inputClassName}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            value={(value as string | number) ?? ""}
            onChange={handleInputChange}
            onBlur={onBlur}
            {...componentProps}
          />
        );
    }
  };

  // Checkbox has its own label handling
  if (type === "checkbox") {
    return (
      <FieldWrapper
        description={description}
        error={error}
        className={className}
      >
        {renderField()}
      </FieldWrapper>
    );
  }

  return (
    <FieldWrapper
      label={label}
      description={description}
      error={error}
      required={isRequired}
      className={className}
    >
      {renderField()}
    </FieldWrapper>
  );
};

DynamicFormField.displayName = "DynamicFormField";

// ============================================================================
// CONTROLLED DYNAMIC FORM FIELD (for use with Controller)
// ============================================================================

export interface ControlledDynamicFormFieldProps {
  /** Field configuration */
  field: DynamicFieldConfig;
  /** react-hook-form control object */
  control: Control<any>;
  /** Error message for this field */
  error?: string;
}

/**
 * ControlledDynamicFormField - Wraps DynamicFormField with react-hook-form Controller
 *
 * @example
 * ```tsx
 * import { useForm } from "react-hook-form";
 *
 * const { control, formState: { errors } } = useForm();
 *
 * <ControlledDynamicFormField
 *   field={fieldConfig}
 *   control={control}
 *   error={errors[fieldConfig.name]?.message}
 * />
 * ```
 */
export const ControlledDynamicFormField: React.FC<
  ControlledDynamicFormFieldProps
> = ({ field, control, error }) => {
  return (
    <RHFController
      name={field.name}
      control={control}
      rules={field.validation}
      defaultValue={field.defaultValue ?? getDefaultValueForType(field.type)}
      render={({ field: controllerField }) => (
        <DynamicFormField
          field={field}
          value={controllerField.value}
          onChange={controllerField.onChange}
          onBlur={controllerField.onBlur}
          inputRef={controllerField.ref as React.Ref<HTMLInputElement>}
          error={error}
        />
      )}
    />
  );
};

ControlledDynamicFormField.displayName = "ControlledDynamicFormField";

// Helper to get default value based on field type
function getDefaultValueForType(type: DynamicFieldType): unknown {
  switch (type) {
    case "checkbox":
      return false;
    case "number":
      return "";
    default:
      return "";
  }
}

// ============================================================================
// DYNAMIC FORM COMPONENT
// ============================================================================

export interface DynamicFormProps extends Omit<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onSubmit"
> {
  /** Array of field configurations */
  fields: DynamicFieldConfig[];
  /** Form submission handler */
  onSubmit?: (data: Record<string, unknown>) => void | Promise<void>;
  /** Errors object (compatible with react-hook-form errors) */
  errors?: Record<string, { message?: string } | undefined>;
  /** Control object from react-hook-form */
  control?: Control<any>;
  /** HandleSubmit function from react-hook-form */
  handleSubmit?: (
    onValid: (data: Record<string, unknown>) => void,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  /** Gap between fields */
  gap?: "sm" | "md" | "lg";
  /** Submit button text */
  submitText?: string;
  /** Whether form is submitting */
  isSubmitting?: boolean;
  /** Layout direction */
  layout?: "vertical" | "horizontal" | "grid";
  /** Number of columns for grid layout */
  columns?: 1 | 2 | 3 | 4;
  /** Render custom actions instead of default submit button */
  renderActions?: () => React.ReactNode;
  /** Show default submit button */
  showSubmitButton?: boolean;
}

const gapClasses = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

const layoutClasses = {
  vertical: "flex flex-col",
  horizontal: "flex flex-row flex-wrap",
  grid: "grid",
};

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

/**
 * DynamicForm - Renders a complete form based on field configurations
 *
 * @example
 * ```tsx
 * // With react-hook-form
 * import { useForm } from "react-hook-form";
 *
 * const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm();
 *
 * <DynamicForm
 *   fields={formFields}
 *   control={control}
 *   handleSubmit={handleSubmit}
 *   errors={errors}
 *   isSubmitting={isSubmitting}
 *   onSubmit={(data) => console.log(data)}
 * />
 * ```
 */
export const DynamicForm = forwardRef<HTMLFormElement, DynamicFormProps>(
  (
    {
      fields,
      onSubmit,
      errors = {},
      control,
      handleSubmit,
      gap = "md",
      submitText = "Submit",
      isSubmitting = false,
      layout = "vertical",
      columns = 1,
      renderActions,
      showSubmitButton = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (handleSubmit && onSubmit) {
        handleSubmit(onSubmit)(e);
      } else if (onSubmit) {
        const formData = new FormData(e.currentTarget);
        const data: Record<string, unknown> = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        onSubmit(data);
      }
    };

    return (
      <form
        ref={ref}
        onSubmit={handleFormSubmit}
        className={clsx("w-full", className)}
        {...props}
      >
        <div
          className={clsx(
            layoutClasses[layout],
            gapClasses[gap],
            layout === "grid" && columnClasses[columns],
          )}
        >
          {fields.map((field) =>
            control ? (
              <ControlledDynamicFormField
                key={field.name}
                field={field}
                control={control}
                error={errors[field.name]?.message}
              />
            ) : (
              <DynamicFormField
                key={field.name}
                field={field}
                error={errors[field.name]?.message}
              />
            ),
          )}
        </div>

        {children}

        {renderActions ? (
          renderActions()
        ) : showSubmitButton ? (
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className={clsx("btn btn-primary", isSubmitting && "loading")}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : submitText}
            </button>
          </div>
        ) : null}
      </form>
    );
  },
);

DynamicForm.displayName = "DynamicForm";
