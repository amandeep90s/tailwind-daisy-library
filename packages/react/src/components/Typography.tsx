import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type TypographyVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "blockquote"
	| "code"
	| "lead"
	| "large"
	| "small"
	| "muted";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	/** Typography variant */
	variant?: TypographyVariant;
	/** HTML element to render */
	as?: React.ElementType;
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<TypographyVariant, string> = {
	h1: "text-4xl font-bold",
	h2: "text-3xl font-bold",
	h3: "text-2xl font-bold",
	h4: "text-xl font-bold",
	h5: "text-lg font-bold",
	h6: "text-base font-bold",
	p: "text-base",
	blockquote: "border-l-4 border-base-300 pl-4 italic",
	code: "bg-base-200 rounded px-1 py-0.5 font-mono text-sm",
	lead: "text-xl text-base-content/80",
	large: "text-lg font-semibold",
	small: "text-sm text-base-content/70",
	muted: "text-sm text-base-content/60",
};

const defaultElements: Record<TypographyVariant, React.ElementType> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	p: "p",
	blockquote: "blockquote",
	code: "code",
	lead: "p",
	large: "div",
	small: "small",
	muted: "p",
};

/**
 * Typography component for consistent text styling
 *
 * @example
 * ```tsx
 * <Typography variant="h1">Heading 1</Typography>
 * <Typography variant="p">Paragraph text</Typography>
 * <Typography variant="muted">Muted text</Typography>
 * ```
 */
export const Typography = forwardRef<HTMLElement, TypographyProps>(
	({ variant = "p", as, children, className, ...props }, ref) => {
		const Component = (as || defaultElements[variant]) as any;

		return (
			<Component ref={ref} className={clsx(variantClasses[variant], className)} {...props}>
				{children}
			</Component>
		);
	},
);

Typography.displayName = "Typography";
