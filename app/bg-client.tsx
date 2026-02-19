// app/bg-client.tsx
"use client";

import dynamic from "next/dynamic";

const LivingBackground = dynamic(() => import("@/components/LivingBackground"), {
  ssr: false,
});

export default function BgClient() {
  return <LivingBackground />;
}
