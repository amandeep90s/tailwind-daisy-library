import { Menubar, MenubarItem } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function MenubarPage() {
	return (
		<ComponentPage title="Menubar" description="A horizontal menu bar for navigation.">
			<ShowcaseSection title="Default">
				<Menubar>
					<MenubarItem href="#" active>
						Home
					</MenubarItem>
					<MenubarItem href="#">About</MenubarItem>
					<MenubarItem href="#">Services</MenubarItem>
					<MenubarItem href="#">Contact</MenubarItem>
				</Menubar>
			</ShowcaseSection>

			<ShowcaseSection title="Sizes">
				<div className="space-y-4">
					<Menubar size="xs">
						<MenubarItem>XS Home</MenubarItem>
						<MenubarItem>XS About</MenubarItem>
					</Menubar>
					<Menubar size="sm">
						<MenubarItem>SM Home</MenubarItem>
						<MenubarItem>SM About</MenubarItem>
					</Menubar>
					<Menubar size="md">
						<MenubarItem>MD Home</MenubarItem>
						<MenubarItem>MD About</MenubarItem>
					</Menubar>
					<Menubar size="lg">
						<MenubarItem>LG Home</MenubarItem>
						<MenubarItem>LG About</MenubarItem>
					</Menubar>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Vertical">
				<Menubar orientation="vertical" className="w-48">
					<MenubarItem active>Dashboard</MenubarItem>
					<MenubarItem>Settings</MenubarItem>
					<MenubarItem>Profile</MenubarItem>
					<MenubarItem disabled>Disabled</MenubarItem>
				</Menubar>
			</ShowcaseSection>
		</ComponentPage>
	);
}
