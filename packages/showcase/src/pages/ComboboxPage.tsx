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
        <p className="text-base-content/70 mt-2 text-sm">
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
        <p className="text-base-content/70 mt-2 text-sm">
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
        <p className="text-base-content/70 mt-2 text-sm">
          Selected: <strong>{status || "None"}</strong>
        </p>
        <p className="text-base-content/50 mt-1 text-xs">Note: "Canceled" status is disabled</p>
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

      <ShowcaseSection title="Floating Label">
        <p className="text-base-content/70 mb-4">
          Floating labels provide a modern UX pattern where the label moves up when the input is
          focused or has value.
        </p>
        <div className="max-w-sm space-y-4">
          <Combobox
            variant="floating"
            label="Framework"
            options={frameworks}
            value={framework}
            onChange={setFramework}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
          />
          <Combobox
            variant="floating"
            label="Country"
            options={countries}
            value={country}
            onChange={setCountry}
            placeholder="Select country..."
            helperText="Choose your country of residence"
          />
          <Combobox
            variant="floating"
            label="Status"
            options={statuses}
            value={status}
            onChange={setStatus}
            placeholder="Set status..."
            error="Status is required"
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
        <p className="text-base-content/70 mt-2 text-sm">
          Click the same option again to deselect it.
        </p>
      </ShowcaseSection>
    </ComponentPage>
  );
}
