"use client";

import PoolListEmptyState from "@/features/Pool/List/EmptyState";
import { usePrivy } from "@privy-io/react-auth";
import { For, Show, GridItem } from "@mutuals/ui";
import AuthSiginInCard from "@/features/Auth/SignInCard";
import React from "react";

//export type PoolListContentProps = ApolloQueryResult<MyPoolsQuery>;

export default function PoolListContent() {
  const { authenticated } = usePrivy();

  return (
    <Show
      when={authenticated}
      fallback={
        <GridItem colSpan={{ base: 2, lg: 3 }}>
          <AuthSiginInCard
            description={
              "To view and manage your pools you must sign in to your account."
            }
          />
        </GridItem>
      }
    >
      <For
        each={[]}
        fallback={
          <GridItem colSpan={{ base: 2, lg: 3 }}>
            <PoolListEmptyState />
          </GridItem>
        }
      >
        {() => <></>}
        {/*
      <HStack mb={"6"} gap={"6"} alignItems={"center"}>
        <Form flex={"1"}>
          <InputGroup startElement={<IoSearch />}>
            <Input id="" placeholder="Search..." />
          </InputGroup>
        </Form>
      </HStack>

      {data.viewer!.viewerPools!.map((viewerPool, key) => (
        <PoolCard key={key} {...viewerPool?.pool} />
      ))}
*/}
      </For>
    </Show>
  );
}
