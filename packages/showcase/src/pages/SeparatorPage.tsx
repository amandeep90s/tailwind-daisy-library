import { Separator } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function SeparatorPage() {
  return (
    <ComponentPage title="Separator" description="Visually separates content.">
      <ShowcaseSection title="Horizontal">
        <div className="w-full space-y-4">
          <p>Content above</p>
          <Separator />
          <p>Content below</p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Vertical">
        <div className="flex w-full items-center">
          <span>Left</span>
          <Separator orientation="vertical" />
          <span>Right</span>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Label">
        <div className="w-full">
          <p>Sign up with email</p>
          <Separator text="OR" />
          <p>Continue with social login</p>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="In Context">
        <div className="bg-base-200 w-full max-w-sm space-y-4 rounded-lg p-4">
          <div>
            <h4 className="font-bold">Account</h4>
            <p className="text-base-content/60 text-sm">Manage your account settings</p>
          </div>
          <Separator />
          <div>
            <h4 className="font-bold">Privacy</h4>
            <p className="text-base-content/60 text-sm">Control your privacy settings</p>
          </div>
          <Separator />
          <div>
            <h4 className="font-bold">Notifications</h4>
            <p className="text-base-content/60 text-sm">Configure notification preferences</p>
          </div>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
