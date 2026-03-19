"use client";

import { Button, type ButtonProps } from "@mutuals/ui";
import type { User } from "@privy-io/node";
import { usePrivy } from "@privy-io/react-auth";
import UserAvatar from "@/features/wallet/avatar";
import { shortenAddress } from "@/utils";

export type ShellDashboardHeaderUserProps = ButtonProps & {
  user?: User;
};

export default function ShellDashboardHeaderUser({
  ...props
}: ShellDashboardHeaderUserProps) {
  const { user } = usePrivy();

  return (
    <Button size={"sm"} variant={"surface"} {...props}>
      <UserAvatar address={user?.wallet?.address} size={"2xs"} />
      {shortenAddress(user?.wallet?.address)}
    </Button>
  );
}
