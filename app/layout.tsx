import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import QueryProvider from "@/components/providers/QueryProvider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "esimzo — Compare & Find the Best eSIM Plans",
  description:
    "Compare 200,000+ travel eSIM plans instantly across 190+ countries. Find the best deal without overpaying. Instant activation, no hidden fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <QueryProvider>
          <NuqsAdapter>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
