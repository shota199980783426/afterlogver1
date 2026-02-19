import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afterlog",
  description: "Focused, Quiet, Premium",
  applicationName: "Afterlog",

  // ✅ PWA manifest（public/manifest.webmanifest）
  manifest: "/manifest.webmanifest",

  // ✅ アイコン（Next.js App Router の公式ルート）
  // - app/icon.png を自動で拾うが、明示しておく
  // - app/apple-icon.png が iOS のホーム画面で強い
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },

  // ✅ iOSでアプリ化（インストール）寄りの指定
  appleWebApp: {
    capable: true,
    title: "Afterlog",
    statusBarStyle: "black-translucent"
  },

  // ✅ テーマ色（アドレスバー/ステータスバー）
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
