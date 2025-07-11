import type { HardhatUserConfig, SolcUserConfig } from 'hardhat/types/config';

const DEFAULT_SOLC_CONFIG: SolcUserConfig = {
  version: '0.8.29',
  settings: {
    viaIR: process.env.VIA_IR,
    optimizer: {
      enabled: process.env.OPTIMIZER,
      runs: process.env.OPTIMIZER_RUNS,
    },
  },
};

const TEST_SOLC_CONFIG: SolcUserConfig = {
  ...DEFAULT_SOLC_CONFIG,
  settings: {
    viaIR: false,
    optimizer: {
      enabled: false,
      runs: 0,
    },
  },
};

const PRODUCTION_SOLC_CONFIG: SolcUserConfig = {
  ...DEFAULT_SOLC_CONFIG,
  settings: {
    viaIR: true,
    optimizer: {
      enabled: true,
      runs: 800,
    },
  },
};

const SOLC_PROFILES: Record<typeof process.env.SOLC_PROFILE, SolcUserConfig> = {
  default: DEFAULT_SOLC_CONFIG,
  production: PRODUCTION_SOLC_CONFIG,
  test: TEST_SOLC_CONFIG,
};

export const solidity: HardhatUserConfig['solidity'] = {
  compilers: [SOLC_PROFILES[process.env.SOLC_PROFILE]],
};
