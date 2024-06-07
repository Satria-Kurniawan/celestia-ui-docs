import * as React from "react";
import { FaCode } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import Syntax from "./Syntax";

export default function Showcase({
  title,
  children,
  sourceCode,
}: {
  title?: string;
  children: React.ReactNode;
  sourceCode: string;
}) {
  const [activeMenu, setActiveMenu] = React.useState<"Preview" | "Code">(
    "Preview"
  );
  const isPreview = activeMenu == "Preview";
  const isCode = activeMenu == "Code";

  return (
    <article>
      <div className="flex flex-wrap gap-3 justify-between">
        <h1 className="font-semibold text-lg">{title}</h1>
        <div className="p-1 rounded-lg bg-light flex gap-x-1">
          <button
            onClick={() => setActiveMenu("Preview")}
            className={`py-1 px-2 rounded-lg font-semibold flex items-center gap-x-2 ${
              isPreview ? "bg-main text-white" : ""
            }`}
          >
            <IoEyeSharp />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setActiveMenu("Code")}
            className={`py-1 px-2 rounded-lg font-semibold flex items-center gap-x-2 ${
              isCode ? "bg-main text-white" : ""
            }`}
          >
            <FaCode />
            <span>Code</span>
          </button>
        </div>
      </div>
      <br />
      <div className={isPreview ? "p-5 border rounded-lg" : ""}>
        {isCode ? (
          <Syntax title="Code" code={sourceCode} showLineNumbers />
        ) : (
          children
        )}
      </div>
    </article>
  );
}
