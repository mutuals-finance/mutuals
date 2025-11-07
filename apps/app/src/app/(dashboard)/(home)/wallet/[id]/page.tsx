import WalletUpdate from "@/features/Wallet/Update";
import { Metadata } from "next";
import { me } from "@/lib/privy";
import AuthSignInCard from "@/features/Auth/SignInCard";
import React from "react";

export const metadata: Metadata = {
  title: "Manage Wallet",
};

export default async function WalletUpdatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await me();

  return !user ? <AuthSignInCard /> : <WalletUpdate address={id} user={user} />;
}
