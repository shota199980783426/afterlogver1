// lib/bg.ts
import type { Season, TimeBand } from "./time";

export type BgKey =
  | "winter-night"
  | "winter-deep"
  | "autumn-night"
  | "summer-dusk";

export type BgPack = {
  key: BgKey;
  sky: string;
  mist?: string;
  stars?: string;
};

export const BG_PACKS: Record<BgKey, BgPack> = {
  "winter-night": { key: "winter-night", sky: "/bg/winter-night/sky.webp" },
  "winter-deep": { key: "winter-deep", sky: "/bg/winter-deep/sky.webp" },
  "autumn-night": { key: "autumn-night", sky: "/bg/autumn-night/sky.webp" },
  "summer-dusk": { key: "summer-dusk", sky: "/bg/summer-dusk/sky.webp" },
};

export function pickBgKey(season: Season, band: TimeBand): BgKey {
  if (season === "winter" && band === "deep") return "winter-deep";
  if (season === "winter" && band === "night") return "winter-night";
  if (season === "autumn" && band === "night") return "autumn-night";
  if (season === "summer" && band === "dusk") return "summer-dusk";

  if (band === "deep") return "winter-deep";
  if (band === "night") return season === "autumn" ? "autumn-night" : "winter-night";
  if (band === "dusk") return "summer-dusk";
  return "winter-night";
}
