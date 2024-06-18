import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BaselimeRum } from "@baselime/react-rum";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <script src="./node_modules/preline/dist/preline.js"></script>

      <body className={inter.className}>
        <BaselimeRum
          apiKey={process.env.NEXT_PUBLIC_BASELIME_API_KEY as string}
          enableWebVitals
          fallback={<h1>An error occured</h1>}
        >
          {children}
        </BaselimeRum>
      </body>
    </html>
  );
}
