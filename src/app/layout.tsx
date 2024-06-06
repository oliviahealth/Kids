import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

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
        {/* <Navbar /> */}
  
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
