"use client";

import { Pagination } from "@/components/pagination";
import { PageMapItem } from "nextra";
import { usePathname } from "next/navigation";
import { normalizePages } from "nextra/normalize-pages";

export type MDXPaginationProps = { pageMap: PageMapItem[] }; //Omit<EvaluateResult, "default">;

export function MDXPagination({ pageMap }: MDXPaginationProps) {
  const pathname = usePathname();
  const { flatDocsDirectories, activeIndex } = normalizePages({
    list: pageMap,
    route: pathname,
  });

  const previous =
    activeIndex > 0 ? flatDocsDirectories[activeIndex - 1] : null;
  const next =
    activeIndex < flatDocsDirectories.length - 1
      ? flatDocsDirectories[activeIndex + 1]
      : null;

  return (
    <Pagination
      mt="20"
      gap="8"
      previous={
        previous
          ? {
              title: String(previous.title ?? previous.name),
              url: previous.route,
            }
          : null
      }
      next={
        next
          ? { title: String(next.title ?? next.name), url: next.route }
          : null
      }
    />
  );
}
