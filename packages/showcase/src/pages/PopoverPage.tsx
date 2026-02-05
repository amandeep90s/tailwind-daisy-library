import { Button, Popover } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function PopoverPage() {
  return (
    <ComponentPage
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
    >
      <ShowcaseSection title="Default">
        <Popover trigger={<Button>Open Popover</Button>}>
          <div className="bg-base-100 rounded-lg p-4 shadow-lg">
            <h4 className="mb-2 font-bold">Popover Title</h4>
            <p className="text-sm">This is the popover content.</p>
          </div>
        </Popover>
      </ShowcaseSection>

      <ShowcaseSection title="With Different Content">
        <Popover trigger={<Button>Simple Text</Button>}>
          <div className="bg-base-100 rounded-lg p-4 shadow-lg">Simple text content</div>
        </Popover>
        <Popover trigger={<Button variant="primary">With List</Button>}>
          <div className="bg-base-100 rounded-lg p-4 shadow-lg">
            <ul className="space-y-1">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </Popover>
      </ShowcaseSection>

      <ShowcaseSection title="With Form">
        <Popover trigger={<Button variant="secondary">Edit Settings</Button>}>
          <div className="bg-base-100 w-64 rounded-lg p-4 shadow-lg">
            <h4 className="mb-3 font-bold">Settings</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm">Enable notifications</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="text-sm">Dark mode</span>
              </label>
            </div>
          </div>
        </Popover>
      </ShowcaseSection>
    </ComponentPage>
  );
}
