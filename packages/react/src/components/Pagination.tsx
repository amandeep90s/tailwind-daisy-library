import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Current page (1-indexed) */
	currentPage: number;
	/** Total number of pages */
	totalPages: number;
	/** Callback when page changes */
	onChange: (page: number) => void;
	/** Number of page buttons to show */
	siblingCount?: number;
}

// ============================================================================
// HELPERS
// ============================================================================

function generatePaginationRange(current: number, total: number, siblings: number): (number | string)[] {
	const range: (number | string)[] = [];

	// Always show first page
	range.push(1);

	// Calculate start and end of sibling range
	const leftSibling = Math.max(current - siblings, 2);
	const rightSibling = Math.min(current + siblings, total - 1);

	// Add ellipsis after first page if needed
	if (leftSibling > 2) {
		range.push("...");
	}

	// Add sibling pages
	for (let i = leftSibling; i <= rightSibling; i++) {
		range.push(i);
	}

	// Add ellipsis before last page if needed
	if (rightSibling < total - 1) {
		range.push("...");
	}

	// Always show last page if there's more than one page
	if (total > 1) {
		range.push(total);
	}

	return range;
}

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Pagination component
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={currentPage}
 *   totalPages={10}
 *   onChange={setCurrentPage}
 * />
 * ```
 */
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
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

		const handlePageClick = (page: number) => {
			onChange(page);
		};

		return (
			<div ref={ref} className={clsx("join", className)} {...props}>
				<button
					className="join-item btn"
					onClick={handlePrevious}
					disabled={currentPage === 1}
					aria-label="Previous page"
				>
					«
				</button>

				{pages.map((page, index) => {
					if (page === "...") {
						return (
							<button key={`ellipsis-${index}`} className="join-item btn btn-disabled">
								...
							</button>
						);
					}

					const pageNumber = page as number;
					return (
						<button
							key={pageNumber}
							className={clsx("join-item btn", currentPage === pageNumber && "btn-active")}
							onClick={() => handlePageClick(pageNumber)}
							aria-label={`Page ${pageNumber}`}
							aria-current={currentPage === pageNumber ? "page" : undefined}
						>
							{pageNumber}
						</button>
					);
				})}

				<button
					className="join-item btn"
					onClick={handleNext}
					disabled={currentPage === totalPages}
					aria-label="Next page"
				>
					»
				</button>
			</div>
		);
	},
);

Pagination.displayName = "Pagination";
