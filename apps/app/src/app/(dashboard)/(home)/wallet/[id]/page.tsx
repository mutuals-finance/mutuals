import WalletUpdate from "@/features/Wallet/Update";

export default function WalletUpdatePage({
  params,
}: {
  params: { id: string };
}) {
  return <WalletUpdate address={params.id} />;
}
