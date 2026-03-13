import { Icon } from "@mutuals/ui";
import { Flex } from "@mutuals/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";
import { HiArrowDownTray, HiArrowUpTray } from "react-icons/hi2";

import { PoolActivityEvent } from "@/features/Activity/types";

type EventIconCellProps = CellContext<PoolActivityEvent, unknown> & {
  address?: string;
};

export function EventIconCell({ row }: EventIconCellProps) {
  const isDeposit = row.original.__typename === "Deposit";

  return (
    <Flex
      colorPalette={isDeposit ? "green" : "red"}
      rounded={"l3"}
      w={"8"}
      h={"8"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"colorPalette.fg"}
      bg={"colorPalette.subtle"}
    >
      <Icon>{isDeposit ? <HiArrowDownTray /> : <HiArrowUpTray />}</Icon>
    </Flex>
  );
}
