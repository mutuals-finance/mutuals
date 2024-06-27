import WalletUpdate from "@/features/Wallet/Update";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage Wallet",
};

export default function WalletUpdatePage({
  params,
}: {
  params: { id: string };
}) {
  return <WalletUpdate address={params.id} />;
}
