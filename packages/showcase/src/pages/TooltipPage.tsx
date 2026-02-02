import { Button, Tooltip } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function TooltipPage() {
  return (
    <ComponentPage
      title="Tooltip"
      description="A popup that displays information related to an element."
    >
      <ShowcaseSection title="Default">
        <Tooltip content="This is a tooltip">
          <Button>Hover me</Button>
        </Tooltip>
      </ShowcaseSection>

      <ShowcaseSection title="Positions">
        <Tooltip content="Top tooltip" position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" position="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" position="right">
          <Button>Right</Button>
        </Tooltip>
      </ShowcaseSection>

      <ShowcaseSection title="Colors">
        <Tooltip content="Primary" variant="primary">
          <Button variant="primary">Primary</Button>
        </Tooltip>
        <Tooltip content="Secondary" variant="secondary">
          <Button variant="secondary">Secondary</Button>
        </Tooltip>
        <Tooltip content="Accent" variant="accent">
          <Button variant="accent">Accent</Button>
        </Tooltip>
        <Tooltip content="Info" variant="info">
          <Button variant="info">Info</Button>
        </Tooltip>
        <Tooltip content="Success" variant="success">
          <Button variant="success">Success</Button>
        </Tooltip>
      </ShowcaseSection>

      <ShowcaseSection title="On Various Elements">
        <Tooltip content="Click to copy">
          <span className="text-primary cursor-pointer">user@example.com</span>
        </Tooltip>
        <Tooltip content="Edit profile">
          <button className="btn btn-circle btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
        </Tooltip>
      </ShowcaseSection>
    </ComponentPage>
  );
}
