import type { Metadata } from "next";
import { Syne, Instrument_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor Nabi — Cloud Engineer & Backend Developer",
  description:
    "Backend and cloud engineer building serverless APIs, AWS infrastructure, and AI-powered systems. Available for remote work.",
  openGraph: {
    title: "Noor Nabi — Cloud Engineer & Backend Developer",
    description:
      "Backend and cloud engineer building serverless APIs, AWS infrastructure, and AI-powered systems. Available for remote work.",
    url: "https://noornabi.pro",
    siteName: "Noor Nabi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Nabi — Cloud Engineer & Backend Developer",
    description:
      "Backend and cloud engineer building serverless APIs, AWS infrastructure, and AI-powered systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${instrumentSans.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
