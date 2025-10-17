import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Corporate Consultancy | Expert Business Consulting Services",
    template: "%s | Corporate Consultancy"
  },
  description: "Leading business consulting firm helping enterprise executives achieve excellence through strategy, digital transformation, operations optimization, and risk management.",
  keywords: ["business consulting", "strategy consulting", "digital transformation", "operations excellence", "risk management", "enterprise consulting"],
  authors: [{ name: "Corporate Consultancy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corporate-consultancy.com",
    siteName: "Corporate Consultancy",
    title: "Corporate Consultancy | Expert Business Consulting Services",
    description: "Leading business consulting firm helping enterprise executives achieve excellence through strategy, digital transformation, operations optimization, and risk management.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Consultancy | Expert Business Consulting Services",
    description: "Leading business consulting firm helping enterprise executives achieve excellence.",
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
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
