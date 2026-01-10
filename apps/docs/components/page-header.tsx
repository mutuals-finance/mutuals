"use client";

import { Box, Heading, Stack, Text } from "@mutuals/ui";
import { LLMSCopyWidget } from "./llms-copy-widget";
import { EvaluateResult } from "nextra";

export type PageHeaderProps = Omit<EvaluateResult, "default">;

export const PageHeader = (props: PageHeaderProps) => {
  const { title, description } = props.metadata;

  return (
    <Stack gap="4" pb="4">
      <Stack
        gap="4"
        direction={{ base: "column", md: "row" }}
        justify={{ md: "space-between" }}
        align={"flex-start"}
      >
        <Box flexShrink={"0"} order={{ md: "1" }}>
          <LLMSCopyWidget {...props} />
        </Box>

        <Heading as="h1" size="4xl" fontWeight="semibold">
          {title}
        </Heading>
      </Stack>

      <Text color="fg.muted" textStyle={"lg"}>
        {description}
      </Text>
    </Stack>
  );
};
