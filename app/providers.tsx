// components/providers.tsx
"use client";

import { PrivyProvider } from "@privy-io/react-auth";

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
      }}
    >
      {children}
    </PrivyProvider>
  );
}
