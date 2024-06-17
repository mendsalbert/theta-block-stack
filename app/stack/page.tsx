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
} from "@tabler/icons-react";
export default function Home() {
  const diagramRef = useRef(null) as any;
  const [selectedNode, setSelectedNode] = useState(null) as any;

  useEffect(() => {
    const $ = go.GraphObject.make;

    if (diagramRef.current) {
      const diagram = $(go.Diagram, diagramRef.current, {
        "undoManager.isEnabled": true,
        layout: $(go.LayeredDigraphLayout, { direction: 90 }),
      });

      // Define the node template
      diagram.nodeTemplate = $(
        go.Node,
        "Auto",
        {
          cursor: "pointer",
          click: (e, node: any) => {
            const nodeData = node.data;
            setSelectedNode(nodeData);
          },
        },
        $(
          go.Shape,
          "RoundedRectangle",
          { strokeWidth: 0 },
          new go.Binding("fill", "color")
        ),
        $(
          go.TextBlock,
          { margin: 8, font: "bold 16px sans-serif", stroke: "#fff" },
          new go.Binding("text", "key")
        )
      );

      // Define the link template
      diagram.linkTemplate = $(
        go.Link,
        { routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver },
        $(go.Shape, { strokeWidth: 2, stroke: "#fff" }),
        $(go.Shape, { toArrow: "Standard", stroke: "#fff", fill: "#fff" })
      );

      // Sample data for tech stack
      const nodeDataArray = [
        { key: "Frontend (React)", color: "#3B82F6" },
        { key: "Backend (Node.js)", color: "#10B981" },
        { key: "Blockchain (Solidity)", color: "#F97316" },
        { key: "Video Services", color: "#6366F1" },
        { key: "Video Upload", parent: "Video Services", color: "#6366F1" },
        {
          key: "Video Transcoding",
          parent: "Video Services",
          color: "#6366F1",
        },
        { key: "Video Playback", parent: "Video Services", color: "#6366F1" },
        {
          key: "Theta P2P Video Delivery",
          parent: "Video Services",
          color: "#6366F1",
        },
        {
          key: "Sign Up for Theta Developer Account",
          parent: "Video Upload",
          color: "#1F2937",
        },
        {
          key: "Create and Configure Your Application",
          parent: "Video Upload",
          color: "#1F2937",
        },
        { key: "Generate API Keys", parent: "Video Upload", color: "#1F2937" },
        {
          key: "Upload Video via API",
          parent: "Video Upload",
          color: "#1F2937",
        },
        {
          key: "Transcode Video",
          parent: "Video Transcoding",
          color: "#1F2937",
        },
        {
          key: "Retrieve Playback URL",
          parent: "Video Playback",
          color: "#1F2937",
        },
        {
          key: "Enable P2P Video Delivery",
          parent: "Theta P2P Video Delivery",
          color: "#1F2937",
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

            <div className="hidden sm:block">
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
          </ul>
        </nav>
      </div>

      <main
        id="content"
        role="main"
        className="lg:ps-72 bg-[#161a27] min-h-screen overscroll-auto"
      >
        <div className="lg:px-6 py-8">
          <div className="mx-auto">
            <h1 className="text-xl font-bold sm:text-2xl dark:text-white">
              Dashboard
            </h1>

            <div ref={diagramRef} className="w-full h-screen"></div>
            {selectedNode && (
              <div className="w-full bg-[#161a27] shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedNode.key}
                </h2>
                <p className="text-gray-700">
                  Quick information about {selectedNode.key}...
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
