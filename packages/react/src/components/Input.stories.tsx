import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["bordered", "ghost"],
			description: "The style variant of the input",
		},
		color: {
			control: "select",
			options: ["default", "primary", "secondary", "accent", "info", "success", "warning", "error"],
			description: "The color variant of the input",
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg"],
			description: "The size of the input",
		},
		label: {
			control: "text",
			description: "Label text displayed above the input",
		},
		error: {
			control: "text",
			description: "Error message displayed below the input",
		},
		helperText: {
			control: "text",
			description: "Helper text displayed below the input",
		},
		placeholder: {
			control: "text",
			description: "Placeholder text",
		},
		disabled: {
			control: "boolean",
			description: "Disables the input",
		},
	},
	decorators: [
		(Story) => (
			<div style={{ width: "320px" }}>
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

export const Default: Story = {
	args: {
		placeholder: "Enter text...",
	},
};

export const WithLabel: Story = {
	args: {
		label: "Username",
		placeholder: "Enter username",
	},
};

export const WithHelperText: Story = {
	args: {
		label: "Email",
		placeholder: "Enter email",
		helperText: "We'll never share your email with anyone else.",
	},
};

export const WithError: Story = {
	args: {
		label: "Password",
		placeholder: "Enter password",
		type: "password",
		error: "Password must be at least 8 characters",
	},
};

// ============================================================================
// VARIANTS
// ============================================================================

export const Bordered: Story = {
	args: {
		variant: "bordered",
		placeholder: "Bordered input",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		placeholder: "Ghost input",
	},
};

// ============================================================================
// COLORS
// ============================================================================

export const Primary: Story = {
	args: {
		color: "primary",
		placeholder: "Primary color",
	},
};

export const Secondary: Story = {
	args: {
		color: "secondary",
		placeholder: "Secondary color",
	},
};

export const Accent: Story = {
	args: {
		color: "accent",
		placeholder: "Accent color",
	},
};

export const Info: Story = {
	args: {
		color: "info",
		placeholder: "Info color",
	},
};

export const Success: Story = {
	args: {
		color: "success",
		placeholder: "Success color",
	},
};

export const Warning: Story = {
	args: {
		color: "warning",
		placeholder: "Warning color",
	},
};

export const Error: Story = {
	args: {
		color: "error",
		placeholder: "Error color",
	},
};

// ============================================================================
// SIZES
// ============================================================================

export const ExtraSmall: Story = {
	args: {
		size: "xs",
		placeholder: "Extra small",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		placeholder: "Small",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
		placeholder: "Medium",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		placeholder: "Large",
	},
};

// ============================================================================
// STATES
// ============================================================================

export const Disabled: Story = {
	args: {
		placeholder: "Disabled input",
		disabled: true,
	},
};

export const ReadOnly: Story = {
	args: {
		value: "Read-only value",
		readOnly: true,
	},
};

// ============================================================================
// INPUT TYPES
// ============================================================================

export const Email: Story = {
	args: {
		type: "email",
		label: "Email",
		placeholder: "name@example.com",
	},
};

export const Password: Story = {
	args: {
		type: "password",
		label: "Password",
		placeholder: "Enter password",
	},
};

export const Number: Story = {
	args: {
		type: "number",
		label: "Quantity",
		placeholder: "0",
	},
};

export const Search: Story = {
	args: {
		type: "search",
		placeholder: "Search...",
	},
};

// ============================================================================
// SHOWCASES
// ============================================================================

export const AllSizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Input size="xs" placeholder="Extra small" />
			<Input size="sm" placeholder="Small" />
			<Input size="md" placeholder="Medium" />
			<Input size="lg" placeholder="Large" />
		</div>
	),
	decorators: [
		(Story) => (
			<div style={{ width: "320px" }}>
				<Story />
			</div>
		),
	],
};

export const AllColors: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Input color="primary" placeholder="Primary" />
			<Input color="secondary" placeholder="Secondary" />
			<Input color="accent" placeholder="Accent" />
			<Input color="info" placeholder="Info" />
			<Input color="success" placeholder="Success" />
			<Input color="warning" placeholder="Warning" />
			<Input color="error" placeholder="Error" />
		</div>
	),
	decorators: [
		(Story) => (
			<div style={{ width: "320px" }}>
				<Story />
			</div>
		),
	],
};

export const FormExample: Story = {
	render: () => (
		<form className="flex flex-col gap-4">
			<Input label="Full Name" placeholder="John Doe" />
			<Input label="Email" type="email" placeholder="john@example.com" />
			<Input label="Password" type="password" placeholder="••••••••" helperText="Must be at least 8 characters" />
		</form>
	),
	decorators: [
		(Story) => (
			<div style={{ width: "320px" }}>
				<Story />
			</div>
		),
	],
};
