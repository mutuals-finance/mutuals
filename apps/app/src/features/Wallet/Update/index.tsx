import WalletForm from "@/features/Wallet/Form";
import { User } from "@privy-io/node";

export type WalletUpdateProps = { address: string; user?: User };

export default function WalletUpdate({ user, address }: WalletUpdateProps) {
  return (
    <WalletForm.Drawer
      title={"Manage Wallet"}
      defaultValues={{ name: "Company Multisig", address }}
    >
      <WalletForm.Content />
    </WalletForm.Drawer>
  );
}
