import { type TokenTransfer } from "@ankr.com/ankr.js/dist/types";
import Link from "next/link";
import { Text } from "@mutuals/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import useExplorerLink from "@/hooks/useExplorerLink";

type AddressCellProps = CellContext<TokenTransfer, string | unknown> & {
  address?: string;
};

export function AddressCell({ getValue, address: parent }: AddressCellProps) {
  const address = getValue() as string;
  const equals = parent?.toLowerCase() === address.toLowerCase();
  const { href, shortAddress } = useExplorerLink({ address });
  return !equals ? (
    <Link href={href} target={"_blank"} rel={"noopener noreferrer"}>
      <Text>{shortAddress}</Text>
    </Link>
  ) : (
    <Link href={href} target={"_blank"} rel={"noopener noreferrer"}>
      <Text fontVariantNumeric={"slashed-zero"}>{shortAddress}</Text>
    </Link>
  );
}
