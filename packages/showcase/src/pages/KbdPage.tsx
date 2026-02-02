import { Kbd } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function KbdPage() {
	return (
		<ComponentPage title="Kbd" description="Displays a keyboard key or shortcut.">
			<ShowcaseSection title="Single Keys">
				<Kbd>A</Kbd>
				<Kbd>B</Kbd>
				<Kbd>Enter</Kbd>
				<Kbd>Tab</Kbd>
				<Kbd>Shift</Kbd>
			</ShowcaseSection>

			<ShowcaseSection title="Sizes">
				<Kbd size="xs">Ctrl</Kbd>
				<Kbd size="sm">Ctrl</Kbd>
				<Kbd size="md">Ctrl</Kbd>
				<Kbd size="lg">Ctrl</Kbd>
			</ShowcaseSection>

			<ShowcaseSection title="Keyboard Shortcuts">
				<div className="flex items-center gap-1">
					<Kbd>Ctrl</Kbd>
					<span>+</span>
					<Kbd>C</Kbd>
					<span className="ml-4 text-base-content/60">Copy</span>
				</div>
				<div className="flex items-center gap-1">
					<Kbd>Ctrl</Kbd>
					<span>+</span>
					<Kbd>V</Kbd>
					<span className="ml-4 text-base-content/60">Paste</span>
				</div>
				<div className="flex items-center gap-1">
					<Kbd>Ctrl</Kbd>
					<span>+</span>
					<Kbd>Shift</Kbd>
					<span>+</span>
					<Kbd>P</Kbd>
					<span className="ml-4 text-base-content/60">Command Palette</span>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="In Context">
				<p>
					Press <Kbd>Esc</Kbd> to close the dialog
				</p>
				<p>
					Use <Kbd>↑</Kbd> and <Kbd>↓</Kbd> to navigate
				</p>
			</ShowcaseSection>
		</ComponentPage>
	);
}
