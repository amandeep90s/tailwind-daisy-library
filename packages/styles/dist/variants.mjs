// src/variants.ts
var buttonVariants = {
  base: "btn",
  // Color variants
  variant: {
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
  },
  // Size variants
  size: {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg"
  },
  // Shape variants
  shape: {
    default: "",
    wide: "btn-wide",
    block: "btn-block",
    circle: "btn-circle",
    square: "btn-square"
  },
  // State modifiers
  state: {
    active: "btn-active",
    disabled: "btn-disabled"
  },
  // Special modifiers
  modifiers: {
    loading: "loading",
    glass: "glass",
    noAnimation: "no-animation"
  }
};
var inputVariants = {
  base: "input",
  // Style variants
  variant: {
    bordered: "input-bordered",
    ghost: "input-ghost"
  },
  // Color variants
  color: {
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accent",
    info: "input-info",
    success: "input-success",
    warning: "input-warning",
    error: "input-error"
  },
  // Size variants
  size: {
    xs: "input-xs",
    sm: "input-sm",
    md: "input-md",
    lg: "input-lg"
  }
};
var labelVariants = {
  base: "label",
  // Text styles
  text: {
    default: "label-text",
    alt: "label-text-alt"
  }
};
var formControlVariants = {
  base: "form-control",
  width: {
    full: "w-full"
  }
};
var loadingVariants = {
  base: "loading",
  // Type variants
  type: {
    spinner: "loading-spinner",
    dots: "loading-dots",
    ring: "loading-ring",
    ball: "loading-ball",
    bars: "loading-bars",
    infinity: "loading-infinity"
  },
  // Size variants
  size: {
    xs: "loading-xs",
    sm: "loading-sm",
    md: "loading-md",
    lg: "loading-lg"
  }
};
function getButtonClasses(options = {}) {
  const {
    variant = "default",
    size = "md",
    shape = "default",
    loading,
    active,
    glass,
    noAnimation,
    className
  } = options;
  const classes = [
    buttonVariants.base,
    buttonVariants.variant[variant],
    buttonVariants.size[size],
    buttonVariants.shape[shape],
    loading && buttonVariants.modifiers.loading,
    active && buttonVariants.state.active,
    glass && buttonVariants.modifiers.glass,
    noAnimation && buttonVariants.modifiers.noAnimation,
    className
  ].filter(Boolean).join(" ");
  return classes;
}
function getInputClasses(options = {}) {
  const { variant = "bordered", color, size = "md", error, className } = options;
  const classes = [
    inputVariants.base,
    inputVariants.variant[variant],
    color && inputVariants.color[color],
    error && inputVariants.color.error,
    inputVariants.size[size],
    "w-full",
    className
  ].filter(Boolean).join(" ");
  return classes;
}
function getLabelClasses(options = {}) {
  const { alt, className } = options;
  const classes = [labelVariants.base, "font-medium", className].filter(Boolean).join(" ");
  return classes;
}
var accordionVariants = {
  base: "collapse",
  variant: {
    default: "",
    plus: "collapse-plus",
    arrow: "collapse-arrow"
  },
  bg: "collapse-bg",
  open: "collapse-open",
  close: "collapse-close"
};
var alertVariants = {
  base: "alert",
  variant: {
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error"
  }
};
var avatarVariants = {
  base: "avatar",
  placeholder: "placeholder",
  online: "online",
  offline: "offline",
  size: {
    xs: "w-8",
    sm: "w-12",
    md: "w-16",
    lg: "w-24",
    xl: "w-32"
  }
};
var badgeVariants = {
  base: "badge",
  variant: {
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
  },
  size: {
    xs: "badge-xs",
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg"
  }
};
var breadcrumbVariants = {
  base: "breadcrumbs",
  list: "flex items-center space-x-2",
  item: "flex items-center",
  link: "hover:underline",
  separator: "mx-2"
};
var cardVariants = {
  base: "card",
  body: "card-body",
  title: "card-title",
  actions: "card-actions",
  variant: {
    default: "bg-base-100",
    bordered: "card-bordered",
    compact: "card-compact",
    normal: "card-normal",
    side: "card-side"
  },
  image: {
    top: "image-full"
  }
};
var checkboxVariants = {
  base: "checkbox",
  variant: {
    primary: "checkbox-primary",
    secondary: "checkbox-secondary",
    accent: "checkbox-accent",
    info: "checkbox-info",
    success: "checkbox-success",
    warning: "checkbox-warning",
    error: "checkbox-error"
  },
  size: {
    xs: "checkbox-xs",
    sm: "checkbox-sm",
    md: "checkbox-md",
    lg: "checkbox-lg"
  }
};
var dialogVariants = {
  base: "modal",
  open: "modal-open",
  box: "modal-box",
  action: "modal-action",
  backdrop: "modal-backdrop",
  position: {
    top: "modal-top",
    middle: "modal-middle",
    bottom: "modal-bottom"
  }
};
var drawerVariants = {
  base: "drawer",
  toggle: "drawer-toggle",
  content: "drawer-content",
  side: "drawer-side",
  overlay: "drawer-overlay",
  end: "drawer-end",
  open: "drawer-open"
};
var dropdownVariants = {
  base: "dropdown",
  content: "dropdown-content",
  position: {
    top: "dropdown-top",
    bottom: "dropdown-bottom",
    left: "dropdown-left",
    right: "dropdown-right",
    end: "dropdown-end"
  },
  open: "dropdown-open",
  hover: "dropdown-hover"
};
var kbdVariants = {
  base: "kbd",
  size: {
    xs: "kbd-xs",
    sm: "kbd-sm",
    md: "kbd-md",
    lg: "kbd-lg"
  }
};
var menuVariants = {
  base: "menu",
  horizontal: "menu-horizontal",
  vertical: "menu-vertical",
  size: {
    xs: "menu-xs",
    sm: "menu-sm",
    md: "menu-md",
    lg: "menu-lg"
  },
  compact: "menu-compact"
};
var navbarVariants = {
  base: "navbar",
  start: "navbar-start",
  center: "navbar-center",
  end: "navbar-end"
};
var paginationVariants = {
  base: "join",
  button: "join-item btn"
};
var progressVariants = {
  base: "progress",
  variant: {
    primary: "progress-primary",
    secondary: "progress-secondary",
    accent: "progress-accent",
    info: "progress-info",
    success: "progress-success",
    warning: "progress-warning",
    error: "progress-error"
  }
};
var radioVariants = {
  base: "radio",
  variant: {
    primary: "radio-primary",
    secondary: "radio-secondary",
    accent: "radio-accent",
    info: "radio-info",
    success: "radio-success",
    warning: "radio-warning",
    error: "radio-error"
  },
  size: {
    xs: "radio-xs",
    sm: "radio-sm",
    md: "radio-md",
    lg: "radio-lg"
  }
};
var selectVariants = {
  base: "select",
  variant: {
    bordered: "select-bordered",
    ghost: "select-ghost"
  },
  color: {
    primary: "select-primary",
    secondary: "select-secondary",
    accent: "select-accent",
    info: "select-info",
    success: "select-success",
    warning: "select-warning",
    error: "select-error"
  },
  size: {
    xs: "select-xs",
    sm: "select-sm",
    md: "select-md",
    lg: "select-lg"
  }
};
var separatorVariants = {
  base: "divider",
  horizontal: "divider-horizontal",
  vertical: "divider-vertical",
  variant: {
    default: "",
    primary: "divider-primary",
    secondary: "divider-secondary",
    accent: "divider-accent"
  }
};
var skeletonVariants = {
  base: "skeleton"
};
var sliderVariants = {
  base: "range",
  variant: {
    primary: "range-primary",
    secondary: "range-secondary",
    accent: "range-accent",
    info: "range-info",
    success: "range-success",
    warning: "range-warning",
    error: "range-error"
  },
  size: {
    xs: "range-xs",
    sm: "range-sm",
    md: "range-md",
    lg: "range-lg"
  }
};
var swapVariants = {
  base: "swap",
  rotate: "swap-rotate",
  flip: "swap-flip",
  active: "swap-active"
};
var switchVariants = {
  base: "toggle",
  variant: {
    primary: "toggle-primary",
    secondary: "toggle-secondary",
    accent: "toggle-accent",
    info: "toggle-info",
    success: "toggle-success",
    warning: "toggle-warning",
    error: "toggle-error"
  },
  size: {
    xs: "toggle-xs",
    sm: "toggle-sm",
    md: "toggle-md",
    lg: "toggle-lg"
  }
};
var tableVariants = {
  base: "table",
  zebra: "table-zebra",
  pinRows: "table-pin-rows",
  pinCols: "table-pin-cols",
  size: {
    xs: "table-xs",
    sm: "table-sm",
    md: "table-md",
    lg: "table-lg"
  }
};
var tabsVariants = {
  base: "tabs",
  variant: {
    bordered: "tabs-bordered",
    lifted: "tabs-lifted",
    boxed: "tabs-boxed"
  },
  size: {
    xs: "tabs-xs",
    sm: "tabs-sm",
    md: "tabs-md",
    lg: "tabs-lg"
  },
  tab: "tab",
  tabActive: "tab-active"
};
var textareaVariants = {
  base: "textarea",
  variant: {
    bordered: "textarea-bordered",
    ghost: "textarea-ghost"
  },
  color: {
    primary: "textarea-primary",
    secondary: "textarea-secondary",
    accent: "textarea-accent",
    info: "textarea-info",
    success: "textarea-success",
    warning: "textarea-warning",
    error: "textarea-error"
  },
  size: {
    xs: "textarea-xs",
    sm: "textarea-sm",
    md: "textarea-md",
    lg: "textarea-lg"
  }
};
var toastVariants = {
  base: "toast",
  position: {
    top: "toast-top",
    middle: "toast-middle",
    bottom: "toast-bottom",
    start: "toast-start",
    center: "toast-center",
    end: "toast-end"
  }
};
var tooltipVariants = {
  base: "tooltip",
  variant: {
    primary: "tooltip-primary",
    secondary: "tooltip-secondary",
    accent: "tooltip-accent",
    info: "tooltip-info",
    success: "tooltip-success",
    warning: "tooltip-warning",
    error: "tooltip-error"
  },
  position: {
    top: "tooltip-top",
    bottom: "tooltip-bottom",
    left: "tooltip-left",
    right: "tooltip-right"
  },
  open: "tooltip-open"
};
export {
  accordionVariants,
  alertVariants,
  avatarVariants,
  badgeVariants,
  breadcrumbVariants,
  buttonVariants,
  cardVariants,
  checkboxVariants,
  dialogVariants,
  drawerVariants,
  dropdownVariants,
  formControlVariants,
  getButtonClasses,
  getInputClasses,
  getLabelClasses,
  inputVariants,
  kbdVariants,
  labelVariants,
  loadingVariants,
  menuVariants,
  navbarVariants,
  paginationVariants,
  progressVariants,
  radioVariants,
  selectVariants,
  separatorVariants,
  skeletonVariants,
  sliderVariants,
  swapVariants,
  switchVariants,
  tableVariants,
  tabsVariants,
  textareaVariants,
  toastVariants,
  tooltipVariants
};
//# sourceMappingURL=variants.mjs.map