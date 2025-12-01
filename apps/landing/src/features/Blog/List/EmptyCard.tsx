import {
  Button,
  Center,
  EmptyStateCard,
  EmptyStateCardProps,
  Icon,
  Link,
} from "@mutuals/ui";
import { LuConstruction } from "react-icons/lu";
import React from "react";

export type BlogListEmptyCardProps = Omit<
  EmptyStateCardProps,
  "children" | "title"
> & {
  title?: EmptyStateCardProps["title"];
};

export default function BlogListEmptyCard({
  title = "This story is in the works",
  description = "We're crafting something thoughtful here. Check back soon to read what we've been working on.",
  colorPalette = "gray",
  ...props
}: BlogListEmptyCardProps) {
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
      <Link href={"mailto:hello@mutuals.finance"} asChild={true}>
        <Button size={"sm"} colorPalette={"gray"}>
          Let us know you need this
        </Button>
      </Link>
    </EmptyStateCard>
  );
}
