import {
  Button,
  type ButtonProps,
  Center,
  EmptyStateCard,
  type EmptyStateCardProps,
  Icon,
  Link,
} from "@mutuals/ui";
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
      colorPalette={colorPalette}
      description={description}
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
      title={title}
      {...props}
    >
      {actionProps && <Button size={"sm"} variant="outline" {...actionProps} />}
      <Link asChild={true} href={"mailto:hello@mutuals.finance"}>
        <Button colorPalette={"gray"} size={"md"}>
          Let us know you need this
        </Button>
      </Link>
    </EmptyStateCard>
  );
}
