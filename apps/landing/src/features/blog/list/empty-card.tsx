import {
  Button,
  Center,
  EmptyStateCard,
  type EmptyStateCardProps,
  Icon,
  Link,
} from "@mutuals/ui";
import { LuConstruction } from "react-icons/lu";

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
      colorPalette={colorPalette}
      description={description}
      icon={
        <Center
          bg={"colorPalette.muted"}
          color={"colorPalette.fg"}
          p={"4"}
          rounded={"l3"}
        >
          <Icon size={"md"}>
            <LuConstruction />
          </Icon>
        </Center>
      }
      title={title}
      {...props}
    >
      <Link asChild={true} href={"mailto:hello@mutuals.finance"}>
        <Button colorPalette={"gray"} size={"sm"}>
          Let us know you need this
        </Button>
      </Link>
    </EmptyStateCard>
  );
}
