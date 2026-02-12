// src/components/AmountField.tsx
import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var variantClasses = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: ""
};
var colorClasses = {
  default: "",
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error"
};
var sizeClasses = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl"
};
var formatCurrency = (value, decimalPlaces = 2) => {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  });
};
var parseCurrency = (value) => {
  const cleaned = value.replace(/[^0-9.-]/g, "");
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? null : parsed;
};
var AmountField = forwardRef(
  ({
    variant = "bordered",
    color = "default",
    size = "md",
    label,
    error,
    helperText,
    value,
    onChange,
    currencySymbol = "$",
    decimalPlaces = 2,
    allowNegative = false,
    max,
    min,
    className,
    disabled,
    placeholder = "0.00",
    onBlur,
    onFocus,
    id,
    valueAsString = false,
    ...props
  }, ref) => {
    const [displayValue, setDisplayValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || (label ? `amount-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    useEffect(() => {
      if (value !== void 0 && value !== null && value !== "") {
        const numValue = typeof value === "string" ? parseFloat(value) : value;
        if (!isNaN(numValue) && !isFocused) {
          setDisplayValue(formatCurrency(numValue, decimalPlaces));
        }
      } else if (!isFocused) {
        setDisplayValue("");
      }
    }, [value, decimalPlaces, isFocused]);
    const handleChange = (e) => {
      const inputValue = e.target.value;
      if (inputValue === "") {
        setDisplayValue("");
        onChange?.(valueAsString ? "" : null);
        return;
      }
      const numValue = parseCurrency(inputValue);
      if (numValue === null) {
        return;
      }
      if (!allowNegative && numValue < 0) {
        return;
      }
      setDisplayValue(inputValue);
      onChange?.(valueAsString ? String(numValue) : numValue);
    };
    const handleFocus = (e) => {
      setIsFocused(true);
      if (value !== void 0 && value !== null && value !== "") {
        const numValue = typeof value === "string" ? parseFloat(value) : value;
        if (!isNaN(numValue)) {
          setDisplayValue(numValue.toString());
        }
      }
      onFocus?.(e);
    };
    const handleBlur = (e) => {
      setIsFocused(false);
      const numValue = parseCurrency(displayValue);
      if (numValue !== null) {
        let finalValue = numValue;
        if (min !== void 0 && finalValue < min) {
          finalValue = min;
        }
        if (max !== void 0 && finalValue > max) {
          finalValue = max;
        }
        setDisplayValue(formatCurrency(finalValue, decimalPlaces));
        onChange?.(valueAsString ? String(finalValue) : finalValue);
      } else if (displayValue === "") {
        onChange?.(valueAsString ? "" : null);
      }
      onBlur?.(e);
    };
    const inputClasses = clsx(
      "input w-full",
      variant !== "floating" && variantClasses[variant],
      error ? colorClasses.error : colorClasses[color],
      sizeClasses[size],
      disabled && "input-disabled",
      className
    );
    const renderInput = () => /* @__PURE__ */ jsxs("div", { className: "relative flex w-full items-center", children: [
      currencySymbol && /* @__PURE__ */ jsx(
        "span",
        {
          className: clsx(
            "text-base-content pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 font-medium",
            disabled && "opacity-50"
          ),
          children: currencySymbol
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          id: inputId,
          type: "text",
          inputMode: "decimal",
          value: displayValue,
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          disabled,
          placeholder,
          className: clsx(inputClasses, currencySymbol && "pl-8"),
          "aria-invalid": error ? "true" : void 0,
          "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
          ...props
        }
      )
    ] });
    if (variant === "floating") {
      return /* @__PURE__ */ jsxs("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ jsxs("label", { className: "floating-label", children: [
          /* @__PURE__ */ jsx("span", { children: label }),
          /* @__PURE__ */ jsxs("div", { className: "relative flex w-full items-center", children: [
            currencySymbol && /* @__PURE__ */ jsx(
              "span",
              {
                className: clsx(
                  "text-base-content pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 font-medium",
                  disabled && "opacity-50"
                ),
                children: currencySymbol
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref,
                id: inputId,
                type: "text",
                inputMode: "decimal",
                value: displayValue,
                onChange: handleChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
                disabled,
                placeholder,
                className: clsx(inputClasses, currencySymbol && "pl-8"),
                "aria-invalid": error ? "true" : void 0,
                "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
                ...props
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsx("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ jsx("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    if (!label && !error && !helperText) {
      return renderInput();
    }
    return /* @__PURE__ */ jsxs("div", { className: "form-control w-full", children: [
      label && /* @__PURE__ */ jsx("label", { className: "label", htmlFor: inputId, children: /* @__PURE__ */ jsx("span", { className: "label-text", children: label }) }),
      renderInput(),
      error && /* @__PURE__ */ jsx("label", { className: "label", id: `${inputId}-error`, children: /* @__PURE__ */ jsx("span", { className: "label-text-alt text-error", children: error }) }),
      !error && helperText && /* @__PURE__ */ jsx("label", { className: "label", id: `${inputId}-helper`, children: /* @__PURE__ */ jsx("span", { className: "label-text-alt text-base-content/60", children: helperText }) })
    ] });
  }
);
AmountField.displayName = "AmountField";

// src/components/Button.tsx
import clsx2 from "clsx";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var variantClasses2 = {
  default: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
  ghost: "btn-ghost",
  link: "btn-link",
  outline: "btn-outline"
};
var sizeClasses2 = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg"
};
var shapeClasses = {
  default: "",
  wide: "btn-wide",
  block: "btn-block",
  circle: "btn-circle",
  square: "btn-square"
};
var Button = forwardRef2(
  (props, ref) => {
    const {
      children,
      variant = "default",
      size = "md",
      shape = "default",
      loading = false,
      active = false,
      glass = false,
      noAnimation = false,
      className,
      ...restProps
    } = props;
    const buttonClasses = clsx2(
      "btn",
      variantClasses2[variant],
      sizeClasses2[size],
      shapeClasses[shape],
      active && "btn-active",
      glass && "glass",
      noAnimation && "no-animation",
      className
    );
    if ("as" in props && props.as && props.as !== "button") {
      const {
        as: LinkComponent,
        to,
        disabled: disabled2,
        ...linkRestProps
      } = props;
      const handleClick = (e) => {
        if (disabled2 || loading) {
          e.preventDefault();
        }
      };
      return /* @__PURE__ */ jsxs2(
        LinkComponent,
        {
          to,
          className: clsx2(
            buttonClasses,
            (disabled2 || loading) && "btn-disabled pointer-events-auto cursor-not-allowed"
          ),
          "aria-disabled": disabled2 || loading,
          tabIndex: disabled2 || loading ? -1 : void 0,
          onClick: handleClick,
          children: [
            loading && /* @__PURE__ */ jsx2("span", { className: "loading loading-spinner" }),
            children
          ]
        }
      );
    }
    const {
      disabled,
      type = "button",
      ...buttonRestProps
    } = restProps;
    return /* @__PURE__ */ jsxs2(
      "button",
      {
        ref,
        type,
        disabled: disabled || loading,
        className: buttonClasses,
        ...buttonRestProps,
        children: [
          loading && /* @__PURE__ */ jsx2("span", { className: "loading loading-spinner" }),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
import clsx3 from "clsx";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var variantClasses3 = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: ""
};
var colorClasses2 = {
  default: "",
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error"
};
var sizeClasses3 = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl"
};
var Input = forwardRef3(
  ({
    variant = "bordered",
    color = "default",
    size = "md",
    label,
    error,
    helperText,
    startIcon,
    endIcon,
    wrapperStyle = false,
    className,
    id,
    ...props
  }, ref) => {
    const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    if (variant === "floating") {
      return /* @__PURE__ */ jsxs3("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ jsxs3("label", { className: "floating-label", children: [
          /* @__PURE__ */ jsx3("span", { children: label ?? props.placeholder }),
          /* @__PURE__ */ jsx3(
            "input",
            {
              ref,
              id: inputId,
              className: clsx3(
                "input",
                error ? colorClasses2.error : colorClasses2[color],
                sizeClasses3[size],
                className
              ),
              "aria-invalid": error ? "true" : void 0,
              "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
              placeholder: props.placeholder ?? label,
              ...props
            }
          )
        ] }),
        error && /* @__PURE__ */ jsx3("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ jsx3("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    const inputClasses = clsx3(
      "input w-full",
      variantClasses3[variant],
      error ? colorClasses2.error : colorClasses2[color],
      sizeClasses3[size],
      className
    );
    const hasWrapper = startIcon || endIcon || wrapperStyle;
    const renderInput = () => {
      if (hasWrapper) {
        return /* @__PURE__ */ jsxs3(
          "label",
          {
            className: clsx3(
              "input flex w-full items-center gap-2",
              variantClasses3[variant],
              error ? colorClasses2.error : colorClasses2[color],
              sizeClasses3[size],
              className
            ),
            children: [
              startIcon && /* @__PURE__ */ jsx3("span", { className: "text-base-content/50", children: startIcon }),
              /* @__PURE__ */ jsx3(
                "input",
                {
                  ref,
                  id: inputId,
                  className: "grow border-none bg-transparent outline-none",
                  "aria-invalid": error ? "true" : void 0,
                  "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
                  ...props
                }
              ),
              endIcon && /* @__PURE__ */ jsx3("span", { className: "text-base-content/50", children: endIcon })
            ]
          }
        );
      }
      return /* @__PURE__ */ jsx3(
        "input",
        {
          ref,
          id: inputId,
          className: inputClasses,
          "aria-invalid": error ? "true" : void 0,
          "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
          ...props
        }
      );
    };
    return /* @__PURE__ */ jsxs3("div", { className: "form-control w-full", children: [
      label && /* @__PURE__ */ jsx3("label", { className: "label", htmlFor: inputId, children: /* @__PURE__ */ jsx3("span", { className: "label-text font-medium", children: label }) }),
      renderInput(),
      error && /* @__PURE__ */ jsx3("label", { className: "label", id: `${inputId}-error`, children: /* @__PURE__ */ jsx3("span", { className: "label-text-alt text-error", children: error }) }),
      !error && helperText && /* @__PURE__ */ jsx3("label", { className: "label", id: `${inputId}-helper`, children: /* @__PURE__ */ jsx3("span", { className: "label-text-alt", children: helperText }) })
    ] });
  }
);
Input.displayName = "Input";

// src/components/Label.tsx
import clsx4 from "clsx";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var Label = forwardRef4(
  ({ children, required = false, alt = false, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx4("label", { ref, className: clsx4("label", className), ...props, children: /* @__PURE__ */ jsxs4("span", { className: clsx4(alt ? "label-text-alt" : "label-text", "font-medium"), children: [
      children,
      required && /* @__PURE__ */ jsx4("span", { className: "text-error ml-1", children: "*" })
    ] }) });
  }
);
Label.displayName = "Label";

// src/components/Accordion.tsx
import clsx5 from "clsx";
import { forwardRef as forwardRef5, useCallback, useState as useState2 } from "react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var variantClasses4 = {
  default: "",
  plus: "collapse-plus",
  arrow: "collapse-arrow"
};
var Accordion = forwardRef5(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx5("div", { ref, className: clsx5("space-y-2", className), ...props, children });
  }
);
Accordion.displayName = "Accordion";
var ChevronIcon = ({ isOpen, className }) => /* @__PURE__ */ jsx5(
  "svg",
  {
    className: clsx5(
      "h-5 w-5 shrink-0 transition-transform duration-200",
      isOpen && "rotate-180",
      className
    ),
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /* @__PURE__ */ jsx5("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
  }
);
var AccordionItem = forwardRef5(
  ({
    title,
    children,
    open: controlledOpen,
    defaultOpen = false,
    onOpenChange,
    variant = "default",
    iconPosition = "left",
    actions,
    className,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = useState2(defaultOpen);
    const isControlled = controlledOpen !== void 0;
    const isOpen = isControlled ? controlledOpen : internalOpen;
    const handleToggle = useCallback(() => {
      const newOpen = !isOpen;
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [isOpen, isControlled, onOpenChange]);
    const handleTitleClick = useCallback(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleToggle();
      },
      [handleToggle]
    );
    const handleTitleKeyDown = useCallback(
      (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      },
      [handleToggle]
    );
    const handleActionsClick = useCallback((e) => {
      e.stopPropagation();
    }, []);
    const useCustomIcon = variant === "default" || iconPosition === "right";
    return /* @__PURE__ */ jsxs5(
      "div",
      {
        ref,
        className: clsx5(
          "collapse",
          "bg-base-200",
          // Only apply variant classes if not using custom icon
          !useCustomIcon && variantClasses4[variant],
          isOpen && "collapse-open",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx5("input", { type: "checkbox", className: "hidden", checked: isOpen, readOnly: true }),
          /* @__PURE__ */ jsxs5(
            "div",
            {
              className: clsx5(
                "collapse-title text-xl font-medium",
                "flex cursor-pointer items-center gap-3 select-none",
                iconPosition === "right" && "flex-row-reverse justify-between"
              ),
              onClick: handleTitleClick,
              onKeyDown: handleTitleKeyDown,
              role: "button",
              tabIndex: 0,
              "aria-expanded": isOpen,
              children: [
                useCustomIcon && /* @__PURE__ */ jsx5(ChevronIcon, { isOpen }),
                /* @__PURE__ */ jsx5("span", { className: clsx5("grow", iconPosition === "right" && "text-left"), children: title }),
                actions && /* @__PURE__ */ jsx5(
                  "div",
                  {
                    className: "flex items-center gap-2",
                    onClick: handleActionsClick,
                    onKeyDown: (e) => e.stopPropagation(),
                    role: "group",
                    "aria-label": "Item actions",
                    children: actions
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx5("div", { className: "collapse-content", children })
        ]
      }
    );
  }
);
AccordionItem.displayName = "AccordionItem";

// src/components/Alert.tsx
import clsx6 from "clsx";
import { forwardRef as forwardRef6 } from "react";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var defaultIcons = {
  info: /* @__PURE__ */ jsx6(InformationCircleIcon, { className: "h-6 w-6 shrink-0 stroke-current" }),
  success: /* @__PURE__ */ jsx6(CheckCircleIcon, { className: "h-6 w-6 shrink-0 stroke-current" }),
  warning: /* @__PURE__ */ jsx6(ExclamationTriangleIcon, { className: "h-6 w-6 shrink-0 stroke-current" }),
  error: /* @__PURE__ */ jsx6(XCircleIcon, { className: "h-6 w-6 shrink-0 stroke-current" })
};
var variantClasses5 = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error"
};
var Alert = forwardRef6(
  ({ variant = "info", icon, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs6(
      "div",
      {
        ref,
        role: "alert",
        className: clsx6("alert", variant && variantClasses5[variant], className),
        ...props,
        children: [
          icon ?? defaultIcons[variant],
          /* @__PURE__ */ jsx6("span", { children })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx6("h3", { ref, className: clsx6("font-bold", className), ...props, children });
  }
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = forwardRef6(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx6("div", { ref, className: clsx6("text-sm", className), ...props, children });
  }
);
AlertDescription.displayName = "AlertDescription";

// src/components/AlertDialog.tsx
import clsx7 from "clsx";
import { forwardRef as forwardRef7, useEffect as useEffect2, useRef } from "react";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var AlertDialog = forwardRef7(
  ({ open, onClose, title, description, actions, children, className, ...props }, ref) => {
    const dialogRef = useRef(null);
    const internalRef = ref || dialogRef;
    useEffect2(() => {
      const dialog = internalRef.current;
      if (!dialog) return;
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }, [open, internalRef]);
    const handleBackdropClick = (e) => {
      const dialog = e.currentTarget;
      const rect = dialog.getBoundingClientRect();
      const isInDialog = rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        onClose?.();
      }
    };
    return /* @__PURE__ */ jsxs7(
      "dialog",
      {
        ref: internalRef,
        className: clsx7("modal", className),
        onClick: handleBackdropClick,
        ...props,
        children: [
          /* @__PURE__ */ jsxs7("div", { className: "modal-box", children: [
            title && /* @__PURE__ */ jsx7("h3", { className: "text-lg font-bold", children: title }),
            description && /* @__PURE__ */ jsx7("p", { className: "py-4", children: description }),
            children,
            actions && /* @__PURE__ */ jsx7("div", { className: "modal-action", children: actions })
          ] }),
          /* @__PURE__ */ jsx7("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ jsx7("button", { type: "button", onClick: onClose, children: "close" }) })
        ]
      }
    );
  }
);
AlertDialog.displayName = "AlertDialog";

// src/components/Avatar.tsx
import clsx8 from "clsx";
import React8, { forwardRef as forwardRef8 } from "react";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var sizeClasses4 = {
  xs: "w-8",
  sm: "w-12",
  md: "w-16",
  lg: "w-24",
  xl: "w-32"
};
var sizeFontClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-4xl"
};
var shapeClasses2 = {
  circle: "rounded-full",
  rounded: "rounded-xl",
  square: "rounded-none",
  squircle: "mask mask-squircle",
  hexagon: "mask mask-hexagon",
  triangle: "mask mask-triangle"
};
var ringColorClasses = {
  default: "ring-base-content",
  neutral: "ring-neutral",
  primary: "ring-primary",
  secondary: "ring-secondary",
  accent: "ring-accent",
  info: "ring-info",
  success: "ring-success",
  warning: "ring-warning",
  error: "ring-error"
};
var placeholderColorClasses = {
  default: "bg-neutral text-neutral-content",
  neutral: "bg-neutral text-neutral-content",
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  info: "bg-info text-info-content",
  success: "bg-success text-success-content",
  warning: "bg-warning text-warning-content",
  error: "bg-error text-error-content"
};
var Avatar = forwardRef8(
  ({
    src,
    alt = "",
    size = "md",
    status,
    fallback,
    shape = "circle",
    ring = false,
    ringColor = "default",
    ringOffset = false,
    placeholderColor = "default",
    className,
    ...props
  }, ref) => {
    const isPlaceholder = !src;
    const ringClasses = ring ? clsx8("ring", ringColorClasses[ringColor], ringOffset && "ring-offset ring-offset-base-100") : "";
    const placeholderClasses = isPlaceholder ? placeholderColorClasses[placeholderColor] : "";
    return /* @__PURE__ */ jsx8(
      "div",
      {
        ref,
        className: clsx8(
          "avatar",
          status === "online" && "avatar-online",
          status === "offline" && "avatar-offline",
          isPlaceholder && "avatar-placeholder",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx8(
          "div",
          {
            className: clsx8(
              sizeClasses4[size],
              shapeClasses2[shape],
              // Directly use shape prop
              ringClasses,
              isPlaceholder && placeholderClasses
            ),
            children: src ? /* @__PURE__ */ jsx8("img", { src, alt }) : /* @__PURE__ */ jsx8("span", { className: sizeFontClasses[size], children: fallback || "?" })
          }
        )
      }
    );
  }
);
Avatar.displayName = "Avatar";
var AvatarGroup = forwardRef8(
  ({ children, max, size = "md", shape = "circle", className, ...props }, ref) => {
    const childArray = React8.Children.toArray(children);
    const displayChildren = max ? childArray.slice(0, max) : childArray;
    const remaining = max && childArray.length > max ? childArray.length - max : 0;
    return /* @__PURE__ */ jsxs8(
      "div",
      {
        ref,
        className: clsx8("avatar-group -space-x-6 rtl:space-x-reverse", className),
        ...props,
        children: [
          displayChildren,
          remaining > 0 && /* @__PURE__ */ jsx8("div", { className: "avatar avatar-placeholder", children: /* @__PURE__ */ jsx8(
            "div",
            {
              className: clsx8(
                sizeClasses4[size],
                shapeClasses2[shape],
                "bg-neutral text-neutral-content"
              ),
              children: /* @__PURE__ */ jsxs8("span", { className: sizeFontClasses[size], children: [
                "+",
                remaining
              ] })
            }
          ) })
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// src/components/Badge.tsx
import clsx9 from "clsx";
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var variantClasses6 = {
  default: "badge-neutral",
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
  ghost: "badge-ghost",
  outline: "badge-outline"
};
var sizeClasses5 = {
  xs: "badge-xs",
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg"
};
var Badge = forwardRef9(
  ({ variant = "default", size = "md", children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx9(
      "span",
      {
        ref,
        className: clsx9("badge", variantClasses6[variant], sizeClasses5[size], className),
        ...props,
        children
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Breadcrumb.tsx
import clsx10 from "clsx";
import { forwardRef as forwardRef10 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Breadcrumb = forwardRef10(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx10(
      "nav",
      {
        ref,
        "aria-label": "Breadcrumb",
        className: clsx10("breadcrumbs text-sm", className),
        ...props,
        children: /* @__PURE__ */ jsx10("ul", { children })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbItem = forwardRef10(
  ({ href, current, children, className, ...props }, ref) => {
    const content = href && !current ? /* @__PURE__ */ jsx10("a", { href, children }) : children;
    return /* @__PURE__ */ jsx10("li", { ref, className: clsx10(className), ...props, children: content });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// src/components/ButtonGroup.tsx
import clsx11 from "clsx";
import React11, { forwardRef as forwardRef11 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var ButtonGroup = forwardRef11(
  ({ orientation = "horizontal", children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx11(
      "div",
      {
        ref,
        className: clsx11("join", orientation === "vertical" && "join-vertical", className),
        ...props,
        children: React11.Children.map(children, (child) => {
          if (React11.isValidElement(child)) {
            return React11.cloneElement(child, {
              className: clsx11(child.props.className, "join-item")
            });
          }
          return child;
        })
      }
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

// src/components/Calendar.tsx
import clsx12 from "clsx";
import { forwardRef as forwardRef12, useEffect as useEffect3, useState as useState3 } from "react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}
function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}
var Calendar = forwardRef12(
  ({ value, onChange, minDate, maxDate, className, ...props }, ref) => {
    const [currentDate, setCurrentDate] = useState3(value || /* @__PURE__ */ new Date());
    const [viewMonth, setViewMonth] = useState3(currentDate.getMonth());
    const [viewYear, setViewYear] = useState3(currentDate.getFullYear());
    useEffect3(() => {
      if (value) {
        setViewMonth(value.getMonth());
        setViewYear(value.getFullYear());
        setCurrentDate(value);
      }
    }, [value]);
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const handlePrevMonth = () => {
      if (viewMonth === 0) {
        setViewMonth(11);
        setViewYear(viewYear - 1);
      } else {
        setViewMonth(viewMonth - 1);
      }
    };
    const handleNextMonth = () => {
      if (viewMonth === 11) {
        setViewMonth(0);
        setViewYear(viewYear + 1);
      } else {
        setViewMonth(viewMonth + 1);
      }
    };
    const handleDateClick = (day) => {
      const newDate = new Date(viewYear, viewMonth, day);
      if (minDate && newDate < minDate) return;
      if (maxDate && newDate > maxDate) return;
      setCurrentDate(newDate);
      onChange?.(newDate);
    };
    const isDateDisabled = (day) => {
      const date = new Date(viewYear, viewMonth, day);
      if (minDate && date < minDate) return true;
      if (maxDate && date > maxDate) return true;
      return false;
    };
    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }
    return /* @__PURE__ */ jsxs9("div", { ref, className: clsx12("bg-base-100 rounded-lg p-4 shadow-lg", className), ...props, children: [
      /* @__PURE__ */ jsxs9("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx12("button", { onClick: handlePrevMonth, className: "btn btn-ghost btn-sm", children: "\u2039" }),
        /* @__PURE__ */ jsxs9("h3", { className: "text-lg font-bold", children: [
          MONTHS[viewMonth],
          " ",
          viewYear
        ] }),
        /* @__PURE__ */ jsx12("button", { onClick: handleNextMonth, className: "btn btn-ghost btn-sm", children: "\u203A" })
      ] }),
      /* @__PURE__ */ jsx12("div", { className: "mb-2 grid grid-cols-7 gap-1", children: DAYS.map((day) => /* @__PURE__ */ jsx12("div", { className: "text-base-content/70 py-2 text-center text-sm font-medium", children: day }, day)) }),
      /* @__PURE__ */ jsx12("div", { className: "grid grid-cols-7 gap-1", children: calendarDays.map((day, index) => {
        if (day === null) {
          return /* @__PURE__ */ jsx12("div", {}, `empty-${index}`);
        }
        const date = new Date(viewYear, viewMonth, day);
        const isSelected = value && isSameDay(date, value);
        const isToday = isSameDay(date, /* @__PURE__ */ new Date());
        const isDisabled = isDateDisabled(day);
        return /* @__PURE__ */ jsx12(
          "button",
          {
            onClick: () => handleDateClick(day),
            disabled: isDisabled,
            className: clsx12(
              "btn btn-sm",
              isSelected && "btn-primary",
              !isSelected && isToday && "btn-outline",
              !isSelected && !isToday && "btn-ghost",
              isDisabled && "btn-disabled opacity-50"
            ),
            children: day
          },
          day
        );
      }) })
    ] });
  }
);
Calendar.displayName = "Calendar";

// src/components/Card.tsx
import clsx13 from "clsx";
import { forwardRef as forwardRef13 } from "react";
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
var variantClasses7 = {
  default: "bg-base-100",
  bordered: "card-border",
  compact: "card-sm",
  side: "card-side"
};
var Card = forwardRef13(
  ({ variant = "default", imageSrc, imageAlt = "", children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs10(
      "div",
      {
        ref,
        className: clsx13("card shadow-sm", variantClasses7[variant], className),
        ...props,
        children: [
          imageSrc && /* @__PURE__ */ jsx13("figure", { children: /* @__PURE__ */ jsx13("img", { src: imageSrc, alt: imageAlt }) }),
          children
        ]
      }
    );
  }
);
Card.displayName = "Card";
var CardBody = forwardRef13(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx13("div", { ref, className: clsx13("card-body", className), ...props, children });
  }
);
CardBody.displayName = "CardBody";
var CardTitle = forwardRef13(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx13("h2", { ref, className: clsx13("card-title", className), ...props, children });
  }
);
CardTitle.displayName = "CardTitle";
var CardActions = forwardRef13(
  ({ justify = "end", children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx13("div", { ref, className: clsx13("card-actions", `justify-${justify}`, className), ...props, children });
  }
);
CardActions.displayName = "CardActions";

// src/components/Checkbox.tsx
import clsx14 from "clsx";
import { forwardRef as forwardRef14 } from "react";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
var variantClasses8 = {
  primary: "checkbox-primary",
  secondary: "checkbox-secondary",
  accent: "checkbox-accent",
  info: "checkbox-info",
  success: "checkbox-success",
  warning: "checkbox-warning",
  error: "checkbox-error"
};
var sizeClasses6 = {
  xs: "checkbox-xs",
  sm: "checkbox-sm",
  md: "checkbox-md",
  lg: "checkbox-lg"
};
var Checkbox = forwardRef14(
  ({ variant, size = "md", label, indeterminate, className, id, ...props }, ref) => {
    const checkboxId = id || (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    const checkbox = /* @__PURE__ */ jsx14(
      "input",
      {
        ref,
        id: checkboxId,
        type: "checkbox",
        className: clsx14(
          "checkbox",
          variant && variantClasses8[variant],
          sizeClasses6[size],
          className
        ),
        ...props
      }
    );
    if (label) {
      return /* @__PURE__ */ jsxs11("label", { htmlFor: checkboxId, className: "label cursor-pointer justify-start gap-2", children: [
        checkbox,
        /* @__PURE__ */ jsx14("span", { className: "label-text", children: label })
      ] });
    }
    return checkbox;
  }
);
Checkbox.displayName = "Checkbox";

// src/components/Collapsible.tsx
import clsx15 from "clsx";
import { forwardRef as forwardRef15, useState as useState4 } from "react";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
var Collapsible = forwardRef15(
  ({
    defaultOpen = false,
    open: controlledOpen,
    onOpenChange,
    trigger,
    children,
    className,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = useState4(defaultOpen);
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const handleToggle = () => {
      const newOpen = !isOpen;
      if (controlledOpen === void 0) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };
    return /* @__PURE__ */ jsxs12("div", { ref, className: clsx15("collapse", isOpen && "collapse-open", className), ...props, children: [
      /* @__PURE__ */ jsx15("div", { className: "collapse-title", onClick: handleToggle, role: "button", tabIndex: 0, children: trigger }),
      /* @__PURE__ */ jsx15("div", { className: "collapse-content", children })
    ] });
  }
);
Collapsible.displayName = "Collapsible";

// src/components/Combobox.tsx
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx16 from "clsx";
import { forwardRef as forwardRef16, useCallback as useCallback2, useEffect as useEffect4, useRef as useRef2, useState as useState5 } from "react";
import { jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
var Combobox = forwardRef16(
  ({
    variant = "bordered",
    options,
    value,
    onChange,
    placeholder = "Select option...",
    searchPlaceholder = "Search...",
    emptyText = "No results found.",
    className,
    disabled = false,
    id,
    label,
    error,
    helperText
  }, ref) => {
    const [isOpen, setIsOpen] = useState5(false);
    const [searchTerm, setSearchTerm] = useState5("");
    const [position, setPosition] = useState5("bottom");
    const containerRef = useRef2(null);
    const triggerRef = useRef2(null);
    const dropdownRef = useRef2(null);
    const searchInputRef = useRef2(null);
    const comboboxId = id || `combobox-${Math.random().toString(36).substr(2, 9)}`;
    const filteredOptions = options.filter(
      (option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const selectedOption = options.find((opt) => opt.value === value);
    const calculatePosition = useCallback2(() => {
      if (!triggerRef.current) return;
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = 300;
      const sideOffset = 4;
      const spaceBelow = viewportHeight - triggerRect.bottom - sideOffset;
      const spaceAbove = triggerRect.top - sideOffset;
      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }, []);
    useEffect4(() => {
      if (isOpen) {
        calculatePosition();
        window.addEventListener("resize", calculatePosition);
        window.addEventListener("scroll", calculatePosition, true);
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
        return () => {
          window.removeEventListener("resize", calculatePosition);
          window.removeEventListener("scroll", calculatePosition, true);
        };
      }
    }, [isOpen, calculatePosition]);
    useEffect4(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    useEffect4(() => {
      const handleKeyDown = (event) => {
        if (!isOpen) return;
        if (event.key === "Escape") {
          setIsOpen(false);
          setSearchTerm("");
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);
    const handleSelect = (optionValue) => {
      const newValue = optionValue === value ? "" : optionValue;
      onChange?.(newValue);
      setSearchTerm("");
      setIsOpen(false);
    };
    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        if (isOpen) {
          setSearchTerm("");
        }
      }
    };
    const dropdownContent = /* @__PURE__ */ jsxs13(
      "div",
      {
        ref: containerRef,
        className: clsx16(
          "dropdown w-full",
          isOpen && "dropdown-open",
          variant !== "floating" && className
        ),
        children: [
          /* @__PURE__ */ jsxs13(
            "button",
            {
              ref: (node) => {
                triggerRef.current = node;
                if (typeof ref === "function") {
                  ref(node);
                } else if (ref) {
                  ref.current = node;
                }
              },
              id: comboboxId,
              type: "button",
              role: "combobox",
              "aria-expanded": isOpen,
              "aria-haspopup": "listbox",
              "aria-controls": `${comboboxId}-listbox`,
              disabled,
              onClick: handleToggle,
              className: clsx16(
                "btn btn-outline w-full justify-between font-normal",
                !selectedOption && "text-base-content/50",
                disabled && "btn-disabled",
                error && "btn-error"
              ),
              children: [
                /* @__PURE__ */ jsx16("span", { className: "truncate", children: selectedOption?.label || placeholder }),
                /* @__PURE__ */ jsx16(
                  ChevronDownIcon,
                  {
                    className: clsx16(
                      "h-5 w-5 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )
                  }
                )
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxs13(
            "div",
            {
              ref: dropdownRef,
              className: clsx16(
                "dropdown-content bg-base-100 rounded-box border-base-300 z-50 w-full border shadow-lg",
                position === "bottom" ? "mt-1" : "bottom-full mb-1"
              ),
              style: position === "top" ? { bottom: "100%", top: "auto" } : void 0,
              children: [
                /* @__PURE__ */ jsx16("div", { className: "border-base-300 border-b p-2", children: /* @__PURE__ */ jsx16(
                  "input",
                  {
                    ref: searchInputRef,
                    type: "text",
                    placeholder: searchPlaceholder,
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    className: "input input-sm input-bordered w-full"
                  }
                ) }),
                /* @__PURE__ */ jsx16(
                  "ul",
                  {
                    className: "menu max-h-60 w-full flex-col flex-nowrap overflow-y-auto p-2",
                    role: "listbox",
                    children: filteredOptions.length === 0 ? /* @__PURE__ */ jsx16("li", { className: "disabled w-full", children: /* @__PURE__ */ jsx16("span", { className: "text-base-content/50 w-full text-center", children: emptyText }) }) : filteredOptions.map((option) => /* @__PURE__ */ jsx16(
                      "li",
                      {
                        role: "option",
                        "aria-selected": option.value === value,
                        className: "w-full",
                        children: /* @__PURE__ */ jsxs13(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleSelect(option.value),
                            disabled: option.disabled,
                            className: clsx16(
                              "flex w-full items-center justify-between",
                              option.value === value && "active"
                            ),
                            children: [
                              /* @__PURE__ */ jsx16("span", { className: "truncate", children: option.label }),
                              option.value === value && /* @__PURE__ */ jsx16(CheckIcon, { className: "h-4 w-4" })
                            ]
                          }
                        )
                      },
                      option.value
                    ))
                  }
                )
              ]
            }
          )
        ]
      }
    );
    if (variant === "floating") {
      return /* @__PURE__ */ jsxs13("div", { className: clsx16("form-control w-full", className), children: [
        /* @__PURE__ */ jsxs13("label", { className: "floating-label", children: [
          /* @__PURE__ */ jsx16("span", { children: label }),
          dropdownContent
        ] }),
        error && /* @__PURE__ */ jsx16("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ jsx16("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return dropdownContent;
  }
);
Combobox.displayName = "Combobox";

// src/components/Command.tsx
import clsx17 from "clsx";
import { forwardRef as forwardRef17, useState as useState6 } from "react";
import { jsx as jsx17, jsxs as jsxs14 } from "react/jsx-runtime";
var Command = forwardRef17(
  ({ value, onValueChange, placeholder = "Type a command...", children, className, ...props }, ref) => {
    const [searchValue, setSearchValue] = useState6(value || "");
    const handleSearchChange = (e) => {
      const newValue = e.target.value;
      setSearchValue(newValue);
      onValueChange?.(newValue);
    };
    return /* @__PURE__ */ jsxs14(
      "div",
      {
        ref,
        className: clsx17("bg-base-100 overflow-hidden rounded-lg shadow-lg", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx17("div", { className: "border-base-300 border-b p-3", children: /* @__PURE__ */ jsx17(
            "input",
            {
              type: "text",
              value: searchValue,
              onChange: handleSearchChange,
              placeholder,
              className: "input input-ghost w-full focus:outline-none"
            }
          ) }),
          /* @__PURE__ */ jsx17("div", { className: "max-h-75 overflow-y-auto p-2", children })
        ]
      }
    );
  }
);
Command.displayName = "Command";
var CommandGroup = forwardRef17(
  ({ heading, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs14("div", { ref, className: clsx17("py-2", className), ...props, children: [
      heading && /* @__PURE__ */ jsx17("div", { className: "text-base-content/70 px-2 py-1.5 text-xs font-semibold", children: heading }),
      /* @__PURE__ */ jsx17("div", { className: "space-y-1", children })
    ] });
  }
);
CommandGroup.displayName = "CommandGroup";
var CommandItem = forwardRef17(
  ({ value, onSelect, disabled, children, className, ...props }, ref) => {
    const handleClick = () => {
      if (value && !disabled) {
        onSelect?.(value);
      }
    };
    return /* @__PURE__ */ jsx17(
      "button",
      {
        ref,
        type: "button",
        onClick: handleClick,
        disabled,
        className: clsx17(
          "w-full rounded-md px-2 py-1.5 text-left",
          "hover:bg-base-200 focus:bg-base-200",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props,
        children
      }
    );
  }
);
CommandItem.displayName = "CommandItem";

// src/components/ContextMenu.tsx
import clsx18 from "clsx";
import { forwardRef as forwardRef18, useEffect as useEffect5, useRef as useRef3, useState as useState7 } from "react";
import { jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
var ContextMenu = forwardRef18(
  ({ items, trigger, children, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState7(false);
    const [position, setPosition] = useState7({ x: 0, y: 0 });
    const menuRef = useRef3(null);
    useEffect5(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen]);
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
    };
    const handleItemClick = (item) => {
      if (!item.disabled && item.onClick) {
        item.onClick();
        setIsOpen(false);
      }
    };
    return /* @__PURE__ */ jsxs15(
      "div",
      {
        ref,
        onContextMenu: handleContextMenu,
        className: clsx18("relative", className),
        ...props,
        children: [
          trigger,
          isOpen && /* @__PURE__ */ jsx18(
            "ul",
            {
              ref: menuRef,
              className: "menu bg-base-100 rounded-box absolute z-100 min-w-50 shadow-lg",
              style: { left: position.x, top: position.y },
              children: items.map((item, index) => {
                if (item.separator) {
                  return /* @__PURE__ */ jsx18("li", { className: "menu-title" }, index);
                }
                return /* @__PURE__ */ jsx18("li", { children: /* @__PURE__ */ jsxs15(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleItemClick(item),
                    disabled: item.disabled,
                    className: clsx18("flex items-center gap-2"),
                    children: [
                      item.icon && /* @__PURE__ */ jsx18("span", { children: item.icon }),
                      /* @__PURE__ */ jsx18("span", { children: item.label })
                    ]
                  }
                ) }, index);
              })
            }
          )
        ]
      }
    );
  }
);
ContextMenu.displayName = "ContextMenu";

// src/components/DataTable.tsx
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx20 from "clsx";
import React19, { forwardRef as forwardRef20, useCallback as useCallback3, useMemo, useState as useState8 } from "react";

// src/components/Pagination.tsx
import clsx19 from "clsx";
import { forwardRef as forwardRef19 } from "react";
import { jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
function generatePaginationRange(current, total, siblings) {
  const range = [];
  range.push(1);
  const leftSibling = Math.max(current - siblings, 2);
  const rightSibling = Math.min(current + siblings, total - 1);
  if (leftSibling > 2) {
    range.push("...");
  }
  for (let i = leftSibling; i <= rightSibling; i++) {
    range.push(i);
  }
  if (rightSibling < total - 1) {
    range.push("...");
  }
  if (total > 1) {
    range.push(total);
  }
  return range;
}
var Pagination = forwardRef19(
  ({ currentPage, totalPages, onChange, siblingCount = 1, className, ...props }, ref) => {
    const pages = generatePaginationRange(currentPage, totalPages, siblingCount);
    const handlePrevious = () => {
      if (currentPage > 1) {
        onChange(currentPage - 1);
      }
    };
    const handleNext = () => {
      if (currentPage < totalPages) {
        onChange(currentPage + 1);
      }
    };
    const handlePageClick = (page) => {
      onChange(page);
    };
    return /* @__PURE__ */ jsxs16("div", { ref, className: clsx19("join", className), ...props, children: [
      /* @__PURE__ */ jsx19(
        "button",
        {
          className: "join-item btn",
          onClick: handlePrevious,
          disabled: currentPage === 1,
          "aria-label": "Previous page",
          children: "\xAB"
        }
      ),
      pages.map((page, index) => {
        if (page === "...") {
          return /* @__PURE__ */ jsx19("button", { className: "join-item btn btn-disabled", children: "..." }, `ellipsis-${index}`);
        }
        const pageNumber = page;
        return /* @__PURE__ */ jsx19(
          "button",
          {
            className: clsx19("join-item btn", currentPage === pageNumber && "btn-active"),
            onClick: () => handlePageClick(pageNumber),
            "aria-label": `Page ${pageNumber}`,
            "aria-current": currentPage === pageNumber ? "page" : void 0,
            children: pageNumber
          },
          pageNumber
        );
      }),
      /* @__PURE__ */ jsx19(
        "button",
        {
          className: "join-item btn",
          onClick: handleNext,
          disabled: currentPage === totalPages,
          "aria-label": "Next page",
          children: "\xBB"
        }
      )
    ] });
  }
);
Pagination.displayName = "Pagination";

// src/components/DataTable.tsx
import { jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
var SortIcon = ({
  direction,
  active
}) => {
  const activeClass = active ? "text-primary" : "text-base-content/40";
  if (direction === "both") {
    return /* @__PURE__ */ jsxs17("div", { className: "flex flex-col -space-y-1", children: [
      /* @__PURE__ */ jsx20("svg", { className: clsx20("h-3 w-3", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx20("path", { d: "M7 14l5-5 5 5H7z" }) }),
      /* @__PURE__ */ jsx20("svg", { className: clsx20("h-3 w-3", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx20("path", { d: "M7 10l5 5 5-5H7z" }) })
    ] });
  }
  if (direction === "asc") {
    return /* @__PURE__ */ jsx20("svg", { className: clsx20("h-4 w-4", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx20("path", { d: "M7 14l5-5 5 5H7z" }) });
  }
  return /* @__PURE__ */ jsx20("svg", { className: clsx20("h-4 w-4", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx20("path", { d: "M7 10l5 5 5-5H7z" }) });
};
var ExpandIcon = ({ expanded }) => /* @__PURE__ */ jsx20(
  "svg",
  {
    className: clsx20("h-5 w-5 transition-transform duration-200", expanded && "rotate-180"),
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx20("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
  }
);
var sizeClasses7 = {
  xs: "table-xs",
  sm: "table-sm",
  md: "table-md",
  lg: "table-lg"
};
var SortableDataTable = forwardRef20(
  ({
    data,
    columns,
    getRowKey,
    size = "md",
    zebra = false,
    pinRows = false,
    pinCols = false,
    expandable = false,
    renderExpandedRow,
    defaultExpandedKeys = [],
    expandedKeys: controlledExpandedKeys,
    onExpandedChange,
    defaultSort = { column: null, direction: null },
    sortState: controlledSortState,
    onSortChange,
    loading = false,
    emptyMessage = "No data available",
    className,
    tableClassName,
    headerClassName,
    rowClassName,
    sortAscIcon,
    sortDescIcon,
    sortBothIcon,
    expandIcon,
    pagination = false,
    pageSize: controlledPageSize = 10,
    currentPage: controlledCurrentPage,
    onPageChange,
    defaultPage = 1,
    paginationSiblingCount = 1,
    paginationClassName,
    paginationPosition = "bottom",
    paginationVariant = "numbered",
    pageSizeOptions = [10, 20, 30, 50],
    onPageSizeChange,
    ...props
  }, ref) => {
    const [internalExpandedKeys, setInternalExpandedKeys] = useState8(defaultExpandedKeys);
    const [internalSortState, setInternalSortState] = useState8(defaultSort);
    const [internalCurrentPage, setInternalCurrentPage] = useState8(defaultPage);
    const [internalPageSize, setInternalPageSize] = useState8(controlledPageSize);
    const expandedKeys = controlledExpandedKeys ?? internalExpandedKeys;
    const sortState = controlledSortState ?? internalSortState;
    const currentPage = controlledCurrentPage ?? internalCurrentPage;
    const pageSize = onPageSizeChange ? controlledPageSize : internalPageSize;
    const handleExpandToggle = useCallback3(
      (key) => {
        const newKeys = expandedKeys.includes(key) ? expandedKeys.filter((k) => k !== key) : [...expandedKeys, key];
        if (controlledExpandedKeys === void 0) {
          setInternalExpandedKeys(newKeys);
        }
        onExpandedChange?.(newKeys);
      },
      [expandedKeys, controlledExpandedKeys, onExpandedChange]
    );
    const handleSortClick = useCallback3(
      (columnKey) => {
        let newDirection = "asc";
        if (sortState.column === columnKey) {
          if (sortState.direction === "asc") {
            newDirection = "desc";
          } else if (sortState.direction === "desc") {
            newDirection = null;
          }
        }
        const newState = {
          column: newDirection ? columnKey : null,
          direction: newDirection
        };
        if (controlledSortState === void 0) {
          setInternalSortState(newState);
        }
        onSortChange?.(newState);
      },
      [sortState, controlledSortState, onSortChange]
    );
    const sortedData = useMemo(() => {
      if (!sortState.column || !sortState.direction) {
        return data;
      }
      const column = columns.find((col) => col.key === sortState.column);
      if (!column) return data;
      const sorted = [...data].sort((a, b) => {
        if (column.sortFn) {
          return column.sortFn(a, b);
        }
        const aVal = a[sortState.column];
        const bVal = b[sortState.column];
        if (aVal == null && bVal == null) return 0;
        if (aVal == null) return 1;
        if (bVal == null) return -1;
        if (typeof aVal === "number" && typeof bVal === "number") {
          return aVal - bVal;
        }
        return String(aVal).localeCompare(String(bVal));
      });
      return sortState.direction === "desc" ? sorted.reverse() : sorted;
    }, [data, sortState, columns]);
    const totalPages = useMemo(() => {
      if (!pagination || pageSize <= 0) return 1;
      return Math.ceil(sortedData.length / pageSize);
    }, [pagination, sortedData.length, pageSize]);
    const handlePageChange = useCallback3(
      (page) => {
        if (controlledCurrentPage === void 0) {
          setInternalCurrentPage(page);
        }
        onPageChange?.(page);
      },
      [controlledCurrentPage, onPageChange]
    );
    const handlePageSizeChange = useCallback3(
      (newPageSize) => {
        if (onPageSizeChange) {
          onPageSizeChange(newPageSize);
        } else {
          setInternalPageSize(newPageSize);
        }
        if (controlledCurrentPage === void 0) {
          setInternalCurrentPage(1);
        }
        onPageChange?.(1);
      },
      [onPageSizeChange, controlledCurrentPage, onPageChange]
    );
    const paginatedData = useMemo(() => {
      if (!pagination) return sortedData;
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return sortedData.slice(startIndex, endIndex);
    }, [pagination, sortedData, currentPage, pageSize]);
    const recordRange = useMemo(() => {
      if (!pagination) return { start: 1, end: sortedData.length, total: sortedData.length };
      const start = (currentPage - 1) * pageSize + 1;
      const end = Math.min(currentPage * pageSize, sortedData.length);
      return { start, end, total: sortedData.length };
    }, [pagination, currentPage, pageSize, sortedData.length]);
    const getRowClass = (item, index) => {
      if (typeof rowClassName === "function") {
        return rowClassName(item, index);
      }
      return rowClassName;
    };
    const alignmentClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    };
    const totalColumns = expandable ? columns.length + 1 : columns.length;
    const renderSortIcon = (direction, active) => {
      if (direction === "asc" && sortAscIcon) {
        return sortAscIcon;
      }
      if (direction === "desc" && sortDescIcon) {
        return sortDescIcon;
      }
      if (direction === "both" && sortBothIcon) {
        return sortBothIcon;
      }
      return /* @__PURE__ */ jsx20(SortIcon, { direction, active });
    };
    const renderExpandIcon = (expanded) => {
      if (expandIcon) {
        return expandIcon(expanded);
      }
      return /* @__PURE__ */ jsx20(ExpandIcon, { expanded });
    };
    const renderNumberedPagination = () => {
      if (!pagination || totalPages <= 1) return null;
      return /* @__PURE__ */ jsx20("div", { className: clsx20("flex justify-center", paginationClassName), children: /* @__PURE__ */ jsx20(
        Pagination,
        {
          currentPage,
          totalPages,
          onChange: handlePageChange,
          siblingCount: paginationSiblingCount
        }
      ) });
    };
    const renderSimplePagination = () => {
      if (!pagination) return null;
      return /* @__PURE__ */ jsxs17("div", { className: clsx20("flex items-center justify-between", paginationClassName), children: [
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx20(
            "select",
            {
              className: "select select-bordered select-sm",
              value: pageSize,
              onChange: (e) => handlePageSizeChange(Number(e.target.value)),
              "aria-label": "Rows per page",
              children: pageSizeOptions.map((option) => /* @__PURE__ */ jsx20("option", { value: option, children: option }, option))
            }
          ),
          /* @__PURE__ */ jsxs17("span", { className: "text-base-content/70 text-sm", children: [
            "of ",
            recordRange.total,
            " records"
          ] })
        ] }),
        /* @__PURE__ */ jsxs17("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx20(
            "button",
            {
              type: "button",
              className: "btn btn-ghost btn-sm btn-square",
              onClick: () => handlePageChange(currentPage - 1),
              disabled: currentPage === 1,
              "aria-label": "Previous page",
              children: /* @__PURE__ */ jsx20(ChevronLeftIcon, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsx20(
            "button",
            {
              type: "button",
              className: "btn btn-ghost btn-sm btn-square",
              onClick: () => handlePageChange(currentPage + 1),
              disabled: currentPage >= totalPages,
              "aria-label": "Next page",
              children: /* @__PURE__ */ jsx20(ChevronRightIcon, { className: "h-5 w-5" })
            }
          )
        ] })
      ] });
    };
    const renderPagination = () => {
      if (paginationVariant === "simple") {
        return renderSimplePagination();
      }
      return renderNumberedPagination();
    };
    return /* @__PURE__ */ jsxs17("div", { ref, className: clsx20("w-full", className), ...props, children: [
      pagination && (paginationPosition === "top" || paginationPosition === "both") && /* @__PURE__ */ jsx20("div", { className: "mb-4", children: renderPagination() }),
      /* @__PURE__ */ jsx20("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs17(
        "table",
        {
          className: clsx20(
            "table",
            sizeClasses7[size],
            zebra && "table-zebra",
            pinRows && "table-pin-rows",
            pinCols && "table-pin-cols",
            tableClassName
          ),
          children: [
            /* @__PURE__ */ jsx20("thead", { children: /* @__PURE__ */ jsxs17("tr", { className: headerClassName, children: [
              columns.map((column) => /* @__PURE__ */ jsx20(
                "th",
                {
                  className: clsx20(
                    alignmentClasses[column.headerAlign || "left"],
                    column.sortable && "hover:bg-base-200 cursor-pointer select-none"
                  ),
                  style: { width: column.width },
                  onClick: column.sortable ? () => handleSortClick(column.key) : void 0,
                  children: /* @__PURE__ */ jsxs17(
                    "div",
                    {
                      className: clsx20(
                        "flex items-center gap-2",
                        column.headerAlign === "center" && "justify-center",
                        column.headerAlign === "right" && "justify-end"
                      ),
                      children: [
                        /* @__PURE__ */ jsx20("span", { children: column.header }),
                        column.sortable && renderSortIcon(
                          sortState.column === column.key && sortState.direction ? sortState.direction : "both",
                          sortState.column === column.key
                        )
                      ]
                    }
                  )
                },
                column.key
              )),
              expandable && /* @__PURE__ */ jsx20("th", { className: "w-12" })
            ] }) }),
            /* @__PURE__ */ jsx20("tbody", { children: loading ? /* @__PURE__ */ jsx20("tr", { children: /* @__PURE__ */ jsx20("td", { colSpan: totalColumns, className: "py-8 text-center", children: /* @__PURE__ */ jsx20("span", { className: "loading loading-spinner loading-md" }) }) }) : sortedData.length === 0 ? /* @__PURE__ */ jsx20("tr", { children: /* @__PURE__ */ jsx20("td", { colSpan: totalColumns, className: "text-base-content/60 py-8 text-center", children: emptyMessage }) }) : paginatedData.map((item, index) => {
              const rowKey = getRowKey(item);
              const isExpanded = expandedKeys.includes(rowKey);
              const actualIndex = pagination ? (currentPage - 1) * pageSize + index : index;
              return /* @__PURE__ */ jsxs17(React19.Fragment, { children: [
                /* @__PURE__ */ jsxs17(
                  "tr",
                  {
                    className: clsx20(
                      getRowClass(item, actualIndex),
                      isExpanded && "bg-base-200"
                    ),
                    children: [
                      columns.map((column) => /* @__PURE__ */ jsx20(
                        "td",
                        {
                          className: alignmentClasses[column.cellAlign || "left"],
                          children: column.render ? column.render(item, actualIndex) : item[column.key]
                        },
                        column.key
                      )),
                      expandable && /* @__PURE__ */ jsx20("td", { className: "text-center", children: /* @__PURE__ */ jsx20(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-ghost btn-sm btn-square",
                          onClick: () => handleExpandToggle(rowKey),
                          "aria-expanded": isExpanded,
                          "aria-label": isExpanded ? "Collapse row" : "Expand row",
                          children: renderExpandIcon(isExpanded)
                        }
                      ) })
                    ]
                  }
                ),
                expandable && isExpanded && renderExpandedRow && /* @__PURE__ */ jsx20("tr", { className: "bg-base-200/50", children: /* @__PURE__ */ jsx20("td", { colSpan: totalColumns, className: "p-4", children: renderExpandedRow(item) }) })
              ] }, rowKey);
            }) })
          ]
        }
      ) }),
      pagination && (paginationPosition === "bottom" || paginationPosition === "both") && /* @__PURE__ */ jsx20("div", { className: "mt-4", children: renderPagination() })
    ] });
  }
);
SortableDataTable.displayName = "SortableDataTable";

// src/components/DateInput.tsx
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import clsx21 from "clsx";
import { forwardRef as forwardRef21, useCallback as useCallback4, useEffect as useEffect6, useRef as useRef4, useState as useState9 } from "react";
import { jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
var variantClasses9 = {
  bordered: "input-bordered",
  ghost: "input-ghost"
};
var colorClasses3 = {
  default: "",
  neutral: "input-neutral",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error"
};
var sizeClasses8 = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl"
};
var formatPlaceholders = {
  "dd/mm/yyyy": "DD/MM/YYYY",
  "mm/dd/yyyy": "MM/DD/YYYY",
  "yyyy/mm/dd": "YYYY/MM/DD",
  "yyyy-mm-dd": "YYYY-MM-DD"
};
function formatDateToString(date, format) {
  if (!date) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  switch (format) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    case "yyyy/mm/dd":
      return `${year}/${month}/${day}`;
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    default:
      return `${day}/${month}/${year}`;
  }
}
function parseStringToDate(dateString, format) {
  if (!dateString) return null;
  const separator = format.includes("-") ? "-" : "/";
  const parts = dateString.split(separator);
  if (parts.length !== 3) return null;
  let day, month, year;
  switch (format) {
    case "dd/mm/yyyy":
      day = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      year = parseInt(parts[2], 10);
      break;
    case "mm/dd/yyyy":
      month = parseInt(parts[0], 10) - 1;
      day = parseInt(parts[1], 10);
      year = parseInt(parts[2], 10);
      break;
    case "yyyy/mm/dd":
    case "yyyy-mm-dd":
      year = parseInt(parts[0], 10);
      month = parseInt(parts[1], 10) - 1;
      day = parseInt(parts[2], 10);
      break;
    default:
      return null;
  }
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
  if (day < 1 || day > 31 || month < 0 || month > 11 || year < 1e3 || year > 9999) return null;
  const date = new Date(year, month, day);
  if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
    return null;
  }
  return date;
}
var DateInput = forwardRef21(
  ({
    variant = "bordered",
    color = "default",
    size = "md",
    label,
    error,
    helperText,
    value,
    onChange,
    dateFormat = "dd/mm/yyyy",
    minDate,
    maxDate,
    showCalendar = true,
    placeholder,
    className,
    id,
    disabled,
    ...props
  }, ref) => {
    const [inputValue, setInputValue] = useState9("");
    const [isCalendarOpen, setIsCalendarOpen] = useState9(false);
    const containerRef = useRef4(null);
    const inputId = id || (label ? `date-input-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    useEffect6(() => {
      setInputValue(formatDateToString(value || null, dateFormat));
    }, [value, dateFormat]);
    useEffect6(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsCalendarOpen(false);
        }
      };
      if (isCalendarOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isCalendarOpen]);
    const handleInputChange = useCallback4(
      (e) => {
        const newValue = e.target.value;
        const separator = dateFormat.includes("-") ? "-" : "/";
        let formattedValue = newValue.replace(/[^0-9]/g, "");
        const formatParts = dateFormat.split(/[-/]/);
        let result = "";
        let charIndex = 0;
        for (let i = 0; i < formatParts.length && charIndex < formattedValue.length; i++) {
          const partLength = formatParts[i].length;
          const part = formattedValue.slice(charIndex, charIndex + partLength);
          result += part;
          charIndex += partLength;
          if (charIndex < formattedValue.length && i < formatParts.length - 1) {
            result += separator;
          }
        }
        setInputValue(result);
        const parsedDate = parseStringToDate(result, dateFormat);
        if (parsedDate) {
          if (minDate && parsedDate < minDate) return;
          if (maxDate && parsedDate > maxDate) return;
          onChange?.(parsedDate);
        } else if (result === "") {
          onChange?.(null);
        }
      },
      [dateFormat, minDate, maxDate, onChange]
    );
    const handleCalendarSelect = useCallback4(
      (date) => {
        setInputValue(formatDateToString(date, dateFormat));
        onChange?.(date);
        setIsCalendarOpen(false);
      },
      [dateFormat, onChange]
    );
    const toggleCalendar = () => {
      if (!disabled) {
        setIsCalendarOpen(!isCalendarOpen);
      }
    };
    return /* @__PURE__ */ jsxs18("div", { className: "form-control w-full", ref: containerRef, children: [
      label && /* @__PURE__ */ jsx21("label", { className: "label", htmlFor: inputId, children: /* @__PURE__ */ jsx21("span", { className: "label-text font-medium", children: label }) }),
      /* @__PURE__ */ jsxs18("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs18(
          "label",
          {
            className: clsx21(
              "input flex w-full items-center gap-2",
              variantClasses9[variant],
              error ? colorClasses3.error : colorClasses3[color],
              sizeClasses8[size],
              disabled && "input-disabled",
              className
            ),
            children: [
              /* @__PURE__ */ jsx21(
                "input",
                {
                  ref,
                  id: inputId,
                  type: "text",
                  value: inputValue,
                  onChange: handleInputChange,
                  placeholder: placeholder || formatPlaceholders[dateFormat],
                  disabled,
                  className: "grow border-none bg-transparent outline-none",
                  "aria-invalid": error ? "true" : void 0,
                  "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
                  ...props
                }
              ),
              showCalendar && /* @__PURE__ */ jsx21(
                "button",
                {
                  type: "button",
                  onClick: toggleCalendar,
                  disabled,
                  className: "text-base-content/50 hover:text-base-content transition-colors",
                  "aria-label": "Open calendar",
                  children: /* @__PURE__ */ jsx21(CalendarDaysIcon, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        isCalendarOpen && showCalendar && /* @__PURE__ */ jsx21("div", { className: "absolute right-0 z-50 mt-2", children: /* @__PURE__ */ jsx21(
          Calendar,
          {
            value: value || void 0,
            onChange: handleCalendarSelect,
            minDate,
            maxDate
          }
        ) })
      ] }),
      error && /* @__PURE__ */ jsx21("label", { className: "label", id: `${inputId}-error`, children: /* @__PURE__ */ jsx21("span", { className: "label-text-alt text-error", children: error }) }),
      !error && helperText && /* @__PURE__ */ jsx21("label", { className: "label", id: `${inputId}-helper`, children: /* @__PURE__ */ jsx21("span", { className: "label-text-alt", children: helperText }) })
    ] });
  }
);
DateInput.displayName = "DateInput";

// src/components/DatePicker.tsx
import clsx22 from "clsx";
import { forwardRef as forwardRef22 } from "react";
import { jsx as jsx22, jsxs as jsxs19 } from "react/jsx-runtime";
var variantClasses10 = {
  bordered: "input-bordered",
  ghost: "input-ghost",
  floating: ""
};
var colorClasses4 = {
  default: "",
  primary: "input-primary",
  secondary: "input-secondary",
  accent: "input-accent",
  info: "input-info",
  success: "input-success",
  warning: "input-warning",
  error: "input-error"
};
var sizeClasses9 = {
  xs: "input-xs",
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
  xl: "input-xl"
};
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function parseDate(dateString) {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}
var DatePicker = forwardRef22(
  ({
    variant = "bordered",
    color,
    size = "md",
    value,
    onChange,
    min,
    max,
    label,
    error,
    helperText,
    className,
    id,
    ...props
  }, ref) => {
    const inputId = id || (label ? `datepicker-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    const handleChange = (e) => {
      const date = parseDate(e.target.value);
      onChange?.(date);
    };
    const inputClasses = clsx22(
      "input w-full",
      variant !== "floating" && variantClasses10[variant],
      error ? colorClasses4.error : color && colorClasses4[color],
      sizeClasses9[size],
      className
    );
    if (variant === "floating") {
      return /* @__PURE__ */ jsxs19("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ jsxs19("label", { className: "floating-label", children: [
          /* @__PURE__ */ jsx22("span", { children: label }),
          /* @__PURE__ */ jsx22(
            "input",
            {
              ref,
              id: inputId,
              type: "date",
              value: value ? formatDate(value) : "",
              onChange: handleChange,
              min: min ? formatDate(min) : void 0,
              max: max ? formatDate(max) : void 0,
              className: inputClasses,
              "aria-invalid": error ? "true" : void 0,
              ...props
            }
          )
        ] }),
        error && /* @__PURE__ */ jsx22("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ jsx22("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return /* @__PURE__ */ jsx22(
      "input",
      {
        ref,
        id: inputId,
        type: "date",
        value: value ? formatDate(value) : "",
        onChange: handleChange,
        min: min ? formatDate(min) : void 0,
        max: max ? formatDate(max) : void 0,
        className: inputClasses,
        ...props
      }
    );
  }
);
DatePicker.displayName = "DatePicker";

// src/components/Dialog.tsx
import clsx23 from "clsx";
import { forwardRef as forwardRef23, useEffect as useEffect7, useRef as useRef5 } from "react";
import { jsx as jsx23, jsxs as jsxs20 } from "react/jsx-runtime";
var verticalPositionClasses = {
  top: "modal-top",
  middle: "modal-middle",
  bottom: "modal-bottom"
};
var horizontalPositionClasses = {
  start: "modal-start",
  center: "",
  end: "modal-end"
};
var sizeClasses10 = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  full: "max-w-full w-full h-full rounded-none"
};
var DialogTitle = forwardRef23(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx23("h3", { ref, className: clsx23("text-lg font-bold", className), ...props, children });
  }
);
DialogTitle.displayName = "DialogTitle";
var DialogDescription = forwardRef23(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx23("p", { ref, className: clsx23("py-4", className), ...props, children });
  }
);
DialogDescription.displayName = "DialogDescription";
var DialogActions = forwardRef23(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx23("div", { ref, className: clsx23("modal-action", className), ...props, children });
  }
);
DialogActions.displayName = "DialogActions";
var DialogCloseButton = forwardRef23(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx23(
      "button",
      {
        ref,
        type: "button",
        className: clsx23("btn btn-sm btn-circle btn-ghost absolute top-2 right-2", className),
        "aria-label": "Close dialog",
        ...props,
        children: children || "\u2715"
      }
    );
  }
);
DialogCloseButton.displayName = "DialogCloseButton";
var Dialog = forwardRef23(
  ({
    open,
    onClose,
    position = "middle",
    horizontalPosition = "center",
    closeOnClickOutside = true,
    closeOnEscape = true,
    showCloseButton = false,
    closeButtonContent,
    size,
    maxWidth,
    responsive = false,
    children,
    className,
    ...props
  }, ref) => {
    const dialogRef = useRef5(null);
    const internalRef = ref || dialogRef;
    useEffect7(() => {
      const dialog = internalRef.current;
      if (!dialog) return;
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }, [open, internalRef]);
    useEffect7(() => {
      const dialog = internalRef.current;
      if (!dialog || !open) return;
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          if (closeOnEscape) {
            e.preventDefault();
            onClose?.();
          }
        }
      };
      dialog.addEventListener("keydown", handleKeyDown);
      return () => dialog.removeEventListener("keydown", handleKeyDown);
    }, [open, closeOnEscape, onClose, internalRef]);
    const handleBackdropClick = (e) => {
      if (!closeOnClickOutside) return;
      const dialog = e.currentTarget;
      const rect = dialog.getBoundingClientRect();
      const isInDialog = rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        onClose?.();
      }
    };
    const modalBoxClasses = clsx23(
      "modal-box overflow-x-hidden",
      maxWidth || size && sizeClasses10[size],
      responsive && "sm:modal-middle modal-bottom"
    );
    const modalClasses = clsx23(
      "modal",
      !responsive && verticalPositionClasses[position],
      horizontalPositionClasses[horizontalPosition],
      responsive && "modal-bottom sm:modal-middle",
      className
    );
    return /* @__PURE__ */ jsxs20("dialog", { ref: internalRef, className: modalClasses, onClick: handleBackdropClick, ...props, children: [
      /* @__PURE__ */ jsxs20("div", { className: modalBoxClasses, children: [
        showCloseButton && /* @__PURE__ */ jsx23(DialogCloseButton, { onClick: onClose, children: closeButtonContent }),
        children
      ] }),
      closeOnClickOutside && /* @__PURE__ */ jsx23("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ jsx23("button", { type: "button", onClick: onClose, children: "close" }) })
    ] });
  }
);
Dialog.displayName = "Dialog";

// src/components/Drawer.tsx
import clsx24 from "clsx";
import { forwardRef as forwardRef24 } from "react";
import { jsx as jsx24, jsxs as jsxs21 } from "react/jsx-runtime";
var Drawer = forwardRef24(
  ({ open, onClose, position = "left", content, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs21(
      "div",
      {
        ref,
        className: clsx24("drawer", position === "right" && "drawer-end", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx24(
            "input",
            {
              type: "checkbox",
              className: "drawer-toggle",
              checked: open,
              onChange: (e) => {
                if (!e.target.checked) {
                  onClose?.();
                }
              },
              readOnly: true
            }
          ),
          /* @__PURE__ */ jsx24("div", { className: "drawer-content", children }),
          /* @__PURE__ */ jsxs21("div", { className: "drawer-side z-40", children: [
            /* @__PURE__ */ jsx24("label", { className: "drawer-overlay", onClick: onClose }),
            content
          ] })
        ]
      }
    );
  }
);
Drawer.displayName = "Drawer";

// src/components/DropdownMenu.tsx
import clsx25 from "clsx";
import { forwardRef as forwardRef25, useEffect as useEffect8, useRef as useRef6, useState as useState10 } from "react";
import { jsx as jsx25, jsxs as jsxs22 } from "react/jsx-runtime";
var positionClasses = {
  top: "dropdown-top",
  bottom: "dropdown-bottom",
  left: "dropdown-left",
  right: "dropdown-right",
  end: "dropdown-end"
};
var Dropdown = forwardRef25(
  ({
    trigger,
    position = "bottom",
    hover = false,
    open,
    onOpenChange,
    children,
    className,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = useState10(false);
    const dropdownRef = useRef6(null);
    const isOpen = open !== void 0 ? open : internalOpen;
    useEffect8(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          if (open === void 0) {
            setInternalOpen(false);
          }
          onOpenChange?.(false);
        }
      };
      if (isOpen && !hover) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, hover, open, onOpenChange]);
    const handleTriggerClick = () => {
      if (!hover) {
        const newOpen = !isOpen;
        if (open === void 0) {
          setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      }
    };
    return /* @__PURE__ */ jsxs22(
      "div",
      {
        ref: dropdownRef,
        className: clsx25(
          "dropdown",
          positionClasses[position],
          hover && "dropdown-hover",
          isOpen && "dropdown-open",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx25("div", { tabIndex: 0, role: "button", onClick: handleTriggerClick, children: trigger }),
          children
        ]
      }
    );
  }
);
Dropdown.displayName = "Dropdown";
var DropdownMenu = forwardRef25(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx25(
      "ul",
      {
        ref,
        tabIndex: 0,
        className: clsx25(
          "dropdown-content menu bg-base-100 rounded-box z-1 w-auto max-w-75 min-w-52 truncate p-2 shadow",
          className
        ),
        ...props,
        children
      }
    );
  }
);
DropdownMenu.displayName = "DropdownMenu";

// src/components/DynamicFormField.tsx
import clsx29 from "clsx";
import { forwardRef as forwardRef29 } from "react";

// ../../node_modules/react-hook-form/dist/index.esm.mjs
import React25 from "react";
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
var isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  if (data instanceof Date) {
    return new Date(data);
  }
  const isFileListInstance = typeof FileList !== "undefined" && data instanceof FileList;
  if (isWeb && (data instanceof Blob || isFileListInstance)) {
    return data;
  }
  const isArray = Array.isArray(data);
  if (!isArray && !(isObject(data) && isPlainObject(data))) {
    return data;
  }
  const copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      copy[key] = cloneObject(data[key]);
    }
  }
  return copy;
}
var isKey = (value) => /^\w*$/.test(value);
var isUndefined = (val) => val === void 0;
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var get = (object, path, defaultValue) => {
  if (!path || !isObject(object)) {
    return defaultValue;
  }
  const result = (isKey(path) ? [path] : stringToPath(path)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], object);
  return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
var isFunction = (value) => typeof value === "function";
var set = (object, path, value) => {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    object[key] = newValue;
    object = object[key];
  }
};
var EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
var VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
var HookFormControlContext = React25.createContext(null);
HookFormControlContext.displayName = "HookFormControlContext";
var useFormControlContext = () => React25.useContext(HookFormControlContext);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React25.useLayoutEffect : React25.useEffect;
function useFormState(props) {
  const formControl = useFormControlContext();
  const { control = formControl, disabled, name, exact } = props || {};
  const [formState, updateFormState] = React25.useState(control._formState);
  const _localProxyFormState = React25.useRef({
    isDirty: false,
    isLoading: false,
    dirtyFields: false,
    touchedFields: false,
    validatingFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  });
  useIsomorphicLayoutEffect(() => control._subscribe({
    name,
    formState: _localProxyFormState.current,
    exact,
    callback: (formState2) => {
      !disabled && updateFormState({
        ...control._formState,
        ...formState2
      });
    }
  }), [name, disabled, exact]);
  React25.useEffect(() => {
    _localProxyFormState.current.isValid && control._setValid(true);
  }, [control]);
  return React25.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2, _internal_visited = /* @__PURE__ */ new WeakSet()) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return Object.is(object1, object2);
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return Object.is(object1.getTime(), object2.getTime());
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
    return true;
  }
  _internal_visited.add(object1);
  _internal_visited.add(object2);
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : !Object.is(val1, val2)) {
        return false;
      }
    }
  }
  return true;
}
function useWatch(props) {
  const formControl = useFormControlContext();
  const { control = formControl, name, defaultValue, disabled, exact, compute } = props || {};
  const _defaultValue = React25.useRef(defaultValue);
  const _compute = React25.useRef(compute);
  const _computeFormValues = React25.useRef(void 0);
  const _prevControl = React25.useRef(control);
  const _prevName = React25.useRef(name);
  _compute.current = compute;
  const [value, updateValue] = React25.useState(() => {
    const defaultValue2 = control._getWatch(name, _defaultValue.current);
    return _compute.current ? _compute.current(defaultValue2) : defaultValue2;
  });
  const getCurrentOutput = React25.useCallback((values) => {
    const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
    return _compute.current ? _compute.current(formValues) : formValues;
  }, [control._formValues, control._names, name]);
  const refreshValue = React25.useCallback((values) => {
    if (!disabled) {
      const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
      if (_compute.current) {
        const computedFormValues = _compute.current(formValues);
        if (!deepEqual(computedFormValues, _computeFormValues.current)) {
          updateValue(computedFormValues);
          _computeFormValues.current = computedFormValues;
        }
      } else {
        updateValue(formValues);
      }
    }
  }, [control._formValues, control._names, disabled, name]);
  useIsomorphicLayoutEffect(() => {
    if (_prevControl.current !== control || !deepEqual(_prevName.current, name)) {
      _prevControl.current = control;
      _prevName.current = name;
      refreshValue();
    }
    return control._subscribe({
      name,
      formState: {
        values: true
      },
      exact,
      callback: (formState) => {
        refreshValue(formState.values);
      }
    });
  }, [control, exact, name, refreshValue]);
  React25.useEffect(() => control._removeUnmounted());
  const controlChanged = _prevControl.current !== control;
  const prevName = _prevName.current;
  const computedOutput = React25.useMemo(() => {
    if (disabled) {
      return null;
    }
    const nameChanged = !controlChanged && !deepEqual(prevName, name);
    const shouldReturnImmediate = controlChanged || nameChanged;
    return shouldReturnImmediate ? getCurrentOutput() : null;
  }, [disabled, controlChanged, name, prevName, getCurrentOutput]);
  return computedOutput !== null ? computedOutput : value;
}
function useController(props) {
  const formControl = useFormControlContext();
  const { name, disabled, control = formControl, shouldUnregister, defaultValue, exact = true } = props;
  const isArrayField = isNameInFieldArray(control._names.array, name);
  const defaultValueMemo = React25.useMemo(() => get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [control, name, defaultValue]);
  const value = useWatch({
    control,
    name,
    defaultValue: defaultValueMemo,
    exact
  });
  const formState = useFormState({
    control,
    name,
    exact
  });
  const _props = React25.useRef(props);
  const _previousNameRef = React25.useRef(void 0);
  const _registerProps = React25.useRef(control.register(name, {
    ...props.rules,
    value,
    ...isBoolean(props.disabled) ? { disabled: props.disabled } : {}
  }));
  _props.current = props;
  const fieldState = React25.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: true,
      get: () => !!get(formState.errors, name)
    },
    isDirty: {
      enumerable: true,
      get: () => !!get(formState.dirtyFields, name)
    },
    isTouched: {
      enumerable: true,
      get: () => !!get(formState.touchedFields, name)
    },
    isValidating: {
      enumerable: true,
      get: () => !!get(formState.validatingFields, name)
    },
    error: {
      enumerable: true,
      get: () => get(formState.errors, name)
    }
  }), [formState, name]);
  const onChange = React25.useCallback((event) => _registerProps.current.onChange({
    target: {
      value: getEventValue(event),
      name
    },
    type: EVENTS.CHANGE
  }), [name]);
  const onBlur = React25.useCallback(() => _registerProps.current.onBlur({
    target: {
      value: get(control._formValues, name),
      name
    },
    type: EVENTS.BLUR
  }), [name, control._formValues]);
  const ref = React25.useCallback((elm) => {
    const field2 = get(control._fields, name);
    if (field2 && field2._f && elm) {
      field2._f.ref = {
        focus: () => isFunction(elm.focus) && elm.focus(),
        select: () => isFunction(elm.select) && elm.select(),
        setCustomValidity: (message) => isFunction(elm.setCustomValidity) && elm.setCustomValidity(message),
        reportValidity: () => isFunction(elm.reportValidity) && elm.reportValidity()
      };
    }
  }, [control._fields, name]);
  const field = React25.useMemo(() => ({
    name,
    value,
    ...isBoolean(disabled) || formState.disabled ? { disabled: formState.disabled || disabled } : {},
    onChange,
    onBlur,
    ref
  }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
  React25.useEffect(() => {
    const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
    const previousName = _previousNameRef.current;
    if (previousName && previousName !== name && !isArrayField) {
      control.unregister(previousName);
    }
    control.register(name, {
      ..._props.current.rules,
      ...isBoolean(_props.current.disabled) ? { disabled: _props.current.disabled } : {}
    });
    const updateMounted = (name2, value2) => {
      const field2 = get(control._fields, name2);
      if (field2 && field2._f) {
        field2._f.mount = value2;
      }
    };
    updateMounted(name, true);
    if (_shouldUnregisterField) {
      const value2 = cloneObject(get(control._options.defaultValues, name, _props.current.defaultValue));
      set(control._defaultValues, name, value2);
      if (isUndefined(get(control._formValues, name))) {
        set(control._formValues, name, value2);
      }
    }
    !isArrayField && control.register(name);
    _previousNameRef.current = name;
    return () => {
      (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
    };
  }, [name, control, isArrayField, shouldUnregister]);
  React25.useEffect(() => {
    control._setDisabledField({
      disabled,
      name
    });
  }, [disabled, name, control]);
  return React25.useMemo(() => ({
    field,
    formState,
    fieldState
  }), [field, formState, fieldState]);
}
var Controller = (props) => props.render(useController(props));
var HookFormContext = React25.createContext(null);
HookFormContext.displayName = "HookFormContext";
var defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};

// src/components/RadioGroup.tsx
import clsx26 from "clsx";
import { createContext, forwardRef as forwardRef26, useContext } from "react";
import { jsx as jsx26, jsxs as jsxs23 } from "react/jsx-runtime";
var RadioGroupContext = createContext(null);
var useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("Radio must be used within RadioGroup");
  }
  return context;
};
var variantClasses11 = {
  primary: "radio-primary",
  secondary: "radio-secondary",
  accent: "radio-accent",
  info: "radio-info",
  success: "radio-success",
  warning: "radio-warning",
  error: "radio-error"
};
var sizeClasses11 = {
  xs: "radio-xs",
  sm: "radio-sm",
  md: "radio-md",
  lg: "radio-lg"
};
var RadioGroup = forwardRef26(
  ({
    name,
    value,
    onChange,
    variant,
    size = "md",
    orientation = "vertical",
    children,
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx26(RadioGroupContext.Provider, { value: { name, value, onChange, variant, size }, children: /* @__PURE__ */ jsx26(
      "div",
      {
        ref,
        className: clsx26(
          "flex",
          orientation === "vertical" ? "flex-col gap-2" : "flex-row gap-4",
          className
        ),
        role: "radiogroup",
        ...props,
        children
      }
    ) });
  }
);
RadioGroup.displayName = "RadioGroup";
var Radio = forwardRef26(
  ({ value, label, className, id, ...props }, ref) => {
    const { name, value: groupValue, onChange, variant, size } = useRadioGroup();
    const radioId = id || `radio-${name}-${value}`;
    const handleChange = (e) => {
      onChange?.(e.target.value);
    };
    const radio = /* @__PURE__ */ jsx26(
      "input",
      {
        ref,
        id: radioId,
        type: "radio",
        name,
        value,
        checked: groupValue === value,
        onChange: handleChange,
        className: clsx26(
          "radio",
          variant && variantClasses11[variant],
          size && sizeClasses11[size],
          className
        ),
        ...props
      }
    );
    if (label) {
      return /* @__PURE__ */ jsxs23("label", { htmlFor: radioId, className: "label cursor-pointer justify-start gap-2", children: [
        radio,
        /* @__PURE__ */ jsx26("span", { className: "label-text", children: label })
      ] });
    }
    return radio;
  }
);
Radio.displayName = "Radio";

// src/components/Select.tsx
import { ChevronDownIcon as ChevronDownIcon2 } from "@heroicons/react/20/solid";
import clsx27 from "clsx";
import { forwardRef as forwardRef27 } from "react";
import { jsx as jsx27, jsxs as jsxs24 } from "react/jsx-runtime";
var variantClasses12 = {
  bordered: "select-bordered",
  ghost: "select-ghost",
  floating: ""
};
var colorClasses5 = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error"
};
var sizeClasses12 = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg"
};
var Select = forwardRef27(
  ({
    variant = "bordered",
    color,
    size = "md",
    options,
    placeholder,
    children,
    className,
    showArrow = true,
    label,
    error,
    helperText,
    id,
    ...props
  }, ref) => {
    const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    const rightPadding = showArrow ? "pr-10" : "pr-4";
    const selectElement = /* @__PURE__ */ jsxs24("div", { className: "relative w-full", children: [
      /* @__PURE__ */ jsxs24(
        "select",
        {
          ref,
          id: selectId,
          className: clsx27(
            "select w-full appearance-none bg-size-[1.5em_1.5em] bg-position-[right_1rem_center] bg-no-repeat",
            "bg-none",
            // Important: Override DaisyUI's default background image
            variant !== "floating" && variantClasses12[variant],
            error ? colorClasses5.error : color && colorClasses5[color],
            sizeClasses12[size],
            rightPadding,
            className
          ),
          style: {
            // Ensure no native arrow shows up in any browser
            backgroundImage: "none !important"
          },
          "aria-invalid": error ? "true" : void 0,
          ...props,
          children: [
            placeholder && /* @__PURE__ */ jsx27("option", { value: "", disabled: true, children: placeholder }),
            options ? options.map((option) => /* @__PURE__ */ jsx27("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)) : children
          ]
        }
      ),
      showArrow && /* @__PURE__ */ jsx27(
        ChevronDownIcon2,
        {
          className: "text-base-content/70 pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2",
          "aria-hidden": "true"
        }
      )
    ] });
    if (variant === "floating") {
      return /* @__PURE__ */ jsxs24("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ jsxs24("label", { className: "floating-label", children: [
          /* @__PURE__ */ jsx27("span", { children: label }),
          selectElement
        ] }),
        error && /* @__PURE__ */ jsx27("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ jsx27("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return selectElement;
  }
);
Select.displayName = "Select";

// src/components/Textarea.tsx
import clsx28 from "clsx";
import { forwardRef as forwardRef28 } from "react";
import { jsx as jsx28, jsxs as jsxs25 } from "react/jsx-runtime";
var variantClasses13 = {
  bordered: "textarea-bordered",
  ghost: "textarea-ghost",
  floating: ""
};
var colorClasses6 = {
  primary: "textarea-primary",
  secondary: "textarea-secondary",
  accent: "textarea-accent",
  info: "textarea-info",
  success: "textarea-success",
  warning: "textarea-warning",
  error: "textarea-error"
};
var sizeClasses13 = {
  xs: "textarea-xs",
  sm: "textarea-sm",
  md: "textarea-md",
  lg: "textarea-lg"
};
var Textarea = forwardRef28(
  ({ variant = "bordered", color, size = "md", label, error, helperText, className, id, ...props }, ref) => {
    const textareaId = id || (label ? `textarea-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    const textareaClasses = clsx28(
      "textarea w-full",
      variant !== "floating" && variantClasses13[variant],
      error ? colorClasses6.error : color && colorClasses6[color],
      sizeClasses13[size],
      className
    );
    if (variant === "floating") {
      return /* @__PURE__ */ jsxs25("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ jsxs25("label", { className: "floating-label", children: [
          /* @__PURE__ */ jsx28("span", { children: label }),
          /* @__PURE__ */ jsx28(
            "textarea",
            {
              ref,
              id: textareaId,
              className: textareaClasses,
              "aria-invalid": error ? "true" : void 0,
              ...props
            }
          )
        ] }),
        error && /* @__PURE__ */ jsx28("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ jsx28("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return /* @__PURE__ */ jsx28("textarea", { ref, id: textareaId, className: textareaClasses, ...props });
  }
);
Textarea.displayName = "Textarea";

// src/components/DynamicFormField.tsx
import { jsx as jsx29, jsxs as jsxs26 } from "react/jsx-runtime";
var FieldWrapper = forwardRef29(
  ({ label, description, error, required, className, children }, ref) => {
    return /* @__PURE__ */ jsxs26("div", { ref, className: clsx29("form-control w-full space-y-1", className), children: [
      label && /* @__PURE__ */ jsxs26("label", { className: "label-text text-sm font-medium", children: [
        label,
        required && /* @__PURE__ */ jsx29("span", { className: "text-error ml-1", children: "*" })
      ] }),
      children,
      error ? /* @__PURE__ */ jsx29("p", { className: "text-error text-sm", role: "alert", children: error }) : description ? /* @__PURE__ */ jsx29("p", { className: "text-base-content/60 text-sm", children: description }) : null
    ] });
  }
);
FieldWrapper.displayName = "FieldWrapper";
var DynamicFormField = ({
  field,
  error,
  value,
  onChange,
  onBlur,
  inputRef
}) => {
  const {
    name,
    type,
    label,
    placeholder,
    description,
    disabled,
    readOnly,
    options = [],
    validation,
    className,
    inputClassName,
    rows = 3,
    autoFocus,
    autoComplete,
    componentProps = {}
  } = field;
  const isRequired = Boolean(validation?.required);
  const handleInputChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const handleCheckboxChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };
  const handleRadioChange = (newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };
  const renderField = () => {
    switch (type) {
      case "hidden":
        return /* @__PURE__ */ jsx29("input", { type: "hidden", name, value });
      case "textarea":
        return /* @__PURE__ */ jsx29(
          Textarea,
          {
            ref: inputRef,
            id: name,
            name,
            placeholder,
            rows,
            color: error ? "error" : void 0,
            className: inputClassName,
            disabled,
            readOnly,
            autoFocus,
            autoComplete,
            value: value ?? "",
            onChange: handleInputChange,
            onBlur,
            ...componentProps
          }
        );
      case "select":
        return /* @__PURE__ */ jsx29(
          Select,
          {
            ref: inputRef,
            id: name,
            name,
            options,
            placeholder,
            color: error ? "error" : void 0,
            className: inputClassName,
            disabled,
            autoFocus,
            value: value ?? "",
            onChange: handleInputChange,
            onBlur,
            ...componentProps
          }
        );
      case "checkbox":
        return /* @__PURE__ */ jsx29(
          Checkbox,
          {
            ref: inputRef,
            id: name,
            name,
            label,
            variant: error ? "error" : void 0,
            className: inputClassName,
            disabled,
            autoFocus,
            checked: value ?? false,
            onChange: handleCheckboxChange,
            onBlur,
            ...componentProps
          }
        );
      case "radio":
        return /* @__PURE__ */ jsx29(
          RadioGroup,
          {
            name,
            value: value ?? "",
            onChange: handleRadioChange,
            variant: error ? "error" : void 0,
            ...componentProps,
            children: options.map((option) => /* @__PURE__ */ jsx29(
              Radio,
              {
                value: option.value,
                label: option.label,
                disabled: option.disabled || disabled
              },
              option.value
            ))
          }
        );
      // Input types: text, email, password, number, tel, url, date, time, datetime-local
      default:
        return /* @__PURE__ */ jsx29(
          Input,
          {
            ref: inputRef,
            id: name,
            name,
            type,
            placeholder,
            color: error ? "error" : void 0,
            className: inputClassName,
            disabled,
            readOnly,
            autoFocus,
            autoComplete,
            value: value ?? "",
            onChange: handleInputChange,
            onBlur,
            ...componentProps
          }
        );
    }
  };
  if (type === "checkbox") {
    return /* @__PURE__ */ jsx29(FieldWrapper, { description, error, className, children: renderField() });
  }
  return /* @__PURE__ */ jsx29(
    FieldWrapper,
    {
      label,
      description,
      error,
      required: isRequired,
      className,
      children: renderField()
    }
  );
};
DynamicFormField.displayName = "DynamicFormField";
var ControlledDynamicFormField = ({
  field,
  control,
  error
}) => {
  return /* @__PURE__ */ jsx29(
    Controller,
    {
      name: field.name,
      control,
      rules: field.validation,
      defaultValue: field.defaultValue ?? getDefaultValueForType(field.type),
      render: ({ field: controllerField }) => /* @__PURE__ */ jsx29(
        DynamicFormField,
        {
          field,
          value: controllerField.value,
          onChange: controllerField.onChange,
          onBlur: controllerField.onBlur,
          inputRef: controllerField.ref,
          error
        }
      )
    }
  );
};
ControlledDynamicFormField.displayName = "ControlledDynamicFormField";
function getDefaultValueForType(type) {
  switch (type) {
    case "checkbox":
      return false;
    case "number":
      return "";
    default:
      return "";
  }
}
var gapClasses = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6"
};
var layoutClasses = {
  vertical: "flex flex-col",
  horizontal: "flex flex-row flex-wrap",
  grid: "grid"
};
var columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
};
var DynamicForm = forwardRef29(
  ({
    fields,
    onSubmit,
    errors = {},
    control,
    handleSubmit,
    gap = "md",
    submitText = "Submit",
    isSubmitting = false,
    layout = "vertical",
    columns = 1,
    renderActions,
    showSubmitButton = true,
    className,
    children,
    ...props
  }, ref) => {
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (handleSubmit && onSubmit) {
        handleSubmit(onSubmit)(e);
      } else if (onSubmit) {
        const formData = new FormData(e.currentTarget);
        const data = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });
        onSubmit(data);
      }
    };
    return /* @__PURE__ */ jsxs26("form", { ref, onSubmit: handleFormSubmit, className: clsx29("w-full", className), ...props, children: [
      /* @__PURE__ */ jsx29(
        "div",
        {
          className: clsx29(
            layoutClasses[layout],
            gapClasses[gap],
            layout === "grid" && columnClasses[columns]
          ),
          children: fields.map(
            (field) => control ? /* @__PURE__ */ jsx29(
              ControlledDynamicFormField,
              {
                field,
                control,
                error: errors[field.name]?.message
              },
              field.name
            ) : /* @__PURE__ */ jsx29(
              DynamicFormField,
              {
                field,
                error: errors[field.name]?.message
              },
              field.name
            )
          )
        }
      ),
      children,
      renderActions ? renderActions() : showSubmitButton ? /* @__PURE__ */ jsx29("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsx29(
        "button",
        {
          type: "submit",
          className: clsx29("btn btn-primary", isSubmitting && "loading"),
          disabled: isSubmitting,
          children: isSubmitting ? "Submitting..." : submitText
        }
      ) }) : null
    ] });
  }
);
DynamicForm.displayName = "DynamicForm";

// src/components/Empty.tsx
import clsx30 from "clsx";
import { forwardRef as forwardRef30 } from "react";
import { jsx as jsx30, jsxs as jsxs27 } from "react/jsx-runtime";
var Empty = forwardRef30(
  ({ icon, title, description, action, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs27(
      "div",
      {
        ref,
        className: clsx30("flex flex-col items-center justify-center px-4 py-12", className),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx30("div", { className: "text-base-content/50 mb-4", children: icon }),
          title && /* @__PURE__ */ jsx30("h3", { className: "mb-2 text-lg font-semibold", children: title }),
          description && /* @__PURE__ */ jsx30("p", { className: "text-base-content/70 mb-4 text-center text-sm", children: description }),
          action && /* @__PURE__ */ jsx30("div", { className: "mt-4", children: action }),
          children
        ]
      }
    );
  }
);
Empty.displayName = "Empty";

// src/components/Field.tsx
import clsx31 from "clsx";
import { createContext as createContext2, forwardRef as forwardRef31, useContext as useContext2, useId } from "react";
import { jsx as jsx31, jsxs as jsxs28 } from "react/jsx-runtime";
var FieldContext = createContext2(null);
function useFieldContext() {
  return useContext2(FieldContext);
}
var Field = forwardRef31(
  ({ name, error, required, children, className, ...props }, ref) => {
    const generatedId = useId();
    const id = name || generatedId;
    return /* @__PURE__ */ jsx31(FieldContext.Provider, { value: { id, error, required }, children: /* @__PURE__ */ jsx31("div", { ref, className: clsx31("form-control w-full space-y-2", className), ...props, children }) });
  }
);
Field.displayName = "Field";
var FieldLabel = forwardRef31(
  ({ children, className, ...props }, ref) => {
    const context = useFieldContext();
    return /* @__PURE__ */ jsxs28(
      "label",
      {
        ref,
        htmlFor: context?.id,
        className: clsx31("label-text text-sm font-medium", className),
        ...props,
        children: [
          children,
          context?.required && /* @__PURE__ */ jsx31("span", { className: "text-error ml-1", children: "*" })
        ]
      }
    );
  }
);
FieldLabel.displayName = "FieldLabel";
var FieldDescription = forwardRef31(
  ({ children, className, ...props }, ref) => {
    const context = useFieldContext();
    if (context?.error) return null;
    return /* @__PURE__ */ jsx31("p", { ref, className: clsx31("text-base-content/60 text-sm", className), ...props, children });
  }
);
FieldDescription.displayName = "FieldDescription";
var FieldError = forwardRef31(
  ({ message, children, className, ...props }, ref) => {
    const context = useFieldContext();
    const errorMessage = message || context?.error || children;
    if (!errorMessage) return null;
    return /* @__PURE__ */ jsx31("p", { ref, className: clsx31("text-error text-sm", className), role: "alert", ...props, children: errorMessage });
  }
);
FieldError.displayName = "FieldError";
var FieldGroup = forwardRef31(
  ({ direction = "vertical", children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx31(
      "div",
      {
        ref,
        className: clsx31(
          "space-y-4",
          direction === "horizontal" && "flex flex-row gap-4 space-y-0",
          className
        ),
        ...props,
        children
      }
    );
  }
);
FieldGroup.displayName = "FieldGroup";
var FieldSeparator = forwardRef31(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx31("div", { ref, className: clsx31("divider", className), ...props });
  }
);
FieldSeparator.displayName = "FieldSeparator";
var FieldSet = forwardRef31(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx31(
      "fieldset",
      {
        ref,
        className: clsx31("border-base-300 space-y-4 rounded-lg border p-4", className),
        ...props,
        children
      }
    );
  }
);
FieldSet.displayName = "FieldSet";
var FieldLegend = forwardRef31(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx31("legend", { ref, className: clsx31("px-2 text-lg font-semibold", className), ...props, children });
  }
);
FieldLegend.displayName = "FieldLegend";

// src/components/Form.tsx
import clsx32 from "clsx";
import React32, { createContext as createContext3, forwardRef as forwardRef32, useContext as useContext3, useId as useId2 } from "react";
import { jsx as jsx32, jsxs as jsxs29 } from "react/jsx-runtime";
var FormFieldContext = createContext3(null);
function useFormFieldContext() {
  return useContext3(FormFieldContext);
}
var Form = forwardRef32(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx32("form", { ref, className: clsx32("space-y-4", className), ...props, children });
  }
);
Form.displayName = "Form";
var FormField = forwardRef32(
  ({ name, error, children, className, ...props }, ref) => {
    const generatedId = useId2();
    const id = `${name}-${generatedId}`;
    return /* @__PURE__ */ jsx32(FormFieldContext.Provider, { value: { id, name, error }, children: /* @__PURE__ */ jsx32("div", { ref, className, ...props, children }) });
  }
);
FormField.displayName = "FormField";
var FormItem = forwardRef32(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx32("div", { ref, className: clsx32("form-control w-full space-y-2", className), ...props, children });
  }
);
FormItem.displayName = "FormItem";
var FormLabel = forwardRef32(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    return /* @__PURE__ */ jsx32(
      "label",
      {
        ref,
        htmlFor: context?.id,
        className: clsx32(
          "label-text text-sm font-medium",
          context?.error && "text-error",
          className
        ),
        ...props,
        children
      }
    );
  }
);
FormLabel.displayName = "FormLabel";
var FormControl = forwardRef32(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    const child = React32.Children.only(children);
    const clonedChild = React32.isValidElement(child) ? React32.cloneElement(child, {
      id: context?.id,
      name: context?.name,
      "aria-describedby": context?.error ? `${context.id}-error` : void 0,
      "aria-invalid": context?.error ? true : void 0
    }) : child;
    return /* @__PURE__ */ jsx32("div", { ref, className, ...props, children: clonedChild });
  }
);
FormControl.displayName = "FormControl";
var FormDescription = forwardRef32(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    if (context?.error) return null;
    return /* @__PURE__ */ jsx32("p", { ref, className: clsx32("text-base-content/60 text-sm", className), ...props, children });
  }
);
FormDescription.displayName = "FormDescription";
var FormMessage = forwardRef32(
  ({ message, children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    const errorMessage = message || context?.error || children;
    if (!errorMessage) return null;
    return /* @__PURE__ */ jsx32(
      "p",
      {
        ref,
        id: context?.id ? `${context.id}-error` : void 0,
        className: clsx32("text-error text-sm", className),
        role: "alert",
        ...props,
        children: errorMessage
      }
    );
  }
);
FormMessage.displayName = "FormMessage";
var FormSection = forwardRef32(
  ({ title, description, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs29("div", { ref, className: clsx32("space-y-4", className), ...props, children: [
      (title || description) && /* @__PURE__ */ jsxs29("div", { className: "space-y-1", children: [
        title && /* @__PURE__ */ jsx32("h3", { className: "text-lg font-semibold", children: title }),
        description && /* @__PURE__ */ jsx32("p", { className: "text-base-content/60 text-sm", children: description })
      ] }),
      /* @__PURE__ */ jsx32("div", { className: "space-y-4", children })
    ] });
  }
);
FormSection.displayName = "FormSection";
var FormActions = forwardRef32(
  ({ align = "end", children, className, ...props }, ref) => {
    const alignClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between"
    };
    return /* @__PURE__ */ jsx32(
      "div",
      {
        ref,
        className: clsx32("flex items-center gap-2 pt-4", alignClasses[align], className),
        ...props,
        children
      }
    );
  }
);
FormActions.displayName = "FormActions";

// src/components/FullPageLoader.tsx
import clsx33 from "clsx";
import { forwardRef as forwardRef33 } from "react";
import { jsx as jsx33, jsxs as jsxs30 } from "react/jsx-runtime";
var sizeClasses14 = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
  xl: "w-16 h-16"
};
var typeClasses = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity"
};
var variantClasses14 = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error"
};
var textSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl"
};
var FullPageLoader = forwardRef33(
  ({
    visible = true,
    size = "lg",
    type = "spinner",
    variant = "primary",
    text,
    backgroundOpacity = 80,
    blur = false,
    zIndex = 50,
    className,
    style,
    ...props
  }, ref) => {
    if (!visible) return null;
    const opacityValue = Math.min(100, Math.max(0, backgroundOpacity));
    return /* @__PURE__ */ jsxs30(
      "div",
      {
        ref,
        className: clsx33("fixed inset-0", className),
        style: {
          zIndex,
          ...style
        },
        role: "status",
        "aria-live": "polite",
        "aria-busy": "true",
        ...props,
        children: [
          /* @__PURE__ */ jsx33(
            "div",
            {
              className: clsx33("bg-base-100 absolute inset-0", blur && "backdrop-blur-sm"),
              style: {
                opacity: opacityValue / 100
              }
            }
          ),
          /* @__PURE__ */ jsx33("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs30("div", { className: "flex flex-col items-center justify-center gap-0", children: [
            /* @__PURE__ */ jsx33(
              "span",
              {
                className: clsx33(
                  "loading",
                  typeClasses[type],
                  sizeClasses14[size],
                  variantClasses14[variant]
                ),
                "aria-hidden": "true"
              }
            ),
            text && /* @__PURE__ */ jsx33(
              "p",
              {
                className: clsx33("mt-4 font-medium", textSizeClasses[size], variantClasses14[variant]),
                children: text
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx33("span", { className: "sr-only", children: text || "Loading..." })
        ]
      }
    );
  }
);
FullPageLoader.displayName = "FullPageLoader";

// src/components/HoverCard.tsx
import clsx34 from "clsx";
import { forwardRef as forwardRef34, useEffect as useEffect9, useRef as useRef7, useState as useState11 } from "react";
import { jsx as jsx34, jsxs as jsxs31 } from "react/jsx-runtime";
var HoverCard = forwardRef34(
  ({ trigger, openDelay = 200, closeDelay = 300, children, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState11(false);
    const openTimeoutRef = useRef7(void 0);
    const closeTimeoutRef = useRef7(void 0);
    useEffect9(() => {
      return () => {
        if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      };
    }, []);
    const handleMouseEnter = () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      openTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(true);
      }, openDelay);
    };
    const handleMouseLeave = () => {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
      }
      closeTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, closeDelay);
    };
    return /* @__PURE__ */ jsxs31(
      "div",
      {
        ref,
        className: clsx34("relative inline-block", className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...props,
        children: [
          trigger,
          isOpen && /* @__PURE__ */ jsx34("div", { className: "absolute top-full left-0 z-50 mt-2", children: /* @__PURE__ */ jsx34("div", { className: "animate-in fade-in-0 zoom-in-95", children }) })
        ]
      }
    );
  }
);
HoverCard.displayName = "HoverCard";

// src/components/InputGroup.tsx
import clsx35 from "clsx";
import { forwardRef as forwardRef35 } from "react";
import { jsx as jsx35, jsxs as jsxs32 } from "react/jsx-runtime";
var InputGroup = forwardRef35(
  ({ left, right, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs32(
      "label",
      {
        ref,
        className: clsx35("input input-bordered flex items-center gap-2", className),
        ...props,
        children: [
          left && /* @__PURE__ */ jsx35("span", { className: "text-base-content/70", children: left }),
          children,
          right && /* @__PURE__ */ jsx35("span", { className: "text-base-content/70", children: right })
        ]
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

// src/components/InputOTP.tsx
import clsx36 from "clsx";
import { forwardRef as forwardRef36, useRef as useRef8, useState as useState12 } from "react";
import { jsx as jsx36 } from "react/jsx-runtime";
var InputOTP = forwardRef36(
  ({ length = 6, onChange, onComplete, value = "", className, id, ...props }, ref) => {
    const [otp, setOtp] = useState12(value.split("").slice(0, length));
    const inputRefs = useRef8([]);
    const inputId = id || `otp-${Math.random().toString(36).substr(2, 9)}`;
    const handleChange = (index, digit) => {
      if (digit && !/^\d$/.test(digit)) return;
      const newOtp = [...otp];
      newOtp[index] = digit;
      setOtp(newOtp);
      const otpValue = newOtp.join("");
      onChange?.(otpValue);
      if (digit && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
      if (otpValue.length === length) {
        onComplete?.(otpValue);
      }
    };
    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };
    const handlePaste = (e) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text").slice(0, length);
      const digits = pastedData.split("").filter((char) => /^\d$/.test(char));
      const newOtp = [...otp];
      digits.forEach((digit, i) => {
        if (i < length) {
          newOtp[i] = digit;
        }
      });
      setOtp(newOtp);
      const otpValue = newOtp.join("");
      onChange?.(otpValue);
      if (otpValue.length === length) {
        onComplete?.(otpValue);
      }
      const lastIndex = Math.min(digits.length, length - 1);
      inputRefs.current[lastIndex]?.focus();
    };
    return /* @__PURE__ */ jsx36(
      "div",
      {
        ref,
        id: inputId,
        className: clsx36("flex gap-2", className),
        role: "group",
        "aria-label": "OTP input",
        ...props,
        children: Array.from({ length }).map((_, index) => /* @__PURE__ */ jsx36(
          "input",
          {
            ref: (el) => {
              inputRefs.current[index] = el;
            },
            id: `${inputId}-${index}`,
            type: "text",
            inputMode: "numeric",
            maxLength: 1,
            value: otp[index] || "",
            onChange: (e) => handleChange(index, e.target.value),
            onKeyDown: (e) => handleKeyDown(index, e),
            onPaste: handlePaste,
            className: "input input-bordered h-12 w-12 text-center text-lg",
            "aria-label": `OTP digit ${index + 1}`
          },
          index
        ))
      }
    );
  }
);
InputOTP.displayName = "InputOTP";

// src/components/Item.tsx
import clsx37 from "clsx";
import { forwardRef as forwardRef37 } from "react";
import { jsx as jsx37, jsxs as jsxs33 } from "react/jsx-runtime";
var Item = forwardRef37(
  ({ icon, title, description, rightContent, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs33(
      "div",
      {
        ref,
        className: clsx37("hover:bg-base-200 flex items-center gap-3 rounded-lg p-3", className),
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx37("div", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ jsxs33("div", { className: "min-w-0 flex-1", children: [
            title && /* @__PURE__ */ jsx37("div", { className: "font-medium", children: title }),
            description && /* @__PURE__ */ jsx37("div", { className: "text-base-content/70 text-sm", children: description }),
            children
          ] }),
          rightContent && /* @__PURE__ */ jsx37("div", { className: "shrink-0", children: rightContent })
        ]
      }
    );
  }
);
Item.displayName = "Item";

// src/components/Kbd.tsx
import clsx38 from "clsx";
import { forwardRef as forwardRef38 } from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
var sizeClasses15 = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: "kbd-md",
  lg: "kbd-lg"
};
var Kbd = forwardRef38(
  ({ size = "md", children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx38("kbd", { ref, className: clsx38("kbd", sizeClasses15[size], className), ...props, children });
  }
);
Kbd.displayName = "Kbd";

// src/components/Menubar.tsx
import clsx39 from "clsx";
import { forwardRef as forwardRef39 } from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
var sizeClasses16 = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: "menu-md",
  lg: "menu-lg"
};
var Menubar = forwardRef39(
  ({ orientation = "horizontal", size = "md", compact: compact2, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx39(
      "ul",
      {
        ref,
        className: clsx39(
          "menu",
          orientation === "horizontal" && "menu-horizontal",
          orientation === "vertical" && "menu-vertical",
          sizeClasses16[size],
          compact2 && "menu-compact",
          "bg-base-100",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Menubar.displayName = "Menubar";
var MenubarItem = forwardRef39(
  ({ href, disabled, active, children, className, ...props }, ref) => {
    const content = href ? /* @__PURE__ */ jsx39("a", { href, children }) : /* @__PURE__ */ jsx39("a", { children });
    return /* @__PURE__ */ jsx39("li", { ref, className: clsx39(disabled && "disabled", className), ...props, children: /* @__PURE__ */ jsx39("a", { className: clsx39(active && "active"), children }) });
  }
);
MenubarItem.displayName = "MenubarItem";

// src/components/NativeSelect.tsx
import clsx40 from "clsx";
import { forwardRef as forwardRef40 } from "react";
import { jsx as jsx40 } from "react/jsx-runtime";
var variantClasses15 = {
  bordered: "select-bordered",
  ghost: "select-ghost"
};
var colorClasses7 = {
  primary: "select-primary",
  secondary: "select-secondary",
  accent: "select-accent",
  info: "select-info",
  success: "select-success",
  warning: "select-warning",
  error: "select-error"
};
var sizeClasses17 = {
  xs: "select-xs",
  sm: "select-sm",
  md: "select-md",
  lg: "select-lg"
};
var NativeSelect = forwardRef40(
  ({ variant = "bordered", color, size = "md", options, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx40(
      "select",
      {
        ref,
        className: clsx40(
          "select w-full",
          variantClasses15[variant],
          color && colorClasses7[color],
          sizeClasses17[size],
          className
        ),
        ...props,
        children: options ? options.map((option) => /* @__PURE__ */ jsx40("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)) : children
      }
    );
  }
);
NativeSelect.displayName = "NativeSelect";

// src/components/Navbar.tsx
import clsx41 from "clsx";
import { forwardRef as forwardRef41 } from "react";
import { jsx as jsx41 } from "react/jsx-runtime";
var colorClasses8 = {
  default: "bg-base-100",
  neutral: "bg-neutral text-neutral-content",
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
  info: "bg-info text-info-content",
  success: "bg-success text-success-content",
  warning: "bg-warning text-warning-content",
  error: "bg-error text-error-content"
};
var Navbar = forwardRef41(
  ({
    color = "default",
    shadow = false,
    bordered = false,
    sticky = false,
    glass = false,
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx41(
      "div",
      {
        ref,
        className: clsx41(
          "navbar",
          colorClasses8[color],
          shadow && "shadow-lg",
          bordered && "border-base-300 border-b",
          sticky && "sticky top-0 z-50",
          glass && "glass",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Navbar.displayName = "Navbar";
var NavbarStart = forwardRef41(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx41("div", { ref, className: clsx41("navbar-start", className), ...props, children });
  }
);
NavbarStart.displayName = "NavbarStart";
var NavbarCenter = forwardRef41(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx41("div", { ref, className: clsx41("navbar-center", className), ...props, children });
  }
);
NavbarCenter.displayName = "NavbarCenter";
var NavbarEnd = forwardRef41(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx41("div", { ref, className: clsx41("navbar-end", className), ...props, children });
  }
);
NavbarEnd.displayName = "NavbarEnd";

// src/components/NavigationMenu.tsx
import clsx42 from "clsx";
import { forwardRef as forwardRef42 } from "react";
import { jsx as jsx42 } from "react/jsx-runtime";
var NavigationMenu = forwardRef42(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx42("nav", { ref, className: clsx42("navbar bg-base-100", className), ...props, children: /* @__PURE__ */ jsx42("ul", { className: "menu menu-horizontal px-1", children }) });
  }
);
NavigationMenu.displayName = "NavigationMenu";
var NavigationMenuItem = forwardRef42(
  ({ href, active, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx42("li", { ref, className, ...props, children: href ? /* @__PURE__ */ jsx42("a", { href, className: clsx42(active && "active"), children }) : /* @__PURE__ */ jsx42("span", { className: clsx42(active && "active"), children }) });
  }
);
NavigationMenuItem.displayName = "NavigationMenuItem";

// src/components/Popover.tsx
import clsx43 from "clsx";
import { forwardRef as forwardRef43, useEffect as useEffect10, useRef as useRef9, useState as useState13 } from "react";
import { jsx as jsx43, jsxs as jsxs34 } from "react/jsx-runtime";
var Popover = forwardRef43(
  ({ trigger, open, onOpenChange, children, className, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = useState13(false);
    const popoverRef = useRef9(null);
    const isOpen = open !== void 0 ? open : internalOpen;
    useEffect10(() => {
      const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
          if (open === void 0) {
            setInternalOpen(false);
          }
          onOpenChange?.(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, open, onOpenChange]);
    const handleTriggerClick = () => {
      const newOpen = !isOpen;
      if (open === void 0) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };
    return /* @__PURE__ */ jsxs34("div", { ref: popoverRef, className: clsx43("relative inline-block", className), ...props, children: [
      /* @__PURE__ */ jsx43("div", { onClick: handleTriggerClick, children: trigger }),
      isOpen && /* @__PURE__ */ jsx43("div", { className: "absolute z-50 mt-2 min-w-50", children: /* @__PURE__ */ jsx43("div", { className: "bg-base-100 border-base-300 rounded-lg border p-4 shadow-lg", children }) })
    ] });
  }
);
Popover.displayName = "Popover";

// src/components/Progress.tsx
import clsx44 from "clsx";
import { forwardRef as forwardRef44 } from "react";
import { jsx as jsx44 } from "react/jsx-runtime";
var variantClasses16 = {
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error"
};
var Progress = forwardRef44(
  ({ variant = "primary", value, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx44(
      "progress",
      {
        ref,
        className: clsx44("progress w-full", variantClasses16[variant], className),
        value,
        max: 100,
        ...props
      }
    );
  }
);
Progress.displayName = "Progress";

// src/components/Separator.tsx
import clsx45 from "clsx";
import { forwardRef as forwardRef45 } from "react";
import { jsx as jsx45 } from "react/jsx-runtime";
var variantClasses17 = {
  default: "",
  primary: "divider-primary",
  secondary: "divider-secondary",
  accent: "divider-accent"
};
var Separator = forwardRef45(
  ({ orientation = "horizontal", variant = "default", text, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx45(
      "div",
      {
        ref,
        className: clsx45(
          "divider",
          orientation === "vertical" && "divider-horizontal",
          variantClasses17[variant],
          className
        ),
        ...props,
        children: text || children
      }
    );
  }
);
Separator.displayName = "Separator";

// src/components/Sheet.tsx
import clsx46 from "clsx";
import { forwardRef as forwardRef46, useEffect as useEffect11, useRef as useRef10 } from "react";
import { jsx as jsx46, jsxs as jsxs35 } from "react/jsx-runtime";
var Sheet = forwardRef46(
  ({ open, onClose, position = "right", title, children, className, ...props }, ref) => {
    const dialogRef = useRef10(null);
    const internalRef = ref || dialogRef;
    useEffect11(() => {
      const dialog = internalRef.current;
      if (!dialog) return;
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }, [open, internalRef]);
    const getPositionClasses = () => {
      switch (position) {
        case "top":
          return "items-start";
        case "bottom":
          return "items-end";
        case "left":
          return "items-center justify-start";
        case "right":
          return "items-center justify-end";
        default:
          return "items-center justify-end";
      }
    };
    const getBoxClasses = () => {
      switch (position) {
        case "top":
        case "bottom":
          return "w-full max-w-full h-auto max-h-[80vh]";
        case "left":
        case "right":
          return "h-full max-h-full w-96 max-w-[90vw]";
        default:
          return "h-full max-h-full w-96 max-w-[90vw]";
      }
    };
    return /* @__PURE__ */ jsxs35(
      "dialog",
      {
        ref: internalRef,
        className: clsx46("modal", getPositionClasses(), className),
        ...props,
        children: [
          /* @__PURE__ */ jsxs35("div", { className: clsx46("modal-box", getBoxClasses(), "rounded-none"), children: [
            title && /* @__PURE__ */ jsxs35("div", { className: "mb-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx46("h3", { className: "text-lg font-bold", children: title }),
              /* @__PURE__ */ jsx46("button", { onClick: onClose, className: "btn btn-sm btn-circle btn-ghost", children: "\u2715" })
            ] }),
            /* @__PURE__ */ jsx46("div", { className: "overflow-y-auto", children })
          ] }),
          /* @__PURE__ */ jsx46("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ jsx46("button", { type: "button", onClick: onClose, children: "close" }) })
        ]
      }
    );
  }
);
Sheet.displayName = "Sheet";

// src/components/Sidebar.tsx
import clsx47 from "clsx";
import { forwardRef as forwardRef47 } from "react";
import { Fragment, jsx as jsx47, jsxs as jsxs36 } from "react/jsx-runtime";
var Sidebar = forwardRef47(
  ({ collapsed, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx47(
      "div",
      {
        ref,
        className: clsx47(
          "bg-base-200 h-full transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx47("ul", { className: "menu h-full p-4", children })
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarItem = forwardRef47(
  ({ icon, href, active, children, className, ...props }, ref) => {
    const content = /* @__PURE__ */ jsxs36(Fragment, { children: [
      icon && /* @__PURE__ */ jsx47("span", { className: "shrink-0", children: icon }),
      /* @__PURE__ */ jsx47("span", { children })
    ] });
    return /* @__PURE__ */ jsx47("li", { ref, className, ...props, children: href ? /* @__PURE__ */ jsx47("a", { href, className: clsx47(active && "active"), children: content }) : /* @__PURE__ */ jsx47("span", { className: clsx47(active && "active"), children: content }) });
  }
);
SidebarItem.displayName = "SidebarItem";

// src/components/Skeleton.tsx
import clsx48 from "clsx";
import { forwardRef as forwardRef48 } from "react";
import { jsx as jsx48 } from "react/jsx-runtime";
var Skeleton = forwardRef48(
  ({ width, height, shape = "rectangle", className, style, ...props }, ref) => {
    const dimensionStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style
    };
    return /* @__PURE__ */ jsx48(
      "div",
      {
        ref,
        className: clsx48("skeleton", shape === "circle" && "rounded-full", className),
        style: dimensionStyle,
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";

// src/components/Slider.tsx
import clsx49 from "clsx";
import { forwardRef as forwardRef49 } from "react";
import { jsx as jsx49 } from "react/jsx-runtime";
var variantClasses18 = {
  primary: "range-primary",
  secondary: "range-secondary",
  accent: "range-accent",
  info: "range-info",
  success: "range-success",
  warning: "range-warning",
  error: "range-error"
};
var sizeClasses18 = {
  xs: "range-xs",
  sm: "range-sm",
  md: "range-md",
  lg: "range-lg"
};
var Slider = forwardRef49(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return /* @__PURE__ */ jsx49(
      "input",
      {
        ref,
        type: "range",
        className: clsx49("range", variantClasses18[variant], sizeClasses18[size], className),
        ...props
      }
    );
  }
);
Slider.displayName = "Slider";

// src/components/Spinner.tsx
import clsx50 from "clsx";
import { forwardRef as forwardRef50 } from "react";
import { jsx as jsx50 } from "react/jsx-runtime";
var sizeClasses19 = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
  xl: "loading-xl"
};
var typeClasses2 = {
  spinner: "loading-spinner",
  dots: "loading-dots",
  ring: "loading-ring",
  ball: "loading-ball",
  bars: "loading-bars",
  infinity: "loading-infinity"
};
var colorClasses9 = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error"
};
var Spinner = forwardRef50(
  ({ size = "md", type = "spinner", color, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx50(
      "span",
      {
        ref,
        className: clsx50(
          "loading",
          typeClasses2[type],
          sizeClasses19[size],
          color && colorClasses9[color],
          className
        ),
        ...props
      }
    );
  }
);
Spinner.displayName = "Spinner";

// src/components/Switch.tsx
import clsx51 from "clsx";
import { forwardRef as forwardRef51 } from "react";
import { jsx as jsx51, jsxs as jsxs37 } from "react/jsx-runtime";
var variantClasses19 = {
  primary: "toggle-primary",
  secondary: "toggle-secondary",
  accent: "toggle-accent",
  neutral: "toggle-neutral",
  info: "toggle-info",
  success: "toggle-success",
  warning: "toggle-warning",
  error: "toggle-error"
};
var sizeClasses20 = {
  xs: "toggle-xs",
  sm: "toggle-sm",
  md: "toggle-md",
  lg: "toggle-lg",
  xl: "toggle-xl"
};
var Switch = forwardRef51(
  ({ variant, size = "md", label, checkedIcon, uncheckedIcon, className, ...props }, ref) => {
    if (checkedIcon || uncheckedIcon) {
      return /* @__PURE__ */ jsxs37(
        "label",
        {
          className: clsx51(
            "toggle text-base-content",
            variant && variantClasses19[variant],
            sizeClasses20[size],
            className
          ),
          children: [
            /* @__PURE__ */ jsx51("input", { ref, type: "checkbox", ...props }),
            checkedIcon,
            uncheckedIcon
          ]
        }
      );
    }
    const switchElement = /* @__PURE__ */ jsx51(
      "input",
      {
        ref,
        type: "checkbox",
        className: clsx51("toggle", variant && variantClasses19[variant], sizeClasses20[size], className),
        ...props
      }
    );
    if (label) {
      return /* @__PURE__ */ jsxs37("label", { className: "label cursor-pointer justify-start gap-2", children: [
        switchElement,
        /* @__PURE__ */ jsx51("span", { className: "label-text", children: label })
      ] });
    }
    return switchElement;
  }
);
Switch.displayName = "Switch";

// src/components/Table.tsx
import clsx52 from "clsx";
import { forwardRef as forwardRef52 } from "react";
import { jsx as jsx52, jsxs as jsxs38 } from "react/jsx-runtime";
var sizeClasses21 = {
  xs: "table-xs",
  sm: "table-sm",
  md: "table-md",
  lg: "table-lg"
};
var Table = forwardRef52(
  ({ size = "md", zebra, pinRows, pinCols, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx52(
      "table",
      {
        ref,
        className: clsx52(
          "table",
          sizeClasses21[size],
          zebra && "table-zebra",
          pinRows && "table-pin-rows",
          pinCols && "table-pin-cols",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Table.displayName = "Table";
function DataTable({
  data,
  columns,
  getRowKey,
  ...tableProps
}) {
  return /* @__PURE__ */ jsxs38(Table, { ...tableProps, children: [
    /* @__PURE__ */ jsx52("thead", { children: /* @__PURE__ */ jsx52("tr", { children: columns.map((column) => /* @__PURE__ */ jsx52("th", { children: column.header }, column.key)) }) }),
    /* @__PURE__ */ jsx52("tbody", { children: data.map((item) => /* @__PURE__ */ jsx52("tr", { children: columns.map((column) => /* @__PURE__ */ jsx52("td", { children: column.render ? column.render(item) : item[column.key] }, column.key)) }, getRowKey(item))) })
  ] });
}

// src/components/Tabs.tsx
import clsx53 from "clsx";
import { createContext as createContext4, forwardRef as forwardRef53, useContext as useContext4, useId as useId3, useState as useState14 } from "react";
import { jsx as jsx53 } from "react/jsx-runtime";
var TabsContext = createContext4(null);
var useTabs = () => {
  const context = useContext4(TabsContext);
  if (!context) {
    throw new Error("Tab components must be used within Tabs");
  }
  return context;
};
var variantClasses20 = {
  bordered: "tabs-border",
  lifted: "tabs-lift",
  boxed: "tabs-box"
};
var sizeClasses22 = {
  xs: "tabs-xs",
  sm: "tabs-sm",
  md: "tabs-md",
  lg: "tabs-lg",
  xl: "tabs-xl"
};
var positionClasses2 = {
  top: "",
  bottom: "tabs-bottom"
};
var Tabs = forwardRef53(
  ({
    defaultValue = "",
    value,
    onChange,
    variant = "bordered",
    size = "md",
    position = "top",
    children,
    className,
    ...props
  }, ref) => {
    const [internalActiveTab, setInternalActiveTab] = useState14(defaultValue);
    const activeTab = value !== void 0 ? value : internalActiveTab;
    const groupName = useId3();
    const handleTabChange = (newValue) => {
      if (value === void 0) {
        setInternalActiveTab(newValue);
      }
      onChange?.(newValue);
    };
    return /* @__PURE__ */ jsx53(
      TabsContext.Provider,
      {
        value: {
          activeTab,
          setActiveTab: handleTabChange,
          variant,
          size,
          position,
          groupName
        },
        children: /* @__PURE__ */ jsx53(
          "div",
          {
            ref,
            className: clsx53(
              "tabs",
              variantClasses20[variant],
              sizeClasses22[size],
              positionClasses2[position],
              className
            ),
            ...props,
            children
          }
        )
      }
    );
  }
);
Tabs.displayName = "Tabs";
var Tab = forwardRef53(
  ({ value, label, disabled = false, className, ...props }, ref) => {
    const { activeTab, setActiveTab, groupName } = useTabs();
    return /* @__PURE__ */ jsx53(
      "input",
      {
        ref,
        type: "radio",
        name: groupName,
        role: "tab",
        "aria-label": typeof label === "string" ? label : void 0,
        checked: activeTab === value,
        onChange: () => !disabled && setActiveTab(value),
        disabled,
        className: clsx53("tab", disabled && "tab-disabled", className),
        ...props
      }
    );
  }
);
Tab.displayName = "Tab";
var TabPanel = forwardRef53(
  ({ value, children, className, ...props }, ref) => {
    const { activeTab } = useTabs();
    return /* @__PURE__ */ jsx53(
      "div",
      {
        ref,
        role: "tabpanel",
        className: clsx53(
          "tab-content bg-base-100 border-base-300 p-6",
          activeTab !== value && "hidden",
          className
        ),
        ...props,
        children
      }
    );
  }
);
TabPanel.displayName = "TabPanel";

// src/components/Toast.tsx
import {
  CheckCircleIcon as CheckCircleIcon2,
  ExclamationCircleIcon,
  ExclamationTriangleIcon as ExclamationTriangleIcon2,
  InformationCircleIcon as InformationCircleIcon2,
  XMarkIcon
} from "@heroicons/react/24/outline";
import clsx54 from "clsx";
import { createContext as createContext5, forwardRef as forwardRef54, useContext as useContext5, useEffect as useEffect12, useState as useState15 } from "react";
import { jsx as jsx54, jsxs as jsxs39 } from "react/jsx-runtime";
var ToastContext = createContext5(null);
var useToast = () => {
  const context = useContext5(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};
var variantClasses21 = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error"
};
var variantIcons = {
  info: InformationCircleIcon2,
  success: CheckCircleIcon2,
  warning: ExclamationTriangleIcon2,
  error: ExclamationCircleIcon
};
var positionClasses3 = {
  top: "toast-top toast-center",
  "top-start": "toast-top toast-start",
  "top-center": "toast-top toast-center",
  "top-end": "toast-top toast-end",
  middle: "toast-middle toast-center",
  "middle-start": "toast-middle toast-start",
  "middle-center": "toast-middle toast-center",
  "middle-end": "toast-middle toast-end",
  bottom: "toast-bottom toast-center",
  "bottom-start": "toast-bottom toast-start",
  "bottom-center": "toast-bottom toast-center",
  "bottom-end": "toast-bottom toast-end"
};
var ToastItem = forwardRef54(
  ({ message, variant = "info", duration = 3e3, onDismiss, className, ...props }, ref) => {
    const Icon = variantIcons[variant];
    useEffect12(() => {
      if (duration && onDismiss) {
        const timer = setTimeout(onDismiss, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onDismiss]);
    return /* @__PURE__ */ jsxs39("div", { ref, className: clsx54("alert", variantClasses21[variant], className), ...props, children: [
      /* @__PURE__ */ jsx54(Icon, { className: "h-6 w-6" }),
      /* @__PURE__ */ jsx54("span", { children: message }),
      onDismiss && /* @__PURE__ */ jsx54("button", { onClick: onDismiss, className: "btn btn-sm btn-circle btn-ghost ml-auto", children: /* @__PURE__ */ jsx54(XMarkIcon, { className: "h-5 w-5" }) })
    ] });
  }
);
ToastItem.displayName = "ToastItem";
var ToastProvider = ({
  children,
  position = "bottom-end"
}) => {
  const [toasts, setToasts] = useState15([]);
  const addToast = (toast) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return /* @__PURE__ */ jsxs39(ToastContext.Provider, { value: { toasts, addToast, removeToast }, children: [
    children,
    toasts.length > 0 && /* @__PURE__ */ jsx54("div", { className: clsx54("toast z-50", positionClasses3[position]), children: toasts.map((toast) => /* @__PURE__ */ jsx54(
      ToastItem,
      {
        message: toast.message,
        variant: toast.variant,
        duration: toast.duration,
        onDismiss: () => removeToast(toast.id)
      },
      toast.id
    )) })
  ] });
};

// src/components/Toggle.tsx
import clsx55 from "clsx";
import { createContext as createContext6, forwardRef as forwardRef55, useContext as useContext6, useState as useState16 } from "react";
import { jsx as jsx55 } from "react/jsx-runtime";
var ToggleGroupContext = createContext6(null);
var useToggleGroup = () => {
  const context = useContext6(ToggleGroupContext);
  if (!context) {
    throw new Error("ToggleGroupItem must be used within ToggleGroup");
  }
  return context;
};
var sizeClasses23 = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg"
};
var variantClasses22 = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent"
};
var Toggle = forwardRef55(
  ({ pressed, onPressedChange, size = "md", variant, children, className, ...props }, ref) => {
    const [internalPressed, setInternalPressed] = useState16(false);
    const isPressed = pressed !== void 0 ? pressed : internalPressed;
    const handleClick = () => {
      const newPressed = !isPressed;
      if (pressed === void 0) {
        setInternalPressed(newPressed);
      }
      onPressedChange?.(newPressed);
    };
    return /* @__PURE__ */ jsx55(
      "button",
      {
        ref,
        type: "button",
        onClick: handleClick,
        "aria-pressed": isPressed,
        className: clsx55(
          "btn",
          sizeClasses23[size],
          variant && variantClasses22[variant],
          isPressed && "btn-active",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Toggle.displayName = "Toggle";
var ToggleGroup = forwardRef55(
  ({ type, value, onChange, size = "md", variant, children, className, ...props }, ref) => {
    const handleItemChange = (itemValue) => {
      if (type === "single") {
        onChange?.(itemValue);
      } else {
        const currentValues = Array.isArray(value) ? value : [];
        const newValues = currentValues.includes(itemValue) ? currentValues.filter((v) => v !== itemValue) : [...currentValues, itemValue];
        onChange?.(newValues);
      }
    };
    return /* @__PURE__ */ jsx55(
      ToggleGroupContext.Provider,
      {
        value: { type, value, onChange: handleItemChange, size, variant },
        children: /* @__PURE__ */ jsx55("div", { ref, className: clsx55("join", className), role: "group", ...props, children })
      }
    );
  }
);
ToggleGroup.displayName = "ToggleGroup";
var ToggleGroupItem = forwardRef55(
  ({ value, children, className, ...props }, ref) => {
    const { type, value: groupValue, onChange, size, variant } = useToggleGroup();
    const isPressed = type === "single" ? groupValue === value : Array.isArray(groupValue) && groupValue.includes(value);
    return /* @__PURE__ */ jsx55(
      "button",
      {
        ref,
        type: "button",
        onClick: () => onChange?.(value),
        "aria-pressed": isPressed,
        className: clsx55(
          "btn join-item",
          size && sizeClasses23[size],
          variant && variantClasses22[variant],
          isPressed && "btn-active",
          className
        ),
        ...props,
        children
      }
    );
  }
);
ToggleGroupItem.displayName = "ToggleGroupItem";

// src/components/Tooltip.tsx
import clsx56 from "clsx";
import { forwardRef as forwardRef56 } from "react";
import { jsx as jsx56 } from "react/jsx-runtime";
var positionClasses4 = {
  top: "tooltip-top",
  bottom: "tooltip-bottom",
  left: "tooltip-left",
  right: "tooltip-right"
};
var variantClasses23 = {
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error"
};
var Tooltip = forwardRef56(
  ({ content, position = "top", variant, open, children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx56(
      "div",
      {
        ref,
        className: clsx56(
          "tooltip",
          positionClasses4[position],
          variant && variantClasses23[variant],
          open && "tooltip-open",
          className
        ),
        "data-tip": content,
        ...props,
        children
      }
    );
  }
);
Tooltip.displayName = "Tooltip";

// src/components/Typography.tsx
import clsx57 from "clsx";
import { forwardRef as forwardRef57 } from "react";
import { jsx as jsx57 } from "react/jsx-runtime";
var variantClasses24 = {
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
  muted: "text-sm text-base-content/60"
};
var defaultElements = {
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
  muted: "p"
};
var Typography = forwardRef57(
  ({ variant = "p", as, children, className, ...props }, ref) => {
    const Component = as || defaultElements[variant];
    return /* @__PURE__ */ jsx57(Component, { ref, className: clsx57(variantClasses24[variant], className), ...props, children });
  }
);
Typography.displayName = "Typography";
export {
  Accordion,
  AccordionItem,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertTitle,
  AmountField,
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardActions,
  CardBody,
  CardTitle,
  Checkbox,
  Collapsible,
  Combobox,
  Command,
  CommandGroup,
  CommandItem,
  ContextMenu,
  ControlledDynamicFormField,
  DataTable,
  DateInput,
  DatePicker,
  Dialog,
  DialogActions,
  DialogCloseButton,
  DialogDescription,
  DialogTitle,
  Drawer,
  Dropdown,
  DropdownMenu,
  DynamicForm,
  DynamicFormField,
  Empty,
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  FullPageLoader,
  HoverCard,
  Input,
  InputGroup,
  InputOTP,
  Item,
  Kbd,
  Label,
  Menubar,
  MenubarItem,
  NativeSelect,
  Navbar,
  NavbarCenter,
  NavbarEnd,
  NavbarStart,
  NavigationMenu,
  NavigationMenuItem,
  Pagination,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Separator,
  Sheet,
  Sidebar,
  SidebarItem,
  Skeleton,
  Slider,
  SortableDataTable,
  Spinner,
  Switch,
  Tab,
  TabPanel,
  Table,
  Tabs,
  Textarea,
  ToastItem,
  ToastProvider,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  Typography,
  useToast
};
//# sourceMappingURL=index.mjs.map