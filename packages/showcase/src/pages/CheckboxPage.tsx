import { Checkbox } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentPage
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <ShowcaseSection title="Default">
        <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <span>Checked: {checked ? "Yes" : "No"}</span>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <Checkbox variant="primary" defaultChecked />
        <Checkbox variant="secondary" defaultChecked />
        <Checkbox variant="accent" defaultChecked />
        <Checkbox variant="info" defaultChecked />
        <Checkbox variant="success" defaultChecked />
        <Checkbox variant="warning" defaultChecked />
        <Checkbox variant="error" defaultChecked />
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <Checkbox size="xs" defaultChecked />
        <Checkbox size="sm" defaultChecked />
        <Checkbox size="md" defaultChecked />
        <Checkbox size="lg" defaultChecked />
      </ShowcaseSection>

      <ShowcaseSection title="With Label">
        <label className="flex cursor-pointer items-center gap-2">
          <Checkbox variant="primary" />
          <span>I agree to the terms and conditions</span>
        </label>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled">
        <Checkbox disabled />
        <Checkbox disabled defaultChecked />
      </ShowcaseSection>
    </ComponentPage>
  );
}
