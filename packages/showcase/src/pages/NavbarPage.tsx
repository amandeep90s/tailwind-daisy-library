import {
	ArrowRightOnRectangleIcon,
	Bars3Icon,
	BellIcon,
	Cog6ToothIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import type { NavbarColor } from "@shared-ui-library/react";
import { Avatar, Badge, Button, Input, Navbar, NavbarCenter, NavbarEnd, NavbarStart } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

const colors: NavbarColor[] = ["default", "neutral", "primary", "secondary", "accent"];

export function NavbarPage() {
	return (
		<ComponentPage
			title="Navbar"
			description="A navigation bar component for the top of the page with start, center, and end sections."
		>
			<ShowcaseSection title="Basic Navbar" description="Simple navbar with title only.">
				<Navbar className="rounded-box">
					<NavbarStart>
						<a className="btn btn-ghost text-xl">daisyUI</a>
					</NavbarStart>
				</Navbar>
			</ShowcaseSection>

			<ShowcaseSection title="Navbar with Title and Icon" description="Navbar with a hamburger menu icon and title.">
				<Navbar className="rounded-box">
					<NavbarStart>
						<button className="btn btn-ghost btn-square">
							<Bars3Icon className="w-6 h-6" />
						</button>
					</NavbarStart>
					<NavbarCenter>
						<a className="btn btn-ghost text-xl">daisyUI</a>
					</NavbarCenter>
					<NavbarEnd>
						<button className="btn btn-ghost btn-square">
							<MagnifyingGlassIcon className="w-6 h-6" />
						</button>
					</NavbarEnd>
				</Navbar>
			</ShowcaseSection>

			<ShowcaseSection title="Navbar with Menu Items" description="Navbar with navigation links.">
				<Navbar className="rounded-box">
					<NavbarStart>
						<a className="btn btn-ghost text-xl">Brand</a>
					</NavbarStart>
					<NavbarCenter className="hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>Services</a>
							</li>
							<li>
								<a>Contact</a>
							</li>
						</ul>
					</NavbarCenter>
					<NavbarEnd>
						<Button variant="primary">Get Started</Button>
					</NavbarEnd>
				</Navbar>
			</ShowcaseSection>

			<ShowcaseSection title="Navbar with Dropdown Menu" description="Navbar with dropdown submenu.">
				<Navbar className="rounded-box">
					<NavbarStart>
						<div className="dropdown">
							<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
								<Bars3Icon className="w-6 h-6" />
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
							>
								<li>
									<a>Home</a>
								</li>
								<li>
									<a>About</a>
								</li>
								<li>
									<details>
										<summary>Services</summary>
										<ul className="p-2">
											<li>
												<a>Web Development</a>
											</li>
											<li>
												<a>Mobile Apps</a>
											</li>
										</ul>
									</details>
								</li>
								<li>
									<a>Contact</a>
								</li>
							</ul>
						</div>
						<a className="btn btn-ghost text-xl">daisyUI</a>
					</NavbarStart>
					<NavbarCenter className="hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>About</a>
							</li>
							<li>
								<details>
									<summary>Services</summary>
									<ul className="p-2 bg-base-100 rounded-box shadow z-10">
										<li>
											<a>Web Development</a>
										</li>
										<li>
											<a>Mobile Apps</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<a>Contact</a>
							</li>
						</ul>
					</NavbarCenter>
					<NavbarEnd>
						<Button>Login</Button>
					</NavbarEnd>
				</Navbar>
			</ShowcaseSection>

			<ShowcaseSection title="Navbar with Search Input" description="Navbar with search functionality.">
				<Navbar className="rounded-box">
					<NavbarStart>
						<a className="btn btn-ghost text-xl">App</a>
					</NavbarStart>
					<NavbarCenter>
						<Input
							startIcon={<MagnifyingGlassIcon className="w-5 h-5" />}
							placeholder="Search..."
							className="w-64"
							size="sm"
						/>
					</NavbarCenter>
					<NavbarEnd>
						<button className="btn btn-ghost btn-circle">
							<BellIcon className="w-6 h-6" />
						</button>
						<div className="dropdown dropdown-end">
							<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img
										alt="User avatar"
										src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
									/>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
							>
								<li>
									<a className="justify-between">
										Profile
										<Badge size="sm" variant="primary">
											New
										</Badge>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</div>
					</NavbarEnd>
				</Navbar>
			</ShowcaseSection>

			<ShowcaseSection
				title="Navbar with Indicator Badge"
				description="Navbar with cart icon and notification indicator."
			>
				<Navbar className="rounded-box">
					<NavbarStart>
						<a className="btn btn-ghost text-xl">Store</a>
					</NavbarStart>
					<NavbarCenter className="hidden md:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a>Products</a>
							</li>
							<li>
								<a>Categories</a>
							</li>
							<li>
								<a>Deals</a>
							</li>
						</ul>
					</NavbarCenter>
					<NavbarEnd className="gap-2">
						<button className="btn btn-ghost btn-circle">
							<MagnifyingGlassIcon className="w-6 h-6" />
						</button>
						<div className="dropdown dropdown-end">
							<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
								<div className="indicator">
									<ShoppingCartIcon className="w-6 h-6" />
									<span className="badge badge-sm badge-primary indicator-item">8</span>
								</div>
							</div>
							<div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
								<div className="card-body">
									<span className="text-lg font-bold">8 Items</span>
									<span className="text-info">Subtotal: $999</span>
									<div className="card-actions">
										<Button variant="primary" className="btn-block">
											View cart
										</Button>
									</div>
								</div>
							</div>
						</div>
						<div className="dropdown dropdown-end">
							<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
								<Avatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" />
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
							>
								<li>
									<a>
										<UserCircleIcon className="w-4 h-4" />
										Profile
									</a>
								</li>
								<li>
									<a>
										<Cog6ToothIcon className="w-4 h-4" />
										Settings
									</a>
								</li>
								<li>
									<a>
										<ArrowRightOnRectangleIcon className="w-4 h-4" />
										Logout
									</a>
								</li>
							</ul>
						</div>
					</NavbarEnd>
				</Navbar>
			</ShowcaseSection>

			<ShowcaseSection title="Navbar Colors" description="Navbar with different background colors.">
				<div className="space-y-4">
					{colors.map((color) => (
						<Navbar key={color} color={color} className="rounded-box">
							<NavbarStart>
								<a className="btn btn-ghost text-xl">{color.charAt(0).toUpperCase() + color.slice(1)}</a>
							</NavbarStart>
							<NavbarEnd>
								<Button variant={color === "default" ? "primary" : "ghost"}>Action</Button>
							</NavbarEnd>
						</Navbar>
					))}
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Navbar with Shadow and Border" description="Navbar with shadow and border styling.">
				<div className="space-y-4">
					<Navbar shadow className="rounded-box">
						<NavbarStart>
							<a className="btn btn-ghost text-xl">With Shadow</a>
						</NavbarStart>
					</Navbar>
					<Navbar bordered className="rounded-box">
						<NavbarStart>
							<a className="btn btn-ghost text-xl">With Border</a>
						</NavbarStart>
					</Navbar>
					<Navbar shadow bordered className="rounded-box">
						<NavbarStart>
							<a className="btn btn-ghost text-xl">Shadow + Border</a>
						</NavbarStart>
					</Navbar>
				</div>
			</ShowcaseSection>

			<ShowcaseSection
				title="Glass Effect Navbar"
				description="Navbar with glass morphism effect (works best on colored backgrounds)."
			>
				<div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-box">
					<Navbar glass className="rounded-box">
						<NavbarStart>
							<a className="btn btn-ghost text-xl">Glass</a>
						</NavbarStart>
						<NavbarCenter className="hidden md:flex">
							<ul className="menu menu-horizontal px-1">
								<li>
									<a>Home</a>
								</li>
								<li>
									<a>About</a>
								</li>
								<li>
									<a>Contact</a>
								</li>
							</ul>
						</NavbarCenter>
						<NavbarEnd>
							<Button>Login</Button>
						</NavbarEnd>
					</Navbar>
				</div>
			</ShowcaseSection>

			<PropsTable
				props={[
					{
						name: "color",
						type: '"default" | "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"',
						default: '"default"',
						description: "Background color variant",
					},
					{
						name: "shadow",
						type: "boolean",
						default: "false",
						description: "Add shadow to navbar",
					},
					{
						name: "bordered",
						type: "boolean",
						default: "false",
						description: "Add bottom border to navbar",
					},
					{
						name: "sticky",
						type: "boolean",
						default: "false",
						description: "Make navbar sticky to top of page",
					},
					{
						name: "glass",
						type: "boolean",
						default: "false",
						description: "Apply glass morphism effect",
					},
				]}
			/>
		</ComponentPage>
	);
}
