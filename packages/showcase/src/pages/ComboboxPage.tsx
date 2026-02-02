import { Combobox } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS" },
  { value: "next", label: "Next.js" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
];

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "in", label: "India" },
];

const statuses = [
  { value: "backlog", label: "Backlog" },
  { value: "todo", label: "Todo" },
  { value: "in-progress", label: "In Progress" },
  { value: "done", label: "Done" },
  { value: "canceled", label: "Canceled", disabled: true },
];

export function ComboboxPage() {
  const [framework, setFramework] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  return (
    <ComponentPage
      title="Combobox"
      description="Autocomplete input and command palette with a list of suggestions. Click the button to open a searchable dropdown."
    >
      <ShowcaseSection title="Default">
        <div className="w-72">
          <Combobox
            options={frameworks}
            value={framework}
            onChange={setFramework}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
          />
        </div>
        <p className="text-sm mt-2 text-base-content/70">
          Selected: <strong>{framework || "None"}</strong>
        </p>
      </ShowcaseSection>

      <ShowcaseSection title="With Custom Empty Text">
        <div className="w-72">
          <Combobox
            options={countries}
            value={country}
            onChange={setCountry}
            placeholder="Select country..."
            searchPlaceholder="Search countries..."
            emptyText="No countries found."
          />
        </div>
        <p className="text-sm mt-2 text-base-content/70">
          Selected: <strong>{country || "None"}</strong>
        </p>
      </ShowcaseSection>

      <ShowcaseSection title="With Disabled Options">
        <div className="w-72">
          <Combobox
            options={statuses}
            value={status}
            onChange={setStatus}
            placeholder="Set status..."
            searchPlaceholder="Filter status..."
          />
        </div>
        <p className="text-sm mt-2 text-base-content/70">
          Selected: <strong>{status || "None"}</strong>
        </p>
        <p className="text-xs mt-1 text-base-content/50">
          Note: "Canceled" status is disabled
        </p>
      </ShowcaseSection>

      <ShowcaseSection title="Disabled Combobox">
        <div className="w-72">
          <Combobox
            options={frameworks}
            value="react"
            onChange={() => {}}
            placeholder="Select framework..."
            disabled
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle Selection">
        <div className="w-72">
          <Combobox
            options={frameworks}
            value={framework}
            onChange={setFramework}
            placeholder="Select framework..."
          />
        </div>
        <p className="text-sm mt-2 text-base-content/70">
          Click the same option again to deselect it.
        </p>
      </ShowcaseSection>
    </ComponentPage>
  );
}
