import { CHAIN_LOGO_URI, ETH_LOGO } from '@/lib/constants/chainLogo';

export function getLogoByChainId(id: number) {
  return CHAIN_LOGO_URI[id] || ETH_LOGO;
}
