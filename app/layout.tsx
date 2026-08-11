import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noor Nabi — Cloud & Backend Engineer",
  description:
    "Backend and cloud engineer building serverless APIs, AWS infrastructure, and AI-powered systems. Available for remote work.",
  openGraph: {
    title: "Noor Nabi — Cloud & Backend Engineer",
    description:
      "Backend and cloud engineer building serverless APIs, AWS infrastructure, and AI-powered systems. Available for remote work.",
    url: "https://noornabi.pro",
    siteName: "Noor Nabi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Nabi — Cloud & Backend Engineer",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
