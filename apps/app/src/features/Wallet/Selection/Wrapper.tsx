import { Heading, HeadingProps, VStack, StackProps, Text } from "@mutuals/ui";
import React from "react";
import RouterTabs, {
  RouterTabProps,
  RouterTabsProps,
} from "@/components/RouterTabs";

interface WalletSelectionWrapperProps extends StackProps {
  heading?: string;
  headingProps?: HeadingProps;
  description?: string;
  tabs?: RouterTabProps[];
  routerTabsProps?: Omit<RouterTabsProps, "tabs">;
}

export function WalletSelectionWrapper({
  heading,
  headingProps,
  description,
  tabs,
  children,
  routerTabsProps,
  ...props
}: WalletSelectionWrapperProps) {
  return (
    <VStack gap={"4"} textAlign={"left"} alignItems={"stretch"} {...props}>
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

      <RouterTabs
        size={{ base: "md", lg: "lg" }}
        tabs={tabs}
        {...routerTabsProps}
      >
        {children}
      </RouterTabs>
    </VStack>
  );
}
