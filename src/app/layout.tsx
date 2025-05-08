import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Etoma-Etoto Kelvin Odi | Digital Solutions Expert",
  description: "Professional portfolio of Etoma-Etoto Kelvin Odi, founder of Fxsion - specializing in workflow automation, document automation, and digital solutions.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable}`}>
      <body className="bg-surface text-text">
        {children}
      </body>
    </html>
  );
}
