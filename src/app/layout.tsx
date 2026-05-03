"use client";

// import type { Metadata } from "next";
import { ErrorBoundary } from "react-error-boundary";

import "./globals.css";
import axios from "axios";
import { signin } from "./(auth)/sign-in/actions";
import useAppStore from "@/lib/useAppStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "OliviaHealth - Kids",
//   description: "Web-based learning model of HIPPY summer curriculum",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const setUser = useAppStore(state => state.setUser);

  const autoDemoSignin = async () => {
    const email = process.env.NEXT_PUBLIC_DEMO_EMAIL!;
    const password = process.env.NEXT_PUBLIC_DEMO_PASSWORD!;

    const { user } = await signin({ email, password });

    if (user) {
      setUser(user);
    }

    router.push("/home")
  }

  useEffect(() => {
    autoDemoSignin();
  }, [])

  return (
    <html lang="en" className="h-full">
      <body className="w-full h-full flex flex-col justify-between font-OpenSans">
        <main className="flex-grow">
          <ErrorBoundary fallback={<div className="w-full h-full flex justify-center items-center">Something went wrong</div>}>
            {children}
          </ErrorBoundary>
        </main>
      </body>
    </html>
  );
}