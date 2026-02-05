import { InputOTP } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function InputOTPPage() {
  const [value, setValue] = useState("");

  return (
    <ComponentPage title="Input OTP" description="One-time password input for verification codes.">
      <ShowcaseSection title="Default (6 digits)">
        <InputOTP value={value} onChange={setValue} length={6} />
      </ShowcaseSection>

      <ShowcaseSection title="4 Digits">
        <InputOTP length={4} />
      </ShowcaseSection>

      <ShowcaseSection title="With Value Display">
        <div className="space-y-4">
          <InputOTP value={value} onChange={setValue} length={6} />
          <p className="text-sm">Entered value: {value || "None"}</p>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
