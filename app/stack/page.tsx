"use client";
import React, { useEffect, useRef, useState } from "react";
import * as go from "gojs";
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
export default function Home() {
  const diagramRef = useRef(null) as any;
  const [selectedNode, setSelectedNode] = useState(null) as any;
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const $ = go.GraphObject.make;

    if (diagramRef.current) {
      const diagram = $(go.Diagram, diagramRef.current, {
        "undoManager.isEnabled": true,
        layout: $(go.LayeredDigraphLayout, { direction: 90 }),
      });
      diagram.nodeTemplate = $(
        go.Node,
        "Auto",
        {
          cursor: "pointer",
          click: (e, node: any) => {
            const nodeData = node.data;
            setSelectedNode(nodeData);
            setIsModalOpen(true);
          },
        },
        $(go.Shape, "RoundedRectangle", {
          fill: "rgba(255, 255, 255, 0.05)", // Transparent background
          stroke: "rgba(255, 255, 255, 0.1)",
          strokeWidth: 1,
          parameter1: 10, // corner radius
        }),
        $(
          go.Panel,
          "Vertical",
          { margin: 10 },
          $(
            go.Picture,
            {
              margin: new go.Margin(0, 0, 10, 0),
              width: 24,
              height: 24,
            },
            new go.Binding("source", "icon")
          ),
          $(
            go.TextBlock,
            {
              font: "bold 14px sans-serif",
              stroke: "#fff",
              textAlign: "center",
              margin: new go.Margin(0, 0, 5, 0),
            },
            new go.Binding("text", "title")
          ),
          $(
            go.TextBlock,
            {
              font: "12px sans-serif",
              stroke: "#aaa",
              textAlign: "center",
              margin: new go.Margin(0, 0, 5, 0),
            },
            new go.Binding("text", "description")
          )
        )
      );
      // Define the link template
      diagram.linkTemplate = $(
        go.Link,
        { routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver },
        $(go.Shape, { strokeWidth: 2, stroke: "#fff" }),
        $(go.Shape, { toArrow: "Standard", stroke: "#fff", fill: "#fff" })
      );

      const nodeDataArray = [
        {
          key: "Frontend (React)",
          title: "Frontend (React)",
          description: "Build dynamic UIs with React.",
          icon: "/images/icons/brand-react.svg",
        },
        {
          key: "Backend (Node.js)",
          title: "Backend (Node.js)",
          description:
            "Develop scalable server-side applications using Node.js.",
          icon: "/images/icons/brand-nodejs.svg",
        },
        {
          key: "Blockchain (Solidity)",
          title: "Blockchain (Solidity)",
          description: "Write smart contracts and DApps using Solidity.",
          icon: "/images/icons/currency-ethereum.svg",
        },
        {
          key: "Video Services",
          title: "Video Services",
          description: "Implement video streaming and services with Theta.",
          icon: "/images/logo/icon.svg",
        },
        {
          key: "Video Upload",
          parent: "Video Services",
          title: "Video Upload",
          description: "Manage and upload videos to Theta network.",
          icon: "/images/logo/icon.svg",
        },
        {
          key: "Video Transcoding",
          parent: "Video Services",
          title: "Video Transcoding",
          description: "Transcode videos for different formats using Theta.",
          icon: "/images/logo/icon.svg",
        },
        {
          key: "Video Playback",
          parent: "Video Services",
          title: "Video Playback",
          description: "Stream videos with efficient playback on Theta.",
          icon: "/images/logo/icon.svg",
        },
        {
          key: "Theta P2P Video Delivery",
          parent: "Video Services",
          title: "Theta P2P Video Delivery",
          description: "Enable P2P video delivery with Theta network.",
          icon: "/images/logo/icon.svg",
        },
      ];

      const linkDataArray = [
        { from: "Frontend (React)", to: "Backend (Node.js)" },
        { from: "Backend (Node.js)", to: "Blockchain (Solidity)" },
        { from: "Backend (Node.js)", to: "Video Services" },
        { from: "Video Services", to: "Video Upload" },
        { from: "Video Services", to: "Video Transcoding" },
        { from: "Video Services", to: "Video Playback" },
        { from: "Video Services", to: "Theta P2P Video Delivery" },
        { from: "Video Upload", to: "Sign Up for Theta Developer Account" },
        { from: "Video Upload", to: "Create and Configure Your Application" },
        { from: "Video Upload", to: "Generate API Keys" },
        { from: "Video Upload", to: "Upload Video via API" },
        { from: "Video Transcoding", to: "Transcode Video" },
        { from: "Video Playback", to: "Retrieve Playback URL" },
        { from: "Theta P2P Video Delivery", to: "Enable P2P Video Delivery" },
      ];

      diagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

      return () => {
        diagram.div = null;
      };
    }
  }, []);
  return (
    <div className="bg-[#161a27] min-h-screen w-full">
      {isModalOpen && (
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
      )}
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-[#161a27] border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-[#131722] dark:border-[#24283b]">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="../templates/admin/index.html"
              aria-label="Preline"
            >
              {/* Add logo or text here */}
            </a>
          </div>

          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              >
                <IconMenu />
              </button>
            </div>

            <div className="hidden sm:block z-50">
              <label htmlFor="icon" className="sr-only">
                Search
              </label>
              <div className="relative min-w-72 md:min-w-80">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <IconSearch size={20} />
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 px-4 ps-11 block w-full border focus:border-[#24283b] focus:outline-none border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-[#161a27] dark:border-[#24283b] dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              >
                <IconBell />
              </button>
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                data-hs-offcanvas="#hs-offcanvas-right"
              >
                <IconUser />
              </button>

              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                >
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
                    <p className="text-sm text-gray-500 dark:text-neutral-400">
                      Signed in as
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                      james@site.com
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Newsletter
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Purchases
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Downloads
                    </a>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Team Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-[#131722] dark:border-[#24283b]">
        <div className="flex justify-between items-center py-2">
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
              Application Layout
            </li>
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>

          <button
            type="button"
            className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Sidebar"
          >
            <span className="sr-only">Sidebar</span>
            <IconMenu />
          </button>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-[#131722] dark:border-[#24283b]"
      >
        <div className="px-8 pt-5">
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href=""
            aria-label="Preline"
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
                className="flex items-center border-opacity-0 gap-x-3.5 py-2 px-2.5 hover:border hover:border-[#19c99d] hover:border-opacity-75 text-sm text-neutral-700 rounded-lg dark:text-white"
                href="#"
              >
                <IconDatabase size={20} />
                <span>Stack</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center border-opacity-0 gap-x-3.5 py-2 px-2.5 hover:border hover:border-[#19c99d] hover:border-opacity-75 text-sm text-neutral-700 rounded-lg dark:text-white"
                href="#"
              >
                <IconHistory size={20} />
                <span>History</span>
              </a>
            </li>
            <li className="hs-accordion" id="account-accordion">
              <button
                type="button"
                onClick={toggleAccordion}
                className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 ${
                  isOpen ? "hs-accordion-active:text-blue-600" : ""
                } text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white`}
              >
                <IconCode size={20} />
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
                <ul className="pt-2 ps-2">
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <main
        id="content"
        role="main"
        className="lg:ps-72 bg-[#161a27] min-h-screen overscroll-auto"
      >
        <div className="lg:px-6 py-8">
          <div className="mx-auto ">
            <h1 className="text-xl font-bold sm:text-2xl  dark:text-white">
              Dashboard
            </h1>
            <div className="relative">
              <div className="absolute top-0 left-0 w-44 h-20 bg-[#161a27] z-30"></div>
              <div ref={diagramRef} className="w-full h-screen"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
