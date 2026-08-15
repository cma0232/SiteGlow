import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteGlow — Make your business shine online",
  description: "Modern, mobile-friendly website refreshes for local businesses. $399 flat.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
