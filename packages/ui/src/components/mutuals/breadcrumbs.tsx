"use client";

import { PropsWithChildren, ReactNode, useCallback, useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
  type BreadcrumbRootProps,
} from "../ui/breadcrumb";
import { Link } from "./link";
import { BreadcrumbLinkProps } from "@chakra-ui/react";

function formatToTitleCase(value: string) {
  return value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export type BreadcrumbsProps = Omit<BreadcrumbsContentProps, "items"> & {
  overwrite?: { [key: string]: ReactNode };
};

export function Breadcrumbs({ overwrite, ...props }: BreadcrumbsProps) {
  // Gives us ability to load the current route details
  const pathname = usePathname();

  const params = useParams<any>();

  const formatOverwrite = useCallback(
    (path: string) => {
      const param = Object.keys(params).find(
        (key) => decodeURIComponent(params[key]) == path,
      );

      // 1. check if route param matches overwrite key
      // 2. check if route path matches overwrite key
      return overwrite?.[param ?? path];
    },
    [overwrite, params],
  );

  const items = useMemo(() => {
    const asPathWithoutQuery = pathname.split("?")[0] ?? "";

    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const _items = asPathNestedRoutes
      .map((path, idx) => {
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");

        const children = formatOverwrite(path) ?? formatToTitleCase(path);
        return { href, children };
      })
      .filter((v) => v.children !== false);

    return [{ href: "/", children: "Home" }, ..._items];
  }, [pathname, formatOverwrite]);

  return <BreadcrumbsContent items={items} {...props} />;
}

export type BreadcrumbsContentItemProps = BreadcrumbLinkProps & {
  currentPage?: boolean;
};

export function BreadcrumbsContentItem({
  children,
  currentPage,
  href,
  ...props
}: BreadcrumbsContentItemProps) {
  return !currentPage && !!href ? (
    <BreadcrumbLink asChild={true} {...props}>
      <Link href={href} unstyled={true}>
        {children}
      </Link>
    </BreadcrumbLink>
  ) : (
    <BreadcrumbCurrentLink {...props}>{children}</BreadcrumbCurrentLink>
  );
}

export type BreadcrumbsContentProps = BreadcrumbRootProps & {
  items: PropsWithChildren<{ href: string }>[];
};

export function BreadcrumbsContent({
  items,
  ...props
}: BreadcrumbsContentProps) {
  return (
    <BreadcrumbRoot {...props}>
      {items.map(function ({ children, href, ...innerProps }, i) {
        const currentPage = i === items.length - 1;

        return (
          <BreadcrumbsContentItem
            key={`${href}-${i}`}
            currentPage={currentPage}
            href={href}
            {...innerProps}
          >
            {children}
          </BreadcrumbsContentItem>
        );
      })}
    </BreadcrumbRoot>
  );
}
