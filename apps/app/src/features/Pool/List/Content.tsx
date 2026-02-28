"use client";

import PoolListEmptyState from "@/features/Pool/List/EmptyState";
import { For, GridItem, Input, InputGroup, Form } from "@mutuals/ui";
import React from "react";

import PoolCard from "@/features/Pool/Card";
import { IoSearch } from "react-icons/io5";
import {
  FragmentType,
  getFragmentData,
  UserPoolListWithOwnerAndContractFragmentDoc,
} from "@mutuals/graphql-client-nextjs";

export type PoolListContentProps = FragmentType<
  typeof UserPoolListWithOwnerAndContractFragmentDoc
>;

export default function PoolListContent(props: PoolListContentProps) {
  const pools =
    getFragmentData(UserPoolListWithOwnerAndContractFragmentDoc, props).pools ??
    [];

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
        each={pools as any[]}
        fallback={
          <GridItem gridColumn={"1 / -1"}>
            <PoolListEmptyState />
          </GridItem>
        }
      >
        {(pool) => <PoolCard key={pool.id} {...pool} />}
      </For>
    </>
  );
}
