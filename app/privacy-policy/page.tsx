import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandVscode,
  IconPuzzle,
  IconStack,
} from "@tabler/icons-react";
import React from "react";

function Policy() {
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

      <div className="relative z-10 py-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-neutral-400 mb-2">
              Your privacy is important to us. This privacy policy explains what
              personal data ThetaEdgeX collects from you, through our
              interactions with you and through our products, and how we use
              that data.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
              Data Collection
            </h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-2">
              We collect data to operate effectively and provide you the best
              experiences with our services. The data we collect includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-neutral-400 mb-2">
              <li>
                Personal Information: Your name, email address, and contact
                details.
              </li>
              <li>
                Usage Data: Information on how you interact with our extensions
                and services.
              </li>
              <li>
                Technical Data: Device information, IP address, and location
                data.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
              Data Usage
            </h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-2">
              The data we collect is used to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-neutral-400 mb-2">
              <li>Provide and improve our services.</li>
              <li>Personalize your experience with our products.</li>
              <li>
                Communicate with you, including responding to your requests and
                providing updates.
              </li>
              <li>Ensure the security and integrity of our services.</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
              Data Sharing
            </h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-2">
              We do not share your personal data with third parties, except as
              necessary to provide our services or as required by law.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
              Data Security
            </h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-2">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, loss, or
              misuse.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
              Your Rights
            </h3>
            <p className="text-gray-600 dark:text-neutral-400 mb-2">
              You have the right to access, correct, or delete your personal
              data. You can also object to or restrict the processing of your
              data.
            </p>
            <p className="text-gray-600 dark:text-neutral-400 mt-4">
              If you have any questions or concerns about our privacy practices,
              please contact us at privacy@thetaedgex.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;
