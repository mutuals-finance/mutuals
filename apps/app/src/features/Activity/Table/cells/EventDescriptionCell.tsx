import { Stack, Text } from "@mutuals/ui";
import { CellContext } from "@tanstack/react-table";
import FormatDate from "@/components/Date";
import React from "react";

import { PoolActivityEvent } from "@/features/Activity/types";

type EventDescriptionCellProps = CellContext<PoolActivityEvent, unknown> & {
  address?: string;
};

export function EventDescriptionCell({ row }: EventDescriptionCellProps) {
  const eventName = row.original.__typename;

  return (
    <Stack gap={"0"}>
      <Text textStyle={"sm"}>{eventName}</Text>
      <Text textStyle={"2xs"} color={"fg.muted"}>
        <FormatDate
          formatString="LLLL dd, yyyy"
          timestamp={row.original.createdAt}
        />
      </Text>
    </Stack>
  );
}
