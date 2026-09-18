import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundDecorations from "@/shared/components/BackgroundDecoration";
import ScrollProgress from "@/shared/components/ScrollProgress";
import ScrollToTop from "@/shared/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'DSMBC 2026',
  description: 'Data Science Mini Bootcamp by BCC FILKOM UB',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <head>
        {/* Reveals are driven by JS; without it the content must still show. */}
        <noscript>
          <style>{"[data-reveal],[data-reveal-group]>*{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="relative overflow-x-hidden">
        <ScrollProgress />
        <BackgroundDecorations />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
