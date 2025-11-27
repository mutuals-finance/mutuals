import CallbackLinkButton from "@/components/CallbackLinkButton";
import {
  Button,
  ButtonProps,
  Center,
  Icon,
  EmptyStateCard,
  type EmptyStateCardProps,
} from "@mutuals/ui";
import React from "react";
import { MdAccountBox } from "react-icons/md";

export type AuthSignInCardProps = Omit<
  EmptyStateCardProps,
  "children" | "title"
> & {
  title?: EmptyStateCardProps["title"];
  actionProps?: ButtonProps;
};

export default function AuthSignInCard({
  actionProps,
  title = "Sign in to your account",
  description = "Please sign in to continue",
  ...props
}: AuthSignInCardProps) {
  return (
    <EmptyStateCard
      title={title}
      description={description}
      w={"full"}
      icon={
        <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
          <Icon size={"md"}>
            <MdAccountBox />
          </Icon>
        </Center>
      }
      {...props}
    >
      {actionProps && <Button size={"sm"} variant="outline" {...actionProps} />}
      <CallbackLinkButton size={"sm"}>Sign in</CallbackLinkButton>
    </EmptyStateCard>
  );
}
