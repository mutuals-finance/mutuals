import { Button, Link, Center, Icon, EmptyStateCard } from "@mutuals/ui";
import { HiViewGridAdd } from "react-icons/hi";
import React from "react";

export default function PoolListEmptyState() {
  return (
    <EmptyStateCard
      title="Start receiving funds"
      description="Add a new payment pool to get started"
      icon={
        <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
          <Icon size={"md"}>
            <HiViewGridAdd />
          </Icon>
        </Center>
      }
    >
      <Link asChild={true} href={"/pool/new"}>
        <Button size={"sm"}>Create Payment Pool</Button>
      </Link>
    </EmptyStateCard>
  );
}
