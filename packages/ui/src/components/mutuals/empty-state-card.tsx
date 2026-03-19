import { Card, Wrap } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { EmptyState, type EmptyStateProps } from "../ui/empty-state";

export type EmptyStateCardProps = Omit<Card.RootProps, "children"> &
  PropsWithChildren<{
    title: EmptyStateProps["title"];
    description?: EmptyStateProps["description"];
    icon?: EmptyStateProps["icon"];
    emptyStateProps?: Omit<EmptyStateProps, "title" | "description" | "icon">;
  }>;

export function EmptyStateCard({
  emptyStateProps,
  title,
  description,
  icon,
  colorPalette = "gray",
  children,
  ...props
}: EmptyStateCardProps) {
  return (
    <Card.Root bg={"bg"} colorPalette={colorPalette} size={"sm"} {...props}>
      <Card.Body>
        <EmptyState
          colorPalette={colorPalette}
          description={description}
          icon={icon}
          size={"sm"}
          title={title}
          {...emptyStateProps}
        >
          <Wrap gap={"2"} justify={"center"}>
            {children}
          </Wrap>
        </EmptyState>
      </Card.Body>
    </Card.Root>
  );
}
