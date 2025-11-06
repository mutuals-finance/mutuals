import PoolListEmptyState from "@/features/Pool/List/EmptyState";
import { User } from "@privy-io/node";

//export type PoolListContentProps = ApolloQueryResult<MyPoolsQuery>;
export type PoolListContentProps = { user?: User };

export default function PoolListContent(_: PoolListContentProps) {
  const empty = true;

  return empty ? (
    <PoolListEmptyState />
  ) : (
    <>
      {/*
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
*/}
    </>
  );
}
