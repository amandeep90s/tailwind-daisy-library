import { Calendar } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import {
  CodeSection,
  ComponentPage,
  ShowcaseSection,
} from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [rangeDate, setRangeDate] = useState<Date | undefined>(new Date());

  return (
    <ComponentPage
      title="Calendar"
      description="A date field component that allows users to enter and edit date."
    >
      <ShowcaseSection
        title="Basic Calendar"
        description="Simple calendar for date selection."
      >
        <div className="flex flex-col gap-2">
          <Calendar value={selectedDate} onChange={setSelectedDate} />
          <p className="text-sm text-base-content/70">
            Selected: {selectedDate?.toLocaleDateString() ?? "None"}
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Min/Max Date"
        description="Restrict selectable dates within a range."
      >
        <div className="flex flex-col gap-2">
          <Calendar
            value={rangeDate}
            onChange={setRangeDate}
            minDate={new Date(2024, 0, 1)}
            maxDate={new Date(2026, 11, 31)}
          />
          <p className="text-sm text-base-content/70">
            Range: Jan 2024 - Dec 2026
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Disabled"
        description="Calendar in disabled state."
      >
        <Calendar value={new Date()} />
      </ShowcaseSection>

      <ShowcaseSection
        title="Multiple Calendars"
        description="Display multiple months side by side."
      >
        <div className="flex flex-wrap gap-4">
          <div>
            <p className="text-sm font-medium mb-2">Start Date</p>
            <Calendar value={selectedDate} onChange={setSelectedDate} />
          </div>
          <div>
            <p className="text-sm font-medium mb-2">End Date</p>
            <Calendar value={rangeDate} onChange={setRangeDate} />
          </div>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { Calendar } from '@shared-ui-library/react';
import { useState } from 'react';

// Basic usage
const [date, setDate] = useState<Date | undefined>(new Date());
<Calendar value={date} onChange={setDate} />

// With min/max date
<Calendar
  value={date}
  onChange={setDate}
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2026, 11, 31)}
/>

// Disabled state
<Calendar disabled value={new Date()} />`}
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
              type: "(date: Date | undefined) => void",
              description: "Callback when date changes",
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
              description: "Disables the calendar",
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
