import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Persistent Stopwatch",
  description: "A stopwatch that keeps running even when your browser closes.",
  openGraph: {
    title: "Persistent Stopwatch",
    description:
      "A stopwatch that keeps running even when your browser closes.",
    type: "website",
    siteName: "Persistent Stopwatch",
  },
  twitter: {
    card: "summary",
    title: "Persistent Stopwatch",
    description:
      "A stopwatch that keeps running even when your browser closes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
