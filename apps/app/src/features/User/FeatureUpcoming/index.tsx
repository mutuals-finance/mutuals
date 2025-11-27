import {
  Button,
  ButtonProps,
  Center,
  Icon,
  Link,
  EmptyStateCard,
  type EmptyStateCardProps,
} from "@mutuals/ui";
import React from "react";
import { LuConstruction } from "react-icons/lu";

export type FeatureUpcomingProps = Omit<
  EmptyStateCardProps,
  "children" | "title"
> & {
  title?: EmptyStateCardProps["title"];
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
    <EmptyStateCard
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
        <Button size={"md"} colorPalette={"gray"}>
          Let us know you need this
        </Button>
      </Link>
    </EmptyStateCard>
  );
}
