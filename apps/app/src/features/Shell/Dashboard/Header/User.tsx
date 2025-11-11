"use client";

import { Button, ButtonProps } from "@mutuals/ui";

import UserAvatar from "@/features/Wallet/Avatar";
import { shortenAddress } from "@/utils";
import { User } from "@privy-io/node";
import { usePrivy } from "@privy-io/react-auth";

export type ShellDashboardHeaderUserProps = ButtonProps & {
  user?: User;
};

export default function ShellDashboardHeaderUser({
  ...props
}: ShellDashboardHeaderUserProps) {
  const { user } = usePrivy();

  return (
    <Button variant={"surface"} size={"sm"} {...props}>
      <UserAvatar size={"2xs"} address={user?.wallet?.address} />
      {shortenAddress(user?.wallet?.address)}
    </Button>
  );
}
