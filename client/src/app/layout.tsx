import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Navigation, Footer } from "../components";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by Đ2T",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full w-full flex flex-col">
        <div className="h-[64px] w-full">
          <Navigation />
        </div>
        <div className="p-5 min-h-[805px]">{children}</div>
        <div className="h-[64px] w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
