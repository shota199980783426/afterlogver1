// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import BgClient from "./bg-client";

export const metadata: Metadata = {
  title: "Afterlog",
  description: "Close the day quietly.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <BgClient />
        <div className="afterlog-app">{children}</div>
      </body>
    </html>
  );
}
