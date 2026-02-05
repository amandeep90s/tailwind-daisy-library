import { Button, Input, Label } from "@shared-ui-library/react";

export function HomePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="mb-4 text-4xl font-bold">Shared UI Library</h1>
      <p className="text-base-content/70 mb-8 text-lg">
        A framework-agnostic UI component library built with TailwindCSS v4 and DaisyUI v5. This
        showcase demonstrates all available components and their variants.
      </p>

      {/* Quick Overview */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Quick Overview</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Button Card */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Button</h3>
              <p className="text-base-content/60 mb-4 text-sm">
                Buttons with multiple variants, sizes, and states.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="accent" size="sm">
                  Accent
                </Button>
              </div>
            </div>
          </div>

          {/* Input Card */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Input</h3>
              <p className="text-base-content/60 mb-4 text-sm">
                Text inputs with labels, validation, and helper text.
              </p>
              <Input placeholder="Enter text..." size="sm" />
            </div>
          </div>

          {/* Label Card */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Label</h3>
              <p className="text-base-content/60 mb-4 text-sm">
                Form labels with required indicator support.
              </p>
              <div>
                <Label>Regular Label</Label>
                <Label required>Required Label</Label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Usage Example</h2>
        <div className="mockup-code bg-base-300 text-base-content">
          <pre data-prefix="1">
            <code>{`// For React projects`}</code>
          </pre>
          <pre data-prefix="2">
            <code>{`import { Button, Input, Label } from '@shared-ui-library/react';`}</code>
          </pre>
          <pre data-prefix="3">
            <code></code>
          </pre>
          <pre data-prefix="4">
            <code>{`function MyForm() {`}</code>
          </pre>
          <pre data-prefix="5">
            <code>{`  return (`}</code>
          </pre>
          <pre data-prefix="6">
            <code>{`    <form>`}</code>
          </pre>
          <pre data-prefix="7">
            <code>{`      <Input label="Email" type="email" />`}</code>
          </pre>
          <pre data-prefix="8">
            <code>{`      <Button variant="primary">Submit</Button>`}</code>
          </pre>
          <pre data-prefix="9">
            <code>{`    </form>`}</code>
          </pre>
          <pre data-prefix="10">
            <code>{`  );`}</code>
          </pre>
          <pre data-prefix="11">
            <code>{`}`}</code>
          </pre>
        </div>
      </section>

      {/* Framework Agnostic Usage */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Framework Agnostic Usage</h2>
        <p className="text-base-content/70 mb-4">
          For non-React projects, use the DaisyUI class variants directly:
        </p>
        <div className="mockup-code bg-base-300 text-base-content">
          <pre data-prefix="1">
            <code>{`// Import variant helpers`}</code>
          </pre>
          <pre data-prefix="2">
            <code>{`import { getButtonClasses, getInputClasses } from '@shared-ui-library/styles/variants';`}</code>
          </pre>
          <pre data-prefix="3">
            <code></code>
          </pre>
          <pre data-prefix="4">
            <code>{`// Generate class strings`}</code>
          </pre>
          <pre data-prefix="5">
            <code>{`const buttonClass = getButtonClasses({ variant: 'primary', size: 'md' });`}</code>
          </pre>
          <pre data-prefix="6">
            <code>{`// Result: "btn btn-primary btn-md"`}</code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Features</h2>
        <ul className="text-base-content/70 list-inside list-disc space-y-2">
          <li>🎨 Built with TailwindCSS v4 and DaisyUI v5</li>
          <li>⚛️ React components with full TypeScript support</li>
          <li>🔧 Framework-agnostic CSS class helpers</li>
          <li>🎭 Light and dark theme support</li>
          <li>📦 Customizable design tokens</li>
          <li>📚 Storybook documentation</li>
        </ul>
      </section>
    </div>
  );
}
