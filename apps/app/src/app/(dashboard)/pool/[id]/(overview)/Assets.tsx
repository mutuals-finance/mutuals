import React from "react";

import AssetTable from "@/components/AssetTable";
import ContentCard from "@/components/ContentCard";

import { GetAccountBalanceReply } from "@ankr.com/ankr.js";
import { Box, Button } from "@splitfi/ui";
import Link from "next/link";

export default function Assets({
  balance,
}: {
  balance?: GetAccountBalanceReply;
}) {
  return (
    <ContentCard title={"Assets"} bodyProps={{ p: "0" }}>
      <AssetTable
        assets={balance?.assets?.slice(0, 6)}
        size={"sm"}
        containerProps={{ flex: "1" }}
      />
      <Box p={"3"}>
        <Button as={Link} href={"id/assets"} variant={"ghost"} size={"sm"}>
          Show all
        </Button>
      </Box>
    </ContentCard>
  );
}
