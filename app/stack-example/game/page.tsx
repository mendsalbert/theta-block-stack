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
      description: "Build dynamic and interactive UIs with React.",
      code: `
      // npm install axios web3
      import React, { useState, useEffect } from 'react';
      import axios from 'axios';
      import Web3 from 'web3';
  
      const web3 = new Web3(Web3.givenProvider);
  
      const App = () => {
        const [gameData, setGameData] = useState([]);
  
        useEffect(() => {
          fetchGameData();
        }, []);
  
        const fetchGameData = async () => {
          const response = await axios.get('/api/gameData');
          setGameData(response.data);
        };
  
        return <div>{gameData.map(game => <div key={game.id}>{game.name}</div>)}</div>;
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
      // npm install axios express
      const express = require('express');
      const axios = require('axios');
  
      const app = express();
      app.use(express.json());
  
      app.get('/api/gameData', async (req, res) => {
        const response = await axios.get('https://api.thetagaming.com/api/v2/gameData');
        res.json(response.data);
      });
  
      app.listen(3000, () => console.log('Server running on port 3000'));
      `,
      icon: "/images/icons/brand-nodejs.svg",
    },
    {
      key: "Blockchain (Solidity)",
      title: "Blockchain (Solidity)",
      description: "Write smart contracts and DApps using Solidity.",
      code: `
      // npm install @openzeppelin/contracts
      pragma solidity ^0.8.0;
  
      import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
      import "@openzeppelin/contracts/access/Ownable.sol";
  
      contract GameAsset is ERC721, Ownable {
        uint256 public assetCounter;
        constructor() ERC721("GameAsset", "GASSET") { assetCounter = 0; }
  
        function createAsset(string memory tokenURI) public onlyOwner returns (uint256) {
          uint256 newItemId = assetCounter;
          _safeMint(msg.sender, newItemId);
          _setTokenURI(newItemId, tokenURI);
          assetCounter++;
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
        const msg = \`Theta Game App Call \${Date.now()}\`;
        const signature = await web3.eth.personal.sign(msg, address);
        return \`\${Date.now()}.\${address}.\${signature}\`;
      };
  
      export default authenticate;
      `,
      icon: "/images/icons/auth-2fa.svg",
    },
    {
      key: "Storage (Theta EdgeStore)",
      title: "Storage (Theta EdgeStore)",
      description: "Store and retrieve game assets using Theta EdgeStore.",
      code: `
      const uploadData = async (file, authToken) => {
        const formData = new FormData();
        formData.append('file', file);
  
        const response = await fetch('https://api.thetaedgestore.com/api/v2/data', {
          method: 'POST',
          headers: { 'x-theta-edgestore-auth': authToken },
          body: formData,
        });
        return response.json();
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
      metadata: { name: game-app }
      spec: {
        replicas: 3,
        selector: { matchLabels: { app: game-app } },
        template: {
          metadata: { labels: { app: game-app } },
          spec: {
            containers: [{ name: game-app, image: 'your-docker-image', ports: [{ containerPort: 3000 }] }]
          }
        }
      }
      `,
      icon: "/images/icons/brand-docker.svg",
    },
    {
      key: "Game Engine (Unity)",
      title: "Game Engine (Unity)",
      description: "Develop and run your game with Unity.",
      code: `
      using UnityEngine;
  
      public class GameController : MonoBehaviour {
        void Start() {
          Debug.Log("Game Started");
        }
      }
      `,
      icon: "/images/icons/brand-unity.svg",
    },
    {
      key: "Game Library (Phaser)",
      title: "Game Library (Phaser)",
      description: "Create browser-based games using Phaser.",
      code: `
      // npm install phaser
      import Phaser from 'phaser';
  
      const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: { preload, create }
      };
  
      function preload() { this.load.image('sky', 'assets/sky.png'); }
      function create() { this.add.image(400, 300, 'sky'); }
  
      const game = new Phaser.Game(config);
      `,
      icon: "/images/icons/device-gamepad-2.svg",
    },
    {
      key: "Hosting (AWS)",
      title: "Hosting (AWS)",
      description: "Host your game application on AWS.",
      code: `
      // AWS CLI
      aws s3 cp ./build s3://your-bucket-name --recursive
  
      // Serverless Deployment
      service: game-app
      provider:
        name: aws
        runtime: nodejs14.x
      functions:
        app:
          handler: handler.app
          events:
            - http: GET /
      `,
      icon: "/images/icons/brand-aws.svg",
    },
    {
      key: "Database (MongoDB)",
      title: "Database (MongoDB)",
      description: "Store game data using MongoDB.",
      code: `
      // npm install mongoose
      const mongoose = require('mongoose');
  
      mongoose.connect('mongodb://localhost:27017/gameapp', { useNewUrlParser: true, useUnifiedTopology: true });
  
      const gameSchema = new mongoose.Schema({ name: String, description: String });
      const Game = mongoose.model('Game', gameSchema);
  
      module.exports = Game;
      `,
      icon: "/images/icons/brand-mongodb.svg",
    },
  ];

  const linkDataArray = [
    { from: "Frontend (React)", to: "Backend (Node.js)" },
    { from: "Backend (Node.js)", to: "Blockchain (Solidity)" },
    { from: "Backend (Node.js)", to: "Storage (Theta EdgeStore)" },
    { from: "Frontend (React)", to: "Authentication (Web3Auth)" },
    { from: "Backend (Node.js)", to: "Deployment (Docker & Kubernetes)" },
    { from: "Game Engine (Unity)", to: "Game Library (Phaser)" },
    { from: "Backend (Node.js)", to: "Hosting (AWS)" },
    { from: "Backend (Node.js)", to: "Database (MongoDB)" },
  ];

  return (
    <div className="bg-[#161a27] min-h-screen w-full">
      <Header />
      <Sidebar />
      <Main
        nodeDataArray={nodeDataArray}
        linkDataArray={linkDataArray}
        title={"Theta AI App Tech Stack"}
      />
    </div>
  );
}
