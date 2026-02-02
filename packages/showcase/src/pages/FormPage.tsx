import {
  Button,
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  Input,
} from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import {
  CodeSection,
  ComponentPage,
  ShowcaseSection,
} from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function FormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData(e.currentTarget);
    console.log("Form submitted:", Object.fromEntries(data.entries()));
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted successfully!");
    }, 1000);
  };

  const handleErrorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({
      email: "This email is already in use.",
      password: "Password must be at least 8 characters.",
    });
  };

  const clearErrors = () => setErrors({});

  return (
    <ComponentPage
      title="Form"
      description="Composable form components with validation and accessibility following shadcn patterns."
    >
      <ShowcaseSection
        title="Basic Form with FormField"
        description="Using FormField, FormItem, FormLabel, FormControl pattern."
      >
        <div className="w-full max-w-md">
          <Form onSubmit={handleSubmit}>
            <FormField name="name">
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" />
                </FormControl>
                <FormDescription>
                  Your full name as it appears on documents.
                </FormDescription>
              </FormItem>
            </FormField>

            <FormField name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" />
                </FormControl>
                <FormDescription>We'll never share your email.</FormDescription>
              </FormItem>
            </FormField>

            <FormField name="message">
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Type your message here..."
                    rows={4}
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <FormActions>
              <Button type="submit" variant="primary" loading={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </FormActions>
          </Form>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Validation Errors"
        description="Form showing validation error states using FormMessage."
      >
        <div className="w-full max-w-md">
          <Form onSubmit={handleErrorSubmit}>
            <FormField name="email" error={errors.email}>
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    color={errors.email ? "error" : undefined}
                    onFocus={clearErrors}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField name="password" error={errors.password}>
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    color={errors.password ? "error" : undefined}
                    onFocus={clearErrors}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormActions>
              <Button type="submit" variant="primary">
                Sign Up
              </Button>
            </FormActions>
          </Form>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Form with Sections"
        description="Organized form with FormSection components."
      >
        <div className="w-full max-w-md">
          <Form>
            <FormSection
              title="Personal Information"
              description="Tell us about yourself."
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField name="firstName">
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" />
                    </FormControl>
                  </FormItem>
                </FormField>
                <FormField name="lastName">
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" />
                    </FormControl>
                  </FormItem>
                </FormField>
              </div>

              <FormField name="bio">
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <textarea
                      className="textarea textarea-bordered w-full"
                      placeholder="Tell us about yourself..."
                      rows={3}
                    />
                  </FormControl>
                  <FormDescription>Maximum 500 characters.</FormDescription>
                </FormItem>
              </FormField>
            </FormSection>

            <FormSection
              title="Contact Details"
              description="How can we reach you?"
            >
              <FormField name="email">
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" />
                  </FormControl>
                </FormItem>
              </FormField>

              <FormField name="phone">
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </FormControl>
                  <FormDescription>Optional</FormDescription>
                </FormItem>
              </FormField>
            </FormSection>

            <FormActions>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </FormActions>
          </Form>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Login Form"
        description="Complete login form example."
      >
        <div className="w-full max-w-sm">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <Form>
                <FormField name="email">
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" />
                    </FormControl>
                  </FormItem>
                </FormField>

                <FormField name="password">
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" />
                    </FormControl>
                  </FormItem>
                </FormField>

                <div className="flex items-center justify-between py-2">
                  <label className="label cursor-pointer gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <span className="label-text">Remember me</span>
                  </label>
                  <a href="#" className="link link-primary text-sm">
                    Forgot password?
                  </a>
                </div>

                <FormActions align="start">
                  <Button type="submit" variant="primary" className="w-full">
                    Login
                  </Button>
                </FormActions>
              </Form>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Registration Form"
        description="Multi-field registration form."
      >
        <div className="w-full max-w-md">
          <Form>
            <div className="grid grid-cols-2 gap-4">
              <FormField name="firstName">
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" />
                  </FormControl>
                </FormItem>
              </FormField>
              <FormField name="lastName">
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>

            <FormField name="email">
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" />
                </FormControl>
              </FormItem>
            </FormField>

            <FormField name="phone">
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </FormControl>
                <FormDescription>Optional</FormDescription>
              </FormItem>
            </FormField>

            <FormField name="password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" />
                </FormControl>
                <FormDescription>Must be at least 8 characters</FormDescription>
              </FormItem>
            </FormField>

            <FormField name="confirmPassword">
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" />
                </FormControl>
              </FormItem>
            </FormField>

            <div className="flex items-start gap-2 py-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm mt-1"
                required
              />
              <span className="text-sm">
                I agree to the{" "}
                <a href="#" className="link link-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="link link-primary">
                  Privacy Policy
                </a>
              </span>
            </div>

            <FormActions align="start">
              <Button type="submit" variant="primary" className="w-full">
                Create Account
              </Button>
            </FormActions>
          </Form>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { 
  Form, FormField, FormItem, FormLabel, FormControl, 
  FormDescription, FormMessage, FormSection, FormActions, 
  Input, Button 
} from '@shared-ui-library/react';

// Basic form with composable components
<Form onSubmit={handleSubmit}>
  <FormField name="email" error={errors.email}>
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" placeholder="you@example.com" />
      </FormControl>
      <FormDescription>We'll never share your email.</FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
  
  <FormActions>
    <Button type="submit" variant="primary">Submit</Button>
  </FormActions>
</Form>

// Form with sections
<Form>
  <FormSection title="Personal Info" description="Tell us about yourself.">
    <FormField name="name">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input placeholder="John Doe" />
        </FormControl>
      </FormItem>
    </FormField>
  </FormSection>
  
  <FormActions align="between">
    <Button type="button" variant="ghost">Cancel</Button>
    <Button type="submit" variant="primary">Save</Button>
  </FormActions>
</Form>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Components</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Form</h3>
            <PropsTable
              props={[
                {
                  name: "onSubmit",
                  type: "(e: FormEvent) => void",
                  description: "Callback when form is submitted",
                },
                {
                  name: "children",
                  type: "React.ReactNode",
                  description: "Form content",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">FormField</h3>
            <PropsTable
              props={[
                {
                  name: "name",
                  type: "string",
                  description: "Field name for form state (required)",
                },
                {
                  name: "error",
                  type: "string",
                  description: "Error message for this field",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">FormItem</h3>
            <PropsTable
              props={[
                {
                  name: "children",
                  type: "React.ReactNode",
                  description:
                    "Contains FormLabel, FormControl, FormDescription, FormMessage",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">FormControl</h3>
            <PropsTable
              props={[
                {
                  name: "children",
                  type: "React.ReactNode",
                  description: "The form input element (Input, Select, etc.)",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">FormSection</h3>
            <PropsTable
              props={[
                {
                  name: "title",
                  type: "string",
                  description: "Section title",
                },
                {
                  name: "description",
                  type: "string",
                  description: "Section description",
                },
              ]}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">FormActions</h3>
            <PropsTable
              props={[
                {
                  name: "align",
                  type: '"start" | "center" | "end" | "between"',
                  default: '"end"',
                  description: "Alignment of action buttons",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </ComponentPage>
  );
}
