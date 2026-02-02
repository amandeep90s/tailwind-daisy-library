import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Width of skeleton */
	width?: string | number;
	/** Height of skeleton */
	height?: string | number;
	/** Shape of skeleton */
	shape?: "rectangle" | "circle";
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Skeleton loading component
 *
 * @example
 * ```tsx
 * <Skeleton width={200} height={20} />
 * <Skeleton shape="circle" width={50} height={50} />
 * ```
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
	({ width, height, shape = "rectangle", className, style, ...props }, ref) => {
		const dimensionStyle = {
			width: typeof width === "number" ? `${width}px` : width,
			height: typeof height === "number" ? `${height}px` : height,
			...style,
		};

		return (
			<div
				ref={ref}
				className={clsx("skeleton", shape === "circle" && "rounded-full", className)}
				style={dimensionStyle}
				{...props}
			/>
		);
	},
);

Skeleton.displayName = "Skeleton";
