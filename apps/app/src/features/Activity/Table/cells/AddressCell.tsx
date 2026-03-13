import { Text, Link } from "@mutuals/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import useExplorerLink from "@/hooks/useExplorerLink";
import { PoolActivityEvent } from "@/features/Activity/types";

type AddressCellProps = CellContext<PoolActivityEvent, string> & {
  address?: string;
};

export function AddressCell({ getValue }: AddressCellProps) {
  const address = getValue();
  const { href, shortAddress } = useExplorerLink({ address });

  return (
    <Link href={href} external={true} arrow={false}>
      <Text textStyle="sm" fontVariantNumeric="tabular-nums">
        {shortAddress}
      </Text>
    </Link>
  );
}
