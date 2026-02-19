import type { Season, TimeBand } from "./time";

export type Palette = {
  seasonA: string;
  seasonB: string;
  skyA: string;
  skyB: string;
  vignette: number; // 0..1
  noise: number;    // 0..1
};

export const PALETTES: Record<Season, Record<TimeBand, Palette>> = {
  spring: {
    dawn:   { seasonA:"#F6EAF2", seasonB:"#EBDFF0", skyA:"#FFD6E8", skyB:"#B7C7FF", vignette:0.18, noise:0.018 },
    day:    { seasonA:"#F8F6F3", seasonB:"#E9F0F8", skyA:"#EAF3FF", skyB:"#CFE3FF", vignette:0.12, noise:0.015 },
    dusk:   { seasonA:"#F1E1D8", seasonB:"#E7CFC0", skyA:"#FFB7A5", skyB:"#9F9ED9", vignette:0.22, noise:0.018 },
    night:  { seasonA:"#1B1F34", seasonB:"#13182A", skyA:"#2B3A6F", skyB:"#0F1430", vignette:0.30, noise:0.022 },
    deep:   { seasonA:"#0E1220", seasonB:"#0A0E1A", skyA:"#141B3A", skyB:"#060912", vignette:0.38, noise:0.024 },
  },
  summer: {
    dawn:   { seasonA:"#E8F2F6", seasonB:"#D9E8F0", skyA:"#FFE1B8", skyB:"#7FB7FF", vignette:0.16, noise:0.016 },
    day:    { seasonA:"#F5FAFF", seasonB:"#E4F0FF", skyA:"#BEE5FF", skyB:"#6FB7E8", vignette:0.12, noise:0.015 },
    dusk:   { seasonA:"#2A3B4F", seasonB:"#1F2C3D", skyA:"#FF9C5B", skyB:"#2E4A7D", vignette:0.26, noise:0.020 },
    night:  { seasonA:"#0D1B2A", seasonB:"#08111B", skyA:"#1B3B6F", skyB:"#050A14", vignette:0.32, noise:0.022 },
    deep:   { seasonA:"#050A14", seasonB:"#02060C", skyA:"#0B1C3A", skyB:"#010409", vignette:0.40, noise:0.024 },
  },
  autumn: {
    dawn:   { seasonA:"#F3E6DA", seasonB:"#EAD6C5", skyA:"#FFD0A1", skyB:"#9BB2D9", vignette:0.18, noise:0.018 },
    day:    { seasonA:"#F5EFE8", seasonB:"#E7DED2", skyA:"#FFE5C4", skyB:"#B6C7E5", vignette:0.14, noise:0.016 },
    dusk:   { seasonA:"#2C1F1A", seasonB:"#1A120E", skyA:"#FF8A3D", skyB:"#4A3C6F", vignette:0.30, noise:0.022 },
    night:  { seasonA:"#1A1412", seasonB:"#0E0B09", skyA:"#3A2F5F", skyB:"#0A0715", vignette:0.34, noise:0.023 },
    deep:   { seasonA:"#0B0705", seasonB:"#050302", skyA:"#1A1430", skyB:"#030208", vignette:0.42, noise:0.025 },
  },
  winter: {
    dawn:   { seasonA:"#EDF2F5", seasonB:"#DDE7EE", skyA:"#FFEFD6", skyB:"#B5D9FF", vignette:0.18, noise:0.017 },
    day:    { seasonA:"#F7FAFC", seasonB:"#E8F1F7", skyA:"#E4F4FF", skyB:"#B7DFFF", vignette:0.14, noise:0.016 },
    dusk:   { seasonA:"#2A2F38", seasonB:"#1B1F27", skyA:"#FFB97A", skyB:"#4F6FA3", vignette:0.28, noise:0.021 },
    night:  { seasonA:"#0E1622", seasonB:"#070B12", skyA:"#2A4A7F", skyB:"#03060C", vignette:0.34, noise:0.023 },
    deep:   { seasonA:"#04070D", seasonB:"#020409", skyA:"#0F2A4F", skyB:"#010204", vignette:0.44, noise:0.026 },
  },
};
