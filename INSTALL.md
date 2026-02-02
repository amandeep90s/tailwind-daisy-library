# Installation Guide

## Prerequisites

- Node.js >= 18
- npm >= 7 (for automatic peer dependency installation)

## Quick Install

### For npm 7+

```bash
# Install from private GitHub repo - peer dependencies will be installed automatically
npm install git+ssh://git@github.com:your-org/shared-ui-library.git#main
```

### For npm 6 or earlier

```bash
# Install library
npm install git+ssh://git@github.com:your-org/shared-ui-library.git#main

# Manually install peer dependencies
npm install react@^19 react-dom@^19 tailwindcss@^4 daisyui@^5
```

## Required Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

| Package     | Version | Purpose                                        |
| ----------- | ------- | ---------------------------------------------- |
| react       | ^19.0   | React framework (for @shared-ui-library/react) |
| react-dom   | ^19.0   | React DOM (for @shared-ui-library/react)       |
| tailwindcss | ^4.0    | CSS framework for styling                      |
| daisyui     | ^5.0    | Component library built on TailwindCSS         |

## Setup Steps

### 1. Install the Library

```bash
npm install git+ssh://git@github.com:your-org/shared-ui-library.git#main
```

### 2. Configure TailwindCSS

Create `tailwind.config.js` in your project root:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include the library's components
    "./node_modules/@shared-ui-library/react/dist/**/*.{js,mjs}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
```

### 3. Import Styles

**IMPORTANT:** CSS import order matters for proper Tailwind utility class priority.

#### Option A: Using Tailwind v4 CSS Imports (Recommended)

In your main CSS file (e.g., `src/index.css`):

```css
/* 1. Import Tailwind base and components */
@import "tailwindcss";

/* 2. Import library styles (components and theme) */
@import "@shared-ui-library/styles/dist/library.css";

/* 3. Your custom styles */
```

**Why this order?**

- Tailwind utilities come last, ensuring they can override component styles
- Library styles are treated as components, allowing utilities to override them
- Classes like `md:hidden`, `text-center`, etc. work correctly

#### Option B: Using Individual Tailwind Directives

In your main CSS file (e.g., `src/index.css`):

```css
/* 1. Tailwind base styles */
@tailwind base;

/* 2. Tailwind component classes */
@tailwind components;

/* 3. Library component styles - MUST come before utilities */
@import "@shared-ui-library/styles/dist/library.css";

/* 4. Tailwind utilities - MUST come last */
@tailwind utilities;
```

**Critical:** Never import library styles AFTER `@tailwind utilities` or utility classes will be overridden.

#### ❌ Common Mistakes to Avoid

```css
/* DON'T: Library styles after utilities */
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "@shared-ui-library/styles/dist/library.css"; /* ❌ Wrong order */

/* DON'T: Using the full index.css (imports Tailwind twice) */
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "@shared-ui-library/styles/dist/index.css"; /* ❌ Contains @import "tailwindcss" */
```

### 4. Use Components

```tsx
import { Button, Input, Label } from "@shared-ui-library/react";

function MyComponent() {
  return (
    <div>
      <Label>Username</Label>
      <Input placeholder="Enter username" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## Troubleshooting

### Tailwind Utility Classes Not Working (md:hidden, etc.)

**Symptom:** Tailwind utility classes like `md:hidden`, `flex`, `text-center` stop working after adding the library.

**Cause:** CSS import order issue - library styles are overriding Tailwind utilities.

**Solution:** Use `library.css` instead of `index.css` and ensure correct import order:

```css
/* ✅ CORRECT */
@import "tailwindcss";
@import "@shared-ui-library/styles/dist/library.css";

/* ❌ WRONG - utilities come first, then get overridden */
@import "tailwindcss";
@import "@shared-ui-library/styles/dist/index.css"; /* This imports Tailwind again */
```

If using individual directives:

```css
/* ✅ CORRECT */
@tailwind base;
@tailwind components;
@import "@shared-ui-library/styles/dist/library.css"; /* Before utilities */
@tailwind utilities; /* Must be last */

/* ❌ WRONG - utilities get overridden */
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "@shared-ui-library/styles/dist/library.css"; /* Too late */
```

### Peer Dependency Warnings

If you see peer dependency warnings:

```
npm WARN ... requires a peer of tailwindcss@^4.0.0 but none is installed.
```

Install the missing peer dependency:

```bash
npm install tailwindcss@^4.0.0
```

### Styles Not Loading

Make sure you've:

1. Imported the styles in your main entry file
2. Configured TailwindCSS with the correct content paths
3. Included the library's dist folder in the content array

### TypeScript Errors

If you see TypeScript errors, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "jsx": "react-jsx"
  }
}
```

## Verifying Installation

Check that all dependencies are installed:

```bash
npm list @shared-ui-library/react @shared-ui-library/styles tailwindcss daisyui
```

You should see all packages listed without any errors.

## Alternative: Using package.json

Add to your `package.json`:

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

Then run:

```bash
npm install
```

## Updating the Library

To update to the latest version:

```bash
npm update @shared-ui-library/react @shared-ui-library/styles
```

Or for a specific commit/tag:

```bash
npm install git+ssh://git@github.com:your-org/shared-ui-library.git#v1.2.3
```
