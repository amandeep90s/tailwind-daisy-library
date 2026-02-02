// src/colors.ts
var colors = {
  // Primary colors
  primary: "oklch(0.4965 0.1837 19.68)",
  primaryContent: "oklch(98% 0.01 240)",
  // Secondary colors
  secondary: "oklch(70% 0.25 200)",
  secondaryContent: "oklch(98% 0.01 200)",
  // Accent colors
  accent: "oklch(65% 0.25 160)",
  accentContent: "oklch(98% 0.01 160)",
  // Neutral colors
  neutral: "oklch(50% 0.05 240)",
  neutralContent: "oklch(98% 0.01 240)",
  // Base colors
  base100: "oklch(98% 0.02 240)",
  base200: "oklch(95% 0.03 240)",
  base300: "oklch(92% 0.04 240)",
  baseContent: "oklch(20% 0.05 240)",
  // Semantic colors
  info: "oklch(70% 0.2 220)",
  infoContent: "oklch(98% 0.01 220)",
  success: "oklch(0.4509 0.099094 161.8675)",
  successContent: "oklch(98% 0.01 140)",
  warning: "oklch(0.6697 0.138 81.94)",
  warningContent: "oklch(20% 0.05 80)",
  error: "oklch(0.5218 0.1923 33.04)",
  errorContent: "oklch(98% 0.01 30)"
};

// src/spacing.ts
var spacing = {
  xs: "0.25rem",
  // 4px
  sm: "0.5rem",
  // 8px
  md: "1rem",
  // 16px
  lg: "1.5rem",
  // 24px
  xl: "2rem",
  // 32px
  "2xl": "3rem",
  // 48px
  "3xl": "4rem"
  // 64px
};

// src/typography.ts
var typography = {
  fontFamily: {
    sans: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    serif: "'Crimson Pro', Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"
  },
  fontSize: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    "2xl": "1.5rem",
    // 24px
    "3xl": "1.875rem",
    // 30px
    "4xl": "2.25rem"
    // 36px
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700"
  },
  lineHeight: {
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625"
  }
};

// src/tailwind.config.ts
var colorsTailwind = {
  primary: {
    DEFAULT: colors.primary,
    content: colors.primaryContent
  },
  secondary: {
    DEFAULT: colors.secondary,
    content: colors.secondaryContent
  },
  accent: {
    DEFAULT: colors.accent,
    content: colors.accentContent
  },
  neutral: {
    DEFAULT: colors.neutral,
    content: colors.neutralContent
  },
  base: {
    100: colors.base100,
    200: colors.base200,
    300: colors.base300,
    content: colors.baseContent
  },
  info: {
    DEFAULT: colors.info,
    content: colors.infoContent
  },
  success: {
    DEFAULT: colors.success,
    content: colors.successContent
  },
  warning: {
    DEFAULT: colors.warning,
    content: colors.warningContent
  },
  error: {
    DEFAULT: colors.error,
    content: colors.errorContent
  }
};
var tailwindConfig = {
  theme: {
    extend: {
      colors: colorsTailwind,
      fontFamily: {
        sans: typography.fontFamily.sans.split(", "),
        mono: typography.fontFamily.mono.split(", ")
      },
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      spacing,
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem"
      }
    }
  }
};
var tailwindColorsFlat = {
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
  "error-content": colors.errorContent
};
var tailwindColors = colorsTailwind;
var tailwindFontFamily = {
  sans: typography.fontFamily.sans.split(", "),
  mono: typography.fontFamily.mono.split(", ")
};
var tailwindFontSize = typography.fontSize;
var tailwindFontWeight = typography.fontWeight;
var tailwindLineHeight = typography.lineHeight;
var tailwindSpacing = spacing;
export {
  tailwindColors,
  tailwindColorsFlat,
  tailwindConfig,
  tailwindFontFamily,
  tailwindFontSize,
  tailwindFontWeight,
  tailwindLineHeight,
  tailwindSpacing
};
//# sourceMappingURL=tailwind.config.mjs.map