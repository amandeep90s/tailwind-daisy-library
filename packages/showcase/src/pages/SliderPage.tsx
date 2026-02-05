import { Slider } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function SliderPage() {
  const [value, setValue] = useState(50);

  return (
    <ComponentPage
      title="Slider"
      description="An input where the user selects a value from within a given range."
    >
      <ShowcaseSection title="Default">
        <div className="w-72">
          <Slider value={value} onChange={(e) => setValue(Number(e.target.value))} />
          <p className="mt-2 text-sm">Value: {value}</p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <div className="w-72 space-y-4">
          <Slider defaultValue={50} variant="primary" />
          <Slider defaultValue={50} variant="secondary" />
          <Slider defaultValue={50} variant="accent" />
          <Slider defaultValue={50} variant="success" />
          <Slider defaultValue={50} variant="warning" />
          <Slider defaultValue={50} variant="error" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <div className="w-72 space-y-4">
          <Slider defaultValue={50} size="xs" />
          <Slider defaultValue={50} size="sm" />
          <Slider defaultValue={50} size="md" />
          <Slider defaultValue={50} size="lg" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Steps">
        <div className="w-72">
          <Slider defaultValue={50} min={0} max={100} step={10} />
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
