import { Command, CommandGroup, CommandItem } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function CommandPage() {
	return (
		<ComponentPage title="Command" description="Fast, composable, unstyled command menu.">
			<ShowcaseSection title="Default">
				<div className="w-96">
					<Command placeholder="Type a command or search...">
						<CommandGroup heading="Suggestions">
							<CommandItem onSelect={() => console.log("Calendar")}>Calendar</CommandItem>
							<CommandItem onSelect={() => console.log("Search")}>Search</CommandItem>
							<CommandItem onSelect={() => console.log("Settings")}>Settings</CommandItem>
						</CommandGroup>
						<CommandGroup heading="Actions">
							<CommandItem onSelect={() => console.log("New File")}>New File</CommandItem>
							<CommandItem onSelect={() => console.log("New Folder")}>New Folder</CommandItem>
						</CommandGroup>
					</Command>
				</div>
			</ShowcaseSection>
		</ComponentPage>
	);
}
