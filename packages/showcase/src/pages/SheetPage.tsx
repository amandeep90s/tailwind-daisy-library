import { Button, Sheet } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function SheetPage() {
	const [leftOpen, setLeftOpen] = useState(false);
	const [rightOpen, setRightOpen] = useState(false);
	const [topOpen, setTopOpen] = useState(false);
	const [bottomOpen, setBottomOpen] = useState(false);

	return (
		<ComponentPage title="Sheet" description="A panel that slides in from the edge of the screen.">
			<ShowcaseSection title="Positions">
				<Button onClick={() => setLeftOpen(true)}>Left</Button>
				<Button onClick={() => setRightOpen(true)}>Right</Button>
				<Button onClick={() => setTopOpen(true)}>Top</Button>
				<Button onClick={() => setBottomOpen(true)}>Bottom</Button>

				<Sheet open={leftOpen} onClose={() => setLeftOpen(false)} position="left" title="Left Sheet">
					<p>This sheet slides in from the left.</p>
					<Button className="mt-4" onClick={() => setLeftOpen(false)}>
						Close
					</Button>
				</Sheet>

				<Sheet open={rightOpen} onClose={() => setRightOpen(false)} position="right" title="Right Sheet">
					<p>This sheet slides in from the right.</p>
					<Button className="mt-4" onClick={() => setRightOpen(false)}>
						Close
					</Button>
				</Sheet>

				<Sheet open={topOpen} onClose={() => setTopOpen(false)} position="top" title="Top Sheet">
					<p>This sheet slides in from the top.</p>
					<Button className="mt-4" onClick={() => setTopOpen(false)}>
						Close
					</Button>
				</Sheet>

				<Sheet open={bottomOpen} onClose={() => setBottomOpen(false)} position="bottom" title="Bottom Sheet">
					<p>This sheet slides in from the bottom.</p>
					<Button className="mt-4" onClick={() => setBottomOpen(false)}>
						Close
					</Button>
				</Sheet>
			</ShowcaseSection>
		</ComponentPage>
	);
}
