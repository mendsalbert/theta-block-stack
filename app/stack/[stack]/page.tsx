"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import Main from "@/components/dashboard/main";
import { v4 as uuidv4 } from "uuid";

import OpenAI from "openai";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

export default function Home({ params }: { params: { stack: any } }) {
  const [nodeDataArray, setNodeDataArray] = useState([]);
  const [linkDataArray, setLinkDataArray] = useState([]);
  const [loading, setloading] = useState(false);
  const [decodedParam, setdecodedParam] = useState("");

  const generateStack = async () => {
    setloading(true);
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
            I want to create a visual representation of the tech stack for an application built on the Theta Network named:${params.stack}. The tech stack should include frontend, backend, blockchain, and additional relevant features. Here is an example structure for the arrays:
        note and listen carefully , not every app is a video app so adjust accordinly 
        javascript
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
        Please generate the arrays above for an application on the Theta Network using the provided structure, but tailored to the specific functionalities and technologies required. Include a detailed description for each element in nodeDataArray, and ensure the linkDataArray establishes logical connections between the different components.
        please always and always let your response be the arrays, no bullshit or no addition information okay
        Provide only the raw JavaScript code without any surrounding markdown code block syntax.
        `,
          },
        ],
        model: "gpt-4o",
      });

      const res = chatCompletion.choices[0].message.content;
      console.log(res);
      const extractData = new Function(
        res + " return { nodeDataArray, linkDataArray };"
      );

      const { nodeDataArray, linkDataArray } = extractData();
      const decodedString = decodeURIComponent(params.stack);
      const historyId = uuidv4();
      const newEntry = {
        id: historyId,
        timestamp: new Date().toISOString(),
        nodeDataArray,
        linkDataArray,
        searchQuery: decodedString,
      };

      console.log(decodedString);

      const history = JSON.parse(
        localStorage.getItem("techStackHistory") || "[]"
      );
      history.push(newEntry);
      localStorage.setItem("techStackHistory", JSON.stringify(history));

      setNodeDataArray(nodeDataArray);
      setLinkDataArray(linkDataArray);
      setloading(false);
    } catch (error) {
      console.error("Error generating stack:", error);
      setloading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await generateStack();
      setdecodedParam(decodedParam);
    };
    fetchData();
  }, [params.stack]);

  return (
    <div className="bg-[#161a27] min-h-screen w-full">
      <Header />
      <Sidebar />

      <Main
        nodeDataArray={nodeDataArray}
        linkDataArray={linkDataArray}
        title={
          loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            decodeURIComponent(params.stack)
          )
        }
      />
    </div>
  );
}
