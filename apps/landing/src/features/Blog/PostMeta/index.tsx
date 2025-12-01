import {
  Badge,
  DateTime,
  Flex,
  Icon,
  Link,
  Stack,
  StackProps,
  Text,
} from "@mutuals/ui";
import { IoCalendarOutline } from "react-icons/io5";
import { Post } from "@mutuals/payload/payload-types";
import { LuDot } from "react-icons/lu";

export type BlogPostMetaStackProps = StackProps & {
  data?: Partial<Post>;
  size?: "xs" | "sm" | "md" | "lg";
};

export default function BlogPostMetaStack({
  data,
  size = "sm",
  ...props
}: BlogPostMetaStackProps) {
  const stackGap = {
    xs: 1,
    sm: 2,
    md: 4,
    lg: 4,
  }[size];

  const flexGap = {
    xs: 0.5,
    sm: 1,
    md: 1,
    lg: 2,
  }[size];

  const textStyle = {
    xs: "xs",
    sm: "xs",
    md: "sm",
    lg: "sm",
  }[size];

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      separator={<LuDot />}
      gap={stackGap}
      {...props}
    >
      {data?.category && typeof data.category == "object" && (
        <Link asChild={true} href={`/blog/${data.category.slug}/`}>
          <Badge size={size} colorPalette="purple">
            {data.category.name}
          </Badge>
        </Link>
      )}

      <Flex gap={flexGap} textStyle={textStyle} alignItems={"center"}>
        <Icon>
          <IoCalendarOutline />
        </Icon>
        <Text asChild={true}>
          <DateTime timestamp={data?.publishedOn} />
        </Text>
      </Flex>
    </Stack>
  );
}
