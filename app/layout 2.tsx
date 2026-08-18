import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteGlow — Handyman acquisition flow",
  description: "Find, qualify, demo, and contact local service businesses with outdated websites.",
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
