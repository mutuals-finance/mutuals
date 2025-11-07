import { Card, EmptyState, EmptyStateProps, Group } from "@mutuals/ui";
import React, { PropsWithChildren } from "react";

export type EmptyCardProps = Omit<Card.RootProps, "children"> &
  PropsWithChildren<{
    title: EmptyStateProps["title"];
    description?: EmptyStateProps["description"];
    icon?: EmptyStateProps["icon"];
    emptyStateProps?: Omit<EmptyStateProps, "title" | "description" | "icon">;
  }>;

export default function EmptyCard({
  emptyStateProps,
  title,
  description,
  icon,
  colorPalette = "gray",
  children,
  ...props
}: EmptyCardProps) {
  return (
    <Card.Root
      size={"sm"}
      bg={"bg"}
      rounded={"4xl"}
      colorPalette={colorPalette}
      {...props}
    >
      <Card.Body>
        <EmptyState
          icon={icon}
          title={title}
          description={description}
          size={"sm"}
          colorPalette={colorPalette}
          {...emptyStateProps}
        >
          <Group>{children}</Group>
        </EmptyState>
      </Card.Body>
    </Card.Root>
  );
}
