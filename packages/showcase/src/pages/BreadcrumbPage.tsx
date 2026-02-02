import { Breadcrumb, BreadcrumbItem } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function BreadcrumbPage() {
	return (
		<ComponentPage title="Breadcrumb" description="Displays the path to the current resource.">
			<ShowcaseSection title="Default">
				<Breadcrumb>
					<BreadcrumbItem href="/">Home</BreadcrumbItem>
					<BreadcrumbItem href="/docs">Documents</BreadcrumbItem>
					<BreadcrumbItem>Current Page</BreadcrumbItem>
				</Breadcrumb>
			</ShowcaseSection>

			<ShowcaseSection title="With Icons">
				<Breadcrumb>
					<BreadcrumbItem href="/">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							/>
						</svg>
						Home
					</BreadcrumbItem>
					<BreadcrumbItem href="/docs">Documents</BreadcrumbItem>
					<BreadcrumbItem>Add Document</BreadcrumbItem>
				</Breadcrumb>
			</ShowcaseSection>

			<ShowcaseSection title="Long Path">
				<Breadcrumb>
					<BreadcrumbItem href="/">Home</BreadcrumbItem>
					<BreadcrumbItem href="/category">Category</BreadcrumbItem>
					<BreadcrumbItem href="/category/sub">Subcategory</BreadcrumbItem>
					<BreadcrumbItem href="/category/sub/product">Product</BreadcrumbItem>
					<BreadcrumbItem>Details</BreadcrumbItem>
				</Breadcrumb>
			</ShowcaseSection>
		</ComponentPage>
	);
}
