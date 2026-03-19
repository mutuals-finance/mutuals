import { Box, type BoxProps } from "@mutuals/ui";

export type BlogListRootProps = BoxProps;

export default function BlogListRoot({
  children,
  ...props
}: BlogListRootProps) {
  return <Box {...props}>{children}</Box>;
}
