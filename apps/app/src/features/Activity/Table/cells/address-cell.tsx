import { Link, Text } from "@mutuals/ui";
import type { CellContext } from "@tanstack/react-table";
import type { PoolActivityEvent } from "@/features/activity/types";
import useExplorerLink from "@/hooks/useExplorerLink";

type AddressCellProps = CellContext<PoolActivityEvent, string> & {
  address?: string;
};

export function AddressCell({ getValue }: AddressCellProps) {
  const address = getValue();
  const { href, shortAddress } = useExplorerLink({ address });

  return (
    <Link arrow={false} external={true} href={href}>
      <Text fontVariantNumeric="tabular-nums" textStyle="sm">
        {shortAddress}
      </Text>
    </Link>
  );
}
