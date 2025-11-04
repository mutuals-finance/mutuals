import CallbackLinkButton from "@/components/CallbackLinkButton";
import {
  Button,
  ButtonProps,
  Card,
  EmptyState,
  EmptyStateProps,
  Center,
  Group,
  Icon,
} from "@mutuals/ui";
import React, { ReactNode } from "react";
import { MdAccountBox } from "react-icons/md";

export type AuthSignInCardProps = Omit<Card.RootProps, "children"> & {
  children?: ReactNode;
  title?: EmptyStateProps["title"];
  description?: EmptyStateProps["description"];
  emptyStateProps?: Omit<EmptyStateProps, "title" | "description">;
  actionProps?: ButtonProps;
};
export default function AuthSignInCard({
  emptyStateProps,
  actionProps,
  children,
  title = "Sign in to your account",
  description = "Please sign in to continue",
  ...props
}: AuthSignInCardProps) {
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
            <CallbackLinkButton size={"sm"}>Sign in</CallbackLinkButton>
          </Group>
        </EmptyState>
      </Card.Body>
      {children}
    </Card.Root>
  );
}
