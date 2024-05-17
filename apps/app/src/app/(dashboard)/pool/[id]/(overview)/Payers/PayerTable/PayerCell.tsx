import { Link } from "@splitfi/ui";
import { HStack, Text } from "@splitfi/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import useExplorerLink from "@/hooks/useExplorerLink";

import UserAvatar from "@/components/UserAvatar";

import { Payer } from "@/app/(dashboard)/pool/[id]/(overview)/Payers/PayerTable/types";

export default function PayerCell({
  getValue,
}: CellContext<Payer, string | undefined>) {
  const address = getValue();
  const { href, shortAddress } = useExplorerLink({ address });

  return (
    <HStack alignItems={"center"} spacing={"3"}>
      <UserAvatar address={address} />
      <Text
        as={Link}
        variant={"slashed-zero"}
        href={href}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        {shortAddress}
      </Text>
    </HStack>
  );
}
