import { Heading, HeadingProps, VStack, Text } from "@splitfi/ui";
import React from "react";
import RouterTabs, { RouterTabProps } from "@/components/RouterTabs";
import { StackProps } from "@chakra-ui/react";

interface WalletSelectorWrapperProps extends StackProps {
  heading?: string;
  headingProps?: HeadingProps;
  description?: string;
  tabs?: RouterTabProps[];
}

export function WalletSelectorWrapper({
  heading,
  headingProps,
  description,
  tabs,
  children,
  ...props
}: WalletSelectorWrapperProps) {
  return (
    <VStack gap={"6"} alignItems={"stretch"} {...props}>
      <Heading size={"2xl"} {...headingProps}>
        {heading}
      </Heading>

      <Text fontSize={"lg"} variant={"label"}>
        {description}
      </Text>

      <RouterTabs tabs={tabs}>{children}</RouterTabs>
    </VStack>
  );
}
