import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"primary",
				"secondary",
				"accent",
				"info",
				"success",
				"warning",
				"error",
				"ghost",
				"link",
				"outline",
			],
			description: "The visual style variant of the button",
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg"],
			description: "The size of the button",
		},
		shape: {
			control: "select",
			options: ["default", "wide", "block", "circle", "square"],
			description: "The shape of the button",
		},
		loading: {
			control: "boolean",
			description: "Shows a loading spinner",
		},
		disabled: {
			control: "boolean",
			description: "Disables the button",
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
		children: "Button",
		variant: "default",
		size: "md",
	},
};

export const Primary: Story = {
	args: {
		children: "Primary Button",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary Button",
		variant: "secondary",
	},
};

export const Accent: Story = {
	args: {
		children: "Accent Button",
		variant: "accent",
	},
};

// ============================================================================
// SEMANTIC COLORS
// ============================================================================

export const Info: Story = {
	args: {
		children: "Info",
		variant: "info",
	},
};

export const Success: Story = {
	args: {
		children: "Success",
		variant: "success",
	},
};

export const Warning: Story = {
	args: {
		children: "Warning",
		variant: "warning",
	},
};

export const Error: Story = {
	args: {
		children: "Error",
		variant: "error",
	},
};

// ============================================================================
// STYLE VARIANTS
// ============================================================================

export const Ghost: Story = {
	args: {
		children: "Ghost Button",
		variant: "ghost",
	},
};

export const Link: Story = {
	args: {
		children: "Link Button",
		variant: "link",
	},
};

export const Outline: Story = {
	args: {
		children: "Outline Button",
		variant: "outline",
	},
};

// ============================================================================
// SIZES
// ============================================================================

export const ExtraSmall: Story = {
	args: {
		children: "Extra Small",
		size: "xs",
		variant: "primary",
	},
};

export const Small: Story = {
	args: {
		children: "Small",
		size: "sm",
		variant: "primary",
	},
};

export const Medium: Story = {
	args: {
		children: "Medium",
		size: "md",
		variant: "primary",
	},
};

export const Large: Story = {
	args: {
		children: "Large",
		size: "lg",
		variant: "primary",
	},
};

// ============================================================================
// SHAPES
// ============================================================================

export const Wide: Story = {
	args: {
		children: "Wide Button",
		shape: "wide",
		variant: "primary",
	},
};

export const Block: Story = {
	args: {
		children: "Block Button",
		shape: "block",
		variant: "primary",
	},
	parameters: {
		layout: "padded",
	},
};

export const Circle: Story = {
	args: {
		children: "X",
		shape: "circle",
		variant: "primary",
	},
};

export const Square: Story = {
	args: {
		children: "★",
		shape: "square",
		variant: "primary",
	},
};

// ============================================================================
// STATES
// ============================================================================

export const Loading: Story = {
	args: {
		children: "Loading",
		loading: true,
		variant: "primary",
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled",
		disabled: true,
		variant: "primary",
	},
};

export const Active: Story = {
	args: {
		children: "Active",
		active: true,
		variant: "primary",
	},
};

// ============================================================================
// ALL VARIANTS SHOWCASE
// ============================================================================

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button variant="default">Default</Button>
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="accent">Accent</Button>
			<Button variant="info">Info</Button>
			<Button variant="success">Success</Button>
			<Button variant="warning">Warning</Button>
			<Button variant="error">Error</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
			<Button variant="outline">Outline</Button>
		</div>
	),
};

export const AllSizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Button size="xs" variant="primary">
				Extra Small
			</Button>
			<Button size="sm" variant="primary">
				Small
			</Button>
			<Button size="md" variant="primary">
				Medium
			</Button>
			<Button size="lg" variant="primary">
				Large
			</Button>
		</div>
	),
};
