import { Button, ButtonProps, Center, Icon, Link } from "@mutuals/ui";
import React from "react";
import EmptyCard, { type EmptyCardProps } from "@/components/EmptyCard";
import { LuConstruction } from "react-icons/lu";

export type FeatureUpcomingProps = Omit<
  EmptyCardProps,
  "children" | "title"
> & {
  title?: EmptyCardProps["title"];
  actionProps?: ButtonProps;
};

export default function FeatureUpcoming({
  actionProps,
  title = "Coming soon",
  description = "This feature is currently planned or already in the development process.",
  colorPalette = "gray",
  ...props
}: FeatureUpcomingProps) {
  return (
    <EmptyCard
      title={title}
      description={description}
      colorPalette={colorPalette}
      icon={
        <Center
          bg={"colorPalette.muted"}
          color={"colorPalette.fg"}
          p={"4"}
          rounded={"xl"}
        >
          <Icon size={"md"}>
            <LuConstruction />
          </Icon>
        </Center>
      }
      {...props}
    >
      {actionProps && <Button size={"sm"} variant="outline" {...actionProps} />}
      <Link href={"mailto:hello@mutuals.finance"} asChild={true}>
        <Button size={"sm"} colorPalette={"gray"}>
          Let Us Know You Need This
        </Button>
      </Link>
    </EmptyCard>
  );
}
