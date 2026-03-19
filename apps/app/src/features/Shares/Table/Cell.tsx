import { HStack, Link, Text } from "@mutuals/ui";
import type { CellContext } from "@tanstack/react-table";
import UserAvatar from "src/features/wallet/avatar";
import type { ActiveShare } from "@/features/shares/types";
import useExplorerLink from "@/hooks/use-explorer-link";

export default function SharesTableCell({
  getValue,
}: CellContext<ActiveShare, string | undefined>) {
  const address = getValue();
  const { href, shortAddress } = useExplorerLink({ address });

  return (
    <HStack alignItems={"center"} gap={"3"}>
      <UserAvatar address={address} />
      <Link asChild href={href} rel={"noopener noreferrer"} target={"_blank"}>
        <Text fontVariantNumeric={"slashed-zero"}>{shortAddress}</Text>
      </Link>
    </HStack>
  );
}
