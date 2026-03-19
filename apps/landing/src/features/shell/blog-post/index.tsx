import {
  Badge,
  Box,
  type BoxProps,
  Container,
  type ContainerProps,
  Heading,
  type HeadingProps,
  MotionBox,
  type TagProps,
} from "@mutuals/ui";
import { itemVariants } from "@/components/motion-box-wrapper";

interface ShellBlogPostProps extends BoxProps {
  afterContent?: React.ReactNode;
  containerProps?: ContainerProps;
  headingProps?: HeadingProps;
  tag?: string;
  tagProps?: TagProps;
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
    <Box as="header" position={"relative"} pt={"20"} {...props}>
      <Container
        maxW={"6xl"}
        mb={{ base: "6", lg: "12" }}
        mt={{ base: "6", lg: "12" }}
        {...containerProps}
      >
        <Box maxW={"xl"} mx={{ lg: "auto" }}>
          {!!tag && (
            <MotionBox asChild={true} variants={itemVariants}>
              <Badge
                colorPalette={"brand"}
                textStyle={"xs"}
                variant={"gradient"}
              >
                {tag}
              </Badge>
            </MotionBox>
          )}
          <MotionBox asChild={true} variants={itemVariants}>
            <Heading
              as="h1"
              textStyle={{ base: "4xl", md: "5xl" }}
              {...headingProps}
            >
              {children}
            </Heading>
          </MotionBox>
        </Box>

        {afterContent}
      </Container>
    </Box>
  );
}
