import { Flex, Icon } from "@mutuals/ui";
import type { CellContext } from "@tanstack/react-table";
import { HiArrowDownTray, HiArrowUpTray } from "react-icons/hi2";

import type { PoolActivityEvent } from "@/features/activity/types";

type EventIconCellProps = CellContext<PoolActivityEvent, unknown> & {
  address?: string;
};

export function EventIconCell({ row }: EventIconCellProps) {
  const isDeposit = row.original.__typename === "Deposit";

  return (
    <Flex
      alignItems={"center"}
      bg={"colorPalette.subtle"}
      color={"colorPalette.fg"}
      colorPalette={isDeposit ? "green" : "red"}
      h={"8"}
      justifyContent={"center"}
      rounded={"l3"}
      w={"8"}
    >
      <Icon>{isDeposit ? <HiArrowDownTray /> : <HiArrowUpTray />}</Icon>
    </Flex>
  );
}
