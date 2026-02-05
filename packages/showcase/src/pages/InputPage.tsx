import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  GlobeAltIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { InputColor, InputSize } from "@shared-ui-library/react";
import { Input } from "@shared-ui-library/react";
import { useState } from "react";

const colors: InputColor[] = [
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

const sizes: InputSize[] = ["xs", "sm", "md", "lg", "xl"];

export function InputPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="max-w-4xl">
      <h1 className="mb-4 text-4xl font-bold">Input</h1>
      <p className="text-base-content/70 mb-8 text-lg">
        Input fields allow users to enter text. They support labels, validation states, icons, and
        helper text.
      </p>

      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <div className="max-w-sm space-y-4">
          <Input placeholder="Basic input" />
          <Input label="With Label" placeholder="Enter text..." />
          <Input
            label="With Helper Text"
            placeholder="Enter email"
            helperText="We'll never share your email."
          />
        </div>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Variants</h2>
        <div className="max-w-sm space-y-4">
          <Input variant="bordered" placeholder="Bordered (default)" />
          <Input variant="ghost" placeholder="Ghost" />
          <Input variant="floating" label="Floating Label" placeholder="mail@site.com" />
        </div>
      </section>

      {/* Floating Label Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Floating Label</h2>
        <p className="text-base-content/70 mb-4">
          Floating labels provide a modern UX pattern where the label moves up when the input is
          focused or has value.
        </p>
        <div className="max-w-sm space-y-4">
          <Input variant="floating" label="Your Email" placeholder="mail@site.com" type="email" />
          <Input variant="floating" label="Full Name" placeholder="John Doe" />
          <Input
            variant="floating"
            label="Phone Number"
            placeholder="+1 (555) 000-0000"
            type="tel"
          />
          <Input
            variant="floating"
            label="Password"
            placeholder="••••••••"
            type="password"
            size="md"
          />
          <Input
            variant="floating"
            label="Email"
            placeholder="your@email.com"
            error="Please enter a valid email address"
          />
          <Input
            variant="floating"
            label="Website"
            placeholder="https://example.com"
            helperText="Enter your website URL"
          />
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Icons</h2>
        <p className="text-base-content/70 mb-4">
          Add icons to the start or end of input fields for better visual context.
        </p>
        <div className="max-w-sm space-y-4">
          <Input
            startIcon={<MagnifyingGlassIcon className="h-5 w-5" />}
            placeholder="Search..."
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            endIcon={
              searchValue ? (
                <button
                  type="button"
                  onClick={() => setSearchValue("")}
                  className="hover:text-error"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              ) : null
            }
          />
          <Input startIcon={<UserIcon className="h-5 w-5" />} placeholder="Username" />
          <Input
            startIcon={<EnvelopeIcon className="h-5 w-5" />}
            type="email"
            placeholder="Email address"
          />
          <Input
            startIcon={<PhoneIcon className="h-5 w-5" />}
            type="tel"
            placeholder="Phone number"
          />
          <Input
            startIcon={<GlobeAltIcon className="h-5 w-5" />}
            type="url"
            placeholder="Website URL"
          />
          <Input
            startIcon={<LockClosedIcon className="h-5 w-5" />}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            endIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="hover:text-primary"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            }
          />
        </div>
      </section>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Colors</h2>
        <div className="grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          {colors.map((color) => (
            <Input
              key={color}
              color={color}
              placeholder={color.charAt(0).toUpperCase() + color.slice(1)}
            />
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Sizes</h2>
        <div className="max-w-md space-y-4">
          {sizes.map((size) => (
            <Input key={size} size={size} placeholder={`Size: ${size.toUpperCase()}`} />
          ))}
        </div>
      </section>

      {/* Validation States */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Validation States</h2>
        <div className="max-w-sm space-y-4">
          <Input
            label="Success State"
            color="success"
            defaultValue="Valid input"
            helperText="Looks good!"
          />
          <Input label="Error State" error="This field is required" placeholder="Enter value" />
        </div>
      </section>

      {/* Input Types */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Input Types</h2>
        <p className="text-base-content/70 mb-4">
          The Input component supports various HTML input types including text, email, password,
          number, date, time, and more.
        </p>
        <div className="grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="Text" type="text" placeholder="Enter text" />
          <Input label="Email" type="email" placeholder="name@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Number" type="number" placeholder="0" />
          <Input label="Search" type="search" placeholder="Search..." />
          <Input label="Tel" type="tel" placeholder="+1 (555) 000-0000" />
          <Input label="URL" type="url" placeholder="https://example.com" />
          <Input label="Date" type="date" />
          <Input label="Time" type="time" />
          <Input label="DateTime Local" type="datetime-local" />
          <Input label="Month" type="month" />
          <Input label="Week" type="week" />
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">States</h2>
        <div className="max-w-sm space-y-4">
          <Input label="Normal" placeholder="Normal input" />
          <Input label="Disabled" placeholder="Disabled input" disabled />
          <Input label="Read Only" value="Read only value" readOnly />
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <div className="mockup-code bg-base-300 text-base-content">
          <pre data-prefix="1">
            <code>{`import { Input } from '@shared-ui-library/react';`}</code>
          </pre>
          <pre data-prefix="2">
            <code></code>
          </pre>
          <pre data-prefix="3">
            <code>{`// Basic usage`}</code>
          </pre>
          <pre data-prefix="4">
            <code>{`<Input placeholder="Enter text..." />`}</code>
          </pre>
          <pre data-prefix="5">
            <code></code>
          </pre>
          <pre data-prefix="6">
            <code>{`// With label and helper text`}</code>
          </pre>
          <pre data-prefix="7">
            <code>{`<Input`}</code>
          </pre>
          <pre data-prefix="8">
            <code>{`  label="Email"`}</code>
          </pre>
          <pre data-prefix="9">
            <code>{`  type="email"`}</code>
          </pre>
          <pre data-prefix="10">
            <code>{`  placeholder="name@example.com"`}</code>
          </pre>
          <pre data-prefix="11">
            <code>{`  helperText="We'll never share your email."`}</code>
          </pre>
          <pre data-prefix="12">
            <code>{`/>`}</code>
          </pre>
          <pre data-prefix="13">
            <code></code>
          </pre>
          <pre data-prefix="14">
            <code>{`// With error`}</code>
          </pre>
          <pre data-prefix="15">
            <code>{`<Input`}</code>
          </pre>
          <pre data-prefix="16">
            <code>{`  label="Password"`}</code>
          </pre>
          <pre data-prefix="17">
            <code>{`  type="password"`}</code>
          </pre>
          <pre data-prefix="18">
            <code>{`  error="Password must be at least 8 characters"`}</code>
          </pre>
          <pre data-prefix="19">
            <code>{`/>`}</code>
          </pre>
        </div>
      </section>

      {/* Props Table */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto">
          <table className="table-zebra table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>variant</code>
                </td>
                <td>
                  <code>"bordered" | "ghost"</code>
                </td>
                <td>
                  <code>"bordered"</code>
                </td>
                <td>The style variant</td>
              </tr>
              <tr>
                <td>
                  <code>color</code>
                </td>
                <td>
                  <code>
                    "default" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success"
                    | "warning" | "error"
                  </code>
                </td>
                <td>
                  <code>"default"</code>
                </td>
                <td>The color variant</td>
              </tr>
              <tr>
                <td>
                  <code>size</code>
                </td>
                <td>
                  <code>"xs" | "sm" | "md" | "lg" | "xl"</code>
                </td>
                <td>
                  <code>"md"</code>
                </td>
                <td>The size of the input</td>
              </tr>
              <tr>
                <td>
                  <code>label</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Label text above the input</td>
              </tr>
              <tr>
                <td>
                  <code>error</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Error message below the input</td>
              </tr>
              <tr>
                <td>
                  <code>helperText</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Helper text below the input</td>
              </tr>
              <tr>
                <td>
                  <code>startIcon</code>
                </td>
                <td>
                  <code>ReactNode</code>
                </td>
                <td>-</td>
                <td>Icon or element at the start (left) of the input</td>
              </tr>
              <tr>
                <td>
                  <code>endIcon</code>
                </td>
                <td>
                  <code>ReactNode</code>
                </td>
                <td>-</td>
                <td>Icon or element at the end (right) of the input</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
