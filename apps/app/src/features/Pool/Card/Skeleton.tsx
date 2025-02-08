import {
  Box,
  Card,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@mutuals/ui";

export default function PoolCardSkeleton() {
  return (
    <Card.Root variant={"outline"} bg={"bg.1"} size={"sm"}>
      <Card.Header as={Flex} alignItems={"center"} gap={"3"}>
        <Box flexShrink={0}>
          <SkeletonCircle size="3.2rem" />
        </Box>

        <Box flex="1" py={"6"}>
          <SkeletonText noOfLines={2} />
        </Box>
      </Card.Header>
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
      <Card.Footer>
        <Skeleton height="16" w={"full"} />
      </Card.Footer>
    </Card.Root>
  );
}
