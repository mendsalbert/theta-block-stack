import Image from "next/image";
import pino from "pino";
import { headers } from "next/headers";

const logger = pino();
export default function Home() {
  return (
    <div className="h-screen flex flex-col pb-6">
      <div className="h-full flex flex-col justify-center">
        <div className="-mt-20 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Image
              src={"/images/logo/icon.svg"}
              height={20}
              width={70}
              alt="Logo"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Welcome to Preline AI
          </h1>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Your AI-powered copilot for the web
          </p>
        </div>

        <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              className="p-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Ask me anything..."
            />
            <div className="absolute top-1/2 end-2 -translate-y-1/2">
              <button
                type="button"
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white"
              >
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
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
              </button>
              <button
                type="button"
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-800"
              >
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
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-600 dark:text-neutral-500">
          © 2024 Preline. A product of{" "}
          <a
            className="text-gray-800 decoration-2 hover:underline font-semibold dark:text-neutral-300"
            href="http://htmlstream.com/"
            target="_blank"
          >
            Htmlstream
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
