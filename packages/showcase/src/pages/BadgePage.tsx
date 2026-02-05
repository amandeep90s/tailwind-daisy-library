import { Badge } from "@shared-ui-library/react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function BadgePage() {
  return (
    <ComponentPage
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
    >
      <ShowcaseSection
        title="Variants"
        description="Different color variants for various use cases."
      >
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Badge comes in multiple sizes to fit different contexts."
      >
        <Badge size="xs">Extra Small</Badge>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </ShowcaseSection>

      <ShowcaseSection title="Outline" description="Outlined badge variant for subtle emphasis.">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </ShowcaseSection>

      <ShowcaseSection
        title="In Context"
        description="Badges work great for notifications, counters, and status indicators."
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg">Inbox</span>
            <Badge variant="primary" size="sm">
              5
            </Badge>
          </div>
          <button className="btn btn-primary w-fit">
            Notifications
            <Badge variant="secondary" size="sm">
              99+
            </Badge>
          </button>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <Badge variant="success" size="sm">
              Active
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>Tags:</span>
            <Badge variant="info" size="sm">
              React
            </Badge>
            <Badge variant="accent" size="sm">
              TypeScript
            </Badge>
            <Badge variant="primary" size="sm">
              UI
            </Badge>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Badge with Avatar" description="Combine badges with other elements.">
        <div className="flex items-center gap-4">
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
              <span>JD</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">John Doe</p>
            <Badge variant="success" size="xs">
              Pro Member
            </Badge>
          </div>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { Badge } from '@shared-ui-library/react';

// Basic usage
<Badge variant="primary">New</Badge>

// Different sizes
<Badge size="sm" variant="success">5</Badge>
<Badge size="lg" variant="info">Large</Badge>

// Outline variant
<Badge variant="primary" outline>Primary</Badge>

// In context with button
<button className="btn btn-primary">
  Notifications
  <Badge variant="secondary" size="sm">99+</Badge>
</button>

// Multiple tags
<div className="flex gap-2">
  <Badge variant="info" size="sm">React</Badge>
  <Badge variant="accent" size="sm">TypeScript</Badge>
</div>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "primary" | "secondary" | "accent" | "ghost" | "info" | "success" | "warning" | "error"',
              default: '"default"',
              description: "The visual style of the badge",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "md" | "lg"',
              default: '"md"',
              description: "The size of the badge",
            },
            {
              name: "outline",
              type: "boolean",
              default: "false",
              description: "Use outline style",
            },
            {
              name: "children",
              type: "React.ReactNode",
              description: "Content of the badge",
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
