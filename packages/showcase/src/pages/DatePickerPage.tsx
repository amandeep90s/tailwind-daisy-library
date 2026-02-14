import { DateInfo, DatePicker, DatePickerFormat } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function DatePickerPage() {
  const [dateValue, setDateValue] = useState<string>("");
  const [formatDateValue, setFormatDateValue] = useState<string>("2024-12-25");
  const [selectedFormat, setSelectedFormat] = useState<DatePickerFormat>("dd/mm/yyyy");
  const [floatingDate, setFloatingDate] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  return (
    <ComponentPage
      title="Date Picker"
      description="A date picker component with customizable date formats. Supports multiple variants, colors, and sizes."
    >
      <ShowcaseSection
        title="Basic Date Picker"
        description="Simple date picker with default bordered variant and dd/mm/yyyy format."
      >
        <div className="w-full">
          <DatePicker
            value={dateValue}
            onChange={(info) => {
              setDateValue(info?.iso || "");
            }}
            size="lg"
            label="Default Datepicker"
            variant="floating"
          />
          {dateValue && (
            <div className="alert alert-info mt-4">
              <div className="flex flex-col gap-1 text-sm">
                <div>
                  <strong>ISO:</strong> {dateValue}
                </div>
                <div>
                  <strong>Display:</strong> {dateValue && formatToDisplay(dateValue)}
                </div>
              </div>
            </div>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Date Format Options"
        description="Choose from multiple date format options. The default format is dd/mm/yyyy."
      >
        <div className="flex w-full flex-col gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select Format</span>
            </label>
            <select
              className="select select-bordered"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value as DatePickerFormat)}
            >
              <option value="dd/mm/yyyy">dd/mm/yyyy</option>
              <option value="mm/dd/yyyy">mm/dd/yyyy</option>
              <option value="yyyy-mm-dd">yyyy-mm-dd</option>
              <option value="dd-mm-yyyy">dd-mm-yyyy</option>
              <option value="mm-dd-yyyy">mm-dd-yyyy</option>
            </select>
          </div>

          <DatePicker
            value={formatDateValue}
            onChange={(info: DateInfo | null) => {
              setFormatDateValue(info?.iso || "");
            }}
            format={selectedFormat}
            label="Date Picker with Custom Format"
            size="lg"
          />

          {formatDateValue && (
            <div className="alert alert-success mt-2">
              <div className="flex flex-col gap-1 text-sm">
                <div>
                  <strong>ISO:</strong> {formatDateValue}
                </div>
                <div>
                  <strong>Formatted ({selectedFormat}):</strong>{" "}
                  {formatDateByPattern(formatDateValue, selectedFormat)}
                </div>
              </div>
            </div>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants" description="Different style variants for the date picker.">
        <div className="flex w-full flex-col gap-4">
          <DatePicker variant="bordered" placeholder="Bordered (default)" />
          <DatePicker variant="ghost" placeholder="Ghost" />
          <DatePicker
            variant="floating"
            label="Date of Birth"
            value={floatingDate}
            onChange={(info) => setFloatingDate(info?.iso || "")}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Floating Label"
        description="Floating labels provide a modern UX pattern where the label moves up when the input is focused or has value."
      >
        <div className="flex w-full flex-col space-y-4">
          <DatePicker
            variant="floating"
            label="Start Date"
            value={startDate}
            onChange={(info) => setStartDate(info?.iso || "")}
          />
          <DatePicker
            variant="floating"
            label="End Date"
            value={endDate}
            onChange={(info) => setEndDate(info?.iso || "")}
            helperText="Select the end date for your trip"
          />
          <DatePicker variant="floating" label="Deadline" error="Deadline is required" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors" description="Different color variants.">
        <div className="flex w-full flex-col space-y-4">
          <DatePicker color="primary" placeholder="Primary" />
          <DatePicker color="secondary" placeholder="Secondary" />
          <DatePicker color="success" placeholder="Success" />
          <DatePicker color="error" placeholder="Error" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Different size options.">
        <div className="flex w-full flex-col space-y-4">
          <DatePicker size="xs" placeholder="Extra Small" />
          <DatePicker size="sm" placeholder="Small" />
          <DatePicker size="md" placeholder="Medium (default)" />
          <DatePicker size="lg" placeholder="Large" />
          <DatePicker size="xl" placeholder="Extra Large" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Min/Max Date"
        description="Restrict selectable dates within a range."
      >
        <div className="w-full">
          <DatePicker
            value={dateValue}
            onChange={(info) => setDateValue(info?.iso || "")}
            min="2024-01-01"
            max="2026-12-31"
          />
          <p className="text-base-content/70 mt-2 text-sm">Range: Jan 2024 - Dec 2026</p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled" description="Date picker in disabled state.">
        <div className="w-full">
          <DatePicker value="2026-02-14" disabled />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Date Range Selection"
        description="Use two date pickers for range selection with min/max constraints."
      >
        <div className="flex w-full flex-wrap gap-4">
          <div className="w-full">
            <DatePicker
              variant="floating"
              label="Start Date"
              value={startDate}
              onChange={(info) => setStartDate(info?.iso || "")}
            />
          </div>
          <div className="w-full">
            <DatePicker
              variant="floating"
              label="End Date"
              value={endDate}
              onChange={(info) => setEndDate(info?.iso || "")}
              min={startDate}
              helperText="Must be after start date"
            />
          </div>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { DatePicker, DateInfo } from '@shared-ui-library/react';
import { useState } from 'react';

// Basic usage (controlled) with default format (dd/mm/yyyy)
const [dateValue, setDateValue] = useState<string>("");
<DatePicker 
  value={dateValue} 
  onChange={(info) => setDateValue(info?.iso || "")} 
/>

// With custom format
<DatePicker
  value={dateValue}
  format="mm/dd/yyyy"
  onChange={(info) => setDateValue(info?.iso || "")}
/>

// Floating variant with custom format
<DatePicker
  variant="floating"
  label="Date of Birth"
  value={dateValue}
  format="dd-mm-yyyy"
  onChange={(info) => setDateValue(info?.iso || "")}
/>

// Uncontrolled mode with defaultValue
<DatePicker 
  defaultValue="2024-01-01"
  format="yyyy-mm-dd"
/>

// With colors and sizes
<DatePicker color="primary" size="lg" format="mm-dd-yyyy" />

// With min/max date
<DatePicker
  value={dateValue}
  onChange={(info) => setDateValue(info?.iso || "")}
  min="2024-01-01"
  max="2026-12-31"
  format="dd/mm/yyyy"
/>

// With error and helper text
<DatePicker
  variant="floating"
  label="Deadline"
  error="Deadline is required"
  helperText="Select a future date"
/>

// DateInfo structure in onChange
// info = {
//   iso: "2026-02-14",         // yyyy-mm-dd format
//   display: "14/02/2026",     // formatted based on format prop
//   format: "dd/mm/yyyy"       // selected format
// }`}
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
              description: "Style variant of the date picker",
            },
            {
              name: "color",
              type: '"primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"',
              description: "Color variant",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "md" | "lg" | "xl"',
              default: '"md"',
              description: "Size of the input",
            },
            {
              name: "value",
              type: "string",
              description: "Selected date value in ISO format (yyyy-mm-dd)",
            },
            {
              name: "defaultValue",
              type: "string",
              description: "Default date value in ISO format (yyyy-mm-dd) for uncontrolled mode",
            },
            {
              name: "format",
              type: '"dd/mm/yyyy" | "mm/dd/yyyy" | "yyyy-mm-dd" | "dd-mm-yyyy" | "mm-dd-yyyy"',
              default: '"dd/mm/yyyy"',
              description: "Date display format",
            },
            {
              name: "onChange",
              type: "(dateInfo: DateInfo | null) => void",
              description:
                "Callback when date changes, receives {iso, display, format} object or null",
            },
            {
              name: "min",
              type: "string",
              description: "Minimum selectable date in ISO format (yyyy-mm-dd)",
            },
            {
              name: "max",
              type: "string",
              description: "Maximum selectable date in ISO format (yyyy-mm-dd)",
            },
            {
              name: "label",
              type: "string",
              description: "Label text (required for floating variant)",
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
              description: "Disables the date picker",
            },
            {
              name: "placeholder",
              type: "string",
              description: "Placeholder text (for bordered and ghost variants)",
            },
            {
              name: "className",
              type: "string",
              description: "Additional CSS classes",
            },
          ]}
        />
        <div className="mt-4">
          <h3 className="mb-2 text-lg font-semibold">DateInfo Type</h3>
          <div className="bg-base-200 rounded-lg p-4">
            <code className="text-sm">
              {`{
  iso: string;      // Date in yyyy-mm-dd format
  display: string;  // Date in selected format
  format: DatePickerFormat;  // Selected format
}`}
            </code>
          </div>
        </div>
      </section>
    </ComponentPage>
  );
}

// Helper function to format date for display
function formatToDisplay(isoDate: string): string {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

// Helper function to format date by pattern
function formatDateByPattern(isoDate: string, format: DatePickerFormat): string {
  if (!isoDate) return "";

  const [year, month, day] = isoDate.split("-");

  switch (format) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    case "yyyy-mm-dd":
      return isoDate;
    case "dd-mm-yyyy":
      return `${day}-${month}-${year}`;
    case "mm-dd-yyyy":
      return `${month}-${day}-${year}`;
    default:
      return `${day}/${month}/${year}`;
  }
}
