import { Heading, HeadingProps, VStack, StackProps, Text } from "@mutuals/ui";
import React from "react";
import RouterTabs, { RouterTabProps } from "@/components/RouterTabs";

interface WalletSelectionWrapperProps extends StackProps {
  heading?: string;
  headingProps?: HeadingProps;
  description?: string;
  tabs?: RouterTabProps[];
}

export function WalletSelectionWrapper({
  heading,
  headingProps,
  description,
  tabs,
  children,
  ...props
}: WalletSelectionWrapperProps) {
  return (
    <VStack gap={"6"} alignItems={"stretch"} {...props}>
      <Heading {...headingProps}>{heading}</Heading>

      <Text fontSize={"lg"} variant={"muted"}>
        {description}
      </Text>

      <RouterTabs size={"lg"} tabs={tabs}>
        {children}
      </RouterTabs>
    </VStack>
  );
}
