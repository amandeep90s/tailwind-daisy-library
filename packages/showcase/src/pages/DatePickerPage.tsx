import { DatePicker } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function DatePickerPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [rangeDate, setRangeDate] = useState<Date | undefined>(undefined);
  const [floatingDate, setFloatingDate] = useState<Date | undefined>(undefined);

  return (
    <ComponentPage title="Date Picker" description="A date picker component with calendar popup.">
      <ShowcaseSection
        title="Basic Date Picker"
        description="Simple date picker with default styling."
      >
        <div className="w-full max-w-xs">
          <DatePicker value={date} onChange={(d) => setDate(d ?? undefined)} />
          {date && (
            <p className="text-base-content/70 mt-2 text-sm">
              Selected: {date.toLocaleDateString()}
            </p>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants" description="Different style variants for the date picker.">
        <div className="max-w-sm space-y-4">
          <DatePicker variant="bordered" placeholder="Bordered (default)" />
          <DatePicker variant="ghost" placeholder="Ghost" />
          <DatePicker
            variant="floating"
            label="Date of Birth"
            value={floatingDate}
            onChange={(d) => setFloatingDate(d ?? undefined)}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Floating Label"
        description="Floating labels provide a modern UX pattern where the label moves up when the input is focused or has value."
      >
        <div className="max-w-sm space-y-4">
          <DatePicker
            variant="floating"
            label="Start Date"
            value={date}
            onChange={(d) => setDate(d ?? undefined)}
          />
          <DatePicker
            variant="floating"
            label="End Date"
            value={rangeDate}
            onChange={(d) => setRangeDate(d ?? undefined)}
            helperText="Select the end date for your trip"
          />
          <DatePicker variant="floating" label="Deadline" error="Deadline is required" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors" description="Different color variants.">
        <div className="max-w-sm space-y-4">
          <DatePicker color="primary" placeholder="Primary" />
          <DatePicker color="secondary" placeholder="Secondary" />
          <DatePicker color="success" placeholder="Success" />
          <DatePicker color="error" placeholder="Error" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Different size options.">
        <div className="max-w-sm space-y-4">
          <DatePicker size="xs" placeholder="Extra Small" />
          <DatePicker size="sm" placeholder="Small" />
          <DatePicker size="md" placeholder="Medium (default)" />
          <DatePicker size="lg" placeholder="Large" />
          <DatePicker size="xl" placeholder="Extra Large" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Placeholder"
        description="Date picker with custom placeholder text."
      >
        <div className="w-full max-w-xs">
          <DatePicker
            value={rangeDate}
            onChange={(d) => setRangeDate(d ?? undefined)}
            placeholder="Select a date..."
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Min/Max Date"
        description="Restrict selectable dates within a range."
      >
        <div className="w-full max-w-xs">
          <DatePicker value={date} onChange={(d) => setDate(d ?? undefined)} />
          <p className="text-base-content/70 mt-2 text-sm">Range: Jan 2024 - Dec 2026</p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" description="Date picker in disabled state.">
        <div className="w-full max-w-xs">
          <DatePicker value={new Date()} disabled />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Date Range Selection"
        description="Use two date pickers for range selection."
      >
        <div className="flex w-full flex-wrap gap-4">
          <div className="w-full max-w-xs">
            <DatePicker
              variant="floating"
              label="Start Date"
              value={date}
              onChange={(d) => setDate(d ?? undefined)}
            />
          </div>
          <div className="w-full max-w-xs">
            <DatePicker
              variant="floating"
              label="End Date"
              value={rangeDate}
              onChange={(d) => setRangeDate(d ?? undefined)}
              min={date}
            />
          </div>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { DatePicker } from '@shared-ui-library/react';
import { useState } from 'react';

// Basic usage
const [date, setDate] = useState<Date | undefined>();
<DatePicker value={date} onChange={setDate} />

// With placeholder
<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date..."
/>

// With min/max date
<DatePicker
  value={date}
  onChange={setDate}
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2026, 11, 31)}
/>

// Custom format
<DatePicker
  value={date}
  onChange={setDate}
  format={(d) => d.toLocaleDateString('en-GB')}
/>

// Disabled state
<DatePicker value={new Date()} disabled />`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "Date | undefined",
              description: "The selected date value",
            },
            {
              name: "onChange",
              type: "(date: Date | null) => void",
              description: "Callback when date changes",
            },
            {
              name: "placeholder",
              type: "string",
              default: '"Pick a date"',
              description: "Placeholder text when no date selected",
            },
            {
              name: "format",
              type: "(date: Date) => string",
              description: "Custom date format function",
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
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the date picker",
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
