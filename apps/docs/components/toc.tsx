"use client";

import { EvaluateResult, PageMapItem } from "nextra";
import type { FC } from "react";
import { Link, Stack, Text, Box, chakra } from "@mutuals/ui";
import { usePathname } from "next/navigation";

const TocLink = chakra(Link, {
  base: {
    textStyle: "sm",
    fontWeight: "400",
    ms: "calc(1rem * var(--toc-depth))",
  },
});

export const TOC: FC<
  { pageMap: PageMapItem[] } & Pick<EvaluateResult, "toc">
> = ({ toc }) => {
  //const activeItem = useScrollSpy(items.map((entry) => entry.url));

  const pathname = usePathname();
  return (
    <Box as="nav" textStyle="sm">
      <Text fontWeight="medium">On this page</Text>
      <Stack mt="2">
        {toc.map((item, index) => (
          <TocLink
            data-toc
            id={item.id}
            key={item.id}
            href={`${pathname}/#${item.id}`}
            css={{ "--toc-depth": item.depth - 2 }}
          >
            {item.value}
          </TocLink>
        ))}
      </Stack>
    </Box>
  );
};
