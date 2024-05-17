import WalletDrawer from "@/app/(dashboard)/(home)/wallet/WalletDrawer";
import { Alert } from "@splitfi/ui";
import React from "react";

export default function AddWalletPage() {
  return (
    <WalletDrawer title={"Add Wallet"}>
      <Alert status={"info"} fontSize={"xs"}>
        External wallets and multisigs you add here will be included in your
        dashboard and count towards your total earnings. You&apos;ll also
        receive notifications for all these wallets, which you can turn off in
        your settings.
      </Alert>
    </WalletDrawer>
  );
}
