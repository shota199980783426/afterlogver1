// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import BgClient from "./bg-client";

export const metadata: Metadata = {
  title: "Afterlog",
  description: "Focused, Quiet, Premium",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* TopBar / LivingBackground / state handling は Client 側に寄せる */}
        <BgClient>{children}</BgClient>
      </body>
    </html>
  );
}
