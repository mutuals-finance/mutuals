import * as ARBITRUM_LOGO from '@/assets/svg/arbitrum-logo.svg';
import * as ETH_LOGO from '@/assets/svg/ethereum-logo.svg';
import * as OPTIMISM_LOGO from '@/assets/svg/optimism-logo.svg';
import * as MATIC_LOGO from '@/assets/svg/polygonMatic-logo.svg';

export { ARBITRUM_LOGO, ETH_LOGO, MATIC_LOGO };

export const CHAIN_LOGO_URI: Record<number, typeof import('*.svg')> = {
  1: ETH_LOGO, // mainnet
  137: MATIC_LOGO, // polygon
  80001: MATIC_LOGO, // polygon mumbai
  42161: ARBITRUM_LOGO, // Arbitrum One
  5: ETH_LOGO, // goerli
  421613: ARBITRUM_LOGO, // arbitrumGoerli
  420: OPTIMISM_LOGO, // optimismGoerli
  1337: ETH_LOGO, // hardhat + localhost
};
