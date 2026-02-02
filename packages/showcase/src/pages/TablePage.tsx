import { Badge, DataTable, Table } from "@shared-ui-library/react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

const users = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Viewer", status: "Active" },
];

const products = [
	{ id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 50 },
	{ id: 2, name: "Headphones", category: "Electronics", price: 149.99, stock: 100 },
	{ id: 3, name: "Desk Chair", category: "Furniture", price: 299.99, stock: 25 },
	{ id: 4, name: "Monitor", category: "Electronics", price: 399.99, stock: 75 },
	{ id: 5, name: "Keyboard", category: "Electronics", price: 79.99, stock: 150 },
];

export function TablePage() {
	return (
		<ComponentPage title="Table" description="A responsive table component for displaying tabular data.">
			<ShowcaseSection title="Basic Table" description="Simple table with header and body.">
				<div className="w-full overflow-x-auto">
					<Table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.role}</td>
									<td>
										<Badge variant={user.status === "Active" ? "success" : "ghost"} size="sm">
											{user.status}
										</Badge>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Zebra Stripes" description="Alternating row colors for better readability.">
				<div className="w-full overflow-x-auto">
					<Table zebra>
						<thead>
							<tr>
								<th>#</th>
								<th>Product</th>
								<th>Category</th>
								<th>Price</th>
								<th>Stock</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<tr key={product.id}>
									<td>{product.id}</td>
									<td>{product.name}</td>
									<td>{product.category}</td>
									<td>${product.price.toFixed(2)}</td>
									<td>{product.stock}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Table Sizes" description="Tables come in different sizes.">
				<div className="w-full overflow-x-auto space-y-4">
					<div>
						<p className="text-sm font-medium mb-2">Extra Small (xs)</p>
						<Table size="xs">
							<thead>
								<tr>
									<th>Name</th>
									<th>Role</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>John</td>
									<td>Admin</td>
								</tr>
								<tr>
									<td>Jane</td>
									<td>Editor</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<div>
						<p className="text-sm font-medium mb-2">Large (lg)</p>
						<Table size="lg">
							<thead>
								<tr>
									<th>Name</th>
									<th>Role</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>John</td>
									<td>Admin</td>
								</tr>
								<tr>
									<td>Jane</td>
									<td>Editor</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Pinned Rows" description="Pin header rows when scrolling.">
				<div className="h-48 overflow-auto w-full">
					<Table pinRows zebra>
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{[...users, ...users, ...users].map((user, index) => (
								<tr key={index}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.role}</td>
									<td>{user.status}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
				<p className="text-sm text-base-content/70 mt-2">Scroll to see pinned header</p>
			</ShowcaseSection>

			<ShowcaseSection title="With Actions" description="Table rows with action buttons.">
				<div className="w-full overflow-x-auto">
					<Table>
						<thead>
							<tr>
								<th>
									<input type="checkbox" className="checkbox checkbox-sm" />
								</th>
								<th>Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{users.slice(0, 3).map((user) => (
								<tr key={user.id}>
									<td>
										<input type="checkbox" className="checkbox checkbox-sm" />
									</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.role}</td>
									<td>
										<div className="flex gap-2">
											<button className="btn btn-xs btn-ghost">Edit</button>
											<button className="btn btn-xs btn-ghost text-error">Delete</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Avatar" description="Table with user avatars and rich content.">
				<div className="w-full overflow-x-auto">
					<Table>
						<thead>
							<tr>
								<th>User</th>
								<th>Role</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{users.slice(0, 3).map((user) => (
								<tr key={user.id}>
									<td>
										<div className="flex items-center gap-3">
											<div className="avatar placeholder">
												<div className="bg-neutral text-neutral-content rounded-full w-10">
													<span className="text-sm">
														{user.name
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</span>
												</div>
											</div>
											<div>
												<p className="font-medium">{user.name}</p>
												<p className="text-sm text-base-content/70">{user.email}</p>
											</div>
										</div>
									</td>
									<td>
										<Badge variant="ghost" size="sm">
											{user.role}
										</Badge>
									</td>
									<td>
										<Badge variant={user.status === "Active" ? "success" : "ghost"} size="sm">
											{user.status}
										</Badge>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Caption and Footer" description="Table with caption and footer totals.">
				<div className="w-full overflow-x-auto">
					<Table>
						<caption className="caption-top text-sm text-base-content/70 mb-2">
							Monthly sales report for Q4 2024
						</caption>
						<thead>
							<tr>
								<th>Month</th>
								<th>Sales</th>
								<th>Revenue</th>
								<th>Growth</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>October</td>
								<td>1,234</td>
								<td>$45,000</td>
								<td className="text-success">+12%</td>
							</tr>
							<tr>
								<td>November</td>
								<td>1,456</td>
								<td>$52,000</td>
								<td className="text-success">+15%</td>
							</tr>
							<tr>
								<td>December</td>
								<td>1,789</td>
								<td>$68,000</td>
								<td className="text-success">+31%</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td className="font-bold">Total</td>
								<td className="font-bold">4,479</td>
								<td className="font-bold">$165,000</td>
								<td className="font-bold text-success">+19%</td>
							</tr>
						</tfoot>
					</Table>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="DataTable Component" description="Simplified data table with column definitions.">
				<div className="w-full overflow-x-auto">
					<DataTable
						data={users}
						columns={[
							{ key: "id", header: "ID" },
							{ key: "name", header: "Name" },
							{ key: "email", header: "Email" },
							{ key: "role", header: "Role" },
							{
								key: "status",
								header: "Status",
								render: (item) => (
									<Badge variant={item.status === "Active" ? "success" : "ghost"} size="sm">
										{item.status}
									</Badge>
								),
							},
						]}
						getRowKey={(row) => row.id}
						zebra
					/>
				</div>
			</ShowcaseSection>

			<CodeSection>
				<CodeBlock
					code={`import { Table, DataTable, Badge } from '@shared-ui-library/react';

// Basic table
<Table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</Table>

// With zebra stripes and pinned rows
<Table zebra pinRows>...</Table>

// Different sizes
<Table size="xs">...</Table>
<Table size="lg">...</Table>

// DataTable component
<DataTable
  data={users}
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    {
      key: 'status',
      header: 'Status',
      render: (item) => <Badge>{item.status}</Badge>,
    },
  ]}
  getRowKey={(row) => row.id}
  zebra
/>`}
				/>
			</CodeSection>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Props</h2>
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold mb-2">Table Props</h3>
						<PropsTable
							props={[
								{
									name: "size",
									type: '"xs" | "sm" | "md" | "lg"',
									default: '"md"',
									description: "Size of the table",
								},
								{
									name: "zebra",
									type: "boolean",
									default: "false",
									description: "Enable zebra stripe rows",
								},
								{
									name: "pinRows",
									type: "boolean",
									default: "false",
									description: "Pin header rows when scrolling",
								},
								{
									name: "pinCols",
									type: "boolean",
									default: "false",
									description: "Pin first column when scrolling horizontally",
								},
							]}
						/>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2">DataTable Props</h3>
						<PropsTable
							props={[
								{
									name: "data",
									type: "T[]",
									description: "Array of data items to display",
								},
								{
									name: "columns",
									type: "DataTableColumn<T>[]",
									description: "Column definitions",
								},
								{
									name: "getRowKey",
									type: "(item: T) => string | number",
									description: "Function to get unique key for each row",
								},
							]}
						/>
					</div>
				</div>
			</section>
		</ComponentPage>
	);
}
