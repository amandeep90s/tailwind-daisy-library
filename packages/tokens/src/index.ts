/**
 * Shared UI Library - Design Tokens
 *
 * This package exports all design tokens used across the UI library.
 * Consumer apps can use these tokens to customize themes.
 */

export { colors, type ColorKey, type Colors } from "./colors";
export { spacing, type Spacing, type SpacingKey } from "./spacing";
export { typography, type Typography } from "./typography";

// Tailwind CSS configuration exports
export {
  tailwindColors,
  tailwindColorsFlat,
  tailwindConfig,
  tailwindFontFamily,
  tailwindFontSize,
  tailwindFontWeight,
  tailwindLineHeight,
  tailwindSpacing,
  type TailwindConfig,
} from "./tailwind.config";

// Combined tokens export for convenience
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const tokens = {
  colors,
  spacing,
  typography,
} as const;

export type Tokens = typeof tokens;
