import { NavigationMenu, NavigationMenuItem } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function NavigationMenuPage() {
	return (
		<ComponentPage title="Navigation Menu" description="A navigation menu component.">
			<ShowcaseSection title="Default">
				<NavigationMenu>
					<NavigationMenuItem href="#" active>
						Home
					</NavigationMenuItem>
					<NavigationMenuItem href="#">About</NavigationMenuItem>
					<NavigationMenuItem href="#">Services</NavigationMenuItem>
					<NavigationMenuItem href="#">Contact</NavigationMenuItem>
				</NavigationMenu>
			</ShowcaseSection>

			<ShowcaseSection title="With Active State">
				<NavigationMenu>
					<NavigationMenuItem href="#">Dashboard</NavigationMenuItem>
					<NavigationMenuItem href="#" active>
						Projects
					</NavigationMenuItem>
					<NavigationMenuItem href="#">Team</NavigationMenuItem>
					<NavigationMenuItem href="#">Settings</NavigationMenuItem>
				</NavigationMenu>
			</ShowcaseSection>
		</ComponentPage>
	);
}
