import { Accordion, AccordionItem } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

// Edit icon component
const EditIcon = () => (
  <svg
    className="h-5 w-5 text-gray-600 hover:text-gray-900"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    />
  </svg>
);

// Delete icon component
const DeleteIcon = () => (
  <svg
    className="h-5 w-5 text-red-500 hover:text-red-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
);

export function AccordionPage() {
  const handleEdit = (name: string) => {
    alert(`Edit clicked for: ${name}`);
  };

  const handleDelete = (name: string) => {
    alert(`Delete clicked for: ${name}`);
  };

  return (
    <ComponentPage
      title="Accordion"
      description="A vertically stacked set of interactive headings that each reveal a section of content."
    >
      <ShowcaseSection
        title="Arrow Variant (Default)"
        description="Accordion with arrow indicators."
      >
        <div className="w-full">
          <Accordion className="w-full">
            <AccordionItem title="Is it accessible?" variant="arrow">
              <p>Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML elements.</p>
            </AccordionItem>
            <AccordionItem title="Is it styled?" variant="arrow">
              <p>Yes. It comes with default styles using DaisyUI that can be customized.</p>
            </AccordionItem>
            <AccordionItem title="Is it animated?" variant="arrow">
              <p>Yes. It uses smooth animations when expanding and collapsing content.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Plus Variant" description="Accordion with plus/minus indicators.">
        <div className="w-full">
          <Accordion className="w-full">
            <AccordionItem title="What is DaisyUI?" variant="plus">
              <p>
                DaisyUI is a component library for Tailwind CSS that provides ready-to-use
                components.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I customize it?" variant="plus">
              <p>Yes. All components can be customized with Tailwind classes and DaisyUI themes.</p>
            </AccordionItem>
            <AccordionItem title="Is it free?" variant="plus">
              <p>Yes. DaisyUI is completely free and open source under the MIT license.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Without Indicators"
        description="Plain accordion without visual indicators."
      >
        <div className="w-full">
          <Accordion className="w-full">
            <AccordionItem title="Simple accordion item">
              <p>This accordion doesn't have an arrow or plus indicator.</p>
            </AccordionItem>
            <AccordionItem title="Another simple item">
              <p>Just plain expand and collapse functionality.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Icon Position Right"
        description="Accordion with the chevron icon positioned on the right side."
      >
        <div className="w-full">
          <Accordion className="w-full">
            <AccordionItem title="Right-aligned icon" iconPosition="right">
              <p>The chevron icon is now on the right side of the title.</p>
            </AccordionItem>
            <AccordionItem title="Another right-aligned item" iconPosition="right">
              <p>This provides a different visual style for your accordions.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="With Action Buttons"
        description="Accordion items with action buttons (edit/delete). Clicking actions doesn't toggle the accordion."
      >
        <div className="w-full">
          <Accordion className="w-full">
            <AccordionItem
              title="Jack Jonas"
              iconPosition="left"
              actions={
                <>
                  <button
                    type="button"
                    onClick={() => handleEdit("Jack Jonas")}
                    className="rounded p-1 transition-colors hover:bg-gray-200"
                    aria-label="Edit Jack Jonas"
                  >
                    <EditIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete("Jack Jonas")}
                    className="rounded p-1 transition-colors hover:bg-red-100"
                    aria-label="Delete Jack Jonas"
                  >
                    <DeleteIcon />
                  </button>
                </>
              }
            >
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> jack.jonas@example.com
                </p>
                <p>
                  <strong>Phone:</strong> (555) 123-4567
                </p>
                <p>
                  <strong>Role:</strong> Software Engineer
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              title="Jimmy Smith"
              iconPosition="left"
              actions={
                <>
                  <button
                    type="button"
                    onClick={() => handleEdit("Jimmy Smith")}
                    className="rounded p-1 transition-colors hover:bg-gray-200"
                    aria-label="Edit Jimmy Smith"
                  >
                    <EditIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete("Jimmy Smith")}
                    className="rounded p-1 transition-colors hover:bg-red-100"
                    aria-label="Delete Jimmy Smith"
                  >
                    <DeleteIcon />
                  </button>
                </>
              }
            >
              <div className="space-y-2">
                <p>
                  <strong>Email:</strong> jimmy.smith@example.com
                </p>
                <p>
                  <strong>Phone:</strong> (555) 987-6543
                </p>
                <p>
                  <strong>Role:</strong> Product Manager
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Controlled Accordion"
        description="Accordion with controlled open state using onOpenChange callback."
      >
        <div className="w-full">
          <Accordion className="w-full">
            <AccordionItem
              title="Controlled Item"
              iconPosition="right"
              defaultOpen={true}
              onOpenChange={(open) => console.log("Accordion open state:", open)}
            >
              <p>This accordion logs its open state to the console. Check the developer tools!</p>
            </AccordionItem>
          </Accordion>
        </div>
      </ShowcaseSection>
    </ComponentPage>
  );
}
