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
                  mb={"6"}
                  color={"fg.muted"}
                  textTransform={"uppercase"}
                  p={"2"}
                  bgGradient="to-r"
                  gradientFrom="brand.100"
                  gradientTo="brand.300"
                  {...tagProps}
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
