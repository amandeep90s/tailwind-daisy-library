import { Typography } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function TypographyPage() {
	return (
		<ComponentPage title="Typography" description="Typography components for consistent text styling.">
			<ShowcaseSection title="Headings">
				<div className="w-full space-y-4">
					<Typography variant="h1">Heading 1</Typography>
					<Typography variant="h2">Heading 2</Typography>
					<Typography variant="h3">Heading 3</Typography>
					<Typography variant="h4">Heading 4</Typography>
					<Typography variant="h5">Heading 5</Typography>
					<Typography variant="h6">Heading 6</Typography>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Text Variants">
				<div className="w-full space-y-4">
					<Typography variant="p">
						This is a paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Typography>
					<Typography variant="lead">This is lead text, typically used for introductions.</Typography>
					<Typography variant="large">This is large text</Typography>
					<Typography variant="small">This is small text</Typography>
					<Typography variant="muted">This is muted text</Typography>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Blockquote">
				<div className="w-full">
					<Typography variant="blockquote">
						"The only way to do great work is to love what you do." — Steve Jobs
					</Typography>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Code">
				<Typography variant="code">const greeting = "Hello, World!";</Typography>
			</ShowcaseSection>

			<ShowcaseSection title="Custom Element">
				<Typography variant="p" as="span">
					This paragraph is rendered as a span element.
				</Typography>
			</ShowcaseSection>
		</ComponentPage>
	);
}
