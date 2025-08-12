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
    <VStack
      gap={"4"}
      textAlign={{ base: "left", lg: "left" }}
      alignItems={"stretch"}
      flex={1}
      {...props}
    >
      <Heading
        as={"h1"}
        textStyle={{ base: "4xl", lg: "5xl" }}
        {...headingProps}
      >
        {heading}
      </Heading>

      <Text textStyle={{ lg: "lg" }} color={"fg.subtle"}>
        {description}
      </Text>

      <RouterTabs size={{ base: "md", lg: "lg" }} tabs={tabs}>
        {children}
      </RouterTabs>
    </VStack>
  );
}
