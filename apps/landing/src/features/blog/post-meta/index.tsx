import type { Post } from "@mutuals/payload/payload-types";
import {
  type ConditionalValue,
  DateTime,
  Link,
  Stack,
  type StackProps,
  Text,
} from "@mutuals/ui";

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

  const _badgeSize = {
    xs: "md",
    sm: "lg",
    md: "lg",
    lg: "lg",
  }[size] as ConditionalValue<"sm" | "md" | "lg" | "xs">;

  const badgeTextStyle = {
    xs: "2xs",
    sm: "xs",
    md: "sm",
    lg: "sm",
  }[size];

  const textStyle = {
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  }[size];

  return (
    <Stack
      align={"center"}
      direction={"row"}
      gap={stackGap}
      justify={"space-between"}
      {...props}
    >
      {data?.category && typeof data.category === "object" && (
        <Link asChild={true} href={`/blog/${data.category.slug}/`}>
          <Text
            colorPalette={"brand"}
            textStyle={badgeTextStyle}
            variant={"subtag"}
          >
            {data.category.name}
          </Text>
        </Link>
      )}

      <Text asChild={true} color={"fg.muted"} textStyle={textStyle}>
        <DateTime timestamp={data?.publishedOn} />
      </Text>
    </Stack>
  );
}
