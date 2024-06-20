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
          // npm install axios
      
          import React, { useState, useEffect } from 'react';
          import axios from 'axios';
      
          const apiUrl = '{MODEL_ENDPOINT}/v1/chat/completions';
      
          const Chatbot = () => {
            const [messages, setMessages] = useState([]);
            const [input, setInput] = useState('');
      
            const sendMessage = async () => {
              const newMessage = { role: 'user', content: input };
              setMessages([...messages, newMessage]);
      
              try {
                const response = await axios.post(apiUrl, {
                  model: 'meta-llama/Llama-2-7b-chat-hf',
                  messages: [...messages, newMessage],
                  max_tokens: 100
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
                    'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                  }
                });
      
                const botMessage = response.data.choices[0].message;
                setMessages([...messages, newMessage, botMessage]);
              } catch (error) {
                console.error('There was an error sending the message!', error);
              }
      
              setInput('');
            };
      
            return (
              <div className="chat-container">
                <h1>Chatbot Agent</h1>
                <div className="messages">
                  {messages.map((msg, index) => (
                    <div key={index} className={msg.role}>
                      <strong>{msg.role}:</strong> {msg.content}
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            );
          };
      
          export default Chatbot;
          `,
      icon: "/images/icons/brand-react.svg",
    },
    {
      key: "State Management (Redux)",
      title: "State Management (Redux)",
      description: "Manage the state of your application using Redux.",
      code: `
          // Installation
          // npm install @reduxjs/toolkit react-redux
      
          import { configureStore } from '@reduxjs/toolkit';
          import { Provider } from 'react-redux';
          import rootReducer from './reducers';
      
          const store = configureStore({
            reducer: rootReducer
          });
      
          const App = () => (
            <Provider store={store}>
              {/* Your app components */}
            </Provider>
          );
      
          export default App;
          `,
      icon: "/images/icons/brand-redux.svg",
    },
    {
      key: "Styling (Tailwind CSS)",
      title: "Styling (Tailwind CSS)",
      description: "Style your application using Tailwind CSS.",
      code: `
          // Installation
          // npm install tailwindcss
      
          // Add the Tailwind directives to your CSS
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
      
          // Include the Tailwind CSS file in your project
          import './styles/tailwind.css';
          `,
      icon: "/images/icons/brand-tailwind.svg",
    },
    {
      key: "Backend (Node.js)",
      title: "Backend (Node.js)",
      description: "Develop scalable server-side applications using Node.js.",
      code: `
          // Installation
          // npm install axios express
      
          const express = require('express');
          const axios = require('axios');
      
          const app = express();
          app.use(express.json());
      
          const apiUrl = '{MODEL_ENDPOINT}/v1/chat/completions';
      
          app.post('/chat', async (req, res) => {
            const { messages } = req.body;
      
            try {
              const response = await axios.post(apiUrl, {
                model: 'meta-llama/Llama-2-7b-chat-hf',
                messages,
                max_tokens: 100
              }, {
                headers: {
                  'Content-Type': 'application/json',
                  'x-tva-sa-id': 'srvacc_xxxxxxxxxxxxxxxxxxxxxxxxx',
                  'x-tva-sa-secret': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                }
              });
      
              res.json(response.data);
            } catch (error) {
              console.error('There was an error processing the request!', error);
              res.status(500).send('Error processing the request');
            }
          });
      
          const PORT = process.env.PORT || 3000;
          app.listen(PORT, () => {
            console.log(\`Server is running on port \${PORT}\`);
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
      key: "AI Model Deployment",
      title: "AI Model Deployment",
      description: "Deploy AI models on Theta EdgeCloud.",
      code: `
          // Use the Model Explorer page to deploy models.
          // Here is an example of deploying a Gemma 2B model using Theta EdgeCloud:
      
          // 1. Navigate to the Model Explorer page and select the Gemma 2B template.
          // 2. Configure the deployment settings, providing your HuggingFace key if needed.
          // 3. Click "Create New Deployment" to deploy the model.
          `,
      icon: "/images/logo/icon.svg",
    },
    {
      key: "Database (MongoDB)",
      title: "Database (MongoDB)",
      description: "Store chatbot conversation logs using MongoDB.",
      code: `
          // Installation
          // npm install mongoose
      
          const mongoose = require('mongoose');
      
          const messageSchema = new mongoose.Schema({
            role: String,
            content: String,
            timestamp: { type: Date, default: Date.now }
          });
      
          const Message = mongoose.model('Message', messageSchema);
      
          mongoose.connect('mongodb://localhost:27017/chatbot', { useNewUrlParser: true, useUnifiedTopology: true });
      
          module.exports = Message;
          `,
      icon: "/images/icons/brand-mongodb.svg",
    },
    {
      key: "Authentication (Web3Auth)",
      title: "Authentication (Web3Auth)",
      description: "Secure your application with Web3Auth.",
      code: `
          // Installation
          // npm install @web3auth/web3auth
      
          import { Web3Auth } from "@web3auth/web3auth";
          import { CHAIN_NAMESPACES } from "@web3auth/base";
          import Web3 from "web3";
      
          const clientId = "YOUR_WEB3AUTH_CLIENT_ID"; // get from Web3Auth dashboard
      
          const web3auth = new Web3Auth({
            clientId,
            chainConfig: {
              chainNamespace: CHAIN_NAMESPACES.EIP155,
              chainId: "0x1", // Mainnet
            },
          });
      
          const initWeb3Auth = async () => {
            await web3auth.initModal();
          };
      
          const login = async () => {
            const provider = await web3auth.connect();
            const web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
          };
      
          export { initWeb3Auth, login };
          `,
      icon: "/images/icons/auth-2fa.svg",
    },
    {
      key: "Testing (Jest & React Testing Library)",
      title: "Testing (Jest & React Testing Library)",
      description:
        "Ensure the quality of your code with Jest and React Testing Library.",
      code: `
          // Installation
          // npm install jest @testing-library/react @testing-library/jest-dom
      
          // Example test
          import { render, screen } from '@testing-library/react';
          import '@testing-library/jest-dom/extend-expect';
          import Chatbot from './Chatbot';
      
          test('renders chatbot component', () => {
            render(<Chatbot />);
            const linkElement = screen.getByText(/Chatbot Agent/i);
            expect(linkElement).toBeInTheDocument();
          });
          `,
      icon: "/images/icons/test-pipe.svg",
    },
    {
      key: "CI/CD (GitHub Actions)",
      title: "CI/CD (GitHub Actions)",
      description:
        "Automate your build, test, and deployment processes with GitHub Actions.",
      code: `
          // Example GitHub Actions workflow file (.github/workflows/ci.yml)
          name: CI
      
          on: [push, pull_request]
      
          jobs:
            build:
              runs-on: ubuntu-latest
      
              steps:
              - uses: actions/checkout@v2
              - name: Set up Node.js
                uses: actions/setup-node@v2
                with:
                  node-version: '14'
              - name: Install dependencies
                run: npm install
              - name: Run tests
                run: npm test
          `,
      icon: "/images/icons/brand-github.svg",
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
      
          // Kubernetes deployment file (deployment.yml)
          apiVersion: apps/v1
          kind: Deployment
          metadata:
            name: chatbot
          spec:
            replicas: 3
            selector:
              matchLabels:
                app: chatbot
            template:
              metadata:
                labels:
                  app: chatbot
              spec:
                containers:
                - name: chatbot
                  image: your-docker-image
                  ports:
                  - containerPort: 3000
          `,
      icon: "/images/icons/brand-docker.svg",
    },
    {
      key: "Monitoring (Prometheus & Grafana)",
      title: "Monitoring (Prometheus & Grafana)",
      description:
        "Monitor the performance and health of your application using Prometheus and Grafana.",
      code: `
          // Prometheus configuration (prometheus.yml)
          global:
            scrape_interval: 15s
      
          scrape_configs:
            - job_name: 'chatbot'
              static_configs:
                - targets: ['localhost:9090']
      
          // Grafana configuration (grafana.ini)
          [server]
          http_addr = 0.0.0.0
          http_port = 3000
          `,
      icon: "/images/icons/prometheus-grafana.svg",
    },
    {
      key: "Logging (Winston)",
      title: "Logging (Winston)",
      description: "Implement logging for your application using Winston.",
      code: `
          // Installation
          // npm install winston
      
          const { createLogger, format, transports } = require('winston');
      
          const logger = createLogger({
            level: 'info',
            format: format.combine(
              format.timestamp(),
              format.json()
            ),
            transports: [
              new transports.File({ filename: 'error.log', level: 'error' }),
              new transports.File({ filename: 'combined.log' })
            ]
          });
      
          module.exports = logger;
          `,
      icon: "/images/icons/winston.svg",
    },
    {
      key: "Error Tracking (Sentry)",
      title: "Error Tracking (Sentry)",
      description: "Track and resolve errors in your application using Sentry.",
      code: `
          // Installation
          // npm install @sentry/node
      
          const Sentry = require("@sentry/node");
      
          Sentry.init({
            dsn: "https://your-dsn@sentry.io/your-project-id",
          });
      
          // Capture an exception
          Sentry.captureException(new Error("Something went wrong"));
          `,
      icon: "/images/icons/brand-sentry.svg",
    },
    {
      key: "API Documentation (Swagger)",
      title: "API Documentation (Swagger)",
      description: "Document your API using Swagger.",
      code: `
          // Installation
          // npm install swagger-ui-express swagger-jsdoc
      
          const swaggerUi = require('swagger-ui-express');
          const swaggerJsdoc = require('swagger-jsdoc');
      
          const options = {
            definition: {
              openapi: '3.0.0',
              info: {
                title: 'Chatbot API',
                version: '1.0.0',
              },
            },
            apis: ['./routes/*.js'], // files containing annotations as above
          };
      
          const swaggerSpec = swaggerJsdoc(options);
      
          app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
          `,
      icon: "/images/icons/api.svg",
    },
  ];

  const linkDataArray = [
    { from: "Frontend (React)", to: "State Management (Redux)" },
    { from: "Frontend (React)", to: "Styling (Tailwind CSS)" },
    { from: "Frontend (React)", to: "Authentication (Web3Auth)" },
    { from: "Frontend (React)", to: "Testing (Jest & React Testing Library)" },
    { from: "Backend (Node.js)", to: "Blockchain (Solidity)" },
    { from: "Backend (Node.js)", to: "AI Model Deployment" },
    { from: "Backend (Node.js)", to: "Database (MongoDB)" },
    { from: "Backend (Node.js)", to: "Logging (Winston)" },
    { from: "Backend (Node.js)", to: "Error Tracking (Sentry)" },
    {
      from: "CI/CD (GitHub Actions)",
      to: "Testing (Jest & React Testing Library)",
    },
    { from: "CI/CD (GitHub Actions)", to: "Deployment (Docker & Kubernetes)" },
    {
      from: "Deployment (Docker & Kubernetes)",
      to: "Monitoring (Prometheus & Grafana)",
    },
    { from: "Monitoring (Prometheus & Grafana)", to: "Logging (Winston)" },
    { from: "Logging (Winston)", to: "Error Tracking (Sentry)" },
    { from: "API Documentation (Swagger)", to: "Backend (Node.js)" },
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
