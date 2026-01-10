import { Stack } from "@mutuals/ui";
import { SidebarEnd } from "@/components/layout/sidebar";
import { TOC } from "@/components/toc";
import type { FC, PropsWithChildren } from "react";
import { EvaluateResult } from "nextra";
import { getPageMap } from "nextra/page-map";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import { EditPageButton } from "@/components/edit-page-button";

export const PageWrapper: FC<
  PropsWithChildren<Omit<EvaluateResult, "default">>
> = async ({ children, ...result }) => {
  const pageMap = await getPageMap();
  return (
    <>
      <Stack
        flex="1"
        w="full"
        px={{ md: "12" }}
        py="6"
        overflow="auto"
        minHeight="var(--content-height)"
      >
        {children}
      </Stack>

      <SidebarEnd
        id="toc"
        visibility={result.toc.length === 0 ? "hidden" : undefined}
      >
        <TOC pageMap={pageMap} {...result} />
        <Stack borderTopWidth="1px" pt="4" align="stretch" gap={"0.5"}>
          <EditPageButton
            pageMap={pageMap}
            editUrl={`https://github.com/mutuals-finance/mutuals/tree/main/apps/docs/content`}
          />
          <ScrollToTopButton />
        </Stack>
      </SidebarEnd>
    </>
  );
};
