"use client";

import { Button, ButtonProps } from "@mutuals/ui";

import UserAvatar from "@/features/Wallet/Avatar";
import { shortenAddress } from "@/utils";
import { User } from "@privy-io/node";

export type ShellDashboardHeaderUserProps = ButtonProps & { user?: User };

export default function ShellDashboardHeaderUser({
  user,
  ...props
}: ShellDashboardHeaderUserProps) {
  const wallet = user?.linked_accounts?.find(
    (account) => account.type == "wallet",
  );

  return (
    <Button variant={"surface"} size={"sm"} {...props}>
      <UserAvatar size={"2xs"} address={wallet?.address} />
      {shortenAddress(wallet?.address)}
    </Button>
  );
}
