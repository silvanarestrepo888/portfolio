import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./layout-fix.css";
import "./enhanced-scroll-append.css";
import { TopographicBackground } from "@/components/backgrounds/TopographicBackground";
import { ChromaticIntelligence, QuantumCursor } from "@/components/ui/LandorLuxurySystem";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Silvana Restrepo | Systems Architect — AI, Venture & Agentic Design",
  description: "Systems Architect with 20+ years designing organizations where AI makes sense. Agentic systems, venture design, and experience strategy across 7 industries and 3 continents.",
  keywords: [
    "systems architect",
    "agentic systems",
    "venture design",
    "experience strategy",
    "business design",
    "AI architecture",
    "agentic AI",
    "Silvana Restrepo"
  ],
  authors: [{ name: "Silvana Restrepo" }],
  openGraph: {
    title: "Silvana Restrepo | Systems Architect — AI, Venture & Agentic Design",
    description: "Systems Architect with 20+ years designing organizations where AI makes sense. Agentic systems, venture design, and experience strategy.",
    type: "website",
    siteName: "Silvana Restrepo Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silvana Restrepo | Systems Architect — AI, Venture & Agentic Design",
    description: "Systems Architect with 20+ years designing organizations where AI makes sense.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} antialiased`}
        style={{
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        } as React.CSSProperties}
      >
        <TopographicBackground />
        <ChromaticIntelligence />
        <QuantumCursor />
        {children}
      </body>
    </html>
  );
}
