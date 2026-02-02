import {
  Button,
  ControlledDynamicFormField,
  DynamicForm,
  DynamicFormField,
  type DynamicFieldConfig,
} from "@shared-ui-library/react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CodeBlock } from "../components/CodeBlock";
import {
  CodeSection,
  ComponentPage,
  ShowcaseSection,
} from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

// ============================================================================
// SAMPLE FORM CONFIGURATIONS
// ============================================================================

const basicFormFields: DynamicFieldConfig[] = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "Enter your first name",
    validation: {
      required: "First name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Enter your last name",
    validation: {
      required: "Last name is required",
    },
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "you@example.com",
    description: "We'll never share your email with anyone.",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    },
  },
];

const advancedFormFields: DynamicFieldConfig[] = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "John Doe",
    validation: { required: "Full name is required" },
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "john@example.com",
    validation: { required: "Email is required" },
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
    description: "Optional - for account recovery",
  },
  {
    name: "birthDate",
    type: "date",
    label: "Date of Birth",
    validation: { required: "Date of birth is required" },
  },
  {
    name: "country",
    type: "select",
    label: "Country",
    placeholder: "Select your country",
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
      { value: "au", label: "Australia" },
      { value: "de", label: "Germany" },
      { value: "fr", label: "France" },
      { value: "in", label: "India" },
    ],
    validation: { required: "Please select a country" },
  },
  {
    name: "bio",
    type: "textarea",
    label: "Bio",
    placeholder: "Tell us about yourself...",
    rows: 4,
    description: "Maximum 500 characters",
    validation: {
      maxLength: { value: 500, message: "Bio cannot exceed 500 characters" },
    },
  },
  {
    name: "experience",
    type: "radio",
    label: "Experience Level",
    options: [
      { value: "beginner", label: "Beginner (0-2 years)" },
      { value: "intermediate", label: "Intermediate (2-5 years)" },
      { value: "expert", label: "Expert (5+ years)" },
    ],
    validation: { required: "Please select your experience level" },
  },
  {
    name: "newsletter",
    type: "checkbox",
    label: "Subscribe to newsletter",
    description: "Get the latest updates and news",
  },
  {
    name: "terms",
    type: "checkbox",
    label: "I agree to the terms and conditions",
    validation: { required: "You must accept the terms" },
  },
];

const contactFormFields: DynamicFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Your Name",
    placeholder: "John Doe",
    validation: { required: "Name is required" },
  },
  {
    name: "email",
    type: "email",
    label: "Your Email",
    placeholder: "john@example.com",
    validation: { required: "Email is required" },
  },
  {
    name: "subject",
    type: "select",
    label: "Subject",
    placeholder: "Select a subject",
    options: [
      { value: "general", label: "General Inquiry" },
      { value: "support", label: "Technical Support" },
      { value: "billing", label: "Billing Question" },
      { value: "feedback", label: "Feedback" },
    ],
    validation: { required: "Please select a subject" },
  },
  {
    name: "priority",
    type: "radio",
    label: "Priority",
    options: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ],
  },
  {
    name: "message",
    type: "textarea",
    label: "Message",
    placeholder: "How can we help you?",
    rows: 5,
    validation: {
      required: "Message is required",
      minLength: {
        value: 10,
        message: "Message must be at least 10 characters",
      },
    },
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

export function DynamicFormPage() {
  const [basicResult, setBasicResult] = useState<Record<
    string,
    unknown
  > | null>(null);
  const [advancedResult, setAdvancedResult] = useState<Record<
    string,
    unknown
  > | null>(null);

  // React Hook Form for individual field example (using Controller)
  const {
    control: controlBasic,
    handleSubmit: handleSubmitBasic,
    formState: { errors: errorsBasic, isSubmitting: isSubmittingBasic },
    reset: resetBasic,
  } = useForm();

  // React Hook Form for advanced example (using Controller)
  const {
    control: controlAdvanced,
    handleSubmit: handleSubmitAdvanced,
    formState: { errors: errorsAdvanced, isSubmitting: isSubmittingAdvanced },
    reset: resetAdvanced,
  } = useForm({
    defaultValues: {
      newsletter: false,
      terms: false,
      experience: "",
      fullName: "",
      email: "",
      phone: "",
      birthDate: "",
      country: "",
      bio: "",
    },
  });

  const onBasicSubmit = async (data: Record<string, unknown>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setBasicResult(data);
    console.log("Basic form submitted:", data);
  };

  const onAdvancedSubmit = async (data: Record<string, unknown>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setAdvancedResult(data);
    console.log("Advanced form submitted:", data);
  };

  return (
    <ComponentPage
      title="Dynamic Form Field"
      description="Render form fields dynamically based on JSON configuration with full react-hook-form Controller integration."
    >
      {/* Basic Example with Controller */}
      <ShowcaseSection
        title="Basic Form with Controller"
        description="Individual DynamicFormField components with react-hook-form Controller."
      >
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmitBasic(onBasicSubmit)}
            className="space-y-4"
          >
            {basicFormFields.map((fieldConfig) => (
              <Controller
                key={fieldConfig.name}
                name={fieldConfig.name}
                control={controlBasic}
                rules={fieldConfig.validation}
                defaultValue=""
                render={({ field }) => (
                  <DynamicFormField
                    field={fieldConfig}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={
                      errorsBasic[fieldConfig.name]?.message as
                        | string
                        | undefined
                    }
                  />
                )}
              />
            ))}
            <div className="flex gap-2 pt-4">
              <Button
                type="submit"
                variant="primary"
                loading={isSubmittingBasic}
              >
                {isSubmittingBasic ? "Submitting..." : "Submit"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  resetBasic();
                  setBasicResult(null);
                }}
              >
                Reset
              </Button>
            </div>
          </form>

          {basicResult && (
            <div className="mt-4 p-4 bg-success/10 border border-success rounded-lg">
              <h4 className="font-semibold text-success mb-2">
                Form Submitted!
              </h4>
              <pre className="text-sm overflow-auto">
                {JSON.stringify(basicResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </ShowcaseSection>

      <CodeSection title="Basic Usage with Controller">
        <CodeBlock
          code={`import { DynamicFormField, type DynamicFieldConfig } from "@shared-ui-library/react";
import { Controller, useForm } from "react-hook-form";

const formFields: DynamicFieldConfig[] = [
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "you@example.com",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    validation: {
      required: "Password is required",
      minLength: { value: 8, message: "Minimum 8 characters" },
    },
  },
];

function MyForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((fieldConfig) => (
        <Controller
          key={fieldConfig.name}
          name={fieldConfig.name}
          control={control}
          rules={fieldConfig.validation}
          render={({ field }) => (
            <DynamicFormField
              field={fieldConfig}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors[fieldConfig.name]?.message}
            />
          )}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}`}
        />
      </CodeSection>

      {/* Advanced Example with DynamicForm component */}
      <ShowcaseSection
        title="Complete DynamicForm with Controller"
        description="Using the DynamicForm wrapper with control and Controller props."
      >
        <div className="w-full max-w-lg">
          <DynamicForm
            fields={advancedFormFields}
            control={controlAdvanced}
            handleSubmit={handleSubmitAdvanced}
            errors={errorsAdvanced}
            isSubmitting={isSubmittingAdvanced}
            onSubmit={onAdvancedSubmit}
            submitText="Create Account"
            gap="md"
          />

          {advancedResult && (
            <div className="mt-4 p-4 bg-success/10 border border-success rounded-lg">
              <h4 className="font-semibold text-success mb-2">
                Form Submitted!
              </h4>
              <pre className="text-sm overflow-auto max-h-48">
                {JSON.stringify(advancedResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </ShowcaseSection>

      <CodeSection title="DynamicForm with react-hook-form">
        <CodeBlock
          code={`import { DynamicForm, type DynamicFieldConfig } from "@shared-ui-library/react";
import { useForm } from "react-hook-form";

const formFields: DynamicFieldConfig[] = [
  {
    name: "country",
    type: "select",
    label: "Country",
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
    ],
    validation: { required: "Please select a country" },
  },
  {
    name: "experience",
    type: "radio",
    label: "Experience Level",
    options: [
      { value: "beginner", label: "Beginner" },
      { value: "expert", label: "Expert" },
    ],
  },
  {
    name: "newsletter",
    type: "checkbox",
    label: "Subscribe to newsletter",
  },
];

function MyForm() {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  return (
    <DynamicForm
      fields={formFields}
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      isSubmitting={isSubmitting}
      onSubmit={(data) => console.log(data)}
      submitText="Submit"
      gap="md"
    />
  );
}`}
        />
      </CodeSection>

      {/* ControlledDynamicFormField Example */}
      <ShowcaseSection
        title="ControlledDynamicFormField"
        description="Simplified wrapper that internally uses Controller."
      >
        <div className="w-full max-w-md">
          <form className="space-y-4">
            {basicFormFields.slice(0, 2).map((fieldConfig) => (
              <ControlledDynamicFormField
                key={fieldConfig.name}
                field={fieldConfig}
                control={controlBasic}
                error={
                  errorsBasic[fieldConfig.name]?.message as string | undefined
                }
              />
            ))}
          </form>
        </div>
      </ShowcaseSection>

      <CodeSection title="ControlledDynamicFormField Usage">
        <CodeBlock
          code={`import { ControlledDynamicFormField, type DynamicFieldConfig } from "@shared-ui-library/react";
import { useForm } from "react-hook-form";

const fieldConfig: DynamicFieldConfig = {
  name: "email",
  type: "email",
  label: "Email",
  validation: { required: "Email is required" },
};

function MyForm() {
  const { control, formState: { errors } } = useForm();

  return (
    <ControlledDynamicFormField
      field={fieldConfig}
      control={control}
      error={errors.email?.message}
    />
  );
}`}
        />
      </CodeSection>

      {/* Grid Layout Example */}
      <ShowcaseSection
        title="Grid Layout"
        description="DynamicForm with 2-column grid layout using Controller."
      >
        <div className="w-full max-w-2xl">
          <DynamicForm
            fields={contactFormFields}
            layout="grid"
            columns={2}
            gap="md"
            onSubmit={(data: Record<string, unknown>) => {
              console.log("Contact form:", data);
              alert("Contact form submitted! Check console.");
            }}
            submitText="Send Message"
          />
        </div>
      </ShowcaseSection>

      <CodeSection title="Grid Layout Code">
        <CodeBlock
          code={`<DynamicForm
  fields={contactFormFields}
  layout="grid"
  columns={2}
  gap="md"
  control={control}
  onSubmit={(data) => console.log(data)}
  submitText="Send Message"
/>`}
        />
      </CodeSection>

      {/* Field Configuration Reference */}
      <ShowcaseSection
        title="JSON Field Configuration"
        description="Complete reference for DynamicFieldConfig structure."
      >
        <CodeBlock
          code={`// DynamicFieldConfig interface
interface DynamicFieldConfig {
  // Required
  name: string;           // Unique field identifier
  type: DynamicFieldType; // Field type

  // Optional
  label?: string;         // Field label
  placeholder?: string;   // Placeholder text
  defaultValue?: unknown; // Default value
  description?: string;   // Helper text
  disabled?: boolean;     // Disable field
  readOnly?: boolean;     // Read-only field
  options?: Array<{       // For select/radio
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  validation?: {          // react-hook-form compatible
    required?: boolean | string;
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    min?: number | { value: number; message: string };
    max?: number | { value: number; message: string };
    pattern?: RegExp | { value: RegExp; message: string };
    validate?: (value: unknown) => boolean | string;
  };
  className?: string;      // Wrapper classes
  inputClassName?: string; // Input element classes
  rows?: number;           // Textarea rows
  autoFocus?: boolean;     // Auto-focus
  autoComplete?: string;   // Autocomplete attribute
  componentProps?: Record<string, unknown>; // Custom props
}

// Supported field types
type DynamicFieldType =
  | "text" | "email" | "password" | "number"
  | "tel" | "url" | "date" | "time" | "datetime-local"
  | "textarea" | "select" | "checkbox" | "radio" | "hidden";`}
        />
      </ShowcaseSection>

      {/* Props Tables */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Props Reference</h2>

        <PropsTable
          title="DynamicFormField Props"
          props={[
            {
              name: "field",
              type: "DynamicFieldConfig",
              required: true,
              description: "Field configuration object",
            },
            {
              name: "error",
              type: "string",
              description: "Error message to display",
            },
            {
              name: "value",
              type: "unknown",
              description: "Controlled value (from Controller field.value)",
            },
            {
              name: "onChange",
              type: "(value) => void",
              description:
                "Controlled onChange handler (from Controller field.onChange)",
            },
            {
              name: "onBlur",
              type: "() => void",
              description: "onBlur handler (from Controller field.onBlur)",
            },
            {
              name: "inputRef",
              type: "React.Ref",
              description: "Ref for the input element",
            },
          ]}
        />

        <PropsTable
          title="ControlledDynamicFormField Props"
          props={[
            {
              name: "field",
              type: "DynamicFieldConfig",
              required: true,
              description: "Field configuration object",
            },
            {
              name: "control",
              type: "Control",
              required: true,
              description: "react-hook-form control object",
            },
            {
              name: "error",
              type: "string",
              description: "Error message to display",
            },
          ]}
        />

        <PropsTable
          title="DynamicForm Props"
          props={[
            {
              name: "fields",
              type: "DynamicFieldConfig[]",
              required: true,
              description: "Array of field configurations",
            },
            {
              name: "onSubmit",
              type: "(data) => void | Promise<void>",
              description: "Form submission handler",
            },
            {
              name: "errors",
              type: "Record<string, { message?: string }>",
              description: "Errors object from react-hook-form",
            },
            {
              name: "control",
              type: "Control",
              description: "react-hook-form control object",
            },
            {
              name: "handleSubmit",
              type: "(onValid) => (e) => Promise<void>",
              description: "react-hook-form handleSubmit function",
            },
            {
              name: "isSubmitting",
              type: "boolean",
              default: "false",
              description: "Whether form is submitting",
            },
            {
              name: "submitText",
              type: "string",
              default: '"Submit"',
              description: "Submit button text",
            },
            {
              name: "layout",
              type: '"vertical" | "horizontal" | "grid"',
              default: '"vertical"',
              description: "Form layout direction",
            },
            {
              name: "columns",
              type: "1 | 2 | 3 | 4",
              default: "1",
              description: "Number of columns for grid layout",
            },
            {
              name: "gap",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: "Gap between fields",
            },
            {
              name: "showSubmitButton",
              type: "boolean",
              default: "true",
              description: "Show default submit button",
            },
            {
              name: "renderActions",
              type: "() => React.ReactNode",
              description: "Custom actions renderer",
            },
          ]}
        />
      </section>
    </ComponentPage>
  );
}
