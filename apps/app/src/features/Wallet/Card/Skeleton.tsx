import {
  Card,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@mutuals/ui";

export default function WalletCardSkeleton(props: Card.RootProps) {
  return (
    <Card.Root size={"md"} {...props}>
      <Card.Header>
        <Stack alignItems="center" gap="4">
          <SkeletonCircle size="14" />
          <SkeletonText noOfLines={1} />
        </Stack>
      </Card.Header>
      <Card.Body>
        <Skeleton h="8" />
      </Card.Body>
    </Card.Root>
  );
}
