"use client";

import {
  type BreadcrumbLinkProps,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Portal,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useParams, usePathname } from "next/navigation";
import { type ReactNode, useCallback, useMemo } from "react";
import { LuChevronDown } from "react-icons/lu";
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
  type BreadcrumbRootProps,
} from "../ui/breadcrumb";
import { Link } from "./link";

function formatToTitleCase(value: string) {
  return value.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
}

interface BreadcrumbItem {
  children: ReactNode;
  href: string;
}

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
            <MenuItem asChild key={item.href} value={item.href}>
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
      typeof maxItems === "number" ? { base: maxItems } : maxItems
    ) ?? 0;

  const formatOverwrite = useCallback(
    (path: string) => {
      const param = Object.keys(params).find(
        (key) => decodeURIComponent(params[key] ?? "") === path
      );
      return overwrite?.[param ?? path];
    },
    [overwrite, params]
  );

  const items = useMemo(() => {
    const segments = pathname.split("?")[0]?.split("/").filter(Boolean) ?? [];

    const crumbs = segments
      .map((path, idx) => ({
        href: `/${segments.slice(0, idx + 1).join("/")}`,
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
  const lastItem = items.at(-1);

  return (
    <BreadcrumbRoot {...props}>
      {needsEllipsis
        ? [
            <BreadcrumbsContentItem href={items[0]?.href} key={items[0]?.href}>
              {items[0]?.children}
            </BreadcrumbsContentItem>,
            <BreadcrumbMenuTrigger
              key="menu-dropdown"
              menuItems={items.slice(2, -1)}
              triggerItem={items[1] as BreadcrumbItem}
            />,
            <BreadcrumbsContentItem
              currentPage
              href={lastItem?.href}
              key={lastItem?.href}
            >
              {lastItem?.children}
            </BreadcrumbsContentItem>,
          ]
        : items.map((item, i) => (
            <BreadcrumbsContentItem
              currentPage={i === items.length - 1}
              href={item.href}
              key={item.href}
            >
              {item.children}
            </BreadcrumbsContentItem>
          ))}
    </BreadcrumbRoot>
  );
}
