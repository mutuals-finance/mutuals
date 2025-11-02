"use client";

import { Button, ButtonProps } from "@mutuals/ui";

import { useWallets } from "@openfort/react";
import UserAvatar from "@/features/Wallet/Avatar";
import { shortenAddress } from "@/utils";

export default function ShellDashboardHeaderUser(props: ButtonProps) {
  const { activeWallet, isLoadingWallets } = useWallets({});

  return (
    <Button
      variant={"surface"}
      size={"sm"}
      loading={isLoadingWallets || !activeWallet}
      {...props}
    >
      <UserAvatar size={"2xs"}>{activeWallet?.address}</UserAvatar>
      {shortenAddress(activeWallet?.address)}
    </Button>
  );
}
