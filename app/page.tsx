"use client";
import Image from "next/image";
import pino from "pino";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";

import {
  IconApps,
  IconArrowUp,
  IconBolt,
  IconCloud,
  IconDatabase,
  IconPalette,
  IconSend,
  IconVideo,
} from "@tabler/icons-react";
import { useState } from "react";

const logger = pino();
export default function Home() {
  const router = useRouter();

  const [searchVal, setSearchVal] = useState(
    "how to create your own erc20 token"
  );

  const handleSubmit = () => {
    router.push(`/stack/${searchVal}`);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#131722] to-[#161a27] flex flex-col pb-6">
      <div className="h-full flex flex-col justify-center">
        <div className=" max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center justify-center flex flex-row mb-2">
            <Image
              src={"/images/logo/icon.svg"}
              height={20}
              width={60}
              alt="Logo"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Welcome to Theta Block Stack
          </h1>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Your AI-powered blockchain tech stack on the theta ecosystem for
            your Dapps
          </p>
        </div>

        <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              value={searchVal}
              onChange={(e) => {
                setSearchVal(e.target.value);
              }}
              className="p-4 block w-full border focus:border-[#24283b] focus:outline-none border-gray-200 rounded-full text-sm   disabled:opacity-50 disabled:pointer-events-none dark:bg-[#161a27] dark:border-[#24283b] dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Ask me anything..."
            />
            <div className="absolute top-1/2 end-2 -translate-y-1/2">
              <button
                type="button"
                onClick={handleSubmit}
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-[#141824] dark:bg-white"
              >
                <IconArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl  px-4 pb-10 sm:px-6 lg:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-[#151926] dark:border-[#24283b] border-opacity-30 hover:border-[#19c99d]"
            href="/stack-example/video"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <IconVideo size={40} color="#19c99d" />

                <div className="grow ms-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Theta Video Services
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Learn to build a decentralized video app
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-[#151926] dark:border-[#24283b] border-opacity-30 hover:border-[#19c99d]"
            href="/stack-example/video"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <IconCloud size={40} color="#19c99d" />

                <div className="grow ms-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Theta EdgeCloud
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Learn How to build AI Apps on the theta cloud
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-[#151926] dark:border-[#24283b] border-opacity-30 hover:border-[#19c99d]"
            href="/stack-example/video"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <IconDatabase size={40} color="#19c99d" />

                <div className="grow ms-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Theta Drop (TDROP){" "}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Learn to build a decentralized theta drop app with thetapas
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-[#151926] dark:border-[#24283b] border-opacity-30 hover:border-[#19c99d]"
            href="/stack-example/edge-store"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <IconBolt size={40} color="#19c99d" />
                <div className="grow ms-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Theta Edgestore
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Learn how to build a decentralized CDN
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-[#151926] dark:border-[#24283b] border-opacity-30 hover:border-[#19c99d]"
            href="/stack-example/nft"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <IconPalette size={40} color="#19c99d" />
                <div className="grow ms-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Theta NFT
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Learn how to build an NFT on theta networks
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-[#151926] dark:border-[#24283b] border-opacity-30 hover:border-[#19c99d]"
            href="/stack-example/game"
          >
            <div className="p-4 md:p-5">
              <div className="flex">
                <IconApps size={40} color="#19c99d" />
                <div className="grow ms-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                    Theta Dapps
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Learn how to build any dapp on theta network
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
