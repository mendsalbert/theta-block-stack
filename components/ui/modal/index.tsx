import React, { useEffect, useState } from "react";
import { IconInfoSquareRounded } from "@tabler/icons-react";
import "./CodeEditorStyles.css";

function Modal({ setIsModalOpen, selectedNode }: any) {
  const [code, setCode] = useState(selectedNode?.code || "");
  const [lineNumbers, setLineNumbers] = useState<string>("");

  useEffect(() => {
    const handleHighlightAndLineNumbers = () => {
      const lines = code.split("\n");
      setLineNumbers(lines.map((_: any, i: any) => i + 1).join("\n"));
    };

    handleHighlightAndLineNumbers();
  }, [code]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const syntaxHighlight = (code: string) => {
    return code
      .replace(
        /(const|let|var|function|class|return|if|else|for|while|import|from|export|default|new|try|catch|finally|useState|useEffect|useContext|useReducer|useCallback|useMemo|useRef|useLayoutEffect|useImperativeHandle|axios|next)/g,
        '<span class="keyword">$1</span>'
      )
      .replace(/("(.*?)"|'(.*?)'|`(.*?)`)/g, '<span class="string">$1</span>')
      .replace(/(\d+)/g, '<span class="number">$1</span>')
      .replace(/(\/\/.*?$)/gm, '<span class="comment">$1</span>')
      .replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>')
      .replace(
        /(\b[A-Z][A-Za-z0-9_]*\b)/g,
        '<span class="class-name">$1</span>'
      )
      .replace(/(\bconsole\b)/g, '<span class="console">$1</span>')
      .replace(/(&lt;\/?[\w\s/="'-:]+&gt;)/g, '<span class="jsx">$1</span>');
  };

  return (
    <div
      id="hs-cookies"
      className="hs-overlay size-full fixed top-0 left-0 z-[80] overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="relative flex flex-col shadow-lg rounded-xl dark:bg-[#131722]">
          <div className="absolute top-2 right-2">
            <button
              type="button"
              className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 sm:p-14 text-center flex flex-col items-center overflow-y-auto">
            <IconInfoSquareRounded size={40} className="mb-4" />
            <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
              {selectedNode?.title}
            </h3>
            <p className="text-gray-500 dark:text-neutral-500">
              {selectedNode?.description}
            </p>

            <div className="code-editor w-full mt-4 relative">
              <div className="line-numbers">
                <pre>{lineNumbers}</pre>
              </div>
              <div
                className="code-highlight bg-[#2d2d2d] p-4 rounded-lg text-left text-sm leading-5 text-white font-mono w-full h-64 overflow-auto"
                dangerouslySetInnerHTML={{ __html: syntaxHighlight(code) }}
              ></div>
              <textarea
                className="code-editor-textarea bg-transparent p-4 absolute inset-0 rounded-lg text-left text-sm leading-5 text-white font-mono w-full h-64 resize-none outline-none z-10"
                value={code}
                onChange={handleCodeChange}
              ></textarea>
            </div>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-es-xl border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white"
            >
              Website{" "}
            </button>
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-ee-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => setIsModalOpen(false)}
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
