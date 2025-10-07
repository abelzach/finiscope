import type { Metadata } from "next";
import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"

import "./globals.css";

export const metadata: Metadata = {
  title: "FiniScope",
  description:
    "Expert corporate finance consultancy for banks, mortgages, document approvals, and scaling businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={<div>Loading...</div>}>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </Suspense>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
