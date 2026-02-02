/**
 * DaisyUI Class Variants
 *
 * This file exports all DaisyUI class names for framework-agnostic usage.
 * Non-React projects can use these class names directly in their HTML.
 */
declare const buttonVariants: {
    readonly base: "btn";
    readonly variant: {
        readonly default: "btn-neutral";
        readonly primary: "btn-primary";
        readonly secondary: "btn-secondary";
        readonly accent: "btn-accent";
        readonly info: "btn-info";
        readonly success: "btn-success";
        readonly warning: "btn-warning";
        readonly error: "btn-error";
        readonly ghost: "btn-ghost";
        readonly link: "btn-link";
        readonly outline: "btn-outline";
    };
    readonly size: {
        readonly xs: "btn-xs";
        readonly sm: "btn-sm";
        readonly md: "btn-md";
        readonly lg: "btn-lg";
    };
    readonly shape: {
        readonly default: "";
        readonly wide: "btn-wide";
        readonly block: "btn-block";
        readonly circle: "btn-circle";
        readonly square: "btn-square";
    };
    readonly state: {
        readonly active: "btn-active";
        readonly disabled: "btn-disabled";
    };
    readonly modifiers: {
        readonly loading: "loading";
        readonly glass: "glass";
        readonly noAnimation: "no-animation";
    };
};
declare const inputVariants: {
    readonly base: "input";
    readonly variant: {
        readonly bordered: "input-bordered";
        readonly ghost: "input-ghost";
    };
    readonly color: {
        readonly primary: "input-primary";
        readonly secondary: "input-secondary";
        readonly accent: "input-accent";
        readonly info: "input-info";
        readonly success: "input-success";
        readonly warning: "input-warning";
        readonly error: "input-error";
    };
    readonly size: {
        readonly xs: "input-xs";
        readonly sm: "input-sm";
        readonly md: "input-md";
        readonly lg: "input-lg";
    };
};
declare const labelVariants: {
    readonly base: "label";
    readonly text: {
        readonly default: "label-text";
        readonly alt: "label-text-alt";
    };
};
declare const formControlVariants: {
    readonly base: "form-control";
    readonly width: {
        readonly full: "w-full";
    };
};
declare const loadingVariants: {
    readonly base: "loading";
    readonly type: {
        readonly spinner: "loading-spinner";
        readonly dots: "loading-dots";
        readonly ring: "loading-ring";
        readonly ball: "loading-ball";
        readonly bars: "loading-bars";
        readonly infinity: "loading-infinity";
    };
    readonly size: {
        readonly xs: "loading-xs";
        readonly sm: "loading-sm";
        readonly md: "loading-md";
        readonly lg: "loading-lg";
    };
};
type ButtonVariant = keyof typeof buttonVariants.variant;
type ButtonSize = keyof typeof buttonVariants.size;
type ButtonShape = keyof typeof buttonVariants.shape;
type InputVariant = keyof typeof inputVariants.variant;
type InputColor = keyof typeof inputVariants.color;
type InputSize = keyof typeof inputVariants.size;
/**
 * Generate button class string
 */
declare function getButtonClasses(options?: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    loading?: boolean;
    active?: boolean;
    glass?: boolean;
    noAnimation?: boolean;
    className?: string;
}): string;
/**
 * Generate input class string
 */
declare function getInputClasses(options?: {
    variant?: InputVariant;
    color?: InputColor;
    size?: InputSize;
    error?: boolean;
    className?: string;
}): string;
/**
 * Generate label class string
 */
declare function getLabelClasses(options?: {
    alt?: boolean;
    className?: string;
}): string;
declare const accordionVariants: {
    readonly base: "collapse";
    readonly variant: {
        readonly default: "";
        readonly plus: "collapse-plus";
        readonly arrow: "collapse-arrow";
    };
    readonly bg: "collapse-bg";
    readonly open: "collapse-open";
    readonly close: "collapse-close";
};
declare const alertVariants: {
    readonly base: "alert";
    readonly variant: {
        readonly info: "alert-info";
        readonly success: "alert-success";
        readonly warning: "alert-warning";
        readonly error: "alert-error";
    };
};
declare const avatarVariants: {
    readonly base: "avatar";
    readonly placeholder: "placeholder";
    readonly online: "online";
    readonly offline: "offline";
    readonly size: {
        readonly xs: "w-8";
        readonly sm: "w-12";
        readonly md: "w-16";
        readonly lg: "w-24";
        readonly xl: "w-32";
    };
};
declare const badgeVariants: {
    readonly base: "badge";
    readonly variant: {
        readonly default: "badge-neutral";
        readonly primary: "badge-primary";
        readonly secondary: "badge-secondary";
        readonly accent: "badge-accent";
        readonly info: "badge-info";
        readonly success: "badge-success";
        readonly warning: "badge-warning";
        readonly error: "badge-error";
        readonly ghost: "badge-ghost";
        readonly outline: "badge-outline";
    };
    readonly size: {
        readonly xs: "badge-xs";
        readonly sm: "badge-sm";
        readonly md: "badge-md";
        readonly lg: "badge-lg";
    };
};
declare const breadcrumbVariants: {
    readonly base: "breadcrumbs";
    readonly list: "flex items-center space-x-2";
    readonly item: "flex items-center";
    readonly link: "hover:underline";
    readonly separator: "mx-2";
};
declare const cardVariants: {
    readonly base: "card";
    readonly body: "card-body";
    readonly title: "card-title";
    readonly actions: "card-actions";
    readonly variant: {
        readonly default: "bg-base-100";
        readonly bordered: "card-bordered";
        readonly compact: "card-compact";
        readonly normal: "card-normal";
        readonly side: "card-side";
    };
    readonly image: {
        readonly top: "image-full";
    };
};
declare const checkboxVariants: {
    readonly base: "checkbox";
    readonly variant: {
        readonly primary: "checkbox-primary";
        readonly secondary: "checkbox-secondary";
        readonly accent: "checkbox-accent";
        readonly info: "checkbox-info";
        readonly success: "checkbox-success";
        readonly warning: "checkbox-warning";
        readonly error: "checkbox-error";
    };
    readonly size: {
        readonly xs: "checkbox-xs";
        readonly sm: "checkbox-sm";
        readonly md: "checkbox-md";
        readonly lg: "checkbox-lg";
    };
};
declare const dialogVariants: {
    readonly base: "modal";
    readonly open: "modal-open";
    readonly box: "modal-box";
    readonly action: "modal-action";
    readonly backdrop: "modal-backdrop";
    readonly position: {
        readonly top: "modal-top";
        readonly middle: "modal-middle";
        readonly bottom: "modal-bottom";
    };
};
declare const drawerVariants: {
    readonly base: "drawer";
    readonly toggle: "drawer-toggle";
    readonly content: "drawer-content";
    readonly side: "drawer-side";
    readonly overlay: "drawer-overlay";
    readonly end: "drawer-end";
    readonly open: "drawer-open";
};
declare const dropdownVariants: {
    readonly base: "dropdown";
    readonly content: "dropdown-content";
    readonly position: {
        readonly top: "dropdown-top";
        readonly bottom: "dropdown-bottom";
        readonly left: "dropdown-left";
        readonly right: "dropdown-right";
        readonly end: "dropdown-end";
    };
    readonly open: "dropdown-open";
    readonly hover: "dropdown-hover";
};
declare const kbdVariants: {
    readonly base: "kbd";
    readonly size: {
        readonly xs: "kbd-xs";
        readonly sm: "kbd-sm";
        readonly md: "kbd-md";
        readonly lg: "kbd-lg";
    };
};
declare const menuVariants: {
    readonly base: "menu";
    readonly horizontal: "menu-horizontal";
    readonly vertical: "menu-vertical";
    readonly size: {
        readonly xs: "menu-xs";
        readonly sm: "menu-sm";
        readonly md: "menu-md";
        readonly lg: "menu-lg";
    };
    readonly compact: "menu-compact";
};
declare const navbarVariants: {
    readonly base: "navbar";
    readonly start: "navbar-start";
    readonly center: "navbar-center";
    readonly end: "navbar-end";
};
declare const paginationVariants: {
    readonly base: "join";
    readonly button: "join-item btn";
};
declare const progressVariants: {
    readonly base: "progress";
    readonly variant: {
        readonly primary: "progress-primary";
        readonly secondary: "progress-secondary";
        readonly accent: "progress-accent";
        readonly info: "progress-info";
        readonly success: "progress-success";
        readonly warning: "progress-warning";
        readonly error: "progress-error";
    };
};
declare const radioVariants: {
    readonly base: "radio";
    readonly variant: {
        readonly primary: "radio-primary";
        readonly secondary: "radio-secondary";
        readonly accent: "radio-accent";
        readonly info: "radio-info";
        readonly success: "radio-success";
        readonly warning: "radio-warning";
        readonly error: "radio-error";
    };
    readonly size: {
        readonly xs: "radio-xs";
        readonly sm: "radio-sm";
        readonly md: "radio-md";
        readonly lg: "radio-lg";
    };
};
declare const selectVariants: {
    readonly base: "select";
    readonly variant: {
        readonly bordered: "select-bordered";
        readonly ghost: "select-ghost";
    };
    readonly color: {
        readonly primary: "select-primary";
        readonly secondary: "select-secondary";
        readonly accent: "select-accent";
        readonly info: "select-info";
        readonly success: "select-success";
        readonly warning: "select-warning";
        readonly error: "select-error";
    };
    readonly size: {
        readonly xs: "select-xs";
        readonly sm: "select-sm";
        readonly md: "select-md";
        readonly lg: "select-lg";
    };
};
declare const separatorVariants: {
    readonly base: "divider";
    readonly horizontal: "divider-horizontal";
    readonly vertical: "divider-vertical";
    readonly variant: {
        readonly default: "";
        readonly primary: "divider-primary";
        readonly secondary: "divider-secondary";
        readonly accent: "divider-accent";
    };
};
declare const skeletonVariants: {
    readonly base: "skeleton";
};
declare const sliderVariants: {
    readonly base: "range";
    readonly variant: {
        readonly primary: "range-primary";
        readonly secondary: "range-secondary";
        readonly accent: "range-accent";
        readonly info: "range-info";
        readonly success: "range-success";
        readonly warning: "range-warning";
        readonly error: "range-error";
    };
    readonly size: {
        readonly xs: "range-xs";
        readonly sm: "range-sm";
        readonly md: "range-md";
        readonly lg: "range-lg";
    };
};
declare const swapVariants: {
    readonly base: "swap";
    readonly rotate: "swap-rotate";
    readonly flip: "swap-flip";
    readonly active: "swap-active";
};
declare const switchVariants: {
    readonly base: "toggle";
    readonly variant: {
        readonly primary: "toggle-primary";
        readonly secondary: "toggle-secondary";
        readonly accent: "toggle-accent";
        readonly info: "toggle-info";
        readonly success: "toggle-success";
        readonly warning: "toggle-warning";
        readonly error: "toggle-error";
    };
    readonly size: {
        readonly xs: "toggle-xs";
        readonly sm: "toggle-sm";
        readonly md: "toggle-md";
        readonly lg: "toggle-lg";
    };
};
declare const tableVariants: {
    readonly base: "table";
    readonly zebra: "table-zebra";
    readonly pinRows: "table-pin-rows";
    readonly pinCols: "table-pin-cols";
    readonly size: {
        readonly xs: "table-xs";
        readonly sm: "table-sm";
        readonly md: "table-md";
        readonly lg: "table-lg";
    };
};
declare const tabsVariants: {
    readonly base: "tabs";
    readonly variant: {
        readonly bordered: "tabs-bordered";
        readonly lifted: "tabs-lifted";
        readonly boxed: "tabs-boxed";
    };
    readonly size: {
        readonly xs: "tabs-xs";
        readonly sm: "tabs-sm";
        readonly md: "tabs-md";
        readonly lg: "tabs-lg";
    };
    readonly tab: "tab";
    readonly tabActive: "tab-active";
};
declare const textareaVariants: {
    readonly base: "textarea";
    readonly variant: {
        readonly bordered: "textarea-bordered";
        readonly ghost: "textarea-ghost";
    };
    readonly color: {
        readonly primary: "textarea-primary";
        readonly secondary: "textarea-secondary";
        readonly accent: "textarea-accent";
        readonly info: "textarea-info";
        readonly success: "textarea-success";
        readonly warning: "textarea-warning";
        readonly error: "textarea-error";
    };
    readonly size: {
        readonly xs: "textarea-xs";
        readonly sm: "textarea-sm";
        readonly md: "textarea-md";
        readonly lg: "textarea-lg";
    };
};
declare const toastVariants: {
    readonly base: "toast";
    readonly position: {
        readonly top: "toast-top";
        readonly middle: "toast-middle";
        readonly bottom: "toast-bottom";
        readonly start: "toast-start";
        readonly center: "toast-center";
        readonly end: "toast-end";
    };
};
declare const tooltipVariants: {
    readonly base: "tooltip";
    readonly variant: {
        readonly primary: "tooltip-primary";
        readonly secondary: "tooltip-secondary";
        readonly accent: "tooltip-accent";
        readonly info: "tooltip-info";
        readonly success: "tooltip-success";
        readonly warning: "tooltip-warning";
        readonly error: "tooltip-error";
    };
    readonly position: {
        readonly top: "tooltip-top";
        readonly bottom: "tooltip-bottom";
        readonly left: "tooltip-left";
        readonly right: "tooltip-right";
    };
    readonly open: "tooltip-open";
};

export { type ButtonShape, type ButtonSize, type ButtonVariant, type InputColor, type InputSize, type InputVariant, accordionVariants, alertVariants, avatarVariants, badgeVariants, breadcrumbVariants, buttonVariants, cardVariants, checkboxVariants, dialogVariants, drawerVariants, dropdownVariants, formControlVariants, getButtonClasses, getInputClasses, getLabelClasses, inputVariants, kbdVariants, labelVariants, loadingVariants, menuVariants, navbarVariants, paginationVariants, progressVariants, radioVariants, selectVariants, separatorVariants, skeletonVariants, sliderVariants, swapVariants, switchVariants, tableVariants, tabsVariants, textareaVariants, toastVariants, tooltipVariants };
