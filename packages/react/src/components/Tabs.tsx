import clsx from "clsx";
import React, { createContext, forwardRef, useContext, useId, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type TabsVariant = "bordered" | "lifted" | "boxed";
export type TabsSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TabsPosition = "top" | "bottom";
export type TabsColor =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Tabs variant */
  variant?: TabsVariant;
  /** Tabs size */
  size?: TabsSize;
  /** Tabs position (top or bottom) */
  position?: TabsPosition;
  /** Active tab color */
  activeColor?: TabsColor;
  /** Default active tab */
  defaultValue?: string;
  /** Controlled active tab */
  value?: string;
  /** Callback when tab changes */
  onChange?: (value: string) => void;
}

export interface TabProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "type"
> {
  /** Tab value/id */
  value: string;
  /** Tab label */
  label: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Panel value matching tab */
  value: string;
}

// ============================================================================
// CONTEXT
// ============================================================================

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: TabsVariant;
  size: TabsSize;
  position: TabsPosition;
  activeColor?: TabsColor;
  groupName: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tab components must be used within Tabs");
  }
  return context;
};

// ============================================================================
// COMPONENT
// ============================================================================

const variantClasses: Record<TabsVariant, string> = {
  bordered: "tabs-border",
  lifted: "tabs-lift",
  boxed: "tabs-box",
};

const sizeClasses: Record<TabsSize, string> = {
  xs: "tabs-xs",
  sm: "tabs-sm",
  md: "tabs-md",
  lg: "tabs-lg",
  xl: "tabs-xl",
};

const positionClasses: Record<TabsPosition, string> = {
  top: "",
  bottom: "tabs-bottom",
};

const activeColorClasses: Record<TabsColor, string> = {
  neutral: "tab-active",
  primary: "checked:text-primary checked:font-medium checked:[border-color:hsl(var(--p))]",
  secondary: "checked:text-secondary checked:font-medium checked:[border-color:hsl(var(--s))]",
  accent: "checked:text-accent checked:font-medium checked:[border-color:hsl(var(--a))]",
  info: "checked:text-info checked:font-medium checked:[border-color:hsl(var(--in))]",
  success: "checked:text-success checked:font-medium checked:[border-color:hsl(var(--su))]",
  warning: "checked:text-warning checked:font-medium checked:[border-color:hsl(var(--wa))]",
  error: "checked:text-error checked:font-medium checked:[border-color:hsl(var(--er))]",
};

/**
 * Tabs component with DaisyUI styling using radio inputs for native tab-content support
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <Tab value="tab1" label="Tab 1" />
 *   <TabPanel value="tab1">Content 1</TabPanel>
 *   <Tab value="tab2" label="Tab 2" />
 *   <TabPanel value="tab2">Content 2</TabPanel>
 * </Tabs>
 * ```
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
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
    },
    ref
  ) => {
    const [internalActiveTab, setInternalActiveTab] = useState(defaultValue);
    const activeTab = value !== undefined ? value : internalActiveTab;
    const groupName = useId();

    const handleTabChange = (newValue: string) => {
      if (value === undefined) {
        setInternalActiveTab(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <TabsContext.Provider
        value={{
          activeTab,
          setActiveTab: handleTabChange,
          variant,
          size,
          position,
          activeColor,
          groupName,
        }}
      >
        <div
          ref={ref}
          className={clsx(
            "tabs",
            variantClasses[variant],
            sizeClasses[size],
            positionClasses[position],
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = "Tabs";

export const Tab = forwardRef<HTMLInputElement, TabProps>(
  ({ value, label, disabled = false, className, ...props }, ref) => {
    const { activeTab, setActiveTab, groupName, activeColor } = useTabs();
    const isActive = activeTab === value;

    return (
      <input
        ref={ref}
        type="radio"
        name={groupName}
        role="tab"
        aria-label={typeof label === "string" ? label : undefined}
        checked={isActive}
        onChange={() => !disabled && setActiveTab(value)}
        disabled={disabled}
        className={clsx(
          "tab",
          isActive && "tab-active",
          disabled && "tab-disabled",
          isActive && activeColor && activeColor !== "neutral" && activeColorClasses[activeColor],
          className
        )}
        {...props}
      />
    );
  }
);

Tab.displayName = "Tab";

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, children, className, ...props }, ref) => {
    const { activeTab } = useTabs();

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={clsx(
          "tab-content bg-base-100 border-base-300 p-6",
          activeTab !== value && "hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = "TabPanel";
