import { Stack, SkeletonCircle, SkeletonText, Card } from "@mutuals/ui";

export default function WalletCardSkeleton(props: Card.RootProps) {
  return (
    <Card.Root size={"sm"} {...props}>
      <Card.Header>
        <Stack gap="6" alignItems="center">
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={1} />
        </Stack>
      </Card.Header>
      <Card.Body>
        <SkeletonText noOfLines={1} />
      </Card.Body>
    </Card.Root>
  );
}
