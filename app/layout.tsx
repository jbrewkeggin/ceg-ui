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
  title: "Celebrity End Game App",
  description: "Celebrity End Game App",
};

// Children prop - any pages will be nested in RootLayout.
// In this case, it's the single page.tsx, which then imports from /ui/
// Only page components update, layout won't re-render
// This is partial rendering, which preserves client-side state in the layout while transitioning between pages
// We should make Nav and Top bar part of the Layout, and pages should be the middle area

// This is where you would add metadata in html tags
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
