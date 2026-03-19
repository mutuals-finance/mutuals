import type { Metadata } from "next";
import AuthSignInCard from "@/features/auth/sign-in-card";
import WalletUpdate from "@/features/wallet/update";
import { me } from "@/lib/privy";

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

  return user ? <WalletUpdate address={id} user={user} /> : <AuthSignInCard />;
}
