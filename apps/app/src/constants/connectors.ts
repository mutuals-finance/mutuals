import COINBASE_WALLET_LOGO from "@/assets/svg/connectors/coinbaseWallet.svg";
import METAMASK_LOGO from "@/assets/svg/connectors/metaMask.svg";
import WALLET_CONNECT_LOGO from "@/assets/svg/connectors/walletConnect.svg";

export * as COINBASE_WALLET_LOGO from "@/assets/svg/connectors/coinbaseWallet.svg";
export * as METAMASK_LOGO from "@/assets/svg/connectors/metaMask.svg";
export * as WALLET_CONNECT_LOGO from "@/assets/svg/connectors/walletConnect.svg";

export const CONNECTOR_LOGO_MAP: Record<string, typeof import("*.svg")> = {
  1: METAMASK_LOGO, // mainnet
  137: WALLET_CONNECT_LOGO, // polygon
  80001: COINBASE_WALLET_LOGO, // polygon mumbai
};
