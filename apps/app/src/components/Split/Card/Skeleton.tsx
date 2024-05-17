import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  StatArrow,
  StatNumber,
  Text,
  useColorModeValue,
} from "@splitfi/ui";
import { Stat, StatLabel } from "@chakra-ui/stat";
import NextLink from "next/link";
import React from "react";
import {
  IoEllipsisHorizontal,
  IoEyeOffOutline,
  IoOpenOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import {
  FragmentType,
  useFragment,
} from "@/lib/graphql/thegraph/__generated__";
import { SplitBaseFragmentFragment } from "@/lib/graphql/thegraph/__generated__/graphql";
import { splitBaseFragment } from "@/lib/graphql/thegraph/fragments";
import { useMetadata } from "@/lib/split/hooks";
import {
  formatPrefixedAddress,
  formatUSDPrice,
  getShortNameByChainId,
  shortenAddress,
} from "@/lib/utils";

import { SplitImage } from "@/components/Split/Image";

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
