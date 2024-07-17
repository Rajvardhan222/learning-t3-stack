import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Context from "./_components/Context";

export const metadata: Metadata = {
  title: "Todo",
  description: "SImple todo app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-black text-white">
        
        <Context>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        </Context>
      </body>
    </html>
  );
}
