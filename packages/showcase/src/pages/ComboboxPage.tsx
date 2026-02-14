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
        <div className="w-full">
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
        <div className="w-full">
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
        <div className="w-full">
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
        <div className="w-full">
          <Combobox
            options={frameworks}
            value="react"
            onChange={() => {}}
            placeholder="Select framework..."
            disabled
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Floating Label Behavior">
        <div className="flex w-full flex-col space-y-6">
          <p className="text-base-content/70 text-sm">
            The floating variant displays the label by default. When a value is selected or the
            dropdown opens, the label moves to the top, similar to Material Design.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold">Without Selection:</p>
              <Combobox
                variant="floating"
                label="Select Framework"
                options={frameworks}
                value=""
                onChange={() => {}}
                searchPlaceholder="Search frameworks..."
              />
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">With Selection:</p>
              <Combobox
                variant="floating"
                label="Select Framework"
                options={frameworks}
                value="react"
                onChange={() => {}}
                searchPlaceholder="Search frameworks..."
              />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Floating Label Examples">
        <p className="text-base-content/70 mb-4">
          Floating labels provide a modern UX pattern where the label moves up when the combobox is
          focused or has value.
        </p>
        <div className="space-y-4">
          <Combobox
            variant="floating"
            label="Framework"
            options={frameworks}
            value={framework}
            onChange={setFramework}
            searchPlaceholder="Search frameworks..."
          />
          <Combobox
            variant="floating"
            label="Country"
            options={countries}
            value={country}
            onChange={setCountry}
            helperText="Choose your country of residence"
          />
          <Combobox
            variant="floating"
            label="Status"
            options={statuses}
            value={status}
            onChange={setStatus}
            error="Status is required"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <p className="mb-2 text-sm font-semibold">Bordered (Default):</p>
            <Combobox
              variant="bordered"
              options={frameworks}
              value={framework}
              onChange={setFramework}
              placeholder="Select framework..."
              searchPlaceholder="Search frameworks..."
            />
          </div>
          <div className="w-full">
            <p className="mb-2 text-sm font-semibold">Floating:</p>
            <Combobox
              variant="floating"
              label="Framework"
              options={frameworks}
              value={framework}
              onChange={setFramework}
              searchPlaceholder="Search frameworks..."
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle Selection">
        <div className="w-full">
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
