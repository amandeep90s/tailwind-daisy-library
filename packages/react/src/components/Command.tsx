import clsx from "clsx";
import React, { forwardRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Search value */
	value?: string;
	/** Callback when search value changes */
	onValueChange?: (value: string) => void;
	/** Placeholder for search input */
	placeholder?: string;
}

export interface CommandItemProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onSelect"> {
	/** Item value */
	value?: string;
	/** Callback when item is selected */
	onSelect?: (value: string) => void;
	/** Whether item is disabled */
	disabled?: boolean;
}

export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Group heading */
	heading?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Command palette component for searchable commands
 *
 * @example
 * ```tsx
 * <Command placeholder="Type a command...">
 *   <CommandGroup heading="Suggestions">
 *     <CommandItem value="calendar">Calendar</CommandItem>
 *     <CommandItem value="search">Search</CommandItem>
 *   </CommandGroup>
 * </Command>
 * ```
 */
export const Command = forwardRef<HTMLDivElement, CommandProps>(
	({ value, onValueChange, placeholder = "Type a command...", children, className, ...props }, ref) => {
		const [searchValue, setSearchValue] = useState(value || "");

		const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setSearchValue(newValue);
			onValueChange?.(newValue);
		};

		return (
			<div ref={ref} className={clsx("bg-base-100 rounded-lg shadow-lg overflow-hidden", className)} {...props}>
				<div className="p-3 border-b border-base-300">
					<input
						type="text"
						value={searchValue}
						onChange={handleSearchChange}
						placeholder={placeholder}
						className="input input-ghost w-full focus:outline-none"
					/>
				</div>
				<div className="max-h-75 overflow-y-auto p-2">{children}</div>
			</div>
		);
	},
);

Command.displayName = "Command";

export const CommandGroup = forwardRef<HTMLDivElement, CommandGroupProps>(
	({ heading, children, className, ...props }, ref) => {
		return (
			<div ref={ref} className={clsx("py-2", className)} {...props}>
				{heading && <div className="px-2 py-1.5 text-xs font-semibold text-base-content/70">{heading}</div>}
				<div className="space-y-1">{children}</div>
			</div>
		);
	},
);

CommandGroup.displayName = "CommandGroup";

export const CommandItem = forwardRef<HTMLButtonElement, CommandItemProps>(
	({ value, onSelect, disabled, children, className, ...props }, ref) => {
		const handleClick = () => {
			if (value && !disabled) {
				onSelect?.(value);
			}
		};

		return (
			<button
				ref={ref}
				type="button"
				onClick={handleClick}
				disabled={disabled}
				className={clsx(
					"w-full text-left px-2 py-1.5 rounded-md",
					"hover:bg-base-200 focus:bg-base-200",
					"disabled:opacity-50 disabled:cursor-not-allowed",
					className,
				)}
				{...props}
			>
				{children}
			</button>
		);
	},
);

CommandItem.displayName = "CommandItem";
