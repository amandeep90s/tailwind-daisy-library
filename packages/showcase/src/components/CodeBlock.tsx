import { useState } from "react";
import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = "tsx", showLineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <button className="btn btn-sm btn-ghost" onClick={handleCopy} type="button">
          {copied ? (
            <CheckIcon className="h-5 w-5" />
          ) : (
            <ClipboardDocumentIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      <div className="mockup-code bg-base-300 text-base-content">
        {showLineNumbers ? (
          lines.map((line, index) => (
            <pre key={index} data-prefix={index + 1}>
              <code>{line}</code>
            </pre>
          ))
        ) : (
          <pre>
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
