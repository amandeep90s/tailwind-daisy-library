import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import type { DataTableColumnDef } from "@shared-ui-library/react";
import { Badge, SortableDataTable } from "@shared-ui-library/react";
import { useMemo, useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

// Sample data types
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  department: string;
  joinDate: string;
}

interface Order {
  id: number;
  orderNumber: string;
  customer: string;
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  items: { name: string; quantity: number; price: number }[];
  shippingAddress: string;
  date: string;
}

// Sample data
const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    department: "Engineering",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Active",
    department: "Marketing",
    joinDate: "2023-03-22",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Viewer",
    status: "Inactive",
    department: "Sales",
    joinDate: "2022-11-08",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Editor",
    status: "Active",
    department: "Design",
    joinDate: "2023-06-01",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Viewer",
    status: "Active",
    department: "Engineering",
    joinDate: "2023-08-14",
  },
];

// Extended users data for pagination demo
const extendedUsers: User[] = [
  ...users,
  {
    id: 6,
    name: "Diana Martinez",
    email: "diana@example.com",
    role: "Admin",
    status: "Active",
    department: "HR",
    joinDate: "2022-05-10",
  },
  {
    id: 7,
    name: "Edward Lee",
    email: "edward@example.com",
    role: "Editor",
    status: "Active",
    department: "Engineering",
    joinDate: "2023-02-28",
  },
  {
    id: 8,
    name: "Fiona Garcia",
    email: "fiona@example.com",
    role: "Viewer",
    status: "Inactive",
    department: "Marketing",
    joinDate: "2022-09-15",
  },
  {
    id: 9,
    name: "George Harris",
    email: "george@example.com",
    role: "Editor",
    status: "Active",
    department: "Sales",
    joinDate: "2023-04-05",
  },
  {
    id: 10,
    name: "Hannah Clark",
    email: "hannah@example.com",
    role: "Admin",
    status: "Active",
    department: "Finance",
    joinDate: "2022-12-20",
  },
  {
    id: 11,
    name: "Ian Thompson",
    email: "ian@example.com",
    role: "Viewer",
    status: "Active",
    department: "Engineering",
    joinDate: "2023-07-11",
  },
  {
    id: 12,
    name: "Julia White",
    email: "julia@example.com",
    role: "Editor",
    status: "Active",
    department: "Design",
    joinDate: "2023-01-30",
  },
  {
    id: 13,
    name: "Kevin Anderson",
    email: "kevin@example.com",
    role: "Viewer",
    status: "Inactive",
    department: "HR",
    joinDate: "2022-08-22",
  },
  {
    id: 14,
    name: "Laura Taylor",
    email: "laura@example.com",
    role: "Admin",
    status: "Active",
    department: "Marketing",
    joinDate: "2023-05-18",
  },
  {
    id: 15,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Editor",
    status: "Active",
    department: "Sales",
    joinDate: "2022-10-05",
  },
];

const orders: Order[] = [
  {
    id: 1,
    orderNumber: "ORD-001",
    customer: "John Doe",
    total: 299.99,
    status: "Delivered",
    items: [
      { name: "Laptop Stand", quantity: 1, price: 79.99 },
      { name: "USB-C Hub", quantity: 2, price: 110.0 },
    ],
    shippingAddress: "123 Main St, New York, NY 10001",
    date: "2024-01-15",
  },
  {
    id: 2,
    orderNumber: "ORD-002",
    customer: "Jane Smith",
    total: 149.99,
    status: "Shipped",
    items: [{ name: "Wireless Mouse", quantity: 1, price: 149.99 }],
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90001",
    date: "2024-01-18",
  },
  {
    id: 3,
    orderNumber: "ORD-003",
    customer: "Bob Johnson",
    total: 599.99,
    status: "Processing",
    items: [
      { name: "Monitor", quantity: 1, price: 399.99 },
      { name: "Monitor Arm", quantity: 1, price: 200.0 },
    ],
    shippingAddress: "789 Pine Rd, Chicago, IL 60601",
    date: "2024-01-20",
  },
  {
    id: 4,
    orderNumber: "ORD-004",
    customer: "Alice Brown",
    total: 89.99,
    status: "Pending",
    items: [
      { name: "Keyboard", quantity: 1, price: 59.99 },
      { name: "Mouse Pad", quantity: 1, price: 30.0 },
    ],
    shippingAddress: "321 Elm St, Houston, TX 77001",
    date: "2024-01-21",
  },
];

// ============================================================================
// LARGE DATASET FOR EXTERNAL FILTERS DEMO
// ============================================================================

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: "Active" | "Inactive" | "On Leave";
  salary: number;
  joinDate: string;
}

const FIRST_NAMES = [
  "James",
  "Mary",
  "Robert",
  "Patricia",
  "John",
  "Jennifer",
  "Michael",
  "Linda",
  "David",
  "Elizabeth",
  "William",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Christopher",
  "Karen",
  "Daniel",
  "Lisa",
  "Matthew",
  "Nancy",
  "Anthony",
  "Betty",
  "Mark",
  "Margaret",
  "Steven",
  "Sandra",
];
const LAST_NAMES = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
];
const DEPARTMENTS = [
  "Engineering",
  "Marketing",
  "Sales",
  "HR",
  "Finance",
  "Design",
  "Operations",
  "Support",
  "Legal",
  "Product",
];
const ROLES = [
  "Manager",
  "Senior Engineer",
  "Engineer",
  "Analyst",
  "Coordinator",
  "Director",
  "Specialist",
  "Lead",
  "Associate",
  "Intern",
];
const EMPLOYEE_STATUSES: Employee["status"][] = [
  "Active",
  "Active",
  "Active",
  "Active",
  "Active",
  "Inactive",
  "Inactive",
  "On Leave",
];

function generateEmployees(count: number): Employee[] {
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const firstName = FIRST_NAMES[i % FIRST_NAMES.length];
    const lastName = LAST_NAMES[Math.floor(i / FIRST_NAMES.length) % LAST_NAMES.length];
    return {
      id,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${id}@company.com`,
      department: DEPARTMENTS[i % DEPARTMENTS.length],
      role: ROLES[i % ROLES.length],
      status: EMPLOYEE_STATUSES[i % EMPLOYEE_STATUSES.length],
      salary: 40000 + ((i * 731) % 80000),
      joinDate: `202${i % 4}-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
    };
  });
}

const largeDataset = generateEmployees(120);

const employeeColumns: DataTableColumnDef<Employee>[] = [
  { key: "id", header: "ID", sortable: true, width: "60px" },
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "department", header: "Department", sortable: true },
  { key: "role", header: "Role", sortable: true },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (emp) => {
      const variantMap: Record<Employee["status"], "success" | "ghost" | "warning"> = {
        Active: "success",
        Inactive: "ghost",
        "On Leave": "warning",
      };
      return (
        <Badge variant={variantMap[emp.status]} size="sm">
          {emp.status}
        </Badge>
      );
    },
  },
  {
    key: "salary",
    header: "Salary",
    sortable: true,
    headerAlign: "right",
    cellAlign: "right",
    render: (emp) => `$${emp.salary.toLocaleString()}`,
  },
];

// Column definitions
const userColumns: DataTableColumnDef<User>[] = [
  {
    key: "name",
    header: "Name",
    sortable: true,
  },
  {
    key: "email",
    header: "Email",
    sortable: true,
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
  },
  {
    key: "department",
    header: "Department",
    sortable: true,
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (user) => (
      <Badge variant={user.status === "Active" ? "success" : "ghost"} size="sm">
        {user.status}
      </Badge>
    ),
  },
];

const orderColumns: DataTableColumnDef<Order>[] = [
  {
    key: "orderNumber",
    header: "Order #",
    sortable: true,
  },
  {
    key: "customer",
    header: "Customer",
    sortable: true,
  },
  {
    key: "date",
    header: "Date",
    sortable: true,
  },
  {
    key: "total",
    header: "Total",
    sortable: true,
    cellAlign: "right",
    headerAlign: "right",
    render: (order) => `$${order.total.toFixed(2)}`,
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (order) => {
      const variantMap: Record<Order["status"], "warning" | "info" | "primary" | "success"> = {
        Pending: "warning",
        Processing: "info",
        Shipped: "primary",
        Delivered: "success",
      };
      return (
        <Badge variant={variantMap[order.status]} size="sm">
          {order.status}
        </Badge>
      );
    },
  },
];

// Expanded row content component
function OrderDetails({ order }: { order: Order }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-sm font-semibold">Shipping Address</h4>
          <p className="text-base-content/70 text-sm">{order.shippingAddress}</p>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-semibold">Order Summary</h4>
          <p className="text-base-content/70 text-sm">
            {order.items.length} item(s) • Total: ${order.total.toFixed(2)}
          </p>
        </div>
      </div>
      <div>
        <h4 className="mb-2 text-sm font-semibold">Items</h4>
        <div className="overflow-x-auto">
          <table className="table-sm table">
            <thead>
              <tr>
                <th>Product</th>
                <th className="text-center">Quantity</th>
                <th className="text-right">Price</th>
                <th className="text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-right">${item.price.toFixed(2)}</td>
                  <td className="text-right">${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function DataTablePage() {
  const [expandedKeys, setExpandedKeys] = useState<(string | number)[]>([]);
  const [paginationPage, setPaginationPage] = useState(1);

  // External filters state
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Filtered employees for the large dataset demo
  const filteredEmployees = useMemo(() => {
    return largeDataset.filter((emp) => {
      const matchesSearch =
        searchQuery === "" ||
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = departmentFilter === "all" || emp.department === departmentFilter;
      const matchesStatus = statusFilter === "all" || emp.status === statusFilter;
      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [searchQuery, departmentFilter, statusFilter]);

  return (
    <ComponentPage
      title="Sortable DataTable"
      description="A feature-rich data table with sorting, expandable rows, and pagination."
    >
      <ShowcaseSection
        title="Basic Sortable Table"
        description="Click on column headers to sort. Click again to reverse order, and a third time to clear sorting."
      >
        <SortableDataTable data={users} columns={userColumns} getRowKey={(user) => user.id} zebra />
      </ShowcaseSection>

      <ShowcaseSection
        title="Table with Pagination"
        description="Enable pagination to display data across multiple pages. Set pageSize to control items per page."
      >
        <SortableDataTable
          data={extendedUsers}
          columns={userColumns}
          getRowKey={(user) => user.id}
          pagination
          pageSize={5}
          zebra
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Controlled Pagination"
        description="Use currentPage and onPageChange for controlled pagination state."
      >
        <div className="space-y-2">
          <p className="text-base-content/70 text-sm">Current page: {paginationPage}</p>
          <SortableDataTable
            data={extendedUsers}
            columns={userColumns}
            getRowKey={(user) => user.id}
            pagination
            pageSize={3}
            currentPage={paginationPage}
            onPageChange={setPaginationPage}
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Simple Pagination"
        description="A minimal pagination variant with only prev/next buttons, a page size selector, and record count display. Perfect for cleaner interfaces."
      >
        <SortableDataTable
          data={extendedUsers}
          columns={userColumns}
          getRowKey={(user) => user.id}
          pagination
          pageSize={5}
          paginationVariant="simple"
          pageSizeOptions={[5, 10, 20]}
          zebra
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Pagination with Different Positions"
        description="Pagination can be placed at the top, bottom, or both positions."
      >
        <div className="space-y-8">
          <div>
            <p className="mb-2 text-sm font-medium">Pagination at Top</p>
            <SortableDataTable
              data={extendedUsers}
              columns={userColumns.slice(0, 4)}
              getRowKey={(user) => user.id}
              pagination
              pageSize={3}
              paginationPosition="top"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Pagination at Both</p>
            <SortableDataTable
              data={extendedUsers}
              columns={userColumns.slice(0, 4)}
              getRowKey={(user) => user.id}
              pagination
              pageSize={3}
              paginationPosition="both"
              zebra
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Pagination with Sorting"
        description="Pagination works seamlessly with sorting. Sorting is applied to all data, then pagination displays the current page."
      >
        <SortableDataTable
          data={extendedUsers}
          columns={userColumns}
          getRowKey={(user) => user.id}
          pagination
          pageSize={5}
          defaultSort={{ column: "name", direction: "asc" }}
          zebra
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Table with Expandable Rows"
        description="Click the expand icon on the right to view additional details for each row."
      >
        <SortableDataTable
          data={orders}
          columns={orderColumns}
          getRowKey={(order) => order.id}
          expandable
          renderExpandedRow={(order) => <OrderDetails order={order} />}
          expandedKeys={expandedKeys}
          onExpandedChange={setExpandedKeys}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Default Expanded Rows"
        description="Table with some rows expanded by default."
      >
        <SortableDataTable
          data={orders}
          columns={orderColumns}
          getRowKey={(order) => order.id}
          expandable
          renderExpandedRow={(order) => <OrderDetails order={order} />}
          defaultExpandedKeys={[1, 3]}
          zebra
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Custom Column Alignment"
        description="Columns can have custom header and cell alignments."
      >
        <SortableDataTable
          data={[
            { id: 1, product: "Laptop", category: "Electronics", price: 999.99, stock: 50 },
            { id: 2, product: "Headphones", category: "Electronics", price: 149.99, stock: 120 },
            { id: 3, product: "Desk Chair", category: "Furniture", price: 299.99, stock: 25 },
            { id: 4, product: "Monitor", category: "Electronics", price: 399.99, stock: 75 },
          ]}
          columns={[
            { key: "product", header: "Product", sortable: true },
            {
              key: "category",
              header: "Category",
              sortable: true,
              headerAlign: "center",
              cellAlign: "center",
            },
            {
              key: "price",
              header: "Price",
              sortable: true,
              headerAlign: "right",
              cellAlign: "right",
              render: (item) => `$${item.price.toFixed(2)}`,
            },
            {
              key: "stock",
              header: "In Stock",
              sortable: true,
              headerAlign: "right",
              cellAlign: "right",
            },
          ]}
          getRowKey={(item) => item.id}
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Different Sizes"
        description="Tables come in different sizes: xs, sm, md (default), and lg."
      >
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-medium">Small (sm)</p>
            <SortableDataTable
              data={users.slice(0, 3)}
              columns={userColumns.slice(0, 3)}
              getRowKey={(user) => user.id}
              size="sm"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Large (lg)</p>
            <SortableDataTable
              data={users.slice(0, 3)}
              columns={userColumns.slice(0, 3)}
              getRowKey={(user) => user.id}
              size="lg"
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Custom Icons with Hero Icons"
        description="Use custom icons from Hero Icons or any other icon library for sort and expand indicators."
      >
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm font-medium">Custom Sort Icons</p>
            <SortableDataTable
              data={users.slice(0, 4)}
              columns={userColumns.slice(0, 4)}
              getRowKey={(user) => user.id}
              sortAscIcon={<ChevronUpIcon className="text-primary h-4 w-4" />}
              sortDescIcon={<ChevronDownIcon className="text-primary h-4 w-4" />}
              sortBothIcon={<ChevronUpDownIcon className="text-base-content/40 h-4 w-4" />}
              zebra
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Custom Expand Icons</p>
            <SortableDataTable
              data={orders.slice(0, 3)}
              columns={orderColumns.slice(0, 4)}
              getRowKey={(order) => order.id}
              expandable
              renderExpandedRow={(order) => <OrderDetails order={order} />}
              expandIcon={(expanded) =>
                expanded ? (
                  <MinusCircleIcon className="text-error h-5 w-5" />
                ) : (
                  <PlusCircleIcon className="text-success h-5 w-5" />
                )
              }
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Empty State"
        description="Table displays an empty message when there's no data."
      >
        <SortableDataTable
          data={[]}
          columns={userColumns}
          getRowKey={(user) => user.id}
          emptyMessage="No users found. Try adjusting your filters."
        />
      </ShowcaseSection>

      <ShowcaseSection
        title="Loading State"
        description="Table can show a loading spinner while data is being fetched."
      >
        <SortableDataTable data={[]} columns={userColumns} getRowKey={(user) => user.id} loading />
      </ShowcaseSection>

      <ShowcaseSection
        title="External Filters with Large Dataset (120 rows)"
        description="DataTable with external search and filter controls applied to 120 employee records. Pagination resets automatically when filtered data changes."
      >
        <div className="space-y-4">
          {/* Filter Controls */}
          <div className="bg-base-200/50 flex flex-wrap items-end gap-4 rounded-lg p-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-sm font-medium">Search</span>
              </label>
              <input
                type="text"
                placeholder="Search name, email, role..."
                className="input input-bordered input-sm w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-sm font-medium">Department</span>
              </label>
              <select
                className="select select-bordered select-sm w-full"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="all">All Departments</option>
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-sm font-medium">Status</span>
              </label>
              <select
                className="select select-bordered select-sm w-full"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={() => {
                setSearchQuery("");
                setDepartmentFilter("all");
                setStatusFilter("all");
              }}
            >
              Clear Filters
            </button>
          </div>

          {/* Results count */}
          <p className="text-base-content/70 text-sm">
            Showing {filteredEmployees.length} of {largeDataset.length} employees
          </p>

          {/* DataTable */}
          <SortableDataTable
            data={filteredEmployees}
            columns={employeeColumns}
            getRowKey={(emp) => emp.id}
            pagination
            pageSize={10}
            paginationVariant="simple"
            pageSizeOptions={[10, 20, 50, 100]}
            zebra
            emptyMessage="No employees match the current filters."
          />
        </div>
      </ShowcaseSection>

      <PropsTable
        props={[
          {
            name: "data",
            type: "T[]",
            description: "Array of data items to display in the table",
          },
          {
            name: "columns",
            type: "DataTableColumnDef<T>[]",
            description:
              "Column definitions including key, header, sortable flag, and render function",
          },
          {
            name: "getRowKey",
            type: "(item: T) => string | number",
            description: "Function to extract unique key from each row item",
          },
          {
            name: "size",
            type: "'xs' | 'sm' | 'md' | 'lg'",
            default: "'md'",
            description: "Table size variant",
          },
          {
            name: "zebra",
            type: "boolean",
            default: "false",
            description: "Enable zebra striping for rows",
          },
          {
            name: "expandable",
            type: "boolean",
            default: "false",
            description: "Enable row expansion feature",
          },
          {
            name: "renderExpandedRow",
            type: "(item: T) => ReactNode",
            description: "Render function for expanded row content",
          },
          {
            name: "defaultExpandedKeys",
            type: "(string | number)[]",
            description: "Initially expanded row keys (uncontrolled)",
          },
          {
            name: "expandedKeys",
            type: "(string | number)[]",
            description: "Controlled expanded row keys",
          },
          {
            name: "onExpandedChange",
            type: "(keys: (string | number)[]) => void",
            description: "Callback when expanded rows change",
          },
          {
            name: "defaultSort",
            type: "DataTableSortState",
            description: "Initial sort state (uncontrolled)",
          },
          {
            name: "sortState",
            type: "DataTableSortState",
            description: "Controlled sort state",
          },
          {
            name: "onSortChange",
            type: "(state: DataTableSortState) => void",
            description: "Callback when sort state changes",
          },
          {
            name: "loading",
            type: "boolean",
            default: "false",
            description: "Show loading spinner",
          },
          {
            name: "emptyMessage",
            type: "ReactNode",
            default: "'No data available'",
            description: "Message to show when data is empty",
          },
          {
            name: "sortAscIcon",
            type: "ReactNode",
            description: "Custom icon for ascending sort (e.g., Hero Icons ChevronUpIcon)",
          },
          {
            name: "sortDescIcon",
            type: "ReactNode",
            description: "Custom icon for descending sort (e.g., Hero Icons ChevronDownIcon)",
          },
          {
            name: "sortBothIcon",
            type: "ReactNode",
            description: "Custom icon for unsorted state (e.g., Hero Icons ChevronUpDownIcon)",
          },
          {
            name: "expandIcon",
            type: "(expanded: boolean) => ReactNode",
            description: "Custom icon function for expand/collapse (receives expanded state)",
          },
          {
            name: "pagination",
            type: "boolean",
            default: "false",
            description: "Enable pagination feature",
          },
          {
            name: "pageSize",
            type: "number",
            default: "10",
            description: "Number of items per page",
          },
          {
            name: "currentPage",
            type: "number",
            description: "Current page number (1-indexed, controlled)",
          },
          {
            name: "onPageChange",
            type: "(page: number) => void",
            description: "Callback when page changes",
          },
          {
            name: "defaultPage",
            type: "number",
            default: "1",
            description: "Initial page (uncontrolled)",
          },
          {
            name: "paginationSiblingCount",
            type: "number",
            default: "1",
            description: "Number of sibling pages to show in pagination",
          },
          {
            name: "paginationClassName",
            type: "string",
            description: "Custom class for pagination wrapper",
          },
          {
            name: "paginationPosition",
            type: "'top' | 'bottom' | 'both'",
            default: "'bottom'",
            description: "Position of the pagination controls",
          },
          {
            name: "paginationVariant",
            type: "'numbered' | 'simple'",
            default: "'numbered'",
            description:
              "Pagination variant - numbered shows page numbers, simple shows only prev/next buttons with record count",
          },
          {
            name: "pageSizeOptions",
            type: "number[]",
            default: "[10, 20, 30, 50]",
            description: "Available page size options for the simple pagination variant dropdown",
          },
          {
            name: "onPageSizeChange",
            type: "(pageSize: number) => void",
            description: "Callback when page size changes (for controlled page size)",
          },
        ]}
      />
    </ComponentPage>
  );
}
