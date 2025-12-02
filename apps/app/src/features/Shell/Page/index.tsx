import React, { ReactNode } from "react";
import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
  VStack,
  Breadcrumbs,
  type BreadcrumbsProps,
} from "@mutuals/ui";

export interface ShellPageProps extends Omit<BoxProps, "title"> {
  breadcrumbsProps?: BreadcrumbsProps;
  headingProps?: HeadingProps;
  descriptionProps?: TextProps;
  headerContainerProps?: ContainerProps;
  title?: string | ReactNode;
  description?: string | ReactNode;
  breadcrumbsEnabled?: boolean;
}

export default function Page({
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
          my={"12"}
          maxW={"7xl"}
          {...headerContainerProps}
        >
          <VStack gap={"6"} mb={"6"} alignItems={"flex-start"}>
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
              <Text
                textStyle={"lg"}
                maxW={"xl"}
                color={"fg.subtle"}
                {...descriptionProps}
              >
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
