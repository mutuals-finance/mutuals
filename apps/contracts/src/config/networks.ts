import type { NetworksUserConfig, NetworkUserConfig } from 'hardhat/types';

import { accounts } from './accounts';

const {
  ETHEREUM_RPC_URL,
  SEPOLIA_RPC_URL,
  HOLESKY_RPC_URL,
  AMOY_RPC_URL,
  POLYGON_RPC_URL,
  MNEMONIC,
  LOG_HARDHAT_NETWORK,
} = process.env;

const hardhat: NetworksUserConfig['hardhat'] = {
  blockGasLimit: 30_000_000,
  initialBaseFeePerGas: 1,
  gasPrice: 3,
  chainId: 9001,
  accounts,
  loggingEnabled: LOG_HARDHAT_NETWORK,
  allowUnlimitedContractSize: true,
  tags: ['test'],
  saveDeployments: true,
};

const localhost: NetworkUserConfig = {
  blockGasLimit: 30_000_000,
  initialBaseFeePerGas: 1,
  gasPrice: 3,
  chainId: 9001,
  ...(typeof MNEMONIC === 'string' && {
    accounts: { mnemonic: MNEMONIC },
  }),
  allowUnlimitedContractSize: true,
  loggingEnabled: LOG_HARDHAT_NETWORK,
  url: 'http://127.0.0.1:8545',
  tags: ['test'],
  saveDeployments: true,
};

const sepolia: NetworkUserConfig = {
  url: SEPOLIA_RPC_URL,
  tags: ['mainnet', 'staging'],
  ...(typeof MNEMONIC === 'string' && {
    accounts: { mnemonic: MNEMONIC },
  }),
};

const holesky: NetworkUserConfig = {
  url: HOLESKY_RPC_URL,
  tags: ['mainnet', 'staging'],
  ...(typeof MNEMONIC === 'string' && {
    accounts: { mnemonic: MNEMONIC },
  }),
};

const polygonAmoy: NetworkUserConfig = {
  url: AMOY_RPC_URL,
  tags: ['polygon', 'staging'],
  ...(typeof MNEMONIC === 'string' && {
    accounts: { mnemonic: MNEMONIC },
  }),
  verify: {
    etherscan: {
      apiUrl: 'https://api-amoy.polygonscan.com/api',
      apiKey: process.env.POLYGONSCAN_API_KEY,
    },
  },
};

const polygon: NetworkUserConfig = {
  url: POLYGON_RPC_URL,
  tags: ['polygon', 'prod'],
};

const mainnet: NetworkUserConfig = {
  url: ETHEREUM_RPC_URL,
  tags: ['mainnet', 'prod'],
};

export const networks = {
  hardhat,
  ...(Boolean(MNEMONIC) && { localhost }),
  ...(Boolean(SEPOLIA_RPC_URL) && { sepolia }),
  ...(Boolean(HOLESKY_RPC_URL) && { holesky }),
  ...(Boolean(AMOY_RPC_URL) && { polygonAmoy }),
  ...(Boolean(ETHEREUM_RPC_URL) && { mainnet }),
  ...(Boolean(POLYGON_RPC_URL) && { polygon }),
} as const;
