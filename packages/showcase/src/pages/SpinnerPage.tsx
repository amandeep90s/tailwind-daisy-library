import { Spinner } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function SpinnerPage() {
  return (
    <ComponentPage title="Spinner" description="A loading spinner indicator.">
      <ShowcaseSection title="Default">
        <Spinner />
      </ShowcaseSection>

      <ShowcaseSection title="Sizes">
        <div className="flex items-center gap-4">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Types">
        <div className="flex items-center gap-4">
          <Spinner type="spinner" />
          <Spinner type="dots" />
          <Spinner type="ring" />
          <Spinner type="ball" />
          <Spinner type="bars" />
          <Spinner type="infinity" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors">
        <div className="flex items-center gap-4">
          <Spinner color="primary" />
          <Spinner color="secondary" />
          <Spinner color="accent" />
          <Spinner color="neutral" />
          <Spinner color="info" />
          <Spinner color="success" />
          <Spinner color="warning" />
          <Spinner color="error" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Colors with Different Types">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Spinner type="dots" color="primary" size="lg" />
            <Spinner type="ring" color="secondary" size="lg" />
            <Spinner type="ball" color="accent" size="lg" />
            <Spinner type="bars" color="info" size="lg" />
            <Spinner type="infinity" color="success" size="lg" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="In Context">
        <div className="flex flex-col gap-4">
          <button className="btn btn-primary" disabled>
            <Spinner size="sm" />
            Loading...
          </button>
          <button className="btn btn-secondary" disabled>
            <Spinner size="sm" type="dots" />
            Processing...
          </button>
          <div className="bg-base-200 flex h-32 w-full items-center justify-center rounded-lg">
            <Spinner size="lg" type="dots" color="primary" />
          </div>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
