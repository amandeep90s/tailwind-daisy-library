import { Input, Label } from "@shared-ui-library/react";

export function LabelPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="mb-4 text-4xl font-bold">Label</h1>
      <p className="text-base-content/70 mb-8 text-lg">
        Labels are used to identify form elements. They support required indicators and alternative
        styles.
      </p>

      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
        <div className="max-w-sm space-y-4">
          <div>
            <Label>Basic Label</Label>
          </div>
          <div>
            <Label required>Required Label</Label>
          </div>
          <div>
            <Label alt>Alternative Style Label</Label>
          </div>
        </div>
      </section>

      {/* With Form Elements */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">With Form Elements</h2>
        <div className="max-w-sm space-y-6">
          <div className="form-control">
            <Label htmlFor="username">Username</Label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <Label htmlFor="email" required>
              Email Address
            </Label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <Label htmlFor="bio">Bio</Label>
            <textarea
              id="bio"
              placeholder="Tell us about yourself"
              className="textarea textarea-bordered w-full"
              rows={3}
            />
            <Label alt>Maximum 500 characters</Label>
          </div>
        </div>
      </section>

      {/* With Input Component */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Using with Input Component</h2>
        <p className="text-base-content/70 mb-4">The Input component has built-in label support:</p>
        <div className="max-w-sm space-y-4">
          <Input label="Full Name" placeholder="John Doe" />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            helperText="Must be at least 8 characters"
          />
        </div>
      </section>

      {/* Custom Styling */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Custom Styling</h2>
        <div className="max-w-sm space-y-4">
          <div>
            <Label className="text-primary">Primary Color Label</Label>
          </div>
          <div>
            <Label className="text-secondary">Secondary Color Label</Label>
          </div>
          <div>
            <Label className="text-accent">Accent Color Label</Label>
          </div>
        </div>
      </section>

      {/* Form Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Complete Form Example</h2>
        <form className="bg-base-200 max-w-sm space-y-4 rounded-lg p-6">
          <div className="form-control">
            <Label htmlFor="form-name" required>
              Name
            </Label>
            <input
              id="form-name"
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <Label htmlFor="form-email" required>
              Email
            </Label>
            <input
              id="form-email"
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <Label htmlFor="form-phone">Phone</Label>
            <input
              id="form-phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="input input-bordered w-full"
            />
            <Label alt>Optional</Label>
          </div>

          <div className="form-control">
            <Label htmlFor="form-message" required>
              Message
            </Label>
            <textarea
              id="form-message"
              placeholder="Your message"
              className="textarea textarea-bordered w-full"
              rows={4}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </section>

      {/* Code Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Usage</h2>
        <div className="mockup-code bg-base-300 text-base-content">
          <pre data-prefix="1">
            <code>{`import { Label } from '@shared-ui-library/react';`}</code>
          </pre>
          <pre data-prefix="2">
            <code></code>
          </pre>
          <pre data-prefix="3">
            <code>{`// Basic label`}</code>
          </pre>
          <pre data-prefix="4">
            <code>{`<Label>Username</Label>`}</code>
          </pre>
          <pre data-prefix="5">
            <code></code>
          </pre>
          <pre data-prefix="6">
            <code>{`// Required label`}</code>
          </pre>
          <pre data-prefix="7">
            <code>{`<Label required>Email</Label>`}</code>
          </pre>
          <pre data-prefix="8">
            <code></code>
          </pre>
          <pre data-prefix="9">
            <code>{`// Alternative style (for helper text)`}</code>
          </pre>
          <pre data-prefix="10">
            <code>{`<Label alt>Optional field</Label>`}</code>
          </pre>
          <pre data-prefix="11">
            <code></code>
          </pre>
          <pre data-prefix="12">
            <code>{`// With htmlFor for accessibility`}</code>
          </pre>
          <pre data-prefix="13">
            <code>{`<Label htmlFor="my-input">My Input</Label>`}</code>
          </pre>
          <pre data-prefix="14">
            <code>{`<input id="my-input" className="input" />`}</code>
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
                  <code>children</code>
                </td>
                <td>
                  <code>ReactNode</code>
                </td>
                <td>-</td>
                <td>The content of the label</td>
              </tr>
              <tr>
                <td>
                  <code>required</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>Shows a required asterisk (*)</td>
              </tr>
              <tr>
                <td>
                  <code>alt</code>
                </td>
                <td>
                  <code>boolean</code>
                </td>
                <td>
                  <code>false</code>
                </td>
                <td>Uses alternative/smaller text style</td>
              </tr>
              <tr>
                <td>
                  <code>htmlFor</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Associates label with form element</td>
              </tr>
              <tr>
                <td>
                  <code>className</code>
                </td>
                <td>
                  <code>string</code>
                </td>
                <td>-</td>
                <td>Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
