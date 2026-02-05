import { Pagination } from "@shared-ui-library/react";
import { useState } from "react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ComponentPage title="Pagination" description="Navigation for paginated content.">
      <ShowcaseSection title="Default">
        <Pagination currentPage={currentPage} totalPages={10} onChange={setCurrentPage} />
      </ShowcaseSection>

      <ShowcaseSection title="Different Page Counts">
        <div className="space-y-4">
          <Pagination currentPage={1} totalPages={3} onChange={() => {}} />
          <Pagination currentPage={1} totalPages={5} onChange={() => {}} />
          <Pagination currentPage={1} totalPages={10} onChange={() => {}} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="With Many Pages">
        <Pagination currentPage={5} totalPages={20} onChange={() => {}} />
      </ShowcaseSection>

      <ShowcaseSection title="Interactive Example">
        <div className="mb-4 text-center">
          <p>Current Page: {currentPage}</p>
        </div>
        <Pagination currentPage={currentPage} totalPages={10} onChange={setCurrentPage} />
      </ShowcaseSection>
    </ComponentPage>
  );
}
