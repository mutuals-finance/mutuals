import WalletDrawer from "@/app/(dashboard)/(home)/wallet/WalletDrawer";

export default function WalletEditPage({ params }: { params: { id: string } }) {
  return (
    <WalletDrawer.Drawer
      title={"Manage Wallet"}
      defaultValues={{ name: "Company Multisig", address: params.id }}
    >
      <WalletDrawer.Form />
    </WalletDrawer.Drawer>
  );
}
