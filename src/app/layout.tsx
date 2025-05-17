import type { Metadata } from "next";
import { Outfit, Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientOnly from "@/components/ClientOnly";
import dynamic from 'next/dynamic';

// Dynamically import the LaunchWrapper with no SSR to ensure the date check happens client-side only
const LaunchWrapper = dynamic(() => import('@/components/LaunchWrapper'), { ssr: false });

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

// Add Inter with black weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  weight: ["400", "500", "600", "700", "900"], // Including Black (900) weight
});

// Add JetBrains Mono for navigation
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fxsion.dev'),
  title: {
    default: "Fxsion | Digital Solutions Agency",
    template: "%s | Fxsion"
  },
  description: "Fxsion specializes in workflow automation, web development, mobile apps, and document automation solutions that streamline business operations and boost productivity.",
  icons: [
    { rel: "icon", url: "/images/Fxsion.png" },
    { rel: "apple-touch-icon", url: "/images/Fxsion.png" }
  ],
  other: {
    'x-font-options': 'no-substitute'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html 
      lang="en" 
      className={`${outfit.variable} ${manrope.variable} ${inter.variable} ${jetBrainsMono.variable}`} 
      style={{fontFamily: 'var(--font-outfit), sans-serif'}}
    >
      <head>
        <meta name="x-font-options" content="no-substitute" />
        <link rel="icon" href="/images/Fxsion.png" />
        <link rel="apple-touch-icon" href="/images/Fxsion.png" />
      </head>
      <body className="bg-surface text-text" style={{fontFamily: 'var(--font-outfit), sans-serif'}}>
        <ClientOnly>
          <LaunchWrapper>
            {children}
          </LaunchWrapper>
        </ClientOnly>
      </body>
    </html>
  );
}
