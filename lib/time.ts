// lib/time.ts
export type Season = "spring" | "summer" | "autumn" | "winter";
export type TimeBand = "dawn" | "day" | "dusk" | "night" | "deep";

export function getSeason(d: Date): Season {
  const m = d.getMonth() + 1; // 1-12
  if (m >= 3 && m <= 5) return "spring";
  if (m >= 6 && m <= 8) return "summer";
  if (m >= 9 && m <= 11) return "autumn";
  return "winter";
}

export function getTimeBand(d: Date): TimeBand {
  const h = d.getHours();
  // ざっくり（後で調整）
  if (h >= 5 && h < 8) return "dawn";
  if (h >= 8 && h < 16) return "day";
  if (h >= 16 && h < 19) return "dusk";
  if (h >= 19 && h < 24) return "night";
  return "deep";
}
