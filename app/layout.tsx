import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SiteGlow — Homepage refreshes for local businesses",
  description:
    "SiteGlow rebuilds the homepage of local service businesses. One page, one flat price, nothing else on your site touched.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
