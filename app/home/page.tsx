import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandVisualStudio,
  IconBrandVscode,
  IconPuzzle,
  IconStack,
} from "@tabler/icons-react";
import React from "react";

function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 z-10 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              {/* Preline: A vision for 2023 */}
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                ThetaEdge
                <span className="bg-clip-text font-semibold bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                  X
                </span>
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-neutral-400">
                Great ideas start from generating ideas, and idea creation
                begins in VS Code. Welcome to ThetaEdgeX, a comprehensive 3-in-1
                platform designed to enhance the Theta development ecosystem.
              </p>
            </div>

            <div className="mt-8 gap-3  flex justify-center">
              <a
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="/"
              >
                Get started
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="py-3 px-4  inline-flex items-center gap-x-2 text-sm font-semibold border-transparent rounded-lg border  text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800"
                href="https://github.com/mendsalbert/theta-block-stack"
              >
                <IconBrandGithub />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 z-50 px-4 py-0 sm:px-6 lg:px-8 lg:py-0 mx-auto ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
          <div className="text-left w-full  px-2 py-4 rounded-xl border-neutral-700">
            <div className="flex justify-start items-center   mx-auto ">
              <span className="border-[2px] border-neutral-700 rounded-full p-3">
                <IconStack size={50} />
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Theta Block Stack
              </h3>
              <p className="mt-1 text-gray-600 text-sm dark:text-neutral-400">
                An AI-powered platform that generates a tech stack for any
                application you wish to build on the theta Network.
              </p>
              <div className="flex flex-row text-sm pt-2 items-center cursor-pointer space-x-2">
                <span>Get Started</span>
                <IconArrowRight size={18} />
              </div>
            </div>
          </div>

          <div className="text-left px-2 py-4 rounded-xl border-neutral-700">
            <div className="flex justify-left items-center   mx-auto ">
              <span className="border-[2px] border-neutral-700 rounded-full p-3">
                <IconPuzzle size={46} />
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Theta Browser Extension
              </h3>
              <p className="mt-1 text-gray-600 text-sm dark:text-neutral-400">
                Features include AI-assisted coding, smart contract deployment,
                and seamless integration with Theta network and cloud
                functionalities.{" "}
              </p>
              <div className="flex flex-row text-sm pt-2 items-center cursor-pointer space-x-2">
                <span>Download</span>
                <IconArrowRight size={18} />
              </div>
            </div>
          </div>
          <div className="text-left  px-2 py-4 rounded-xl border-neutral-700">
            <div className="flex justify-left items-center   mx-auto ">
              <span className="border-[2px] border-neutral-700 rounded-full p-3">
                <IconBrandVscode size={46} />
              </span>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Theta VScode Extension
              </h3>
              <p className="mt-1 text-gray-600 text-sm dark:text-neutral-400">
                Generate code, deploy smart contracts, and access comprehensive
                Theta documentation—all within VS Code.{" "}
              </p>
              <div className="flex flex-row text-sm pt-2 items-center cursor-pointer space-x-2">
                <span>Download</span>
                <IconArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
