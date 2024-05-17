import {
  AVAILABLE_CHAINS,
  CHAIN_LOGO_URI_MAP,
  CHAIN_SHORT_NAME_MAP,
  ETH_LOGO,
} from "@/lib/constants/";

export function getLogoByChainId(id?: number) {
  return CHAIN_LOGO_URI_MAP[id || 1] || ETH_LOGO;
}

export function getShortNameByChainId(id: number) {
  return CHAIN_SHORT_NAME_MAP[id] || CHAIN_SHORT_NAME_MAP[1];
}

export function getAvailableChains() {
  return AVAILABLE_CHAINS;
}
