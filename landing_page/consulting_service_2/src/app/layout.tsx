import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite Business Consulting - Transform Your Business Growth",
  description: "Expert consulting services for mid-market companies. Strategic guidance, measurable results, proven methodologies. Book your free consultation today.",
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
