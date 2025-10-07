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
        textAlign={{ lg: "center" }}
        {...props}
      >
        <Container
          maxW={"7xl"}
          mt={{ base: "2", lg: "12" }}
          mb={{ base: "6", lg: "12" }}
          {...containerProps}
        >
          <Box maxW={"xl"} mx={{ lg: "auto" }}>
            {!!tag && (
              <Text
                textStyle={{ lg: "lg" }}
                mb={"6"}
                color={"fg.muted"}
                {...tagProps}
              >
                {tag}
              </Text>
            )}

            <Heading
              textStyle={{ base: "4xl", md: "5xl" }}
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
