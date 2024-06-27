import type { Metadata } from "next";

import localFont from 'next/font/local';
import { Candal } from 'next/font/google'

import "./globals.css";

import Footer from "@/components/Footer";

const candal = Candal({
  weight: "400",
  variable: '--font-candal',
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "OliviaHealth - Kids",
  description: "Web-based learning model of HIPPY summer curriculum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="w-full h-full flex flex-col justify-between font-OpenSans">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
