import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Menu items */
	items: ContextMenuItem[];
	/** Trigger element */
	trigger: React.ReactNode;
}

export interface ContextMenuItem {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
	icon?: React.ReactNode;
	separator?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * ContextMenu component
 *
 * @example
 * ```tsx
 * <ContextMenu
 *   trigger={<div>Right click me</div>}
 *   items={[
 *     { label: 'Copy', onClick: handleCopy },
 *     { label: 'Paste', onClick: handlePaste },
 *   ]}
 * />
 * ```
 */
export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
	({ items, trigger, children, className, ...props }, ref) => {
		const [isOpen, setIsOpen] = useState(false);
		const [position, setPosition] = useState({ x: 0, y: 0 });
		const menuRef = useRef<HTMLUListElement>(null);

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
					setIsOpen(false);
				}
			};

			if (isOpen) {
				document.addEventListener("mousedown", handleClickOutside);
				return () => document.removeEventListener("mousedown", handleClickOutside);
			}
		}, [isOpen]);

		const handleContextMenu = (e: React.MouseEvent) => {
			e.preventDefault();
			setPosition({ x: e.clientX, y: e.clientY });
			setIsOpen(true);
		};

		const handleItemClick = (item: ContextMenuItem) => {
			if (!item.disabled && item.onClick) {
				item.onClick();
				setIsOpen(false);
			}
		};

		return (
			<div ref={ref} onContextMenu={handleContextMenu} className={clsx("relative", className)} {...props}>
				{trigger}
				{isOpen && (
					<ul
						ref={menuRef}
						className="menu bg-base-100 rounded-box shadow-lg absolute z-100 min-w-50"
						style={{ left: position.x, top: position.y }}
					>
						{items.map((item, index) => {
							if (item.separator) {
								return <li key={index} className="menu-title" />;
							}

							return (
								<li key={index}>
									<button
										type="button"
										onClick={() => handleItemClick(item)}
										disabled={item.disabled}
										className={clsx("flex items-center gap-2")}
									>
										{item.icon && <span>{item.icon}</span>}
										<span>{item.label}</span>
									</button>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		);
	},
);

ContextMenu.displayName = "ContextMenu";
