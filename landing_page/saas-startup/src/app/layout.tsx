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
  title: "BizGrow - Grow Your Business 10x Faster | SaaS for Small Businesses",
  description: "The all-in-one platform that helps small business owners automate operations, boost sales, and scale effortlessly. Trusted by 10,000+ businesses. Start your free 14-day trial today.",
  keywords: "business automation, small business software, saas platform, business growth, sales automation, business management",
  authors: [{ name: "BizGrow" }],
  openGraph: {
    title: "BizGrow - Grow Your Business 10x Faster",
    description: "The all-in-one platform for small business owners. Automate operations and boost sales effortlessly.",
    type: "website",
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
