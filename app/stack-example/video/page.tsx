"use client";
import React from "react";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import Main from "@/components/dashboard/main";

export default function Home() {
  // const nodeDataArray = [
  //   {
  //     key: "Frontend (React)",
  //     title: "Frontend (React)",
  //     description: "Build dynamic UIs with React.",
  //     icon: "/images/icons/brand-react.svg",
  //   },
  //   {
  //     key: "Backend (Node.js)",
  //     title: "Backend (Node.js)",
  //     description: "Develop scalable server-side applications using Node.js.",
  //     icon: "/images/icons/brand-nodejs.svg",
  //   },
  //   {
  //     key: "Blockchain (Solidity)",
  //     title: "Blockchain (Solidity)",
  //     description: "Write smart contracts and DApps using Solidity.",
  //     icon: "/images/icons/currency-ethereum.svg",
  //   },
  //   {
  //     key: "Video Services",
  //     title: "Video Services",
  //     description: "Implement video streaming and services with Theta.",
  //     icon: "/images/logo/icon.svg",
  //   },
  //   {
  //     key: "Video Upload",
  //     parent: "Video Services",
  //     title: "Video Upload",
  //     description: "Manage and upload videos to Theta network.",
  //     icon: "/images/logo/icon.svg",
  //   },
  //   {
  //     key: "Video Transcoding",
  //     parent: "Video Services",
  //     title: "Video Transcoding",
  //     description: "Transcode videos for different formats using Theta.",
  //     icon: "/images/logo/icon.svg",
  //   },
  //   {
  //     key: "Video Playback",
  //     parent: "Video Services",
  //     title: "Video Playback",
  //     description: "Stream videos with efficient playback on Theta.",
  //     icon: "/images/logo/icon.svg",
  //   },
  //   {
  //     key: "Theta P2P Video Delivery",
  //     parent: "Video Services",
  //     title: "Theta P2P Video Delivery",
  //     description: "Enable P2P video delivery with Theta network.",
  //     icon: "/images/logo/icon.svg",
  //   },
  // ];

  // const linkDataArray = [
  //   { from: "Frontend (React)", to: "Backend (Node.js)" },
  //   { from: "Backend (Node.js)", to: "Blockchain (Solidity)" },
  //   { from: "Backend (Node.js)", to: "Video Services" },
  //   { from: "Video Services", to: "Video Upload" },
  //   { from: "Video Services", to: "Video Transcoding" },
  //   { from: "Video Services", to: "Video Playback" },
  //   { from: "Video Services", to: "Theta P2P Video Delivery" },
  //   { from: "Video Upload", to: "Sign Up for Theta Developer Account" },
  //   { from: "Video Upload", to: "Create and Configure Your Application" },
  //   { from: "Video Upload", to: "Generate API Keys" },
  //   { from: "Video Upload", to: "Upload Video via API" },
  //   { from: "Video Transcoding", to: "Transcode Video" },
  //   { from: "Video Playback", to: "Retrieve Playback URL" },
  //   { from: "Theta P2P Video Delivery", to: "Enable P2P Video Delivery" },
  // ];

  const nodeDataArray = [
    {
      key: "Frontend (React)",
      title: "Frontend (React)",
      description: "Build dynamic UIs with React.",
      code: `
      // Installation
      // npm install axios
  
      import React, { useState, useEffect } from 'react';
      import axios from 'axios';
  
      const apiUrl = 'https://api.thetavideoapi.com/video/video_vvvvvvvvvvvvvvvvvvvvvvvvvv';
  
      const App = () => {
        const [videoDetails, setVideoDetails] = useState(null);
  
        useEffect(() => {
          axios.get(apiUrl, {
            headers: {
              'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
              'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            }
          })
          .then(response => {
            setVideoDetails(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the video details!', error);
          });
        }, []);
  
        return (
          <div>
            <h1>Video Details</h1>
            {videoDetails && (
              <pre>{JSON.stringify(videoDetails, null, 2)}</pre>
            )}
          </div>
        );
      };
  
      export default App;
      `,
      icon: "/images/icons/brand-react.svg",
    },
    {
      key: "Backend (Node.js)",
      title: "Backend (Node.js)",
      description: "Develop scalable server-side applications using Node.js.",
      code: `
      // Installation
      // npm install axios
  
      const axios = require('axios');
  
      const apiUrl = 'https://api.thetavideoapi.com/video/video_vvvvvvvvvvvvvvvvvvvvvvvvvv';
  
      axios.get(apiUrl, {
        headers: {
          'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
          'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the video details!', error);
      });
      `,
      icon: "/images/icons/brand-nodejs.svg",
    },
    {
      key: "Blockchain (Solidity)",
      title: "Blockchain (Solidity)",
      description: "Write smart contracts and DApps using Solidity.",
      code: `
      // Installation
      // npm install @openzeppelin/contracts
  
      pragma solidity ^0.8.0;
  
      import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
  
      contract MyToken is ERC20 {
          constructor() ERC20("MyToken", "MTK") {
              _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
          }
      }
      `,
      icon: "/images/icons/currency-ethereum.svg",
    },
    {
      key: "Video Services",
      title: "Video Services",
      description: "Implement video streaming and services with Theta.",
      code: `
      const axios = require('axios');
  
      const createUploadUrl = () => {
        axios.post('https://api.thetavideoapi.com/upload', {}, {
          headers: {
            'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('There was an error creating the upload URL!', error);
        });
      };
  
      createUploadUrl();
      `,
      icon: "/images/logo/icon.svg",
    },
    {
      key: "Video Upload",
      parent: "Video Services",
      title: "Video Upload",
      description: "Manage and upload videos to Theta network.",
      code: `
      const axios = require('axios');
      const fs = require('fs');
  
      const uploadVideo = (filePath, uploadUrl) => {
        fs.readFile(filePath, (err, data) => {
          if (err) throw err;
          axios.put(uploadUrl, data, {
            headers: {
              'Content-Type': 'application/octet-stream'
            }
          })
          .then(response => {
            console.log('Video uploaded successfully:', response.data);
          })
          .catch(error => {
            console.error('There was an error uploading the video!', error);
          });
        });
      };
  
      const createUploadUrl = () => {
        axios.post('https://api.thetavideoapi.com/upload', {}, {
          headers: {
            'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
          }
        })
        .then(response => {
          const uploadUrl = response.data.body.uploads[0].presigned_url;
          uploadVideo('path/to/your/video.mp4', uploadUrl);
        })
        .catch(error => {
          console.error('There was an error creating the upload URL!', error);
        });
      };
  
      createUploadUrl();
      `,
      icon: "/images/logo/icon.svg",
    },
    {
      key: "Video Transcoding",
      parent: "Video Services",
      title: "Video Transcoding",
      description: "Transcode videos for different formats using Theta.",
      code: `
      const axios = require('axios');
  
      const transcodeVideo = (uploadId) => {
        axios.post('https://api.thetavideoapi.com/video', {
          source_upload_id: uploadId,
          playback_policy: 'public'
        }, {
          headers: {
            'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log('Video transcoded successfully:', response.data);
        })
        .catch(error => {
          console.error('There was an error transcoding the video!', error);
        });
      };
  
      transcodeVideo('upload_zzzzzzzzzzzzzzzzzzzzzzzzz');
      `,
      icon: "/images/logo/icon.svg",
    },
    {
      key: "Video Playback",
      parent: "Video Services",
      title: "Video Playback",
      description: "Stream videos with efficient playback on Theta.",
      code: `
      const axios = require('axios');
  
      const getVideoDetails = (videoId) => {
        axios.get(\`https://api.thetavideoapi.com/video/\${videoId}\`, {
          headers: {
            'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
          }
        })
        .then(response => {
          console.log('Video details:', response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the video details!', error);
        });
      };
  
      getVideoDetails('video_vvvvvvvvvvvvvvvvvvvvvvvvvv');
      `,
      icon: "/images/logo/icon.svg",
    },
    {
      key: "Theta P2P Video Delivery",
      parent: "Video Services",
      title: "Theta P2P Video Delivery",
      description: "Enable P2P video delivery with Theta network.",
      code: `
      const axios = require('axios');
  
      const enableP2PVideoDelivery = (videoId) => {
        axios.put(\`https://api.thetavideoapi.com/video/\${videoId}/enable_p2p\`, {}, {
          headers: {
            'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log('P2P video delivery enabled:', response.data);
        })
        .catch(error => {
          console.error('There was an error enabling P2P video delivery!', error);
        });
      };
  
      enableP2PVideoDelivery('video_vvvvvvvvvvvvvvvvvvvvvvvvvv');
      `,
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
  ];

  return (
    <div className="bg-[#161a27] min-h-screen w-full">
      <Header />
      <Sidebar />
      <Main
        nodeDataArray={nodeDataArray}
        linkDataArray={linkDataArray}
        title={"Theta Video App Tech Stack"}
      />
    </div>
  );
}
