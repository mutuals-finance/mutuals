"use client";

import { Box, Heading, Stack, Text } from "@mutuals/ui";
import { LLMSCopyWidget } from "./llms-copy-widget";
import { EvaluateResult } from "nextra";

export type PageHeaderProps = Omit<EvaluateResult, "default">;

export const PageHeader = (props: PageHeaderProps) => {
  const { title, description } = props.metadata;

  return (
    <Stack gap="4" pb="4" position="relative">
      <Heading as="h1" size="4xl" fontWeight="semibold">
        {title}
      </Heading>

      <Text color="fg.muted" textStyle={"lg"}>
        {description}
      </Text>

      <Box pos="absolute" top="0" right="0" hideBelow="sm">
        <LLMSCopyWidget {...props} />
      </Box>
    </Stack>
  );
};
