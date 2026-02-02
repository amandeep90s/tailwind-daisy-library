import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
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
}

type DropdownPosition = "bottom" | "top";

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Combobox component with search functionality following shadcn pattern
 * Uses a button trigger with a dropdown containing a search input
 *
 * @example
 * ```tsx
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
      options,
      value,
      onChange,
      placeholder = "Select option...",
      searchPlaceholder = "Search...",
      emptyText = "No results found.",
      className,
      disabled = false,
      id,
    },
    ref,
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
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
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
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
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

    const handleSelect = (optionValue: string) => {
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

    return (
      <div
        ref={containerRef}
        className={clsx(
          "dropdown w-full",
          isOpen && "dropdown-open",
          className,
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
          )}
        >
          <span className="truncate">
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDownIcon className={clsx("h-5 w-5 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div
            ref={dropdownRef}
            className={clsx(
              "dropdown-content bg-base-100 rounded-box z-50 w-full shadow-lg border border-base-300",
              position === "bottom" ? "mt-1" : "mb-1 bottom-full",
            )}
            style={
              position === "top" ? { bottom: "100%", top: "auto" } : undefined
            }
          >
            {/* Search Input */}
            <div className="p-2 border-b border-base-300">
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
              className="menu p-2 max-h-60 overflow-y-auto flex-col flex-nowrap w-full"
              role="listbox"
            >
              {filteredOptions.length === 0 ? (
                <li className="disabled w-full">
                  <span className="text-base-content/50 text-center w-full">
                    {emptyText}
                  </span>
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
                      onClick={() => handleSelect(option.value)}
                      disabled={option.disabled}
                      className={clsx(
                        "flex items-center justify-between w-full",
                        option.value === value && "active",
                      )}
                    >
                      <span className="truncate">{option.label}</span>
                      {option.value === value && (
                        <CheckIcon className="w-4 h-4" />
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  },
);

Combobox.displayName = "Combobox";
