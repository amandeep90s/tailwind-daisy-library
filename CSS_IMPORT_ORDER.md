# CSS Import Order Guide

## Understanding the Problem

When integrating this shared-ui-library with your React app, **CSS import order is critical** for Tailwind utility classes to work correctly.

### Why Order Matters

Tailwind CSS follows the **cascade principle** - later CSS rules override earlier ones. Tailwind utilities are designed to have the **highest priority** so they can override component styles.

```
Base Styles → Component Styles → Utility Classes
(lowest priority)                (highest priority)
```

## The Issue You Encountered

### ❌ What Went Wrong

Your initial setup:

```css
/* Your app's index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "shared-ui-library/styles/index.css"; /* ❌ This imports Tailwind AGAIN */
```

**Problem:** The library's `index.css` contains `@import "tailwindcss"`, which loads Tailwind's base, components, AND utilities again. This second set of utilities comes AFTER your utility classes, overriding them.

**Result:** Your `md:hidden` and other utility classes stopped working because they were overridden by the library's Tailwind import.

### Why Moving It Before Seemed to Work

```css
/* Temporary fix that seemed to work */
@import "shared-ui-library/styles/index.css"; /* Contains @import "tailwindcss" */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This worked because now YOUR utilities come last, but this is:

1. Still loading Tailwind twice (inefficient)
2. Can cause conflicts with base styles
3. Not the recommended approach

## ✅ The Correct Solution

### Use `library.css` Instead

The library now exports two CSS files:

1. **`index.css`** - Full build including Tailwind (for standalone use)
2. **`library.css`** - Only library components and theme (for integration)

### Recommended Setup

**In your React app's `src/index.css`:**

```css
/* Import Tailwind with all layers */
@import "tailwindcss";

/* Import library components - this adds theme and component styles */
@import "@shared-ui-library/styles/dist/library.css";

/* Your custom app styles */
@layer components {
  .my-custom-button {
    @apply px-4 py-2 rounded;
  }
}
```

**Then in `src/main.tsx` or `src/index.tsx`:**

```tsx
import "./index.css"; // This loads everything in correct order
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Alternative: Individual Tailwind Directives

If you prefer more control:

```css
/* 1. Base styles (reset, normalize) */
@tailwind base;

/* 2. Component-layer classes */
@tailwind components;

/* 3. Library components and theme - MUST be here */
@import "@shared-ui-library/styles/dist/library.css";

/* 4. Your custom components */
@layer components {
  .card-custom {
    @apply bg-white shadow-lg;
  }
}

/* 5. Utility classes - MUST be last */
@tailwind utilities;

/* 6. Your custom utilities */
@layer utilities {
  .scroll-snap-x {
    scroll-snap-type: x mandatory;
  }
}
```

## Understanding Tailwind Layers

Tailwind organizes CSS into layers:

```css
@layer base {
  /* Reset styles, HTML element defaults */
}

@layer components {
  /* Component classes like .btn, .card */
  /* Library components go here conceptually */
}

@layer utilities {
  /* Utility classes like .flex, .md:hidden, .text-center */
  /* These should ALWAYS override components */
}
```

### Why This Order Works

1. **Base** → Sets up foundational styles
2. **Components** → Defines reusable components (including library components)
3. **Library styles** → Imported here as they're component-level styles
4. **Utilities** → Final say on styling (highest specificity)

## Common Scenarios

### Scenario 1: Migrating from HeroUI

You mentioned removing HeroUI. Here's how to transition:

**Before (with HeroUI):**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "heroui/styles.css";
```

**After (with shared-ui-library):**

```css
@import "tailwindcss";
@import "@shared-ui-library/styles/dist/library.css";
```

### Scenario 2: Using pnpm

```bash
# Install the library
pnpm add git+ssh://git@github.com:your-org/shared-ui-library.git#main

# Peer dependencies (pnpm requires explicit installation)
pnpm add react@^19 react-dom@^19 tailwindcss@^4
```

### Scenario 3: Custom Tailwind Config

Your `tailwind.config.js` should include library components:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ✅ Include library components so Tailwind scans them
    "./node_modules/@shared-ui-library/react/dist/**/*.{js,mjs}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
};
```

## Testing Your Setup

After setting up, verify utility classes work:

```tsx
function TestComponent() {
  return (
    <div className="container mx-auto p-4">
      {/* Test responsive utilities */}
      <div className="hidden md:block bg-blue-500 p-4">
        Visible on medium screens and up
      </div>

      {/* Test flexbox utilities */}
      <div className="flex items-center justify-between">
        <span>Left</span>
        <span>Right</span>
      </div>

      {/* Test library component with utility overrides */}
      <Button className="w-full md:w-auto">Responsive Button</Button>
    </div>
  );
}
```

## Quick Reference

| Issue                      | Cause                              | Solution                                                   |
| -------------------------- | ---------------------------------- | ---------------------------------------------------------- |
| `md:hidden` not working    | Library CSS loaded after utilities | Use `library.css`, import before utilities                 |
| Styles loading twice       | Using `index.css` with `@tailwind` | Use `library.css` instead                                  |
| Library styles not applied | Not imported at all                | Add `@import "@shared-ui-library/styles/dist/library.css"` |
| Utility classes overridden | Wrong import order                 | Ensure library CSS comes BEFORE `@tailwind utilities`      |

## Files Summary

- **`index.css`** - Contains `@import "tailwindcss"` - Use for standalone projects
- **`library.css`** - Contains only library styles - Use when integrating with existing Tailwind setup
- **`theme.css`** - DaisyUI theme configuration - Included in both above files

## Need Help?

If you're still experiencing issues:

1. Check browser DevTools → Elements → inspect element → see which CSS rules are applied
2. Verify `library.css` is imported before utility classes
3. Ensure library components are in Tailwind's content paths
4. Clear build cache: `rm -rf node_modules/.cache dist`
