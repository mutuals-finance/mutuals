import {
  Box,
  type BoxProps,
  Breadcrumbs,
  type BreadcrumbsProps,
  Container,
  type ContainerProps,
  Heading,
  type HeadingProps,
  Text,
  type TextProps,
  VStack,
} from "@mutuals/ui";
import type { ReactNode } from "react";

export interface ShellPageProps extends Omit<BoxProps, "title"> {
  breadcrumbsEnabled?: boolean;
  breadcrumbsProps?: BreadcrumbsProps;
  description?: string | ReactNode;
  descriptionProps?: TextProps;
  headerContainerProps?: ContainerProps;
  headingProps?: HeadingProps;
  title?: string | ReactNode;
}

export default function ShellPage({
  breadcrumbsProps,
  headerContainerProps,
  headingProps,
  descriptionProps,
  breadcrumbsEnabled = true,
  children,
  title,
  description,
  ...props
}: ShellPageProps) {
  return (
    <Box {...props}>
      {(breadcrumbsEnabled || !!title || !!description) && (
        <Container
          as={"header"}
          maxW={"7xl"}
          my={"12"}
          {...headerContainerProps}
        >
          <VStack alignItems={"flex-start"} gap={"6"} mb={"6"}>
            {breadcrumbsEnabled && <Breadcrumbs {...breadcrumbsProps} />}

            {!!title && (
              <Heading
                as={"h1"}
                textStyle={{ base: "4xl", lg: "5xl" }}
                {...headingProps}
              >
                {title}
              </Heading>
            )}
            {!!description && (
              <Text color={"fg.muted"} textStyle={"md"} {...descriptionProps}>
                {description}
              </Text>
            )}
          </VStack>
        </Container>
      )}

      {children}
    </Box>
  );
}
