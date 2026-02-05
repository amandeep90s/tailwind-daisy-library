import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Input,
} from "@shared-ui-library/react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function FieldPage() {
  return (
    <ComponentPage
      title="Field"
      description="Composable form field components following shadcn pattern with label, description, and error support."
    >
      <ShowcaseSection title="Basic Field" description="Field with composable sub-components.">
        <div className="w-full max-w-sm">
          <Field name="username">
            <FieldLabel>Username</FieldLabel>
            <Input placeholder="Enter your username" />
            <FieldDescription>Choose a unique username.</FieldDescription>
          </Field>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Required Field" description="Field with required indicator.">
        <div className="w-full max-w-sm">
          <Field name="email" required>
            <FieldLabel>Email Address</FieldLabel>
            <Input type="email" placeholder="you@example.com" />
          </Field>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Description" description="Field with helper text.">
        <div className="w-full max-w-sm">
          <Field name="password">
            <FieldLabel>Password</FieldLabel>
            <Input type="password" placeholder="Enter password" />
            <FieldDescription>Password must be at least 8 characters long.</FieldDescription>
          </Field>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Error" description="Field showing validation error.">
        <div className="w-full max-w-sm">
          <Field name="email" error="Please enter a valid email address." required>
            <FieldLabel>Email</FieldLabel>
            <Input
              type="email"
              placeholder="you@example.com"
              color="error"
              defaultValue="invalid-email"
            />
            <FieldError />
          </Field>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Field Group" description="Horizontal and vertical field layouts.">
        <div className="w-full max-w-md space-y-6">
          <FieldGroup direction="horizontal">
            <Field name="firstName">
              <FieldLabel>First Name</FieldLabel>
              <Input placeholder="John" />
            </Field>
            <Field name="lastName">
              <FieldLabel>Last Name</FieldLabel>
              <Input placeholder="Doe" />
            </Field>
          </FieldGroup>

          <FieldGroup direction="vertical">
            <Field name="address">
              <FieldLabel>Address</FieldLabel>
              <Input placeholder="123 Main St" />
            </Field>
            <Field name="city">
              <FieldLabel>City</FieldLabel>
              <Input placeholder="New York" />
            </Field>
          </FieldGroup>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="FieldSet with Legend"
        description="Group related fields with a border and legend."
      >
        <div className="w-full max-w-md">
          <FieldSet>
            <FieldLegend>Contact Information</FieldLegend>
            <Field name="name">
              <FieldLabel>Full Name</FieldLabel>
              <Input placeholder="John Doe" />
            </Field>
            <Field name="email">
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="john@example.com" />
            </Field>
            <Field name="phone">
              <FieldLabel>Phone</FieldLabel>
              <Input type="tel" placeholder="+1 (555) 000-0000" />
              <FieldDescription>Optional</FieldDescription>
            </Field>
          </FieldSet>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Field Separator" description="Separate groups of fields.">
        <div className="w-full max-w-sm space-y-4">
          <Field name="username">
            <FieldLabel>Username</FieldLabel>
            <Input placeholder="johndoe" />
          </Field>

          <FieldSeparator />

          <Field name="bio">
            <FieldLabel>Bio</FieldLabel>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Tell us about yourself..."
              rows={3}
            />
            <FieldDescription>Maximum 500 characters</FieldDescription>
          </Field>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Complete Example"
        description="Multiple fields demonstrating various states."
      >
        <div className="w-full max-w-sm space-y-4">
          <Field name="fullName" required>
            <FieldLabel>Full Name</FieldLabel>
            <Input placeholder="John Doe" />
          </Field>

          <Field name="email" required>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" placeholder="john@example.com" />
            <FieldDescription>We'll never share your email.</FieldDescription>
          </Field>

          <Field name="phone">
            <FieldLabel>Phone Number</FieldLabel>
            <Input type="tel" placeholder="+1 (555) 000-0000" />
            <FieldDescription>Optional</FieldDescription>
          </Field>

          <Field name="website">
            <FieldLabel>Website</FieldLabel>
            <Input type="url" placeholder="https://example.com" />
          </Field>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { 
  Field, FieldLabel, FieldDescription, FieldError, 
  FieldGroup, FieldSet, FieldLegend, FieldSeparator, Input 
} from '@shared-ui-library/react';

// Basic field with composable components
<Field name="username">
  <FieldLabel>Username</FieldLabel>
  <Input placeholder="Enter your username" />
  <FieldDescription>Choose a unique username.</FieldDescription>
</Field>

// Required field
<Field name="email" required>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" placeholder="you@example.com" />
</Field>

// With error
<Field name="email" error="Please enter a valid email">
  <FieldLabel>Email</FieldLabel>
  <Input type="email" color="error" />
  <FieldError />
</Field>

// Horizontal field group
<FieldGroup direction="horizontal">
  <Field name="firstName">
    <FieldLabel>First Name</FieldLabel>
    <Input placeholder="John" />
  </Field>
  <Field name="lastName">
    <FieldLabel>Last Name</FieldLabel>
    <Input placeholder="Doe" />
  </Field>
</FieldGroup>

// FieldSet with legend
<FieldSet>
  <FieldLegend>Contact Info</FieldLegend>
  <Field name="name">
    <FieldLabel>Name</FieldLabel>
    <Input placeholder="John Doe" />
  </Field>
</FieldSet>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Components</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Field</h3>
            <PropsTable
              props={[
                {
                  name: "name",
                  type: "string",
                  description: "Field name/id (auto-generated if not provided)",
                },
                {
                  name: "error",
                  type: "string",
                  description: "Error message for this field",
                },
                {
                  name: "required",
                  type: "boolean",
                  default: "false",
                  description: "Mark field as required",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">FieldLabel</h3>
            <PropsTable
              props={[
                {
                  name: "children",
                  type: "React.ReactNode",
                  description: "Label text content",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">FieldDescription</h3>
            <PropsTable
              props={[
                {
                  name: "children",
                  type: "React.ReactNode",
                  description: "Helper text content",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">FieldError</h3>
            <PropsTable
              props={[
                {
                  name: "message",
                  type: "string",
                  description: "Override error message from context",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">FieldGroup</h3>
            <PropsTable
              props={[
                {
                  name: "direction",
                  type: '"horizontal" | "vertical"',
                  default: '"vertical"',
                  description: "Layout direction of grouped fields",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">FieldSet</h3>
            <PropsTable
              props={[
                {
                  name: "children",
                  type: "React.ReactNode",
                  description: "FieldLegend and Field components",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </ComponentPage>
  );
}
