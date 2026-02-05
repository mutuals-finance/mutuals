import {
  ConditionalValue,
  DateTime,
  Link,
  Stack,
  StackProps,
  Text,
} from "@mutuals/ui";
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

  const badgeSize = {
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
      direction={"row"}
      align={"center"}
      justify={"space-between"}
      gap={stackGap}
      {...props}
    >
      {data?.category && typeof data.category == "object" && (
        <Link asChild={true} href={`/blog/${data.category.slug}/`}>
          <Text
            textStyle={badgeTextStyle}
            variant={"subtag"}
            colorPalette={"brand"}
          >
            {data.category.name}
          </Text>
        </Link>
      )}

      <Text textStyle={textStyle} color={"fg.muted"} asChild={true}>
        <DateTime timestamp={data?.publishedOn} />
      </Text>
    </Stack>
  );
}
