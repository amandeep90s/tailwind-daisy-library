import { Alert, AlertTitle, AlertDescription } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection, CodeSection } from "../components/ComponentPage";
import { CodeBlock } from "../components/CodeBlock";
import { PropsTable } from "../components/PropsTable";
import { PlusIcon } from "@heroicons/react/24/outline";

export function AlertPage() {
	return (
		<ComponentPage title="Alert" description="Displays a callout for user attention with different variants and automatic icons.">
			<ShowcaseSection title="Basic Variants" description="All alerts come with default icons for their variant.">
				<div className="w-full space-y-4">
					<Alert variant="info">This is an informational alert message.</Alert>
					<Alert variant="success">Your action was completed successfully!</Alert>
					<Alert variant="warning">Please review your input before proceeding.</Alert>
					<Alert variant="error">Something went wrong. Please try again.</Alert>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Title and Description" description="Use AlertTitle and AlertDescription for structured content.">
				<div className="w-full space-y-4">
					<Alert variant="info">
						<div>
							<AlertTitle>New Update Available</AlertTitle>
							<AlertDescription>Version 2.0 is now available for download.</AlertDescription>
						</div>
					</Alert>
					<Alert variant="success">
						<div>
							<AlertTitle>Upload Complete</AlertTitle>
							<AlertDescription>Your file has been uploaded successfully to the server.</AlertDescription>
						</div>
					</Alert>
					<Alert variant="warning">
						<div>
							<AlertTitle>Session Expiring Soon</AlertTitle>
							<AlertDescription>Your session will expire in 5 minutes. Please save your work.</AlertDescription>
						</div>
					</Alert>
					<Alert variant="error">
						<div>
							<AlertTitle>Upload Failed</AlertTitle>
							<AlertDescription>The file size exceeds the maximum allowed limit of 10MB.</AlertDescription>
						</div>
					</Alert>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Custom Icons" description="Override the default icon with your own.">
				<div className="w-full space-y-4">
					<Alert variant="info" icon={<PlusIcon className="h-6 w-6" />}>
						Alert with custom icon
					</Alert>
				</div>
			</ShowcaseSection>

			<CodeSection>
				<CodeBlock
					code={`import { Alert, AlertTitle, AlertDescription } from '@shared-ui-library/react';

// Basic usage
<Alert variant="success">
  Your changes have been saved.
</Alert>

// With title and description
<Alert variant="info">
  <div>
    <AlertTitle>New Update Available</AlertTitle>
    <AlertDescription>Version 2.0 is now ready.</AlertDescription>
  </div>
</Alert>

// Custom icon
<Alert variant="warning" icon={<CustomIcon />}>
  Custom message
</Alert>`}
				/>
			</CodeSection>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Props</h2>
				<PropsTable
					props={[
						{
							name: "variant",
							type: '"info" | "success" | "warning" | "error"',
							default: '"info"',
							description: "The visual style of the alert",
						},
						{
							name: "icon",
							type: "React.ReactNode",
							default: "Default icon",
							description: "Custom icon to display (overrides default)",
						},
						{
							name: "children",
							type: "React.ReactNode",
							description: "Content of the alert",
						},
						{
							name: "className",
							type: "string",
							description: "Additional CSS classes",
						},
					]}
				/>
			</section>
		</ComponentPage>
	);
}

