export { ColorKey, Colors, colors } from './colors.mjs';
export { Spacing, SpacingKey, spacing } from './spacing.mjs';
export { Typography, typography } from './typography.mjs';
export { TailwindConfig, tailwindColors, tailwindColorsFlat, tailwindConfig, tailwindFontFamily, tailwindFontSize, tailwindFontWeight, tailwindLineHeight, tailwindSpacing } from './tailwind.config.mjs';

/**
 * Shared UI Library - Design Tokens
 *
 * This package exports all design tokens used across the UI library.
 * Consumer apps can use these tokens to customize themes.
 */

declare const tokens: {
    readonly colors: {
        readonly primary: "oklch(0.4965 0.1837 19.68)";
        readonly primaryContent: "oklch(98% 0.01 240)";
        readonly secondary: "oklch(70% 0.25 200)";
        readonly secondaryContent: "oklch(98% 0.01 200)";
        readonly accent: "oklch(65% 0.25 160)";
        readonly accentContent: "oklch(98% 0.01 160)";
        readonly neutral: "oklch(50% 0.05 240)";
        readonly neutralContent: "oklch(98% 0.01 240)";
        readonly base100: "oklch(98% 0.02 240)";
        readonly base200: "oklch(95% 0.03 240)";
        readonly base300: "oklch(92% 0.04 240)";
        readonly baseContent: "oklch(20% 0.05 240)";
        readonly info: "oklch(70% 0.2 220)";
        readonly infoContent: "oklch(98% 0.01 220)";
        readonly success: "oklch(0.4509 0.099094 161.8675)";
        readonly successContent: "oklch(98% 0.01 140)";
        readonly warning: "oklch(0.6697 0.138 81.94)";
        readonly warningContent: "oklch(20% 0.05 80)";
        readonly error: "oklch(0.5218 0.1923 33.04)";
        readonly errorContent: "oklch(98% 0.01 30)";
    };
    readonly spacing: {
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1.5rem";
        readonly xl: "2rem";
        readonly "2xl": "3rem";
        readonly "3xl": "4rem";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly sans: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
            readonly serif: "'Crimson Pro', Georgia, Cambria, 'Times New Roman', Times, serif";
            readonly mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace";
        };
        readonly fontSize: {
            readonly xs: "0.75rem";
            readonly sm: "0.875rem";
            readonly base: "1rem";
            readonly lg: "1.125rem";
            readonly xl: "1.25rem";
            readonly "2xl": "1.5rem";
            readonly "3xl": "1.875rem";
            readonly "4xl": "2.25rem";
        };
        readonly fontWeight: {
            readonly normal: "400";
            readonly medium: "500";
            readonly semibold: "600";
            readonly bold: "700";
        };
        readonly lineHeight: {
            readonly tight: "1.25";
            readonly snug: "1.375";
            readonly normal: "1.5";
            readonly relaxed: "1.625";
        };
    };
};
type Tokens = typeof tokens;

export { type Tokens, tokens };
