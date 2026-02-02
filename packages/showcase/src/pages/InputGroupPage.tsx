import {
	CurrencyDollarIcon,
	EnvelopeIcon,
	GlobeAltIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import { Button, Input, InputGroup } from "@shared-ui-library/react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function InputGroupPage() {
	return (
		<ComponentPage title="Input Group" description="Combine input fields with addons and buttons.">
			<ShowcaseSection title="With Text Addon" description="Add text prefixes or suffixes to inputs.">
				<div className="w-full max-w-md">
					<InputGroup>
						<span className="bg-base-300 px-3 flex items-center">https://</span>
						<Input placeholder="yourwebsite.com" />
					</InputGroup>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Icon Addon" description="Use icons as visual cues.">
				<div className="w-full max-w-md space-y-4">
					<InputGroup>
						<span className="bg-base-300 px-3 flex items-center">
							<MagnifyingGlassIcon className="w-5 h-5" />
						</span>
						<Input placeholder="Search..." />
					</InputGroup>

					<InputGroup>
						<span className="bg-base-300 px-3 flex items-center">
							<EnvelopeIcon className="w-5 h-5" />
						</span>
						<Input type="email" placeholder="Email address" />
					</InputGroup>

					<InputGroup>
						<span className="bg-base-300 px-3 flex items-center">
							<UserIcon className="w-5 h-5" />
						</span>
						<Input placeholder="Username" />
					</InputGroup>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Button" description="Combine inputs with action buttons.">
				<div className="w-full max-w-md">
					<InputGroup>
						<Input placeholder="Enter email..." />
						<Button variant="primary">Subscribe</Button>
					</InputGroup>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Addons on Both Sides" description="Add prefixes and suffixes together.">
				<div className="w-full max-w-md space-y-4">
					<InputGroup>
						<span className="bg-base-300 px-3 flex items-center">
							<CurrencyDollarIcon className="w-5 h-5" />
						</span>
						<Input placeholder="0.00" type="number" />
						<span className="bg-base-300 px-3 flex items-center">USD</span>
					</InputGroup>

					<InputGroup>
						<span className="bg-base-300 px-3 flex items-center">
							<GlobeAltIcon className="w-5 h-5" />
						</span>
						<Input placeholder="example" />
						<span className="bg-base-300 px-3 flex items-center">.com</span>
					</InputGroup>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Search with Button" description="Complete search input with action.">
				<div className="w-full max-w-md">
					<InputGroup>
						<span className="bg-base-300 px-3 flex items-center">
							<MagnifyingGlassIcon className="w-5 h-5" />
						</span>
						<Input placeholder="Search products..." />
						<Button variant="primary">Search</Button>
					</InputGroup>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Different Sizes" description="Input groups adapt to input sizes.">
				<div className="w-full max-w-md space-y-4">
					<div>
						<p className="text-sm font-medium mb-2">Small</p>
						<InputGroup>
							<span className="bg-base-300 px-3 flex items-center text-sm">@</span>
							<Input size="sm" placeholder="Small input" />
						</InputGroup>
					</div>
					<div>
						<p className="text-sm font-medium mb-2">Medium (default)</p>
						<InputGroup>
							<span className="bg-base-300 px-3 flex items-center">@</span>
							<Input placeholder="Medium input" />
						</InputGroup>
					</div>
					<div>
						<p className="text-sm font-medium mb-2">Large</p>
						<InputGroup>
							<span className="bg-base-300 px-3 flex items-center text-lg">@</span>
							<Input size="lg" placeholder="Large input" />
						</InputGroup>
					</div>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Vertical Input Group" description="Stack inputs vertically for forms.">
				<div className="w-full max-w-xs">
					<div className="flex flex-col gap-0">
						<Input placeholder="Username" className="rounded-b-none" />
						<Input type="password" placeholder="Password" className="rounded-none border-t-0" />
						<Button variant="primary" className="rounded-t-none">
							Login
						</Button>
					</div>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="With Select" description="Combine with dropdown selects.">
				<div className="w-full max-w-md">
					<InputGroup>
						<select className="select select-bordered rounded-r-none border-r-0">
							<option>USD</option>
							<option>EUR</option>
							<option>GBP</option>
						</select>
						<Input placeholder="Amount" type="number" className="rounded-l-none" />
					</InputGroup>
				</div>
			</ShowcaseSection>

			<CodeSection>
				<CodeBlock
					code={`import { InputGroup, Input, Button } from '@shared-ui-library/react';
import { MagnifyingGlassIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

// With text addon
<InputGroup>
  <span className="bg-base-300 px-3 flex items-center">https://</span>
  <Input placeholder="yourwebsite.com" />
</InputGroup>

// With icon addon
<InputGroup>
  <span className="bg-base-300 px-3 flex items-center">
    <MagnifyingGlassIcon className="w-5 h-5" />
  </span>
  <Input placeholder="Search..." />
</InputGroup>

// With button
<InputGroup>
  <Input placeholder="Enter email..." />
  <Button variant="primary">Subscribe</Button>
</InputGroup>

// Both sides
<InputGroup>
  <span className="bg-base-300 px-3 flex items-center">$</span>
  <Input placeholder="0.00" type="number" />
  <span className="bg-base-300 px-3 flex items-center">USD</span>
</InputGroup>

// Complete search
<InputGroup>
  <span className="bg-base-300 px-3 flex items-center">
    <MagnifyingGlassIcon className="w-5 h-5" />
  </span>
  <Input placeholder="Search..." />
  <Button variant="primary">Search</Button>
</InputGroup>`}
				/>
			</CodeSection>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Props</h2>
				<PropsTable
					props={[
						{
							name: "className",
							type: "string",
							description: "Additional CSS classes for the container",
						},
						{
							name: "children",
							type: "React.ReactNode",
							description: "Input elements, addons (spans), and buttons",
						},
					]}
				/>
				<div className="mt-4">
					<h3 className="text-xl font-semibold mb-2">Usage Notes</h3>
					<ul className="list-disc list-inside text-base-content/70 space-y-1">
						<li>
							Use <code className="text-sm bg-base-200 px-1 rounded">span</code> elements with{" "}
							<code className="text-sm bg-base-200 px-1 rounded">bg-base-300</code> for text/icon addons
						</li>
						<li>Place addons before or after the Input component as needed</li>
						<li>Combine with Button components for actionable inputs</li>
						<li>InputGroup uses flexbox to align children horizontally</li>
					</ul>
				</div>
			</section>
		</ComponentPage>
	);
}
