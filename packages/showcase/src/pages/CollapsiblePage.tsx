import { Collapsible } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentPage
      title="Collapsible"
      description="An interactive component which expands/collapses content."
    >
      <ShowcaseSection title="Basic Collapsible" description="Click to toggle content visibility.">
        <div className="w-full max-w-md">
          <Collapsible trigger={<button className="btn btn-sm">Toggle Content</button>}>
            <div className="space-y-2">
              <p>This content can be collapsed and expanded.</p>
              <p>It's useful for hiding less important information until needed.</p>
            </div>
          </Collapsible>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Controlled State"
        description="Control the open/close state programmatically."
      >
        <div className="w-full max-w-md space-y-4">
          <div className="flex gap-2">
            <button className="btn btn-sm btn-primary" onClick={() => setIsOpen(true)}>
              Open
            </button>
            <button className="btn btn-sm btn-secondary" onClick={() => setIsOpen(false)}>
              Close
            </button>
            <button className="btn btn-sm btn-accent" onClick={() => setIsOpen(!isOpen)}>
              Toggle
            </button>
          </div>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            trigger={<span className="text-sm font-medium">Controlled Content</span>}
          >
            <div className="bg-base-200 rounded p-4">
              <p>This collapsible is controlled by the buttons above.</p>
              <p className="mt-2">Current state: {isOpen ? "Open" : "Closed"}</p>
            </div>
          </Collapsible>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Default Open" description="Collapsible can start in open state.">
        <div className="w-full max-w-md">
          <Collapsible
            defaultOpen
            trigger={<span className="text-sm font-medium">Default Open Content</span>}
          >
            <div className="bg-base-200 rounded p-4">
              <p>This collapsible starts in the open state.</p>
            </div>
          </Collapsible>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="FAQ Example"
        description="Common use case for FAQs and documentation."
      >
        <div className="w-full max-w-2xl space-y-2">
          <div className="collapse-arrow bg-base-200 collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">What is DaisyUI?</div>
            <div className="collapse-content">
              <p>
                DaisyUI is a component library for Tailwind CSS. It provides customizable UI
                components with clean designs.
              </p>
            </div>
          </div>
          <div className="collapse-arrow bg-base-200 collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">How do I install it?</div>
            <div className="collapse-content">
              <p>You can install DaisyUI using npm: npm install daisyui</p>
            </div>
          </div>
          <div className="collapse-arrow bg-base-200 collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Is it free to use?</div>
            <div className="collapse-content">
              <p>Yes! DaisyUI is completely free and open source under the MIT license.</p>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { Collapsible } from '@shared-ui-library/react';
import { useState } from 'react';

// Basic usage
<Collapsible trigger={<button className="btn btn-sm">Toggle</button>}>
  <div>Collapsible content goes here</div>
</Collapsible>

// Default open
<Collapsible defaultOpen trigger={<button className="btn btn-sm">Toggle</button>}>
  <div>Content starts visible</div>
</Collapsible>

// Controlled
const [isOpen, setIsOpen] = useState(false);
<Collapsible open={isOpen} onOpenChange={setIsOpen} trigger={<button className="btn btn-sm">Toggle</button>}>
  <div>Controlled content</div>
</Collapsible>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "open",
              type: "boolean",
              description: "Controlled open state",
            },
            {
              name: "defaultOpen",
              type: "boolean",
              default: "false",
              description: "Default open state (uncontrolled)",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              description: "Callback when open state changes",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the collapsible",
            },
          ]}
        />
      </section>
    </ComponentPage>
  );
}
