"use client";
import { EvaluateResult } from "nextra";
import type { FC } from "react";
import { Link, Stack, Text, Box, chakra } from "@mutuals/ui";

const TocLink = chakra(Link, {
  base: {
    fontSize: "sm",
    color: "fg.muted",
    _currentPage: { color: "fg", fontWeight: "medium" },
    _hover: { color: "fg" },
    ms: "calc(1rem * var(--toc-depth))",
  },
});

export const TOC: FC<Pick<EvaluateResult, "toc">> = ({ toc }) => {
  //const activeItem = useScrollSpy(items.map((entry) => entry.url));

  return (
    <Box as="nav" textStyle="sm">
      <Text fontWeight="semibold">On this page</Text>
      <Stack mt="3">
        {toc.map((item, index) => (
          <TocLink
            data-toc
            id={item.id}
            key={item.id}
            href={item.id}
            /*
            aria-current={item.id === activeItem ? "page" : undefined}
*/
            css={{ "--toc-depth": item.depth }}
          >
            {item.value}
          </TocLink>
        ))}
      </Stack>
    </Box>
  );
};
