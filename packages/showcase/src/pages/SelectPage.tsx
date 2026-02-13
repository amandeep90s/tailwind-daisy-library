import { Select } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

export function SelectPage() {
  const [value, setValue] = useState("");
  const [floatingValue, setFloatingValue] = useState("");

  return (
    <ComponentPage
      title="Select"
      description="Displays a list of options for the user to pick from."
    >
      <ShowcaseSection title="Default">
        <div className="w-72">
          <Select
            options={options}
            placeholder="Select a framework"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <Select options={options} variant="bordered" className="w-48" placeholder="Bordered" />
        <Select options={options} variant="ghost" className="w-48" placeholder="Ghost" />
        <Select
          options={options}
          variant="floating"
          label="Framework"
          placeholder="Select..."
          className="w-48"
          value={floatingValue}
          onChange={(e) => setFloatingValue(e.target.value)}
        />
      </ShowcaseSection>
      <p className="text-base-content/70 mb-4">
        Floating labels provide a modern UX pattern where the label moves up when the input is
        focused or has value.
      </p>

      <ShowcaseSection title="Floating Label">
        <div className="flex w-full flex-col space-y-4">
          <Select
            variant="floating"
            label="Country"
            options={[
              { value: "us", label: "United States" },
              { value: "uk", label: "United Kingdom" },
              { value: "ca", label: "Canada" },
            ]}
            placeholder="Select country..."
          />
          <Select
            variant="floating"
            label="Priority"
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            placeholder="Select priority..."
            helperText="Choose the task priority"
          />
          <Select
            variant="floating"
            label="Category"
            options={options}
            placeholder="Select..."
            error="Please select a category"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors">
        <Select options={options} color="primary" className="w-40" placeholder="Primary" />
        <Select options={options} color="secondary" className="w-40" placeholder="Secondary" />
        <Select options={options} color="accent" className="w-40" placeholder="Accent" />
        <Select options={options} color="success" className="w-40" placeholder="Success" />
        <Select options={options} color="error" className="w-40" placeholder="Error" />
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <Select options={options} size="xs" className="w-32" placeholder="XS" />
        <Select options={options} size="sm" className="w-32" placeholder="SM" />
        <Select options={options} size="md" className="w-32" placeholder="MD" />
        <Select options={options} size="lg" className="w-32" placeholder="LG" />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled">
        <Select options={options} disabled className="w-48" placeholder="Disabled" />
      </ShowcaseSection>
    </ComponentPage>
  );
}
