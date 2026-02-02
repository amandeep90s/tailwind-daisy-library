import { ContextMenu } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function ContextMenuPage() {
	const menuItems = [
		{ label: "Cut", onClick: () => console.log("Cut") },
		{ label: "Copy", onClick: () => console.log("Copy") },
		{ label: "Paste", onClick: () => console.log("Paste") },
		{ label: "Delete", onClick: () => console.log("Delete"), separator: true },
	];

	return (
		<ComponentPage title="Context Menu" description="Displays a menu to the user triggered by right-click.">
			<ShowcaseSection title="Right Click Here">
				<ContextMenu
					items={menuItems}
					trigger={
						<div className="w-80 h-40 border-2 border-dashed border-base-300 rounded-lg flex items-center justify-center bg-base-200">
							<span className="text-base-content/60">Right click here</span>
						</div>
					}
				/>
			</ShowcaseSection>
		</ComponentPage>
	);
}
