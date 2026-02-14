import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type ComboboxVariant = "bordered" | "ghost" | "floating";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  /** Style variant. 'floating' uses custom UI with floating label, 'bordered' and 'ghost' use standard behavior */
  variant?: ComboboxVariant;
  /** Available options */
  options: ComboboxOption[];
  /** Selected value */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Placeholder text for the trigger button */
  placeholder?: string;
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
  /** Text to display when no options match the search */
  emptyText?: string;
  /** Additional class name for the container */
  className?: string;
  /** Whether the combobox is disabled */
  disabled?: boolean;
  /** Unique identifier for the combobox */
  id?: string;
  /** Label text (required for floating variant, optional for others) */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
}

type DropdownPosition = "bottom" | "top";

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Combobox component with search functionality following shadcn pattern
 * Uses a button trigger with a dropdown containing a search input
 *
 * Features:
 * - **Floating variant**: Custom UI with floating label that moves to top when value is selected or dropdown opens
 * - **Bordered/Ghost variants**: Standard combobox behavior
 * - Searchable options with keyboard navigation
 * - Collision detection for dropdown positioning
 *
 * @example
 * ```tsx
 * // Floating variant
 * <Combobox
 *   variant="floating"
 *   label="Select Framework"
 *   options={[
 *     { value: 'react', label: 'React' },
 *     { value: 'vue', label: 'Vue' },
 *   ]}
 *   value={value}
 *   onChange={setValue}
 *   searchPlaceholder="Search frameworks..."
 * />
 *
 * // Standard variant
 * <Combobox
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' },
 *   ]}
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   placeholder="Select option..."
 * />
 * ```
 */
export const Combobox = forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
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
      helperText,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [position, setPosition] = useState<DropdownPosition>("bottom");
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const comboboxId = id || `combobox-${Math.random().toString(36).substr(2, 9)}`;

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedOption = options.find((opt) => opt.value === value);

    // Calculate optimal position for dropdown (collision detection)
    const calculatePosition = useCallback(() => {
      if (!triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = 300; // Approximate max height of dropdown (search + options list)
      const sideOffset = 4; // Gap between trigger and dropdown

      const spaceBelow = viewportHeight - triggerRect.bottom - sideOffset;
      const spaceAbove = triggerRect.top - sideOffset;

      // If not enough space below and more space above, position at top
      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }, []);

    // Focus search input when dropdown opens and calculate position
    useEffect(() => {
      if (isOpen) {
        calculatePosition();
        // Add resize listener to recalculate on viewport changes
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

    // Handle click outside to close dropdown
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (!isOpen) return;

        if (event.key === "Escape") {
          setIsOpen(false);
          setSearchTerm("");
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    const handleSelect = (optionValue: string, event?: React.MouseEvent) => {
      // Prevent event from bubbling up to parent elements
      event?.stopPropagation();
      event?.preventDefault();

      // Toggle selection: if already selected, deselect; otherwise select
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

    // Check if floating variant is active (has value or dropdown is open)
    const isActive = !!value || isOpen;

    const dropdownContent = (
      <div
        ref={containerRef}
        className={clsx(
          "dropdown w-full",
          isOpen && "dropdown-open",
          variant !== "floating" && className
        )}
      >
        {/* Trigger Button */}
        <button
          ref={(node) => {
            // Handle both refs
            triggerRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          id={comboboxId}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={`${comboboxId}-listbox`}
          disabled={disabled}
          onClick={handleToggle}
          className={clsx(
            "btn btn-outline w-full justify-between font-normal",
            !selectedOption && "text-base-content/50",
            disabled && "btn-disabled",
            error && "btn-error"
          )}
        >
          <span className="truncate">{selectedOption?.label || placeholder}</span>
          <ChevronDownIcon
            className={clsx(
              "h-5 w-5 shrink-0 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className={clsx(
              "dropdown-content bg-base-100 rounded-box border-base-300 z-50 w-full border shadow-lg",
              position === "bottom" ? "mt-1" : "bottom-full mb-1"
            )}
            style={position === "top" ? { bottom: "100%", top: "auto" } : undefined}
          >
            {/* Search Input */}
            <div className="border-base-300 border-b p-2">
              <input
                ref={searchInputRef}
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-sm input-bordered w-full"
              />
            </div>

            {/* Options List */}
            <ul
              className="menu max-h-60 w-full flex-col flex-nowrap overflow-y-auto p-2"
              role="listbox"
            >
              {filteredOptions.length === 0 ? (
                <li className="disabled w-full">
                  <span className="text-base-content/50 w-full text-center">{emptyText}</span>
                </li>
              ) : (
                filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={option.value === value}
                    className="w-full"
                  >
                    <button
                      type="button"
                      onClick={(e) => handleSelect(option.value, e)}
                      disabled={option.disabled}
                      className={clsx(
                        "flex w-full items-center justify-between",
                        option.value === value && "active"
                      )}
                    >
                      <span className="truncate">{option.label}</span>
                      {option.value === value && <CheckIcon className="h-4 w-4" />}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );

    // Floating label variant
    if (variant === "floating") {
      return (
        <div ref={containerRef} className={clsx("form-control w-full", className)}>
          <label className={`floating-label ${isActive ? "active" : ""}`}>
            {/* Outer floating label - visible when active (has value or is open) */}
            <span className="outer-label">{label}</span>

            <div className={clsx("dropdown w-full", isOpen && "dropdown-open")}>
              {/* Trigger Button with floating label styling */}
              <button
                ref={(node) => {
                  // Handle both refs
                  triggerRef.current = node;
                  if (typeof ref === "function") {
                    ref(node);
                  } else if (ref) {
                    ref.current = node;
                  }
                }}
                id={comboboxId}
                type="button"
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-controls={`${comboboxId}-listbox`}
                disabled={disabled}
                onClick={handleToggle}
                className={clsx(
                  "input input-bordered relative flex w-full cursor-pointer outline-none",
                  "items-center justify-between gap-2 px-4 py-3 transition-colors",
                  "bg-size-[1.5em_1.5em] bg-position-[right_1rem_center] bg-no-repeat",
                  "bg-none", // Override DaisyUI default background
                  disabled && "cursor-not-allowed opacity-50",
                  error && "input-error"
                )}
              >
                {/* Content area */}
                <span
                  className={clsx(
                    "select-content flex flex-1 justify-start select-none",
                    value && "pt-4 pl-1"
                  )}
                >
                  {/* Internal label - visible when not active */}
                  <span className="internal-label">{label || placeholder}</span>
                  {/* Selected value display */}
                  {value && selectedOption && (
                    <span className="select-value text-secondary-400 text-base">
                      {selectedOption.label}
                    </span>
                  )}
                </span>

                <ChevronDownIcon
                  className={clsx(
                    "h-5 w-5 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Content */}
              {isOpen && (
                <div
                  ref={dropdownRef}
                  className={clsx(
                    "dropdown-content bg-base-100 rounded-box border-base-300 z-50 w-full border shadow-lg",
                    position === "bottom" ? "mt-1" : "bottom-full mb-1"
                  )}
                  style={position === "top" ? { bottom: "100%", top: "auto" } : undefined}
                >
                  {/* Search Input */}
                  <div className="border-base-300 border-b p-2">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder={searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input input-sm input-bordered w-full"
                    />
                  </div>

                  {/* Options List */}
                  <ul
                    className="menu max-h-60 w-full flex-col flex-nowrap overflow-y-auto p-2"
                    role="listbox"
                  >
                    {filteredOptions.length === 0 ? (
                      <li className="disabled w-full">
                        <span className="text-base-content/50 w-full text-center">{emptyText}</span>
                      </li>
                    ) : (
                      filteredOptions.map((option) => (
                        <li
                          key={option.value}
                          role="option"
                          aria-selected={option.value === value}
                          className="w-full"
                        >
                          <button
                            type="button"
                            onClick={(e) => handleSelect(option.value, e)}
                            disabled={option.disabled}
                            className={clsx(
                              "flex w-full items-center justify-between",
                              option.value === value && "active"
                            )}
                          >
                            <span className="truncate">{option.label}</span>
                            {option.value === value && <CheckIcon className="h-4 w-4" />}
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              )}
            </div>
          </label>

          {error && <span className="label-text-alt text-error mt-1 text-xs">{error}</span>}
          {!error && helperText && (
            <span className="label-text-alt mt-1 text-xs">{helperText}</span>
          )}
        </div>
      );
    }

    return dropdownContent;
  }
);

Combobox.displayName = "Combobox";
