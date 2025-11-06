import { PrivyClientConfig } from "@privy-io/react-auth";

export const config: PrivyClientConfig = {
  appearance: {
    walletList: [
      "detected_wallets",
      "metamask",
      "coinbase_wallet",
      "rainbow",
      "wallet_connect",
    ],
  },
  //customOAuthRedirectUrl: "/pool",
  embeddedWallets: {
    showWalletUIs: false,
  },
  //loginMethods: ["wallet", "email", "sms"],
};
