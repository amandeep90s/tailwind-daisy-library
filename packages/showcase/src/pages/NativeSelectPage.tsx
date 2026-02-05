import { NativeSelect } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

const options = [
  { value: "", label: "Select an option" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

export function NativeSelectPage() {
  const [value, setValue] = useState("");

  return (
    <ComponentPage
      title="Native Select"
      description="A native HTML select element with DaisyUI styling."
    >
      <ShowcaseSection title="Default">
        <div className="w-72">
          <NativeSelect
            options={options}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <NativeSelect options={options} variant="bordered" className="w-48" />
        <NativeSelect options={options} variant="ghost" className="w-48" />
      </ShowcaseSection>

      <ShowcaseSection title="Colors">
        <NativeSelect options={options} color="primary" className="w-40" />
        <NativeSelect options={options} color="secondary" className="w-40" />
        <NativeSelect options={options} color="accent" className="w-40" />
        <NativeSelect options={options} color="success" className="w-40" />
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <NativeSelect options={options} size="xs" className="w-36" />
        <NativeSelect options={options} size="sm" className="w-36" />
        <NativeSelect options={options} size="md" className="w-36" />
        <NativeSelect options={options} size="lg" className="w-36" />
      </ShowcaseSection>

      <ShowcaseSection title="Disabled">
        <NativeSelect options={options} disabled className="w-48" />
      </ShowcaseSection>
    </ComponentPage>
  );
}
