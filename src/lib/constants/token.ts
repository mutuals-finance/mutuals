import * as ETH_TOKEN from '@/assets/svg/eth-token.svg';
import * as AGOR_TOKEN from '@/assets/svg/eth-token.svg';
import * as MATIC_TOKEN from '@/assets/svg/matic-token.svg';

export { ETH_TOKEN, MATIC_TOKEN };

export const NATIVE_TOKEN_LOGO_URI = {
  1: ETH_TOKEN, // mainnet
  137: MATIC_TOKEN, // polygon
  80001: MATIC_TOKEN, // polygon mumbai
  42161: ETH_TOKEN, // Arbitrum One
  5: ETH_TOKEN, // goerli
  421613: AGOR_TOKEN, // arbitrumGoerli
  420: ETH_TOKEN, // optimismGoerli
  1337: ETH_TOKEN, // hardhat + localhost
};
