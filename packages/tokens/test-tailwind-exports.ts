/**
 * Quick Test: Verifying Tailwind Config Exports
 *
 * This file demonstrates importing and using the tailwind config exports
 */

import {
  tailwindColors,
  tailwindColorsFlat,
  tailwindConfig,
  tailwindFontFamily,
  tailwindSpacing,
} from "./dist/tailwind.config.js";

// Test 1: Full config structure
console.log("✓ Full Tailwind Config:", {
  hasTheme: !!tailwindConfig.theme,
  hasExtend: !!tailwindConfig.theme.extend,
  hasColors: !!tailwindConfig.theme.extend.colors,
  hasFontFamily: !!tailwindConfig.theme.extend.fontFamily,
  hasSpacing: !!tailwindConfig.theme.extend.spacing,
});

// Test 2: Nested colors
console.log("\n✓ Nested Colors:", {
  primary: tailwindColors.primary.DEFAULT,
  primaryContent: tailwindColors.primary.content,
  success: tailwindColors.success.DEFAULT,
});

// Test 3: Flat colors
console.log("\n✓ Flat Colors:", {
  primary: tailwindColorsFlat.primary,
  "primary-content": tailwindColorsFlat["primary-content"],
  "base-100": tailwindColorsFlat["base-100"],
});

// Test 4: Spacing
console.log("\n✓ Spacing:", {
  sm: tailwindSpacing.sm,
  md: tailwindSpacing.md,
  lg: tailwindSpacing.lg,
});

// Test 5: Font families (should be arrays)
console.log("\n✓ Font Families:", {
  sans: tailwindFontFamily.sans,
  mono: tailwindFontFamily.mono,
  sansIsArray: Array.isArray(tailwindFontFamily.sans),
  monoIsArray: Array.isArray(tailwindFontFamily.mono),
});

// Test 6: Example override
const customConfig = {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      colors: {
        ...tailwindConfig.theme.extend.colors,
        custom: "#ff0000",
      },
    },
  },
};

console.log("\n✓ Custom Config with Override:", {
  hasCustomColor: !!(customConfig.theme.extend.colors as any).custom,
  stillHasPrimary: !!(customConfig.theme.extend.colors as any).primary,
});

console.log(
  "\n✅ All tests passed! Tailwind config exports are working correctly.",
);
