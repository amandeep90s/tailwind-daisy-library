import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DatetimeInput } from "./DatetimeInput";

const meta: Meta<typeof DatetimeInput> = {
  title: "Components/DatetimeInput",
  component: DatetimeInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["time", "datetime-local"],
      description: "Input type: time or datetime-local",
    },
    variant: {
      control: "select",
      options: ["bordered", "ghost", "floating"],
      description: "The style variant of the input",
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "info", "success", "warning", "error"],
      description: "The color variant of the input",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "The size of the input",
    },
    label: {
      control: "text",
      description: "Label text",
    },
    error: {
      control: "text",
      description: "Error message displayed below the input",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the input",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
    },
    fullWidth: {
      control: "boolean",
      description: "Make the input full width",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC STORIES
// ============================================================================

export const TimeFloating: Story = {
  args: {
    type: "time",
    variant: "floating",
    label: "Select Time",
    size: "lg",
  },
};

export const DateTimeFloating: Story = {
  args: {
    type: "datetime-local",
    variant: "floating",
    label: "Select Date & Time",
    size: "lg",
  },
};

export const TimeBordered: Story = {
  args: {
    type: "time",
    variant: "bordered",
    label: "Select Time",
    size: "lg",
  },
};

export const DateTimeBordered: Story = {
  args: {
    type: "datetime-local",
    variant: "bordered",
    label: "Select Date & Time",
    size: "lg",
  },
};

export const WithDefaultValue: Story = {
  args: {
    type: "time",
    variant: "floating",
    label: "Meeting Time",
    defaultValue: "14:30",
    size: "lg",
  },
};

export const WithError: Story = {
  args: {
    type: "time",
    variant: "floating",
    label: "Select Time",
    value: "",
    error: "Time selection is required",
    size: "lg",
  },
};

export const WithHelperText: Story = {
  args: {
    type: "datetime-local",
    variant: "floating",
    label: "Appointment Time",
    helperText: "Choose your preferred appointment date and time",
    size: "lg",
  },
};

export const WithMinMax: Story = {
  args: {
    type: "time",
    variant: "floating",
    label: "Working Hours",
    min: "09:00",
    max: "17:00",
    helperText: "Select a time between 9 AM and 5 PM",
    size: "lg",
  },
};

export const SmallSize: Story = {
  args: {
    type: "time",
    variant: "floating",
    label: "Time",
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    type: "datetime-local",
    variant: "floating",
    label: "Event Date & Time",
    size: "xl",
  },
};

export const PrimaryColor: Story = {
  args: {
    type: "time",
    variant: "bordered",
    label: "Time Slot",
    color: "primary",
    size: "lg",
  },
};

export const ErrorColor: Story = {
  args: {
    type: "time",
    variant: "bordered",
    label: "Time",
    color: "error",
    size: "lg",
  },
};

export const FullWidth: Story = {
  args: {
    type: "datetime-local",
    variant: "floating",
    label: "Select Date & Time",
    fullWidth: true,
    size: "lg",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

// ============================================================================
// INTERACTIVE STORIES WITH STATE
// ============================================================================

export const ControlledTime: Story = {
  render: () => {
    const [time, setTime] = useState("14:30");

    return (
      <div className="space-y-4">
        <DatetimeInput
          type="time"
          variant="floating"
          label="Select Time"
          value={time}
          onChange={(value) => setTime(value)}
          size="lg"
        />
        <div className="text-sm">
          Selected time: <strong>{time || "None"}</strong>
        </div>
      </div>
    );
  },
};

export const ControlledDateTime: Story = {
  render: () => {
    const [datetime, setDatetime] = useState("");

    return (
      <div className="space-y-4">
        <DatetimeInput
          type="datetime-local"
          variant="floating"
          label="Select Date & Time"
          value={datetime}
          onChange={(value) => setDatetime(value)}
          size="lg"
        />
        <div className="text-sm">
          Selected datetime: <strong>{datetime || "None"}</strong>
        </div>
      </div>
    );
  },
};

export const MultipleInputs: Story = {
  render: () => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    return (
      <div className="space-y-6">
        <DatetimeInput
          type="time"
          variant="floating"
          label="Start Time"
          value={startTime}
          onChange={(value) => setStartTime(value)}
          size="lg"
        />
        <DatetimeInput
          type="time"
          variant="floating"
          label="End Time"
          value={endTime}
          onChange={(value) => setEndTime(value)}
          size="lg"
        />
        <div className="space-y-1 text-sm">
          <div>
            Start: <strong>{startTime || "Not selected"}</strong>
          </div>
          <div>
            End: <strong>{endTime || "Not selected"}</strong>
          </div>
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    return (
      <div className="space-y-6">
        <DatetimeInput
          type="time"
          variant="floating"
          label="Floating Variant"
          defaultValue="10:00"
          size="lg"
        />
        <DatetimeInput
          type="time"
          variant="bordered"
          label="Bordered Variant"
          defaultValue="11:00"
          size="lg"
        />
        <DatetimeInput
          type="time"
          variant="ghost"
          label="Ghost Variant"
          defaultValue="12:00"
          size="lg"
        />
      </div>
    );
  },
};
