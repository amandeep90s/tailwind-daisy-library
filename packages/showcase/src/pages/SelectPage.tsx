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
  const [countryValue, setCountryValue] = useState("");

  return (
    <ComponentPage
      title="Select"
      description="Displays a list of options for the user to pick from with floating label support."
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

      <ShowcaseSection title="Floating Label Behavior">
        <div className="flex w-full flex-col space-y-6">
          <p className="text-base-content/70 text-sm">
            The floating variant displays the label by default (not the first option). When a value
            is selected, the label moves to the top, similar to Material Design.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold">Without Selection:</p>
              <Select
                variant="floating"
                label="Select Framework"
                options={options}
                value=""
                onChange={() => {}}
              />
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">With Selection:</p>
              <Select
                variant="floating"
                label="Select Framework"
                options={options}
                value="react"
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <div className="flex flex-wrap gap-4">
          <Select
            options={options}
            variant="bordered"
            className="w-48"
            placeholder="Bordered"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Select
            options={options}
            variant="ghost"
            className="w-48"
            placeholder="Ghost"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Select
            options={options}
            variant="floating"
            label="Framework"
            className="w-48"
            value={floatingValue}
            onChange={(e) => setFloatingValue(e.target.value)}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Floating Label Examples">
        <div className="flex w-full flex-col space-y-4">
          <Select
            variant="floating"
            label="Country"
            options={[
              { value: "us", label: "United States" },
              { value: "uk", label: "United Kingdom" },
              { value: "ca", label: "Canada" },
              { value: "au", label: "Australia" },
            ]}
            value={countryValue}
            onChange={(e) => setCountryValue(e.target.value)}
          />
          <Select
            variant="floating"
            label="Priority"
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
            helperText="Choose the task priority"
          />
          <Select
            variant="floating"
            label="Category"
            options={options}
            error="Please select a category"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Labels (Non-Floating)">
        <div className="flex flex-col space-y-4">
          <Select
            variant="bordered"
            label="Framework"
            options={options}
            placeholder="Select a framework"
          />
          <Select
            variant="ghost"
            label="Technology"
            options={options}
            placeholder="Choose technology"
            helperText="Select your preferred framework"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors">
        <div className="flex flex-wrap gap-4">
          <Select options={options} color="primary" className="w-40" placeholder="Primary" />
          <Select options={options} color="secondary" className="w-40" placeholder="Secondary" />
          <Select options={options} color="accent" className="w-40" placeholder="Accent" />
          <Select options={options} color="success" className="w-40" placeholder="Success" />
          <Select options={options} color="warning" className="w-40" placeholder="Warning" />
          <Select options={options} color="error" className="w-40" placeholder="Error" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <div className="flex flex-wrap items-end gap-4">
          <Select options={options} size="xs" className="w-32" placeholder="XS" />
          <Select options={options} size="sm" className="w-32" placeholder="SM" />
          <Select options={options} size="md" className="w-32" placeholder="MD" />
          <Select options={options} size="lg" className="w-32" placeholder="LG" />
          <Select options={options} size="xl" className="w-32" placeholder="XL" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="States">
        <div className="flex flex-col space-y-4">
          <Select
            variant="floating"
            label="Disabled Select"
            options={options}
            disabled
            placeholder="Disabled"
          />
          <Select
            variant="bordered"
            label="With Error"
            options={options}
            error="This field is required"
          />
          <Select
            variant="bordered"
            label="With Helper Text"
            options={options}
            helperText="Choose your favorite framework"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Uncontrolled Mode">
        <div className="flex flex-col space-y-4">
          <p className="text-base-content/70 text-sm">
            Select can be used in uncontrolled mode with defaultValue prop.
          </p>
          <Select
            variant="floating"
            label="Default Selection"
            options={options}
            defaultValue="react"
          />
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
