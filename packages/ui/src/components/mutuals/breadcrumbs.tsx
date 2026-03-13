"use client";

import { ReactNode, useCallback, useMemo } from "react";
import { useParams, usePathname } from "next/navigation";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
  type BreadcrumbRootProps,
} from "../ui/breadcrumb";
import {
  MenuRoot,
  MenuContent,
  MenuItem,
  MenuTrigger,
  MenuPositioner,
  Portal,
  useBreakpointValue,
  type BreadcrumbLinkProps,
} from "@chakra-ui/react";
import { Link } from "./link";
import { LuChevronDown } from "react-icons/lu";

function formatToTitleCase(value: string) {
  return value.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase(),
  );
}

type BreadcrumbItem = { href: string; children: ReactNode };

const BreadcrumbMenuTrigger = ({
  triggerItem,
  menuItems,
}: {
  triggerItem: BreadcrumbItem;
  menuItems: BreadcrumbItem[];
}) => (
  <MenuRoot>
    <MenuTrigger asChild={true}>
      <BreadcrumbLink as="button" gap={"0.5"}>
        {triggerItem.children}
        <LuChevronDown />
      </BreadcrumbLink>
    </MenuTrigger>
    <Portal>
      <MenuPositioner>
        <MenuContent>
          {[triggerItem, ...menuItems].map((item) => (
            <MenuItem key={item.href} value={item.href} asChild>
              <Link href={item.href} unstyled={true} w="full">
                {item.children}
              </Link>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuPositioner>
    </Portal>
  </MenuRoot>
);

type ResponsiveMaxItems =
  | number
  | Partial<Record<"base" | "sm" | "md" | "lg" | "xl" | "2xl", number>>;

export type BreadcrumbsProps = Omit<
  BreadcrumbsContentProps,
  "items" | "maxItems"
> & {
  overwrite?: Record<string, ReactNode>;
  maxItems?: ResponsiveMaxItems;
};

export function Breadcrumbs({
  overwrite,
  maxItems = { base: 3, sm: 4, md: 6, lg: 8 },
  ...props
}: BreadcrumbsProps) {
  const pathname = usePathname();
  const params = useParams<Record<string, string>>();

  const resolvedMaxItems =
    useBreakpointValue(
      typeof maxItems === "number" ? { base: maxItems } : maxItems,
    ) ?? 0;

  const formatOverwrite = useCallback(
    (path: string) => {
      const param = Object.keys(params).find(
        (key) => decodeURIComponent(params[key] ?? "") === path,
      );
      return overwrite?.[param ?? path];
    },
    [overwrite, params],
  );

  const items = useMemo(() => {
    const segments = pathname.split("?")[0]?.split("/").filter(Boolean) ?? [];

    const crumbs = segments
      .map((path, idx) => ({
        href: "/" + segments.slice(0, idx + 1).join("/"),
        children: formatOverwrite(path) ?? formatToTitleCase(path),
      }))
      .filter((item) => item.children !== false);

    return [{ href: "/", children: "Home" }, ...crumbs];
  }, [pathname, formatOverwrite]);

  return (
    <BreadcrumbsContent items={items} maxItems={resolvedMaxItems} {...props} />
  );
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
  if (currentPage || !href) {
    return <BreadcrumbCurrentLink {...props}>{children}</BreadcrumbCurrentLink>;
  }

  return (
    <BreadcrumbLink asChild={true} {...props}>
      <Link href={href} variant={"plain"}>
        {children}
      </Link>
    </BreadcrumbLink>
  );
}

export type BreadcrumbsContentProps = BreadcrumbRootProps & {
  items: BreadcrumbItem[];
  maxItems?: number;
};

export function BreadcrumbsContent({
  items,
  maxItems = 0,
  ...props
}: BreadcrumbsContentProps) {
  const needsEllipsis = maxItems > 0 && items.length > maxItems;
  const lastItem = items[items.length - 1]!;

  return (
    <BreadcrumbRoot {...props}>
      {needsEllipsis
        ? [
            <BreadcrumbsContentItem key={items[0]!.href} href={items[0]!.href}>
              {items[0]!.children}
            </BreadcrumbsContentItem>,
            <BreadcrumbMenuTrigger
              key="menu-dropdown"
              triggerItem={items[1]!}
              menuItems={items.slice(2, -1)}
            />,
            <BreadcrumbsContentItem
              key={lastItem.href}
              href={lastItem.href}
              currentPage
            >
              {lastItem.children}
            </BreadcrumbsContentItem>,
          ]
        : items.map((item, i) => (
            <BreadcrumbsContentItem
              key={item.href}
              href={item.href}
              currentPage={i === items.length - 1}
            >
              {item.children}
            </BreadcrumbsContentItem>
          ))}
    </BreadcrumbRoot>
  );
}
