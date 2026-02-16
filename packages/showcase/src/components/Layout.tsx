import { NavLink, Outlet } from "react-router-dom";

const components = [
  { name: "Accordion", path: "/accordion" },
  { name: "Alert", path: "/alert" },
  { name: "Alert Dialog", path: "/alert-dialog" },
  { name: "Amount Field", path: "/amount-field" },
  { name: "Avatar", path: "/avatar" },
  { name: "Badge", path: "/badge" },
  { name: "Breadcrumb", path: "/breadcrumb" },
  { name: "Button", path: "/button" },
  { name: "Button Group", path: "/button-group" },
  { name: "Calendar", path: "/calendar" },
  { name: "Card", path: "/card" },
  { name: "Checkbox", path: "/checkbox" },
  { name: "Collapsible", path: "/collapsible" },
  { name: "Combobox", path: "/combobox" },
  { name: "Command", path: "/command" },
  { name: "Context Menu", path: "/context-menu" },
  { name: "Data Table", path: "/data-table" },
  { name: "Date Input", path: "/date-input" },
  { name: "Date Picker", path: "/date-picker" },
  { name: "Datetime Input", path: "/datetime-input" },
  { name: "Dialog", path: "/dialog" },
  { name: "Drawer", path: "/drawer" },
  { name: "Dropdown Menu", path: "/dropdown-menu" },
  { name: "Dynamic Form", path: "/dynamic-form" },
  { name: "Empty", path: "/empty" },
  { name: "Field", path: "/field" },
  { name: "Form", path: "/form" },
  { name: "Full Page Loader", path: "/full-page-loader" },
  { name: "Hover Card", path: "/hover-card" },
  { name: "Input", path: "/input" },
  { name: "Input Group", path: "/input-group" },
  { name: "Input OTP", path: "/input-otp" },
  { name: "Item", path: "/item" },
  { name: "Kbd", path: "/kbd" },
  { name: "Label", path: "/label" },
  { name: "Menubar", path: "/menubar" },
  { name: "Navbar", path: "/navbar" },
  { name: "Native Select", path: "/native-select" },
  { name: "Navigation Menu", path: "/navigation-menu" },
  { name: "Pagination", path: "/pagination" },
  { name: "Popover", path: "/popover" },
  { name: "Progress", path: "/progress" },
  { name: "Radio Group", path: "/radio-group" },
  { name: "Select", path: "/select" },
  { name: "Separator", path: "/separator" },
  { name: "Sheet", path: "/sheet" },
  { name: "Sidebar", path: "/sidebar" },
  { name: "Skeleton", path: "/skeleton" },
  { name: "Slider", path: "/slider" },
  { name: "Spinner", path: "/spinner" },
  { name: "Switch", path: "/switch" },
  { name: "Table", path: "/table" },
  { name: "Tabs", path: "/tabs" },
  { name: "Textarea", path: "/textarea" },
  { name: "Toast", path: "/toast" },
  { name: "Toggle", path: "/toggle" },
  { name: "Tooltip", path: "/tooltip" },
  { name: "Typography", path: "/typography" },
];

export function Layout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-200 lg:hidden">
          <div className="flex-none">
            <label htmlFor="sidebar" className="btn btn-square btn-ghost drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <NavLink to="/" className="btn btn-ghost text-xl">
              Shared UI Library
            </NavLink>
          </div>
        </div>
        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="sidebar" className="drawer-overlay"></label>
        <aside className="bg-base-200 min-h-screen w-64">
          <div className="bg-base-200 sticky top-0 z-10 p-4">
            <NavLink to="/" className="btn btn-ghost w-full text-xl">
              🎨 Shared UI Library
            </NavLink>
            <div className="mt-2 flex gap-2">
              <button
                className="btn btn-xs"
                onClick={() =>
                  document.documentElement.setAttribute("data-theme", "shared-ui-theme")
                }
              >
                Light
              </button>
              <button
                className="btn btn-xs"
                onClick={() =>
                  document.documentElement.setAttribute("data-theme", "shared-ui-dark")
                }
              >
                Dark
              </button>
            </div>
          </div>
          <ul className="menu p-4 pt-0">
            <li className="menu-title">Components</li>
            {components.map((component) => (
              <li key={component.path}>
                <NavLink
                  to={component.path}
                  className={({ isActive }) =>
                    isActive ? "active bg-primary text-primary-content" : ""
                  }
                >
                  {component.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
