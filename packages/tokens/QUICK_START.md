# Quick Start: Using Tailwind Config in Your App

## Step 1: Install the Package

```bash
npm install @shared-ui-library/tokens
```

## Step 2: Create/Update tailwind.config.js

### Recommended Approach (Full Integration)

```js
import { tailwindConfig } from "@shared-ui-library/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shared-ui-library/react/dist/**/*.{js,mjs}",
  ],

  // Spread the entire library config
  ...tailwindConfig,

  // Extend or override as needed
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      // Your custom values here
    },
  },

  plugins: [require("daisyui")],
};
```

### Alternative: Import Only What You Need

```js
import { tailwindColors, tailwindSpacing } from "@shared-ui-library/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: tailwindColors,
      spacing: tailwindSpacing,
    },
  },
  plugins: [require("daisyui")],
};
```

## Step 3: Use in Your Components

```jsx
// Colors from the design system
<button className="bg-primary text-primary-content">
  Primary Button
</button>

<div className="bg-success text-success-content">
  Success alert
</div>

// Spacing from the design system
<div className="p-md gap-lg">
  <div className="mb-xl">Content</div>
</div>

// Typography
<h1 className="font-sans text-2xl font-bold">
  Heading
</h1>
```

## Step 4: Override Values (Optional)

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
        // Override primary color
        primary: {
          DEFAULT: "#3b82f6",
          content: "#ffffff",
        },
        // Add custom color
        brand: "#ff6b6b",
      },
      spacing: {
        ...tailwindConfig.theme.extend.spacing,
        // Add custom spacing
        "4xl": "5rem",
      },
    },
  },
};
```

## Available Utility Classes

### Colors

- `bg-primary`, `text-primary`, `border-primary`
- `bg-secondary`, `text-secondary`, `border-secondary`
- `bg-success`, `text-success`, `border-success`
- `bg-warning`, `text-warning`, `border-warning`
- `bg-error`, `text-error`, `border-error`
- `bg-base-100`, `bg-base-200`, `bg-base-300`

### Spacing

- `p-xs`, `p-sm`, `p-md`, `p-lg`, `p-xl`, `p-2xl`, `p-3xl`
- `m-xs`, `m-sm`, `m-md`, `m-lg`, `m-xl`, `m-2xl`, `m-3xl`
- `gap-xs`, `gap-sm`, `gap-md`, `gap-lg`, `gap-xl`, `gap-2xl`, `gap-3xl`

### Typography

- `font-sans`, `font-mono`
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`
- `font-normal`, `font-medium`, `font-semibold`, `font-bold`

## TypeScript Support

```typescript
import type { TailwindConfig } from "@shared-ui-library/tokens";

const config: TailwindConfig = {
  // Your config with full type support
};
```

## Need More Details?

- See [TAILWIND_USAGE.md](./TAILWIND_USAGE.md) for comprehensive documentation
- Check [tailwind.config.example.js](./tailwind.config.example.js) for a complete example
