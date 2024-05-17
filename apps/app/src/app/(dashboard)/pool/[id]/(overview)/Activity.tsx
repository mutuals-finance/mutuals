import React from "react";

import ActivityTable from "@/components/ActivityTable";
import ContentCard from "@/components/ContentCard";

import { GetTokenTransfersReply } from "@ankr.com/ankr.js";
import { SplitBaseFragmentFragment } from "@/lib/graphql/thegraph/__generated__/graphql";
import { Box, Button } from "@splitfi/ui";
import Link from "next/link";

interface PoolActivityProps {
  pool?: SplitBaseFragmentFragment | null;
  activity?: GetTokenTransfersReply;
}

export default function PoolActivity({ pool, activity }: PoolActivityProps) {
  return (
    <ContentCard title={"Activity"} bodyProps={{ p: "0" }}>
      <ActivityTable
        transfers={activity?.transfers.slice(0, 6)}
        address={pool?.address}
        size={"sm"}
      />
      <Box p={"3"}>
        <Button as={Link} href={"id/activity"} variant={"ghost"} size={"sm"}>
          Show all
        </Button>
      </Box>
    </ContentCard>
  );
}
