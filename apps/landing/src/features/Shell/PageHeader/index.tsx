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
import GridBg from "@/components/GridBg";

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
      <Box as="header" pt={"20"} position={"relative"} {...props}>
        <GridBg />

        <Container maxW={"7xl"} my={"12"} {...containerProps}>
          <Box maxW={"xl"}>
            {!!tag && (
              <Text textStyle="2xl" mb={"8"} {...tagProps}>
                {tag}
              </Text>
            )}

            <Heading
              textStyle={{ base: "5xl", md: "6xl" }}
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
