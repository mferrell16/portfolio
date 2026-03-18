import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const poppins: NextFontWithVariable = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Makayla Decoded",
  description: "Software Engineer turned Ethical Hacker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="max-w-5xl mx-auto flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
