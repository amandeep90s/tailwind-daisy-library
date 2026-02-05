import { Skeleton } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function SkeletonPage() {
  return (
    <ComponentPage
      title="Skeleton"
      description="A placeholder preview of content before the data loads."
    >
      <ShowcaseSection title="Default">
        <div className="w-full space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Card Skeleton">
        <div className="bg-base-200 w-72 space-y-4 rounded-lg p-4">
          <Skeleton className="h-32 w-full rounded" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20 rounded" />
            <Skeleton className="h-8 w-20 rounded" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Avatar with Text">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Table Skeleton">
        <div className="w-full space-y-2">
          <div className="flex gap-4">
            <Skeleton className="h-8 flex-1" />
            <Skeleton className="h-8 flex-1" />
            <Skeleton className="h-8 flex-1" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-6 flex-1" />
            <Skeleton className="h-6 flex-1" />
            <Skeleton className="h-6 flex-1" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-6 flex-1" />
            <Skeleton className="h-6 flex-1" />
            <Skeleton className="h-6 flex-1" />
          </div>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
