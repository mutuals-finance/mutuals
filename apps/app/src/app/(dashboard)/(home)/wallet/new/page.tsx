import React from "react";
import { me } from "@mutuals/graphql-client-nextjs/server";
import WalletAdd from "@/features/Wallet/Add";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Wallet",
};

export default async function NewWalletPage() {
  const query = await me();

  return <WalletAdd {...query} />;
}
