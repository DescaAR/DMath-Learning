import type { Level } from "@/data/competition-problems";

// Append new date records; never renumber or reuse a previously assigned problem.
export const dailySchedule: Record<string,Record<Level,string>> = {
 "2026-11-22": {SD:"sd-001",SMP:"smp-001",SMA:"sma-001",Kuliah:"univ-001"},
 "2026-11-23": {SD:"sd-002",SMP:"smp-002",SMA:"sma-002",Kuliah:"univ-002"},
 "2026-11-24": {SD:"sd-003",SMP:"smp-003",SMA:"sma-003",Kuliah:"univ-003"},
 "2026-11-25": {SD:"sd-004",SMP:"smp-004",SMA:"imo-2019-1",Kuliah:"imc-2024-1"},
 "2026-11-26": {SD:"sd-005",SMP:"smp-005",SMA:"sma-004",Kuliah:"univ-004"},
 "2026-11-27": {SD:"sd-006",SMP:"smp-006",SMA:"sma-005",Kuliah:"univ-005"},
 "2026-11-28": {SD:"sd-007",SMP:"smp-007",SMA:"sma-006",Kuliah:"univ-006"},
 "2026-11-29": {SD:"sd-008",SMP:"smp-008",SMA:"sma-007",Kuliah:"univ-007"},
};
export const dailyDates=Object.keys(dailySchedule).sort();
