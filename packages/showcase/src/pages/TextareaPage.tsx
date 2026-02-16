import { Textarea } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function TextareaPage() {
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");
  const [feedback, setFeedback] = useState("");
  const [bio, setBio] = useState("");

  return (
    <ComponentPage
      title="Textarea"
      description="A multi-line text input control with floating label support and DaisyUI styling."
    >
      <ShowcaseSection
        title="Basic Textarea"
        description="Default bordered textarea with placeholder."
      >
        <div className="w-full max-w-md">
          <Textarea placeholder="Type your message here..." rows={4} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Floating Label - Interactive"
        description="Floating labels provide a modern UX pattern where the label moves up when the textarea is focused or has value."
      >
        <div className="w-full max-w-2xl space-y-4">
          <Textarea
            variant="floating"
            label="Description"
            placeholder="Enter a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
          <Textarea
            variant="floating"
            label="Comments"
            placeholder="Add your comments..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            helperText="Optional: Add any additional notes"
            rows={4}
          />
          <Textarea
            variant="floating"
            label="Feedback"
            placeholder="Share your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            color="primary"
            rows={3}
          />
        </div>
        {(description || comments || feedback) && (
          <div className="alert alert-info mt-4 max-w-2xl">
            <div className="flex flex-col gap-2 text-sm">
              {description && (
                <div>
                  <strong>Description:</strong> {description}
                </div>
              )}
              {comments && (
                <div>
                  <strong>Comments:</strong> {comments}
                </div>
              )}
              {feedback && (
                <div>
                  <strong>Feedback:</strong> {feedback}
                </div>
              )}
            </div>
          </div>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="Variants" description="Different style variants for the textarea.">
        <div className="flex w-full max-w-2xl flex-col gap-4">
          <Textarea
            variant="bordered"
            label="Bordered Variant"
            placeholder="Bordered textarea"
            rows={3}
          />
          <Textarea variant="ghost" label="Ghost Variant" placeholder="Ghost textarea" rows={3} />
          <Textarea
            variant="floating"
            label="Floating Variant"
            placeholder="Floating textarea"
            rows={3}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Validation"
        description="Display error messages and helper text."
      >
        <div className="flex w-full max-w-2xl flex-col space-y-4">
          <Textarea
            variant="floating"
            label="Bio"
            placeholder="Write about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            error={!bio ? "Bio is required" : undefined}
            rows={4}
          />
          <Textarea
            variant="floating"
            label="Optional Notes"
            placeholder="Add optional notes..."
            helperText="This field is optional"
            rows={3}
          />
          <Textarea
            variant="bordered"
            label="Message"
            placeholder="Type your message..."
            helperText="Maximum 500 characters"
            maxLength={500}
            rows={4}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors" description="Different color variants.">
        <div className="flex w-full max-w-2xl flex-col space-y-4">
          <Textarea
            variant="floating"
            label="Primary"
            placeholder="Primary color"
            color="primary"
            rows={2}
          />
          <Textarea
            variant="floating"
            label="Secondary"
            placeholder="Secondary color"
            color="secondary"
            rows={2}
          />
          <Textarea
            variant="floating"
            label="Success"
            placeholder="Success color"
            color="success"
            rows={2}
          />
          <Textarea
            variant="floating"
            label="Error"
            placeholder="Error color"
            color="error"
            rows={2}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Different size options.">
        <div className="flex w-full max-w-2xl flex-col space-y-4">
          <Textarea
            variant="floating"
            label="Extra Small"
            placeholder="XS size"
            size="xs"
            rows={3}
          />
          <Textarea variant="floating" label="Small" placeholder="SM size" size="sm" rows={3} />
          <Textarea variant="floating" label="Medium" placeholder="MD size" size="md" rows={3} />
          <Textarea variant="floating" label="Large" placeholder="LG size" size="lg" rows={3} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Rows" description="Control the number of visible text rows.">
        <div className="w-full max-w-2xl space-y-4">
          <Textarea variant="floating" label="3 Rows" placeholder="Default 3 rows" rows={3} />
          <Textarea variant="floating" label="5 Rows" placeholder="Medium 5 rows" rows={5} />
          <Textarea variant="floating" label="10 Rows" placeholder="Large 10 rows" rows={10} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" description="Textarea in disabled state.">
        <div className="w-full max-w-md space-y-4">
          <Textarea
            variant="floating"
            label="Disabled Textarea"
            value="This textarea is disabled"
            disabled
            rows={3}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Read-Only" description="Textarea in read-only state.">
        <div className="w-full max-w-md space-y-4">
          <Textarea
            variant="floating"
            label="Read-Only Textarea"
            value="This content is read-only and cannot be edited."
            readOnly
            rows={3}
          />
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { Textarea } from '@shared-ui-library/react';
import { useState } from 'react';

// Basic usage
<Textarea placeholder="Type your message..." rows={4} />

// Floating label variant (controlled)
const [value, setValue] = useState("");
<Textarea
  variant="floating"
  label="Description"
  placeholder="Enter a description..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  rows={4}
/>

// With validation
<Textarea
  variant="floating"
  label="Required Field"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={!value ? "This field is required" : undefined}
  rows={3}
/>

// With helper text
<Textarea
  variant="floating"
  label="Optional Notes"
  helperText="Maximum 500 characters"
  maxLength={500}
  rows={4}
/>

// Different variants
<Textarea variant="bordered" label="Bordered" rows={3} />
<Textarea variant="ghost" label="Ghost" rows={3} />
<Textarea variant="floating" label="Floating" rows={3} />

// With colors and sizes
<Textarea
  variant="floating"
  label="Primary Textarea"
  color="primary"
  size="lg"
  rows={4}
/>

// Disabled and read-only
<Textarea disabled value="Disabled" rows={3} />
<Textarea readOnly value="Read-only content" rows={3} />`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"bordered" | "ghost" | "floating"',
              default: '"bordered"',
              description: "Style variant of the textarea",
            },
            {
              name: "color",
              type: '"primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"',
              description: "Color variant",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "md" | "lg"',
              default: '"md"',
              description: "Size of the textarea",
            },
            {
              name: "label",
              type: "string",
              description: "Label text (recommended for floating variant)",
            },
            {
              name: "error",
              type: "string",
              description: "Error message to display",
            },
            {
              name: "helperText",
              type: "string",
              description: "Helper text to display below the textarea",
            },
            {
              name: "rows",
              type: "number",
              description: "Number of visible text rows",
            },
            {
              name: "placeholder",
              type: "string",
              description: "Placeholder text",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the textarea",
            },
            {
              name: "readOnly",
              type: "boolean",
              default: "false",
              description: "Makes the textarea read-only",
            },
            {
              name: "maxLength",
              type: "number",
              description: "Maximum number of characters allowed",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes",
            },
          ]}
        />
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">Design Notes</h3>
          <div className="bg-base-200 rounded-lg p-4">
            <ul className="list-inside list-disc space-y-2 text-sm">
              <li>
                Floating variant uses Material-style floating labels that move up when focused or
                filled
              </li>
              <li>All variants support error states and helper text</li>
              <li>Label is required for floating variant to work properly</li>
              <li>Automatically handles aria attributes for accessibility</li>
              <li>Inherits all standard HTML textarea attributes</li>
            </ul>
          </div>
        </div>
      </section>
    </ComponentPage>
  );
}
