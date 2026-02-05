import { ReactNode } from "react";

type ComponentPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function ComponentPage({ title, description, children }: ComponentPageProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold">{title}</h1>
        <p className="text-base-content/70 text-lg">{description}</p>
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
        <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
        {description && <p className="text-base-content/70">{description}</p>}
      </div>
      <div className="card bg-base-100 border-base-300 border shadow-lg">
        <div className="card-body">
          <div className="flex flex-wrap items-center gap-4">{children}</div>
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
