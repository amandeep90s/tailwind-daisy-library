/**
 * Typography tokens for the shared UI library
 */
declare const typography: {
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
type Typography = typeof typography;

export { type Typography, typography };
