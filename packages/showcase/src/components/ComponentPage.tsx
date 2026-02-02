import { ReactNode } from "react";

type ComponentPageProps = {
	title: string;
	description: string;
	children: ReactNode;
};

export function ComponentPage({ title, description, children }: ComponentPageProps) {
	return (
		<div className="max-w-5xl mx-auto">
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-3">{title}</h1>
				<p className="text-lg text-base-content/70">{description}</p>
			</div>
			<div className="space-y-10">{children}</div>
		</div>
	);
}

type ShowcaseSectionProps = {
	title: string;
	description?: string;
	children: ReactNode;
};

export function ShowcaseSection({ title, description, children }: ShowcaseSectionProps) {
	return (
		<section className="space-y-4">
			<div>
				<h2 className="text-2xl font-semibold mb-2">{title}</h2>
				{description && <p className="text-base-content/70">{description}</p>}
			</div>
			<div className="card bg-base-100 shadow-lg border border-base-300">
				<div className="card-body">
					<div className="flex flex-wrap gap-4 items-center">{children}</div>
				</div>
			</div>
		</section>
	);
}

type CodeSectionProps = {
	title?: string;
	children: ReactNode;
};

export function CodeSection({ title = "Usage", children }: CodeSectionProps) {
	return (
		<section className="space-y-4">
			<h2 className="text-2xl font-semibold">{title}</h2>
			{children}
		</section>
	);
}

