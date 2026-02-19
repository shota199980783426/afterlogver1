import "./globals.css";
import type { Metadata } from "next";
import LivingBackground from "@/components/LivingBackground";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "Afterlog",
  description: "Focused, Quiet, Premium journaling",
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* 背景（クライアント側のみで描画） */}
        <LivingBackground />

        {/* UIレイヤー */}
        <div className="afterlog-app">
          <TopBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
