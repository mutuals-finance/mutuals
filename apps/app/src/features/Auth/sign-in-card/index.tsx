import {
  Button,
  type ButtonProps,
  Center,
  EmptyStateCard,
  type EmptyStateCardProps,
  Icon,
} from "@mutuals/ui";
import { MdAccountBox } from "react-icons/md";
import CallbackLinkButton from "@/components/callback-link-button";

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
      description={description}
      icon={
        <Center bg={"bg.muted"} color={"fg"} p={"4"} rounded={"xl"}>
          <Icon size={"md"}>
            <MdAccountBox />
          </Icon>
        </Center>
      }
      title={title}
      w={"full"}
      {...props}
    >
      {actionProps && <Button size={"sm"} variant="outline" {...actionProps} />}
      <CallbackLinkButton size={"sm"}>Sign in</CallbackLinkButton>
    </EmptyStateCard>
  );
}
