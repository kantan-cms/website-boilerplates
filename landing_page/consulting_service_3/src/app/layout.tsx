import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProConsult - Expert Business Consulting Services",
  description: "Transform your business with strategic consulting services. Trusted by 500+ mid-market companies for growth, efficiency, and measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
