// components/LivingBackground.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { getSeason, getTimeBand, type Season, type TimeBand } from "@/lib/time";
import { pickBgKey, BG_PACKS } from "@/lib/bg";

type Override = { season?: Season; band?: TimeBand };

function safeParseOverride(href: string): Override {
  const u = new URL(href);
  const season = u.searchParams.get("season") as Season | null;
  const band = u.searchParams.get("band") as TimeBand | null;

  const okSeason =
    season && (["spring", "summer", "autumn", "winter"] as const).includes(season)
      ? season
      : undefined;

  const okBand =
    band && (["dawn", "day", "dusk", "night", "deep"] as const).includes(band)
      ? band
      : undefined;

  return { season: okSeason, band: okBand };
}

// 超控えめ瞬き（固定で安定）
const TWINKLES = [
  { x: 26.6, y: 29.2, d: 3800, delay: 400 },
  { x: 73.5, y: 19.7, d: 5200, delay: 1200 },
  { x: 89.2, y: 42.6, d: 6700, delay: 2600 },
] as const;

export default function LivingBackground() {
  const [now, setNow] = useState(() => new Date());
  const [override, setOverride] = useState<Override>({});

  useEffect(() => {
    setOverride(safeParseOverride(window.location.href));
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const season = override.season ?? getSeason(now);
  const band = override.band ?? getTimeBand(now);

  const bgKey = useMemo(() => pickBgKey(season, band), [season, band]);
  const bg = BG_PACKS[bgKey];

  return (
    <>
      <div className="afterlog-bg" aria-hidden="true">
        <div className="bg-img bg-sky" style={{ backgroundImage: `url(${bg.sky})` }} />
        {bg.mist && (
          <div className="bg-img bg-mist" style={{ backgroundImage: `url(${bg.mist})` }} />
        )}
        {bg.stars && (
          <div className="bg-img bg-stars" style={{ backgroundImage: `url(${bg.stars})` }} />
        )}
        <div className="afterlog-bg__atmo" />

        {TWINKLES.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: "2px",
              height: "2px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.9)",
              opacity: 0,
              animation: `twinkle ${p.d}ms ease-in-out ${p.delay}ms infinite`,
              filter: "blur(0.2px)",
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          45% { opacity: 0; }
          55% { opacity: 0.75; }
          70% { opacity: 0.08; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
