import { Link } from "@mutuals/ui";
import { HStack, Text } from "@mutuals/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import useExplorerLink from "@/hooks/useExplorerLink";

import UserAvatar from "src/features/Wallet/Avatar";

import { type ActiveShare } from "@/features/Shares/types";

export default function SharesTableCell({
  getValue,
}: CellContext<ActiveShare, string | undefined>) {
  const address = getValue();
  const { href, shortAddress } = useExplorerLink({ address });

  return (
    <HStack alignItems={"center"} gap={"3"}>
      <UserAvatar address={address} />
      <Link asChild href={href} target={"_blank"} rel={"noopener noreferrer"}>
        <Text fontVariantNumeric={"slashed-zero"}>{shortAddress}</Text>
      </Link>
    </HStack>
  );
}
