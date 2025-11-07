import CallbackLinkButton from "@/components/CallbackLinkButton";
import { Button, ButtonProps, Center, Icon } from "@mutuals/ui";
import React from "react";
import { MdAccountBox } from "react-icons/md";
import EmptyCard, { type EmptyCardProps } from "@/components/EmptyCard";

export type AuthSignInCardProps = Omit<EmptyCardProps, "children" | "title"> & {
  title?: EmptyCardProps["title"];
  actionProps?: ButtonProps;
};

export default function AuthSignInCard({
  actionProps,
  title = "Sign in to your account",
  description = "Please sign in to continue",
  ...props
}: AuthSignInCardProps) {
  return (
    <EmptyCard
      title={title}
      description={description}
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
    </EmptyCard>
  );
}
