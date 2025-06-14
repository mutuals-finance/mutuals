import {
  type BoxProps,
  type HeadingProps,
  Box,
  Heading,
  Container,
  Tag,
} from "@mutuals/ui";

interface PageHeaderProps extends BoxProps {
  tag?: string;
  headingProps?: HeadingProps;
}

export default function ShellPageHeader({
  children,
  tag,
  headingProps,
  ...props
}: PageHeaderProps) {
  return (
    <Box as="header" pt={"20"} {...props}>
      <Container my="20" textAlign={"center"} maxW={"2xl"}>
        {!!tag && (
          <Tag size="lg" colorPalette={"purple"} mb={"6"}>
            {tag}
          </Tag>
        )}

        <Heading size={{ base: "5xl", lg: "5xl" }} as="h1" {...headingProps}>
          {children}
        </Heading>
      </Container>
    </Box>
  );
}
