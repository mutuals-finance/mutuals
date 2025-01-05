import WalletUpdate from "@/features/Wallet/Update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Wallet",
};

export default async function WalletUpdatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <WalletUpdate address={id} />;
}
