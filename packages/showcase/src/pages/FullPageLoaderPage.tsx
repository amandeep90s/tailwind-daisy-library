import { Button, FullPageLoader } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function FullPageLoaderPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [withTextOpen, setWithTextOpen] = useState(false);
  const [blurOpen, setBlurOpen] = useState(false);
  const [variantOpen, setVariantOpen] = useState(false);
  const [dotsOpen, setDotsOpen] = useState(false);

  // Auto-close after 2 seconds
  const showLoader = (setter: (val: boolean) => void) => {
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <ComponentPage
      title="Full Page Loader"
      description="A full-screen loading overlay with customizable spinner, text, and background options."
    >
      <ShowcaseSection title="Basic Usage">
        <Button onClick={() => showLoader(setBasicOpen)}>
          Show Full Page Loader (2s)
        </Button>
        <FullPageLoader visible={basicOpen} />
      </ShowcaseSection>

      <ShowcaseSection title="With Loading Text">
        <Button variant="primary" onClick={() => showLoader(setWithTextOpen)}>
          Show Loader with Text (2s)
        </Button>
        <FullPageLoader
          visible={withTextOpen}
          text="Loading your data..."
          size="lg"
          variant="primary"
        />
      </ShowcaseSection>

      <ShowcaseSection title="With Blur Background">
        <Button variant="secondary" onClick={() => showLoader(setBlurOpen)}>
          Show Blurred Loader (2s)
        </Button>
        <FullPageLoader
          visible={blurOpen}
          text="Processing..."
          blur
          backgroundOpacity={60}
          variant="secondary"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Different Animation Type">
        <Button variant="accent" onClick={() => showLoader(setDotsOpen)}>
          Show Dots Loader (2s)
        </Button>
        <FullPageLoader
          visible={dotsOpen}
          text="Please wait..."
          type="dots"
          size="xl"
          variant="accent"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Color Variants">
        <Button variant="success" onClick={() => showLoader(setVariantOpen)}>
          Show Success Loader (2s)
        </Button>
        <FullPageLoader
          visible={variantOpen}
          text="Saving changes..."
          type="ring"
          variant="success"
        />
      </ShowcaseSection>

      <ShowcaseSection title="Animation Types Preview (Inline)">
        <div className="flex flex-wrap gap-8 items-center justify-center p-8 bg-base-200 rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-spinner loading-lg text-primary" />
            <span className="text-sm">spinner</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-dots loading-lg text-secondary" />
            <span className="text-sm">dots</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-ring loading-lg text-accent" />
            <span className="text-sm">ring</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-ball loading-lg text-info" />
            <span className="text-sm">ball</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-bars loading-lg text-success" />
            <span className="text-sm">bars</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-infinity loading-lg text-warning" />
            <span className="text-sm">infinity</span>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes Preview (Inline)">
        <div className="flex flex-wrap gap-8 items-end justify-center p-8 bg-base-200 rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-spinner loading-xs text-primary" />
            <span className="text-sm">xs</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-spinner loading-sm text-primary" />
            <span className="text-sm">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-spinner loading-md text-primary" />
            <span className="text-sm">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-spinner loading-lg text-primary" />
            <span className="text-sm">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="loading loading-spinner w-16 h-16 text-primary" />
            <span className="text-sm">xl</span>
          </div>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
