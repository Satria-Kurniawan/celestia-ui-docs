import * as React from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaTerminal } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";

export default function Syntax({
  title = "Terminal",
  language = "javascript",
  showLineNumbers = false,
  code,
}: {
  title?: string;
  language?: string;
  showLineNumbers?: boolean;
  code: string;
}) {
  const codeRef = React.useRef(null);
  const [isCoppied, setIsCoppied] = React.useState<boolean>(false);

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCoppied(true);
          setTimeout(() => {
            setIsCoppied(false);
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <div className="rounded-lg border flex-1 overflow-auto">
      <div className="px-5 py-2 border-b bg-light text-label flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <FaTerminal size={15} />
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <div>
          {isCoppied ? (
            <button className="p-2">
              <BsCheck2 />
            </button>
          ) : (
            <button
              onClick={copyToClipboard}
              className="p-2 rounded-lg hover:bg-black/5 duration-300"
            >
              <MdOutlineContentCopy />
            </button>
          )}
        </div>
      </div>
      <div className="p-5 max-w-[90vw]">
        <SyntaxHighlighter
          ref={codeRef}
          language={language}
          style={googlecode}
          customStyle={{
            borderRadius: ".5rem",
            paddingLeft: "1rem",
          }}
          showLineNumbers={showLineNumbers}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
