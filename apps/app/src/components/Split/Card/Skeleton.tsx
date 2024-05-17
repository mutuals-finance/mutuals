import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@splitfi/ui";
import React from "react";









interface SplitCardSkeletonProps {}

export default function SplitCardSkeleton({}: SplitCardSkeletonProps) {
  return (
    <Card variant={"outline"} bg={"bg.1"} size={"sm"}>
      <CardHeader as={Flex} alignItems={"center"} gap={"3"}>
        <Box flexShrink={0}>
          <SkeletonCircle size="3.2rem" />
        </Box>

        <Box flex="1" py={"6"}>
          <SkeletonText noOfLines={2} />
        </Box>
      </CardHeader>
      <CardBody>
        <SkeletonText noOfLines={2} />
      </CardBody>
      <CardFooter>
        <Skeleton height="16" w={"full"} />
      </CardFooter>
    </Card>
  );
}
