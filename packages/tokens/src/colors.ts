/**
 * Color tokens for the shared UI library
 * These can be customized by consumer apps
 */
export const colors = {
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
	errorContent: "oklch(98% 0.01 30)",
} as const;

export type Colors = typeof colors;
export type ColorKey = keyof Colors;
