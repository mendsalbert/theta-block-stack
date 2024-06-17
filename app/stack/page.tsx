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
} from "@tabler/icons-react";
export default function Home() {
  const diagramRef = useRef(null) as any;
  const [selectedNode, setSelectedNode] = useState(null) as any;

  //   useEffect(() => {
  //     const $ = go.GraphObject.make;

  //     const theme = {
  //       colors: {
  //         kingQueenBorder: "#FEBA00",
  //         princePrincessBorder: "#679DDA",
  //         civilianBorder: "#58ADA7",
  //         personText: "#383838",
  //         personNodeBackground: "#FFFFFF",
  //         selectionStroke: "#485670",
  //         maleBadgeBackground: "#A2DAFF",
  //         femaleBadgeBackground: "#FFCBEA",
  //         maleBadgeText: "#001C76",
  //         femaleBadgeText: "#7A005E",
  //       },
  //       fonts: {
  //         badgeFont: "bold 12px Poppins",
  //         birthDeathFont: "14px Poppins",
  //         nameFont: "500 18px Poppins",
  //       },
  //     };

  //     const statusStrokeBinding = () =>
  //       new go.Binding("stroke", "status", (status) => {
  //         switch (status) {
  //           case "king":
  //           case "queen":
  //             return theme.colors.kingQueenBorder;
  //           case "prince":
  //           case "princess":
  //             return theme.colors.princePrincessBorder;
  //           case "civilian":
  //           default:
  //             return theme.colors.civilianBorder;
  //         }
  //       });

  //     const highlightStrokeBinding = () =>
  //       new go.Binding("stroke", "isHighlighted", (isHighlighted, obj) =>
  //         isHighlighted ? theme.colors.selectionStroke : statusStrokeBinding(obj)
  //       ).ofObject();

  //     const genderToText = (gender) => (gender === "M" ? "MALE" : "FEMALE");
  //     const genderToFillColor = (gender) =>
  //       gender === "M"
  //         ? theme.colors.maleBadgeBackground
  //         : theme.colors.femaleBadgeBackground;
  //     const genderToTextColor = (gender) =>
  //       gender === "M"
  //         ? theme.colors.maleBadgeText
  //         : theme.colors.femaleBadgeText;

  //     const personNodeTemplate = $(
  //       go.Node,
  //       "Auto",
  //       { selectionAdorned: false },
  //       $(
  //         go.Shape,
  //         "RoundedRectangle",
  //         { fill: theme.colors.personNodeBackground, strokeWidth: 2 },
  //         statusStrokeBinding(),
  //         highlightStrokeBinding()
  //       ),
  //       $(
  //         go.Panel,
  //         "Table",
  //         { margin: 8 },
  //         $(go.RowColumnDefinition, { column: 1, width: 150 }),
  //         $(
  //           go.TextBlock,
  //           {
  //             row: 0,
  //             column: 0,
  //             columnSpan: 3,
  //             font: theme.fonts.nameFont,
  //             stroke: theme.colors.personText,
  //             textAlign: "center",
  //           },
  //           new go.Binding("text", "name")
  //         ),
  //         $(
  //           go.TextBlock,
  //           {
  //             row: 1,
  //             column: 0,
  //             columnSpan: 3,
  //             font: theme.fonts.birthDeathFont,
  //             stroke: theme.colors.personText,
  //             textAlign: "center",
  //           },
  //           new go.Binding("text", "", (data) => `${data.born} - ${data.death}`)
  //         ),
  //         $(
  //           go.Panel,
  //           "Auto",
  //           { row: 2, column: 1, margin: 2 },
  //           $(
  //             go.Shape,
  //             "RoundedRectangle",
  //             new go.Binding("fill", "gender", genderToFillColor), // Correct binding
  //             { stroke: null }
  //           ),
  //           $(
  //             go.TextBlock,
  //             { margin: 2, font: theme.fonts.badgeFont },
  //             new go.Binding("text", "gender", genderToText),
  //             new go.Binding("stroke", "gender", genderToTextColor)
  //           )
  //         )
  //       )
  //     );

  //     const linkTemplate = $(
  //       go.Link,
  //       { routing: go.Link.Orthogonal, corner: 5 },
  //       $(go.Shape, { strokeWidth: 2, stroke: "#555" })
  //     );

  //     const diagram = $(go.Diagram, diagramRef.current, {
  //       layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
  //       "undoManager.isEnabled": true,
  //       nodeTemplate: personNodeTemplate,
  //       linkTemplate: linkTemplate,
  //     });

  //     const familyData = [
  //       {
  //         key: 1,
  //         name: "King George V",
  //         gender: "M",
  //         status: "king",
  //         born: "1865",
  //         death: "1936",
  //       },
  //       {
  //         key: 2,
  //         name: "King Edward VIII",
  //         gender: "M",
  //         status: "king",
  //         born: "1894",
  //         death: "1972",
  //         parent: 1,
  //       },
  //       {
  //         key: 3,
  //         name: "Queen Elizabeth II",
  //         gender: "F",
  //         status: "queen",
  //         born: "1926",
  //         death: "2022",
  //         parent: 1,
  //       },
  //       {
  //         key: 4,
  //         name: "King Charles III",
  //         gender: "M",
  //         status: "king",
  //         born: "1948",
  //         death: null,
  //         parent: 3,
  //       },
  //       {
  //         key: 5,
  //         name: "Prince William",
  //         gender: "M",
  //         status: "prince",
  //         born: "1982",
  //         death: null,
  //         parent: 4,
  //       },
  //       {
  //         key: 6,
  //         name: "Prince Harry",
  //         gender: "M",
  //         status: "prince",
  //         born: "1984",
  //         death: null,
  //         parent: 4,
  //       },
  //     ];

  //     diagram.model = new go.TreeModel(familyData);

  //     return () => {
  //       diagram.div = null;
  //     };
  //   }, []);

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
    // <div className=" w-full  h-screen  bg-[#131722] shadow-md flex flex-col items-center justify-center  min-h-screen p-4">
    //   <h1 className="text-3xl font-bold mb-4 text-gray-800">
    //     Tech Stack Diagram
    //   </h1>
    //   <div
    //     ref={diagramRef}
    //     className=" w-full  h-screen  bg-[#131722]  shadow-md mb-4"
    //   ></div>
    //   {selectedNode && (
    //     <div className="w-full max-w-4xl p-4  shadow-md rounded-lg">
    //       <h2 className="text-2xl font-bold text-gray-800 mb-2">
    //         {selectedNode.key}
    //       </h2>
    //       <p className="text-gray-700">
    //         Quick information about {selectedNode.key}...
    //       </p>
    //       {/* Add more detailed information about the selected node here */}
    //     </div>
    //   )}
    // </div>

    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-[#131722] dark:border-[#24283b]">
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
                  <IconSearch />
                </div>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
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
        <div className="px-8 pt-4">
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="../templates/admin/index.html"
            aria-label="Preline"
          >
            iuyxs
            {/* Add logo or text here */}
          </a>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                href="#"
              >
                Dashboard
              </a>
            </li>

            <li className="hs-accordion" id="users-accordion">
              <button
                type="button"
                className="hs-accordion-toggle flex items-center w-full py-2 px-2.5 gap-x-3.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
              >
                Users
                <IconChevronDown className="hs-accordion-active:hidden block" />
                <IconChevronUp className="hs-accordion-active:block hidden" />
              </button>

              <div
                id="users-accordion-content"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              >
                <ul className="pt-2 pl-2">
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href="#"
                    >
                      List users
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Add user
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
        className="lg:ps-72 dark:bg-[#161a27] h-screen"
      >
        <div className="lg:px-6 py-8">
          <div className="mx-auto">
            <h1 className="text-xl font-bold sm:text-2xl dark:text-white">
              Dashboard
            </h1>

            <nav className="hs-accordion-group hs-accordion-group-active:shadow-md space-y-4"></nav>
          </div>
        </div>
      </main>
    </>
  );
}
