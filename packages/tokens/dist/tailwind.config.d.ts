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
/**
 * Tailwind configuration preset
 * Import and spread this in your tailwind.config.js
 */
declare const tailwindConfig: {
    readonly theme: {
        readonly extend: {
            readonly colors: {
                primary: {
                    DEFAULT: "oklch(0.4965 0.1837 19.68)";
                    content: "oklch(98% 0.01 240)";
                };
                secondary: {
                    DEFAULT: "oklch(70% 0.25 200)";
                    content: "oklch(98% 0.01 200)";
                };
                accent: {
                    DEFAULT: "oklch(65% 0.25 160)";
                    content: "oklch(98% 0.01 160)";
                };
                neutral: {
                    DEFAULT: "oklch(50% 0.05 240)";
                    content: "oklch(98% 0.01 240)";
                };
                base: {
                    100: "oklch(98% 0.02 240)";
                    200: "oklch(95% 0.03 240)";
                    300: "oklch(92% 0.04 240)";
                    content: "oklch(20% 0.05 240)";
                };
                info: {
                    DEFAULT: "oklch(70% 0.2 220)";
                    content: "oklch(98% 0.01 220)";
                };
                success: {
                    DEFAULT: "oklch(0.4509 0.099094 161.8675)";
                    content: "oklch(98% 0.01 140)";
                };
                warning: {
                    DEFAULT: "oklch(0.6697 0.138 81.94)";
                    content: "oklch(20% 0.05 80)";
                };
                error: {
                    DEFAULT: "oklch(0.5218 0.1923 33.04)";
                    content: "oklch(98% 0.01 30)";
                };
            };
            readonly fontFamily: {
                readonly sans: string[];
                readonly mono: string[];
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
            readonly spacing: {
                readonly xs: "0.25rem";
                readonly sm: "0.5rem";
                readonly md: "1rem";
                readonly lg: "1.5rem";
                readonly xl: "2rem";
                readonly "2xl": "3rem";
                readonly "3xl": "4rem";
            };
            readonly borderRadius: {
                readonly sm: "0.25rem";
                readonly DEFAULT: "0.375rem";
                readonly md: "0.5rem";
                readonly lg: "0.75rem";
                readonly xl: "1rem";
            };
        };
    };
};
/**
 * Alternative: Flat color export for easier customization
 * Use this if you prefer flat color names without nesting
 */
declare const tailwindColorsFlat: {
    primary: "oklch(0.4965 0.1837 19.68)";
    "primary-content": "oklch(98% 0.01 240)";
    secondary: "oklch(70% 0.25 200)";
    "secondary-content": "oklch(98% 0.01 200)";
    accent: "oklch(65% 0.25 160)";
    "accent-content": "oklch(98% 0.01 160)";
    neutral: "oklch(50% 0.05 240)";
    "neutral-content": "oklch(98% 0.01 240)";
    "base-100": "oklch(98% 0.02 240)";
    "base-200": "oklch(95% 0.03 240)";
    "base-300": "oklch(92% 0.04 240)";
    "base-content": "oklch(20% 0.05 240)";
    info: "oklch(70% 0.2 220)";
    "info-content": "oklch(98% 0.01 220)";
    success: "oklch(0.4509 0.099094 161.8675)";
    "success-content": "oklch(98% 0.01 140)";
    warning: "oklch(0.6697 0.138 81.94)";
    "warning-content": "oklch(20% 0.05 80)";
    error: "oklch(0.5218 0.1923 33.04)";
    "error-content": "oklch(98% 0.01 30)";
};
/**
 * Export individual configuration pieces for granular control
 */
declare const tailwindColors: {
    primary: {
        DEFAULT: "oklch(0.4965 0.1837 19.68)";
        content: "oklch(98% 0.01 240)";
    };
    secondary: {
        DEFAULT: "oklch(70% 0.25 200)";
        content: "oklch(98% 0.01 200)";
    };
    accent: {
        DEFAULT: "oklch(65% 0.25 160)";
        content: "oklch(98% 0.01 160)";
    };
    neutral: {
        DEFAULT: "oklch(50% 0.05 240)";
        content: "oklch(98% 0.01 240)";
    };
    base: {
        100: "oklch(98% 0.02 240)";
        200: "oklch(95% 0.03 240)";
        300: "oklch(92% 0.04 240)";
        content: "oklch(20% 0.05 240)";
    };
    info: {
        DEFAULT: "oklch(70% 0.2 220)";
        content: "oklch(98% 0.01 220)";
    };
    success: {
        DEFAULT: "oklch(0.4509 0.099094 161.8675)";
        content: "oklch(98% 0.01 140)";
    };
    warning: {
        DEFAULT: "oklch(0.6697 0.138 81.94)";
        content: "oklch(20% 0.05 80)";
    };
    error: {
        DEFAULT: "oklch(0.5218 0.1923 33.04)";
        content: "oklch(98% 0.01 30)";
    };
};
declare const tailwindFontFamily: {
    sans: string[];
    mono: string[];
};
declare const tailwindFontSize: {
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly base: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly "2xl": "1.5rem";
    readonly "3xl": "1.875rem";
    readonly "4xl": "2.25rem";
};
declare const tailwindFontWeight: {
    readonly normal: "400";
    readonly medium: "500";
    readonly semibold: "600";
    readonly bold: "700";
};
declare const tailwindLineHeight: {
    readonly tight: "1.25";
    readonly snug: "1.375";
    readonly normal: "1.5";
    readonly relaxed: "1.625";
};
declare const tailwindSpacing: {
    readonly xs: "0.25rem";
    readonly sm: "0.5rem";
    readonly md: "1rem";
    readonly lg: "1.5rem";
    readonly xl: "2rem";
    readonly "2xl": "3rem";
    readonly "3xl": "4rem";
};
type TailwindConfig = typeof tailwindConfig;

export { type TailwindConfig, tailwindColors, tailwindColorsFlat, tailwindConfig, tailwindFontFamily, tailwindFontSize, tailwindFontWeight, tailwindLineHeight, tailwindSpacing };
