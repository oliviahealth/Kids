// import type { Metadata } from "next";
import { ErrorBoundary } from "react-error-boundary";

import "./globals.css";

// export const metadata: Metadata = {
//   title: "OliviaHealth - Kids",
//   description: "Web-based learning model of HIPPY summer curriculum",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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