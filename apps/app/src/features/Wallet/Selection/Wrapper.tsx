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
      textAlign={{ base: "center", lg: "left" }}
      alignItems={"stretch"}
      {...props}
    >
      <Heading
        as={"h1"}
        textStyle={{ base: "4xl", lg: "5xl" }}
        {...headingProps}
      >
        {heading}
      </Heading>

      <Text textStyle={{ base: "md", lg: "lg" }} color={"fg.muted"}>
        {description}
      </Text>

      <RouterTabs size={{ base: "md", lg: "lg" }} tabs={tabs}>
        {children}
      </RouterTabs>
    </VStack>
  );
}
