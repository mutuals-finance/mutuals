import React from "react";
import { getViewerWallets } from "@splitfi/sdk/server";
import WalletAdd from "@/features/Wallet/Add";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Wallet",
};

export default async function NewWalletPage() {
  const query = await getViewerWallets();

  return <WalletAdd {...query} />;
}
