import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { Pagination } from "./Pagination";

// ============================================================================
// TYPES
// ============================================================================

export type DataTableSize = "xs" | "sm" | "md" | "lg";
export type SortDirection = "asc" | "desc" | null;
export type PaginationVariant = "numbered" | "simple";

export interface DataTableColumnDef<T> {
	/** Unique key for the column */
	key: string;
	/** Column header text */
	header: string;
	/** Whether the column is sortable */
	sortable?: boolean;
	/** Custom render function for cell content */
	render?: (item: T, index: number) => React.ReactNode;
	/** Custom sort function */
	sortFn?: (a: T, b: T) => number;
	/** Header alignment */
	headerAlign?: "left" | "center" | "right";
	/** Cell alignment */
	cellAlign?: "left" | "center" | "right";
	/** Column width */
	width?: string;
}

export interface DataTableSortState {
	column: string | null;
	direction: SortDirection;
}

export interface SortableDataTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
	/** Table data */
	data: T[];
	/** Column definitions */
	columns: DataTableColumnDef<T>[];
	/** Function to get unique row key */
	getRowKey: (item: T) => string | number;
	/** Table size */
	size?: DataTableSize;
	/** Enable zebra stripes */
	zebra?: boolean;
	/** Pin rows on scroll */
	pinRows?: boolean;
	/** Pin columns on scroll */
	pinCols?: boolean;
	/** Enable row expansion */
	expandable?: boolean;
	/** Render function for expanded content */
	renderExpandedRow?: (item: T) => React.ReactNode;
	/** Initially expanded row keys */
	defaultExpandedKeys?: (string | number)[];
	/** Controlled expanded keys */
	expandedKeys?: (string | number)[];
	/** Callback when expanded keys change */
	onExpandedChange?: (keys: (string | number)[]) => void;
	/** Default sort state */
	defaultSort?: DataTableSortState;
	/** Controlled sort state */
	sortState?: DataTableSortState;
	/** Callback when sort changes */
	onSortChange?: (state: DataTableSortState) => void;
	/** Show loading state */
	loading?: boolean;
	/** Empty state message */
	emptyMessage?: React.ReactNode;
	/** Custom class for table */
	tableClassName?: string;
	/** Custom class for header row */
	headerClassName?: string;
	/** Custom class for body rows */
	rowClassName?: string | ((item: T, index: number) => string);
	/** Custom icon for ascending sort */
	sortAscIcon?: React.ReactNode;
	/** Custom icon for descending sort */
	sortDescIcon?: React.ReactNode;
	/** Custom icon for unsorted state (both arrows) */
	sortBothIcon?: React.ReactNode;
	/** Custom icon for expand/collapse */
	expandIcon?: (expanded: boolean) => React.ReactNode;
	/** Enable pagination */
	pagination?: boolean;
	/** Number of items per page */
	pageSize?: number;
	/** Current page (1-indexed, controlled) */
	currentPage?: number;
	/** Callback when page changes */
	onPageChange?: (page: number) => void;
	/** Default page (uncontrolled) */
	defaultPage?: number;
	/** Number of sibling pages to show in pagination */
	paginationSiblingCount?: number;
	/** Custom class for pagination wrapper */
	paginationClassName?: string;
	/** Position of pagination */
	paginationPosition?: "top" | "bottom" | "both";
	/** Pagination variant - numbered (default) shows page numbers, simple shows only prev/next buttons */
	paginationVariant?: PaginationVariant;
	/** Available page size options for simple pagination variant */
	pageSizeOptions?: number[];
	/** Callback when page size changes (for controlled page size) */
	onPageSizeChange?: (pageSize: number) => void;
}

// ============================================================================
// ICONS
// ============================================================================

const SortIcon = ({ direction, active }: { direction: "asc" | "desc" | "both"; active?: boolean }) => {
	const activeClass = active ? "text-primary" : "text-base-content/40";

	if (direction === "both") {
		return (
			<div className="flex flex-col -space-y-1">
				<svg className={clsx("w-3 h-3", activeClass)} fill="currentColor" viewBox="0 0 24 24">
					<path d="M7 14l5-5 5 5H7z" />
				</svg>
				<svg className={clsx("w-3 h-3", activeClass)} fill="currentColor" viewBox="0 0 24 24">
					<path d="M7 10l5 5 5-5H7z" />
				</svg>
			</div>
		);
	}

	if (direction === "asc") {
		return (
			<svg className={clsx("w-4 h-4", activeClass)} fill="currentColor" viewBox="0 0 24 24">
				<path d="M7 14l5-5 5 5H7z" />
			</svg>
		);
	}

	return (
		<svg className={clsx("w-4 h-4", activeClass)} fill="currentColor" viewBox="0 0 24 24">
			<path d="M7 10l5 5 5-5H7z" />
		</svg>
	);
};

const ExpandIcon = ({ expanded }: { expanded: boolean }) => (
	<svg
		className={clsx("w-5 h-5 transition-transform duration-200", expanded && "rotate-180")}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
	</svg>
);

// ============================================================================
// SIZE CLASSES
// ============================================================================

const sizeClasses: Record<DataTableSize, string> = {
	xs: "table-xs",
	sm: "table-sm",
	md: "table-md",
	lg: "table-lg",
};

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * SortableDataTable component with sorting and expandable row features
 *
 * @example
 * ```tsx
 * // Basic sortable table
 * <SortableDataTable
 *   data={users}
 *   columns={[
 *     { key: 'name', header: 'Name', sortable: true },
 *     { key: 'email', header: 'Email', sortable: true },
 *     { key: 'role', header: 'Role' },
 *   ]}
 *   getRowKey={(user) => user.id}
 * />
 *
 * // With expandable rows
 * <SortableDataTable
 *   data={orders}
 *   columns={columns}
 *   getRowKey={(order) => order.id}
 *   expandable
 *   renderExpandedRow={(order) => <OrderDetails order={order} />}
 * />
 * ```
 */
export const SortableDataTable = forwardRef<HTMLDivElement, SortableDataTableProps<any>>(
	<T extends Record<string, any>>(
		{
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
		}: SortableDataTableProps<T>,
		ref: React.ForwardedRef<HTMLDivElement>,
	) => {
		// Internal state for uncontrolled mode
		const [internalExpandedKeys, setInternalExpandedKeys] = useState<(string | number)[]>(defaultExpandedKeys);
		const [internalSortState, setInternalSortState] = useState<DataTableSortState>(defaultSort);
		const [internalCurrentPage, setInternalCurrentPage] = useState<number>(defaultPage);
		const [internalPageSize, setInternalPageSize] = useState<number>(controlledPageSize);

		// Use controlled or uncontrolled state
		const expandedKeys = controlledExpandedKeys ?? internalExpandedKeys;
		const sortState = controlledSortState ?? internalSortState;
		const currentPage = controlledCurrentPage ?? internalCurrentPage;
		const pageSize = onPageSizeChange ? controlledPageSize : internalPageSize;

		// Handle expand toggle
		const handleExpandToggle = useCallback(
			(key: string | number) => {
				const newKeys = expandedKeys.includes(key) ? expandedKeys.filter((k) => k !== key) : [...expandedKeys, key];

				if (controlledExpandedKeys === undefined) {
					setInternalExpandedKeys(newKeys);
				}
				onExpandedChange?.(newKeys);
			},
			[expandedKeys, controlledExpandedKeys, onExpandedChange],
		);

		// Handle sort click
		const handleSortClick = useCallback(
			(columnKey: string) => {
				let newDirection: SortDirection = "asc";

				if (sortState.column === columnKey) {
					if (sortState.direction === "asc") {
						newDirection = "desc";
					} else if (sortState.direction === "desc") {
						newDirection = null;
					}
				}

				const newState: DataTableSortState = {
					column: newDirection ? columnKey : null,
					direction: newDirection,
				};

				if (controlledSortState === undefined) {
					setInternalSortState(newState);
				}
				onSortChange?.(newState);
			},
			[sortState, controlledSortState, onSortChange],
		);

		// Sort data
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

				const aVal = a[sortState.column!];
				const bVal = b[sortState.column!];

				// Handle null/undefined
				if (aVal == null && bVal == null) return 0;
				if (aVal == null) return 1;
				if (bVal == null) return -1;

				// Handle numbers
				if (typeof aVal === "number" && typeof bVal === "number") {
					return aVal - bVal;
				}

				// Handle strings
				return String(aVal).localeCompare(String(bVal));
			});

			return sortState.direction === "desc" ? sorted.reverse() : sorted;
		}, [data, sortState, columns]);

		// Pagination calculations
		const totalPages = useMemo(() => {
			if (!pagination || pageSize <= 0) return 1;
			return Math.ceil(sortedData.length / pageSize);
		}, [pagination, sortedData.length, pageSize]);

		// Handle page change
		const handlePageChange = useCallback(
			(page: number) => {
				if (controlledCurrentPage === undefined) {
					setInternalCurrentPage(page);
				}
				onPageChange?.(page);
			},
			[controlledCurrentPage, onPageChange],
		);

		// Handle page size change
		const handlePageSizeChange = useCallback(
			(newPageSize: number) => {
				if (onPageSizeChange) {
					onPageSizeChange(newPageSize);
				} else {
					setInternalPageSize(newPageSize);
				}
				// Reset to first page when page size changes
				if (controlledCurrentPage === undefined) {
					setInternalCurrentPage(1);
				}
				onPageChange?.(1);
			},
			[onPageSizeChange, controlledCurrentPage, onPageChange],
		);

		// Get paginated data
		const paginatedData = useMemo(() => {
			if (!pagination) return sortedData;
			const startIndex = (currentPage - 1) * pageSize;
			const endIndex = startIndex + pageSize;
			return sortedData.slice(startIndex, endIndex);
		}, [pagination, sortedData, currentPage, pageSize]);

		// Calculate record range for simple pagination
		const recordRange = useMemo(() => {
			if (!pagination) return { start: 1, end: sortedData.length, total: sortedData.length };
			const start = (currentPage - 1) * pageSize + 1;
			const end = Math.min(currentPage * pageSize, sortedData.length);
			return { start, end, total: sortedData.length };
		}, [pagination, currentPage, pageSize, sortedData.length]);

		// Get row class
		const getRowClass = (item: T, index: number) => {
			if (typeof rowClassName === "function") {
				return rowClassName(item, index);
			}
			return rowClassName;
		};

		// Alignment classes
		const alignmentClasses = {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		};

		// Calculate total columns (including expand column)
		const totalColumns = expandable ? columns.length + 1 : columns.length;

		// Render sort icon
		const renderSortIcon = (direction: "asc" | "desc" | "both", active?: boolean) => {
			if (direction === "asc" && sortAscIcon) {
				return sortAscIcon;
			}
			if (direction === "desc" && sortDescIcon) {
				return sortDescIcon;
			}
			if (direction === "both" && sortBothIcon) {
				return sortBothIcon;
			}
			return <SortIcon direction={direction} active={active} />;
		};

		// Render expand icon
		const renderExpandIcon = (expanded: boolean) => {
			if (expandIcon) {
				return expandIcon(expanded);
			}
			return <ExpandIcon expanded={expanded} />;
		};

		// Render numbered pagination component (original)
		const renderNumberedPagination = () => {
			if (!pagination || totalPages <= 1) return null;
			return (
				<div className={clsx("flex justify-center", paginationClassName)}>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onChange={handlePageChange}
						siblingCount={paginationSiblingCount}
					/>
				</div>
			);
		};

		// Render simple pagination component (new variant)
		const renderSimplePagination = () => {
			if (!pagination) return null;
			return (
				<div className={clsx("flex items-center justify-between", paginationClassName)}>
					{/* Page size selector and record count */}
					<div className="flex items-center gap-2">
						<select
							className="select select-bordered select-sm"
							value={pageSize}
							onChange={(e) => handlePageSizeChange(Number(e.target.value))}
							aria-label="Rows per page"
						>
							{pageSizeOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						<span className="text-sm text-base-content/70">
							of {recordRange.total} records
						</span>
					</div>

					{/* Prev/Next buttons */}
					<div className="flex items-center gap-1">
						<button
							type="button"
							className="btn btn-ghost btn-sm btn-square"
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							aria-label="Previous page"
						>
							<ChevronLeftIcon className="w-5 h-5" />
						</button>
						<button
							type="button"
							className="btn btn-ghost btn-sm btn-square"
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage >= totalPages}
							aria-label="Next page"
						>
							<ChevronRightIcon className="w-5 h-5" />
						</button>
					</div>
				</div>
			);
		};

		// Render pagination based on variant
		const renderPagination = () => {
			if (paginationVariant === "simple") {
				return renderSimplePagination();
			}
			return renderNumberedPagination();
		};

		return (
			<div ref={ref} className={clsx("w-full", className)} {...props}>
				{pagination && (paginationPosition === "top" || paginationPosition === "both") && (
					<div className="mb-4">{renderPagination()}</div>
				)}
				<div className="overflow-x-auto">
					<table
						className={clsx(
							"table",
							sizeClasses[size],
							zebra && "table-zebra",
							pinRows && "table-pin-rows",
							pinCols && "table-pin-cols",
							tableClassName,
						)}
					>
					<thead>
						<tr className={headerClassName}>
							{columns.map((column) => (
								<th
									key={column.key}
									className={clsx(
										alignmentClasses[column.headerAlign || "left"],
										column.sortable && "cursor-pointer select-none hover:bg-base-200",
									)}
									style={{ width: column.width }}
									onClick={column.sortable ? () => handleSortClick(column.key) : undefined}
								>
									<div
										className={clsx(
											"flex items-center gap-2",
											column.headerAlign === "center" && "justify-center",
											column.headerAlign === "right" && "justify-end",
										)}
									>
										<span>{column.header}</span>
										{column.sortable &&
											renderSortIcon(
												sortState.column === column.key && sortState.direction ? sortState.direction : "both",
												sortState.column === column.key,
											)}
									</div>
								</th>
							))}
							{expandable && <th className="w-12"></th>}
						</tr>
					</thead>
					<tbody>
						{loading ? (
							<tr>
								<td colSpan={totalColumns} className="text-center py-8">
									<span className="loading loading-spinner loading-md"></span>
								</td>
							</tr>
						) : sortedData.length === 0 ? (
							<tr>
								<td colSpan={totalColumns} className="text-center py-8 text-base-content/60">
									{emptyMessage}
								</td>
							</tr>
						) : (
							paginatedData.map((item, index) => {
								const rowKey = getRowKey(item);
								const isExpanded = expandedKeys.includes(rowKey);
								// Calculate actual index considering pagination
								const actualIndex = pagination ? (currentPage - 1) * pageSize + index : index;

								return (
									<React.Fragment key={rowKey}>
										<tr className={clsx(getRowClass(item, actualIndex), isExpanded && "bg-base-200")}>
											{columns.map((column) => (
												<td key={column.key} className={alignmentClasses[column.cellAlign || "left"]}>
													{column.render ? column.render(item, actualIndex) : item[column.key]}
												</td>
											))}
											{expandable && (
												<td className="text-center">
													<button
														type="button"
														className="btn btn-ghost btn-sm btn-square"
														onClick={() => handleExpandToggle(rowKey)}
														aria-expanded={isExpanded}
														aria-label={isExpanded ? "Collapse row" : "Expand row"}
													>
														{renderExpandIcon(isExpanded)}
													</button>
												</td>
											)}
										</tr>
										{expandable && isExpanded && renderExpandedRow && (
											<tr className="bg-base-200/50">
												<td colSpan={totalColumns} className="p-4">
													{renderExpandedRow(item)}
												</td>
											</tr>
										)}
									</React.Fragment>
								);
							})
						)}
					</tbody>
				</table>
				</div>
				{pagination && (paginationPosition === "bottom" || paginationPosition === "both") && (
					<div className="mt-4">{renderPagination()}</div>
				)}
			</div>
		);
	},
) as <T extends Record<string, any>>(
	props: SortableDataTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> },
) => React.ReactElement;

(SortableDataTable as any).displayName = "SortableDataTable";
