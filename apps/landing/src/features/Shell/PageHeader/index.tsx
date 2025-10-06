import {
  type BoxProps,
  type HeadingProps,
  type ContainerProps,
  type TextProps,
  Box,
  Heading,
  Container,
  Text,
} from "@mutuals/ui";

interface PageHeaderProps extends BoxProps {
  tag?: string;
  headingProps?: HeadingProps;
  containerProps?: ContainerProps;
  tagProps?: TextProps;
  afterContent?: React.ReactNode;
}

export default function ShellPageHeader({
  children,
  tag,
  headingProps,
  containerProps,
  tagProps,
  afterContent,
  ...props
}: PageHeaderProps) {
  return (
    <>
      <Box
        as="header"
        pt={"20"}
        position={"relative"}
        textAlign={"center"}
        {...props}
      >
        <Container maxW={"7xl"} my={"16"} {...containerProps}>
          <Box maxW={"xl"} mx={"auto"}>
            {!!tag && (
              <Text textStyle="md" mb={"6"} color={"fg.muted"} {...tagProps}>
                {tag}
              </Text>
            )}

            <Heading
              textStyle={{ base: "5xl", md: "5xl" }}
              as="h1"
              {...headingProps}
            >
              {children}
            </Heading>
          </Box>

          {afterContent}
        </Container>
      </Box>
    </>
  );
}
