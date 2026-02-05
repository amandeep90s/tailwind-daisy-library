import type { AmountFieldColor, AmountFieldSize } from "@shared-ui-library/react";
import { AmountField } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

const colors: AmountFieldColor[] = [
  "default",
  "neutral",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
];

const sizes: AmountFieldSize[] = ["xs", "sm", "md", "lg", "xl"];

export function AmountFieldPage() {
  const [basicAmount, setBasicAmount] = useState<number | null>(1250.5);
  const [priceAmount, setPriceAmount] = useState<number | null>(null);
  const [salaryAmount, setSalaryAmount] = useState<number | null>(75000);
  const [budgetAmount, setBudgetAmount] = useState<number | null>(5000);
  const [donationAmount, setDonationAmount] = useState<number | null>(null);

  return (
    <ComponentPage
      title="Amount Field"
      description="Specialized input field for USD currency amounts with automatic formatting, comma separators, and decimal handling."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage">
        <div className="max-w-sm space-y-4">
          <AmountField placeholder="0.00" value={basicAmount} onChange={setBasicAmount} />
          <p className="text-base-content/70 text-sm">
            Value: <strong>{basicAmount !== null ? `$${basicAmount.toFixed(2)}` : "null"}</strong>
          </p>
        </div>
      </ShowcaseSection>

      {/* With Label */}
      <ShowcaseSection title="With Label and Helper Text">
        <div className="max-w-sm space-y-4">
          <AmountField
            label="Product Price"
            placeholder="0.00"
            value={priceAmount}
            onChange={setPriceAmount}
            helperText="Enter the product price in USD"
          />
          <AmountField
            label="Annual Salary"
            placeholder="0.00"
            value={salaryAmount}
            onChange={setSalaryAmount}
            helperText="Formatted with commas on blur"
          />
        </div>
      </ShowcaseSection>

      {/* Variants */}
      <ShowcaseSection title="Variants">
        <div className="max-w-sm space-y-4">
          <AmountField
            variant="bordered"
            placeholder="Bordered (default)"
            label="Bordered"
            value={null}
            onChange={() => {}}
          />
          <AmountField
            variant="ghost"
            placeholder="Ghost"
            label="Ghost"
            value={null}
            onChange={() => {}}
          />
          <AmountField
            variant="floating"
            placeholder="0.00"
            label="Floating Label"
            value={null}
            onChange={() => {}}
          />
        </div>
      </ShowcaseSection>

      {/* Floating Label */}
      <ShowcaseSection title="Floating Label">
        <p className="text-base-content/70 mb-4">
          Floating labels provide a modern UX pattern where the label moves up when the input is
          focused or has value.
        </p>
        <div className="max-w-sm space-y-4">
          <AmountField
            variant="floating"
            label="Product Price"
            placeholder="0.00"
            value={priceAmount}
            onChange={setPriceAmount}
          />
          <AmountField
            variant="floating"
            label="Annual Budget"
            placeholder="0.00"
            value={budgetAmount}
            onChange={setBudgetAmount}
            helperText="Enter your annual budget"
          />
          <AmountField
            variant="floating"
            label="Donation"
            placeholder="0.00"
            value={donationAmount}
            onChange={setDonationAmount}
            error="Minimum donation is $10"
          />
        </div>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes">
        <div className="max-w-sm space-y-4">
          {sizes.map((s) => (
            <AmountField
              key={s}
              size={s}
              placeholder={`Size: ${s}`}
              label={s.toUpperCase()}
              value={null}
              onChange={() => {}}
            />
          ))}
        </div>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors">
        <div className="max-w-sm space-y-4">
          {colors.map((c) => (
            <AmountField
              key={c}
              color={c}
              placeholder="0.00"
              label={c.charAt(0).toUpperCase() + c.slice(1)}
              value={null}
              onChange={() => {}}
            />
          ))}
        </div>
      </ShowcaseSection>

      {/* With Min/Max Validation */}
      <ShowcaseSection title="With Min/Max Validation">
        <div className="max-w-sm space-y-4">
          <AmountField
            label="Budget (Min: $1,000, Max: $10,000)"
            value={budgetAmount}
            onChange={setBudgetAmount}
            min={1000}
            max={10000}
            helperText="Amount must be between $1,000 and $10,000"
          />
          <p className="text-base-content/70 text-sm">
            Current Value:{" "}
            <strong>{budgetAmount !== null ? `$${budgetAmount.toLocaleString()}` : "null"}</strong>
          </p>
        </div>
      </ShowcaseSection>

      {/* Allow Negative */}
      <ShowcaseSection title="Allow Negative Amounts">
        <div className="max-w-sm space-y-4">
          <AmountField
            label="Transaction Amount"
            placeholder="0.00"
            value={donationAmount}
            onChange={setDonationAmount}
            allowNegative={true}
            helperText="Negative values are allowed"
          />
        </div>
      </ShowcaseSection>

      {/* With Error */}
      <ShowcaseSection title="With Error State">
        <div className="max-w-sm space-y-4">
          <AmountField
            label="Amount"
            placeholder="0.00"
            error="Amount is required"
            value={null}
            onChange={() => {}}
          />
          <AmountField
            label="Payment"
            placeholder="0.00"
            color="error"
            error="Insufficient funds"
            value={150.75}
            onChange={() => {}}
          />
        </div>
      </ShowcaseSection>

      {/* Custom Currency Symbol */}
      <ShowcaseSection title="Custom Currency Symbol">
        <div className="max-w-sm space-y-4">
          <AmountField
            label="Euro Amount"
            placeholder="0.00"
            currencySymbol="€"
            value={1000}
            onChange={() => {}}
            helperText="Using Euro symbol"
          />
          <AmountField
            label="British Pound"
            placeholder="0.00"
            currencySymbol="£"
            value={500}
            onChange={() => {}}
            helperText="Using Pound symbol"
          />
        </div>
      </ShowcaseSection>

      {/* Custom Decimal Places */}
      <ShowcaseSection title="Custom Decimal Places">
        <div className="max-w-sm space-y-4">
          <AmountField
            label="Cryptocurrency (4 decimals)"
            placeholder="0.0000"
            decimalPlaces={4}
            value={0.1234}
            onChange={() => {}}
          />
          <AmountField
            label="Whole Dollars (0 decimals)"
            placeholder="0"
            decimalPlaces={0}
            value={1000}
            onChange={() => {}}
          />
        </div>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="Disabled State">
        <div className="max-w-sm space-y-4">
          <AmountField
            label="Locked Amount"
            placeholder="0.00"
            value={999.99}
            onChange={() => {}}
            disabled
          />
        </div>
      </ShowcaseSection>

      {/* Real-world Examples */}
      <ShowcaseSection title="Real-world Examples">
        <div className="grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">E-commerce Pricing</h3>
            <AmountField
              label="Product Price"
              placeholder="0.00"
              value={29.99}
              onChange={() => {}}
            />
            <AmountField label="Shipping Cost" placeholder="0.00" value={5.0} onChange={() => {}} />
            <AmountField label="Tax" placeholder="0.00" value={2.8} onChange={() => {}} />
            <AmountField
              label="Total"
              placeholder="0.00"
              value={37.79}
              onChange={() => {}}
              color="success"
              disabled
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Financial Form</h3>
            <AmountField
              label="Monthly Income"
              placeholder="0.00"
              value={5500}
              onChange={() => {}}
            />
            <AmountField
              label="Rent"
              placeholder="0.00"
              value={1500}
              onChange={() => {}}
              allowNegative
            />
            <AmountField
              label="Utilities"
              placeholder="0.00"
              value={200}
              onChange={() => {}}
              allowNegative
            />
            <AmountField
              label="Savings"
              placeholder="0.00"
              value={1000}
              onChange={() => {}}
              color="primary"
            />
          </div>
        </div>
      </ShowcaseSection>

      {/* Features */}
      <ShowcaseSection title="Features">
        <div className="prose max-w-2xl">
          <ul className="text-base-content/70 space-y-2 text-sm">
            <li>
              <strong>Automatic Formatting:</strong> Displays comma-separated thousands and fixed
              decimal places when not focused
            </li>
            <li>
              <strong>Raw Input While Typing:</strong> Shows unformatted number while focused for
              easy editing
            </li>
            <li>
              <strong>Currency Symbol:</strong> Displays currency symbol (default: $) at the start
              of the input
            </li>
            <li>
              <strong>Decimal Control:</strong> Configure decimal places (default: 2)
            </li>
            <li>
              <strong>Validation:</strong> Supports min/max values and optional negative numbers
            </li>
            <li>
              <strong>Mobile-Friendly:</strong> Uses numeric keyboard on mobile devices
            </li>
            <li>
              <strong>Type-Safe:</strong> Returns numeric values, handles null for empty inputs
            </li>
          </ul>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
