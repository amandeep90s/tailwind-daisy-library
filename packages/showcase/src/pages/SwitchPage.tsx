import { Switch } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

const CheckIcon = () => (
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="4"
      fill="none"
      stroke="currentColor"
    >
      <path d="M20 6 9 17l-5-5" />
    </g>
  </svg>
);

const XIcon = () => (
  <svg
    aria-label="disabled"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export function SwitchPage() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentPage
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <ShowcaseSection title="Default">
        <div className="flex items-center gap-4">
          <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <span>Enabled: {checked ? "Yes" : "No"}</span>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors">
        <div className="flex items-center gap-4">
          <Switch variant="primary" defaultChecked />
          <Switch variant="secondary" defaultChecked />
          <Switch variant="accent" defaultChecked />
          <Switch variant="neutral" defaultChecked />
          <Switch variant="info" defaultChecked />
          <Switch variant="success" defaultChecked />
          <Switch variant="warning" defaultChecked />
          <Switch variant="error" defaultChecked />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <div className="flex items-center gap-4">
          <Switch size="xs" defaultChecked />
          <Switch size="sm" defaultChecked />
          <Switch size="md" defaultChecked />
          <Switch size="lg" defaultChecked />
          <Switch size="xl" defaultChecked />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Label">
        <div className="flex flex-col gap-4">
          <Switch label="Enable notifications" variant="primary" />
          <Switch label="Dark mode" variant="primary" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons">
        <div className="flex items-center gap-4">
          <Switch checkedIcon={<CheckIcon />} uncheckedIcon={<XIcon />} defaultChecked />
          <Switch checkedIcon={<CheckIcon />} uncheckedIcon={<XIcon />} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons and Colors">
        <div className="flex items-center gap-4">
          <Switch
            checkedIcon={<CheckIcon />}
            uncheckedIcon={<XIcon />}
            variant="primary"
            defaultChecked
          />
          <Switch
            checkedIcon={<CheckIcon />}
            uncheckedIcon={<XIcon />}
            variant="success"
            defaultChecked
          />
          <Switch
            checkedIcon={<CheckIcon />}
            uncheckedIcon={<XIcon />}
            variant="error"
            defaultChecked
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Icons - Different Sizes">
        <div className="flex items-center gap-4">
          <Switch checkedIcon={<CheckIcon />} uncheckedIcon={<XIcon />} size="sm" defaultChecked />
          <Switch checkedIcon={<CheckIcon />} uncheckedIcon={<XIcon />} size="md" defaultChecked />
          <Switch checkedIcon={<CheckIcon />} uncheckedIcon={<XIcon />} size="lg" defaultChecked />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled">
        <div className="flex items-center gap-4">
          <Switch disabled />
          <Switch disabled defaultChecked />
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
