import {
  BellIcon,
  BoldIcon,
  BookmarkIcon,
  HeartIcon,
  ItalicIcon,
  MoonIcon,
  SpeakerWaveIcon,
  StarIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline";
import { Toggle } from "@shared-ui-library/react";
import { useState } from "react";
import { CodeBlock } from "../components/CodeBlock";
import {
  CodeSection,
  ComponentPage,
  ShowcaseSection,
} from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function TogglePage() {
  const [isPressed, setIsPressed] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  return (
    <ComponentPage
      title="Toggle"
      description="A two-state button that can be either on or off."
    >
      <ShowcaseSection
        title="Basic Toggle"
        description="Interactive toggle with controlled state."
      >
        <Toggle pressed={isPressed} onPressedChange={setIsPressed}>
          Toggle
        </Toggle>
        <p className="text-sm text-base-content/70 mt-2">
          State: {isPressed ? "Pressed" : "Not pressed"}
        </p>
      </ShowcaseSection>

      <ShowcaseSection
        title="Default Pressed"
        description="Toggle can start in pressed state."
      >
        <Toggle pressed={true} onPressedChange={() => {}}>
          Default On
        </Toggle>
      </ShowcaseSection>

      <ShowcaseSection
        title="Variants"
        description="Different color variants for various use cases."
      >
        <div className="flex flex-wrap gap-4">
          <Toggle variant="primary" pressed={true} onPressedChange={() => {}}>
            Default
          </Toggle>
          <Toggle variant="primary" pressed={true} onPressedChange={() => {}}>
            Primary
          </Toggle>
          <Toggle variant="secondary" pressed={true} onPressedChange={() => {}}>
            Secondary
          </Toggle>
          <Toggle variant="accent" pressed={true} onPressedChange={() => {}}>
            Accent
          </Toggle>
          <Toggle variant="primary" pressed={true} onPressedChange={() => {}}>
            Success
          </Toggle>
          <Toggle variant="primary" pressed={true} onPressedChange={() => {}}>
            Warning
          </Toggle>
          <Toggle variant="primary" pressed={true} onPressedChange={() => {}}>
            Info
          </Toggle>
          <Toggle variant="primary" pressed={true} onPressedChange={() => {}}>
            Error
          </Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Outline Style"
        description="Outline variant for subtle emphasis."
      >
        <div className="flex flex-wrap gap-4">
          <Toggle>Default</Toggle>
          <Toggle variant="primary" pressed={true} onPressedChange={() => {}}>
            Primary
          </Toggle>
          <Toggle variant="secondary">Secondary</Toggle>
          <Toggle variant="accent">Accent</Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sizes"
        description="Toggle comes in multiple sizes."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Toggle size="xs">Extra Small</Toggle>
          <Toggle size="sm">Small</Toggle>
          <Toggle size="md">Medium</Toggle>
          <Toggle size="lg">Large</Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Disabled State"
        description="Toggles can be disabled."
      >
        <div className="flex flex-wrap gap-4">
          <Toggle disabled>Disabled Off</Toggle>
          <Toggle disabled pressed={true} onPressedChange={() => {}}>
            Disabled On
          </Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Text Formatting Example"
        description="Using toggles for text formatting controls."
      >
        <div className="space-y-4 w-full">
          <div className="flex gap-2">
            <Toggle
              pressed={isBold}
              onPressedChange={setIsBold}
              variant="primary"
              size="sm"
              aria-label="Bold"
            >
              <BoldIcon className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={isItalic}
              onPressedChange={setIsItalic}
              variant="primary"
              size="sm"
              aria-label="Italic"
            >
              <ItalicIcon className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={isUnderline}
              onPressedChange={setIsUnderline}
              variant="primary"
              size="sm"
              aria-label="Underline"
            >
              <UnderlineIcon className="h-4 w-4" />
            </Toggle>
          </div>
          <p
            className={`text-lg ${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderline ? "underline" : ""}`}
          >
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Icons"
        description="Toggles work great with icon-only content."
      >
        <div className="flex gap-2">
          <Toggle variant="primary" aria-label="Star">
            <StarIcon className="h-5 w-5" />
          </Toggle>
          <Toggle variant="primary" aria-label="Heart">
            <HeartIcon className="h-5 w-5" />
          </Toggle>
          <Toggle variant="primary" aria-label="Bookmark">
            <BookmarkIcon className="h-5 w-5" />
          </Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="View Toggle Example"
        description="Toggle between different view modes."
      >
        <div className="flex gap-1 bg-base-200 p-1 rounded-lg">
          <Toggle
            variant="primary"
            pressed={true}
            onPressedChange={() => {}}
            className="rounded-md"
          >
            📊 Grid
          </Toggle>
          <Toggle variant="primary" className="rounded-md">
            📋 List
          </Toggle>
          <Toggle variant="primary" className="rounded-md">
            📅 Calendar
          </Toggle>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Feature Toggle Card"
        description="Toggle settings within a card."
      >
        <div className="card bg-base-100 shadow-lg w-full max-w-md">
          <div className="card-body">
            <h3 className="card-title">Feature Toggles</h3>
            <div className="space-y-4 mt-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-base-content/70">
                    Enable dark theme
                  </p>
                </div>
                <Toggle variant="primary" aria-label="Toggle dark mode">
                  <MoonIcon className="h-5 w-5" />
                </Toggle>
              </div>
              <div className="divider my-0" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-base-content/70">Receive alerts</p>
                </div>
                <Toggle
                  variant="primary"
                  pressed={true}
                  onPressedChange={() => {}}
                  aria-label="Toggle notifications"
                >
                  <BellIcon className="h-5 w-5" />
                </Toggle>
              </div>
              <div className="divider my-0" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sound</p>
                  <p className="text-sm text-base-content/70">Play sounds</p>
                </div>
                <Toggle variant="primary" aria-label="Toggle sound">
                  <SpeakerWaveIcon className="h-5 w-5" />
                </Toggle>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <CodeSection>
        <CodeBlock
          code={`import { Toggle } from '@shared-ui-library/react';
import { useState } from 'react';
import { StarIcon, BoldIcon } from '@heroicons/react/24/outline';

// Basic controlled toggle
const [pressed, setPressed] = useState(false);
<Toggle pressed={pressed} onPressedChange={setPressed}>
  Toggle
</Toggle>

// Default pressed (uncontrolled)
<Toggle pressed={true} onPressedChange={() => {}}>Default On</Toggle>

// With variants
<Toggle variant="primary" pressed={true} onPressedChange={() => {}}>Primary</Toggle>
<Toggle variant="primary" pressed={true} onPressedChange={() => {}}>Success</Toggle>

// Outline style
<Toggle outline variant="primary">Outline</Toggle>

// Different sizes
<Toggle size="sm">Small</Toggle>
<Toggle size="lg">Large</Toggle>

// With icons
<Toggle variant="primary" aria-label="Star">
  <StarIcon className="h-5 w-5" />
</Toggle>

// Text formatting toolbar
<div className="flex gap-2">
  <Toggle pressed={isBold} onPressedChange={setIsBold}>
    <BoldIcon className="h-4 w-4" />
  </Toggle>
</div>`}
        />
      </CodeSection>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "primary" | "secondary" | "accent" | "success" | "warning" | "info" | "error"',
              default: '"default"',
              description: "The visual style of the toggle",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "md" | "lg"',
              default: '"md"',
              description: "The size of the toggle",
            },
            {
              name: "outline",
              type: "boolean",
              default: "false",
              description: "Use outline style",
            },
            {
              name: "pressed",
              type: "boolean",
              description: "Controlled pressed state",
            },
            {
              name: "pressed={true} onPressedChange={() => {}}",
              type: "boolean",
              default: "false",
              description: "Default pressed state (uncontrolled)",
            },
            {
              name: "onPressedChange",
              type: "(pressed: boolean) => void",
              description: "Callback when pressed state changes",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the toggle",
            },
            {
              name: "children",
              type: "React.ReactNode",
              description: "Toggle content (text or icon)",
            },
          ]}
        />
      </section>
    </ComponentPage>
  );
}
