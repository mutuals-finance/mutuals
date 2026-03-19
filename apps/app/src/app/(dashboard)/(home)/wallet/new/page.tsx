import type { Metadata } from "next";
import WalletAdd from "@/features/wallet/add";
import { me } from "@/lib/privy";

export const metadata: Metadata = {
  title: "Add Wallet",
};

export default async function NewWalletPage() {
  const user = await me();
  return <WalletAdd user={user} />;
}
