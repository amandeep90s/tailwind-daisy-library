import { Item } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function ItemPage() {
	return (
		<ComponentPage title="Item" description="A list item component for menus and lists.">
			<ShowcaseSection title="Default">
				<div className="w-80 bg-base-200 rounded-lg p-2">
					<Item>Simple Item</Item>
					<Item>Another Item</Item>
					<Item>Third Item</Item>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Title and Description">
				<div className="w-80 bg-base-200 rounded-lg p-2">
					<Item
						title="Settings"
						description="Manage your preferences"
						onClick={() => console.log("Settings clicked")}
					/>
					<Item
						title="Profile"
						description="View and edit your profile"
						onClick={() => console.log("Profile clicked")}
					/>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Icon">
				<div className="w-80 bg-base-200 rounded-lg p-2">
					<Item
						icon={
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
							</svg>
						}
						title="Profile"
					/>
					<Item
						icon={
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
									clipRule="evenodd"
								/>
							</svg>
						}
						title="Settings"
					/>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Right Content">
				<div className="w-80 bg-base-200 rounded-lg p-2">
					<Item title="Messages" rightContent={<span className="badge badge-primary">5</span>} />
					<Item title="Notifications" rightContent={<span className="badge badge-secondary">New</span>} />
				</div>
			</ShowcaseSection>
		</ComponentPage>
	);
}
