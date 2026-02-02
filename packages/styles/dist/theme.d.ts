/**
 * Theme configuration for programmatic access
 * Use this to access theme values in JavaScript/TypeScript
 */
declare const theme: {
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
type Theme = typeof theme;
/**
 * CSS variable names for theme customization
 * Consumer apps can override these variables
 */
declare const cssVariables: {
    readonly colors: {
        readonly primary: "--color-primary";
        readonly primaryContent: "--color-primary-content";
        readonly secondary: "--color-secondary";
        readonly secondaryContent: "--color-secondary-content";
        readonly accent: "--color-accent";
        readonly accentContent: "--color-accent-content";
        readonly neutral: "--color-neutral";
        readonly neutralContent: "--color-neutral-content";
        readonly base100: "--color-base-100";
        readonly base200: "--color-base-200";
        readonly base300: "--color-base-300";
        readonly baseContent: "--color-base-content";
        readonly info: "--color-info";
        readonly infoContent: "--color-info-content";
        readonly success: "--color-success";
        readonly successContent: "--color-success-content";
        readonly warning: "--color-warning";
        readonly warningContent: "--color-warning-content";
        readonly error: "--color-error";
        readonly errorContent: "--color-error-content";
    };
    readonly radius: {
        readonly selector: "--radius-selector";
        readonly field: "--radius-field";
        readonly box: "--radius-box";
    };
    readonly font: {
        readonly sans: "--font-sans";
    };
};
/**
 * Helper function to set a CSS variable
 */
declare function setCssVariable(name: string, value: string): void;
/**
 * Helper function to get a CSS variable
 */
declare function getCssVariable(name: string): string;

export { type Theme, cssVariables, getCssVariable, setCssVariable, theme };
