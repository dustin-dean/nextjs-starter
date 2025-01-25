import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const inter = Inter();

export const metadata: Metadata = {
  title: "DeanEHR",
  description: "DeanEHR is a modern electronic health record system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
