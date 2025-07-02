import {
  type BoxProps,
  type HeadingProps,
  type ContainerProps,
  type TagProps,
  Box,
  Heading,
  Container,
  Tag,
} from "@mutuals/ui";
import GridBg from "@/components/GridBg";

interface PageHeaderProps extends BoxProps {
  tag?: string;
  headingProps?: HeadingProps;
  containerProps?: ContainerProps;
  tagProps?: TagProps;
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
    <Box as="header" py={"20"} {...props}>
      <GridBg />
      <Container mt="20" textAlign={"center"} maxW={"2xl"} {...containerProps}>
        {!!tag && (
          <Tag
            size="lg"
            textTransform="uppercase"
            colorPalette={"purple"}
            mb={"6"}
            {...tagProps}
          >
            {tag}
          </Tag>
        )}

        <Heading size={{ base: "5xl", md: "6xl" }} as="h1" {...headingProps}>
          {children}
        </Heading>

        {afterContent}
      </Container>
    </Box>
  );
}
