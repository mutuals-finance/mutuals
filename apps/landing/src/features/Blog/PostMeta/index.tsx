import {
  DateTime,
  Flex,
  Icon,
  Link,
  Stack,
  StackProps,
  Text,
  StackSeparator,
} from "@mutuals/ui";
import { IoCalendarOutline } from "react-icons/io5";
import { Post } from "@mutuals/payload/payload-types";

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
    xs: 2,
    sm: 4,
    md: 6,
    lg: 6,
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
      separator={<StackSeparator />}
      gap={stackGap}
      {...props}
    >
      {data?.category && typeof data.category == "object" && (
        <Link
          asChild={true}
          href={`/blog/${data.category.slug}/`}
          textStyle={textStyle}
          colorPalette={"brand"}
        >
          {data.category.name}
        </Link>
      )}

      <Flex
        gap={flexGap}
        textStyle={textStyle}
        alignItems={"center"}
        color={"fg.muted"}
      >
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
