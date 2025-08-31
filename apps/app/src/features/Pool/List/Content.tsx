import {
  ApolloQueryResult,
  MyPoolsQuery,
} from "@mutuals/graphql-client-nextjs";
import { SimpleGrid, Form, HStack, Input, InputGroup } from "@mutuals/ui";
import PoolCard from "@/features/Pool/Card";
import PoolListEmptyState from "@/features/Pool/List/EmptyState";
import { IoSearch } from "react-icons/io5";

export type PoolListContentProps = ApolloQueryResult<MyPoolsQuery>;

export default function PoolListContent({ data }: PoolListContentProps) {
  const empty =
    "viewerPools" in data.viewer! && data.viewer!.viewerPools!.length > 0;

  return !("viewerPools" in data.viewer!) || !empty ? (
    <PoolListEmptyState />
  ) : (
    <>
      <HStack mb={"6"} gap={"6"} alignItems={"center"}>
        <Form flex={"1"}>
          <InputGroup startElement={<IoSearch />}>
            <Input id="" placeholder="Search..." />
          </InputGroup>
        </Form>
      </HStack>

      <SimpleGrid
        templateColumns={"repeat(auto-fill, minmax(16rem, 1fr))"}
        gap={4}
      >
        {data.viewer!.viewerPools!.map((viewerPool, key) => (
          <PoolCard key={key} {...viewerPool?.pool} />
        ))}
      </SimpleGrid>
    </>
  );
}
