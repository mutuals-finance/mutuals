import {
  Badge,
  type BadgeProps,
  Box,
  type BoxProps,
  Container,
  type ContainerProps,
  Heading,
  type HeadingProps,
  MotionBox,
} from "@mutuals/ui";
import { itemVariants } from "@/components/motion-box-wrapper";

interface PageHeaderProps extends BoxProps {
  afterContent?: React.ReactNode;
  containerProps?: ContainerProps;
  headingProps?: HeadingProps;
  tag?: string;
  tagProps?: BadgeProps;
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
    <Box
      as="header"
      position={"relative"}
      pt={"20"}
      textAlign={{ lg: "center" }}
      {...props}
    >
      <Container
        maxW={"7xl"}
        mb={{ base: "6", lg: "12" }}
        mt={{ base: "6", lg: "12" }}
        {...containerProps}
      >
        <Box maxW={"xl"} mx={{ lg: "auto" }}>
          {!!tag && (
            <MotionBox asChild={true} variants={itemVariants}>
              <Badge
                colorPalette="brand"
                mb={"6"}
                size={"lg"}
                textStyle={"xs"}
                variant={"gradient"}
                {...tagProps}
              >
                {tag}
              </Badge>{" "}
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
