"use client";

import { Button, ButtonProps } from "@mutuals/ui";

import UserAvatar from "@/features/Wallet/Avatar";
import { shortenAddress } from "@/utils";
import { useWallet } from "@getpara/react-sdk";

export default function ShellDashboardHeaderUser(props: ButtonProps) {
  const { data: wallet, isLoading, error } = useWallet();

  return (
    <Button variant={"surface"} size={"sm"} loading={isLoading} {...props}>
      <UserAvatar size={"2xs"}>{wallet?.address}</UserAvatar>
      {shortenAddress(wallet?.address)}
    </Button>
  );
}
