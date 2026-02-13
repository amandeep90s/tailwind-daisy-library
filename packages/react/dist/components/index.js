"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  Accordion: () => Accordion,
  AccordionItem: () => AccordionItem,
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  AlertDialog: () => AlertDialog,
  AlertTitle: () => AlertTitle,
  AmountField: () => AmountField,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  Badge: () => Badge,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbItem: () => BreadcrumbItem,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Calendar: () => Calendar,
  Card: () => Card,
  CardActions: () => CardActions,
  CardBody: () => CardBody,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Collapsible: () => Collapsible,
  Combobox: () => Combobox,
  Command: () => Command,
  CommandGroup: () => CommandGroup,
  CommandItem: () => CommandItem,
  ContextMenu: () => ContextMenu,
  ControlledDynamicFormField: () => ControlledDynamicFormField,
  DataTable: () => DataTable,
  DateInput: () => DateInput,
  DatePicker: () => DatePicker,
  Dialog: () => Dialog,
  DialogActions: () => DialogActions,
  DialogCloseButton: () => DialogCloseButton,
  DialogDescription: () => DialogDescription,
  DialogTitle: () => DialogTitle,
  Drawer: () => Drawer,
  Dropdown: () => Dropdown,
  DropdownMenu: () => DropdownMenu,
  DynamicForm: () => DynamicForm,
  DynamicFormField: () => DynamicFormField,
  Empty: () => Empty,
  Field: () => Field,
  FieldDescription: () => FieldDescription,
  FieldError: () => FieldError,
  FieldGroup: () => FieldGroup,
  FieldLabel: () => FieldLabel,
  FieldLegend: () => FieldLegend,
  FieldSeparator: () => FieldSeparator,
  FieldSet: () => FieldSet,
  Form: () => Form,
  FormActions: () => FormActions,
  FormControl: () => FormControl,
  FormDescription: () => FormDescription,
  FormField: () => FormField,
  FormItem: () => FormItem,
  FormLabel: () => FormLabel,
  FormMessage: () => FormMessage,
  FormSection: () => FormSection,
  FullPageLoader: () => FullPageLoader,
  HoverCard: () => HoverCard,
  Input: () => Input,
  InputGroup: () => InputGroup,
  InputOTP: () => InputOTP,
  Item: () => Item,
  Kbd: () => Kbd,
  Label: () => Label,
  Menubar: () => Menubar,
  MenubarItem: () => MenubarItem,
  NativeSelect: () => NativeSelect,
  Navbar: () => Navbar,
  NavbarCenter: () => NavbarCenter,
  NavbarEnd: () => NavbarEnd,
  NavbarStart: () => NavbarStart,
  NavigationMenu: () => NavigationMenu,
  NavigationMenuItem: () => NavigationMenuItem,
  Pagination: () => Pagination,
  Popover: () => Popover,
  Progress: () => Progress,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  Select: () => Select,
  Separator: () => Separator,
  Sheet: () => Sheet,
  Sidebar: () => Sidebar,
  SidebarItem: () => SidebarItem,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  SortableDataTable: () => SortableDataTable,
  Spinner: () => Spinner,
  Switch: () => Switch,
  Tab: () => Tab,
  TabPanel: () => TabPanel,
  Table: () => Table,
  Tabs: () => Tabs,
  Textarea: () => Textarea,
  ToastItem: () => ToastItem,
  ToastProvider: () => ToastProvider,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Tooltip: () => Tooltip,
  Typography: () => Typography,
  useToast: () => useToast
});
module.exports = __toCommonJS(components_exports);

// src/components/AmountField.tsx
var import_clsx = __toESM(require("clsx"));
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
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
var AmountField = (0, import_react.forwardRef)(
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
    const [displayValue, setDisplayValue] = (0, import_react.useState)("");
    const [isFocused, setIsFocused] = (0, import_react.useState)(false);
    const inputId = id || (label ? `amount-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    (0, import_react.useEffect)(() => {
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
    const inputClasses = (0, import_clsx.default)(
      "input w-full",
      variant !== "floating" && variantClasses[variant],
      error ? colorClasses.error : colorClasses[color],
      sizeClasses[size],
      disabled && "input-disabled",
      className
    );
    const renderInput = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative flex w-full items-center", children: [
      currencySymbol && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "span",
        {
          className: (0, import_clsx.default)(
            "text-base-content pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 font-medium",
            disabled && "opacity-50"
          ),
          children: currencySymbol
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
          className: (0, import_clsx.default)(inputClasses, currencySymbol && "pl-8"),
          "aria-invalid": error ? "true" : void 0,
          "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
          ...props
        }
      )
    ] });
    if (variant === "floating") {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "floating-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative flex w-full items-center", children: [
            currencySymbol && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                className: (0, import_clsx.default)(
                  "text-base-content pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 font-medium",
                  disabled && "opacity-50"
                ),
                children: currencySymbol
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                className: (0, import_clsx.default)(inputClasses, currencySymbol && "pl-8"),
                "aria-invalid": error ? "true" : void 0,
                "aria-describedby": error ? `${inputId}-error` : helperText ? `${inputId}-helper` : void 0,
                ...props
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    if (!label && !error && !helperText) {
      return renderInput();
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "form-control w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "label", htmlFor: inputId, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label-text", children: label }) }),
      renderInput(),
      error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "label", id: `${inputId}-error`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label-text-alt text-error", children: error }) }),
      !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "label", id: `${inputId}-helper`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label-text-alt text-base-content/60", children: helperText }) })
    ] });
  }
);
AmountField.displayName = "AmountField";

// src/components/Button.tsx
var import_clsx2 = __toESM(require("clsx"));
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
var Button = (0, import_react2.forwardRef)(
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
    const buttonClasses = (0, import_clsx2.default)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        LinkComponent,
        {
          to,
          className: (0, import_clsx2.default)(
            buttonClasses,
            (disabled2 || loading) && "btn-disabled pointer-events-auto cursor-not-allowed"
          ),
          "aria-disabled": disabled2 || loading,
          tabIndex: disabled2 || loading ? -1 : void 0,
          onClick: handleClick,
          children: [
            loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "loading loading-spinner" }),
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        ref,
        type,
        disabled: disabled || loading,
        className: buttonClasses,
        ...buttonRestProps,
        children: [
          loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "loading loading-spinner" }),
          children
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
var import_clsx3 = __toESM(require("clsx"));
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
var Input = (0, import_react3.forwardRef)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "floating-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: label ?? props.placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              ref,
              id: inputId,
              className: (0, import_clsx3.default)(
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
        error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    const inputClasses = (0, import_clsx3.default)(
      "input w-full",
      variantClasses3[variant],
      error ? colorClasses2.error : colorClasses2[color],
      sizeClasses3[size],
      className
    );
    const hasWrapper = startIcon || endIcon || wrapperStyle;
    const renderInput = () => {
      if (hasWrapper) {
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "label",
          {
            className: (0, import_clsx3.default)(
              "input flex w-full items-center gap-2",
              variantClasses3[variant],
              error ? colorClasses2.error : colorClasses2[color],
              sizeClasses3[size],
              className
            ),
            children: [
              startIcon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-base-content/50", children: startIcon }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
              endIcon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-base-content/50", children: endIcon })
            ]
          }
        );
      }
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "form-control w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { className: "label", htmlFor: inputId, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "label-text font-medium", children: label }) }),
      renderInput(),
      error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { className: "label", id: `${inputId}-error`, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "label-text-alt text-error", children: error }) }),
      !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { className: "label", id: `${inputId}-helper`, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "label-text-alt", children: helperText }) })
    ] });
  }
);
Input.displayName = "Input";

// src/components/Label.tsx
var import_clsx4 = __toESM(require("clsx"));
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Label = (0, import_react4.forwardRef)(
  ({ children, required = false, alt = false, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", { ref, className: (0, import_clsx4.default)("label", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: (0, import_clsx4.default)(alt ? "label-text-alt" : "label-text", "font-medium"), children: [
      children,
      required && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-error ml-1", children: "*" })
    ] }) });
  }
);
Label.displayName = "Label";

// src/components/Accordion.tsx
var import_clsx5 = __toESM(require("clsx"));
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var variantClasses4 = {
  default: "",
  plus: "collapse-plus",
  arrow: "collapse-arrow"
};
var Accordion = (0, import_react5.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { ref, className: (0, import_clsx5.default)("space-y-2", className), ...props, children });
  }
);
Accordion.displayName = "Accordion";
var ChevronIcon = ({ isOpen, className }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "svg",
  {
    className: (0, import_clsx5.default)(
      "h-5 w-5 shrink-0 transition-transform duration-200",
      isOpen && "rotate-180",
      className
    ),
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
  }
);
var AccordionItem = (0, import_react5.forwardRef)(
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
    const [internalOpen, setInternalOpen] = (0, import_react5.useState)(defaultOpen);
    const isControlled = controlledOpen !== void 0;
    const isOpen = isControlled ? controlledOpen : internalOpen;
    const handleToggle = (0, import_react5.useCallback)(() => {
      const newOpen = !isOpen;
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    }, [isOpen, isControlled, onOpenChange]);
    const handleTitleClick = (0, import_react5.useCallback)(
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleToggle();
      },
      [handleToggle]
    );
    const handleTitleKeyDown = (0, import_react5.useCallback)(
      (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      },
      [handleToggle]
    );
    const handleActionsClick = (0, import_react5.useCallback)((e) => {
      e.stopPropagation();
    }, []);
    const useCustomIcon = variant === "default" || iconPosition === "right";
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx5.default)(
          "collapse",
          "bg-base-200",
          // Only apply variant classes if not using custom icon
          !useCustomIcon && variantClasses4[variant],
          isOpen && "collapse-open",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "checkbox", className: "hidden", checked: isOpen, readOnly: true }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "div",
            {
              className: (0, import_clsx5.default)(
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
                useCustomIcon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ChevronIcon, { isOpen }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: (0, import_clsx5.default)("grow", iconPosition === "right" && "text-left"), children: title }),
                actions && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "collapse-content", children })
        ]
      }
    );
  }
);
AccordionItem.displayName = "AccordionItem";

// src/components/Alert.tsx
var import_clsx6 = __toESM(require("clsx"));
var import_react6 = require("react");
var import_outline = require("@heroicons/react/24/outline");
var import_jsx_runtime6 = require("react/jsx-runtime");
var defaultIcons = {
  info: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline.InformationCircleIcon, { className: "h-6 w-6 shrink-0 stroke-current" }),
  success: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline.CheckCircleIcon, { className: "h-6 w-6 shrink-0 stroke-current" }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline.ExclamationTriangleIcon, { className: "h-6 w-6 shrink-0 stroke-current" }),
  error: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_outline.XCircleIcon, { className: "h-6 w-6 shrink-0 stroke-current" })
};
var variantClasses5 = {
  info: "alert-info",
  success: "alert-success",
  warning: "alert-warning",
  error: "alert-error"
};
var Alert = (0, import_react6.forwardRef)(
  ({ variant = "info", icon, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        ref,
        role: "alert",
        className: (0, import_clsx6.default)("alert", variant && variantClasses5[variant], className),
        ...props,
        children: [
          icon ?? defaultIcons[variant],
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children })
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = (0, import_react6.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { ref, className: (0, import_clsx6.default)("font-bold", className), ...props, children });
  }
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = (0, import_react6.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { ref, className: (0, import_clsx6.default)("text-sm", className), ...props, children });
  }
);
AlertDescription.displayName = "AlertDescription";

// src/components/AlertDialog.tsx
var import_clsx7 = __toESM(require("clsx"));
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var AlertDialog = (0, import_react7.forwardRef)(
  ({ open, onClose, title, description, actions, children, className, ...props }, ref) => {
    const dialogRef = (0, import_react7.useRef)(null);
    const internalRef = ref || dialogRef;
    (0, import_react7.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "dialog",
      {
        ref: internalRef,
        className: (0, import_clsx7.default)("modal", className),
        onClick: handleBackdropClick,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "modal-box", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "text-lg font-bold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "py-4", children: description }),
            children,
            actions && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "modal-action", children: actions })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", onClick: onClose, children: "close" }) })
        ]
      }
    );
  }
);
AlertDialog.displayName = "AlertDialog";

// src/components/Avatar.tsx
var import_clsx8 = __toESM(require("clsx"));
var import_react8 = __toESM(require("react"));
var import_jsx_runtime8 = require("react/jsx-runtime");
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
var Avatar = (0, import_react8.forwardRef)(
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
    const ringClasses = ring ? (0, import_clsx8.default)("ring", ringColorClasses[ringColor], ringOffset && "ring-offset ring-offset-base-100") : "";
    const placeholderClasses = isPlaceholder ? placeholderColorClasses[placeholderColor] : "";
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx8.default)(
          "avatar",
          status === "online" && "avatar-online",
          status === "offline" && "avatar-offline",
          isPlaceholder && "avatar-placeholder",
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "div",
          {
            className: (0, import_clsx8.default)(
              sizeClasses4[size],
              shapeClasses2[shape],
              // Directly use shape prop
              ringClasses,
              isPlaceholder && placeholderClasses
            ),
            children: src ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src, alt }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: sizeFontClasses[size], children: fallback || "?" })
          }
        )
      }
    );
  }
);
Avatar.displayName = "Avatar";
var AvatarGroup = (0, import_react8.forwardRef)(
  ({ children, max, size = "md", shape = "circle", className, ...props }, ref) => {
    const childArray = import_react8.default.Children.toArray(children);
    const displayChildren = max ? childArray.slice(0, max) : childArray;
    const remaining = max && childArray.length > max ? childArray.length - max : 0;
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx8.default)("avatar-group -space-x-6 rtl:space-x-reverse", className),
        ...props,
        children: [
          displayChildren,
          remaining > 0 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "avatar avatar-placeholder", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "div",
            {
              className: (0, import_clsx8.default)(
                sizeClasses4[size],
                shapeClasses2[shape],
                "bg-neutral text-neutral-content"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: sizeFontClasses[size], children: [
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
var import_clsx9 = __toESM(require("clsx"));
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
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
var Badge = (0, import_react9.forwardRef)(
  ({ variant = "default", size = "md", children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "span",
      {
        ref,
        className: (0, import_clsx9.default)("badge", variantClasses6[variant], sizeClasses5[size], className),
        ...props,
        children
      }
    );
  }
);
Badge.displayName = "Badge";

// src/components/Breadcrumb.tsx
var import_clsx10 = __toESM(require("clsx"));
var import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Breadcrumb = (0, import_react10.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "nav",
      {
        ref,
        "aria-label": "Breadcrumb",
        className: (0, import_clsx10.default)("breadcrumbs text-sm", className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { children })
      }
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbItem = (0, import_react10.forwardRef)(
  ({ href, current, children, className, ...props }, ref) => {
    const content = href && !current ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href, children }) : children;
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { ref, className: (0, import_clsx10.default)(className), ...props, children: content });
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// src/components/ButtonGroup.tsx
var import_clsx11 = __toESM(require("clsx"));
var import_react11 = __toESM(require("react"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var ButtonGroup = (0, import_react11.forwardRef)(
  ({ orientation = "horizontal", children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx11.default)("join", orientation === "vertical" && "join-vertical", className),
        ...props,
        children: import_react11.default.Children.map(children, (child) => {
          if (import_react11.default.isValidElement(child)) {
            return import_react11.default.cloneElement(child, {
              className: (0, import_clsx11.default)(child.props.className, "join-item")
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
var import_clsx12 = __toESM(require("clsx"));
var import_react12 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
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
var Calendar = (0, import_react12.forwardRef)(
  ({ value, onChange, minDate, maxDate, className, ...props }, ref) => {
    const [currentDate, setCurrentDate] = (0, import_react12.useState)(value || /* @__PURE__ */ new Date());
    const [viewMonth, setViewMonth] = (0, import_react12.useState)(currentDate.getMonth());
    const [viewYear, setViewYear] = (0, import_react12.useState)(currentDate.getFullYear());
    (0, import_react12.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { ref, className: (0, import_clsx12.default)("bg-base-100 rounded-lg p-4 shadow-lg", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { onClick: handlePrevMonth, className: "btn btn-ghost btn-sm", children: "\u2039" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("h3", { className: "text-lg font-bold", children: [
          MONTHS[viewMonth],
          " ",
          viewYear
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { onClick: handleNextMonth, className: "btn btn-ghost btn-sm", children: "\u203A" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mb-2 grid grid-cols-7 gap-1", children: DAYS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-base-content/70 py-2 text-center text-sm font-medium", children: day }, day)) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid grid-cols-7 gap-1", children: calendarDays.map((day, index) => {
        if (day === null) {
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {}, `empty-${index}`);
        }
        const date = new Date(viewYear, viewMonth, day);
        const isSelected = value && isSameDay(date, value);
        const isToday = isSameDay(date, /* @__PURE__ */ new Date());
        const isDisabled = isDateDisabled(day);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            onClick: () => handleDateClick(day),
            disabled: isDisabled,
            className: (0, import_clsx12.default)(
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
var import_clsx13 = __toESM(require("clsx"));
var import_react13 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var variantClasses7 = {
  default: "bg-base-100",
  bordered: "card-border",
  compact: "card-sm",
  side: "card-side"
};
var Card = (0, import_react13.forwardRef)(
  ({ variant = "default", imageSrc, imageAlt = "", children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx13.default)("card shadow-sm", variantClasses7[variant], className),
        ...props,
        children: [
          imageSrc && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src: imageSrc, alt: imageAlt }) }),
          children
        ]
      }
    );
  }
);
Card.displayName = "Card";
var CardBody = (0, import_react13.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { ref, className: (0, import_clsx13.default)("card-body", className), ...props, children });
  }
);
CardBody.displayName = "CardBody";
var CardTitle = (0, import_react13.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { ref, className: (0, import_clsx13.default)("card-title", className), ...props, children });
  }
);
CardTitle.displayName = "CardTitle";
var CardActions = (0, import_react13.forwardRef)(
  ({ justify = "end", children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { ref, className: (0, import_clsx13.default)("card-actions", `justify-${justify}`, className), ...props, children });
  }
);
CardActions.displayName = "CardActions";

// src/components/Checkbox.tsx
var import_clsx14 = __toESM(require("clsx"));
var import_react14 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
var Checkbox = (0, import_react14.forwardRef)(
  ({ variant, size = "md", label, indeterminate, className, id, ...props }, ref) => {
    const checkboxId = id || (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    const checkbox = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "input",
      {
        ref,
        id: checkboxId,
        type: "checkbox",
        className: (0, import_clsx14.default)(
          "checkbox",
          variant && variantClasses8[variant],
          sizeClasses6[size],
          className
        ),
        ...props
      }
    );
    if (label) {
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { htmlFor: checkboxId, className: "label cursor-pointer justify-start gap-2", children: [
        checkbox,
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "label-text", children: label })
      ] });
    }
    return checkbox;
  }
);
Checkbox.displayName = "Checkbox";

// src/components/Collapsible.tsx
var import_clsx15 = __toESM(require("clsx"));
var import_react15 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Collapsible = (0, import_react15.forwardRef)(
  ({
    defaultOpen = false,
    open: controlledOpen,
    onOpenChange,
    trigger,
    children,
    className,
    ...props
  }, ref) => {
    const [internalOpen, setInternalOpen] = (0, import_react15.useState)(defaultOpen);
    const isOpen = controlledOpen !== void 0 ? controlledOpen : internalOpen;
    const handleToggle = () => {
      const newOpen = !isOpen;
      if (controlledOpen === void 0) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { ref, className: (0, import_clsx15.default)("collapse", isOpen && "collapse-open", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "collapse-title", onClick: handleToggle, role: "button", tabIndex: 0, children: trigger }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "collapse-content", children })
    ] });
  }
);
Collapsible.displayName = "Collapsible";

// src/components/Combobox.tsx
var import_solid = require("@heroicons/react/20/solid");
var import_clsx16 = __toESM(require("clsx"));
var import_react16 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Combobox = (0, import_react16.forwardRef)(
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
    const [isOpen, setIsOpen] = (0, import_react16.useState)(false);
    const [searchTerm, setSearchTerm] = (0, import_react16.useState)("");
    const [position, setPosition] = (0, import_react16.useState)("bottom");
    const containerRef = (0, import_react16.useRef)(null);
    const triggerRef = (0, import_react16.useRef)(null);
    const dropdownRef = (0, import_react16.useRef)(null);
    const searchInputRef = (0, import_react16.useRef)(null);
    const comboboxId = id || `combobox-${Math.random().toString(36).substr(2, 9)}`;
    const filteredOptions = options.filter(
      (option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const selectedOption = options.find((opt) => opt.value === value);
    const calculatePosition = (0, import_react16.useCallback)(() => {
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
    (0, import_react16.useEffect)(() => {
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
    (0, import_react16.useEffect)(() => {
      const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    (0, import_react16.useEffect)(() => {
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
    const dropdownContent = /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "div",
      {
        ref: containerRef,
        className: (0, import_clsx16.default)(
          "dropdown w-full",
          isOpen && "dropdown-open",
          variant !== "floating" && className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
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
              className: (0, import_clsx16.default)(
                "btn btn-outline w-full justify-between font-normal",
                !selectedOption && "text-base-content/50",
                disabled && "btn-disabled",
                error && "btn-error"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "truncate", children: selectedOption?.label || placeholder }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  import_solid.ChevronDownIcon,
                  {
                    className: (0, import_clsx16.default)(
                      "h-5 w-5 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )
                  }
                )
              ]
            }
          ),
          isOpen && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
            "div",
            {
              ref: dropdownRef,
              className: (0, import_clsx16.default)(
                "dropdown-content bg-base-100 rounded-box border-base-300 z-50 w-full border shadow-lg",
                position === "bottom" ? "mt-1" : "bottom-full mb-1"
              ),
              style: position === "top" ? { bottom: "100%", top: "auto" } : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "border-base-300 border-b p-2", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "ul",
                  {
                    className: "menu max-h-60 w-full flex-col flex-nowrap overflow-y-auto p-2",
                    role: "listbox",
                    children: filteredOptions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { className: "disabled w-full", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-base-content/50 w-full text-center", children: emptyText }) }) : filteredOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "li",
                      {
                        role: "option",
                        "aria-selected": option.value === value,
                        className: "w-full",
                        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                          "button",
                          {
                            type: "button",
                            onClick: () => handleSelect(option.value),
                            disabled: option.disabled,
                            className: (0, import_clsx16.default)(
                              "flex w-full items-center justify-between",
                              option.value === value && "active"
                            ),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "truncate", children: option.label }),
                              option.value === value && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_solid.CheckIcon, { className: "h-4 w-4" })
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
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: (0, import_clsx16.default)("form-control w-full", className), children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { className: "floating-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { children: label }),
          dropdownContent
        ] }),
        error && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return dropdownContent;
  }
);
Combobox.displayName = "Combobox";

// src/components/Command.tsx
var import_clsx17 = __toESM(require("clsx"));
var import_react17 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var Command = (0, import_react17.forwardRef)(
  ({ value, onValueChange, placeholder = "Type a command...", children, className, ...props }, ref) => {
    const [searchValue, setSearchValue] = (0, import_react17.useState)(value || "");
    const handleSearchChange = (e) => {
      const newValue = e.target.value;
      setSearchValue(newValue);
      onValueChange?.(newValue);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx17.default)("bg-base-100 overflow-hidden rounded-lg shadow-lg", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "border-base-300 border-b p-3", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "input",
            {
              type: "text",
              value: searchValue,
              onChange: handleSearchChange,
              placeholder,
              className: "input input-ghost w-full focus:outline-none"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "max-h-75 overflow-y-auto p-2", children })
        ]
      }
    );
  }
);
Command.displayName = "Command";
var CommandGroup = (0, import_react17.forwardRef)(
  ({ heading, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { ref, className: (0, import_clsx17.default)("py-2", className), ...props, children: [
      heading && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-base-content/70 px-2 py-1.5 text-xs font-semibold", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "space-y-1", children })
    ] });
  }
);
CommandGroup.displayName = "CommandGroup";
var CommandItem = (0, import_react17.forwardRef)(
  ({ value, onSelect, disabled, children, className, ...props }, ref) => {
    const handleClick = () => {
      if (value && !disabled) {
        onSelect?.(value);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        ref,
        type: "button",
        onClick: handleClick,
        disabled,
        className: (0, import_clsx17.default)(
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
var import_clsx18 = __toESM(require("clsx"));
var import_react18 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var ContextMenu = (0, import_react18.forwardRef)(
  ({ items, trigger, children, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = (0, import_react18.useState)(false);
    const [position, setPosition] = (0, import_react18.useState)({ x: 0, y: 0 });
    const menuRef = (0, import_react18.useRef)(null);
    (0, import_react18.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "div",
      {
        ref,
        onContextMenu: handleContextMenu,
        className: (0, import_clsx18.default)("relative", className),
        ...props,
        children: [
          trigger,
          isOpen && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "ul",
            {
              ref: menuRef,
              className: "menu bg-base-100 rounded-box absolute z-100 min-w-50 shadow-lg",
              style: { left: position.x, top: position.y },
              children: items.map((item, index) => {
                if (item.separator) {
                  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", { className: "menu-title" }, index);
                }
                return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleItemClick(item),
                    disabled: item.disabled,
                    className: (0, import_clsx18.default)("flex items-center gap-2"),
                    children: [
                      item.icon && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: item.icon }),
                      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: item.label })
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
var import_outline2 = require("@heroicons/react/24/outline");
var import_clsx20 = __toESM(require("clsx"));
var import_react20 = __toESM(require("react"));

// src/components/Pagination.tsx
var import_clsx19 = __toESM(require("clsx"));
var import_react19 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
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
var Pagination = (0, import_react19.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { ref, className: (0, import_clsx19.default)("join", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { className: "join-item btn btn-disabled", children: "..." }, `ellipsis-${index}`);
        }
        const pageNumber = page;
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "button",
          {
            className: (0, import_clsx19.default)("join-item btn", currentPage === pageNumber && "btn-active"),
            onClick: () => handlePageClick(pageNumber),
            "aria-label": `Page ${pageNumber}`,
            "aria-current": currentPage === pageNumber ? "page" : void 0,
            children: pageNumber
          },
          pageNumber
        );
      }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_jsx_runtime20 = require("react/jsx-runtime");
var SortIcon = ({
  direction,
  active
}) => {
  const activeClass = active ? "text-primary" : "text-base-content/40";
  if (direction === "both") {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col -space-y-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { className: (0, import_clsx20.default)("h-3 w-3", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M7 14l5-5 5 5H7z" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { className: (0, import_clsx20.default)("h-3 w-3", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M7 10l5 5 5-5H7z" }) })
    ] });
  }
  if (direction === "asc") {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { className: (0, import_clsx20.default)("h-4 w-4", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M7 14l5-5 5 5H7z" }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("svg", { className: (0, import_clsx20.default)("h-4 w-4", activeClass), fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M7 10l5 5 5-5H7z" }) });
};
var ExpandIcon = ({ expanded }) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "svg",
  {
    className: (0, import_clsx20.default)("h-5 w-5 transition-transform duration-200", expanded && "rotate-180"),
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
  }
);
var sizeClasses7 = {
  xs: "table-xs",
  sm: "table-sm",
  md: "table-md",
  lg: "table-lg"
};
var SortableDataTable = (0, import_react20.forwardRef)(
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
    const [internalExpandedKeys, setInternalExpandedKeys] = (0, import_react20.useState)(defaultExpandedKeys);
    const [internalSortState, setInternalSortState] = (0, import_react20.useState)(defaultSort);
    const [internalCurrentPage, setInternalCurrentPage] = (0, import_react20.useState)(defaultPage);
    const [internalPageSize, setInternalPageSize] = (0, import_react20.useState)(controlledPageSize);
    const expandedKeys = controlledExpandedKeys ?? internalExpandedKeys;
    const sortState = controlledSortState ?? internalSortState;
    const currentPage = controlledCurrentPage ?? internalCurrentPage;
    const pageSize = onPageSizeChange ? controlledPageSize : internalPageSize;
    const handleExpandToggle = (0, import_react20.useCallback)(
      (key) => {
        const newKeys = expandedKeys.includes(key) ? expandedKeys.filter((k) => k !== key) : [...expandedKeys, key];
        if (controlledExpandedKeys === void 0) {
          setInternalExpandedKeys(newKeys);
        }
        onExpandedChange?.(newKeys);
      },
      [expandedKeys, controlledExpandedKeys, onExpandedChange]
    );
    const handleSortClick = (0, import_react20.useCallback)(
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
    const sortedData = (0, import_react20.useMemo)(() => {
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
    const totalPages = (0, import_react20.useMemo)(() => {
      if (!pagination || pageSize <= 0) return 1;
      return Math.ceil(sortedData.length / pageSize);
    }, [pagination, sortedData.length, pageSize]);
    const handlePageChange = (0, import_react20.useCallback)(
      (page) => {
        if (controlledCurrentPage === void 0) {
          setInternalCurrentPage(page);
        }
        onPageChange?.(page);
      },
      [controlledCurrentPage, onPageChange]
    );
    const handlePageSizeChange = (0, import_react20.useCallback)(
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
    const paginatedData = (0, import_react20.useMemo)(() => {
      if (!pagination) return sortedData;
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return sortedData.slice(startIndex, endIndex);
    }, [pagination, sortedData, currentPage, pageSize]);
    const recordRange = (0, import_react20.useMemo)(() => {
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
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SortIcon, { direction, active });
    };
    const renderExpandIcon = (expanded) => {
      if (expandIcon) {
        return expandIcon(expanded);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ExpandIcon, { expanded });
    };
    const renderNumberedPagination = () => {
      if (!pagination || totalPages <= 1) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: (0, import_clsx20.default)("flex justify-center", paginationClassName), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: (0, import_clsx20.default)("flex items-center justify-between", paginationClassName), children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "select",
            {
              className: "select select-bordered select-sm",
              value: pageSize,
              onChange: (e) => handlePageSizeChange(Number(e.target.value)),
              "aria-label": "Rows per page",
              children: pageSizeOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("option", { value: option, children: option }, option))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-base-content/70 text-sm", children: [
            "of ",
            recordRange.total,
            " records"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              type: "button",
              className: "btn btn-ghost btn-sm btn-square",
              onClick: () => handlePageChange(currentPage - 1),
              disabled: currentPage === 1,
              "aria-label": "Previous page",
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_outline2.ChevronLeftIcon, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "button",
            {
              type: "button",
              className: "btn btn-ghost btn-sm btn-square",
              onClick: () => handlePageChange(currentPage + 1),
              disabled: currentPage >= totalPages,
              "aria-label": "Next page",
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_outline2.ChevronRightIcon, { className: "h-5 w-5" })
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
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { ref, className: (0, import_clsx20.default)("w-full", className), ...props, children: [
      pagination && (paginationPosition === "top" || paginationPosition === "both") && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "mb-4", children: renderPagination() }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
        "table",
        {
          className: (0, import_clsx20.default)(
            "table",
            sizeClasses7[size],
            zebra && "table-zebra",
            pinRows && "table-pin-rows",
            pinCols && "table-pin-cols",
            tableClassName
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("tr", { className: headerClassName, children: [
              columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                "th",
                {
                  className: (0, import_clsx20.default)(
                    alignmentClasses[column.headerAlign || "left"],
                    column.sortable && "hover:bg-base-200 cursor-pointer select-none"
                  ),
                  style: { width: column.width },
                  onClick: column.sortable ? () => handleSortClick(column.key) : void 0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                    "div",
                    {
                      className: (0, import_clsx20.default)(
                        "flex items-center gap-2",
                        column.headerAlign === "center" && "justify-center",
                        column.headerAlign === "right" && "justify-end"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: column.header }),
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
              expandable && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("th", { className: "w-12" })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tbody", { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("td", { colSpan: totalColumns, className: "py-8 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "loading loading-spinner loading-md" }) }) }) : sortedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("td", { colSpan: totalColumns, className: "text-base-content/60 py-8 text-center", children: emptyMessage }) }) : paginatedData.map((item, index) => {
              const rowKey = getRowKey(item);
              const isExpanded = expandedKeys.includes(rowKey);
              const actualIndex = pagination ? (currentPage - 1) * pageSize + index : index;
              return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react20.default.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                  "tr",
                  {
                    className: (0, import_clsx20.default)(
                      getRowClass(item, actualIndex),
                      isExpanded && "bg-base-200"
                    ),
                    children: [
                      columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                        "td",
                        {
                          className: alignmentClasses[column.cellAlign || "left"],
                          children: column.render ? column.render(item, actualIndex) : item[column.key]
                        },
                        column.key
                      )),
                      expandable && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("td", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
                expandable && isExpanded && renderExpandedRow && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("tr", { className: "bg-base-200/50", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("td", { colSpan: totalColumns, className: "p-4", children: renderExpandedRow(item) }) })
              ] }, rowKey);
            }) })
          ]
        }
      ) }),
      pagination && (paginationPosition === "bottom" || paginationPosition === "both") && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "mt-4", children: renderPagination() })
    ] });
  }
);
SortableDataTable.displayName = "SortableDataTable";

// src/components/DateInput.tsx
var import_outline3 = require("@heroicons/react/24/outline");
var import_clsx21 = __toESM(require("clsx"));
var import_react21 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
var DateInput = (0, import_react21.forwardRef)(
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
    const [inputValue, setInputValue] = (0, import_react21.useState)("");
    const [isCalendarOpen, setIsCalendarOpen] = (0, import_react21.useState)(false);
    const containerRef = (0, import_react21.useRef)(null);
    const inputId = id || (label ? `date-input-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    (0, import_react21.useEffect)(() => {
      setInputValue(formatDateToString(value || null, dateFormat));
    }, [value, dateFormat]);
    (0, import_react21.useEffect)(() => {
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
    const handleInputChange = (0, import_react21.useCallback)(
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
    const handleCalendarSelect = (0, import_react21.useCallback)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "form-control w-full", ref: containerRef, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "label", htmlFor: inputId, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "label-text font-medium", children: label }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
          "label",
          {
            className: (0, import_clsx21.default)(
              "input flex w-full items-center gap-2",
              variantClasses9[variant],
              error ? colorClasses3.error : colorClasses3[color],
              sizeClasses8[size],
              disabled && "input-disabled",
              className
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
              showCalendar && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "button",
                {
                  type: "button",
                  onClick: toggleCalendar,
                  disabled,
                  className: "text-base-content/50 hover:text-base-content transition-colors",
                  "aria-label": "Open calendar",
                  children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_outline3.CalendarDaysIcon, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        isCalendarOpen && showCalendar && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "absolute right-0 z-50 mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          Calendar,
          {
            value: value || void 0,
            onChange: handleCalendarSelect,
            minDate,
            maxDate
          }
        ) })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "label", id: `${inputId}-error`, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "label-text-alt text-error", children: error }) }),
      !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { className: "label", id: `${inputId}-helper`, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "label-text-alt", children: helperText }) })
    ] });
  }
);
DateInput.displayName = "DateInput";

// src/components/DatePicker.tsx
var import_clsx22 = __toESM(require("clsx"));
var import_react22 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
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
var DatePicker = (0, import_react22.forwardRef)(
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
    const inputClasses = (0, import_clsx22.default)(
      "input w-full",
      variant !== "floating" && variantClasses10[variant],
      error ? colorClasses4.error : color && colorClasses4[color],
      sizeClasses9[size],
      className
    );
    if (variant === "floating") {
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("label", { className: "floating-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
        error && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
var import_clsx23 = __toESM(require("clsx"));
var import_react23 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
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
var DialogTitle = (0, import_react23.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("h3", { ref, className: (0, import_clsx23.default)("text-lg font-bold", className), ...props, children });
  }
);
DialogTitle.displayName = "DialogTitle";
var DialogDescription = (0, import_react23.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { ref, className: (0, import_clsx23.default)("py-4", className), ...props, children });
  }
);
DialogDescription.displayName = "DialogDescription";
var DialogActions = (0, import_react23.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { ref, className: (0, import_clsx23.default)("modal-action", className), ...props, children });
  }
);
DialogActions.displayName = "DialogActions";
var DialogCloseButton = (0, import_react23.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "button",
      {
        ref,
        type: "button",
        className: (0, import_clsx23.default)("btn btn-sm btn-circle btn-ghost absolute top-2 right-2", className),
        "aria-label": "Close dialog",
        ...props,
        children: children || "\u2715"
      }
    );
  }
);
DialogCloseButton.displayName = "DialogCloseButton";
var Dialog = (0, import_react23.forwardRef)(
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
    const dialogRef = (0, import_react23.useRef)(null);
    const internalRef = ref || dialogRef;
    (0, import_react23.useEffect)(() => {
      const dialog = internalRef.current;
      if (!dialog) return;
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }, [open, internalRef]);
    (0, import_react23.useEffect)(() => {
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
    const modalBoxClasses = (0, import_clsx23.default)(
      "modal-box overflow-x-hidden",
      maxWidth || size && sizeClasses10[size],
      responsive && "sm:modal-middle modal-bottom"
    );
    const modalClasses = (0, import_clsx23.default)(
      "modal",
      !responsive && verticalPositionClasses[position],
      horizontalPositionClasses[horizontalPosition],
      responsive && "modal-bottom sm:modal-middle",
      className
    );
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("dialog", { ref: internalRef, className: modalClasses, onClick: handleBackdropClick, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: modalBoxClasses, children: [
        showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DialogCloseButton, { onClick: onClose, children: closeButtonContent }),
        children
      ] }),
      closeOnClickOutside && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("button", { type: "button", onClick: onClose, children: "close" }) })
    ] });
  }
);
Dialog.displayName = "Dialog";

// src/components/Drawer.tsx
var import_clsx24 = __toESM(require("clsx"));
var import_react24 = require("react");
var import_jsx_runtime24 = require("react/jsx-runtime");
var Drawer = (0, import_react24.forwardRef)(
  ({ open, onClose, position = "left", content, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx24.default)("drawer", position === "right" && "drawer-end", className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "drawer-content", children }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "drawer-side z-40", children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { className: "drawer-overlay", onClick: onClose }),
            content
          ] })
        ]
      }
    );
  }
);
Drawer.displayName = "Drawer";

// src/components/DropdownMenu.tsx
var import_clsx25 = __toESM(require("clsx"));
var import_react25 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var positionClasses = {
  top: "dropdown-top",
  bottom: "dropdown-bottom",
  left: "dropdown-left",
  right: "dropdown-right",
  end: "dropdown-end"
};
var Dropdown = (0, import_react25.forwardRef)(
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
    const [internalOpen, setInternalOpen] = (0, import_react25.useState)(false);
    const dropdownRef = (0, import_react25.useRef)(null);
    const isOpen = open !== void 0 ? open : internalOpen;
    (0, import_react25.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "div",
      {
        ref: dropdownRef,
        className: (0, import_clsx25.default)(
          "dropdown",
          positionClasses[position],
          hover && "dropdown-hover",
          isOpen && "dropdown-open",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { tabIndex: 0, role: "button", onClick: handleTriggerClick, children: trigger }),
          children
        ]
      }
    );
  }
);
Dropdown.displayName = "Dropdown";
var DropdownMenu = (0, import_react25.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "ul",
      {
        ref,
        tabIndex: 0,
        className: (0, import_clsx25.default)(
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
var import_clsx29 = __toESM(require("clsx"));
var import_react30 = require("react");

// ../../node_modules/react-hook-form/dist/index.esm.mjs
var import_react26 = __toESM(require("react"), 1);
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
var HookFormControlContext = import_react26.default.createContext(null);
HookFormControlContext.displayName = "HookFormControlContext";
var useFormControlContext = () => import_react26.default.useContext(HookFormControlContext);
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
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react26.default.useLayoutEffect : import_react26.default.useEffect;
function useFormState(props) {
  const formControl = useFormControlContext();
  const { control = formControl, disabled, name, exact } = props || {};
  const [formState, updateFormState] = import_react26.default.useState(control._formState);
  const _localProxyFormState = import_react26.default.useRef({
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
  import_react26.default.useEffect(() => {
    _localProxyFormState.current.isValid && control._setValid(true);
  }, [control]);
  return import_react26.default.useMemo(() => getProxyFormState(formState, control, _localProxyFormState.current, false), [formState, control]);
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
  const _defaultValue = import_react26.default.useRef(defaultValue);
  const _compute = import_react26.default.useRef(compute);
  const _computeFormValues = import_react26.default.useRef(void 0);
  const _prevControl = import_react26.default.useRef(control);
  const _prevName = import_react26.default.useRef(name);
  _compute.current = compute;
  const [value, updateValue] = import_react26.default.useState(() => {
    const defaultValue2 = control._getWatch(name, _defaultValue.current);
    return _compute.current ? _compute.current(defaultValue2) : defaultValue2;
  });
  const getCurrentOutput = import_react26.default.useCallback((values) => {
    const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
    return _compute.current ? _compute.current(formValues) : formValues;
  }, [control._formValues, control._names, name]);
  const refreshValue = import_react26.default.useCallback((values) => {
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
  import_react26.default.useEffect(() => control._removeUnmounted());
  const controlChanged = _prevControl.current !== control;
  const prevName = _prevName.current;
  const computedOutput = import_react26.default.useMemo(() => {
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
  const defaultValueMemo = import_react26.default.useMemo(() => get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [control, name, defaultValue]);
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
  const _props = import_react26.default.useRef(props);
  const _previousNameRef = import_react26.default.useRef(void 0);
  const _registerProps = import_react26.default.useRef(control.register(name, {
    ...props.rules,
    value,
    ...isBoolean(props.disabled) ? { disabled: props.disabled } : {}
  }));
  _props.current = props;
  const fieldState = import_react26.default.useMemo(() => Object.defineProperties({}, {
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
  const onChange = import_react26.default.useCallback((event) => _registerProps.current.onChange({
    target: {
      value: getEventValue(event),
      name
    },
    type: EVENTS.CHANGE
  }), [name]);
  const onBlur = import_react26.default.useCallback(() => _registerProps.current.onBlur({
    target: {
      value: get(control._formValues, name),
      name
    },
    type: EVENTS.BLUR
  }), [name, control._formValues]);
  const ref = import_react26.default.useCallback((elm) => {
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
  const field = import_react26.default.useMemo(() => ({
    name,
    value,
    ...isBoolean(disabled) || formState.disabled ? { disabled: formState.disabled || disabled } : {},
    onChange,
    onBlur,
    ref
  }), [name, disabled, formState.disabled, onChange, onBlur, ref, value]);
  import_react26.default.useEffect(() => {
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
  import_react26.default.useEffect(() => {
    control._setDisabledField({
      disabled,
      name
    });
  }, [disabled, name, control]);
  return import_react26.default.useMemo(() => ({
    field,
    formState,
    fieldState
  }), [field, formState, fieldState]);
}
var Controller = (props) => props.render(useController(props));
var HookFormContext = import_react26.default.createContext(null);
HookFormContext.displayName = "HookFormContext";
var defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};

// src/components/RadioGroup.tsx
var import_clsx26 = __toESM(require("clsx"));
var import_react27 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var RadioGroupContext = (0, import_react27.createContext)(null);
var useRadioGroup = () => {
  const context = (0, import_react27.useContext)(RadioGroupContext);
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
var RadioGroup = (0, import_react27.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(RadioGroupContext.Provider, { value: { name, value, onChange, variant, size }, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx26.default)(
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
var Radio = (0, import_react27.forwardRef)(
  ({ value, label, className, id, ...props }, ref) => {
    const { name, value: groupValue, onChange, variant, size } = useRadioGroup();
    const radioId = id || `radio-${name}-${value}`;
    const handleChange = (e) => {
      onChange?.(e.target.value);
    };
    const radio = /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "input",
      {
        ref,
        id: radioId,
        type: "radio",
        name,
        value,
        checked: groupValue === value,
        onChange: handleChange,
        className: (0, import_clsx26.default)(
          "radio",
          variant && variantClasses11[variant],
          size && sizeClasses11[size],
          className
        ),
        ...props
      }
    );
    if (label) {
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("label", { htmlFor: radioId, className: "label cursor-pointer justify-start gap-2", children: [
        radio,
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "label-text", children: label })
      ] });
    }
    return radio;
  }
);
Radio.displayName = "Radio";

// src/components/Select.tsx
var import_solid2 = require("@heroicons/react/20/solid");
var import_clsx27 = __toESM(require("clsx"));
var import_react28 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
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
var Select = (0, import_react28.forwardRef)(
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
    const selectElement = /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "relative w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
        "select",
        {
          ref,
          id: selectId,
          className: (0, import_clsx27.default)(
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
            placeholder && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "", disabled: true, children: placeholder }),
            options ? options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)) : children
          ]
        }
      ),
      showArrow && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        import_solid2.ChevronDownIcon,
        {
          className: "text-base-content/70 pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2",
          "aria-hidden": "true"
        }
      )
    ] });
    if (variant === "floating") {
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("label", { className: "floating-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: label ?? placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { className: "relative w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
              "select",
              {
                ref,
                id: selectId,
                className: (0, import_clsx27.default)(
                  "select w-full appearance-none bg-size-[1.5em_1.5em] bg-position-[right_1rem_center] bg-no-repeat",
                  "bg-none",
                  error ? colorClasses5.error : color && colorClasses5[color],
                  sizeClasses12[size],
                  rightPadding,
                  className
                ),
                style: {
                  backgroundImage: "none !important"
                },
                "aria-invalid": error ? "true" : void 0,
                ...props,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: "", disabled: true, children: placeholder ?? label }),
                  options ? options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)) : children
                ]
              }
            ),
            showArrow && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              import_solid2.ChevronDownIcon,
              {
                className: "text-base-content/70 pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2",
                "aria-hidden": "true"
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return selectElement;
  }
);
Select.displayName = "Select";

// src/components/Textarea.tsx
var import_clsx28 = __toESM(require("clsx"));
var import_react29 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
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
var Textarea = (0, import_react29.forwardRef)(
  ({ variant = "bordered", color, size = "md", label, error, helperText, className, id, ...props }, ref) => {
    const textareaId = id || (label ? `textarea-${label.toLowerCase().replace(/\s+/g, "-")}` : void 0);
    const textareaClasses = (0, import_clsx28.default)(
      "textarea w-full",
      variant !== "floating" && variantClasses13[variant],
      error ? colorClasses6.error : color && colorClasses6[color],
      sizeClasses13[size],
      className
    );
    if (variant === "floating") {
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "form-control w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: "floating-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
        error && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "label-text-alt text-error mt-1 text-xs", children: error }),
        !error && helperText && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "label-text-alt mt-1 text-xs", children: helperText })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("textarea", { ref, id: textareaId, className: textareaClasses, ...props });
  }
);
Textarea.displayName = "Textarea";

// src/components/DynamicFormField.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var FieldWrapper = (0, import_react30.forwardRef)(
  ({ label, description, error, required, className, children }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { ref, className: (0, import_clsx29.default)("form-control w-full space-y-1", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("label", { className: "label-text text-sm font-medium", children: [
        label,
        required && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-error ml-1", children: "*" })
      ] }),
      children,
      error ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-error text-sm", role: "alert", children: error }) : description ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("p", { className: "text-base-content/60 text-sm", children: description }) : null
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
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { type: "hidden", name, value });
      case "textarea":
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
          RadioGroup,
          {
            name,
            value: value ?? "",
            onChange: handleRadioChange,
            variant: error ? "error" : void 0,
            ...componentProps,
            children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(FieldWrapper, { description, error, className, children: renderField() });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    Controller,
    {
      name: field.name,
      control,
      rules: field.validation,
      defaultValue: field.defaultValue ?? getDefaultValueForType(field.type),
      render: ({ field: controllerField }) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
var DynamicForm = (0, import_react30.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("form", { ref, onSubmit: handleFormSubmit, className: (0, import_clsx29.default)("w-full", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "div",
        {
          className: (0, import_clsx29.default)(
            layoutClasses[layout],
            gapClasses[gap],
            layout === "grid" && columnClasses[columns]
          ),
          children: fields.map(
            (field) => control ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              ControlledDynamicFormField,
              {
                field,
                control,
                error: errors[field.name]?.message
              },
              field.name
            ) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
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
      renderActions ? renderActions() : showSubmitButton ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "button",
        {
          type: "submit",
          className: (0, import_clsx29.default)("btn btn-primary", isSubmitting && "loading"),
          disabled: isSubmitting,
          children: isSubmitting ? "Submitting..." : submitText
        }
      ) }) : null
    ] });
  }
);
DynamicForm.displayName = "DynamicForm";

// src/components/Empty.tsx
var import_clsx30 = __toESM(require("clsx"));
var import_react31 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Empty = (0, import_react31.forwardRef)(
  ({ icon, title, description, action, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx30.default)("flex flex-col items-center justify-center px-4 py-12", className),
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-base-content/50 mb-4", children: icon }),
          title && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("h3", { className: "mb-2 text-lg font-semibold", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-base-content/70 mb-4 text-center text-sm", children: description }),
          action && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "mt-4", children: action }),
          children
        ]
      }
    );
  }
);
Empty.displayName = "Empty";

// src/components/Field.tsx
var import_clsx31 = __toESM(require("clsx"));
var import_react32 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var FieldContext = (0, import_react32.createContext)(null);
function useFieldContext() {
  return (0, import_react32.useContext)(FieldContext);
}
var Field = (0, import_react32.forwardRef)(
  ({ name, error, required, children, className, ...props }, ref) => {
    const generatedId = (0, import_react32.useId)();
    const id = name || generatedId;
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FieldContext.Provider, { value: { id, error, required }, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { ref, className: (0, import_clsx31.default)("form-control w-full space-y-2", className), ...props, children }) });
  }
);
Field.displayName = "Field";
var FieldLabel = (0, import_react32.forwardRef)(
  ({ children, className, ...props }, ref) => {
    const context = useFieldContext();
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
      "label",
      {
        ref,
        htmlFor: context?.id,
        className: (0, import_clsx31.default)("label-text text-sm font-medium", className),
        ...props,
        children: [
          children,
          context?.required && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "text-error ml-1", children: "*" })
        ]
      }
    );
  }
);
FieldLabel.displayName = "FieldLabel";
var FieldDescription = (0, import_react32.forwardRef)(
  ({ children, className, ...props }, ref) => {
    const context = useFieldContext();
    if (context?.error) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { ref, className: (0, import_clsx31.default)("text-base-content/60 text-sm", className), ...props, children });
  }
);
FieldDescription.displayName = "FieldDescription";
var FieldError = (0, import_react32.forwardRef)(
  ({ message, children, className, ...props }, ref) => {
    const context = useFieldContext();
    const errorMessage = message || context?.error || children;
    if (!errorMessage) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { ref, className: (0, import_clsx31.default)("text-error text-sm", className), role: "alert", ...props, children: errorMessage });
  }
);
FieldError.displayName = "FieldError";
var FieldGroup = (0, import_react32.forwardRef)(
  ({ direction = "vertical", children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx31.default)(
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
var FieldSeparator = (0, import_react32.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { ref, className: (0, import_clsx31.default)("divider", className), ...props });
  }
);
FieldSeparator.displayName = "FieldSeparator";
var FieldSet = (0, import_react32.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "fieldset",
      {
        ref,
        className: (0, import_clsx31.default)("border-base-300 space-y-4 rounded-lg border p-4", className),
        ...props,
        children
      }
    );
  }
);
FieldSet.displayName = "FieldSet";
var FieldLegend = (0, import_react32.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("legend", { ref, className: (0, import_clsx31.default)("px-2 text-lg font-semibold", className), ...props, children });
  }
);
FieldLegend.displayName = "FieldLegend";

// src/components/Form.tsx
var import_clsx32 = __toESM(require("clsx"));
var import_react33 = __toESM(require("react"));
var import_jsx_runtime32 = require("react/jsx-runtime");
var FormFieldContext = (0, import_react33.createContext)(null);
function useFormFieldContext() {
  return (0, import_react33.useContext)(FormFieldContext);
}
var Form = (0, import_react33.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("form", { ref, className: (0, import_clsx32.default)("space-y-4", className), ...props, children });
  }
);
Form.displayName = "Form";
var FormField = (0, import_react33.forwardRef)(
  ({ name, error, children, className, ...props }, ref) => {
    const generatedId = (0, import_react33.useId)();
    const id = `${name}-${generatedId}`;
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(FormFieldContext.Provider, { value: { id, name, error }, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { ref, className, ...props, children }) });
  }
);
FormField.displayName = "FormField";
var FormItem = (0, import_react33.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { ref, className: (0, import_clsx32.default)("form-control w-full space-y-2", className), ...props, children });
  }
);
FormItem.displayName = "FormItem";
var FormLabel = (0, import_react33.forwardRef)(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "label",
      {
        ref,
        htmlFor: context?.id,
        className: (0, import_clsx32.default)(
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
var FormControl = (0, import_react33.forwardRef)(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    const child = import_react33.default.Children.only(children);
    const clonedChild = import_react33.default.isValidElement(child) ? import_react33.default.cloneElement(child, {
      id: context?.id,
      name: context?.name,
      "aria-describedby": context?.error ? `${context.id}-error` : void 0,
      "aria-invalid": context?.error ? true : void 0
    }) : child;
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { ref, className, ...props, children: clonedChild });
  }
);
FormControl.displayName = "FormControl";
var FormDescription = (0, import_react33.forwardRef)(
  ({ children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    if (context?.error) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { ref, className: (0, import_clsx32.default)("text-base-content/60 text-sm", className), ...props, children });
  }
);
FormDescription.displayName = "FormDescription";
var FormMessage = (0, import_react33.forwardRef)(
  ({ message, children, className, ...props }, ref) => {
    const context = useFormFieldContext();
    const errorMessage = message || context?.error || children;
    if (!errorMessage) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "p",
      {
        ref,
        id: context?.id ? `${context.id}-error` : void 0,
        className: (0, import_clsx32.default)("text-error text-sm", className),
        role: "alert",
        ...props,
        children: errorMessage
      }
    );
  }
);
FormMessage.displayName = "FormMessage";
var FormSection = (0, import_react33.forwardRef)(
  ({ title, description, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { ref, className: (0, import_clsx32.default)("space-y-4", className), ...props, children: [
      (title || description) && /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "space-y-1", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("h3", { className: "text-lg font-semibold", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-base-content/60 text-sm", children: description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "space-y-4", children })
    ] });
  }
);
FormSection.displayName = "FormSection";
var FormActions = (0, import_react33.forwardRef)(
  ({ align = "end", children, className, ...props }, ref) => {
    const alignClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx32.default)("flex items-center gap-2 pt-4", alignClasses[align], className),
        ...props,
        children
      }
    );
  }
);
FormActions.displayName = "FormActions";

// src/components/FullPageLoader.tsx
var import_clsx33 = __toESM(require("clsx"));
var import_react34 = require("react");
var import_jsx_runtime33 = require("react/jsx-runtime");
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
var FullPageLoader = (0, import_react34.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx33.default)("fixed inset-0", className),
        style: {
          zIndex,
          ...style
        },
        role: "status",
        "aria-live": "polite",
        "aria-busy": "true",
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            "div",
            {
              className: (0, import_clsx33.default)("bg-base-100 absolute inset-0", blur && "backdrop-blur-sm"),
              style: {
                opacity: opacityValue / 100
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex flex-col items-center justify-center gap-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              "span",
              {
                className: (0, import_clsx33.default)(
                  "loading",
                  typeClasses[type],
                  sizeClasses14[size],
                  variantClasses14[variant]
                ),
                "aria-hidden": "true"
              }
            ),
            text && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              "p",
              {
                className: (0, import_clsx33.default)("mt-4 font-medium", textSizeClasses[size], variantClasses14[variant]),
                children: text
              }
            )
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "sr-only", children: text || "Loading..." })
        ]
      }
    );
  }
);
FullPageLoader.displayName = "FullPageLoader";

// src/components/HoverCard.tsx
var import_clsx34 = __toESM(require("clsx"));
var import_react35 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var HoverCard = (0, import_react35.forwardRef)(
  ({ trigger, openDelay = 200, closeDelay = 300, children, className, ...props }, ref) => {
    const [isOpen, setIsOpen] = (0, import_react35.useState)(false);
    const openTimeoutRef = (0, import_react35.useRef)(void 0);
    const closeTimeoutRef = (0, import_react35.useRef)(void 0);
    (0, import_react35.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx34.default)("relative inline-block", className),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...props,
        children: [
          trigger,
          isOpen && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "absolute top-full left-0 z-50 mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "animate-in fade-in-0 zoom-in-95", children }) })
        ]
      }
    );
  }
);
HoverCard.displayName = "HoverCard";

// src/components/InputGroup.tsx
var import_clsx35 = __toESM(require("clsx"));
var import_react36 = require("react");
var import_jsx_runtime35 = require("react/jsx-runtime");
var InputGroup = (0, import_react36.forwardRef)(
  ({ left, right, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
      "label",
      {
        ref,
        className: (0, import_clsx35.default)("input input-bordered flex items-center gap-2", className),
        ...props,
        children: [
          left && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-base-content/70", children: left }),
          children,
          right && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "text-base-content/70", children: right })
        ]
      }
    );
  }
);
InputGroup.displayName = "InputGroup";

// src/components/InputOTP.tsx
var import_clsx36 = __toESM(require("clsx"));
var import_react37 = require("react");
var import_jsx_runtime36 = require("react/jsx-runtime");
var InputOTP = (0, import_react37.forwardRef)(
  ({ length = 6, onChange, onComplete, value = "", className, id, ...props }, ref) => {
    const [otp, setOtp] = (0, import_react37.useState)(value.split("").slice(0, length));
    const inputRefs = (0, import_react37.useRef)([]);
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
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "div",
      {
        ref,
        id: inputId,
        className: (0, import_clsx36.default)("flex gap-2", className),
        role: "group",
        "aria-label": "OTP input",
        ...props,
        children: Array.from({ length }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
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
var import_clsx37 = __toESM(require("clsx"));
var import_react38 = require("react");
var import_jsx_runtime37 = require("react/jsx-runtime");
var Item = (0, import_react38.forwardRef)(
  ({ icon, title, description, rightContent, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx37.default)("hover:bg-base-200 flex items-center gap-3 rounded-lg p-3", className),
        ...props,
        children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "min-w-0 flex-1", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "font-medium", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "text-base-content/70 text-sm", children: description }),
            children
          ] }),
          rightContent && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "shrink-0", children: rightContent })
        ]
      }
    );
  }
);
Item.displayName = "Item";

// src/components/Kbd.tsx
var import_clsx38 = __toESM(require("clsx"));
var import_react39 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var sizeClasses15 = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: "kbd-md",
  lg: "kbd-lg"
};
var Kbd = (0, import_react39.forwardRef)(
  ({ size = "md", children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("kbd", { ref, className: (0, import_clsx38.default)("kbd", sizeClasses15[size], className), ...props, children });
  }
);
Kbd.displayName = "Kbd";

// src/components/Menubar.tsx
var import_clsx39 = __toESM(require("clsx"));
var import_react40 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var sizeClasses16 = {
  xs: "menu-xs",
  sm: "menu-sm",
  md: "menu-md",
  lg: "menu-lg"
};
var Menubar = (0, import_react40.forwardRef)(
  ({ orientation = "horizontal", size = "md", compact: compact2, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "ul",
      {
        ref,
        className: (0, import_clsx39.default)(
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
var MenubarItem = (0, import_react40.forwardRef)(
  ({ href, disabled, active, children, className, ...props }, ref) => {
    const content = href ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("a", { href, children }) : /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("a", { children });
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("li", { ref, className: (0, import_clsx39.default)(disabled && "disabled", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("a", { className: (0, import_clsx39.default)(active && "active"), children }) });
  }
);
MenubarItem.displayName = "MenubarItem";

// src/components/NativeSelect.tsx
var import_clsx40 = __toESM(require("clsx"));
var import_react41 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");
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
var NativeSelect = (0, import_react41.forwardRef)(
  ({ variant = "bordered", color, size = "md", options, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "select",
      {
        ref,
        className: (0, import_clsx40.default)(
          "select w-full",
          variantClasses15[variant],
          color && colorClasses7[color],
          sizeClasses17[size],
          className
        ),
        ...props,
        children: options ? options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)) : children
      }
    );
  }
);
NativeSelect.displayName = "NativeSelect";

// src/components/Navbar.tsx
var import_clsx41 = __toESM(require("clsx"));
var import_react42 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
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
var Navbar = (0, import_react42.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx41.default)(
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
var NavbarStart = (0, import_react42.forwardRef)(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { ref, className: (0, import_clsx41.default)("navbar-start", className), ...props, children });
  }
);
NavbarStart.displayName = "NavbarStart";
var NavbarCenter = (0, import_react42.forwardRef)(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { ref, className: (0, import_clsx41.default)("navbar-center", className), ...props, children });
  }
);
NavbarCenter.displayName = "NavbarCenter";
var NavbarEnd = (0, import_react42.forwardRef)(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { ref, className: (0, import_clsx41.default)("navbar-end", className), ...props, children });
  }
);
NavbarEnd.displayName = "NavbarEnd";

// src/components/NavigationMenu.tsx
var import_clsx42 = __toESM(require("clsx"));
var import_react43 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var NavigationMenu = (0, import_react43.forwardRef)(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("nav", { ref, className: (0, import_clsx42.default)("navbar bg-base-100", className), ...props, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("ul", { className: "menu menu-horizontal px-1", children }) });
  }
);
NavigationMenu.displayName = "NavigationMenu";
var NavigationMenuItem = (0, import_react43.forwardRef)(
  ({ href, active, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("li", { ref, className, ...props, children: href ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("a", { href, className: (0, import_clsx42.default)(active && "active"), children }) : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: (0, import_clsx42.default)(active && "active"), children }) });
  }
);
NavigationMenuItem.displayName = "NavigationMenuItem";

// src/components/Popover.tsx
var import_clsx43 = __toESM(require("clsx"));
var import_react44 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var Popover = (0, import_react44.forwardRef)(
  ({ trigger, open, onOpenChange, children, className, ...props }, ref) => {
    const [internalOpen, setInternalOpen] = (0, import_react44.useState)(false);
    const popoverRef = (0, import_react44.useRef)(null);
    const isOpen = open !== void 0 ? open : internalOpen;
    (0, import_react44.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)("div", { ref: popoverRef, className: (0, import_clsx43.default)("relative inline-block", className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { onClick: handleTriggerClick, children: trigger }),
      isOpen && /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "absolute z-50 mt-2 min-w-50", children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "bg-base-100 border-base-300 rounded-lg border p-4 shadow-lg", children }) })
    ] });
  }
);
Popover.displayName = "Popover";

// src/components/Progress.tsx
var import_clsx44 = __toESM(require("clsx"));
var import_react45 = require("react");
var import_jsx_runtime44 = require("react/jsx-runtime");
var variantClasses16 = {
  primary: "progress-primary",
  secondary: "progress-secondary",
  accent: "progress-accent",
  info: "progress-info",
  success: "progress-success",
  warning: "progress-warning",
  error: "progress-error"
};
var Progress = (0, import_react45.forwardRef)(
  ({ variant = "primary", value, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      "progress",
      {
        ref,
        className: (0, import_clsx44.default)("progress w-full", variantClasses16[variant], className),
        value,
        max: 100,
        ...props
      }
    );
  }
);
Progress.displayName = "Progress";

// src/components/Separator.tsx
var import_clsx45 = __toESM(require("clsx"));
var import_react46 = require("react");
var import_jsx_runtime45 = require("react/jsx-runtime");
var variantClasses17 = {
  default: "",
  primary: "divider-primary",
  secondary: "divider-secondary",
  accent: "divider-accent"
};
var Separator = (0, import_react46.forwardRef)(
  ({ orientation = "horizontal", variant = "default", text, className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx45.default)(
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
var import_clsx46 = __toESM(require("clsx"));
var import_react47 = require("react");
var import_jsx_runtime46 = require("react/jsx-runtime");
var Sheet = (0, import_react47.forwardRef)(
  ({ open, onClose, position = "right", title, children, className, ...props }, ref) => {
    const dialogRef = (0, import_react47.useRef)(null);
    const internalRef = ref || dialogRef;
    (0, import_react47.useEffect)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
      "dialog",
      {
        ref: internalRef,
        className: (0, import_clsx46.default)("modal", getPositionClasses(), className),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: (0, import_clsx46.default)("modal-box", getBoxClasses(), "rounded-none"), children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)("div", { className: "mb-4 flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("h3", { className: "text-lg font-bold", children: title }),
              /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("button", { onClick: onClose, className: "btn btn-sm btn-circle btn-ghost", children: "\u2715" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { className: "overflow-y-auto", children })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("form", { method: "dialog", className: "modal-backdrop", children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("button", { type: "button", onClick: onClose, children: "close" }) })
        ]
      }
    );
  }
);
Sheet.displayName = "Sheet";

// src/components/Sidebar.tsx
var import_clsx47 = __toESM(require("clsx"));
var import_react48 = require("react");
var import_jsx_runtime47 = require("react/jsx-runtime");
var Sidebar = (0, import_react48.forwardRef)(
  ({ collapsed, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx47.default)(
          "bg-base-200 h-full transition-all duration-300",
          collapsed ? "w-16" : "w-64",
          className
        ),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("ul", { className: "menu h-full p-4", children })
      }
    );
  }
);
Sidebar.displayName = "Sidebar";
var SidebarItem = (0, import_react48.forwardRef)(
  ({ icon, href, active, children, className, ...props }, ref) => {
    const content = /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: "shrink-0", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { children })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("li", { ref, className, ...props, children: href ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("a", { href, className: (0, import_clsx47.default)(active && "active"), children: content }) : /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { className: (0, import_clsx47.default)(active && "active"), children: content }) });
  }
);
SidebarItem.displayName = "SidebarItem";

// src/components/Skeleton.tsx
var import_clsx48 = __toESM(require("clsx"));
var import_react49 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime");
var Skeleton = (0, import_react49.forwardRef)(
  ({ width, height, shape = "rectangle", className, style, ...props }, ref) => {
    const dimensionStyle = {
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      ...style
    };
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx48.default)("skeleton", shape === "circle" && "rounded-full", className),
        style: dimensionStyle,
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";

// src/components/Slider.tsx
var import_clsx49 = __toESM(require("clsx"));
var import_react50 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime");
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
var Slider = (0, import_react50.forwardRef)(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
      "input",
      {
        ref,
        type: "range",
        className: (0, import_clsx49.default)("range", variantClasses18[variant], sizeClasses18[size], className),
        ...props
      }
    );
  }
);
Slider.displayName = "Slider";

// src/components/Spinner.tsx
var import_clsx50 = __toESM(require("clsx"));
var import_react51 = require("react");
var import_jsx_runtime50 = require("react/jsx-runtime");
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
var Spinner = (0, import_react51.forwardRef)(
  ({ size = "md", type = "spinner", color, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      "span",
      {
        ref,
        className: (0, import_clsx50.default)(
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
var import_clsx51 = __toESM(require("clsx"));
var import_react52 = require("react");
var import_jsx_runtime51 = require("react/jsx-runtime");
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
var Switch = (0, import_react52.forwardRef)(
  ({ variant, size = "md", label, checkedIcon, uncheckedIcon, className, ...props }, ref) => {
    if (checkedIcon || uncheckedIcon) {
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
        "label",
        {
          className: (0, import_clsx51.default)(
            "toggle text-base-content",
            variant && variantClasses19[variant],
            sizeClasses20[size],
            className
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("input", { ref, type: "checkbox", ...props }),
            checkedIcon,
            uncheckedIcon
          ]
        }
      );
    }
    const switchElement = /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      "input",
      {
        ref,
        type: "checkbox",
        className: (0, import_clsx51.default)("toggle", variant && variantClasses19[variant], sizeClasses20[size], className),
        ...props
      }
    );
    if (label) {
      return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("label", { className: "label cursor-pointer justify-start gap-2", children: [
        switchElement,
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "label-text", children: label })
      ] });
    }
    return switchElement;
  }
);
Switch.displayName = "Switch";

// src/components/Table.tsx
var import_clsx52 = __toESM(require("clsx"));
var import_react53 = require("react");
var import_jsx_runtime52 = require("react/jsx-runtime");
var sizeClasses21 = {
  xs: "table-xs",
  sm: "table-sm",
  md: "table-md",
  lg: "table-lg"
};
var Table = (0, import_react53.forwardRef)(
  ({ size = "md", zebra, pinRows, pinCols, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      "table",
      {
        ref,
        className: (0, import_clsx52.default)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(Table, { ...tableProps, children: [
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("th", { children: column.header }, column.key)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("tbody", { children: data.map((item) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("td", { children: column.render ? column.render(item) : item[column.key] }, column.key)) }, getRowKey(item))) })
  ] });
}

// src/components/Tabs.tsx
var import_clsx53 = __toESM(require("clsx"));
var import_react54 = require("react");
var import_jsx_runtime53 = require("react/jsx-runtime");
var TabsContext = (0, import_react54.createContext)(null);
var useTabs = () => {
  const context = (0, import_react54.useContext)(TabsContext);
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
var activeColorClasses = {
  neutral: "tab-active",
  primary: "checked:text-primary checked:font-medium checked:[border-color:hsl(var(--p))]",
  secondary: "checked:text-secondary checked:font-medium checked:[border-color:hsl(var(--s))]",
  accent: "checked:text-accent checked:font-medium checked:[border-color:hsl(var(--a))]",
  info: "checked:text-info checked:font-medium checked:[border-color:hsl(var(--in))]",
  success: "checked:text-success checked:font-medium checked:[border-color:hsl(var(--su))]",
  warning: "checked:text-warning checked:font-medium checked:[border-color:hsl(var(--wa))]",
  error: "checked:text-error checked:font-medium checked:[border-color:hsl(var(--er))]"
};
var Tabs = (0, import_react54.forwardRef)(
  ({
    defaultValue = "",
    value,
    onChange,
    variant = "bordered",
    size = "md",
    position = "top",
    activeColor,
    children,
    className,
    ...props
  }, ref) => {
    const [internalActiveTab, setInternalActiveTab] = (0, import_react54.useState)(defaultValue);
    const activeTab = value !== void 0 ? value : internalActiveTab;
    const groupName = (0, import_react54.useId)();
    const handleTabChange = (newValue) => {
      if (value === void 0) {
        setInternalActiveTab(newValue);
      }
      onChange?.(newValue);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      TabsContext.Provider,
      {
        value: {
          activeTab,
          setActiveTab: handleTabChange,
          variant,
          size,
          position,
          activeColor,
          groupName
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          "div",
          {
            ref,
            className: (0, import_clsx53.default)(
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
var Tab = (0, import_react54.forwardRef)(
  ({ value, label, disabled = false, className, ...props }, ref) => {
    const { activeTab, setActiveTab, groupName, activeColor } = useTabs();
    const isActive = activeTab === value;
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      "input",
      {
        ref,
        type: "radio",
        name: groupName,
        role: "tab",
        "aria-label": typeof label === "string" ? label : void 0,
        checked: isActive,
        onChange: () => !disabled && setActiveTab(value),
        disabled,
        className: (0, import_clsx53.default)(
          "tab",
          isActive && "tab-active",
          disabled && "tab-disabled",
          isActive && activeColor && activeColor !== "neutral" && activeColorClasses[activeColor],
          className
        ),
        ...props
      }
    );
  }
);
Tab.displayName = "Tab";
var TabPanel = (0, import_react54.forwardRef)(
  ({ value, children, className, ...props }, ref) => {
    const { activeTab } = useTabs();
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
      "div",
      {
        ref,
        role: "tabpanel",
        className: (0, import_clsx53.default)(
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
var import_outline4 = require("@heroicons/react/24/outline");
var import_clsx54 = __toESM(require("clsx"));
var import_react55 = require("react");
var import_jsx_runtime54 = require("react/jsx-runtime");
var ToastContext = (0, import_react55.createContext)(null);
var useToast = () => {
  const context = (0, import_react55.useContext)(ToastContext);
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
  info: import_outline4.InformationCircleIcon,
  success: import_outline4.CheckCircleIcon,
  warning: import_outline4.ExclamationTriangleIcon,
  error: import_outline4.ExclamationCircleIcon
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
var ToastItem = (0, import_react55.forwardRef)(
  ({ message, variant = "info", duration = 3e3, onDismiss, className, ...props }, ref) => {
    const Icon = variantIcons[variant];
    (0, import_react55.useEffect)(() => {
      if (duration && onDismiss) {
        const timer = setTimeout(onDismiss, duration);
        return () => clearTimeout(timer);
      }
    }, [duration, onDismiss]);
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", { ref, className: (0, import_clsx54.default)("alert", variantClasses21[variant], className), ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Icon, { className: "h-6 w-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("span", { children: message }),
      onDismiss && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("button", { onClick: onDismiss, className: "btn btn-sm btn-circle btn-ghost ml-auto", children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_outline4.XMarkIcon, { className: "h-5 w-5" }) })
    ] });
  }
);
ToastItem.displayName = "ToastItem";
var ToastProvider = ({
  children,
  position = "bottom-end"
}) => {
  const [toasts, setToasts] = (0, import_react55.useState)([]);
  const addToast = (toast) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { ...toast, id }]);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(ToastContext.Provider, { value: { toasts, addToast, removeToast }, children: [
    children,
    toasts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: (0, import_clsx54.default)("toast z-50", positionClasses3[position]), children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
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
var import_clsx55 = __toESM(require("clsx"));
var import_react56 = require("react");
var import_jsx_runtime55 = require("react/jsx-runtime");
var ToggleGroupContext = (0, import_react56.createContext)(null);
var useToggleGroup = () => {
  const context = (0, import_react56.useContext)(ToggleGroupContext);
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
var Toggle = (0, import_react56.forwardRef)(
  ({ pressed, onPressedChange, size = "md", variant, children, className, ...props }, ref) => {
    const [internalPressed, setInternalPressed] = (0, import_react56.useState)(false);
    const isPressed = pressed !== void 0 ? pressed : internalPressed;
    const handleClick = () => {
      const newPressed = !isPressed;
      if (pressed === void 0) {
        setInternalPressed(newPressed);
      }
      onPressedChange?.(newPressed);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
      "button",
      {
        ref,
        type: "button",
        onClick: handleClick,
        "aria-pressed": isPressed,
        className: (0, import_clsx55.default)(
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
var ToggleGroup = (0, import_react56.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
      ToggleGroupContext.Provider,
      {
        value: { type, value, onChange: handleItemChange, size, variant },
        children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { ref, className: (0, import_clsx55.default)("join", className), role: "group", ...props, children })
      }
    );
  }
);
ToggleGroup.displayName = "ToggleGroup";
var ToggleGroupItem = (0, import_react56.forwardRef)(
  ({ value, children, className, ...props }, ref) => {
    const { type, value: groupValue, onChange, size, variant } = useToggleGroup();
    const isPressed = type === "single" ? groupValue === value : Array.isArray(groupValue) && groupValue.includes(value);
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
      "button",
      {
        ref,
        type: "button",
        onClick: () => onChange?.(value),
        "aria-pressed": isPressed,
        className: (0, import_clsx55.default)(
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
var import_clsx56 = __toESM(require("clsx"));
var import_react57 = require("react");
var import_jsx_runtime56 = require("react/jsx-runtime");
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
var Tooltip = (0, import_react57.forwardRef)(
  ({ content, position = "top", variant, open, children, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      "div",
      {
        ref,
        className: (0, import_clsx56.default)(
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
var import_clsx57 = __toESM(require("clsx"));
var import_react58 = require("react");
var import_jsx_runtime57 = require("react/jsx-runtime");
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
var Typography = (0, import_react58.forwardRef)(
  ({ variant = "p", as, children, className, ...props }, ref) => {
    const Component = as || defaultElements[variant];
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Component, { ref, className: (0, import_clsx57.default)(variantClasses24[variant], className), ...props, children });
  }
);
Typography.displayName = "Typography";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map