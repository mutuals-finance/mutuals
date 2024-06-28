import { TokenTransfer } from "@ankr.com/ankr.js/dist/types";
import { Stack, Tag, TagLabel, Text } from "@splitfi/ui";
import { CellContext } from "@tanstack/react-table";
import React from "react";

import useActivityEvent from "@/features/Activity/useActivityEvent";
import Date from "@/components/Date";

type EventDescriptionCellProps = CellContext<TokenTransfer, unknown> & {
  address?: string;
};

export function EventDescriptionCell({
  address = "",
  row,
}: EventDescriptionCellProps) {
  const { getEventType } = useActivityEvent({ address });
  const type = getEventType(row.original);

  return (
    <Stack alignItems={"flex-start"} gap={"1"}>
      <Text fontSize={"sm"}>{type}</Text>
      <Tag size={"sm"}>
        <TagLabel
          as={Date}
          fontWeight={"500"}
          fontSize={"2xs"}
          formatString="LLLL dd, yyyy"
          timestamp={row.original.timestamp.toString()}
        ></TagLabel>
      </Tag>
    </Stack>
  );
}