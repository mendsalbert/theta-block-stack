"use client";
import React, { useEffect, useRef, useState } from "react";
import * as go from "gojs";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import Main from "@/components/dashboard/main";
import Modal from "@/components/ui/modal";
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
        <Modal setIsModalOpen={setIsModalOpen} selectedNode={selectedNode} />
      )}

      <Header />
      <Sidebar />
      <Main diagramRef={diagramRef} />
    </div>
  );
}
