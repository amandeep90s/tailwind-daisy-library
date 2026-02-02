import { Textarea } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function TextareaPage() {
	return (
		<ComponentPage title="Textarea" description="A multi-line text input control.">
			<ShowcaseSection title="Default">
				<div className="w-full max-w-md">
					<Textarea placeholder="Type your message here..." />
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Variants">
				<Textarea placeholder="Bordered" variant="bordered" className="w-64" />
				<Textarea placeholder="Ghost" variant="ghost" className="w-64" />
			</ShowcaseSection>

			<ShowcaseSection title="Colors">
				<Textarea placeholder="Primary" color="primary" className="w-48" />
				<Textarea placeholder="Secondary" color="secondary" className="w-48" />
				<Textarea placeholder="Accent" color="accent" className="w-48" />
				<Textarea placeholder="Success" color="success" className="w-48" />
				<Textarea placeholder="Error" color="error" className="w-48" />
			</ShowcaseSection>

			<ShowcaseSection title="Sizes">
				<Textarea placeholder="XS" size="xs" className="w-48" />
				<Textarea placeholder="SM" size="sm" className="w-48" />
				<Textarea placeholder="MD" size="md" className="w-48" />
				<Textarea placeholder="LG" size="lg" className="w-48" />
			</ShowcaseSection>

			<ShowcaseSection title="With Rows">
				<div className="w-full max-w-md">
					<Textarea placeholder="10 rows" rows={10} />
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Disabled">
				<Textarea placeholder="Disabled textarea" disabled className="w-64" />
			</ShowcaseSection>
		</ComponentPage>
	);
}
