import {
  Card,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@mutuals/ui";

export default function PoolCardSkeleton() {
  return (
    <Card.Root variant={"outline"} size={"sm"}>
      <Card.Header>
        <Stack alignItems={"flex-start"} gap={"6"}>
          <SkeletonCircle size="16" />
          <SkeletonText lineClamp={2} />
        </Stack>
      </Card.Header>
      <Card.Body>
        <Skeleton h="6" w={"full"} />
      </Card.Body>
    </Card.Root>
  );
}
