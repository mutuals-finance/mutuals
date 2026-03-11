import { Card, Wrap } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { EmptyState, EmptyStateProps } from "../ui/empty-state";

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
    <Card.Root size={"sm"} bg={"bg"} colorPalette={colorPalette} {...props}>
      <Card.Body>
        <EmptyState
          icon={icon}
          title={title}
          description={description}
          size={"sm"}
          colorPalette={colorPalette}
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
