# Typography Configuration

## Default Fonts

The shared UI library uses the following fonts:

- **Body Font**: IBM Plex Sans
- **Heading Font**: Crimson Pro (h1-h6)
- **Monospace Font**: System monospace fonts

## Installation

### In Your Consumer App

#### Option 1: Using Fontsource (Recommended)

Install the fonts from npm:

```bash
pnpm add @fontsource/ibm-plex-sans @fontsource/crimson-pro
```

Then import them in your main CSS file:

```css
/* Import specific font weights */
@import "@fontsource/ibm-plex-sans/400.css";
@import "@fontsource/ibm-plex-sans/500.css";
@import "@fontsource/ibm-plex-sans/600.css";
@import "@fontsource/ibm-plex-sans/700.css";
@import "@fontsource/crimson-pro/400.css";
@import "@fontsource/crimson-pro/500.css";
@import "@fontsource/crimson-pro/600.css";
@import "@fontsource/crimson-pro/700.css";
```

**Benefits:**

- Self-hosted fonts (better privacy)
- No external requests
- Better performance and caching
- Works offline
- Load only the weights you need

#### Option 2: Using Google Fonts CDN

Add the Google Fonts import to your main CSS file:

```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Crimson+Pro:wght@400;500;600;700&display=swap");
```

## Customization

### Option 1: Override CSS Variables (Recommended)

Override the font families in your app's CSS:

```css
@layer base {
  :root {
    /* Override body font */
    --font-sans: "Your Custom Font", system-ui, sans-serif;

    /* Override heading font */
    --font-serif: "Your Custom Heading Font", Georgia, serif;
  }
}
```

### Option 2: Use Tailwind Classes

Use the built-in Tailwind font classes:

```jsx
<div className="font-sans">Body text with IBM Plex Sans</div>
<h1 className="font-serif">Heading with Crimson Pro</h1>
```

### Option 3: Custom Font via Tailwind Config

Extend your Tailwind configuration:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Your Font", "system-ui", "sans-serif"],
        serif: ["Your Heading Font", "Georgia", "serif"],
      },
    },
  },
} satisfies Config;
```

## Font Weights Available

### IBM Plex Sans

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Crimson Pro

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Usage Examples

```jsx
import { Typography } from "@shared-ui-library/react";

// Headings automatically use Crimson Pro
<Typography variant="h1">Main Heading</Typography>
<Typography variant="h2">Subheading</Typography>

// Body text uses IBM Plex Sans
<Typography variant="body1">Regular body text</Typography>
<Typography variant="body2">Smaller body text</Typography>
```

## Best Practices

1. **Use Fontsource**: Self-host fonts for better performance and privacy
2. **Load only needed weights**: Import only the font weights you actually use
3. **Optimize loading**: Fontsource fonts are optimized with `font-display: swap` by default
4. **System font fallbacks**: Always include system fonts in the font stack
5. **Use CSS variables**: Override `--font-sans` and `--font-serif` for easy customization

## Fontsource Advanced Usage

### Load Variable Fonts (Smaller Bundle)

For even better performance, use variable fonts:

```bash
pnpm add @fontsource-variable/ibm-plex-sans @fontsource-variable/crimson-pro
```

```css
@import "@fontsource-variable/ibm-plex-sans";
@import "@fontsource-variable/crimson-pro";
```

### Load Specific Subsets

Import only the character sets you need:

```css
@import "@fontsource/ibm-plex-sans/latin-400.css";
@import "@fontsource/ibm-plex-sans/latin-600.css";
```
