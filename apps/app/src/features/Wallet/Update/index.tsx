import type { User } from "@privy-io/node";
import WalletForm from "@/features/wallet/form";

export interface WalletUpdateProps {
  address: string;
  user?: User;
}

export default function WalletUpdate({
  user: _user,
  address,
}: WalletUpdateProps) {
  return (
    <WalletForm.Drawer
      defaultValues={{ name: "Company Multisig", address }}
      title={"Manage Wallet"}
    >
      <WalletForm.Content />
    </WalletForm.Drawer>
  );
}
