import { Button, ToastItem, ToastProvider, useToast } from "@shared-ui-library/react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

function ToastDemo() {
  const { addToast } = useToast();

  const showDefaultToast = () => {
    addToast({ message: "Event has been created" });
  };

  const showSuccessToast = () => {
    addToast({
      message: "Successfully saved!",
      variant: "success",
    });
  };

  const showErrorToast = () => {
    addToast({
      message: "Error occurred",
      variant: "error",
    });
  };

  const showWarningToast = () => {
    addToast({
      message: "Warning",
      variant: "warning",
    });
  };

  const showInfoToast = () => {
    addToast({
      message: "Information",
      variant: "info",
    });
  };

  const showLongToast = () => {
    addToast({
      message: "This toast will stay longer",
      variant: "info",
      duration: 10000,
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button onClick={showDefaultToast}>Default</Button>
      <Button variant="success" onClick={showSuccessToast}>
        Success
      </Button>
      <Button variant="error" onClick={showErrorToast}>
        Error
      </Button>
      <Button variant="warning" onClick={showWarningToast}>
        Warning
      </Button>
      <Button variant="info" onClick={showInfoToast}>
        Info
      </Button>
      <Button variant="ghost" onClick={showLongToast}>
        Long Duration
      </Button>
    </div>
  );
}

function MultipleToastDemo() {
  const { addToast } = useToast();

  const showMultiple = () => {
    addToast({ message: "First notification", variant: "info" });
    setTimeout(() => {
      addToast({ message: "Second notification", variant: "success" });
    }, 500);
    setTimeout(() => {
      addToast({ message: "Third notification", variant: "warning" });
    }, 1000);
  };

  return <Button onClick={showMultiple}>Show Multiple Toasts</Button>;
}

export function ToastPage() {
  return (
    <ComponentPage title="Toast" description="Displays a brief, temporary notification.">
      <ShowcaseSection
        title="Interactive Demo"
        description="Click buttons to trigger different toast types."
      >
        <ToastProvider position="bottom-end">
          <ToastDemo />
        </ToastProvider>
      </ShowcaseSection>

      <ShowcaseSection title="Multiple Toasts" description="Stack multiple toasts at once.">
        <ToastProvider position="top-end">
          <MultipleToastDemo />
        </ToastProvider>
      </ShowcaseSection>

      <ShowcaseSection
        title="Toast Variants (Static)"
        description="Visual representation of all toast variants."
      >
        <div className="w-full max-w-md space-y-3">
          <ToastItem message="Default toast message" className="relative" />
          <ToastItem message="Info toast message" variant="info" className="relative" />
          <ToastItem message="Success toast message" variant="success" className="relative" />
          <ToastItem message="Warning toast message" variant="warning" className="relative" />
          <ToastItem message="Error toast message" variant="error" className="relative" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Description"
        description="Toasts can include additional description text."
      >
        <div className="w-full max-w-md space-y-3">
          <ToastItem message="File uploaded" variant="success" className="relative" />
          <ToastItem message="Connection lost" variant="error" className="relative" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Position Options"
        description="Available positions for the toast container."
      >
        <div className="grid w-full grid-cols-3 gap-4 text-sm">
          <div className="bg-base-200 rounded-lg p-3 text-center">top-start</div>
          <div className="bg-base-200 rounded-lg p-3 text-center">top-center</div>
          <div className="bg-base-200 rounded-lg p-3 text-center">top-end</div>
          <div className="bg-base-200 rounded-lg p-3 text-center">middle-start</div>
          <div className="bg-base-200 rounded-lg p-3 text-center">middle-center</div>
          <div className="bg-base-200 rounded-lg p-3 text-center">middle-end</div>
          <div className="bg-base-200 rounded-lg p-3 text-center">bottom-start</div>
          <div className="bg-base-200 rounded-lg p-3 text-center">bottom-center</div>
          <div className="bg-base-200 border-primary rounded-lg border-2 p-3 text-center font-medium">
            bottom-end (default)
          </div>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { ToastProvider, useToast, ToastItem } from '@shared-ui-library/react';

// Wrap your app with ToastProvider
<ToastProvider position="bottom-end">
  <App />
</ToastProvider>

// Use the hook to show toasts
function MyComponent() {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      message: "Successfully saved!",
      variant: "success",
      description: "Your changes have been saved.",
    });
  };

  return <Button onClick={showToast}>Save</Button>;
}

// Toast variants
addToast({ message: "Default toast" });
addToast({ message: "Info", variant: "info" });
addToast({ message: "Success", variant: "success" });
addToast({ message: "Warning", variant: "warning" });
addToast({ message: "Error", variant: "error" });

// Custom duration (10 seconds)
addToast({
  message: "Long toast",
  duration: 10000,
});`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold">ToastProvider Props</h3>
            <PropsTable
              props={[
                {
                  name: "position",
                  type: '"top-start" | "top-center" | "top-end" | "middle-start" | "middle-center" | "middle-end" | "bottom-start" | "bottom-center" | "bottom-end"',
                  default: '"bottom-end"',
                  description: "Position of the toast container",
                },
                {
                  name: "children",
                  type: "React.ReactNode",
                  description: "Application content",
                },
              ]}
            />
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Toast Options (addToast)</h3>
            <PropsTable
              props={[
                {
                  name: "message",
                  type: "string",
                  description: "Main toast message",
                },
                {
                  name: "variant",
                  type: '"info" | "success" | "warning" | "error"',
                  description: "Visual variant of the toast",
                },
                {
                  name: "description",
                  type: "string",
                  description: "Additional description text",
                },
                {
                  name: "duration",
                  type: "number",
                  default: "4000",
                  description: "Duration in milliseconds before auto-dismiss",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </ComponentPage>
  );
}
