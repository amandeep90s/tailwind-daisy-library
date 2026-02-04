/**
 * Color tokens for the shared UI library
 * These can be customized by consumer apps
 */
declare const colors: {
    readonly primary: "oklch(0.4965 0.1837 19.68)";
    readonly primaryContent: "oklch(98% 0.01 240)";
    readonly secondary: "oklch(70% 0.25 200)";
    readonly secondaryContent: "oklch(98% 0.01 200)";
    readonly accent: "oklch(65% 0.25 160)";
    readonly accentContent: "oklch(98% 0.01 160)";
    readonly neutral: "oklch(50% 0.05 240)";
    readonly neutralContent: "oklch(98% 0.01 240)";
    readonly base100: "oklch(100% 0 0)";
    readonly base200: "oklch(98% 0 0)";
    readonly base300: "oklch(95% 0 0)";
    readonly baseContent: "oklch(21% 0.006 285.885)";
    readonly info: "oklch(70% 0.2 220)";
    readonly infoContent: "oklch(98% 0.01 220)";
    readonly success: "oklch(0.4509 0.099094 161.8675)";
    readonly successContent: "oklch(98% 0.01 140)";
    readonly warning: "oklch(0.6697 0.138 81.94)";
    readonly warningContent: "oklch(20% 0.05 80)";
    readonly error: "oklch(0.5218 0.1923 33.04)";
    readonly errorContent: "oklch(98% 0.01 30)";
};
type Colors = typeof colors;
type ColorKey = keyof Colors;

export { type ColorKey, type Colors, colors };
