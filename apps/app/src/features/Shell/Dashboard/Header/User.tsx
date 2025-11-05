"use client";

import { Button, ButtonProps } from "@mutuals/ui";

import UserAvatar from "@/features/Wallet/Avatar";
import { shortenAddress } from "@/utils";
import { usePrivy } from "@privy-io/react-auth";

export default function ShellDashboardHeaderUser(props: ButtonProps) {
  const { ready, user } = usePrivy();

  return (
    <Button variant={"surface"} size={"sm"} loading={!ready} {...props}>
      <UserAvatar size={"2xs"}>{user?.wallet?.address}</UserAvatar>
      {shortenAddress(user?.wallet?.address)}
    </Button>
  );
}
