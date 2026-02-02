import { Button, Card, CardActions, CardBody, CardTitle } from "@shared-ui-library/react";
import { CodeBlock } from "../components/CodeBlock";
import { CodeSection, ComponentPage, ShowcaseSection } from "../components/ComponentPage";
import { PropsTable } from "../components/PropsTable";

export function CardPage() {
	return (
		<ComponentPage title="Card" description="Displays a card with header, content, and footer.">
			<ShowcaseSection title="Basic Card" description="Simple card with title and content.">
				<Card className="w-96 shadow-xl">
					<CardBody>
						<CardTitle>Card Title</CardTitle>
						<p>This is the card content. You can put any content here.</p>
					</CardBody>
				</Card>
			</ShowcaseSection>

			<ShowcaseSection title="Card with Actions" description="Add action buttons to the card footer.">
				<Card className="w-96 shadow-xl">
					<CardBody>
						<CardTitle>Confirm Your Action</CardTitle>
						<p>This card demonstrates action buttons placed at the bottom for user interactions.</p>
						<CardActions>
							<Button variant="ghost">Cancel</Button>
							<Button variant="primary">Confirm</Button>
						</CardActions>
					</CardBody>
				</Card>
			</ShowcaseSection>

			<ShowcaseSection title="Compact Card" description="Card with reduced padding for dense layouts.">
				<Card variant="compact" className="w-96 shadow-xl">
					<CardBody>
						<CardTitle>Compact Card</CardTitle>
						<p>This card has less padding, useful for compact layouts.</p>
					</CardBody>
				</Card>
			</ShowcaseSection>

			<ShowcaseSection title="Bordered Card" description="Card with a visible border.">
				<Card variant="bordered" className="w-96">
					<CardBody>
						<CardTitle>Bordered Card</CardTitle>
						<p>The border helps distinguish the card from the background.</p>
					</CardBody>
				</Card>
			</ShowcaseSection>

			<ShowcaseSection title="Card with Image" description="Cards can include images for richer visual content.">
				<Card className="w-96 shadow-xl">
					<figure>
						<img
							src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=200&fit=crop"
							alt="Shoes"
							className="w-full h-48 object-cover"
						/>
					</figure>
					<CardBody>
						<CardTitle>New Shoes!</CardTitle>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<CardActions>
							<Button variant="primary">Buy Now</Button>
						</CardActions>
					</CardBody>
				</Card>
			</ShowcaseSection>

			<ShowcaseSection title="Glass Effect" description="Beautiful glass effect on colorful backgrounds.">
				<div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-lg">
					<Card className="w-96 glass">
						<CardBody>
							<CardTitle className="text-white">Glass Card</CardTitle>
							<p className="text-white/90">Glass cards look great on colorful backgrounds.</p>
						</CardBody>
					</Card>
				</div>
			</ShowcaseSection>

			<ShowcaseSection title="Side Layout" description="Card with image on the side instead of top.">
				<Card variant="side" className="w-full max-w-lg shadow-xl">
					<figure className="w-48">
						<img
							src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=200&h=200&fit=crop"
							alt="Breakfast"
							className="w-full h-full object-cover"
						/>
					</figure>
					<CardBody>
						<CardTitle>Side Card Layout</CardTitle>
						<p>This card has an image on the side instead of on top.</p>
						<CardActions>
							<Button variant="primary" size="sm">
								Learn More
							</Button>
						</CardActions>
					</CardBody>
				</Card>
			</ShowcaseSection>

			<ShowcaseSection title="Card Grid" description="Display multiple cards in a grid layout.">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
					<Card className="shadow-lg">
						<CardBody>
							<CardTitle>Plan A</CardTitle>
							<p>Basic features for small teams</p>
							<div className="text-2xl font-bold mt-2">$9/mo</div>
							<CardActions justify="start">
								<Button variant="primary" size="sm">
									Select
								</Button>
							</CardActions>
						</CardBody>
					</Card>
					<Card className="shadow-lg border-2 border-primary">
						<CardBody>
							<CardTitle>Plan B</CardTitle>
							<p>Advanced features for growing teams</p>
							<div className="text-2xl font-bold mt-2">$29/mo</div>
							<CardActions justify="start">
								<Button variant="primary" size="sm">
									Select
								</Button>
							</CardActions>
						</CardBody>
					</Card>
					<Card className="shadow-lg">
						<CardBody>
							<CardTitle>Plan C</CardTitle>
							<p>Enterprise features for large teams</p>
							<div className="text-2xl font-bold mt-2">$99/mo</div>
							<CardActions justify="start">
								<Button variant="primary" size="sm">
									Select
								</Button>
							</CardActions>
						</CardBody>
					</Card>
				</div>
			</ShowcaseSection>

			<CodeSection>
				<CodeBlock
					code={`import { Card, CardBody, CardTitle, CardActions, Button } from '@shared-ui-library/react';

// Basic card
<Card className="w-96">
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <p>Card content goes here.</p>
  </CardBody>
</Card>

// Card with image and actions
<Card className="w-96">
  <figure>
    <img src="/image.jpg" alt="Header" />
  </figure>
  <CardBody>
    <CardTitle>Title</CardTitle>
    <p>Description</p>
    <CardActions>
      <Button variant="primary">Action</Button>
    </CardActions>
  </CardBody>
</Card>

// Variants
<Card variant="bordered" className="w-72">...</Card>
<Card variant="compact" className="w-72">...</Card>
<Card variant="side" className="w-full">...</Card>`}
				/>
			</CodeSection>

			<section className="space-y-4">
				<h2 className="text-2xl font-semibold">Props</h2>
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold mb-2">Card Props</h3>
						<PropsTable
							props={[
								{
									name: "variant",
									type: '"default" | "bordered" | "compact" | "side"',
									default: '"default"',
									description: "The visual style of the card",
								},
								{
									name: "imageSrc",
									type: "string",
									description: "Image source for card figure",
								},
								{
									name: "imageAlt",
									type: "string",
									description: "Image alt text",
								},
								{
									name: "className",
									type: "string",
									description: "Additional CSS classes",
								},
								{
									name: "children",
									type: "React.ReactNode",
									description: "Card content (typically CardBody)",
								},
							]}
						/>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-2">CardActions Props</h3>
						<PropsTable
							props={[
								{
									name: "justify",
									type: '"start" | "center" | "end"',
									default: '"end"',
									description: "Justify content alignment",
								},
							]}
						/>
					</div>
				</div>
			</section>
		</ComponentPage>
	);
}
