import { ArrowRightIcon, HomeIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@shared-ui-library/react";
import { Link } from "react-router-dom";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="Buttons are used to trigger actions. They come in different variants, sizes, and shapes."
    >
      <ShowcaseSection
        title="Variants"
        description="Different color variants for various use cases."
      >
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
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Buttons come in multiple sizes.">
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
      </ShowcaseSection>

      <ShowcaseSection title="Shapes" description="Different button shapes for various layouts.">
        <Button shape="default" variant="primary">
          Default
        </Button>
        <Button shape="wide" variant="primary">
          Wide Button
        </Button>
        <Button shape="circle" variant="primary">
          ●
        </Button>
        <Button shape="square" variant="primary">
          □
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="Block Button"
        description="Full-width button that spans the container."
      >
        <div className="w-full">
          <Button shape="block" variant="primary">
            Block Button
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="States"
        description="Different button states including loading and disabled."
      >
        <Button variant="primary">Normal</Button>
        <Button variant="primary" active>
          Active
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
        <Button variant="primary" loading>
          Loading
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="Glass Effect"
        description="Glassmorphism effect for buttons over backgrounds."
      >
        <div className="from-primary to-secondary rounded-lg bg-gradient-to-r p-8">
          <Button glass>Glass Button</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="No Animation"
        description="Disable button animations for accessibility or performance."
      >
        <Button noAnimation variant="primary">
          No Animation
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Icons"
        description="Buttons with icons for better visual communication."
      >
        <Button variant="primary">
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Item
        </Button>
        <Button variant="error">
          Delete
          <TrashIcon className="ml-2 h-5 w-5" />
        </Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="As Link (Navigation)"
        description="Render button as a Link component for navigation. Uses react-router-dom Link or similar."
      >
        <Button as={Link} to="/button" variant="primary">
          <HomeIcon className="mr-2 h-5 w-5" />
          Current Page
        </Button>
        <Button as={Link} to="/accordion" variant="secondary">
          Go to Accordion
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
        <Button as={Link} to="/card" variant="accent">
          View Cards
        </Button>
        <Button as={Link} to="/button" variant="ghost">
          Ghost Link
        </Button>
        <Button as={Link} to="/button" variant="link">
          Link Style
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Link Button Sizes" description="Link buttons in different sizes.">
        <Button as={Link} to="/button" variant="primary" size="xs">
          Extra Small
        </Button>
        <Button as={Link} to="/button" variant="primary" size="sm">
          Small
        </Button>
        <Button as={Link} to="/button" variant="primary" size="md">
          Medium
        </Button>
        <Button as={Link} to="/button" variant="primary" size="lg">
          Large
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Link Button Shapes" description="Link buttons with different shapes.">
        <Button as={Link} to="/button" variant="primary" shape="wide">
          Wide Link Button
        </Button>
        <Button as={Link} to="/button" variant="primary" shape="circle">
          ●
        </Button>
        <Button as={Link} to="/button" variant="primary" shape="square">
          □
        </Button>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { Button } from '@shared-ui-library/react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

// Basic usage
<Button variant="primary">Click me</Button>

// Different sizes
<Button size="sm" variant="primary">Small</Button>
<Button size="lg" variant="primary">Large</Button>

// With loading state
<Button loading variant="primary">Loading...</Button>

// With icons
<Button variant="primary">
  <PlusIcon className="h-5 w-5 mr-2" />
  Add Item
</Button>

// As a Link (for navigation)
<Button as={Link} to="/dashboard" variant="primary">
  Go to Dashboard
</Button>

// Link button with different variants
<Button as={Link} to="/about" variant="secondary">
  About Us
</Button>

// Link button with icon
<Button as={Link} to="/" variant="primary">
  <HomeIcon className="h-5 w-5 mr-2" />
  Home
</Button>

// Block button
<Button shape="block" variant="primary">
  Full Width Button
</Button>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "ghost" | "link" | "outline"',
              default: '"default"',
              description: "The visual style of the button",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "md" | "lg"',
              default: '"md"',
              description: "The size of the button",
            },
            {
              name: "shape",
              type: '"default" | "wide" | "block" | "circle" | "square"',
              default: '"default"',
              description: "The shape of the button",
            },
            {
              name: "loading",
              type: "boolean",
              default: "false",
              description: "Shows loading spinner and disables the button",
            },
            {
              name: "active",
              type: "boolean",
              default: "false",
              description: "Applies active state styling",
            },
            {
              name: "glass",
              type: "boolean",
              default: "false",
              description: "Applies glass effect (works best over gradients)",
            },
            {
              name: "noAnimation",
              type: "boolean",
              default: "false",
              description: "Disables button animations",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the button",
            },
            {
              name: "as",
              type: "React.ComponentType | 'button'",
              default: "'button'",
              description:
                "Render as a Link component for navigation. Pass a Link component from react-router-dom or similar routing library.",
            },
            {
              name: "to",
              type: "string",
              description:
                "The URL path to navigate to (required when using `as` prop with a Link component).",
            },
          ]}
        />
      </section>
    </ComponentPage>
  );
}
