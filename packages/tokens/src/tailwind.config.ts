/**
 * Tailwind CSS Configuration Export
 *
 * This file exports the design tokens in Tailwind config format.
 * Consumer apps can import and use/extend this configuration in their tailwind.config.js:
 *
 * @example
 * ```js
 * import { tailwindConfig } from '@shared-ui-library/tokens/tailwind.config';
 *
 * export default {
 *   ...tailwindConfig,
 *   // Override or extend as needed
 *   theme: {
 *     ...tailwindConfig.theme,
 *     extend: {
 *       ...tailwindConfig.theme.extend,
 *       colors: {
 *         ...tailwindConfig.theme.extend.colors,
 *         custom: '#ff0000',
 *       },
 *     },
 *   },
 * };
 * ```
 */

import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

/**
 * Convert OKLCH color strings to CSS custom properties for Tailwind
 * This allows dynamic theming via CSS variables
 */
const colorsTailwind = {
  primary: {
    DEFAULT: colors.primary,
    content: colors.primaryContent,
  },
  secondary: {
    DEFAULT: colors.secondary,
    content: colors.secondaryContent,
  },
  accent: {
    DEFAULT: colors.accent,
    content: colors.accentContent,
  },
  neutral: {
    DEFAULT: colors.neutral,
    content: colors.neutralContent,
  },
  base: {
    100: colors.base100,
    200: colors.base200,
    300: colors.base300,
    content: colors.baseContent,
  },
  info: {
    DEFAULT: colors.info,
    content: colors.infoContent,
  },
  success: {
    DEFAULT: colors.success,
    content: colors.successContent,
  },
  warning: {
    DEFAULT: colors.warning,
    content: colors.warningContent,
  },
  error: {
    DEFAULT: colors.error,
    content: colors.errorContent,
  },
};

/**
 * Tailwind configuration preset
 * Import and spread this in your tailwind.config.js
 */
export const tailwindConfig = {
  theme: {
    extend: {
      colors: colorsTailwind,
      fontFamily: {
        sans: typography.fontFamily.sans.split(", "),
        mono: typography.fontFamily.mono.split(", "),
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      spacing: spacing,
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
    },
  },
} as const;

/**
 * Alternative: Flat color export for easier customization
 * Use this if you prefer flat color names without nesting
 */
export const tailwindColorsFlat = {
  primary: colors.primary,
  "primary-content": colors.primaryContent,
  secondary: colors.secondary,
  "secondary-content": colors.secondaryContent,
  accent: colors.accent,
  "accent-content": colors.accentContent,
  neutral: colors.neutral,
  "neutral-content": colors.neutralContent,
  "base-100": colors.base100,
  "base-200": colors.base200,
  "base-300": colors.base300,
  "base-content": colors.baseContent,
  info: colors.info,
  "info-content": colors.infoContent,
  success: colors.success,
  "success-content": colors.successContent,
  warning: colors.warning,
  "warning-content": colors.warningContent,
  error: colors.error,
  "error-content": colors.errorContent,
};

/**
 * Export individual configuration pieces for granular control
 */
export const tailwindColors = colorsTailwind;
export const tailwindFontFamily = {
  sans: typography.fontFamily.sans.split(", "),
  mono: typography.fontFamily.mono.split(", "),
};
export const tailwindFontSize = typography.fontSize;
export const tailwindFontWeight = typography.fontWeight;
export const tailwindLineHeight = typography.lineHeight;
export const tailwindSpacing = spacing;

export type TailwindConfig = typeof tailwindConfig;
