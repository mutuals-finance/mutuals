import { Alert } from "@splitfi/ui";
import React from "react";
import NewWalletDrawerContent from "@/app/(dashboard)/(home)/wallet/new/NewWalletDrawerContent";
import { getViewerWallets } from "@splitfi/sdk/server";

export default async function AddWalletPage() {
  const query = await getViewerWallets();

  return (
    <NewWalletDrawerContent {...query}>
      <Alert status={"info"} fontSize={"xs"}>
        External wallets and multisigs you add here will be included in your
        dashboard and count towards your total earnings. You&apos;ll also
        receive notifications for all these wallets, which you can turn off in
        your settings.
      </Alert>
    </NewWalletDrawerContent>
  );
}
