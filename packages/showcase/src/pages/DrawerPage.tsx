import { Button, Drawer } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function DrawerPage() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <ComponentPage
      title="Drawer"
      description="A panel that slides out from the edge of the screen."
    >
      <ShowcaseSection title="Left Drawer">
        <Button onClick={() => setLeftOpen(true)}>Open Left Drawer</Button>
        <Drawer
          open={leftOpen}
          onClose={() => setLeftOpen(false)}
          position="left"
          content={
            <div className="bg-base-100 h-full w-80 p-4">
              <h3 className="mb-4 text-lg font-bold">Left Drawer</h3>
              <p>This drawer slides in from the left.</p>
              <Button className="mt-4" onClick={() => setLeftOpen(false)}>
                Close
              </Button>
            </div>
          }
        >
          <div />
        </Drawer>
      </ShowcaseSection>

      <ShowcaseSection title="Right Drawer">
        <Button onClick={() => setRightOpen(true)}>Open Right Drawer</Button>
        <Drawer
          open={rightOpen}
          onClose={() => setRightOpen(false)}
          position="right"
          content={
            <div className="bg-base-100 h-full w-80 p-4">
              <h3 className="mb-4 text-lg font-bold">Right Drawer</h3>
              <p>This drawer slides in from the right.</p>
              <Button className="mt-4" onClick={() => setRightOpen(false)}>
                Close
              </Button>
            </div>
          }
        >
          <div />
        </Drawer>
      </ShowcaseSection>
    </ComponentPage>
  );
}
