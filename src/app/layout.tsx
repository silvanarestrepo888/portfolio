import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./layout-fix.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Silvana Restrepo | Principal Experience Architect",
  description: "Award-winning Experience Architect with 20+ years transforming Fortune 500 digital experiences. Specializing in AI-driven platforms, wellness ecosystems, and enterprise design systems for global impact.",
  keywords: [
    "experience architect", 
    "UX design", 
    "digital transformation", 
    "Fortune 500", 
    "Globant", 
    "WEF", 
    "AI platforms",
    "wellness technology",
    "enterprise design systems",
    "Silvana Restrepo"
  ],
  authors: [{ name: "Silvana Restrepo" }],
  openGraph: {
    title: "Silvana Restrepo | Principal Experience Architect",
    description: "Award-winning Experience Architect transforming Fortune 500 digital experiences",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silvana Restrepo | Principal Experience Architect",
    description: "Award-winning Experience Architect transforming Fortune 500 digital experiences",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
