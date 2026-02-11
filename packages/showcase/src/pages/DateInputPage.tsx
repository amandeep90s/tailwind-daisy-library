import { DateInput } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function DateInputPage() {
  const [basicDate, setBasicDate] = useState<Date | null>(null);
  const [formattedDate, setFormattedDate] = useState<Date | null>(new Date());
  const [constrainedDate, setConstrainedDate] = useState<Date | null>(null);

  return (
    <ComponentPage
      title="Date Input"
      description="A text input with calendar picker for date entry with customizable formats."
    >
      <ShowcaseSection
        title="Basic Date Input"
        description="Simple date input with default formatting."
      >
        <div className="w-full max-w-xs">
          <DateInput
            label="Birth Date"
            value={basicDate}
            onChange={setBasicDate}
            placeholder="Select your birth date"
          />
          {basicDate && (
            <p className="text-base-content/70 mt-2 text-sm">
              Selected: {basicDate.toLocaleDateString()}
            </p>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants" description="Different style variants for the date input.">
        <div className="max-w-sm space-y-4">
          <DateInput variant="bordered" label="Bordered (default)" placeholder="DD/MM/YYYY" />
          <DateInput variant="ghost" label="Ghost" placeholder="DD/MM/YYYY" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors" description="Different color variants.">
        <div className="max-w-sm space-y-4">
          <DateInput color="primary" label="Primary" placeholder="DD/MM/YYYY" />
          <DateInput color="secondary" label="Secondary" placeholder="DD/MM/YYYY" />
          <DateInput color="success" label="Success" placeholder="DD/MM/YYYY" />
          <DateInput color="error" label="Error" placeholder="DD/MM/YYYY" />
          <DateInput color="warning" label="Warning" placeholder="DD/MM/YYYY" />
          <DateInput color="info" label="Info" placeholder="DD/MM/YYYY" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Different size options.">
        <div className="max-w-sm space-y-4">
          <DateInput size="xs" label="Extra Small" placeholder="DD/MM/YYYY" />
          <DateInput size="sm" label="Small" placeholder="DD/MM/YYYY" />
          <DateInput size="md" label="Medium (default)" placeholder="DD/MM/YYYY" />
          <DateInput size="lg" label="Large" placeholder="DD/MM/YYYY" />
          <DateInput size="xl" label="Extra Large" placeholder="DD/MM/YYYY" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Date Formats"
        description="Support for multiple date format patterns."
      >
        <div className="max-w-sm space-y-4">
          <DateInput
            label="DD/MM/YYYY Format"
            dateFormat="dd/mm/yyyy"
            value={formattedDate}
            onChange={setFormattedDate}
            helperText="Day/Month/Year format"
          />
          <DateInput
            label="MM/DD/YYYY Format"
            dateFormat="mm/dd/yyyy"
            value={formattedDate}
            onChange={setFormattedDate}
            helperText="Month/Day/Year format (US)"
          />
          <DateInput
            label="YYYY/MM/DD Format"
            dateFormat="yyyy/mm/dd"
            value={formattedDate}
            onChange={setFormattedDate}
            helperText="Year/Month/Day format"
          />
          <DateInput
            label="YYYY-MM-DD Format"
            dateFormat="yyyy-mm-dd"
            value={formattedDate}
            onChange={setFormattedDate}
            helperText="ISO format with dashes"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Helper Text"
        description="Date input with additional helper text for user guidance."
      >
        <div className="max-w-sm space-y-4">
          <DateInput
            label="Appointment Date"
            placeholder="DD/MM/YYYY"
            helperText="Select your preferred appointment date"
          />
          <DateInput
            label="Project Deadline"
            placeholder="DD/MM/YYYY"
            helperText="Must be at least 2 weeks from today"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Error State" description="Date input with validation error messages.">
        <div className="max-w-sm space-y-4">
          <DateInput
            label="Required Date"
            placeholder="DD/MM/YYYY"
            error="This field is required"
          />
          <DateInput
            label="Invalid Date"
            value={null}
            onChange={() => {}}
            error="Please enter a valid date"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Min/Max Dates"
        description="Restrict selectable dates within a specific range."
      >
        <div className="max-w-sm space-y-4">
          <DateInput
            label="Future Date Only"
            value={constrainedDate}
            onChange={setConstrainedDate}
            minDate={new Date()}
            helperText="Only future dates can be selected"
          />
          <DateInput
            label="Past Date Only"
            value={constrainedDate}
            onChange={setConstrainedDate}
            maxDate={new Date()}
            helperText="Only past dates can be selected"
          />
          <DateInput
            label="Date in 2025"
            value={constrainedDate}
            onChange={setConstrainedDate}
            minDate={new Date(2025, 0, 1)}
            maxDate={new Date(2025, 11, 31)}
            helperText="Select any date in 2025"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled State" description="Date input in disabled state.">
        <div className="max-w-sm space-y-4">
          <DateInput label="Disabled" value={new Date()} onChange={() => {}} disabled />
          <DateInput
            label="Disabled Empty"
            value={null}
            onChange={() => {}}
            disabled
            placeholder="DD/MM/YYYY"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Without Calendar"
        description="Date input as text-only field without calendar picker."
      >
        <div className="max-w-sm">
          <DateInput
            label="Manual Entry Only"
            value={basicDate}
            onChange={setBasicDate}
            showCalendar={false}
            helperText="Type the date in DD/MM/YYYY format"
          />
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { DateInput } from '@shared-ui-library/react';
import { useState } from 'react';

// Basic usage
const [date, setDate] = useState<Date | null>(null);
<DateInput
  label="Birth Date"
  value={date}
  onChange={setDate}
/>

// With custom format
<DateInput
  label="Appointment Date"
  value={date}
  onChange={setDate}
  dateFormat="mm/dd/yyyy"
  helperText="Month/Day/Year format (US)"
/>

// With min/max dates
<DateInput
  label="Future Date"
  value={date}
  onChange={setDate}
  minDate={new Date()}
  helperText="Only future dates can be selected"
/>

// Different variants and colors
<DateInput
  variant="ghost"
  color="primary"
  size="lg"
  label="Ghost Primary Large"
  value={date}
  onChange={setDate}
/>

// Without calendar picker
<DateInput
  label="Manual Entry"
  value={date}
  onChange={setDate}
  showCalendar={false}
  helperText="Type the date in DD/MM/YYYY format"
/>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "Date | null",
              description: "The selected date value",
            },
            {
              name: "onChange",
              type: "(date: Date | null) => void",
              description: "Callback when date changes",
            },
            {
              name: "variant",
              type: "'bordered' | 'ghost'",
              default: "'bordered'",
              description: "Style variant of the input",
            },
            {
              name: "color",
              type: "'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'",
              default: "'default'",
              description: "Color variant of the input",
            },
            {
              name: "size",
              type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
              default: "'md'",
              description: "Size of the input",
            },
            {
              name: "label",
              type: "string",
              description: "Label text displayed above the input",
            },
            {
              name: "dateFormat",
              type: "'dd/mm/yyyy' | 'mm/dd/yyyy' | 'yyyy/mm/dd' | 'yyyy-mm-dd'",
              default: "'dd/mm/yyyy'",
              description: "Date display format",
            },
            {
              name: "placeholder",
              type: "string",
              description: "Placeholder text (defaults to format pattern)",
            },
            {
              name: "error",
              type: "string",
              description: "Error message displayed below the input",
            },
            {
              name: "helperText",
              type: "string",
              description: "Helper text displayed below the input",
            },
            {
              name: "minDate",
              type: "Date",
              description: "Minimum selectable date",
            },
            {
              name: "maxDate",
              type: "Date",
              description: "Maximum selectable date",
            },
            {
              name: "showCalendar",
              type: "boolean",
              default: "true",
              description: "Show calendar picker icon and popup",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the date input",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes",
            },
          ]}
        />
      </section>
    </ComponentPage>
  );
}
