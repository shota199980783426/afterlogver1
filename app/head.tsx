export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* PWA manifest */}
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#000000" />

      {/* iOSの“アプリ化”補助 */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* 念押し：iOSホーム画面用 */}
      <link rel="apple-touch-icon" href="/afterlog-512.png" />
    </>
  );
}
