"use client";

import {
  Box,
  BoxProps,
  IconButton,
  Portal,
  Stack,
  HStack,
  StackProps,
  chakra,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  DrawerRootProps,
  Show,
  Link,
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
  BreadcrumbLink,
} from "@mutuals/ui";
import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import { usePathname } from "next/navigation";
import type { PageMapItem } from "nextra";
import { normalizePages } from "nextra/normalize-pages";
import { useConfig } from "@/context";

interface TreeNode {
  id: string;
  name: string;
  href?: string;
  external?: boolean;
  children?: TreeNode[];
}

export interface SidebarProps extends BoxProps {
  pageMap: PageMapItem[];
}

const convertToTreeNodes = (
  items: ReturnType<typeof normalizePages>["docsDirectories"],
): TreeNode[] =>
  items.map((item) => {
    const route = item.route || ("href" in item ? (item.href as string) : "");
    const title =
      typeof item.title === "string" ? item.title : String(item.title ?? "");

    return {
      id: route || title,
      name: title,
      href: route,
      external: "href" in item && typeof item.href === "string",
      ...("children" in item &&
        item.children.length > 0 && {
          children: convertToTreeNodes(item.children),
        }),
    };
  });

const SideNavItem = (props: StackProps) => {
  return (
    <HStack
      py="1.5"
      ps="4"
      pe="3"
      rounded="sm"
      color="fg.muted"
      _hover={{
        layerStyle: "fill.subtle",
      }}
      _currentPage={{
        colorPalette: "colorPalette",
        fontWeight: "medium",
        layerStyle: "fill.subtle",
      }}
      {...props}
    />
  );
};

interface NavItemProps {
  node: TreeNode;
  pathname: string;
  isTopLevel?: boolean;
}

const NavItem: FC<NavItemProps> = ({ node, pathname, isTopLevel }) => {
  const isActive = pathname === node.href;
  const hasChildren = !!node.children?.length;
  const isChildActive =
    hasChildren &&
    node.children!.some(
      (c) => pathname === c.href || pathname.startsWith(c.href + "/"),
    );
  const [open, setOpen] = useState(isActive || isChildActive);

  if (isTopLevel && hasChildren) {
    return (
      <Stack gap="2" mt="4" _first={{ mt: 0 }}>
        <HStack ps="4" fontWeight="semibold">
          {node.name}
        </HStack>
        <Stack gap="1px">
          {node.children!.map((c) => (
            <NavItem key={c.id} node={c} pathname={pathname} />
          ))}
        </Stack>
      </Stack>
    );
  }

  if (hasChildren) {
    return (
      <Stack gap="1px">
        <SideNavItem
          as="button"
          w="full"
          cursor="pointer"
          onClick={() => setOpen(!open)}
        >
          {node.name}
          <Box
            as={IoChevronForward}
            ms="auto"
            transform={open ? "rotate(90deg)" : undefined}
            transition="transform 0.2s"
          />
        </SideNavItem>
        {open && (
          <Stack gap="1px" ps="3">
            {node.children!.map((c) => (
              <NavItem key={c.id} node={c} pathname={pathname} />
            ))}
          </Stack>
        )}
      </Stack>
    );
  }

  return (
    <SideNavItem asChild={true}>
      <Link
        href={node.href!}
        external={node.external}
        aria-current={isActive ? "page" : undefined}
      >
        {node.name}
      </Link>
    </SideNavItem>
  );
};

const Sidenav: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();
  const { activePath } = normalizePages({ list: pageMap, route: pathname });
  const nodes = convertToTreeNodes(activePath[1]?.children || []);

  return (
    <Stack gap="0.5">
      {nodes.map((n) => (
        <NavItem key={n.id} node={n} pathname={pathname} isTopLevel />
      ))}
    </Stack>
  );
};

const SidebarContainer: FC<BoxProps & { children: ReactNode }> = ({
  children,
  ...props
}) => (
  <Box
    as="aside"
    position="sticky"
    top="var(--header-height)"
    flexShrink="0"
    height="var(--content-height)"
    overflowY="auto"
    overscrollBehavior="contain"
    {...props}
  >
    {children}
  </Box>
);

export function SidebarStart({ pageMap, ...props }: SidebarProps) {
  const { normalizePagesResult } = useConfig();

  return (
    <Show when={!!normalizePagesResult.activeThemeContext.sidebar}>
      <SidebarContainer
        py={"6"}
        w="64"
        hideBelow="md"
        textStyle="sm"
        {...props}
      >
        <Sidenav pageMap={pageMap} />
      </SidebarContainer>
    </Show>
  );
}

export function SidebarEnd({ children, ...props }: BoxProps) {
  const { normalizePagesResult } = useConfig();
  return (
    <Show when={!!normalizePagesResult.activeThemeContext.toc}>
      <SidebarContainer py={"6"} w="52" hideBelow="xl" {...props}>
        <Stack gap="4" align="stretch" w={"full"}>
          {children}
        </Stack>
      </SidebarContainer>
    </Show>
  );
}

const MobileMenuButton = chakra("button", {
  base: {
    display: "flex",
    px: "4",
    py: "2",
    gap: "2",
    w: "full",
    hideFrom: "md",
    fontSize: "md",
    alignItems: "center",
    color: "fg",
    position: "sticky",
    zIndex: "10",
    top: "var(--header-height)",
    borderBottom: "1px solid",
    borderColor: "border.subtle",
    cursor: "pointer",
    bg: "bg",
  },
});

export function MobileSidebarNav({
  pageMap,
  ...props
}: SidebarProps & Omit<DrawerRootProps, "children">) {
  const { normalizePagesResult } = useConfig();

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const { activePath } = normalizePages({ list: pageMap, route: pathname });

  const breadcrumbItems = activePath
    .filter(
      (item, i) => i === 0 || !item.children?.length || item.route === pathname,
    )
    .slice(0, 3);

  useEffect(() => {
    if (pathnameRef.current !== pathname) setIsOpen(false);
    pathnameRef.current = pathname;
  }, [pathname]);

  const closeMenu = () => setIsOpen(false);

  return (
    <Show when={normalizePagesResult.activeThemeContext.sidebar}>
      <DrawerRoot
        open={isOpen}
        placement="bottom"
        onPointerDownOutside={closeMenu}
        onEscapeKeyDown={closeMenu}
        onOpenChange={(e) => setIsOpen(e.open)}
        {...props}
      >
        <DrawerTrigger asChild={true}>
          <MobileMenuButton aria-label="Open menu">
            <AiOutlineMenu />
            <BreadcrumbRoot separator={<AiOutlineRight />}>
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                const isContainer =
                  item.children?.length && item.route !== pathname;

                if (isLast) {
                  return (
                    <BreadcrumbCurrentLink key={item.route}>
                      {item.title}
                    </BreadcrumbCurrentLink>
                  );
                }

                if (isContainer) {
                  return (
                    <BreadcrumbCurrentLink key={item.route} as="span">
                      {item.title}
                    </BreadcrumbCurrentLink>
                  );
                }

                return (
                  <BreadcrumbLink key={item.route} asChild>
                    <Link href={item.route}>{item.title}</Link>
                  </BreadcrumbLink>
                );
              })}
            </BreadcrumbRoot>
          </MobileMenuButton>
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerContent borderTopRadius="lg" maxH="var(--content-height)">
            <DrawerCloseTrigger asChild>
              <IconButton size="sm" variant="ghost">
                <AiOutlineClose />
              </IconButton>
            </DrawerCloseTrigger>
            <DrawerBody
              display="flex"
              flexDir="column"
              gap="6"
              pt="12"
              pb={"4"}
              flex="1"
            >
              <Sidenav pageMap={pageMap} />
            </DrawerBody>
          </DrawerContent>
        </Portal>
      </DrawerRoot>
    </Show>
  );
}
