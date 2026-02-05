# Shared UI Library

A framework-agnostic shared UI library built with **TailwindCSS v4** and **DaisyUI v5**.

## 📦 Packages

| Package                       | Description                                 |
| ----------------------------- | ------------------------------------------- |
| `@shared-ui-library/tokens`   | Design tokens (colors, spacing, typography) |
| `@shared-ui-library/styles`   | CSS classes and DaisyUI theme configuration |
| `@shared-ui-library/react`    | React components built with DaisyUI         |
| `@shared-ui-library/showcase` | Demo application showcasing all components  |

## 🚀 Quick Start

### Installation

Clone this repository to your organization and install dependencies:

```bash
npm install
```

### Using in Your Project

#### For React Projects

Install the library from your private GitHub repo:

```bash
# Install the library and required peer dependencies
npm install git+ssh://git@github.com:your-org/shared-ui-library.git#main
npm install react@^19 react-dom@^19 tailwindcss@^4 daisyui@^5
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@shared-ui-library/react": "github:your-org/shared-ui-library#main",
    "@shared-ui-library/styles": "github:your-org/shared-ui-library#main",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "daisyui": "^5.0.0"
  }
}
```

**Note:** Starting from npm 7+, peer dependencies are automatically installed. If you're using npm 6 or earlier, you'll need to manually install the peer dependencies listed above.

#### Setup TailwindCSS Configuration

**Option A: Use Library's Tailwind Config (Recommended)**

Import and extend the library's Tailwind configuration to get all design tokens automatically:

```js
import { tailwindConfig } from "@shared-ui-library/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shared-ui-library/react/dist/**/*.{js,mjs}",
  ],
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      // Add your custom overrides here
      colors: {
        ...tailwindConfig.theme.extend.colors,
        brand: "#ff6b6b", // Example custom color
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
```

**Option B: Standard Configuration**

Or use a standard config without importing design tokens:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shared-ui-library/react/dist/**/*.{js,mjs}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // or use your custom themes
  },
};
```

> 📘 **Learn More:** See [Tailwind Usage Guide](./packages/tokens/TAILWIND_USAGE.md) for detailed examples of using and customizing design tokens.

Then setup styles with **proper CSS import order**:

In your `src/index.css`:

```css
/* Import Tailwind first */
@import "tailwindcss";

/* Import library styles - MUST come before utilities */
@import "@shared-ui-library/styles/dist/library.css";

/* Your custom styles */
```

Import in your entry file (`src/main.tsx`):

```tsx
import "./index.css"; // This imports Tailwind + library styles

import { Button, Input, Label } from "@shared-ui-library/react";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Label>Username</Label>
      <Input placeholder="Enter username" />
      <Button variant="primary">Submit</Button>
      <div className="md:hidden">Mobile only content</div>
    </div>
  );
}
```

**⚠️ Important:** Use `library.css` (not `index.css`) to avoid importing Tailwind twice, which would break utility classes like `md:hidden`.

#### For Non-React Projects (Framework Agnostic)

Use the CSS classes directly with DaisyUI:

```bash
# Install styles package and peer dependencies
npm install @shared-ui-library/styles
npm install tailwindcss@^4 daisyui@^5
```

Setup your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}"],
  plugins: [require("daisyui")],
};
```

Then import the compiled CSS in your HTML or main entry file:

```html
<!-- Import CSS -->
<link rel="stylesheet" href="node_modules/@shared-ui-library/styles/dist/index.css" />

<!-- Use DaisyUI classes -->
<button class="btn btn-primary btn-md">Click me</button>
<input class="input input-bordered w-full" placeholder="Enter text" />
<label class="label font-medium">Label text</label>
```

## 🎨 Theming

### Using Tailwind Config (Recommended)

Import and override design tokens directly in your `tailwind.config.js`:

```js
import { tailwindConfig } from "@shared-ui-library/tokens";

export default {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      colors: {
        ...tailwindConfig.theme.extend.colors,
        primary: {
          DEFAULT: "#3b82f6", // Override primary
          content: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Override font
      },
    },
  },
};
```

See [packages/tokens/TAILWIND_USAGE.md](./packages/tokens/TAILWIND_USAGE.md) for more examples.

### Customizing Colors

Create your own theme by overriding the CSS variables in your consumer app:

```css
@layer base {
  :root {
    --color-primary: oklch(0.5 0.2 250);
    --color-secondary: oklch(0.6 0.15 300);
    /* ... more overrides */
  }
}
```

### Customizing Fonts

Override the font family in your consumer app:

```css
@layer base {
  :root {
    --font-sans: "Your Custom Font", system-ui, sans-serif;
  }
}
```

## 📚 Development

### Running Storybook

```bash
npm run storybook
```

### Running Showcase App

```bash
npm run dev:showcase
```

### Building All Packages

```bash
npm run build
```

## 🏗️ Project Structure

```
shared-ui-library/
├── packages/
│   ├── tokens/          # Design tokens (colors, spacing, typography)
│   ├── styles/          # CSS and DaisyUI theme
│   ├── react/           # React components
│   └── showcase/        # Demo application
├── package.json         # Root package.json with workspaces
└── tsconfig.base.json   # Shared TypeScript config
```

## 📖 Available Components

| Component | Description                    | Class Reference                |
| --------- | ------------------------------ | ------------------------------ |
| Button    | Clickable button with variants | `btn btn-{variant} btn-{size}` |
| Input     | Text input field               | `input input-bordered`         |
| Label     | Form label                     | `label font-medium`            |

## 🎯 Variant Classes Reference

### Button Variants

- `btn-primary`, `btn-secondary`, `btn-accent`
- `btn-info`, `btn-success`, `btn-warning`, `btn-error`
- `btn-ghost`, `btn-link`, `btn-outline`

### Button Sizes

- `btn-xs`, `btn-sm`, `btn-md`, `btn-lg`

### Input Variants

- `input-bordered`, `input-ghost`
- `input-primary`, `input-secondary`, `input-accent`
- `input-info`, `input-success`, `input-warning`, `input-error`

### Input Sizes

- `input-xs`, `input-sm`, `input-md`, `input-lg`

## License

UNLICENSED - Private use only within organization.
