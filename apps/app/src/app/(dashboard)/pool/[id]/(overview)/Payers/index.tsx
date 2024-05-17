"use client";

import React from "react";
import { useList } from "react-use";

import { ShareFragmentFragment } from "@/lib/graphql/thegraph/__generated__/graphql";

import ContentCard from "@/components/ContentCard";

import PayerTable from "@/app/(dashboard)/pool/[id]/(overview)/Payers/PayerTable";
import { usePool } from "@/context/PoolContext";

type ActivePayer = ShareFragmentFragment & { isActive?: boolean };

export default function PoolPayers() {
  const { pool } = usePool();
  const [payers] = useList<ActivePayer>(
    pool.shares.map((s) => ({
      ...s,
      isActive: false,
    })),
  );

  return (
    <ContentCard
      title={"Earnings From"}
      flex="1"
      bodyProps={{ flex: "1", overflowY: "auto", p: "0" }}
    >
      <PayerTable payers={payers} containerProps={{ flex: "1" }} />

      {/*
        <ShareItem
            key={index}
            onMouseOut={() => setInactive(index)}
            onMouseMove={() => setActive(index)}
            share={share}
            isActive={share.isActive}
        />
*/}
    </ContentCard>
  );
}
