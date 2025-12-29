"use client";

import { usePathname } from "next/navigation";
import type { PageMapItem } from "nextra";
import { normalizePages } from "nextra/normalize-pages";
import { useMemo, type FC } from "react";
import { Link, TreeView, createTreeCollection } from "@mutuals/ui";
import { IoChevronForward } from "react-icons/io5";

interface TreeNode {
  id: string;
  name: string;
  href?: string;
  external?: boolean;
  children?: TreeNode[];
}

export const Sidenav: FC<{ pageMap: PageMapItem[] }> = ({ pageMap }) => {
  const pathname = usePathname();
  const { docsDirectories } = normalizePages({
    list: pageMap,
    route: pathname,
  });

  const collection = useMemo(() => {
    const convertToTreeNodes = (items: typeof docsDirectories): TreeNode[] => {
      return items.map((item) => {
        const route =
          item.route || ("href" in item ? (item.href as string) : "");
        const isExternal = "href" in item && typeof item.href === "string";
        const title =
          typeof item.title === "string"
            ? item.title
            : String(item.title ?? "");

        const node: TreeNode = {
          id: route || title,
          name: title,
          href: route,
          external: isExternal,
        };

        if ("children" in item && item.children.length > 0) {
          node.children = convertToTreeNodes(item.children);
        }

        return node;
      });
    };

    return createTreeCollection<TreeNode>({
      nodeToValue: (node) => node.id,
      nodeToString: (node) => node.name,
      rootNode: {
        id: "ROOT",
        name: "",
        children: convertToTreeNodes(docsDirectories),
      },
    });
  }, [docsDirectories]);

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
                {node.external ? (
                  <Link href={node.href} external={true}>
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </Link>
                ) : (
                  <Link href={node.href!}>
                    <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  </Link>
                )}
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  );
};
