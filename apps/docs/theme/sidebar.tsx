"use client";

import {
  Box,
  BoxProps,
  Breadcrumbs,
  IconButton,
  Portal,
  Stack,
  chakra,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  DrawerRootProps,
  Link,
  TreeView,
  createTreeCollection,
} from "@mutuals/ui";
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  type FC,
  type ReactNode,
} from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";
import { usePathname } from "next/navigation";
import type { PageMapItem } from "nextra";
import { normalizePages } from "nextra/normalize-pages";

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

const Sidenav: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();
  const { docsDirectories } = normalizePages({
    list: pageMap,
    route: pathname,
  });

  const collection = useMemo(
    () =>
      createTreeCollection<TreeNode>({
        nodeToValue: (node) => node.id,
        nodeToString: (node) => node.name,
        rootNode: {
          id: "ROOT",
          name: "",
          children: convertToTreeNodes(docsDirectories),
        },
      }),
    [docsDirectories],
  );

  return (
    <TreeView.Root collection={collection} defaultExpandedValue={[pathname]}>
      <TreeView.Tree>
        <TreeView.Node
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
                <TreeView.BranchIndicator>
                  <IoChevronForward />
                </TreeView.BranchIndicator>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item asChild>
                <Link
                  href={node.href!}
                  {...(node.external && { external: true })}
                >
                  <TreeView.ItemText>{node.name}</TreeView.ItemText>
                </Link>
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  );
};

const SidebarContainer: FC<BoxProps & { children: ReactNode }> = ({
  children,
  ...props
}) => (
  <Box
    className="no-bg-scrollbar"
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
  return (
    <SidebarContainer
      pe="5"
      ms="-3"
      py="8"
      width="16rem"
      hideBelow="md"
      fontSize="sm"
      {...props}
    >
      <Sidenav pageMap={pageMap} />
    </SidebarContainer>
  );
}

export function SidebarEnd({ children, ...props }: BoxProps) {
  return (
    <SidebarContainer
      pt="8"
      pb="8"
      px="2"
      width="16rem"
      hideBelow="xl"
      {...props}
    >
      <Stack gap="4" align="flex-start">
        {children}
      </Stack>
    </SidebarContainer>
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
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    if (pathnameRef.current !== pathname) setIsOpen(false);
    pathnameRef.current = pathname;
  }, [pathname]);

  const closeMenu = () => setIsOpen(false);

  return (
    <DrawerRoot
      open={isOpen}
      placement="bottom"
      onPointerDownOutside={closeMenu}
      onEscapeKeyDown={closeMenu}
      onOpenChange={(e) => setIsOpen(e.open)}
      {...props}
    >
      <DrawerTrigger asChild>
        <MobileMenuButton aria-label="Open menu">
          <AiOutlineMenu />
          <Breadcrumbs separator={<AiOutlineRight />} />
        </MobileMenuButton>
      </DrawerTrigger>
      <Portal>
        <DrawerBackdrop />
        <DrawerContent borderTopRadius="md" maxH="var(--content-height)">
          <DrawerCloseTrigger asChild>
            <IconButton size="sm" variant="ghost">
              <AiOutlineClose />
            </IconButton>
          </DrawerCloseTrigger>
          <DrawerBody display="flex" flexDir="column" gap="6" py="5" flex="1">
            <Sidenav pageMap={pageMap} />
          </DrawerBody>
        </DrawerContent>
      </Portal>
    </DrawerRoot>
  );
}
