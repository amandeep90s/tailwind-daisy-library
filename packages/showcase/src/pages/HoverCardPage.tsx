import { Button, HoverCard } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function HoverCardPage() {
  return (
    <ComponentPage
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
    >
      <ShowcaseSection title="Default">
        <HoverCard
          trigger={<Button variant="link">Hover me</Button>}
          openDelay={200}
          closeDelay={300}
        >
          <div className="bg-base-100 w-64 rounded-lg p-4 shadow-xl">
            <h4 className="font-bold">Hover Card Content</h4>
            <p className="text-base-content/70 text-sm">
              This is the content that appears when you hover over the trigger.
            </p>
          </div>
        </HoverCard>
      </ShowcaseSection>

      <ShowcaseSection title="User Profile Example">
        <HoverCard
          trigger={<span className="text-primary cursor-pointer font-medium">@johndoe</span>}
        >
          <div className="bg-base-100 w-72 rounded-lg p-4 shadow-xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=1" alt="User" />
                </div>
              </div>
              <div>
                <h4 className="font-bold">John Doe</h4>
                <p className="text-base-content/60 text-sm">@johndoe</p>
              </div>
            </div>
            <p className="text-sm">Software developer. Building cool things.</p>
            <div className="mt-3 flex gap-4 text-sm">
              <span>
                <strong>120</strong> Following
              </span>
              <span>
                <strong>1.5K</strong> Followers
              </span>
            </div>
          </div>
        </HoverCard>
      </ShowcaseSection>
    </ComponentPage>
  );
}
