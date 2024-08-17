"use client";

import { AspectRatio, Flex } from "@mutuals/ui";
import dynamic from "next/dynamic";
import { useList } from "react-use";
import SharesTable from "@/features/Shares/Table";
import { ActiveShare } from "@/features/Shares/types";
import { type Share } from "@mutuals/graphql-client-nextjs/thegraph";

const PieChart = dynamic(() => import("@/components/PieChart"), {
  ssr: false,
});

interface SharesContentProps {
  shares?: Partial<Share>[];
}

export default function PoolOverviewSharesContent(props: SharesContentProps) {
  const shares = props.shares;

  const [payees, { updateAt }] = useList<ActiveShare>(
    shares?.map((s) => ({
      ...s,
      isActive: false,
    })),
  );

  function setActive(index: number) {
    updateAt(index, { ...(payees[index] as ActiveShare), isActive: true });
  }

  function setInactive(index: number) {
    updateAt(index, { ...(payees[index] as ActiveShare), isActive: false });
  }

  return (
    <>
      <Flex p={"6"} flex={"1"} maxWidth={{ base: "12rem", md: "16rem" }}>
        <AspectRatio ratio={1} flex={"1"}>
          <PieChart
            data={payees}
            onMouseOut={(_, i) => setInactive(i)}
            onMouseMove={(_, i) => setActive(i)}
          />
        </AspectRatio>
      </Flex>
      <SharesTable shares={payees} containerProps={{ flex: "1" }} />

      {/*
        <ShareItem
            key={index}
            onMouseOut={() => setInactive(index)}
            onMouseMove={() => setActive(index)}
            share={share}
            isActive={share.isActive}
        />
*/}
    </>
  );
}
