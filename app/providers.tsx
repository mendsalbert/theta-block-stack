// components/providers.tsx
"use client";
import { defineChain } from "viem";

import { PrivyProvider } from "@privy-io/react-auth";

export const thetaTestnet = {
  id: 365,
  name: "Theta ",
  network: "Theta Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Theta Testnet",
    symbol: "TFUEL",
  },
  rpcUrls: {
    default: {
      http: ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Theta Explorer",
      url: "https://testnet-explorer.thetatoken.org/",
    },
  },
  testnet: true,
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="clybdyt6v006zl8i34zssk10v"
      config={{
        appearance: {
          theme: "dark",
          logo: "https://i.ibb.co/KG2mQdD/icon.png",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        defaultChain: thetaTestnet,
        supportedChains: [thetaTestnet],
      }}
    >
      {children}
    </PrivyProvider>
  );
}
