import React, { useEffect, useRef, useState } from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconBell,
  IconMenu,
  IconUser,
  IconCoin,
  IconDatabase,
  IconHistory,
  IconCode,
  IconInfoSquareRounded,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenHistory, setIsOpenHistory] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordionHistory = () => {
    setIsOpenHistory(!isOpenHistory);
  };

  const shortenTitle = (title: any, maxLength: any) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength) + "...";
  };

  const maxTitleLength = 20; // Define your desired max length here
  const seen = new Set();

  const getTechStackHistory = () => {
    const techStack = localStorage.getItem("techStackHistory");
    return techStack ? JSON.parse(techStack) : [];
  };

  const [techStackHistory, setTechStackHistory] = useState([]) as any;

  useEffect(() => {
    const techStack = getTechStackHistory();
    setTechStackHistory(techStack);
  }, []);

  return (
    <div
      id="application-sidebar"
      className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-[#131722] dark:border-[#24283b]"
    >
      <div className="px-8 pt-5">
        <a
          className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
          href=""
          aria-label=""
        >
          <img src="/images/logo/icon.svg" className="w-12 p-0" />
          <p className="text-md font-bold pt-3">Theta Block Stack</p>
        </a>
      </div>

      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          <li>
            <a
              className="flex items-center border-opacity-0 gap-x-3.5 py-2 px-2.5  hover:bg-[#161a27]  text-sm text-neutral-700 rounded-lg dark:text-white"
              href="#"
            >
              <IconDatabase size={22} />
              <span>Stack</span>
            </a>
          </li>
          <li className="hs-accordion" id="account-accordion">
            <button
              type="button"
              onClick={toggleAccordionHistory}
              className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 ${
                isOpenHistory ? "hs-accordion-active:text-blue-600" : ""
              } text-sm rounded-lg  hover:bg-[#161a27] text-white   dark:hs-accordion-active:text-white`}
            >
              <IconHistory size={22} />
              History{" "}
              <svg
                className={`hs-accordion-active:block ms-auto ${
                  isOpenHistory ? "block" : "hidden"
                } size-4`}
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
                <path d="m18 15-6-6-6 6" />
              </svg>
              <svg
                className={`hs-accordion-active:hidden ms-auto ${
                  isOpenHistory ? "hidden" : "block"
                } size-4`}
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
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              id="account-accordion-child"
              className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                isOpenHistory ? "block" : "hidden"
              }`}
            >
              <ul
                className="pt-2 ps-2 space-y-2.5
               ml-4 bg-[#161a27] rounded-lg"
              >
                {techStackHistory.length === 0 ? (
                  <p>No tech stack history found.</p>
                ) : (
                  techStackHistory
                    .filter((item: any) => {
                      const isDuplicate = seen.has(item.searchQuery);
                      seen.add(item.searchQuery);
                      return !isDuplicate;
                    })
                    .map((item: any, index: any) => (
                      <li key={index}>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:[#131722] dark:text-neutral-400 dark:hover:text-neutral-300"
                          onClick={() => {
                            router.push(`/stack/${item.searchQuery}`);
                          }}
                        >
                          {shortenTitle(item.searchQuery, maxTitleLength)}
                        </a>
                      </li>
                    ))
                )}
              </ul>
            </div>
          </li>
          <li className="hs-accordion" id="account-accordion">
            <button
              type="button"
              onClick={toggleAccordion}
              className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 ${
                isOpen ? "hs-accordion-active:text-blue-600" : ""
              } text-sm rounded-lg  hover:bg-[#161a27] text-white   dark:hs-accordion-active:text-white`}
            >
              <IconCode size={22} />
              Example Stacks{" "}
              <svg
                className={`hs-accordion-active:block ms-auto ${
                  isOpen ? "block" : "hidden"
                } size-4`}
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
                <path d="m18 15-6-6-6 6" />
              </svg>
              <svg
                className={`hs-accordion-active:hidden ms-auto ${
                  isOpen ? "hidden" : "block"
                } size-4`}
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
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              id="account-accordion-child"
              className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul
                className="pt-2 ps-2 space-y-2.5
               ml-4 bg-[#161a27] rounded-lg"
              >
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:[#131722]  dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="/stack-example/video/"
                  >
                    Theta Video App
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:[#131722]  dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="/stack-example/ai/"
                  >
                    Theta AI App
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:[#131722]  dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="/stack-example/edge-store/"
                  >
                    Theta Edgestore App
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:[#131722]  dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="/stack-example/nft/"
                  >
                    Theta NFT app
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:[#131722]  dark:text-neutral-400 dark:hover:text-neutral-300"
                    href="/stack-example/game/"
                  >
                    Theta Game app
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
