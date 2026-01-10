"use client";

import { Pagination } from "@/components/pagination";
import { useConfig } from "@/context";
import { Show } from "@mutuals/ui";

export function MDXPagination() {
  const { normalizePagesResult } = useConfig();
  const { flatDocsDirectories, activeIndex, activeThemeContext } =
    normalizePagesResult;

  const previous =
    activeIndex > 0 ? flatDocsDirectories[activeIndex - 1] : null;
  const next =
    activeIndex < flatDocsDirectories.length - 1
      ? flatDocsDirectories[activeIndex + 1]
      : null;

  return (
    <Show when={activeThemeContext.pagination}>
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
      />{" "}
    </Show>
  );
}
