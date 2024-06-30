"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import Main from "@/components/dashboard/main";

export default function Home() {
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
      description: "Develop scalable server-side applications using Node.js.",
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

  return (
    <div className="bg-[#161a27] min-h-screen w-full">
      <Header />
      <Sidebar />
      <Main
        nodeDataArray={nodeDataArray}
        linkDataArray={linkDataArray}
        title={"title"}
      />
    </div>
  );
}
