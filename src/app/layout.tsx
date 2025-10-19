import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Open_Sans, Great_Vibes, Inter, JetBrains_Mono, Crimson_Pro, Work_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import "./layout-fix.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Neo-Classical Luxury Typography System
const crimsonPro = Crimson_Pro({
  variable: "--font-display-luxury",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const workSans = Work_Sans({
  variable: "--font-accent-luxury", 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body-luxury",
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
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

// Performance optimization for font loading
export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  }
}

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
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${openSans.variable} ${greatVibes.variable} ${inter.variable} ${jetbrainsMono.variable} ${crimsonPro.variable} ${workSans.variable} ${dmSans.variable} antialiased`}
        style={{
          fontDisplay: 'swap',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        {children}
      </body>
    </html>
  );
}
