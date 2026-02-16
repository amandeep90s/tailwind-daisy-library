import { DatetimeInput } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function DatetimeInputPage() {
  const [timeValue, setTimeValue] = useState<string>("");
  const [datetimeValue, setDatetimeValue] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [appointmentTime, setAppointmentTime] = useState<string>("");

  return (
    <ComponentPage
      title="Datetime Input"
      description="A datetime input component with support for time and datetime-local inputs. Features a floating label design with a lock icon."
    >
      <ShowcaseSection
        title="Basic Time Input"
        description="Simple time input with floating variant and lock icon."
      >
        <div className="w-full">
          <DatetimeInput
            type="time"
            variant="floating"
            label="Select Time"
            value={timeValue}
            onChange={(value: string) => setTimeValue(value)}
            size="lg"
          />
          {timeValue && (
            <div className="alert alert-info mt-4">
              <div className="flex flex-col gap-1 text-sm">
                <div>
                  <strong>Selected Time:</strong> {timeValue}
                </div>
              </div>
            </div>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Datetime-Local Input"
        description="Input for both date and time selection."
      >
        <div className="w-full">
          <DatetimeInput
            type="datetime-local"
            variant="floating"
            label="Select Date & Time"
            value={datetimeValue}
            onChange={(value: string) => setDatetimeValue(value)}
            size="lg"
          />
          {datetimeValue && (
            <div className="alert alert-success mt-4">
              <div className="flex flex-col gap-1 text-sm">
                <div>
                  <strong>Selected DateTime:</strong> {datetimeValue}
                </div>
              </div>
            </div>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Variants"
        description="Different style variants for the datetime input."
      >
        <div className="flex w-full flex-col gap-4">
          <DatetimeInput
            type="time"
            variant="floating"
            label="Floating Variant"
            defaultValue="10:00"
          />
          <DatetimeInput
            type="time"
            variant="bordered"
            label="Bordered Variant"
            defaultValue="11:00"
          />
          <DatetimeInput type="time" variant="ghost" label="Ghost Variant" defaultValue="12:00" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Floating Label Examples"
        description="Floating labels provide a modern UX pattern where the label moves up when the input has value or is focused."
      >
        <div className="flex w-full flex-col space-y-4">
          <DatetimeInput
            type="time"
            variant="floating"
            label="Start Time"
            value={startTime}
            onChange={(value: string) => setStartTime(value)}
          />
          <DatetimeInput
            type="time"
            variant="floating"
            label="End Time"
            value={endTime}
            onChange={(value: string) => setEndTime(value)}
            helperText="Select the end time"
          />
          <DatetimeInput
            type="time"
            variant="floating"
            label="Meeting Time"
            error="Time is required"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors" description="Different color variants.">
        <div className="flex w-full flex-col space-y-4">
          <DatetimeInput type="time" color="primary" label="Primary" variant="bordered" />
          <DatetimeInput type="time" color="secondary" label="Secondary" variant="bordered" />
          <DatetimeInput type="time" color="success" label="Success" variant="bordered" />
          <DatetimeInput type="time" color="error" label="Error" variant="bordered" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Different size options.">
        <div className="flex w-full flex-col space-y-4">
          <DatetimeInput type="time" size="xs" label="Extra Small" variant="floating" />
          <DatetimeInput type="time" size="sm" label="Small" variant="floating" />
          <DatetimeInput type="time" size="md" label="Medium" variant="floating" />
          <DatetimeInput type="time" size="lg" label="Large" variant="floating" />
          <DatetimeInput type="time" size="xl" label="Extra Large" variant="floating" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Min/Max Time"
        description="Restrict selectable times within a range (working hours example)."
      >
        <div className="w-full">
          <DatetimeInput
            type="time"
            variant="floating"
            label="Working Hours"
            value={appointmentTime}
            onChange={(value: string) => setAppointmentTime(value)}
            min="09:00"
            max="17:00"
            helperText="Select a time between 9 AM and 5 PM"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" description="Datetime input in disabled state.">
        <div className="w-full">
          <DatetimeInput
            type="time"
            variant="floating"
            label="Disabled Time"
            value="14:30"
            disabled
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Time Range Selection"
        description="Use two time inputs for range selection."
      >
        <div className="flex w-full flex-wrap gap-4">
          <div className="w-full">
            <DatetimeInput
              type="time"
              variant="floating"
              label="Start Time"
              value={startTime}
              onChange={(value: string) => setStartTime(value)}
            />
          </div>
          <div className="w-full">
            <DatetimeInput
              type="time"
              variant="floating"
              label="End Time"
              value={endTime}
              onChange={(value: string) => setEndTime(value)}
              helperText={startTime ? `Must be after ${startTime}` : "Select start time first"}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Full Width"
        description="Make the input take full width of its container."
      >
        <div className="w-full">
          <DatetimeInput
            type="datetime-local"
            variant="floating"
            label="Event Date & Time"
            fullWidth
            size="lg"
          />
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { DatetimeInput } from '@shared-ui-library/react';
import { useState } from 'react';

// Basic time input (controlled)
const [timeValue, setTimeValue] = useState<string>("");
<DatetimeInput 
  type="time"
  variant="floating"
  label="Select Time"
  value={timeValue} 
  onChange={(value) => setTimeValue(value)} 
/>

// Datetime-local input
const [datetimeValue, setDatetimeValue] = useState<string>("");
<DatetimeInput
  type="datetime-local"
  variant="floating"
  label="Select Date & Time"
  value={datetimeValue}
  onChange={(value) => setDatetimeValue(value)}
/>

// Uncontrolled mode with defaultValue
<DatetimeInput 
  type="time"
  variant="floating"
  label="Meeting Time"
  defaultValue="14:30"
/>

// With colors and sizes
<DatetimeInput 
  type="time"
  variant="bordered"
  label="Time Slot"
  color="primary" 
  size="lg" 
/>

// With min/max time constraints
<DatetimeInput
  type="time"
  variant="floating"
  label="Working Hours"
  min="09:00"
  max="17:00"
  helperText="Select a time between 9 AM and 5 PM"
/>

// With error and helper text
<DatetimeInput
  type="time"
  variant="floating"
  label="Appointment Time"
  error="Time selection is required"
  helperText="Choose your preferred time"
/>

// Different variants
<DatetimeInput 
  type="time" 
  variant="floating" 
  label="Floating" 
/>
<DatetimeInput 
  type="time" 
  variant="bordered" 
  label="Bordered" 
/>
<DatetimeInput 
  type="time" 
  variant="ghost" 
  label="Ghost" 
/>

// Full width
<DatetimeInput
  type="datetime-local"
  variant="floating"
  label="Full Width Example"
  fullWidth
/>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "type",
              type: '"time" | "datetime-local"',
              default: '"time"',
              description: "Input type: time or datetime-local",
            },
            {
              name: "variant",
              type: '"bordered" | "ghost" | "floating"',
              default: '"floating"',
              description: "Style variant of the input",
            },
            {
              name: "color",
              type: '"primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"',
              description: "Color variant",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "md" | "lg" | "xl"',
              default: '"lg"',
              description: "Size of the input",
            },
            {
              name: "value",
              type: "string",
              description: "Selected value (HH:MM for time, YYYY-MM-DDTHH:MM for datetime-local)",
            },
            {
              name: "defaultValue",
              type: "string",
              description: "Default value for uncontrolled mode",
            },
            {
              name: "onChange",
              type: "(value: string) => void",
              description: "Callback when value changes, receives the raw value string",
            },
            {
              name: "min",
              type: "string",
              description: "Minimum selectable value (HH:MM for time)",
            },
            {
              name: "max",
              type: "string",
              description: "Maximum selectable value (HH:MM for time)",
            },
            {
              name: "label",
              type: "string",
              description: "Label text (recommended for all variants)",
            },
            {
              name: "error",
              type: "string",
              description: "Error message to display",
            },
            {
              name: "helperText",
              type: "string",
              description: "Helper text to display below the input",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the input",
            },
            {
              name: "fullWidth",
              type: "boolean",
              default: "false",
              description: "Make the input full width",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes",
            },
          ]}
        />
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">Value Formats</h3>
          <div className="bg-base-200 space-y-2 rounded-lg p-4">
            <div>
              <strong>Time:</strong>
              <code className="ml-2 text-sm">HH:MM</code>
              <span className="ml-2 text-sm">(e.g., "14:30", "09:00")</span>
            </div>
            <div>
              <strong>Datetime-Local:</strong>
              <code className="ml-2 text-sm">YYYY-MM-DDTHH:MM</code>
              <span className="ml-2 text-sm">(e.g., "2024-01-15T14:30")</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">Design Notes</h3>
          <div className="bg-base-200 rounded-lg p-4">
            <ul className="list-inside list-disc space-y-2 text-sm">
              <li>Uses floating label design similar to DatePicker</li>
              <li>Features a lock icon on the right side</li>
              <li>Displays raw values without formatting</li>
              <li>Native browser picker remains fully functional</li>
              <li>Label floats up when input has value or is focused</li>
            </ul>
          </div>
        </div>
      </section>
    </ComponentPage>
  );
}
