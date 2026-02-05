import { Radio, RadioGroup } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function RadioGroupPage() {
  const [value, setValue] = useState("option1");

  return (
    <ComponentPage
      title="Radio Group"
      description="A set of checkable buttons where only one can be checked at a time."
    >
      <ShowcaseSection title="Default">
        <RadioGroup name="default" value={value} onChange={setValue}>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
        </RadioGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Variants">
        <div className="flex gap-8">
          <RadioGroup name="primary" value="a" variant="primary">
            <Radio value="a" label="Primary" />
          </RadioGroup>
          <RadioGroup name="secondary" value="a" variant="secondary">
            <Radio value="a" label="Secondary" />
          </RadioGroup>
          <RadioGroup name="accent" value="a" variant="accent">
            <Radio value="a" label="Accent" />
          </RadioGroup>
          <RadioGroup name="success" value="a" variant="success">
            <Radio value="a" label="Success" />
          </RadioGroup>
          <RadioGroup name="warning" value="a" variant="warning">
            <Radio value="a" label="Warning" />
          </RadioGroup>
          <RadioGroup name="error" value="a" variant="error">
            <Radio value="a" label="Error" />
          </RadioGroup>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <div className="flex items-center gap-8">
          <RadioGroup name="xs" value="a" size="xs">
            <Radio value="a" label="Extra Small" />
          </RadioGroup>
          <RadioGroup name="sm" value="a" size="sm">
            <Radio value="a" label="Small" />
          </RadioGroup>
          <RadioGroup name="md" value="a" size="md">
            <Radio value="a" label="Medium" />
          </RadioGroup>
          <RadioGroup name="lg" value="a" size="lg">
            <Radio value="a" label="Large" />
          </RadioGroup>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Horizontal">
        <RadioGroup name="horizontal" value="opt1" orientation="horizontal">
          <Radio value="opt1" label="Option A" />
          <Radio value="opt2" label="Option B" />
          <Radio value="opt3" label="Option C" />
        </RadioGroup>
      </ShowcaseSection>
    </ComponentPage>
  );
}
