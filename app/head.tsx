// app/head.tsx
export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

      {/* iPhoneホーム画面アイコン：最優先 */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Safariタブ用（任意） */}
      <link rel="icon" href="/favicon.ico" />

      {/* PWA補助（任意だけど入れとくと安定） */}
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </>
  );
}
