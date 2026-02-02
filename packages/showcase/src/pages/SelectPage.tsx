import { Select } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

const options = [
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "angular", label: "Angular" },
	{ value: "svelte", label: "Svelte" },
];

export function SelectPage() {
	const [value, setValue] = useState("");

	return (
		<ComponentPage title="Select" description="Displays a list of options for the user to pick from.">
			<ShowcaseSection title="Default">
				<div className="w-72">
					<Select
						options={options}
						placeholder="Select a framework"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Variants">
				<Select options={options} variant="bordered" className="w-48" placeholder="Bordered" />
				<Select options={options} variant="ghost" className="w-48" placeholder="Ghost" />
			</ShowcaseSection>

			<ShowcaseSection title="Colors">
				<Select options={options} color="primary" className="w-40" placeholder="Primary" />
				<Select options={options} color="secondary" className="w-40" placeholder="Secondary" />
				<Select options={options} color="accent" className="w-40" placeholder="Accent" />
			</ShowcaseSection>

			<ShowcaseSection title="Sizes">
				<Select options={options} size="xs" className="w-32" placeholder="XS" />
				<Select options={options} size="sm" className="w-32" placeholder="SM" />
				<Select options={options} size="md" className="w-32" placeholder="MD" />
				<Select options={options} size="lg" className="w-32" placeholder="LG" />
			</ShowcaseSection>

			<ShowcaseSection title="Disabled">
				<Select options={options} disabled className="w-48" placeholder="Disabled" />
			</ShowcaseSection>
		</ComponentPage>
	);
}
