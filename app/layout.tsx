import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SiteGlow — $399 Website Refresh for Small Businesses",
  description:
    "Your business is better than your website. SiteGlow redesigns outdated small-business websites into modern, mobile-friendly sites for $399 flat. See a free concept of your homepage before you pay anything.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "SiteGlow — $399 Website Refresh",
    description:
      "Your business is better than your website. Modern, mobile-friendly redesign for $399 flat. Free concept first.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
