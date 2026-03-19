"use client";

import type { UserPoolListWithOwnerAndContractFragment } from "@mutuals/graphql-client-nextjs";
import { For, Form, GridItem, Input, InputGroup } from "@mutuals/ui";
import { IoSearch } from "react-icons/io5";
import PoolCard from "@/features/pool/card";
import PoolListEmptyState from "@/features/pool/list/empty-state";

export type PoolListContentProps = UserPoolListWithOwnerAndContractFragment;

export default function PoolListContent(props: PoolListContentProps) {
  const pools = props.pools ?? [];

  return (
    <>
      <GridItem gridColumn={"1 / -1"}>
        <Form flex={"1"}>
          <InputGroup startElement={<IoSearch />}>
            <Input id="" placeholder="Search..." />
          </InputGroup>
        </Form>
      </GridItem>

      <For
        each={pools.edges}
        fallback={
          <GridItem gridColumn={"1 / -1"}>
            <PoolListEmptyState />
          </GridItem>
        }
      >
        {(pool) => <PoolCard key={pool.node.id} {...pool.node} />}
      </For>
    </>
  );
}
