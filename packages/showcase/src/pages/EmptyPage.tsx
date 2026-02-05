import {
  ExclamationTriangleIcon,
  FolderOpenIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Button, Empty } from "@shared-ui-library/react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function EmptyPage() {
  return (
    <ComponentPage title="Empty" description="Display a placeholder for empty states.">
      <ShowcaseSection
        title="Basic Empty State"
        description="Default empty state with simple message."
      >
        <div className="border-base-300 w-full rounded-lg border">
          <Empty title="No data" description="There's nothing to display here yet." />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Action" description="Empty state with call-to-action button.">
        <div className="border-base-300 w-full rounded-lg border">
          <Empty
            icon={<PlusCircleIcon className="h-16 w-16" />}
            title="No projects found"
            description="Get started by creating your first project."
            action={<Button variant="primary">Create Project</Button>}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="No Results" description="Empty state for search results.">
        <div className="border-base-300 w-full rounded-lg border">
          <Empty
            icon={<MagnifyingGlassIcon className="h-16 w-16" />}
            title="No results"
            description="Try adjusting your search or filter to find what you're looking for."
            action={<Button variant="ghost">Clear filters</Button>}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Error State" description="Empty state indicating an error occurred.">
        <div className="border-base-300 w-full rounded-lg border">
          <Empty
            icon={<ExclamationTriangleIcon className="text-error h-16 w-16" />}
            title="Something went wrong"
            description="We encountered an error while loading your data. Please try again."
            action={<Button variant="error">Retry</Button>}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Empty Inbox"
        description="Empty state for messaging or notifications."
      >
        <div className="border-base-300 w-full rounded-lg border">
          <Empty
            icon={<InboxIcon className="h-16 w-16" />}
            title="Your inbox is empty"
            description="Messages you receive will appear here."
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Empty Folder" description="Empty state for file/folder views.">
        <div className="border-base-300 w-full rounded-lg border">
          <Empty
            icon={<FolderOpenIcon className="h-16 w-16" />}
            title="No files"
            description="Upload your first file to get started."
            action={
              <div className="flex gap-2">
                <Button variant="ghost">Browse files</Button>
                <Button variant="primary">Upload</Button>
              </div>
            }
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Compact Size"
        description="Smaller empty state for constrained spaces."
      >
        <div className="border-base-300 w-full max-w-md rounded-lg border">
          <Empty
            icon={<FolderOpenIcon className="h-12 w-12" />}
            title="No items"
            description="Nothing here yet."
          />
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { Empty, Button } from '@shared-ui-library/react';
import { FolderOpenIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

// Basic empty state
<Empty
  title="No data"
  description="There's nothing to display here yet."
/>

// With custom icon
<Empty
  icon={<FolderOpenIcon className="w-16 h-16" />}
  title="No Files"
  description="Upload your first file to get started."
/>

// With action button
<Empty
  icon={<PlusCircleIcon className="w-16 h-16" />}
  title="No Projects Yet"
  description="Create your first project to get started."
  action={
    <Button variant="primary">Create Project</Button>
  }
/>

// Compact size
<Empty
  size="sm"
  title="No items"
  description="Nothing here yet."
/>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "icon",
              type: "React.ReactNode",
              description: "Custom icon to display",
            },
            {
              name: "title",
              type: "string",
              description: "Title text for the empty state",
            },
            {
              name: "description",
              type: "string",
              description: "Description text explaining the empty state",
            },
            {
              name: "action",
              type: "React.ReactNode",
              description: "Action button or element to display",
            },
            {
              name: "size",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: "Size of the empty state container",
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
