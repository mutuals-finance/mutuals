import * as METAMASK_LOGO from "@/assets/svg/connectors/metaMask.svg";
import * as WALLET_CONNECT_LOGO from "@/assets/svg/connectors/walletConnect.svg";
import * as COINBASE_WALLET_LOGO from "@/assets/svg/connectors/coinbaseWallet.svg";

export { METAMASK_LOGO, WALLET_CONNECT_LOGO, COINBASE_WALLET_LOGO };

export const CONNECTOR_LOGO_MAP: Record<string, typeof import("*.svg")> = {
  1: METAMASK_LOGO, // mainnet
  137: WALLET_CONNECT_LOGO, // polygon
  80001: COINBASE_WALLET_LOGO, // polygon mumbai
};
