import { Stack, Text } from "@mutuals/ui";
import type { CellContext } from "@tanstack/react-table";
import FormatDate from "@/components/date";

import type { PoolActivityEvent } from "@/features/activity/types";

type EventDescriptionCellProps = CellContext<PoolActivityEvent, unknown> & {
  address?: string;
};

export function EventDescriptionCell({ row }: EventDescriptionCellProps) {
  const eventName = row.original.__typename;

  return (
    <Stack gap={"0"}>
      <Text textStyle={"sm"}>{eventName}</Text>
      <Text color={"fg.muted"} textStyle={"2xs"}>
        <FormatDate
          formatString="LLLL dd, yyyy"
          timestamp={row.original.createdAt}
        />
      </Text>
    </Stack>
  );
}
