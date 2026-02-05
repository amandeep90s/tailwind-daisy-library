import { Button, ButtonGroup } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function ButtonGroupPage() {
  return (
    <ComponentPage title="Button Group" description="Groups multiple buttons together.">
      <ShowcaseSection title="Default">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </ShowcaseSection>

      <ShowcaseSection title="With Variants">
        <ButtonGroup>
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Cancel</Button>
        </ButtonGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Radio Group Style">
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="primary">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
      </ShowcaseSection>

      <ShowcaseSection title="Vertical">
        <ButtonGroup orientation="vertical">
          <Button>Top</Button>
          <Button>Middle</Button>
          <Button>Bottom</Button>
        </ButtonGroup>
      </ShowcaseSection>
    </ComponentPage>
  );
}
