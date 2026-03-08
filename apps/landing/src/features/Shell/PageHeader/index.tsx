import { itemVariants } from "@/components/MotionBoxWrapper";
import {
  type BoxProps,
  type HeadingProps,
  type ContainerProps,
  type BadgeProps,
  Box,
  Heading,
  Container,
  Badge,
  MotionBox,
} from "@mutuals/ui";

interface PageHeaderProps extends BoxProps {
  tag?: string;
  headingProps?: HeadingProps;
  containerProps?: ContainerProps;
  tagProps?: BadgeProps;
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
          mt={{ base: "6", lg: "12" }}
          mb={{ base: "6", lg: "12" }}
          {...containerProps}
        >
          <Box maxW={"xl"} mx={{ lg: "auto" }}>
            {!!tag && (
              <MotionBox variants={itemVariants} asChild={true}>
                <Badge
                  size={"lg"}
                  mb={"6"}
                  textStyle={"xs"}
                  variant={"gradient"}
                  colorPalette="brand"
                  {...tagProps}
                >
                  {tag}
                </Badge>{" "}
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
