import React from "react";
import { IconInfoSquareRounded } from "@tabler/icons-react";

function Modal({ setIsModalOpen, selectedNode }: any) {
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
