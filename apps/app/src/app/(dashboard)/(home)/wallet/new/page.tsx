import React from "react";
import { getViewerWallets } from "@splitfi/sdk/server";
import WalletAdd from "@/features/Wallet/Add";

export default async function NewWalletPage() {
  const query = await getViewerWallets();

  return <WalletAdd {...query} />;
}
