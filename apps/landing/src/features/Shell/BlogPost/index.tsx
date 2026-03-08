import { itemVariants } from "@/components/MotionBoxWrapper";
import {
  type BoxProps,
  type HeadingProps,
  type ContainerProps,
  type TagProps,
  Box,
  Heading,
  Container,
  Badge,
  MotionBox,
} from "@mutuals/ui";

interface ShellBlogPostProps extends BoxProps {
  tag?: string;
  headingProps?: HeadingProps;
  containerProps?: ContainerProps;
  tagProps?: TagProps;
  afterContent?: React.ReactNode;
}

export default function ShellBlogPost({
  children,
  tag,
  headingProps,
  containerProps,
  tagProps,
  afterContent,
  ...props
}: ShellBlogPostProps) {
  return (
    <>
      <Box as="header" pt={"20"} position={"relative"} {...props}>
        <Container
          maxW={"6xl"}
          mt={{ base: "6", lg: "12" }}
          mb={{ base: "6", lg: "12" }}
          {...containerProps}
        >
          <Box maxW={"xl"} mx={{ lg: "auto" }}>
            {!!tag && (
              <MotionBox variants={itemVariants} asChild={true}>
                <Badge
                  textStyle={"xs"}
                  colorPalette={"brand"}
                  variant={"gradient"}
                >
                  {tag}
                </Badge>
              </MotionBox>
            )}
            <MotionBox variants={itemVariants} asChild={true}>
              <Heading
                textStyle={{ base: "4xl", md: "5xl" }}
                as="h1"
                {...headingProps}
              >
                {children}
              </Heading>
            </MotionBox>
          </Box>

          {afterContent}
        </Container>
      </Box>
    </>
  );
}
