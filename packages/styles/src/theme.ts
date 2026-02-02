/**
 * Theme configuration for programmatic access
 * Use this to access theme values in JavaScript/TypeScript
 */

import { colors, spacing, typography } from "@shared-ui-library/tokens";

export const theme = {
	colors,
	spacing,
	typography,
} as const;

export type Theme = typeof theme;

/**
 * CSS variable names for theme customization
 * Consumer apps can override these variables
 */
export const cssVariables = {
	colors: {
		primary: "--color-primary",
		primaryContent: "--color-primary-content",
		secondary: "--color-secondary",
		secondaryContent: "--color-secondary-content",
		accent: "--color-accent",
		accentContent: "--color-accent-content",
		neutral: "--color-neutral",
		neutralContent: "--color-neutral-content",
		base100: "--color-base-100",
		base200: "--color-base-200",
		base300: "--color-base-300",
		baseContent: "--color-base-content",
		info: "--color-info",
		infoContent: "--color-info-content",
		success: "--color-success",
		successContent: "--color-success-content",
		warning: "--color-warning",
		warningContent: "--color-warning-content",
		error: "--color-error",
		errorContent: "--color-error-content",
	},
	radius: {
		selector: "--radius-selector",
		field: "--radius-field",
		box: "--radius-box",
	},
	font: {
		sans: "--font-sans",
	},
} as const;

/**
 * Helper function to set a CSS variable
 */
export function setCssVariable(name: string, value: string): void {
	document.documentElement.style.setProperty(name, value);
}

/**
 * Helper function to get a CSS variable
 */
export function getCssVariable(name: string): string {
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
