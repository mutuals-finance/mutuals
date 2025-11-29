import * as migration_20251128_130329 from './20251128_130329';

export const migrations = [
  {
    up: migration_20251128_130329.up,
    down: migration_20251128_130329.down,
    name: '20251128_130329'
  },
];
