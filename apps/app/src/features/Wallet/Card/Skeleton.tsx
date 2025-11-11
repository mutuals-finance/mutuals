import {
  Stack,
  SkeletonCircle,
  SkeletonText,
  Card,
  Skeleton,
} from "@mutuals/ui";

export default function WalletCardSkeleton(props: Card.RootProps) {
  return (
    <Card.Root size={"md"} {...props}>
      <Card.Header>
        <Stack gap="4" alignItems="center">
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
