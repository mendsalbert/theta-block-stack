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
      code: `
      // Installation
      // npm install axios web3
  
      import React, { useState, useEffect } from 'react';
      import axios from 'axios';
      import Web3 from 'web3';
  
      const web3 = new Web3(Web3.givenProvider);
  
      const App = () => {
        const [nfts, setNfts] = useState([]);
        const [authToken, setAuthToken] = useState('');
  
        useEffect(() => {
          fetchNFTs();
        }, []);
  
        const fetchNFTs = async () => {
          try {
            const response = await axios.get('/api/nfts');
            setNfts(response.data);
          } catch (error) {
            console.error('Error fetching NFTs:', error);
          }
        };
  
        const generateAuthToken = async () => {
          const accounts = await web3.eth.requestAccounts();
          const address = accounts[0];
          const timestamp = Date.now().toString();
          const msg = \`Theta NFT App Call \${timestamp}\`;
          const signature = await web3.eth.personal.sign(msg, address);
          setAuthToken(\`\${timestamp}.\${address}.\${signature}\`);
        };
  
        return (
          <div>
            <h1>Theta NFT Marketplace</h1>
            <button onClick={generateAuthToken}>Generate Auth Token</button>
            <div className="nfts">
              {nfts.map(nft => (
                <div key={nft.id} className="nft">
                  <img src={nft.image} alt={nft.name} />
                  <h2>{nft.name}</h2>
                  <p>{nft.description}</p>
                </div>
              ))}
            </div>
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
      // npm install axios express web3
  
      const express = require('express');
      const axios = require('axios');
      const Web3 = require('web3');
  
      const app = express();
      const web3 = new Web3(Web3.givenProvider);
  
      app.use(express.json());
  
      app.get('/api/nfts', async (req, res) => {
        try {
          const response = await axios.get('https://api.thetaedgestore.com/api/v2/nfts');
          res.json(response.data);
        } catch (error) {
          console.error('Error fetching NFTs:', error);
          res.status(500).send('Error fetching NFTs');
        }
      });
  
      app.post('/api/mint', async (req, res) => {
        const { metadata, address, signature, timestamp } = req.body;
        const authToken = \`\${timestamp}.\${address}.\${signature}\`;
  
        try {
          const response = await axios.post('https://api.thetaedgestore.com/api/v2/mint', { metadata }, {
            headers: {
              'x-theta-edgestore-auth': authToken,
            },
          });
  
          res.json(response.data);
        } catch (error) {
          console.error('Error minting NFT:', error);
          res.status(500).send('Error minting NFT');
        }
      });
  
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
        console.log(\`Server running on port \${PORT}\`);
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
  
      import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
      import "@openzeppelin/contracts/access/Ownable.sol";
  
      contract MyNFT is ERC721, Ownable {
        uint256 public tokenCounter;
  
        constructor() ERC721("MyNFT", "MNFT") {
          tokenCounter = 0;
        }
  
        function createNFT(string memory tokenURI) public onlyOwner returns (uint256) {
          uint256 newItemId = tokenCounter;
          _safeMint(msg.sender, newItemId);
          _setTokenURI(newItemId, tokenURI);
          tokenCounter++;
          return newItemId;
        }
      }
      `,
      icon: "/images/icons/currency-ethereum.svg",
    },
    {
      key: "Authentication (Web3Auth)",
      title: "Authentication (Web3Auth)",
      description: "Secure your application with Web3Auth.",
      code: `
      import Web3 from 'web3';
  
      const web3 = new Web3(Web3.givenProvider);
  
      const authenticate = async () => {
        const accounts = await web3.eth.requestAccounts();
        const address = accounts[0];
        const timestamp = Date.now().toString();
        const msg = \`Theta NFT App Call \${timestamp}\`;
        const signature = await web3.eth.personal.sign(msg, address);
        return \`\${timestamp}.\${address}.\${signature}\`;
      };
  
      export default authenticate;
      `,
      icon: "/images/icons/auth-2fa.svg",
    },
    {
      key: "Storage (Theta EdgeStore)",
      title: "Storage (Theta EdgeStore)",
      description: "Store and retrieve files using Theta EdgeStore.",
      code: `
      // Upload Data to Theta EdgeStore
      const uploadData = async (file, authToken) => {
        const formData = new FormData();
        formData.append('file', file);
  
        try {
          const response = await fetch('https://api.thetaedgestore.com/api/v2/data', {
            method: 'POST',
            headers: {
              'x-theta-edgestore-auth': authToken,
            },
            body: formData,
          });
          const result = await response.json();
          return result.key;
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
      `,
      icon: "/images/logo/icon.svg",
    },
    {
      key: "Deployment (Docker & Kubernetes)",
      title: "Deployment (Docker & Kubernetes)",
      description:
        "Containerize and deploy your application using Docker and Kubernetes.",
      code: `
      // Dockerfile
      FROM node:14
  
      WORKDIR /app
  
      COPY package*.json ./
      RUN npm install
  
      COPY . .
  
      EXPOSE 3000
      CMD ["npm", "start"]
  
      // Kubernetes Deployment
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: nft-app
      spec:
        replicas: 3
        selector:
          matchLabels:
            app: nft-app
        template:
          metadata:
            labels:
              app: nft-app
          spec:
            containers:
            - name: nft-app
              image: your-docker-image
              ports:
              - containerPort: 3000
      `,
      icon: "/images/icons/brand-docker.svg",
    },
  ];

  const linkDataArray = [
    { from: "Frontend (React)", to: "Backend (Node.js)" },
    { from: "Backend (Node.js)", to: "Blockchain (Solidity)" },
    { from: "Backend (Node.js)", to: "Storage (Theta EdgeStore)" },
    { from: "Frontend (React)", to: "Authentication (Web3Auth)" },
    { from: "Backend (Node.js)", to: "Deployment (Docker & Kubernetes)" },
  ];

  return (
    <div className="bg-[#161a27] min-h-screen w-full">
      <Header />
      <Sidebar />
      <Main
        nodeDataArray={nodeDataArray}
        linkDataArray={linkDataArray}
        title={"Theta NFT App Tech Stack"}
      />
    </div>
  );
}
