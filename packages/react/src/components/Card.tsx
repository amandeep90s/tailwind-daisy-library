import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type CardVariant = "default" | "bordered" | "compact" | "side";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant */
  variant?: CardVariant;
  /** Image source for card */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Justify actions */
  justify?: "start" | "center" | "end";
}

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<CardVariant, string> = {
  default: "bg-base-100",
  bordered: "card-border",
  compact: "card-sm",
  side: "card-side",
};

/**
 * Card component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Card imageSrc="/image.jpg" variant="bordered">
 *   <CardBody>
 *     <CardTitle>Card Title</CardTitle>
 *     <p>Card content goes here</p>
 *     <CardActions justify="end">
 *       <Button>Action</Button>
 *     </CardActions>
 *   </CardBody>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", imageSrc, imageAlt = "", children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("card shadow-sm", variantClasses[variant], className)}
        {...props}
      >
        {imageSrc && (
          <figure>
            <img src={imageSrc} alt={imageAlt} />
          </figure>
        )}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("card-body", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = "CardBody";

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2 ref={ref} className={clsx("card-title", className)} {...props}>
        {children}
      </h2>
    );
  }
);

CardTitle.displayName = "CardTitle";

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ justify = "end", children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx("card-actions", `justify-${justify}`, className)} {...props}>
        {children}
      </div>
    );
  }
);

CardActions.displayName = "CardActions";
