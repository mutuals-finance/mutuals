import {
  Button,
  ButtonProps,
  Card,
  EmptyState,
  EmptyStateProps,
  Center,
  Group,
  Icon,
  Link,
} from "@mutuals/ui";
import React, { ReactNode } from "react";
import { MdAccountBox } from "react-icons/md";

export type AuthSiginInCardProps = Omit<Card.RootProps, "children"> & {
  children?: ReactNode;
  title?: EmptyStateProps["title"];
  description?: EmptyStateProps["description"];
  emptyStateProps?: Omit<EmptyStateProps, "title" | "description">;
  actionProps?: ButtonProps;
};
export default function AuthSiginInCard({
  emptyStateProps,
  actionProps,
  children,
  title = "Sign in to your account",
  description = "Please sign in to continue",
  ...props
}: AuthSiginInCardProps) {
  return (
    <Card.Root size={"sm"} bg={"bg"} rounded={"4xl"} {...props}>
      <Card.Body>
        <EmptyState
          icon={
            <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
              <Icon size={"md"}>
                <MdAccountBox />
              </Icon>
            </Center>
          }
          title={title}
          size={"sm"}
          description={description}
          {...emptyStateProps}
        >
          <Group>
            {actionProps && (
              <Button size={"sm"} variant="outline" {...actionProps} />
            )}
            <Link href={"/auth/login"} asChild>
              <Button size={"sm"}>Sign in</Button>
            </Link>
          </Group>
        </EmptyState>
      </Card.Body>
      {children}
    </Card.Root>
  );
}
