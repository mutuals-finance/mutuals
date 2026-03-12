"use client";

import PoolListEmptyState from "@/features/Pool/List/EmptyState";
import { For, GridItem, Input, InputGroup, Form } from "@mutuals/ui";
import React from "react";

import PoolCard from "@/features/Pool/Card";
import { IoSearch } from "react-icons/io5";
import {
  UserPoolListWithOwnerAndContractFragment,
} from "@mutuals/graphql-client-nextjs";

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
