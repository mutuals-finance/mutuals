import React from "react";
import WalletAdd from "@/features/Wallet/Add";
import { Metadata } from "next";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Add Wallet",
};

export default async function NewWalletPage() {
  const user = await me();
  return <WalletAdd user={user} />;
}
