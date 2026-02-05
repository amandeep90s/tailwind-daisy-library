import { Progress } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function ProgressPage() {
  return (
    <ComponentPage
      title="Progress"
      description="Displays an indicator showing the completion progress of a task."
    >
      <ShowcaseSection title="Default">
        <div className="w-full space-y-4">
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors">
        <div className="w-full space-y-4">
          <Progress value={60} variant="primary" />
          <Progress value={60} variant="secondary" />
          <Progress value={60} variant="accent" />
          <Progress value={60} variant="info" />
          <Progress value={60} variant="success" />
          <Progress value={60} variant="warning" />
          <Progress value={60} variant="error" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Indeterminate">
        <div className="w-full">
          <Progress />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Label">
        <div className="w-full space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>70%</span>
          </div>
          <Progress value={70} color="primary" />
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
