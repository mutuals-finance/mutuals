import {
  down as migration_20251128_130329_down,
  up as migration_20251128_130329_up,
} from "./20251128_130329";

export const migrations = [
  {
    up: migration_20251128_130329_up,
    down: migration_20251128_130329_down,
    name: "20251128_130329",
  },
];
