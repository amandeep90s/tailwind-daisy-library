# Using Tailwind Config from Shared UI Library

This library exports design tokens in Tailwind CSS configuration format, allowing you to easily integrate the design system into your consumer applications.

## Installation

First, ensure you have the tokens package installed:

```bash
npm install @shared-ui-library/tokens
```

## Usage

### Option 1: Use the Complete Config (Recommended)

Import and spread the entire Tailwind configuration in your `tailwind.config.js`:

```js
import { tailwindConfig } from "@shared-ui-library/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  ...tailwindConfig,
  // Add your own customizations
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      // Override or add custom values
      colors: {
        ...tailwindConfig.theme.extend.colors,
        brand: "#ff6b6b",
      },
    },
  },
};
```

### Option 2: Import Individual Parts

Import only specific configuration pieces you need:

```js
import {
  tailwindColors,
  tailwindFontFamily,
  tailwindSpacing,
} from "@shared-ui-library/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: tailwindColors,
      fontFamily: tailwindFontFamily,
      spacing: tailwindSpacing,
    },
  },
};
```

### Option 3: Use Flat Color Names

If you prefer flat color naming without nesting:

```js
import { tailwindColorsFlat } from "@shared-ui-library/tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: tailwindColorsFlat,
    },
  },
};
```

## Available Exports

### `tailwindConfig`

Complete Tailwind configuration preset with all theme extensions.

### `tailwindColors`

Color palette with nested structure:

- `primary`, `primary.content`
- `secondary`, `secondary.content`
- `accent`, `accent.content`
- `neutral`, `neutral.content`
- `base.100`, `base.200`, `base.300`, `base.content`
- `info`, `info.content`
- `success`, `success.content`
- `warning`, `warning.content`
- `error`, `error.content`

### `tailwindColorsFlat`

Flat color naming with hyphens (e.g., `primary-content`, `base-100`).

### Other Exports

- `tailwindFontFamily` - Font family configuration
- `tailwindFontSize` - Font size scale
- `tailwindFontWeight` - Font weight values
- `tailwindLineHeight` - Line height values
- `tailwindSpacing` - Spacing scale

## Usage in Components

Once configured, use the design tokens in your Tailwind classes:

```jsx
// Colors
<button className="bg-primary text-primary-content hover:bg-primary/90">
  Click me
</button>

// Spacing
<div className="p-md gap-lg">
  <p className="text-base-content">Hello World</p>
</div>

// Typography
<h1 className="font-sans text-2xl font-bold">
  Heading
</h1>

// Semantic colors
<div className="bg-success text-success-content">
  Success message
</div>
```

## Overriding Values

### Override Specific Colors

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
          DEFAULT: "#3b82f6", // Override primary color
          content: "#ffffff",
        },
      },
    },
  },
};
```

### Add Custom Spacing

```js
import { tailwindConfig } from "@shared-ui-library/tokens";

export default {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      spacing: {
        ...tailwindConfig.theme.extend.spacing,
        "4xl": "5rem",
        "5xl": "6rem",
      },
    },
  },
};
```

### Replace Font Family

```js
import { tailwindConfig } from "@shared-ui-library/tokens";

export default {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        // Keep mono from library
        mono: tailwindConfig.theme.extend.fontFamily.mono,
      },
    },
  },
};
```

## TypeScript Support

All exports include TypeScript types for better IDE support:

```typescript
import type { TailwindConfig } from "@shared-ui-library/tokens";

const config: TailwindConfig = {
  // Your config with full type checking
};
```

## Notes

- All colors are defined using OKLCH format for better color manipulation
- The configuration uses `extend` to avoid overwriting Tailwind's default values
- You can selectively import only what you need to keep your config lean
