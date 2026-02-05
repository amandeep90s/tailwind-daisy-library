import clsx from "clsx";
import React, { forwardRef } from "react";

// ============================================================================
// TYPES
// ============================================================================

export type TableSize = "xs" | "sm" | "md" | "lg";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /** Table size */
  size?: TableSize;
  /** Zebra stripes */
  zebra?: boolean;
  /** Pin rows */
  pinRows?: boolean;
  /** Pin columns */
  pinCols?: boolean;
}

export interface DataTableColumn<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

export interface DataTableProps<T> extends Omit<TableProps, "children"> {
  /** Table data */
  data: T[];
  /** Table columns */
  columns: DataTableColumn<T>[];
  /** Row key extractor */
  getRowKey: (item: T) => string | number;
}

// ============================================================================
// COMPONENT
// ============================================================================

const sizeClasses: Record<TableSize, string> = {
  xs: "table-xs",
  sm: "table-sm",
  md: "table-md",
  lg: "table-lg",
};

/**
 * Table component with DaisyUI styling
 *
 * @example
 * ```tsx
 * <Table zebra>
 *   <thead>
 *     <tr>
 *       <th>Name</th>
 *       <th>Email</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td>John</td>
 *       <td>john@example.com</td>
 *     </tr>
 *   </tbody>
 * </Table>
 * ```
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ size = "md", zebra, pinRows, pinCols, children, className, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={clsx(
          "table",
          sizeClasses[size],
          zebra && "table-zebra",
          pinRows && "table-pin-rows",
          pinCols && "table-pin-cols",
          className
        )}
        {...props}
      >
        {children}
      </table>
    );
  }
);

Table.displayName = "Table";

/**
 * DataTable component with built-in data rendering
 *
 * @example
 * ```tsx
 * <DataTable
 *   data={users}
 *   columns={[
 *     { key: 'name', header: 'Name' },
 *     { key: 'email', header: 'Email' },
 *   ]}
 *   getRowKey={(user) => user.id}
 * />
 * ```
 */
export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  getRowKey,
  ...tableProps
}: DataTableProps<T>) {
  return (
    <Table {...tableProps}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={getRowKey(item)}>
            {columns.map((column) => (
              <td key={column.key}>{column.render ? column.render(item) : item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
