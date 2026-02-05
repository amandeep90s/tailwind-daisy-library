import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the label",
    },
    required: {
      control: "boolean",
      description: "Shows a required asterisk",
    },
    alt: {
      control: "boolean",
      description: "Uses alternative/helper text style",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC STORIES
// ============================================================================

export const Default: Story = {
  args: {
    children: "Username",
  },
};

export const Required: Story = {
  args: {
    children: "Email",
    required: true,
  },
};

export const Alternative: Story = {
  args: {
    children: "Optional field",
    alt: true,
  },
};

// ============================================================================
// WITH INPUT
// ============================================================================

export const WithInput: Story = {
  render: () => (
    <div className="form-control w-64">
      <Label htmlFor="username">Username</Label>
      <input
        id="username"
        type="text"
        placeholder="Enter username"
        className="input input-bordered w-full"
      />
    </div>
  ),
};

export const WithRequiredInput: Story = {
  render: () => (
    <div className="form-control w-64">
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <input
        id="email"
        type="email"
        placeholder="name@example.com"
        className="input input-bordered w-full"
        required
      />
    </div>
  ),
};

export const WithInputComponent: Story = {
  render: () => (
    <div className="w-64">
      <Input label="Password" type="password" placeholder="Enter password" />
    </div>
  ),
};

// ============================================================================
// FORM EXAMPLE
// ============================================================================

export const FormExample: Story = {
  render: () => (
    <form className="flex w-80 flex-col gap-4">
      <div className="form-control">
        <Label htmlFor="name" required>
          Full Name
        </Label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="form-control">
        <Label htmlFor="bio">Bio</Label>
        <textarea
          id="bio"
          placeholder="Tell us about yourself"
          className="textarea textarea-bordered w-full"
          rows={3}
        />
        <Label alt>Maximum 500 characters</Label>
      </div>

      <div className="form-control">
        <Label htmlFor="website">Website</Label>
        <input
          id="website"
          type="url"
          placeholder="https://example.com"
          className="input input-bordered w-full"
        />
        <Label alt>Optional</Label>
      </div>
    </form>
  ),
};
