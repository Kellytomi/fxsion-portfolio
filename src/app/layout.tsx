import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientOnly from "@/components/ClientOnly";
import dynamic from 'next/dynamic';

// Dynamically import the LaunchWrapper with no SSR to ensure the date check happens client-side only
const LaunchWrapper = dynamic(() => import('@/components/LaunchWrapper'), { ssr: false });

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="en" className={`${jakarta.variable} ${syne.variable}`} style={{fontFamily: 'var(--font-jakarta), sans-serif'}}>
      <head>
        <meta name="x-font-options" content="no-substitute" />
        <link rel="icon" href="/images/Fxsion.png" />
        <link rel="apple-touch-icon" href="/images/Fxsion.png" />
      </head>
      <body className="bg-surface text-text" style={{fontFamily: 'var(--font-jakarta), sans-serif'}}>
        <ClientOnly>
          <CustomCursor />
          <LaunchWrapper>
            {children}
          </LaunchWrapper>
        </ClientOnly>
      </body>
    </html>
  );
}
