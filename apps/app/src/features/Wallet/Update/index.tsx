import WalletForm from "@/features/Wallet/Form";

export default function WalletUpdate({ address }: { address: string }) {
  return (
    <WalletForm.Drawer
      title={"Manage Wallet"}
      defaultValues={{ name: "Company Multisig", address }}
    >
      <WalletForm.Content />
    </WalletForm.Drawer>
  );
}
